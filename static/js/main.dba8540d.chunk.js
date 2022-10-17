(this.webpackJsonpfakeflix = this.webpackJsonpfakeflix || []).push([
  [0],
  {
    101: function (e, t, a) {},
    102: function (e, t, a) {},
    127: function (e, t, a) {},
    128: function (e, t, a) {},
    129: function (e, t, a) {},
    130: function (e, t, a) {},
    131: function (e, t, a) {},
    132: function (e, t, a) {},
    133: function (e, t, a) {},
    137: function (e, t, a) {},
    138: function (e, t, a) {},
    139: function (e, t, a) {},
    140: function (e, t, a) {},
    141: function (e, t, a) {},
    142: function (e, t, a) {},
    143: function (e, t, a) {},
    144: function (e, t, a) {},
    145: function (e, t, a) {},
    146: function (e, t, a) {},
    147: function (e, t, a) {},
    148: function (e, t, a) {},
    149: function (e, t, a) {},
    150: function (e, t, a) {},
    151: function (e, t, a) {},
    152: function (e, t, a) {},
    153: function (e, t, a) {},
    159: function (e, t, a) {
      "use strict";
      a.r(t);
      a(93);
      var n = a(4),
        c = a(3),
        r = a.n(c),
        s = a(13),
        i = a(24),
        o = a(170),
        l = a(20),
        u =
          (a(101),
          function () {
            var e = Object(c.useState)(window.innerWidth),
              t = Object(l.a)(e, 2),
              a = t[0],
              n = t[1],
              r = Object(c.useState)(window.innerHeight),
              s = Object(l.a)(r, 2),
              i = s[0],
              o = s[1],
              u = function () {
                n(window.innerWidth), o(window.innerHeight);
              };
            return (
              Object(c.useEffect)(function () {
                return (
                  window.addEventListener("resize", u),
                  function () {
                    return window.removeEventListener("resize", u);
                  }
                );
              }, []),
              {
                width: a,
                height: i,
              }
            );
          }),
        j = function (e) {
          var t = Object(c.useState)(!1),
            a = Object(l.a)(t, 2),
            n = a[0],
            r = a[1];
          return (
            Object(c.useEffect)(
              function () {
                var t = function () {
                  window.scrollY > e ? r(!0) : r(!1);
                };
                return (
                  window.addEventListener("scroll", t),
                  function () {
                    return window.removeEventListener("scroll", t);
                  }
                );
              },
              [e]
            ),
            n
          );
        },
        d = function (e, t) {
          var a = function (a) {
            e.current && !e.current.contains(a.target) && t();
          };
          Object(c.useEffect)(function () {
            return (
              document.addEventListener("click", a),
              function () {
                return document.removeEventListener("click", a);
              }
            );
          });
        },
        b = a(167),
        O = [0.6, -0.05, 0.01, 0.99],
        p = {
          animate: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        f = {
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        },
        m = {
          hidden: {
            opacity: 0,
            top: "100%",
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
          visible: {
            opacity: 1,
            top: "50%",
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
        },
        _ = {
          hidden: {
            opacity: 0,
            transition: {
              duration: 0.2,
              delay: 0.2,
            },
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          },
        },
        v = {
          initial: {
            y: 60,
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
        },
        h = {
          initial: {
            y: 30,
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
        },
        x = {
          hidden: {
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          },
        },
        g = {
          initial: {
            y: 20,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: O,
            },
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: O,
            },
          },
          exit: {
            y: 20,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: O,
            },
          },
        },
        E = {
          initial: {
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: O,
            },
            willChange: "opacity, transform",
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: O,
            },
            willChange: "opacity, transform",
          },
          exit: {
            opacity: 0,
            transition: {
              delay: 0.4,
              duration: 0.8,
              ease: O,
            },
            willChange: "opacity, transform",
          },
        },
        N = {
          initial: {
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: O,
            },
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: O,
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: O,
            },
          },
        },
        y = {
          initial: {
            y: 60,
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: O,
            },
            willChange: "opacity, transform",
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              delayChildren: 0.4,
              duration: 0.8,
              ease: O,
            },
            willChange: "opacity, transform",
          },
          exit: {
            y: 60,
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: O,
            },
            willChange: "opacity, transform",
          },
        },
        S = {
          initial: {
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: O,
            },
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: O,
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: O,
            },
          },
        },
        C = {
          initial: {
            y: 60,
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 0.8,
              ease: O,
            },
          },
          exit: {
            y: 60,
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: O,
            },
          },
        },
        R = {
          initial: {
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: O,
            },
            willChange: "opacity, transform",
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: O,
            },
            willChange: "opacity, transform",
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: O,
            },
            willChange: "opacity, transform",
          },
        },
        I = function (e) {
          return e.slice(0, 4);
        },
        A = "./",
        T = "en-US",
        w = "https://image.tmdb.org/t/p/original",
        M = "".concat(A, "/Fakeflix_readme.png"),
        F = "".concat(A, "/Fakeflix_favicon_192.png"),
        k = "".concat(A, "/Fakeflix_favicon_192.png"),
        U = "".concat(A, "/Fakeflix_favicon_192.png"),
        L = "".concat(A, "/Fakeflix_auth_bg.jpg"),
        P = "".concat(A, "/Fakeflix_TaDum.mp3"),
        D = (function () {
          var e = new Date();
          return e.setMonth(e.getMonth() - 1), e.toJSON().slice(0, 10);
        })(),
        H = "e8d53ad78d99a4722c3f0f0f6a5c9014",
        V = {
          fetchSearchQuery: "/search/multi?api_key="
            .concat(H, "&language=")
            .concat(T, "&query="),
          fetchTrendingAll: "/trending/all/week?api_key="
            .concat(H, "&sort_by=popularity.desc&language=")
            .concat(T),
          fetchReleasedMoviesByOneMonth: "/discover/movie?api_key="
            .concat(H, "&primary_release_date.gte=")
            .concat(D, "&sort_by=popularity.desc&language=")
            .concat(T),
          fetchTrendingMovies: "/trending/movie/week?api_key="
            .concat(H, "&sort_by=popularity.desc&language=")
            .concat(T),
          fetchUpcomingMovies: "/movie/upcoming?api_key="
            .concat(H, "&language=")
            .concat(T),
          fetchTopRated: "/movie/top_rated?api_key="
            .concat(H, "&sort_by=popularity.desc&region=")
            .concat("US"),
          fetchActionMovies: "/discover/movie?api_key="
            .concat(H, "&with_genres=28&sort_by=popularity.desc&language=")
            .concat(T),
          fetchAdventureMovies: "/discover/movie?api_key="
            .concat(H, "&with_genres=12&sort_by=popularity.desc&language=")
            .concat(T),
          fetchComedyMovies: "/discover/movie?api_key="
            .concat(H, "&with_genres=35&sort_by=popularity.desc&language=")
            .concat(T),
          fetchHorrorMovies: "/discover/movie?api_key="
            .concat(H, "&with_genres=27&sort_by=popularity.desc&language=")
            .concat(T),
          fetchRomanceMovies: "/discover/movie?api_key="
            .concat(H, "&with_genres=10749&sort_by=popularity.desc&language=")
            .concat(T),
          fetchWarMovies: "/discover/movie?api_key="
            .concat(H, "&with_genres=10752&sort_by=popularity.desc&language=")
            .concat(T),
          fetchAnimationMovies: "/discover/movie?api_key="
            .concat(H, "&with_genres=16&sort_by=popularity.desc&language=")
            .concat(T),
          discoverMovies: "/discover/movie?api_key="
            .concat(H, "&sort_by=popularity.desc&language=")
            .concat(T),
          discoverSeries: "/discover/tv?api_key="
            .concat(H, "&sort_by=popularity.desc&language=")
            .concat(T),
          fetchTrendingSeries: "/trending/tv/week?api_key="
            .concat(H, "&sort_by=popularity.desc&language=")
            .concat(T),
          fetchNetflixOriginals: "/discover/tv?api_key="
            .concat(H, "&with_networks=213&sort_by=popularity.desc&language=")
            .concat(T),
          fetchActionAdventureSeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=10759&sort_by=popularity.desc&language=")
            .concat(T),
          fetchAnimationSeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=16&sort_by=popularity.desc&language=")
            .concat(T),
          fetchComedySeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=35&sort_by=popularity.desc&language=")
            .concat(T),
          fetchCrimeSeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=80&sort_by=popularity.desc&language=")
            .concat(T),
          fetchDocumentarySeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=99&sort_by=popularity.desc&language=")
            .concat(T),
          fetchFamilySeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=10751&sort_by=popularity.desc&language=")
            .concat(T),
          fetchKidsSeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=10762&sort_by=popularity.desc&language=")
            .concat(T),
          fetchSciFiFantasySeries: "/discover/tv?api_key="
            .concat(H, "&with_genres=10765&sort_by=popularity.desc&language=")
            .concat(T),
        },
        G = V,
        B = a(27),
        Y = a(19),
        Q = (a(102), "CHANGE_SEARCH_INPUT_VALUE"),
        K = "CLEAR_SEARCH_INPUT_VALUE",
        W = "FETCH_SEARCH_RESULTS_REQUEST",
        z = "FETCH_SEARCH_RESULTS_SUCCESS",
        X = "FETCH_SEARCH_RESULTS_FAILURE",
        q = a(80),
        J = a.n(q),
        Z = J.a.create({
          baseURL: "https://api.themoviedb.org/3",
        }),
        $ = Z,
        ee = function (e) {
          return function (t) {
            t(
              (function (e) {
                return {
                  type: W,
                  payload: e,
                };
              })(e)
            ),
              $.get("".concat(G.fetchSearchQuery).concat(e))
                .then(function (e) {
                  var a = e.data.results.filter(function (e) {
                    return "person" !== e.media_type;
                  });
                  t({
                    type: z,
                    payload: a,
                  });
                })
                .catch(function (e) {
                  var a;
                  t(
                    ((a = e.message),
                    {
                      type: X,
                      payload: a,
                    })
                  );
                });
          };
        },
        te = a(82),
        ae = a(83),
        ne = a(1),
        ce = function () {
          var e = Object(i.g)(),
            t = Object(s.b)(),
            a = Object(c.useState)(!1),
            n = Object(l.a)(a, 2),
            r = n[0],
            o = n[1],
            u = Object(c.useState)(""),
            j = Object(l.a)(u, 2),
            b = j[0],
            O = j[1],
            p = Object(c.useRef)(),
            f = Object(c.useRef)();
          d(p, function () {
            r && (O(""), o(!1));
          });
          return Object(ne.jsxs)("div", {
            className: "Searchbar",
            ref: p,
            children: [
              Object(ne.jsx)("input", {
                type: "text",
                placeholder: "Search titles, people",
                value: b,
                onChange: function (a) {
                  var n = a.target.value;
                  O(n),
                    t({
                      type: Q,
                      payload: n,
                    }),
                    n.length > 0
                      ? (e.push("/search?q=".concat(n)), t(ee(n)))
                      : e.push("/browse");
                },
                ref: f,
                className: "Searchbar--search ".concat(
                  r && "Searchbar--active"
                ),
              }),
              Object(ne.jsx)("div", {
                className: "Searchbar--toggler",
                onClick: function () {
                  f.current.focus(), o(!r);
                },
                children: Object(ne.jsx)(te.b, {
                  size: "1.5em",
                }),
              }),
              Object(ne.jsx)("div", {
                className: "Searchbar--clear ".concat(
                  r && b.length && "typing"
                ),
                onClick: function () {
                  O(""),
                    t({
                      type: K,
                    }),
                    e.push("/browse");
                },
                children: Object(ne.jsx)(ae.a, {}),
              }),
            ],
          });
        },
        re = a(16),
        se = function (e) {
          return e.auth;
        },
        ie = Object(re.a)([se], function (e) {
          return e.currentUser;
        }),
        oe = Object(re.a)([se], function (e) {
          return e.loading;
        }),
        le = Object(re.a)([se], function (e) {
          return e.error;
        }),
        ue = "CHECK_USER_SESSION",
        je = "EMAIL_SIGN_IN_START",
        de = "GOOGLE_SIGN_IN_START",
        be = "ANONYMOUS_SIGN_IN_START",
        Oe = "SIGN_IN_SUCCESS",
        pe = "SIGN_IN_FAILURE",
        fe = "SIGN_UP_START",
        me = "SIGN_UP_SUCCESS",
        _e = "SIGN_UP_FAILURE",
        ve = "SIGN_OUT_START",
        he = "SIGN_OUT_SUCCESS",
        xe = "SIGN_OUT_FAILURE",
        ge = function (e) {
          return {
            type: pe,
            payload: e,
          };
        },
        Ee = function (e) {
          var t = e.user,
            a = e.additionalData;
          return {
            type: me,
            payload: {
              user: t,
              additionalData: a,
            },
          };
        },
        Ne = function () {
          var e = u().width,
            t = j(70),
            a = Object(c.useState)(!1),
            n = Object(l.a)(a, 2),
            r = n[0],
            i = n[1],
            o = Object(c.useState)(!1),
            O = Object(l.a)(o, 2),
            p = O[0],
            f = O[1],
            m = Object(c.useRef)(),
            _ = Object(c.useRef)(),
            v = Object(s.c)(ie),
            h = Object(s.b)();
          return (
            d(m, function () {
              r && i(!1);
            }),
            d(_, function () {
              p && f(!1);
            }),
            Object(ne.jsx)(ne.Fragment, {
              children: Object(ne.jsxs)(b.a.nav, {
                className: "Navbar ".concat(t && "Navbar__fixed"),
                variants: x,
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                children: [
                  Object(ne.jsx)(Y.b, {
                    to: "/",
                    children: Object(ne.jsx)("img", {
                      className: "Navbar__logo",
                      src: e >= 600 ? F : k,
                      alt: "",
                    }),
                  }),
                  e >= 1024
                    ? Object(ne.jsxs)("ul", {
                        className: "Navbar__primarynav Navbar__navlinks",
                        children: [
                          Object(ne.jsx)("li", {
                            className: "Navbar__navlinks--link",
                            children: Object(ne.jsx)(Y.c, {
                              to: "/browse",
                              activeClassName: "activeNavLink",
                              children: "Home",
                            }),
                          }),
                          Object(ne.jsx)("li", {
                            className: "Navbar__navlinks--link",
                            children: Object(ne.jsx)(Y.c, {
                              to: "/tvseries",
                              activeClassName: "activeNavLink",
                              children: "TV Series",
                            }),
                          }),
                          Object(ne.jsx)("li", {
                            className: "Navbar__navlinks--link",
                            children: Object(ne.jsx)(Y.c, {
                              to: "/movies",
                              activeClassName: "activeNavLink",
                              children: "Movies",
                            }),
                          }),
                          Object(ne.jsx)("li", {
                            className: "Navbar__navlinks--link",
                            children: Object(ne.jsx)(Y.c, {
                              to: "/popular",
                              activeClassName: "activeNavLink",
                              children: "New & Popular",
                            }),
                          }),
                          Object(ne.jsx)("li", {
                            className: "Navbar__navlinks--link",
                            children: Object(ne.jsx)(Y.c, {
                              to: "/mylist",
                              activeClassName: "activeNavLink",
                              children: "My list",
                            }),
                          }),
                        ],
                      })
                    : Object(ne.jsxs)("div", {
                        className:
                          "Navbar__primarynav Navbar__navlinks ".concat(
                            t && "Navbar__primarynav--scrolled"
                          ),
                        onClick: function () {
                          return i(!r);
                        },
                        children: [
                          Object(ne.jsx)("span", {
                            className: "Navbar__navlinks--link",
                            children: "Discover",
                          }),
                          Object(ne.jsx)(B.a, {
                            className:
                              "Navbar__primarynav--toggler Navbar__primarynav--caret",
                          }),
                          Object(ne.jsx)("div", {
                            className: "Navbar__primarynav--content ".concat(
                              r ? "active" : ""
                            ),
                            children:
                              r &&
                              Object(ne.jsxs)("ul", {
                                className: "Navbar__primarynav--content-wrp",
                                ref: m,
                                children: [
                                  Object(ne.jsx)("li", {
                                    className: "Navbar__navlinks--link",
                                    children: Object(ne.jsx)(Y.c, {
                                      to: "/browse",
                                      activeClassName: "activeNavLink",
                                      children: "Home",
                                    }),
                                  }),
                                  Object(ne.jsx)("li", {
                                    className: "Navbar__navlinks--link",
                                    children: Object(ne.jsx)(Y.c, {
                                      to: "/tvseries",
                                      activeClassName: "activeNavLink",
                                      children: "TV Series",
                                    }),
                                  }),
                                  Object(ne.jsx)("li", {
                                    className: "Navbar__navlinks--link",
                                    children: Object(ne.jsx)(Y.c, {
                                      to: "/movies",
                                      activeClassName: "activeNavLink",
                                      children: "Movies",
                                    }),
                                  }),
                                  Object(ne.jsx)("li", {
                                    className: "Navbar__navlinks--link",
                                    children: Object(ne.jsx)(Y.c, {
                                      to: "/popular",
                                      activeClassName: "activeNavLink",
                                      children: "New & Popular",
                                    }),
                                  }),
                                  Object(ne.jsx)("li", {
                                    className: "Navbar__navlinks--link",
                                    children: Object(ne.jsx)(Y.c, {
                                      to: "/mylist",
                                      activeClassName: "activeNavLink",
                                      children: "My list",
                                    }),
                                  }),
                                ],
                              }),
                          }),
                        ],
                      }),
                  Object(ne.jsxs)("div", {
                    className: "Navbar__secondarynav",
                    children: [
                      Object(ne.jsx)("div", {
                        className: "Navbar__navitem",
                        children: Object(ne.jsx)(ce, {}),
                      }),
                      Object(ne.jsx)("div", {
                        className: "Navbar__navitem",
                        children: Object(ne.jsxs)("div", {
                          className: "Navbar__navprofile ".concat(
                            p && "active"
                          ),
                          onClick: function () {
                            return f(!p);
                          },
                          children: [
                            Object(ne.jsx)("img", {
                              className:
                                "Navbar__navprofile--avatar Navbar__navprofile--toggler",
                              src: v && v.photoURL ? v.photoURL : U,
                              alt: "Profile Picture",
                            }),
                            Object(ne.jsx)(B.a, {
                              className:
                                "Navbar__navprofile--toggler Navbar__navprofile--caret",
                            }),
                            Object(ne.jsx)("div", {
                              className: "Navbar__navprofile--content ".concat(
                                p ? "active" : ""
                              ),
                              children:
                                p &&
                                Object(ne.jsx)("ul", {
                                  className: "Navbar__navprofile--content-wrp",
                                  ref: _,
                                  children:
                                    v &&
                                    Object(ne.jsx)("li", {
                                      className: "Navbar__navlinks--link",
                                      onClick: function () {
                                        return h({
                                          type: ve,
                                        });
                                      },
                                      children: "Sign Out",
                                    }),
                                }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        ye = (a(127), a(128), a(84)),
        Se =
          (a(129),
          a(130),
          function (e) {
            var t = e.type;
            return Object(ne.jsx)("div", {
              className: "Skeleton ".concat(t),
            });
          }),
        Ce = function () {
          return Object(ne.jsxs)("div", {
            className: "Skeleton__Banner",
            children: [
              Object(ne.jsx)(Se, {
                type: "title",
              }),
              Object(ne.jsxs)("div", {
                className: "Skeleton__inline",
                children: [
                  Object(ne.jsx)(Se, {
                    type: "button",
                  }),
                  Object(ne.jsx)(Se, {
                    type: "button",
                  }),
                ],
              }),
              Object(ne.jsx)(Se, {
                type: "text",
              }),
              Object(ne.jsx)(Se, {
                type: "text",
              }),
              Object(ne.jsx)(Se, {
                type: "text",
              }),
            ],
          });
        },
        Re = "SHOW_MODAL_DETAILS",
        Ie = "HIDE_MODAL_DETAILS",
        Ae = function (e) {
          return {
            type: Re,
            payload: e,
          };
        },
        Te = function (e) {
          return e.movies.actionMovies;
        },
        we = function (e) {
          return e.movies.adventureMovies;
        },
        Me = function (e) {
          return e.movies.animationMovies;
        },
        Fe = function (e) {
          return e.movies.comedyMovies;
        },
        ke = function (e) {
          return e.movies.horrorMovies;
        },
        Ue = function (e) {
          return e.movies.netflixMovies;
        },
        Le = function (e) {
          return e.movies.romanceMovies;
        },
        Pe = function (e) {
          return e.movies.topRatedMovies;
        },
        De = function (e) {
          return e.movies.trendingMovies;
        },
        He = function (e) {
          return e.movies.upcomingMovies;
        },
        Ve = function (e) {
          return e.movies.latestMovies;
        },
        Ge =
          (Object(re.a)([Te], function (e) {
            return e.data;
          }),
          Object(re.a)([we], function (e) {
            return e.data;
          }),
          Object(re.a)([Me], function (e) {
            return e.data;
          }),
          Object(re.a)([Fe], function (e) {
            return e.data;
          }),
          Object(re.a)([ke], function (e) {
            return e.data;
          }),
          Object(re.a)([Ue], function (e) {
            return e.data;
          }),
          Object(re.a)([Le], function (e) {
            return e.data;
          }),
          Object(re.a)([Pe], function (e) {
            return e.data;
          }),
          Object(re.a)([De], function (e) {
            return e.data;
          }),
          Object(re.a)([He], function (e) {
            return e.data;
          }),
          Object(re.a)([Ve], function (e) {
            return e.data;
          }),
          function (e) {
            return e.series.netflixSeries;
          }),
        Be = function (e) {
          return e.series.actionAdventureSeries;
        },
        Ye = function (e) {
          return e.series.animationSeries;
        },
        Qe = function (e) {
          return e.series.comedySeries;
        },
        Ke = function (e) {
          return e.series.crimeSeries;
        },
        We = function (e) {
          return e.series.documentarySeries;
        },
        ze = function (e) {
          return e.series.familySeries;
        },
        Xe = function (e) {
          return e.series.kidsSeries;
        },
        qe = function (e) {
          return e.series.sciFiFantasySeries;
        },
        Je = function (e) {
          return e.series.trendingSeries;
        },
        Ze =
          (Object(re.a)([Ge], function (e) {
            return e.data;
          }),
          Object(re.a)([Be], function (e) {
            return e.data;
          }),
          Object(re.a)([Ye], function (e) {
            return e.data;
          }),
          Object(re.a)([Qe], function (e) {
            return e.data;
          }),
          Object(re.a)([Ke], function (e) {
            return e.data;
          }),
          Object(re.a)([We], function (e) {
            return e.data;
          }),
          Object(re.a)([ze], function (e) {
            return e.data;
          }),
          Object(re.a)([Xe], function (e) {
            return e.data;
          }),
          Object(re.a)([qe], function (e) {
            return e.data;
          }),
          Object(re.a)([Je], function (e) {
            return e.data;
          }),
          function (e) {
            var t;
            switch (e.type) {
              case "movies":
                t = De;
                break;
              case "series":
                t = Ge;
                break;
              default:
                t = Ue;
            }
            var a,
              c,
              r,
              i = Object(s.c)(t),
              o = i.loading,
              l = i.error,
              u = i.data,
              j = u[((a = u), Math.floor(Math.random() * a.length - 1))],
              d =
                (null === j || void 0 === j ? void 0 : j.title) ||
                (null === j || void 0 === j ? void 0 : j.name) ||
                (null === j || void 0 === j ? void 0 : j.original_name),
              O =
                ((c = null === j || void 0 === j ? void 0 : j.overview),
                (r = 150),
                (null === c || void 0 === c ? void 0 : c.length) > r
                  ? c.substr(0, r - 1) + "..."
                  : c),
              p = Object(s.b)();
            return Object(ne.jsxs)(ne.Fragment, {
              children: [
                Object(ne.jsxs)(b.a.section, {
                  variants: N,
                  initial: "initial",
                  animate: "animate",
                  exit: "exit",
                  className: "Banner__loadsection",
                  children: [
                    o && Object(ne.jsx)(Ce, {}),
                    l &&
                      Object(ne.jsx)("div", {
                        className: "errored",
                        children: "Oops, an error occurred.",
                      }),
                  ],
                }),
                !o &&
                  j &&
                  Object(ne.jsxs)(b.a.header, {
                    variants: E,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    className: "Banner",
                    style: {
                      backgroundImage: "url("
                        .concat(w, "/")
                        .concat(
                          null === j || void 0 === j ? void 0 : j.backdrop_path,
                          ")"
                        ),
                    },
                    children: [
                      Object(ne.jsxs)(b.a.div, {
                        className: "Banner__content",
                        variants: f,
                        initial: "initial",
                        animate: "animate",
                        exit: "exit",
                        children: [
                          Object(ne.jsx)(b.a.h1, {
                            variants: y,
                            className: "Banner__content--title",
                            children: d,
                          }),
                          Object(ne.jsxs)(b.a.div, {
                            variants: y,
                            className: "Banner__buttons",
                            children: [
                              Object(ne.jsxs)(Y.b, {
                                className: "Banner__button",
                                onClick: function (e) {
                                  e.stopPropagation();
                                },
                                to: "/play",
                                children: [
                                  Object(ne.jsx)(B.d, {}),
                                  Object(ne.jsx)("span", {
                                    children: "Play",
                                  }),
                                ],
                              }),
                              Object(ne.jsxs)("button", {
                                className: "Banner__button",
                                onClick: function () {
                                  p(
                                    Ae(
                                      Object(n.a)(
                                        Object(n.a)({}, j),
                                        {},
                                        {
                                          fallbackTitle: d,
                                        }
                                      )
                                    )
                                  );
                                },
                                children: [
                                  Object(ne.jsx)(ye.a, {
                                    size: "1.5em",
                                  }),
                                  Object(ne.jsx)("span", {
                                    children: "More info",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(ne.jsx)(b.a.p, {
                            variants: y,
                            className: "Banner__content--description",
                            children: O,
                          }),
                        ],
                      }),
                      Object(ne.jsx)("div", {
                        className: "Banner__panel",
                      }),
                      Object(ne.jsx)("div", {
                        className: "Banner__bottom-shadow",
                      }),
                    ],
                  }),
              ],
            });
          }),
        $e = r.a.memo(Ze),
        et = (a(131), a(132), "ADD_TO_FAVOURITES"),
        tt = "REMOVE_FROM_FAVOURITES",
        at = function (e) {
          return {
            type: et,
            payload: Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                isFavourite: !0,
              }
            ),
          };
        },
        nt = function (e) {
          return {
            type: tt,
            payload: Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                isFavourite: !1,
              }
            ),
          };
        },
        ct = "FETCH_ACTION_MOVIES_REQUEST",
        rt = "FETCH_ACTION_MOVIES_SUCCESS",
        st = "FETCH_ACTION_MOVIES_FAILURE",
        it = "LOAD_MORE_ACTION_MOVIES_SUCCESS",
        ot = "FETCH_ADVENTURE_MOVIES_REQUEST",
        lt = "FETCH_ADVENTURE_MOVIES_SUCCESS",
        ut = "FETCH_ADVENTURE_MOVIES_FAILURE",
        jt = "LOAD_MORE_ADVENTURE_MOVIES_SUCCESS",
        dt = "FETCH_ANIMATION_MOVIES_REQUEST",
        bt = "FETCH_ANIMATION_MOVIES_SUCCESS",
        Ot = "FETCH_ANIMATION_MOVIES_FAILURE",
        pt = "LOAD_MORE_ANIMATION_MOVIES_SUCCESS",
        ft = "FETCH_COMEDY_MOVIES_REQUEST",
        mt = "FETCH_COMEDY_MOVIES_SUCCESS",
        _t = "FETCH_COMEDY_MOVIES_FAILURE",
        vt = "LOAD_MORE_COMEDY_MOVIES_SUCCESS",
        ht = "FETCH_HORROR_MOVIES_REQUEST",
        xt = "FETCH_HORROR_MOVIES_SUCCESS",
        gt = "FETCH_HORROR_MOVIES_FAILURE",
        Et = "LOAD_MORE_HORROR_MOVIES_SUCCESS",
        Nt = "FETCH_NETFLIX_MOVIES_REQUEST",
        yt = "FETCH_NETFLIX_MOVIES_SUCCESS",
        St = "FETCH_NETFLIX_MOVIES_FAILURE",
        Ct = "LOAD_MORE_NETFLIX_MOVIES_SUCCESS",
        Rt = "FETCH_ROMANCE_MOVIES_REQUEST",
        It = "FETCH_ROMANCE_MOVIES_SUCCESS",
        At = "FETCH_ROMANCE_MOVIES_FAILURE",
        Tt = "LOAD_MORE_ROMANCE_MOVIES_SUCCESS",
        wt = "FETCH_TOP_RATED_MOVIES_REQUEST",
        Mt = "FETCH_TOP_RATED_MOVIES_SUCCESS",
        Ft = "FETCH_TOP_RATED_MOVIES_FAILURE",
        kt = "LOAD_MORE_TOP_RATED_MOVIES_SUCCESS",
        Ut = "FETCH_TRENDING_MOVIES_REQUEST",
        Lt = "FETCH_TRENDING_MOVIES_SUCCESS",
        Pt = "FETCH_TRENDING_MOVIES_FAILURE",
        Dt = "LOAD_MORE_TRENDING_MOVIES_SUCCESS",
        Ht = "FETCH_UPCOMING_MOVIES_REQUEST",
        Vt = "FETCH_UPCOMING_MOVIES_SUCCESS",
        Gt = "FETCH_UPCOMING_MOVIES_FAILURE",
        Bt = "LOAD_MORE_UPCOMING_MOVIES_SUCCESS",
        Yt = "FETCH_LATEST_MOVIES_REQUEST",
        Qt = "FETCH_LATEST_MOVIES_SUCCESS",
        Kt = "FETCH_LATEST_MOVIES_FAILURE",
        Wt = "LOAD_MORE_LATEST_MOVIES_SUCCESS",
        zt = function (e, t) {
          return {
            type: t ? rt : it,
            payload: e,
          };
        },
        Xt = function (e, t) {
          return {
            type: t ? lt : jt,
            payload: e,
          };
        },
        qt = function (e, t) {
          return {
            type: t ? bt : pt,
            payload: e,
          };
        },
        Jt = function (e, t) {
          return {
            type: t ? mt : vt,
            payload: e,
          };
        },
        Zt = function (e, t) {
          return {
            type: t ? xt : Et,
            payload: e,
          };
        },
        $t = function (e, t) {
          return {
            type: t ? yt : Ct,
            payload: e,
          };
        },
        ea = function (e, t) {
          return {
            type: t ? It : Tt,
            payload: e,
          };
        },
        ta = function (e, t) {
          return {
            type: t ? Mt : kt,
            payload: e,
          };
        },
        aa = function (e, t) {
          return function (a) {
            a({
              type: wt,
            }),
              $.get(e)
                .then(function (e) {
                  var c = e.data.results.map(function (e) {
                    return Object(n.a)(
                      Object(n.a)({}, e),
                      {},
                      {
                        isFavourite: !1,
                      }
                    );
                  });
                  a(t ? ta(c, t) : ta(c));
                })
                .catch(function (e) {
                  var t = e.message;
                  a(
                    (function (e) {
                      return {
                        type: Ft,
                        payload: e,
                      };
                    })(t)
                  );
                });
          };
        },
        na = function (e, t) {
          return {
            type: t ? Lt : Dt,
            payload: e,
          };
        },
        ca = function (e, t) {
          return {
            type: t ? Vt : Bt,
            payload: e,
          };
        },
        ra = function (e, t) {
          return function (a) {
            a({
              type: Ht,
            }),
              $.get(e)
                .then(function (e) {
                  var c = e.data.results.map(function (e) {
                    return Object(n.a)(
                      Object(n.a)({}, e),
                      {},
                      {
                        isFavourite: !1,
                      }
                    );
                  });
                  a(t ? ca(c, t) : ca(c));
                })
                .catch(function (e) {
                  var t = e.message;
                  a(
                    (function (e) {
                      return {
                        type: Gt,
                        payload: e,
                      };
                    })(t)
                  );
                });
          };
        },
        sa = function (e, t) {
          return {
            type: t ? Qt : Wt,
            payload: e,
          };
        },
        ia = "FETCH_NETFLIX_SERIES_REQUEST",
        oa = "FETCH_NETFLIX_SERIES_SUCCESS",
        la = "FETCH_NETFLIX_SERIES_FAILURE",
        ua = "LOAD_MORE_NETFLIX_SERIES_SUCCESS",
        ja = "FETCH_ACTIONADVENTURE_SERIES_REQUEST",
        da = "FETCH_ACTIONADVENTURE_SERIES_SUCCESS",
        ba = "FETCH_ACTIONADVENTURE_SERIES_FAILURE",
        Oa = "LOAD_MORE_ACTIONADVENTURE_SERIES_SUCCESS",
        pa = "FETCH_ANIMATION_SERIES_REQUEST",
        fa = "FETCH_ANIMATION_SERIES_SUCCESS",
        ma = "FETCH_ANIMATION_SERIES_FAILURE",
        _a = "LOAD_MORE_ANIMATION_SERIES_SUCCESS",
        va = "FETCH_COMEDY_SERIES_REQUEST",
        ha = "FETCH_COMEDY_SERIES_SUCCESS",
        xa = "FETCH_COMEDY_SERIES_FAILURE",
        ga = "LOAD_MORE_COMEDY_SERIES_SUCCESS",
        Ea = "FETCH_CRIME_SERIES_REQUEST",
        Na = "FETCH_CRIME_SERIES_SUCCESS",
        ya = "FETCH_CRIME_SERIES_FAILURE",
        Sa = "LOAD_MORE_CRIME_SERIES_SUCCESS",
        Ca = "FETCH_DOCUMENTARY_SERIES_REQUEST",
        Ra = "FETCH_DOCUMENTARY_SERIES_SUCCESS",
        Ia = "FETCH_DOCUMENTARY_SERIES_FAILURE",
        Aa = "LOAD_MORE_DOCUMENTARY_SERIES_SUCCESS",
        Ta = "FETCH_FAMILY_SERIES_REQUEST",
        wa = "FETCH_FAMILY_SERIES_SUCCESS",
        Ma = "FETCH_FAMILY_SERIES_FAILURE",
        Fa = "LOAD_MORE_FAMILY_SERIES_SUCCESS",
        ka = "FETCH_KIDS_SERIES_REQUEST",
        Ua = "FETCH_KIDS_SERIES_SUCCESS",
        La = "FETCH_KIDS_SERIES_FAILURE",
        Pa = "LOAD_MORE_KIDS_SERIES_SUCCESS",
        Da = "FETCH_SCIFIFANTASY_SERIES_REQUEST",
        Ha = "FETCH_SCIFIFANTASY_SERIES_SUCCESS",
        Va = "FETCH_SCIFIFANTASY_SERIES_FAILURE",
        Ga = "LOAD_MORE_SCIFIFANTASY_SERIES_SUCCESS",
        Ba = "FETCH_TRENDING_SERIES_REQUEST",
        Ya = "FETCH_TRENDING_SERIES_SUCCESS",
        Qa = "FETCH_TRENDING_SERIES_FAILURE",
        Ka = "LOAD_MORE_TRENDING_SERIES_SUCCESS",
        Wa = function (e, t) {
          return {
            type: t ? oa : ua,
            payload: e,
          };
        },
        za = function (e, t) {
          return {
            type: t ? da : Oa,
            payload: e,
          };
        },
        Xa = function (e, t) {
          return {
            type: t ? fa : _a,
            payload: e,
          };
        },
        qa = function (e, t) {
          return {
            type: t ? ha : ga,
            payload: e,
          };
        },
        Ja = function (e, t) {
          return {
            type: t ? Na : Sa,
            payload: e,
          };
        },
        Za = function (e, t) {
          return {
            type: t ? Ra : Aa,
            payload: e,
          };
        },
        $a = function (e, t) {
          return {
            type: t ? wa : Fa,
            payload: e,
          };
        },
        en = function (e, t) {
          return {
            type: t ? Ua : Pa,
            payload: e,
          };
        },
        tn = function (e, t) {
          return {
            type: t ? Ha : Ga,
            payload: e,
          };
        },
        an = function (e, t) {
          return {
            type: t ? Ya : Ka,
            payload: e,
          };
        },
        nn = G.fetchNetflixOriginals,
        cn = G.fetchTopRated,
        rn = G.fetchUpcomingMovies,
        sn = [
          {
            id: 0,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Ut,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? na(c, t) : na(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: Pt,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchTrendingMovies,
            title: "Trending Now",
            genre: "trending",
            selector: De,
          },
          {
            id: 1,
            thunk: aa,
            url: cn,
            title: "Top Rated on Fakeflix",
            genre: "toprated",
            selector: Pe,
          },
          {
            id: 2,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Nt,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? $t(c, t) : $t(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: St,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: nn,
            title: "Fakeflix Originals",
            genre: "fakeflix",
            selector: Ue,
            isLarge: !0,
          },
          {
            id: 3,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: ct,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? zt(c, t) : zt(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: st,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchActionMovies,
            title: "Action",
            genre: "action",
            selector: Te,
          },
          {
            id: 4,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: ot,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? Xt(c, t) : Xt(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: ut,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchAdventureMovies,
            title: "Adventure",
            genre: "adventure",
            selector: we,
          },
          {
            id: 5,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: ft,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? Jt(c, t) : Jt(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: _t,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchComedyMovies,
            title: "Comedy",
            genre: "comedy",
            selector: Fe,
          },
          {
            id: 6,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: ht,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? Zt(c, t) : Zt(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: gt,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchHorrorMovies,
            title: "Horror",
            genre: "horror",
            selector: ke,
          },
          {
            id: 7,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Rt,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? ea(c, t) : ea(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: At,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchRomanceMovies,
            title: "Romance",
            genre: "romance",
            selector: Le,
          },
          {
            id: 8,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: dt,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? qt(c, t) : qt(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: Ot,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchAnimationMovies,
            title: "Animation",
            genre: "animation",
            selector: Me,
          },
          {
            id: 9,
            thunk: ra,
            url: rn,
            title: "Upcoming",
            genre: "upcoming",
            selector: He,
          },
        ],
        on = [
          {
            id: 0,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Ba,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? an(c, t) : an(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: Qa,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchTrendingSeries,
            title: "Trending Now",
            genre: "trending",
            selector: Je,
          },
          {
            id: 1,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: ia,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? Wa(c, t) : Wa(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: la,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: nn,
            title: "Fakeflix Originals",
            genre: "fakeflix",
            selector: Ge,
            isLarge: !0,
          },
          {
            id: 2,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: ja,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? za(c, t) : za(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: ba,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchActionAdventureSeries,
            title: "Action & Adventure",
            genre: "actionadventure",
            selector: Be,
          },
          {
            id: 3,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: pa,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? Xa(c, t) : Xa(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: ma,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchAnimationSeries,
            title: "Animation",
            genre: "animation",
            selector: Ye,
          },
          {
            id: 4,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: va,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? qa(c, t) : qa(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: xa,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchComedySeries,
            title: "Comedy",
            genre: "comedy",
            selector: Qe,
          },
          {
            id: 5,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Ea,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? Ja(c, t) : Ja(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: ya,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchCrimeSeries,
            title: "Crime",
            genre: "crime",
            selector: Ke,
          },
          {
            id: 6,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Ca,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? Za(c, t) : Za(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: Ia,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchDocumentarySeries,
            title: "Documentary",
            genre: "documentary",
            selector: We,
          },
          {
            id: 7,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Ta,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? $a(c, t) : $a(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: Ma,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchFamilySeries,
            title: "Family",
            genre: "family",
            selector: ze,
          },
          {
            id: 8,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: ka,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? en(c, t) : en(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: La,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchKidsSeries,
            title: "Kids",
            genre: "kids",
            selector: Xe,
          },
          {
            id: 9,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Da,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? tn(c, t) : tn(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: Va,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchSciFiFantasySeries,
            title: "Sci-Fi & Fantasy",
            genre: "scififantasy",
            selector: qe,
          },
        ],
        ln = [
          {
            id: 0,
            thunk: aa,
            url: cn,
            title: "Top Rated in your country",
            genre: "toprated",
            selector: Pe,
          },
          {
            id: 1,
            thunk: function (e, t) {
              return function (a) {
                a({
                  type: Yt,
                }),
                  $.get(e)
                    .then(function (e) {
                      var c = e.data.results.map(function (e) {
                        return Object(n.a)(
                          Object(n.a)({}, e),
                          {},
                          {
                            isFavourite: !1,
                          }
                        );
                      });
                      a(t ? sa(c, t) : sa(c));
                    })
                    .catch(function (e) {
                      var t = e.message;
                      a(
                        (function (e) {
                          return {
                            type: Kt,
                            payload: e,
                          };
                        })(t)
                      );
                    });
              };
            },
            url: G.fetchReleasedMoviesByOneMonth,
            title: "New on Fakeflix",
            genre: "newin",
            selector: Ve,
          },
          {
            id: 2,
            thunk: ra,
            url: rn,
            title: "Upcoming",
            genre: "upcoming",
            selector: He,
          },
        ],
        un = [
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 16,
            name: "Animation",
          },
          {
            id: 35,
            name: "Comedy",
          },
          {
            id: 80,
            name: "Crime",
          },
          {
            id: 99,
            name: "Documentary",
          },
          {
            id: 18,
            name: "Drama",
          },
          {
            id: 10751,
            name: "Family",
          },
          {
            id: 14,
            name: "Fantasy",
          },
          {
            id: 36,
            name: "History",
          },
          {
            id: 27,
            name: "Horror",
          },
          {
            id: 10402,
            name: "Music",
          },
          {
            id: 9648,
            name: "Mystery",
          },
          {
            id: 10749,
            name: "Romance",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 10770,
            name: "TV Movie",
          },
          {
            id: 53,
            name: "Thriller",
          },
          {
            id: 10752,
            name: "War",
          },
          {
            id: 37,
            name: "Western",
          },
          {
            id: 10759,
            name: "Action & Adventure",
          },
          {
            id: 10762,
            name: "Kids",
          },
          {
            id: 10763,
            name: "News",
          },
          {
            id: 10764,
            name: "Reality",
          },
          {
            id: 10765,
            name: "Sci-Fi & Fantasy",
          },
          {
            id: 10766,
            name: "Soap",
          },
          {
            id: 10767,
            name: "Talk",
          },
          {
            id: 10768,
            name: "War & Politics",
          },
        ],
        jn = function (e) {
          var t = [];
          return (
            e.slice(0, 3).map(function (e) {
              return un
                .filter(function (t) {
                  return t.id === e;
                })
                .map(function (e) {
                  return t.push(e.name);
                });
            }),
            t
          );
        },
        dn = function (e) {
          var t = e.item,
            a = e.item,
            c = a.title,
            r = a.original_name,
            i = a.original_title,
            o = a.name,
            l = a.genre_ids,
            u = a.poster_path,
            j = a.backdrop_path,
            d = e.isLarge,
            b = e.isFavourite,
            O = c || i || o || r,
            p = jn(l),
            f = Object(s.b)(),
            m = function () {
              f(
                Ae(
                  Object(n.a)(
                    Object(n.a)({}, t),
                    {},
                    {
                      fallbackTitle: O,
                      genresConverted: p,
                      isFavourite: b,
                    }
                  )
                )
              );
            };
          return Object(ne.jsxs)("div", {
            className: "Row__poster ".concat(d && "Row__poster--big"),
            onClick: m,
            children: [
              d
                ? u
                  ? Object(ne.jsx)("img", {
                      src: "".concat(w, "/").concat(u),
                      alt: O,
                    })
                  : ""
                : j
                ? Object(ne.jsx)("img", {
                    src: "".concat(w, "/").concat(j),
                    alt: O,
                  })
                : Object(ne.jsxs)(ne.Fragment, {
                    children: [
                      Object(ne.jsx)("img", {
                        src: M,
                        alt: O,
                      }),
                      Object(ne.jsx)("div", {
                        className: "Row__poster__fallback",
                        children: Object(ne.jsx)("span", {
                          children: O,
                        }),
                      }),
                    ],
                  }),
              Object(ne.jsxs)("div", {
                className: "Row__poster-info",
                children: [
                  Object(ne.jsxs)("div", {
                    className: "Row__poster-info--iconswrp",
                    children: [
                      Object(ne.jsx)(Y.b, {
                        className: "Row__poster-info--icon icon--play",
                        onClick: function (e) {
                          e.stopPropagation();
                        },
                        to: "/play",
                        children: Object(ne.jsx)(B.d, {}),
                      }),
                      b
                        ? Object(ne.jsx)("button", {
                            className: "Row__poster-info--icon icon--favourite",
                            onClick: function (e) {
                              e.stopPropagation(),
                                f(
                                  nt(
                                    Object(n.a)(
                                      Object(n.a)({}, t),
                                      {},
                                      {
                                        isFavourite: b,
                                      }
                                    )
                                  )
                                );
                            },
                            children: Object(ne.jsx)(B.c, {}),
                          })
                        : Object(ne.jsx)("button", {
                            className: "Row__poster-info--icon icon--favourite",
                            onClick: function (e) {
                              e.stopPropagation(),
                                f(
                                  at(
                                    Object(n.a)(
                                      Object(n.a)({}, t),
                                      {},
                                      {
                                        isFavourite: b,
                                      }
                                    )
                                  )
                                );
                            },
                            children: Object(ne.jsx)(B.e, {}),
                          }),
                      Object(ne.jsx)("button", {
                        className: "Row__poster-info--icon icon--toggleModal",
                        children: Object(ne.jsx)(B.b, {
                          onClick: m,
                        }),
                      }),
                    ],
                  }),
                  Object(ne.jsx)("div", {
                    className: "Row__poster-info--title",
                    children: Object(ne.jsx)("h3", {
                      children: O,
                    }),
                  }),
                  Object(ne.jsx)("div", {
                    className: "Row__poster-info--genres",
                    children:
                      p &&
                      p.map(function (e) {
                        return Object(ne.jsx)(
                          "span",
                          {
                            className: "genre-title",
                            children: e,
                          },
                          "Genre--id_".concat(e)
                        );
                      }),
                  }),
                ],
              }),
            ],
          });
        },
        bn = a(6),
        On =
          (a(133),
          function () {
            var e = u().width,
              t =
                e >= 1378 ? 6 : e >= 998 ? 4 : e >= 625 ? 3 : e >= 330 ? 2 : 1;
            return Object(ne.jsx)("div", {
              className: "Skeleton__Poster",
              children: Object(bn.a)(Array(t)).map(function (e, t) {
                return Object(ne.jsx)(
                  Se,
                  {
                    type: "poster",
                  },
                  t
                );
              }),
            });
          }),
        pn = a(69),
        fn = a(168),
        mn = a(164),
        _n = a(165),
        vn = a(169),
        hn = a(166);
      a(134), a(135), a(136);
      fn.a.use([mn.a, _n.a]);
      var xn = function (e) {
          var t = e.selector,
            a = e.title,
            r = e.genre,
            o = e.isLarge,
            l = u().width,
            j = Object(s.c)(t),
            d = j.loading,
            b = j.error,
            O = j.data,
            p = Object(i.h)().pathname,
            f = Object(c.useRef)(null),
            m = Object(c.useRef)(null),
            _ = {
              observer: !0,
              observeParents: !0,
              navigation: {
                prevEl: f.current,
                nextEl: m.current,
              },
              breakpoints: {
                1378: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
                998: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                625: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                330: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                0: {
                  slidesPerView: 1.5,
                  slidesPerGroup: 1.5,
                },
              },
              loopAdditionalSlides: l >= 1378 ? 5 : l >= 998 ? 3 : 2,
              pagination: !0,
              loop: !1,
              grabCursor: !1,
              draggable: !1,
              preventClicksPropagation: !0,
              preventClicks: !0,
              slideToClickedSlide: !1,
              allowTouchMove: !0,
            },
            v = function (e) {
              e.currentTarget.classList.contains("right")
                ? e.currentTarget.parentElement.classList.add("is-right")
                : e.currentTarget.classList.contains("left") &&
                  e.currentTarget.parentElement.classList.add("is-left");
            },
            h = function (e) {
              e.currentTarget.parentElement.classList.remove(
                "is-right",
                "is-left"
              );
            },
            x = function (e) {
              var t = e + 1;
              if (1 === t) return "left";
              if (20 === t) return "right";
              if (l >= 1378) {
                if ([7, 13, 19].includes(t)) return "left";
                if ([6, 12, 18].includes(t)) return "right";
              } else if (l >= 998) {
                if ([5, 9, 13, 17].includes(t)) return "left";
                if ([4, 8, 12, 16].includes(t)) return "right";
              } else if (l >= 768) {
                if ([4, 7, 10, 13, 16].includes(t)) return "left";
                if ([3, 6, 9, 12, 15, 18].includes(t)) return "right";
              }
            };
          return Object(ne.jsxs)("div", {
            className: "Row",
            children: [
              b &&
                Object(ne.jsx)("div", {
                  className: "Row__not-loaded",
                  children: "Oops, an error occurred.",
                }),
              d
                ? Object(ne.jsxs)("div", {
                    className: "Row__not-loaded",
                    children: [
                      Object(ne.jsx)(Se, {
                        type: "title",
                      }),
                      Object(ne.jsx)(On, {}),
                    ],
                  })
                : Object(ne.jsx)("h3", {
                    className: "Row__title",
                    children: Object(ne.jsxs)(Y.b, {
                      to: "".concat(p, "/").concat(r),
                      children: [
                        Object(ne.jsx)("span", {
                          children: a,
                        }),
                        Object(ne.jsxs)("span", {
                          className: "Row__showmore",
                          children: ["Show all ", Object(ne.jsx)(te.a, {})],
                        }),
                      ],
                    }),
                  }),
              !d &&
                !b &&
                Object(ne.jsxs)("div", {
                  className: "Row__poster--wrp",
                  children: [
                    Object(ne.jsx)("div", {
                      className: "Row__slider--mask left",
                      ref: f,
                      children: Object(ne.jsx)(pn.a, {
                        className: "Row__slider--mask-icon left",
                        size: "3em",
                        style: {
                          color: "white",
                        },
                      }),
                    }),
                    Object(ne.jsx)("div", {
                      className: "Row__slider--mask right",
                      ref: m,
                      children: Object(ne.jsx)(pn.b, {
                        className: "Row__slider--mask-icon right",
                        size: "3em",
                        style: {
                          color: "white",
                        },
                      }),
                    }),
                    Object(ne.jsx)(
                      vn.a,
                      Object(n.a)(
                        Object(n.a)({}, _),
                        {},
                        {
                          onBeforeInit: function (e) {
                            (e.params.navigation.prevEl = f.current),
                              (e.params.navigation.nextEl = m.current);
                          },
                          children:
                            !d &&
                            O &&
                            O.map(function (e, t) {
                              return Object(ne.jsx)(
                                hn.a,
                                {
                                  className: x(t),
                                  onMouseOver: v,
                                  onMouseOut: h,
                                  children: Object(ne.jsx)(
                                    dn,
                                    {
                                      item: e,
                                      isLarge: o,
                                      isFavourite: e.isFavourite,
                                    },
                                    e.id
                                  ),
                                },
                                e.id
                              );
                            }),
                        }
                      )
                    ),
                  ],
                }),
            ],
          });
        },
        gn =
          (a(137),
          function () {
            return Object(ne.jsxs)(b.a.footer, {
              variants: C,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              className: "Credits",
              children: [
                Object(ne.jsx)("span", {
                  children: "Developed by",
                }),
                Object(ne.jsxs)(b.a.a, {
                  whileTap: {
                    scale: 0.9,
                  },
                  className: "Credits__linkwrp",
                  href: "https://github.com/Th3Wall",
                  target: "_blank",
                  rel: "noreferrer",
                  children: [
                    Object(ne.jsx)("span", {
                      children: "Quoc Hoai Nguyen",
                    }),
                    Object(ne.jsx)("img", {
                      className: "Credits__avatar",
                      src: "https://avatars.githubusercontent.com/u/25078541?v=4",
                      alt: "Credits Avatar",
                    }),
                  ],
                }),
              ],
            });
          }),
        En = function (e) {
          var t = Object(s.b)(),
            a = Object(c.useState)(null),
            n = Object(l.a)(a, 2),
            r = n[0],
            i = n[1];
          return (
            Object(c.useEffect)(
              function () {
                var a = null;
                switch (e) {
                  case "movies":
                    a = sn;
                    break;
                  case "series":
                    a = on;
                    break;
                  case "popular":
                    a = ln;
                }
                var n = a.map(function (e) {
                  return (
                    t(e.thunk(e.url, true)),
                    {
                      id: e.id,
                      title: e.title,
                      genre: e.genre,
                      selector: e.selector,
                      isLarge: e.isLarge,
                    }
                  );
                });
                i(n);
              },
              [e, t]
            ),
            r
          );
        },
        Nn = function () {
          var e = En("movies");
          return Object(ne.jsxs)(b.a.div, {
            className: "Homepage",
            variants: R,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            children: [
              Object(ne.jsx)($e, {}),
              e &&
                e.map(function (e) {
                  return Object(ne.jsx)(xn, Object(n.a)({}, e), e.id);
                }),
              Object(ne.jsx)(gn, {}),
            ],
          });
        },
        yn =
          (a(138),
          function () {
            var e = En("movies");
            return Object(ne.jsxs)(b.a.div, {
              className: "Movies",
              variants: R,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: [
                Object(ne.jsx)($e, {
                  type: "movies",
                }),
                e &&
                  e.map(function (e) {
                    return Object(ne.jsx)(xn, Object(n.a)({}, e), e.id);
                  }),
                Object(ne.jsx)(gn, {}),
              ],
            });
          }),
        Sn =
          (a(139),
          function () {
            var e = En("series");
            return Object(ne.jsxs)(b.a.div, {
              className: "TVSeries",
              variants: R,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: [
                Object(ne.jsx)($e, {
                  type: "series",
                }),
                e &&
                  e.map(function (e) {
                    return Object(ne.jsx)(xn, Object(n.a)({}, e), e.id);
                  }),
                Object(ne.jsx)(gn, {}),
              ],
            });
          }),
        Cn =
          (a(140),
          function () {
            var e = En("popular");
            return Object(ne.jsxs)(b.a.div, {
              className: "Popular",
              variants: R,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: [
                e &&
                  e.map(function (e) {
                    return Object(ne.jsx)(xn, Object(n.a)({}, e), e.id);
                  }),
                Object(ne.jsx)(gn, {}),
              ],
            });
          }),
        Rn =
          (a(141),
          a(142),
          function (e) {
            var t = e.item,
              a = e.item,
              c = a.title,
              r = a.original_name,
              i = a.original_title,
              o = a.name,
              l = a.genre_ids,
              u = a.backdrop_path,
              j = e.isFavourite,
              d = c || i || o || r,
              O = jn(l),
              p = Object(s.b)(),
              f = function () {
                p(
                  Ae(
                    Object(n.a)(
                      Object(n.a)({}, t),
                      {},
                      {
                        fallbackTitle: d,
                        genresConverted: O,
                        isFavourite: j,
                      }
                    )
                  )
                );
              };
            return Object(ne.jsxs)(b.a.div, {
              variants: g,
              className: "Poster",
              onClick: f,
              children: [
                u
                  ? Object(ne.jsx)("img", {
                      src: "".concat(w, "/").concat(u),
                      alt: d,
                    })
                  : Object(ne.jsxs)(ne.Fragment, {
                      children: [
                        Object(ne.jsx)("img", {
                          src: M,
                          alt: d,
                        }),
                        Object(ne.jsx)("div", {
                          className: "Poster__fallback",
                          children: Object(ne.jsx)("span", {
                            children: d,
                          }),
                        }),
                      ],
                    }),
                Object(ne.jsxs)("div", {
                  className: "Poster__info",
                  children: [
                    Object(ne.jsxs)("div", {
                      className: "Poster__info--iconswrp",
                      children: [
                        Object(ne.jsx)(Y.b, {
                          className: "Poster__info--icon icon--play",
                          onClick: function (e) {
                            e.stopPropagation();
                          },
                          to: "/play",
                          children: Object(ne.jsx)(B.d, {}),
                        }),
                        j
                          ? Object(ne.jsx)("button", {
                              className: "Poster__info--icon icon--favourite",
                              onClick: function (e) {
                                e.stopPropagation(),
                                  p(
                                    nt(
                                      Object(n.a)(
                                        Object(n.a)({}, t),
                                        {},
                                        {
                                          isFavourite: j,
                                        }
                                      )
                                    )
                                  );
                              },
                              children: Object(ne.jsx)(B.c, {}),
                            })
                          : Object(ne.jsx)("button", {
                              className: "Poster__info--icon icon--favourite",
                              onClick: function (e) {
                                e.stopPropagation(),
                                  p(
                                    at(
                                      Object(n.a)(
                                        Object(n.a)({}, t),
                                        {},
                                        {
                                          isFavourite: j,
                                        }
                                      )
                                    )
                                  );
                              },
                              children: Object(ne.jsx)(B.e, {}),
                            }),
                        Object(ne.jsx)("button", {
                          className: "Poster__info--icon icon--toggleModal",
                          children: Object(ne.jsx)(B.b, {
                            onClick: f,
                          }),
                        }),
                      ],
                    }),
                    Object(ne.jsx)("div", {
                      className: "Poster__info--title",
                      children: Object(ne.jsx)("h3", {
                        children: d,
                      }),
                    }),
                    Object(ne.jsx)("div", {
                      className: "Poster__info--genres",
                      children:
                        O &&
                        O.map(function (e) {
                          return Object(ne.jsx)(
                            "span",
                            {
                              className: "genre-title",
                              children: e,
                            },
                            "Genre--id_".concat(e)
                          );
                        }),
                    }),
                  ],
                }),
              ],
            });
          }),
        In = Object(re.a)(
          [
            function (e) {
              return e.favourites;
            },
          ],
          function (e) {
            return e.favouritesList;
          }
        ),
        An = function () {
          var e = Object(s.c)(In);
          return Object(ne.jsxs)(b.a.div, {
            className: "MyList",
            variants: R,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            children: [
              e &&
                e.length > 0 &&
                Object(ne.jsx)("h2", {
                  className: "MyList__title",
                  children: "My List",
                }),
              Object(ne.jsx)(b.a.div, {
                className: "MyList__wrp",
                variants: p,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                children:
                  e && e.length > 0
                    ? e.map(function (e) {
                        return Object(ne.jsx)(
                          Rn,
                          Object(n.a)(
                            {
                              item: e,
                            },
                            e
                          ),
                          e.id
                        );
                      })
                    : Object(ne.jsx)("h2", {
                        className: "MyList__title",
                        children:
                          "Sorry, you don't have a favourite movie or tv-show yet.",
                      }),
              }),
              Object(ne.jsx)(gn, {}),
            ],
          });
        },
        Tn =
          (a(143),
          a(144),
          a(145),
          function (e) {
            var t = e.type,
              a = e.placeholder,
              n = e.name,
              c = e.additionalClass,
              r = e.validationMessage,
              s = e.validation,
              i = e.errors,
              o = e.disabled;
            return Object(ne.jsxs)(ne.Fragment, {
              children: [
                Object(ne.jsx)("input", {
                  type: t,
                  name: n,
                  placeholder: a,
                  className: "InputField\n                    "
                    .concat(
                      (null === i || void 0 === i ? void 0 : i[n]) &&
                        "Input--error",
                      "\n                    "
                    )
                    .concat(c && c, "\n                "),
                  ref: s,
                  disabled: o,
                }),
                (null === i || void 0 === i ? void 0 : i[n]) &&
                  Object(ne.jsx)("p", {
                    className: "InputField__label",
                    children: r,
                  }),
              ],
            });
          }),
        wn =
          (a(146),
          function () {
            return Object(ne.jsx)("span", {
              className: "Loader",
            });
          }),
        Mn = a(85),
        Fn = a(63),
        kn = function () {
          var e = Object(s.b)(),
            t = Object(s.c)(oe),
            a = Object(Fn.a)({
              mode: "onTouched",
            }),
            n = a.register,
            c = a.handleSubmit,
            r = a.errors;
          return Object(ne.jsxs)(b.a.form, {
            variants: f,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            className: "SignIn__form",
            onSubmit: c(function (t) {
              var a = t.email,
                n = t.password;
              e({
                type: je,
                payload: {
                  email: a,
                  password: n,
                },
              });
            }),
            children: [
              Object(ne.jsx)(b.a.div, {
                variants: h,
                className: "SignIn__form--inputwrp",
                children: Object(ne.jsx)(Tn, {
                  type: "text",
                  name: "email",
                  placeholder: "E-mail",
                  validationMessage: "Please enter a valid email address.",
                  validation: n({
                    required: !0,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  }),
                  errors: r,
                  disabled: t,
                }),
              }),
              Object(ne.jsx)(b.a.div, {
                variants: h,
                className: "SignIn__form--inputwrp",
                children: Object(ne.jsx)(Tn, {
                  type: "password",
                  name: "password",
                  placeholder: "Password",
                  validationMessage:
                    "The password should have a length between 6 and 30 characters.",
                  validation: n({
                    required: !0,
                    minLength: 6,
                    maxLength: 30,
                  }),
                  errors: r,
                  disabled: t,
                }),
              }),
              Object(ne.jsx)(b.a.button, {
                type: "submit",
                variants: h,
                className: "SignIn__form--button button__submit ".concat(
                  t && "loading"
                ),
                disabled: t,
                children: t ? Object(ne.jsx)(wn, {}) : "Sign in",
              }),
              Object(ne.jsxs)(b.a.button, {
                type: "button",
                variants: h,
                className: "SignIn__form--button button__google ".concat(
                  t && "loading"
                ),
                onClick: function () {
                  return e({
                    type: de,
                  });
                },
                disabled: t,
                children: [
                  !t && Object(ne.jsx)(Mn.a, {}),
                  t ? Object(ne.jsx)(wn, {}) : "Sign in with Google",
                ],
              }),
            ],
          });
        },
        Un =
          (a(147),
          function () {
            var e = Object(s.b)(),
              t = Object(s.c)(oe),
              a = Object(Fn.a)({
                mode: "onTouched",
              }),
              n = a.register,
              c = a.handleSubmit,
              r = a.errors,
              i = a.getValues;
            return Object(ne.jsxs)(b.a.form, {
              variants: f,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              className: "SignUp__form",
              onSubmit: c(function (t) {
                var a = t.displayName,
                  n = t.email,
                  c = t.password;
                e({
                  type: fe,
                  payload: {
                    displayName: a,
                    email: n,
                    password: c,
                  },
                });
              }),
              children: [
                Object(ne.jsx)(b.a.div, {
                  variants: h,
                  className: "SignUp__form--inputwrp",
                  children: Object(ne.jsx)(Tn, {
                    type: "text",
                    name: "displayName",
                    placeholder: "Your name",
                    validationMessage: "Please enter your name.",
                    validation: n({
                      required: !0,
                      minLength: 2,
                      maxLength: 60,
                    }),
                    errors: r,
                    disabled: t,
                  }),
                }),
                Object(ne.jsx)(b.a.div, {
                  variants: h,
                  className: "SignUp__form--inputwrp",
                  children: Object(ne.jsx)(Tn, {
                    type: "text",
                    name: "email",
                    placeholder: "E-mail",
                    validationMessage: "Please enter a valid email address.",
                    validation: n({
                      required: !0,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    }),
                    errors: r,
                    disabled: t,
                  }),
                }),
                Object(ne.jsx)(b.a.div, {
                  variants: h,
                  className: "SignUp__form--inputwrp",
                  children: Object(ne.jsx)(Tn, {
                    type: "password",
                    name: "password",
                    placeholder: "Password",
                    validationMessage:
                      "The password should have a length between 6 and 30 characters.",
                    validation: n({
                      required: !0,
                      minLength: 6,
                      maxLength: 30,
                    }),
                    errors: r,
                    disabled: t,
                  }),
                }),
                Object(ne.jsx)(b.a.div, {
                  variants: h,
                  className: "SignUp__form--inputwrp",
                  children: Object(ne.jsx)(Tn, {
                    type: "password",
                    name: "check_password",
                    placeholder: "Repeat your password",
                    validationMessage: "Passwords should match",
                    validation: n({
                      validate: {
                        matchesPreviousPassword: function (e) {
                          var t = i().password;
                          return (e && t === e) || "Passwords should match!";
                        },
                      },
                    }),
                    errors: r,
                    disabled: t,
                  }),
                }),
                Object(ne.jsx)(b.a.button, {
                  type: "submit",
                  variants: h,
                  className: "SignUp__form--button button__submit ".concat(
                    t && "loading"
                  ),
                  disabled: t,
                  children: t ? Object(ne.jsx)(wn, {}) : "Sign Up",
                }),
              ],
            });
          }),
        Ln = function () {
          var e = Object(c.useState)(!0),
            t = Object(l.a)(e, 2),
            a = t[0],
            n = t[1],
            r = Object(s.c)(le);
          return Object(ne.jsxs)(b.a.div, {
            className: "Auth",
            variants: S,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            children: [
              Object(ne.jsx)("div", {
                className: "Auth__opacityLayer",
              }),
              Object(ne.jsx)("div", {
                className: "Auth__bgLayer",
                style: {
                  backgroundImage: "url(".concat(L, ")"),
                },
              }),
              Object(ne.jsx)(Y.b, {
                to: "/",
                className: "Auth__logo",
                children: Object(ne.jsx)("img", {
                  className: "Auth__logo--img",
                  src: F,
                  alt: "Fakeflix_logo",
                }),
              }),
              Object(ne.jsx)(b.a.div, {
                className: "Auth__content",
                variants: m,
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                children: Object(ne.jsxs)(b.a.div, {
                  variants: f,
                  initial: "initial",
                  animate: "animate",
                  exit: "exit",
                  children: [
                    Object(ne.jsx)(b.a.h2, {
                      variants: h,
                      className: "Auth__content--title",
                      children: a ? "Sign In" : "Sign Up",
                    }),
                    Object(ne.jsx)(b.a.small, {
                      variants: h,
                      className: "Auth__content--disclaimer",
                      children:
                        "Pay attention: this is not the original Netflix ".concat(
                          a ? "sign in" : "sign up",
                          ". Don't insert your real credentials here!"
                        ),
                    }),
                    a ? Object(ne.jsx)(kn, {}) : Object(ne.jsx)(Un, {}),
                    r &&
                      Object(ne.jsx)(b.a.p, {
                        variants: h,
                        className: "Auth__content--errors",
                        children: r,
                      }),
                    Object(ne.jsx)(b.a.hr, {
                      variants: h,
                      className: "Auth__content--divider",
                    }),
                    Object(ne.jsxs)(b.a.small, {
                      variants: h,
                      className: "Auth__content--toggleView",
                      children: [
                        a
                          ? "Haven't you registered yet? "
                          : "Do you already have an account? ",
                        Object(ne.jsx)("span", {
                          className: "toggler",
                          onClick: function () {
                            return n(!a);
                          },
                          children: a ? "Sign Up" : "Sign In",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Pn =
          (a(148),
          function (e) {
            return e.search;
          }),
        Dn = Object(re.a)([Pn], function (e) {
          return e.searchResults;
        }),
        Hn = Object(re.a)([Pn], function (e) {
          return e.inputValue;
        }),
        Vn = function (e) {
          var t = e.results,
            a = Object(s.c)(Hn);
          return Object(ne.jsxs)("div", {
            className: "Search",
            children: [
              t &&
                t.length > 0 &&
                Object(ne.jsxs)("h2", {
                  className: "Search__title",
                  children: ["Search results for: ", a],
                }),
              Object(ne.jsx)(b.a.div, {
                className: "Search__wrp",
                variants: p,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                children:
                  t && t.length > 0
                    ? t.map(function (e) {
                        return Object(ne.jsx)(
                          Rn,
                          Object(n.a)(
                            {
                              item: e,
                            },
                            e
                          ),
                          e.id
                        );
                      })
                    : Object(ne.jsx)("h2", {
                        className: "Search__title",
                        children:
                          "Sorry, we searched everywhere but we did not found any movie or tv-show with that title.",
                      }),
              }),
            ],
          });
        },
        Gn =
          (a(149),
          a(150),
          function () {
            return Object(ne.jsxs)("div", {
              className: "Skeleton__Page",
              children: [
                Object(ne.jsx)(Se, {
                  type: "title",
                }),
                Object(ne.jsx)(On, {}),
              ],
            });
          }),
        Bn = function (e) {
          var t = Object(c.useRef)(null),
            a = Object(c.useState)(!1),
            n = Object(l.a)(a, 2),
            r = n[0],
            s = n[1],
            i = t.current,
            o = Object(c.useCallback)(
              function (t) {
                var a = Object(l.a)(t, 1)[0];
                s(a.isIntersecting), a.isIntersecting && e();
              },
              [e]
            );
          return (
            Object(c.useEffect)(
              function () {
                var e = new IntersectionObserver(o);
                return (
                  i && e.observe(i),
                  function () {
                    i && e.unobserve(i);
                  }
                );
              },
              [i, o]
            ),
            [t, r]
          );
        },
        Yn = function (e) {
          var t = e.match,
            a = Object(c.useState)(2),
            r = Object(l.a)(a, 2),
            o = r[0],
            u = r[1],
            j = t.url.split("/"),
            d = Object(i.i)().categoryName,
            O = (function (e, t, a) {
              var n = Object(s.b)(),
                r = Object(c.useState)(),
                i = Object(l.a)(r, 2),
                o = i[0],
                u = i[1];
              return (
                Object(c.useEffect)(
                  function () {
                    var c = null;
                    switch (e) {
                      case "browse":
                      case "movies":
                        c = sn;
                        break;
                      case "tvseries":
                        c = on;
                        break;
                      case "popular":
                        c = ln;
                    }
                    var r = c.filter(function (e) {
                        return e.genre === t;
                      }),
                      s = Object(l.a)(r, 1)[0];
                    n(s.thunk("".concat(s.url, "&page=").concat(a))), u(s);
                  },
                  [n, t, e, a]
                ),
                o
              );
            })(j[1], d, o),
            f = O ? O.selector : function () {},
            m = Object(s.c)(f),
            _ = Bn(function () {
              return u(function (e) {
                return e + 1;
              });
            }),
            v = Object(l.a)(_, 2),
            h = v[0],
            x = v[1];
          return Object(ne.jsx)("div", {
            className: "Category",
            children: O
              ? Object(ne.jsxs)(ne.Fragment, {
                  children: [
                    Object(ne.jsx)("h2", {
                      className: "Category__title",
                      children: O.title,
                    }),
                    Object(ne.jsxs)(b.a.div, {
                      className: "Category__wrp",
                      variants: p,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      children: [
                        m.data &&
                          m.data.length > 0 &&
                          m.data.map(function (e) {
                            return Object(ne.jsx)(
                              Rn,
                              Object(n.a)(
                                {
                                  item: e,
                                },
                                e
                              ),
                              e.id
                            );
                          }),
                        m.loading &&
                          Object(ne.jsx)("div", {
                            className: "Category__subtitle",
                            children: Object(ne.jsx)(On, {}),
                          }),
                        m.error &&
                          Object(ne.jsx)("div", {
                            className: "Category__subtitle",
                            children: "Oops, an error occurred.",
                          }),
                        Object(ne.jsx)("div", {
                          className: "Category__endPage ".concat(
                            x ? "intersected" : null
                          ),
                          ref: h,
                        }),
                      ],
                    }),
                  ],
                })
              : Object(ne.jsx)(Gn, {}),
          });
        },
        Qn =
          (a(151),
          function (e) {
            return e.detailModal;
          }),
        Kn = Object(re.a)([Qn], function (e) {
          return e.modalIsClosed;
        }),
        Wn = Object(re.a)([Qn], function (e) {
          return e.modalContent;
        }),
        zn = a(86),
        Xn = function () {
          var e,
            t = Object(s.b)(),
            a = Object(s.c)(Kn),
            r = Object(s.c)(Wn),
            i = function () {
              return t({
                type: Ie,
              });
            },
            l = r.overview,
            u = r.fallbackTitle,
            j = r.backdrop_path,
            O = r.release_date,
            p = r.first_air_date,
            h = r.vote_average,
            x = r.original_language,
            g = r.adult,
            E = r.genresConverted,
            N = r.isFavourite,
            y = E ? E.join(", ") : "Not available",
            S =
              void 0 === g
                ? "Not available"
                : g
                ? "Suitable for adults only"
                : "Suitable for all ages",
            C = O ? I(O) : p ? I(p) : "Not Available",
            R = Object(c.useRef)();
          return (
            d(R, function () {
              a || i();
            }),
            Object(ne.jsx)(o.a, {
              exitBeforeEnter: !0,
              children:
                !a &&
                Object(ne.jsx)(ne.Fragment, {
                  children: Object(ne.jsx)(
                    b.a.div,
                    {
                      variants: _,
                      initial: "hidden",
                      animate: "visible",
                      exit: "hidden",
                      className: "Modal__overlay ".concat(
                        a && "Modal__invisible"
                      ),
                      children: Object(ne.jsxs)(
                        b.a.div,
                        {
                          variants: m,
                          ref: R,
                          className: "Modal__wrp ".concat(
                            a && "Modal__invisible"
                          ),
                          children: [
                            Object(ne.jsx)(b.a.button, {
                              className: "Modal__closebtn",
                              onClick: i,
                              children: Object(ne.jsx)(zn.a, {}),
                            }),
                            Object(ne.jsxs)("div", {
                              className: "Modal__image--wrp",
                              children: [
                                Object(ne.jsx)("div", {
                                  className: "Modal__image--shadow",
                                }),
                                Object(ne.jsx)("img", {
                                  className: "Modal__image--img",
                                  src: j ? "".concat(w, "/").concat(j) : M,
                                  alt: u,
                                }),
                                Object(ne.jsxs)("div", {
                                  className: "Modal__image--buttonswrp",
                                  children: [
                                    Object(ne.jsxs)(Y.b, {
                                      className: "Modal__image--button",
                                      onClick: function (e) {
                                        e.stopPropagation(), i();
                                      },
                                      to: "/play",
                                      children: [
                                        Object(ne.jsx)(B.d, {}),
                                        Object(ne.jsx)("span", {
                                          children: "Play",
                                        }),
                                      ],
                                    }),
                                    N
                                      ? Object(ne.jsx)("button", {
                                          className:
                                            "Modal__image--button-circular",
                                          onClick: function (e) {
                                            e.stopPropagation(),
                                              t(
                                                nt(
                                                  Object(n.a)(
                                                    Object(n.a)({}, r),
                                                    {},
                                                    {
                                                      isFavourite: N,
                                                    }
                                                  )
                                                )
                                              ),
                                              a || i();
                                          },
                                          children: Object(ne.jsx)(B.c, {}),
                                        })
                                      : Object(ne.jsx)("button", {
                                          className:
                                            "Modal__image--button-circular",
                                          onClick: function (e) {
                                            e.stopPropagation(),
                                              t(
                                                at(
                                                  Object(n.a)(
                                                    Object(n.a)({}, r),
                                                    {},
                                                    {
                                                      isFavourite: N,
                                                    }
                                                  )
                                                )
                                              );
                                          },
                                          children: Object(ne.jsx)(B.e, {}),
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            Object(ne.jsxs)(b.a.div, {
                              variants: f,
                              initial: "initial",
                              animate: "animate",
                              exit: "exit",
                              className: "Modal__info--wrp",
                              children: [
                                Object(ne.jsx)(b.a.h3, {
                                  variants: v,
                                  className: "Modal__info--title",
                                  children: u,
                                }),
                                Object(ne.jsx)(b.a.p, {
                                  variants: v,
                                  className: "Modal__info--description",
                                  children: l,
                                }),
                                Object(ne.jsx)(b.a.hr, {
                                  variants: v,
                                  className: "Modal__info--line",
                                }),
                                Object(ne.jsxs)(b.a.h4, {
                                  variants: v,
                                  className: "Modal__info--otherTitle",
                                  children: [
                                    "Info on ",
                                    Object(ne.jsx)("b", {
                                      children: u,
                                    }),
                                  ],
                                }),
                                Object(ne.jsxs)(b.a.div, {
                                  variants: v,
                                  className: "Modal__info--row",
                                  children: [
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-label",
                                      children: "Genres: ",
                                    }),
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-description",
                                      children: y,
                                    }),
                                  ],
                                }),
                                Object(ne.jsxs)(b.a.div, {
                                  variants: v,
                                  className: "Modal__info--row",
                                  children: [
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-label",
                                      children: O
                                        ? "Release date: "
                                        : "First air date: ",
                                    }),
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-description",
                                      children: C,
                                    }),
                                  ],
                                }),
                                Object(ne.jsxs)(b.a.div, {
                                  variants: v,
                                  className: "Modal__info--row",
                                  children: [
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-label",
                                      children: "Average vote: ",
                                    }),
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-description",
                                      children: h || "Not available",
                                    }),
                                  ],
                                }),
                                Object(ne.jsxs)(b.a.div, {
                                  variants: v,
                                  className: "Modal__info--row",
                                  children: [
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-label",
                                      children: "Original language: ",
                                    }),
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-description",
                                      children:
                                        ((e = x),
                                        e.charAt(0).toUpperCase() + e.slice(1)),
                                    }),
                                  ],
                                }),
                                Object(ne.jsxs)(b.a.div, {
                                  variants: v,
                                  className: "Modal__info--row",
                                  children: [
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-label",
                                      children: "Age classification: ",
                                    }),
                                    Object(ne.jsx)("span", {
                                      className: "Modal__info--row-description",
                                      children: S,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        "modal"
                      ),
                    },
                    "modalOverlay"
                  ),
                }),
            })
          );
        },
        qn =
          (a(152),
          function () {
            var e = Object(i.g)(),
              t = Object(c.useRef)(null);
            return (
              Object(c.useEffect)(
                function () {
                  setTimeout(function () {
                    !(function () {
                      var e = new Audio(P).play();
                      void 0 !== e &&
                        e
                          .then(function () {})
                          .catch(function (e) {
                            return console.error(e);
                          });
                    })();
                  }, 200),
                    setTimeout(function () {
                      e.push("/browse");
                    }, 5700);
                },
                [e]
              ),
              Object(ne.jsxs)(b.a.div, {
                id: "SplashAnimation__wrp",
                className: "SplashAnimation",
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
                children: [
                  Object(ne.jsx)("audio", {
                    ref: t,
                    src: P,
                  }),
                  Object(ne.jsxs)("div", {
                    className: "netflixintro",
                    letter: "F",
                    children: [
                      Object(ne.jsxs)("div", {
                        className: "helper-1",
                        children: [
                          Object(ne.jsxs)("div", {
                            className: "effect-brush",
                            children: [
                              Object(ne.jsx)("span", {
                                className: "fur-31",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-30",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-29",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-28",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-27",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-26",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-25",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-24",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-23",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-22",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-21",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-20",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-19",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-18",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-17",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-16",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-15",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-14",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-13",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-12",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-11",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-10",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-9",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-8",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-7",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-6",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-5",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-4",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-3",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-2",
                              }),
                              Object(ne.jsx)("span", {
                                className: "fur-1",
                              }),
                            ],
                          }),
                          Object(ne.jsxs)("div", {
                            className: "effect-lumieres",
                            children: [
                              Object(ne.jsx)("span", {
                                className: "lamp-1",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-2",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-3",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-4",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-5",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-6",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-7",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-8",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-9",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-10",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-11",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-12",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-13",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-14",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-15",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-16",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-17",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-18",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-19",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-20",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-21",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-22",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-23",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-24",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-25",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-26",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-27",
                              }),
                              Object(ne.jsx)("span", {
                                className: "lamp-28",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(ne.jsx)("div", {
                        className: "helper-2",
                        children: Object(ne.jsxs)("div", {
                          className: "effect-brush",
                          children: [
                            Object(ne.jsx)("span", {
                              className: "fur-31",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-30",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-29",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-28",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-27",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-26",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-25",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-24",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-23",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-22",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-21",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-20",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-19",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-18",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-17",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-16",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-15",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-14",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-13",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-12",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-11",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-10",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-9",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-8",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-7",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-6",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-5",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-4",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-3",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-2",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-1",
                            }),
                          ],
                        }),
                      }),
                      Object(ne.jsx)("div", {
                        className: "helper-3",
                        children: Object(ne.jsxs)("div", {
                          className: "effect-brush",
                          children: [
                            Object(ne.jsx)("span", {
                              className: "fur-31",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-30",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-29",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-28",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-27",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-26",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-25",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-24",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-23",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-22",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-21",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-20",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-19",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-18",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-17",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-16",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-15",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-14",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-13",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-12",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-11",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-10",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-9",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-8",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-7",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-6",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-5",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-4",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-3",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-2",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-1",
                            }),
                          ],
                        }),
                      }),
                      Object(ne.jsx)("div", {
                        className: "helper-4",
                        children: Object(ne.jsxs)("div", {
                          className: "effect-brush",
                          children: [
                            Object(ne.jsx)("span", {
                              className: "fur-31",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-30",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-29",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-28",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-27",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-26",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-25",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-24",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-23",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-22",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-21",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-20",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-19",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-18",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-17",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-16",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-15",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-14",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-13",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-12",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-11",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-10",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-9",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-8",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-7",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-6",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-5",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-4",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-3",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-2",
                            }),
                            Object(ne.jsx)("span", {
                              className: "fur-1",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
        Jn =
          (a(153),
          function () {
            var e = Object(i.g)(),
              t = Object(c.useRef)(null);
            return (
              Object(c.useEffect)(
                function () {
                  (t.current.currentTime = 0),
                    t.current.play(),
                    setTimeout(function () {
                      e.push("/browse");
                    }, 4200);
                },
                [e]
              ),
              Object(ne.jsxs)("div", {
                className: "PlayAnimation__wrp",
                children: [
                  Object(ne.jsx)("audio", {
                    ref: t,
                    src: P,
                  }),
                  Object(ne.jsx)("span", {
                    className: "PlayAnimation__text",
                    children: "FAKEFLIX",
                  }),
                ],
              })
            );
          }),
        Zn = function () {
          var e = Object(s.c)(ie),
            t = Object(s.c)(Dn),
            a = Object(s.b)(),
            r = Object(i.h)();
          return (
            Object(c.useEffect)(
              function () {
                a({
                  type: ue,
                });
              },
              [a]
            ),
            Object(ne.jsxs)("div", {
              className: "App",
              children: [
                e &&
                  Object(ne.jsxs)(ne.Fragment, {
                    children: [Object(ne.jsx)(Ne, {}), Object(ne.jsx)(Xn, {})],
                  }),
                Object(ne.jsx)(o.a, {
                  exitBeforeEnter: !0,
                  children: Object(ne.jsxs)(
                    i.d,
                    {
                      location: r,
                      children: [
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/",
                          children: Object(ne.jsx)(i.a, {
                            to: "/login",
                          }),
                        }),
                        Object(ne.jsx)(i.b, {
                          path: "/splash",
                          component: qn,
                        }),
                        Object(ne.jsx)(i.b, {
                          path: "/play",
                          component: Jn,
                        }),
                        Object(ne.jsx)(i.b, {
                          path: "/search",
                          render: function () {
                            return e
                              ? t &&
                                  Object(ne.jsx)(Vn, {
                                    results: t,
                                  })
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/browse",
                          render: function () {
                            return e
                              ? Object(ne.jsx)(Nn, {})
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/browse/:categoryName",
                          render: function (t) {
                            return e
                              ? Object(ne.jsx)(Yn, Object(n.a)({}, t))
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/tvseries",
                          render: function () {
                            return e
                              ? Object(ne.jsx)(Sn, {})
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/tvseries/:categoryName",
                          render: function (t) {
                            return e
                              ? Object(ne.jsx)(Yn, Object(n.a)({}, t))
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/movies",
                          render: function () {
                            return e
                              ? Object(ne.jsx)(yn, {})
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/movies/:categoryName",
                          render: function (t) {
                            return e
                              ? Object(ne.jsx)(Yn, Object(n.a)({}, t))
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/popular",
                          render: function () {
                            return e
                              ? Object(ne.jsx)(Cn, {})
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/popular/:categoryName",
                          render: function (t) {
                            return e
                              ? Object(ne.jsx)(Yn, Object(n.a)({}, t))
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/mylist",
                          render: function () {
                            return e
                              ? Object(ne.jsx)(An, {})
                              : Object(ne.jsx)(i.a, {
                                  to: "/login",
                                });
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          exact: !0,
                          path: "/login",
                          render: function () {
                            return e
                              ? Object(ne.jsx)(i.a, {
                                  to: "/splash",
                                })
                              : Object(ne.jsx)(Ln, {});
                          },
                        }),
                        Object(ne.jsx)(i.b, {
                          path: "*",
                          children: Object(ne.jsx)(i.a, {
                            to: "/",
                          }),
                        }),
                      ],
                    },
                    r.pathname
                  ),
                }),
              ],
            })
          );
        },
        $n = a(58),
        ec = a.n($n),
        tc = a(87),
        ac = a(30),
        nc = a(90),
        cc = a(88),
        rc = (a(154), a(92)),
        sc = a(91),
        ic = a(50),
        oc = a(89),
        lc = a.n(oc),
        uc = {
          currentUser: null,
          error: null,
          loading: !1,
        },
        jc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : uc,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case je:
            case de:
            case be:
            case fe:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Oe:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  currentUser: t.payload,
                  loading: !1,
                  error: null,
                }
              );
            case he:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  currentUser: null,
                  loading: !1,
                  error: null,
                }
              );
            case pe:
            case _e:
            case xe:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  error: t.payload,
                  loading: !1,
                }
              );
            default:
              return e;
          }
        },
        dc = {
          loading: !1,
          error: "",
          data: [],
        },
        bc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : dc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case ct:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case rt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case it:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case st:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Oc = {
          loading: !1,
          error: "",
          data: [],
        },
        pc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Oc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case ot:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case lt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case jt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case ut:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        fc = {
          loading: !1,
          error: "",
          data: [],
        },
        mc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : fc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case ft:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case mt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case vt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case _t:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        _c = {
          loading: !1,
          error: "",
          data: [],
        },
        vc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : _c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case ht:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case xt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Et:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case gt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        hc = {
          loading: !1,
          error: "",
          data: [],
        },
        xc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : hc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Nt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case yt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Ct:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case St:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        gc = {
          loading: !1,
          error: "",
          data: [],
        },
        Ec = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : gc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Rt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case It:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Tt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case At:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Nc = {
          loading: !1,
          error: "",
          data: [],
        },
        yc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Nc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case wt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Mt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case kt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Ft:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Sc = {
          loading: !1,
          error: "",
          data: [],
        },
        Cc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Sc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Ut:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Lt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Dt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Pt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Rc = {
          loading: !1,
          error: "",
          data: [],
        },
        Ic = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Rc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case dt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case bt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case pt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Ot:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Ac = {
          loading: !1,
          error: "",
          data: [],
        },
        Tc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ac,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Ht:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Vt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Bt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Gt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        wc = {
          loading: !1,
          error: "",
          data: [],
        },
        Mc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : wc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Yt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Qt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Wt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Kt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Fc = Object(ac.combineReducers)({
          actionMovies: bc,
          adventureMovies: pc,
          animationMovies: Ic,
          comedyMovies: mc,
          horrorMovies: vc,
          netflixMovies: xc,
          romanceMovies: Ec,
          topRatedMovies: yc,
          trendingMovies: Cc,
          upcomingMovies: Tc,
          latestMovies: Mc,
        }),
        kc = {
          loading: !1,
          error: "",
          data: [],
        },
        Uc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : kc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case ia:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case oa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case ua:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case la:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Lc = {
          loading: !1,
          error: "",
          data: [],
        },
        Pc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Lc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case ja:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case da:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Oa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case ba:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Dc = {
          loading: !1,
          error: "",
          data: [],
        },
        Hc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Dc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case pa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case fa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case _a:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case ma:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Vc = {
          loading: !1,
          error: "",
          data: [],
        },
        Gc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Vc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case va:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case ha:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case ga:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case xa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Bc = {
          loading: !1,
          error: "",
          data: [],
        },
        Yc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Bc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Ea:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Na:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Sa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case ya:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Qc = {
          loading: !1,
          error: "",
          data: [],
        },
        Kc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Qc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Ca:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Ra:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Aa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Ia:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Wc = {
          loading: !1,
          error: "",
          data: [],
        },
        zc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Wc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Ta:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case wa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Fa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Ma:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Xc = {
          loading: !1,
          error: "",
          data: [],
        },
        qc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Xc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case ka:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Ua:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Pa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case La:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        Jc = {
          loading: !1,
          error: "",
          data: [],
        },
        Zc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Jc,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Da:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Ha:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Ga:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Va:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        $c = {
          loading: !1,
          error: "",
          data: [],
        },
        er = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : $c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case Ba:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  loading: !0,
                }
              );
            case Ya:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: c,
                  loading: !1,
                  error: "",
                }
              );
            case Ka:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [].concat(Object(bn.a)(e.data), Object(bn.a)(c)),
                  loading: !1,
                  error: "",
                }
              );
            case Qa:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  data: [],
                  loading: !1,
                  error: c,
                }
              );
            default:
              return e;
          }
        },
        tr = Object(ac.combineReducers)({
          netflixSeries: Uc,
          actionAdventureSeries: Pc,
          animationSeries: Hc,
          comedySeries: Gc,
          crimeSeries: Yc,
          documentarySeries: Kc,
          familySeries: zc,
          kidsSeries: qc,
          sciFiFantasySeries: Zc,
          trendingSeries: er,
        }),
        ar = function (e, t) {
          return e.find(function (e) {
            return e.id === t.id;
          })
            ? Object(bn.a)(e)
            : [].concat(Object(bn.a)(e), [t]);
        },
        nr = function (e, t) {
          return e.find(function (e) {
            return e.id === t.id;
          })
            ? e.filter(function (e) {
                return e.id !== t.id;
              })
            : Object(bn.a)(e);
        },
        cr = {
          favouritesList: [],
        },
        rr = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : cr,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case et:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  favouritesList: ar(e.favouritesList, t.payload),
                }
              );
            case tt:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  favouritesList: nr(e.favouritesList, t.payload),
                }
              );
            default:
              return e;
          }
        },
        sr = {
          searchResults: [],
          inputValue: "",
          error: null,
          isLoading: !1,
        },
        ir = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : sr,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Q:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  inputValue: t.payload,
                }
              );
            case K:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  inputValue: "",
                }
              );
            case W:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  isLoading: !0,
                }
              );
            case z:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  searchResults: Object(bn.a)(t.payload),
                  error: !1,
                  isLoading: !1,
                }
              );
            case X:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  searchResults: [],
                  error: t.payload,
                  isLoading: !1,
                }
              );
            default:
              return e;
          }
        },
        or = {
          modalIsClosed: !0,
          modalContent: {},
        },
        lr = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : or,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Re:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  modalIsClosed: !1,
                  modalContent: Object(n.a)({}, t.payload),
                }
              );
            case Ie:
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                {
                  modalIsClosed: !0,
                  modalContent: {},
                }
              );
            default:
              return e;
          }
        },
        ur = {
          key: "root",
          storage: lc.a,
          whitelist: ["favourites"],
        },
        jr = Object(ac.combineReducers)({
          search: ir,
          auth: jc,
          movies: Fc,
          series: tr,
          favourites: rr,
          detailModal: lr,
        }),
        dr = Object(ic.a)(ur, jr),
        br = a(8),
        Or = a(21),
        pr = a(43),
        fr = a(54),
        mr =
          (a(160),
          a(157),
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "589912771675",
            REACT_APP_FIREBASE_MEASUREMEMT_ID: "G-DSYVJQ0MWN",
            REACT_APP_FIREBASE_STORAGE_BUCKET: "fakeflix-c0203.appspot.com",
            REACT_APP_FIREBASE_AUTH_DOMAIN: "fakeflix-c0203.firebaseapp.com",
            REACT_APP_API_KEY: "e8d53ad78d99a4722c3f0f0f6a5c9014",
            REACT_APP_FIREBASE_PROJECT_ID: "fakeflix-c0203",
            REACT_APP_FIREBASE_APP_ID:
              "1:589912771675:web:9fb1e0684f7bf68103837e",
            REACT_APP_FIREBASE_API_KEY:
              "AIzaSyCyLFoPkZEGUM5Jbo2HKQgMxjfBN26MpAI",
          })),
        _r = {
          apiKey: mr.REACT_APP_FIREBASE_API_KEY,
          authDomain: mr.REACT_APP_FIREBASE_AUTH_DOMAIN,
          projectId: mr.REACT_APP_FIREBASE_PROJECT_ID,
          storageBucket: mr.REACT_APP_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: mr.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
          appId: mr.REACT_APP_FIREBASE_APP_ID,
          measurementId: mr.REACT_APP_FIREBASE_MEASUREMEMT_ID,
        },
        vr = (function () {
          var e = Object(pr.a)(
            Object(br.a)().mark(function e(t, a) {
              var c, r, s, i, o;
              return Object(br.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (c = xr.doc("users/".concat(t.uid))),
                          (e.next = 5),
                          c.get()
                        );
                      case 5:
                        if (e.sent.exists) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (r = t.displayName),
                          (s = t.email),
                          (i = t.photoURL),
                          (o = new Date()),
                          (e.prev = 9),
                          (e.next = 12),
                          c.set(
                            Object(n.a)(
                              {
                                displayName: r,
                                email: s,
                                photoURL: i,
                                createdAt: o,
                              },
                              a
                            )
                          )
                        );
                      case 12:
                        e.next = 17;
                        break;
                      case 14:
                        (e.prev = 14),
                          (e.t0 = e.catch(9)),
                          console.log("error creating user", e.t0.message);
                      case 17:
                        return e.abrupt("return", c);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[9, 14]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })();
      fr.a.initializeApp(_r);
      var hr = fr.a.auth(),
        xr = fr.a.firestore(),
        gr = new fr.a.auth.GoogleAuthProvider();
      gr.setCustomParameters({
        prompt: "select_account",
      });
      fr.a;
      var Er = Object(br.a)().mark(Dr),
        Nr = Object(br.a)().mark(Hr),
        yr = Object(br.a)().mark(Vr),
        Sr = Object(br.a)().mark(Gr),
        Cr = Object(br.a)().mark(Br),
        Rr = Object(br.a)().mark(Yr),
        Ir = Object(br.a)().mark(Qr),
        Ar = Object(br.a)().mark(Kr),
        Tr = Object(br.a)().mark(Wr),
        wr = Object(br.a)().mark(zr),
        Mr = Object(br.a)().mark(Xr),
        Fr = Object(br.a)().mark(qr),
        kr = Object(br.a)().mark(Jr),
        Ur = Object(br.a)().mark(Zr),
        Lr = Object(br.a)().mark($r),
        Pr = Object(br.a)().mark(es);

      function Dr(e, t) {
        var a, c;
        return Object(br.a)().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.prev = 0), (r.next = 3), Object(Or.b)(vr, e, t);
                case 3:
                  return (a = r.sent), (r.next = 6), a.get();
                case 6:
                  return (
                    (c = r.sent),
                    (r.next = 9),
                    Object(Or.c)(
                      ((s = Object(n.a)(
                        {
                          id: c.id,
                        },
                        c.data()
                      )),
                      {
                        type: Oe,
                        payload: s,
                      })
                    )
                  );
                case 9:
                  r.next = 15;
                  break;
                case 11:
                  return (
                    (r.prev = 11),
                    (r.t0 = r.catch(0)),
                    (r.next = 15),
                    Object(Or.c)(ge(r.t0.message))
                  );
                case 15:
                case "end":
                  return r.stop();
              }
            var s;
          },
          Er,
          null,
          [[0, 11]]
        );
      }

      function Hr() {
        var e, t;
        return Object(br.a)().wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), hr.signInWithPopup(gr);
                case 3:
                  return (e = a.sent), (t = e.user), (a.next = 7), Dr(t);
                case 7:
                  a.next = 13;
                  break;
                case 9:
                  return (
                    (a.prev = 9),
                    (a.t0 = a.catch(0)),
                    (a.next = 13),
                    Object(Or.c)(ge(a.t0.message))
                  );
                case 13:
                case "end":
                  return a.stop();
              }
          },
          Nr,
          null,
          [[0, 9]]
        );
      }

      function Vr(e) {
        var t, a, n, c, r;
        return Object(br.a)().wrap(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (a = t.email),
                    (n = t.password),
                    (s.prev = 1),
                    (s.next = 4),
                    hr.signInWithEmailAndPassword(a, n)
                  );
                case 4:
                  return (c = s.sent), (r = c.user), (s.next = 8), Dr(r);
                case 8:
                  s.next = 14;
                  break;
                case 10:
                  return (
                    (s.prev = 10),
                    (s.t0 = s.catch(1)),
                    (s.next = 14),
                    Object(Or.c)(ge(s.t0.message))
                  );
                case 14:
                case "end":
                  return s.stop();
              }
          },
          yr,
          null,
          [[1, 10]]
        );
      }

      function Gr() {
        var e, t;
        return Object(br.a)().wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), hr.signInAnonymously();
                case 3:
                  return (e = a.sent), (t = e.user), (a.next = 7), Dr(t);
                case 7:
                  a.next = 13;
                  break;
                case 9:
                  return (
                    (a.prev = 9),
                    (a.t0 = a.catch(0)),
                    (a.next = 13),
                    Object(Or.c)(ge(a.t0.message))
                  );
                case 13:
                case "end":
                  return a.stop();
              }
          },
          Sr,
          null,
          [[0, 9]]
        );
      }

      function Br() {
        var e;
        return Object(br.a)().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    (t.next = 3),
                    new Promise(function (e, t) {
                      var a = hr.onAuthStateChanged(function (t) {
                        a(), e(t);
                      }, t);
                    })
                  );
                case 3:
                  if ((e = t.sent)) {
                    t.next = 6;
                    break;
                  }
                  return t.abrupt("return");
                case 6:
                  return (t.next = 8), Dr(e);
                case 8:
                  t.next = 14;
                  break;
                case 10:
                  return (
                    (t.prev = 10),
                    (t.t0 = t.catch(0)),
                    (t.next = 14),
                    Object(Or.c)(ge(t.t0.message))
                  );
                case 14:
                case "end":
                  return t.stop();
              }
          },
          Cr,
          null,
          [[0, 10]]
        );
      }

      function Yr() {
        return Object(br.a)().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), hr.signOut();
                case 3:
                  return (
                    (e.next = 5),
                    Object(Or.c)({
                      type: he,
                    })
                  );
                case 5:
                  e.next = 11;
                  break;
                case 7:
                  return (
                    (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    (e.next = 11),
                    Object(Or.c)(
                      ((t = e.t0.message),
                      {
                        type: xe,
                        payload: t,
                      })
                    )
                  );
                case 11:
                case "end":
                  return e.stop();
              }
            var t;
          },
          Rr,
          null,
          [[0, 7]]
        );
      }

      function Qr(e) {
        var t, a, n, c, r, s;
        return Object(br.a)().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (a = t.displayName),
                    (n = t.email),
                    (c = t.password),
                    (i.prev = 1),
                    (i.next = 4),
                    hr.createUserWithEmailAndPassword(n, c)
                  );
                case 4:
                  return (
                    (r = i.sent),
                    (s = r.user),
                    (i.next = 8),
                    Object(Or.c)(
                      Ee({
                        user: s,
                        additionalData: {
                          displayName: a,
                        },
                      })
                    )
                  );
                case 8:
                  i.next = 14;
                  break;
                case 10:
                  return (
                    (i.prev = 10),
                    (i.t0 = i.catch(1)),
                    (i.next = 14),
                    Object(Or.c)(
                      ((o = i.t0.message),
                      {
                        type: _e,
                        payload: o,
                      })
                    )
                  );
                case 14:
                case "end":
                  return i.stop();
              }
            var o;
          },
          Ir,
          null,
          [[1, 10]]
        );
      }

      function Kr(e) {
        var t, a, n;
        return Object(br.a)().wrap(function (c) {
          for (;;)
            switch ((c.prev = c.next)) {
              case 0:
                return (
                  (t = e.payload),
                  (a = t.user),
                  (n = t.additionalData),
                  (c.next = 3),
                  Dr(a, n)
                );
              case 3:
              case "end":
                return c.stop();
            }
        }, Ar);
      }

      function Wr() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.d)(ue, Br);
              case 2:
              case "end":
                return e.stop();
            }
        }, Tr);
      }

      function zr() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.d)(de, Hr);
              case 2:
              case "end":
                return e.stop();
            }
        }, wr);
      }

      function Xr() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.d)(je, Vr);
              case 2:
              case "end":
                return e.stop();
            }
        }, Mr);
      }

      function qr() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.d)(be, Gr);
              case 2:
              case "end":
                return e.stop();
            }
        }, Fr);
      }

      function Jr() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.d)(ve, Yr);
              case 2:
              case "end":
                return e.stop();
            }
        }, kr);
      }

      function Zr() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.d)(fe, Qr);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ur);
      }

      function $r() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.d)(me, Kr);
              case 2:
              case "end":
                return e.stop();
            }
        }, Lr);
      }

      function es() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Or.a)([
                    Object(Or.b)(Wr),
                    Object(Or.b)(zr),
                    Object(Or.b)(Xr),
                    Object(Or.b)(qr),
                    Object(Or.b)(Jr),
                    Object(Or.b)(Zr),
                    Object(Or.b)($r),
                  ])
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, Pr);
      }
      var ts = Object(br.a)().mark(as);

      function as() {
        return Object(br.a)().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Or.a)([Object(Or.b)(es)]);
              case 2:
              case "end":
                return e.stop();
            }
        }, ts);
      }
      var ns = Object(rc.a)(),
        cs = [nc.a, ns];
      var rs = Object(ac.createStore)(
        dr,
        Object(cc.composeWithDevTools)(ac.applyMiddleware.apply(void 0, cs))
      );
      ns.run(as);
      var ss = Object(sc.a)(rs);
      ec.a.render(
        Object(ne.jsx)(r.a.StrictMode, {
          children: Object(ne.jsx)(s.a, {
            store: rs,
            children: Object(ne.jsx)(Y.a, {
              children: Object(ne.jsx)(tc.a, {
                persistor: ss,
                children: Object(ne.jsx)(Zn, {}),
              }),
            }),
          }),
        }),
        document.getElementById("root")
      );
    },
    93: function (e, t, a) {},
  },
  [[159, 1, 2]],
]);
//# sourceMappingURL=main.dba8540d.chunk.js.map
