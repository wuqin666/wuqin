package com.app.utils;

import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

// 设计模式 - 单例模式
public class DruidUtil {
    private static DataSource ds; // 数据源
    private static DruidUtil druidUtil; // 工具类对象

    // 静态代码块 - 建立druid连接池
    static {
        Properties properties = new Properties();
        InputStream is = DruidUtil.class.getClassLoader().getResourceAsStream("druid.properties");
        try {
            properties.load(is);
            ds = DruidDataSourceFactory.createDataSource(properties);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private DruidUtil() {

    }

    public static DruidUtil getInstance() {
        if (druidUtil == null) {
            druidUtil = new DruidUtil();
        }
        return druidUtil;
    }

    public Connection getConnection() throws SQLException {
        if(ds == null) {
            return null;
        }
        return  ds.getConnection();
    }

    public void closeConnection(Connection conn) throws SQLException {
        if(conn != null) {
            conn.close();
        }
    }
}
