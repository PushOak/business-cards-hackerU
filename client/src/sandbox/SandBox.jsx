import { AppBar, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItem from '../routes/components/NavItem'

export default function SandBox() {
  return (
    <>
          <div>
              <AppBar position="sticky" color="transparent">
                  <Toolbar>
                      <NavItem to="test" label="test" sx={{ color: "black" }} />
                      <NavItem to="counter" label="Counter Page" sx={{ color: "black" }} />
                      <NavItem
                          to="mydetails"
                          label="My Details Page"
                          sx={{ color: "black" }}
                      />
                      <NavItem
                          to="password"
                          label="Password Page"
                          sx={{ color: "black" }}
                      />
                      <NavItem to="todo" label="Todo Page" sx={{ color: "black" }} />
                      <NavItem to="countries" label="Countries Page" sx={{ color: "black" }} />
                      <NavItem to="render" label="Render Page" sx={{ color: "black" }} />
                      <NavItem to="get2countries" label="Get Countries" sx={{ color: "black" }} />
                  </Toolbar>
              </AppBar>
              <Container>
                  <Outlet />
              </Container>
          </div>
    </>
  )
}
