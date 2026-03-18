import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Frontend/Index'
import ShopPage from './pages/Frontend/ShopPage'
import WishlistPage from './pages/Frontend/Wishlist'
import CartPage from './pages/Frontend/Cart'
import CheckoutPage from './pages/Frontend/Checkout'
import Login from './pages/Frontend/Login'
import Register from './pages/Frontend/Register'
import Contact from './pages/Frontend/Contact'
import ProfileLayout from './Layouts/ProfileLayout'
import Profile from './pages/Frontend/Profile'
import MyOrdersPage from './pages/Frontend/Orders'
import InboxPage from './pages/Frontend/Inbox'
import AddressPage from './pages/Frontend/Address'
import AddAddressPage from './pages/Frontend/AddAddress'
import EditAddressPage from './pages/Frontend/EditAddress'
import AdminLogin from './pages/Backend/AdminLogin'
import AdminDashboard from './Layouts/DashboardLayout'
import DashboardLayout from './Layouts/DashboardLayout'
import Dashboard from './pages/Backend/Dashboard'
import AdminOrdersPage from './pages/Backend/Orders'
import AdminProductsPage from './pages/Backend/Products'
import AdminUsersPage from './pages/Backend/Users'
import AddProductPage from './pages/Backend/ProductAdd'
import EditProductPage from './pages/Backend/ProductEdit'
import BannerPage from './pages/Backend/Banner'
import AddBannerPage from './pages/Backend/AddBanner'
import EditBannerPage from './pages/Backend/EditBanner'
import FeaturedProductsPage from './pages/Backend/Featured'
import AddFeaturedProduct from './pages/Backend/AddFeatured'

const FrontendRoutes = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/shop',
          element: <ShopPage/>
        },
        {
          path: '/wishlist',
          element: <WishlistPage/>
        },
        {
          path: '/cart',
          element: <CartPage/>
        },
        {
          path: '/cart/checkout',
          element: <CheckoutPage/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/profile',
          element: <ProfileLayout/>,
          children: [
            {
              path: '/profile',
              element: <Profile/>
            },
            {
              path: 'orders',
              element: <MyOrdersPage/>
            },
            {
              path: 'wishlist',
              element: <WishlistPage/>
            },
            {
              path: 'inbox',
              element: <InboxPage/>
            },
            {
              path: 'address',
              element: <AddressPage/>
            },
            {
              path: 'address-add',
              element: <AddAddressPage/>
            },
            {
              path: 'address-edit',
              element: <EditAddressPage/>
            }
          ]
        }
      ]
    },
    {
      path: '/admin',
      element: <DashboardLayout/>,
      children:[
        {
          path: 'dashboard',
          element: <Dashboard/>
        },
        {
          path: 'orders',
          element: <AdminOrdersPage/>
        },
        {
          path: 'products',
          element: <AdminProductsPage/>
        },
        {
         path: 'product-add',
         element: <AddProductPage/>
        },
        {
         path: 'product-edit',
         element: <EditProductPage/>
        },
        {
          path: 'users',
          element: <AdminUsersPage/>
        },
        {
          path: 'banner',
          element: <BannerPage/>
        }
        ,
        {
          path: 'banner-add',
          element: <AddBannerPage/>
        }
        ,
        {
          path: 'banner-edit',
          element: <EditBannerPage/>
        },
        {
          path: 'featured',
          element: <FeaturedProductsPage/>
        },
        {
          path: 'featured-add',
          element: <AddFeaturedProduct/>
        }
      ]
    },
    {
      path: '/admin/login',
      element: <AdminLogin/>
    }
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default FrontendRoutes
