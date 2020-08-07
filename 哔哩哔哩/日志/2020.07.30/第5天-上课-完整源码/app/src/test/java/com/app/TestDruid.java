package com.app;

import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.app.utils.DruidUtil;
import org.junit.Test;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

public class TestDruid {

    // 测试数据库连接池
    @Test
    public void method1() throws Exception {
        Properties pro = new Properties(); // 读取配置文件的一个集合
        InputStream is = TestDruid.class.getClassLoader().getResourceAsStream("druid.properties");
        pro.load(is);
        DataSource ds = DruidDataSourceFactory.createDataSource(pro);
        Connection conn = ds.getConnection();
        DatabaseMetaData dmd = conn.getMetaData();
        String dbName = dmd.getDatabaseProductName();       // 数据库名
        String dbVersion = dmd.getDatabaseProductVersion(); // 数据库版本
        System.out.println(dbName + " " + dbVersion);
    }

    // 测试数据库连接池 - 工具类
    @Test
    public void method2() throws SQLException {
        Connection conn = DruidUtil.getInstance().getConnection();
        DatabaseMetaData dmd = conn.getMetaData();
        String dbName = dmd.getDatabaseProductName();       // 数据库名
        String dbVersion = dmd.getDatabaseProductVersion(); // 数据库版本
        System.out.println(dbName + " " + dbVersion);
        DruidUtil.getInstance().closeConnection(conn); // 关闭连接 - 返回到连接池
    }

    // 返回数据库中的数据
    // 返回ResultSet的结果集
    @Test
    public void method3() throws SQLException {
        Connection conn = null;         // 数据库连接
        PreparedStatement ps = null;    // 执行SQL语句接口
        ResultSet rs = null;            // 查询返回的结果
        String sql = null;              // SQL语句 - select

        conn = DruidUtil.getInstance().getConnection();
        sql = "select * from students";
        ps = conn.prepareStatement(sql);
        rs = ps.executeQuery();         // 执行查询操作

        while(rs.next()) {              // 取出数据
            String sName = rs.getString("sName");
            String sMajor = rs.getString("sMajor");
            System.out.println(sName + "  " + sMajor);
        }

        DruidUtil.getInstance().closeConnection(conn);
    }

    // 条件查询
    @Test
    public void method4() throws SQLException {
        Connection conn = null;         // 数据库连接
        PreparedStatement ps = null;    // 执行SQL语句接口
        ResultSet rs = null;            // 查询返回的结果
        String sql = null;              // SQL语句 - select

        conn = DruidUtil.getInstance().getConnection();
        sql = "select * from students where sName = ? and sMajor = ?";
        ps = conn.prepareStatement(sql);    // 把SQL语句放入到内存
        ps.setString(1, "李四");
        ps.setString(2, "软件工程");

        rs = ps.executeQuery();
        while(rs.next()) {              // 取出数据
            String sName = rs.getString("sName");
            String sMajor = rs.getString("sMajor");
            System.out.println(sName + "  " + sMajor);
        }
        DruidUtil.getInstance().closeConnection(conn);
    }

}
