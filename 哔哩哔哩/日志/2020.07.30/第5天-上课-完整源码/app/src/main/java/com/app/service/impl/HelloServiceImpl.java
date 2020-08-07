package com.app.service.impl;

import com.app.dao.HelloDao;
import com.app.dao.impl.HelloDaoImpl;
import com.app.service.HelloService;

import java.sql.SQLException;
import java.util.List;

public class HelloServiceImpl implements HelloService {

    private HelloDao helloDao = new HelloDaoImpl();

    @Override
    public List getStudentByList() throws SQLException {
        return helloDao.getStudentByList();
    }

}
