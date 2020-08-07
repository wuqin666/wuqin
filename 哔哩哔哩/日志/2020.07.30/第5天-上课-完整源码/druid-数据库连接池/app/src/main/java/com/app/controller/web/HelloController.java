package com.app.controller.web;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/hello")
public class HelloController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1.设置中文编码
        // 2.设置响应类型
        // 3.生成json数据
        // 4.输出json数据

        resp.setCharacterEncoding("utf-8");
        resp.setContentType("text/plain;charset=utf-8");
        ObjectMapper objectMapper = new ObjectMapper(); // 解析Java对象, 生成json
        Map<String,Object> map = new HashMap<>();       // 存储数据
        map.put("code", 200);
        map.put("msg", "success");
        String s = objectMapper.writeValueAsString(map);

        PrintWriter out = resp.getWriter();
        out.println(s);
        out.close();
    }
}
