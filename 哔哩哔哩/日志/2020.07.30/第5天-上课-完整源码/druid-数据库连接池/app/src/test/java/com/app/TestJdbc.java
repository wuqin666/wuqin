package com.app;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestJdbc {
    // 设置数据库属性 用户名；用户密码；驱动；连接地址
    private String driver = "com.mysql.jdbc.Driver";
    private String url = "jdbc:mysql://localhost:3306/test"; //mysql5连接地址
    private String username = "root";
    private String password = "123456";

    // 加载驱动
    public TestJdbc() {
        try {
            Class.forName(driver);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    // 获取连接 - 单元测试
    @Test
    public void method1() throws SQLException {
        Connection conn = DriverManager.getConnection(url, username, password);
        DatabaseMetaData dmd = conn.getMetaData();
        String dbName = dmd.getDatabaseProductName();       // 数据库名
        String dbVersion = dmd.getDatabaseProductVersion(); // 数据库版本
        System.out.println(dbName + " " + dbVersion);
    }
}
