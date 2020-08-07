package com.app.dao.impl;

import com.app.dao.HelloDao;
import com.app.utils.DruidUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HelloDaoImpl implements HelloDao {

    @Override
    public List getStudentByList() throws SQLException {
        Connection conn = null;         // 数据库连接
        PreparedStatement ps = null;    // 执行SQL语句接口
        ResultSet rs = null;            // 查询返回的结果
        String sql = null;              // SQL语句 - select
        List list = new ArrayList();    // 集合存储数据

        conn = DruidUtil.getInstance().getConnection();
        sql = "select * from students";
        ps = conn.prepareStatement(sql);
        rs = ps.executeQuery();         // 执行查询操作

        while(rs.next()) {              // 取出数据
            String sName = rs.getString("sName");
            String sMajor = rs.getString("sMajor");
            String sSex = rs.getString("sSex");
            Map<String, Object> map = new HashMap<>();
            map.put("sName", sName);
            map.put("sMajor", sMajor);
            map.put("sSex", sSex);
            list.add(map);              // 满足存储 - 数据格式 [{}, {}, {}, {}]
        }

        DruidUtil.getInstance().closeConnection(conn);
        return list;
    }

}
