package com.milfist.springbootservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

  @GetMapping(path = "/")
  public String index() {
    return "external";
  }

  @GetMapping(path = "/menu", produces = { "application/json" })
  public String customers() { // Principal principal, Model model
    return "menu";
  }

  @RequestMapping(path = "/movida", method = RequestMethod.GET, produces = {"application/json"})
  public String movida() {
    return "movida";
  }
}

