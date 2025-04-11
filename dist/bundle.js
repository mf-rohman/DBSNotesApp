/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              l = i[s] || 0,
              f = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: h, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      417: (t) => {
        "use strict";
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : t)
              : t
          );
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      621: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => p });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i),
          c = n(417),
          u = n.n(c),
          s = new URL(n(724), n.b),
          l = a()(o()),
          f = u()(s);
        l.push([
          t.id,
          `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n}\n\nheader {\n  background-image: url(${f});\n  background-size: cover;\n  padding: 30px 0;\n  height: auto;\n  width: 100%;\n  background-position: center;\n  opacity: 0;\n  animation: fadeIn 1.2s ease-out forwards;\n  z-index: 1000;\n  position: fixed;\n  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.2);\n}\n\nheader .grid-container {\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  display: grid;\n  max-width: 1200px;\n  margin: auto;\n  gap: 30px;\n  padding: 18px;\n}\n\nsearch-bar input {\n  padding: 10px;\n}\n\n.user-profile {\n  margin-left: 250px;\n  width: 50px;\n  height: 50px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n  opacity: 0;\n  transform: translateX(-30px);\n  animation: fadeInSlide 1s ease-out forwards;\n}\n\n.user-profile .material-icons {\n  font-size: 24px;\n  color: rgb(109, 106, 106);\n  z-index: 99;\n  transition: color 0.3s ease;\n}\n\n#person-icon:hover {\n  color: #fa8072;\n  transform: scale(1.3);\n}\n\n.img-logo {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  opacity: 0;\n  transform: translateX(-30px);\n  animation: fadeInSlide 1s ease-out forwards;\n}\n.img-logo img {\n  width: 50px;\n  height: auto;\n  animation: spin 3s linear infinite;\n}\n\n.img-logo h2 {\n  font-weight: bold;\n  font-size: 21px;\n  color: #ffffff;\n  background: linear-gradient(\n    130deg,\n    rgb(238, 99, 49),\n    rgb(228, 215, 101),\n    rgb(216, 139, 45),\n    #ffffff\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 300% 300%;\n  animation: moveGradient 3s infinite linear;\n}\n\nul {\n  list-style: none;\n}\nli a {\n  text-decoration: none;\n  text-weight: bold;\n  color: rgb(238, 86, 15);\n}\n\ndrop-down-menu {\n  position: absolute;\n  margin-top: 20px;\n  margin-right: 100px;\n}\n\ndrop-down-menu ul {\n  text-align: center;\n}\n\nmain {\n  max-width: 100%;\n  height: auto;\n  padding-top: 12%;\n  background-color: #ffffff;\n  opacity: 0;\n  animation: fadeIn 1.2s ease-out forwards;\n}\n\nmain .grid-container {\n  display: grid;\n  align-items :center;\n}\n .main-content .content-title {\n  padding-left: 20px;\n }\n\n.main-content .note-list {\n  display : grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin: 20px;\n}\n.main-content .note-list > * {\n  padding: 5px 15px;\n  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.2);\n  border-radius:10px;\n  border: 1px solid #3333\n  \n}\n\n.note-list > .note-item-list {\n  h3 {\n    color:salmon;\n    \n  }\n  button {\n    border:none;\n    background:unset;\n    cursor:pointer;\n  }\n  line-height: 30px;\n}\n\n.text-format-body {\n  display:grid;\n  grid-template-columns: 110px auto;\n  text-overflow:ellipsis;\n}\n\n\n.text-format-body::before {\n  content: "Deskripsi : ";\n  font-weight: bold;\n}\n\n.text-format-date {\n  display:grid;\n  grid-template-columns: 110px auto;\n}\n.text-format-date::before {\n  content: "Time Stamp :";\n  font-weight: bold;\n  padding-right: 0px;\n}\n\n.tooltip-text {\n  position: fixed;\n  background:rgba(8, 8, 8, 0.59);\n  color: #ffffff;\n  padding: 5px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n  z-index: 1000;\n  pointer-events: none;\n  font-weight: bold;\n}\n\n.tooltip-text::after {\n  content: "";\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 5px;\n  border-style: solid;\n  border-color: rgba(8, 8, 8, 0.59)transparent transparent transparent;\n}\n\nfooter {\n  background-color:salmon;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  font-size: 14px;\n}\n\n.footer-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n.footer-contact a {\n  color:rgb(82, 3, 3);\n  text-decoration: none;\n}\n\n.footer-contact a:hover {\n  text-decoration: underline;\n}\n.delete-button:hover{\n  color: red;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes moveGradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes fadeInSlide {\n  from {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`,
          "",
        ]);
        const p = l;
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      724: (t, e, n) => {
        "use strict";
        t.exports = n.p + "a5a19ae321130309f2ee.jpg";
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      853: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          "use strict";
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              (e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ("object" == t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r)).attachShadow({ mode: "open" }),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  (this.shadowRoot.innerHTML =
                    '\n            <style>\n                .dropdown {\n                    display: inline-block;\n                    position: relative;\n                    \n                }\n\n                .dropdown-content {\n                    margin-top: 20px;\n                    display: none;\n                    position: absolute;\n                    background-color: #f9f9f9;\n                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n                    z-index: 1;\n                    border-radius: 5px;\n                    padding: 5px;\n                    line-height: 2;\n                    width: 100px;\n                }\n                .dropdown-content ul  {\n                    list-style: none;\n                    padding: 0;\n                    margin: 0;\n                }\n                .dropdown-content li {\n                    padding: 5px 10px;\n                    cursor: pointer;\n                }\n         \n                .show {\n                    display: block;\n                }\n            \n            </style>\n            <div class="dropdown">\n                <div class="dropdown-content">\n                    <slot name="content"></slot>\n                </div>\n            </div>\n        '),
                    document.addEventListener(
                      "click",
                      this.toggleDropdown.bind(this),
                    );
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  document.removeEventListener(
                    "click",
                    this.toggleDropdown.bind(this),
                  );
                },
              },
              {
                key: "toggleDropdown",
                value: function (t) {
                  var e = document.querySelector(".user-profile span");
                  this.contains(t.target) || e.contains(t.target)
                    ? this.shadowRoot
                        .querySelector(".dropdown-content")
                        .classList.toggle("show")
                    : this.shadowRoot
                        .querySelector(".dropdown-content")
                        .classList.remove("show");
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.get("drop-down-menu") ||
          customElements.define("drop-down-menu", c);
      },
      939: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          "use strict";
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ("object" == t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r)).tooltip = document.createElement("div")),
              e.tooltip.classList.add("tooltip-text"),
              document.body.appendChild(e.tooltip),
              console.log("Tooltip element created:", e.tooltip),
              (e.handleMouseOver = e.handleMouseOver.bind(e)),
              (e.handleMouseOut = e.handleMouseOut.bind(e)),
              (e.handleMouseMove = e.handleMouseMove.bind(e)),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  document.addEventListener("mouseover", this.handleMouseOver),
                    document.addEventListener("mouseout", this.handleMouseOut),
                    document.addEventListener(
                      "mousemove",
                      this.handleMouseMove,
                    );
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  document.removeEventListener(
                    "mouseover",
                    this.handleMouseOver,
                  ),
                    document.removeEventListener(
                      "mouseout",
                      this.handleMouseOut,
                    ),
                    document.removeEventListener(
                      "mousemove",
                      this.handleMouseMove,
                    );
                },
              },
              {
                key: "handleMouseOver",
                value: function (t) {
                  var e = t.target.closest("[data-tooltip]");
                  if (e) {
                    var n = e.getAttribute("data-tooltip");
                    (this.tooltip.textContent = n),
                      (this.tooltip.style.visibility = "visible"),
                      (this.tooltip.style.opacity = "1");
                  }
                },
              },
              {
                key: "handleMouseMove",
                value: function (t) {
                  (this.tooltip.style.left = "".concat(t.clientX + 10, "px")),
                    (this.tooltip.style.top = "".concat(t.clientY - 30, "px"));
                },
              },
              {
                key: "handleMouseOut",
                value: function () {
                  (event.relatedTarget &&
                    event.relatedTarget.closest("[data-tooltip]")) ||
                    ((this.tooltip.style.opacity = "0"),
                    (this.tooltip.style.visibility = "hidden"));
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.get("tooltip-text") ||
          customElements.define("tooltip-text", c);
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.m = t),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (
        !t &&
        e &&
        (e.currentScript &&
          "SCRIPT" === e.currentScript.tagName.toUpperCase() &&
          (t = e.currentScript.src),
        !t)
      ) {
        var r = e.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!t || !/^http(s?):/.test(t)); )
            t = r[o--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (t = t
        .replace(/^blob:/, "")
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      "use strict";
      function t(e) {
        return (
          (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          t(e)
        );
      }
      function e() {
        e = function () {
          return r;
        };
        var n,
          r = {},
          o = Object.prototype,
          i = o.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          s = c.asyncIterator || "@@asyncIterator",
          l = c.toStringTag || "@@toStringTag";
        function f(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          f({}, "");
        } catch (n) {
          f = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function p(t, e, n, r) {
          var o = e && e.prototype instanceof g ? e : g,
            i = Object.create(o.prototype),
            c = new I(r || []);
          return a(i, "_invoke", { value: _(t, n, c) }), i;
        }
        function d(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        r.wrap = p;
        var h = "suspendedStart",
          y = "suspendedYield",
          v = "executing",
          m = "completed",
          b = {};
        function g() {}
        function w() {}
        function x() {}
        var E = {};
        f(E, u, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          L = O && O(O(N([])));
        L && L !== o && i.call(L, u) && (E = L);
        var j = (x.prototype = g.prototype = Object.create(E));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            f(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function k(e, n) {
          function r(o, a, c, u) {
            var s = d(e[o], e, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == t(f) && i.call(f, "__await")
                ? n.resolve(f.__await).then(
                    function (t) {
                      r("next", t, c, u);
                    },
                    function (t) {
                      r("throw", t, c, u);
                    },
                  )
                : n.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return r("throw", t, c, u);
                    },
                  );
            }
            u(s.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (t, e) {
              function i() {
                return new n(function (n, o) {
                  r(t, e, n, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function _(t, e, r) {
          var o = h;
          return function (i, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: n, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = P(c, r);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === h) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = v;
              var s = d(t, e, r);
              if ("normal" === s.type) {
                if (((o = r.done ? m : y), s.arg === b)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = m), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function P(t, e) {
          var r = e.method,
            o = t.iterator[r];
          if (o === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = n),
                P(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              b
            );
          var i = d(o, t.iterator, e.arg);
          if ("throw" === i.type)
            return (
              (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), b
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = n)),
                (e.delegate = null),
                b)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              b);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function M(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function I(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function N(e) {
          if (e || "" === e) {
            var r = e[u];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function t() {
                  for (; ++o < e.length; )
                    if (i.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = n), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(t(e) + " is not iterable");
        }
        return (
          (w.prototype = x),
          a(j, "constructor", { value: x, configurable: !0 }),
          a(x, "constructor", { value: w, configurable: !0 }),
          (w.displayName = f(x, l, "GeneratorFunction")),
          (r.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (r.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), f(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (r.awrap = function (t) {
            return { __await: t };
          }),
          S(k.prototype),
          f(k.prototype, s, function () {
            return this;
          }),
          (r.AsyncIterator = k),
          (r.async = function (t, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(p(t, e, n, o), i);
            return r.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(j),
          f(j, l, "Generator"),
          f(j, u, function () {
            return this;
          }),
          f(j, "toString", function () {
            return "[object Generator]";
          }),
          (r.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (r.values = N),
          (I.prototype = {
            constructor: I,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(M),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    i.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = n);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (e.next = r),
                  o && ((e.method = "next"), (e.arg = n)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var u = i.call(a, "catchLoc"),
                    s = i.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                b
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), M(n), b;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    M(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = n),
                b
              );
            },
          }),
          r
        );
      }
      function r(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function o() {
        var t;
        return (
          (t = e().mark(function t(n) {
            var r;
            return e().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (confirm("Are you sure want to delete this note?")) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    return (t.next = 5), m(n);
                  case 5:
                    if ("success" !== (r = t.sent).status) {
                      t.next = 11;
                      break;
                    }
                    return (t.next = 9), d();
                  case 9:
                    t.next = 12;
                    break;
                  case 11:
                    alert("Failed" + r.message);
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (o = function () {
            var e = this,
              n = arguments;
            return new Promise(function (o, i) {
              var a = t.apply(e, n);
              function c(t) {
                r(a, o, i, c, u, "next", t);
              }
              function u(t) {
                r(a, o, i, c, u, "throw", t);
              }
              c(void 0);
            });
          }),
          o.apply(this, arguments)
        );
      }
      function i(t) {
        var e = notesData[t];
        if (e) {
          var n = document.getElementById("note-item-title[".concat(e.id, "]")),
            r = document.getElementById("note-item-body[".concat(e.id, "]"));
          n.setAttribute("contenteditable", "true"),
            n.setAttribute("spellcheck", "false"),
            (n.onblur = function () {
              (e.title = n.textContent),
                (notesData[t] = e),
                localStorage.setItem("notesData", JSON.stringify(notesData)),
                n.setAttribute("contenteditable", "false"),
                (document.querySelector(".tooltip-text").style.display =
                  "block");
            }),
            r.setAttribute("contenteditable", "true"),
            r.setAttribute("spellcheck", "false"),
            (r.onblur = function () {
              (e.body = r.textContent),
                (notesData[t] = e),
                localStorage.setItem("notesData", JSON.stringify(notesData)),
                r.setAttribute("contenteditable", "false"),
                (document.querySelector(".tooltip-text").style.display =
                  "block");
            }),
            (n.onfocus = function () {
              document.querySelector(".tooltip-text").style.display = "none";
            }),
            (r.onfocus = function () {
              document.querySelector(".tooltip-text").style.display = "none";
            }),
            console.log(t);
        }
      }
      function a(t) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          a(t)
        );
      }
      const c = function (t) {
        var e = document.getElementById("note-list");
        (e.innerHTML = ""),
          Array.isArray(t)
            ? (console.log(a(t)),
              console.log(t),
              t.forEach(function (t, n) {
                if (t && "object" === a(t)) {
                  var r = document.createElement("div");
                  r.classList.add("note-item-list"),
                    r.setAttribute("data-noteId", t.id);
                  var c = document.createElement("h3");
                  (c.textContent = " ".concat(t.title)),
                    (c.id = "note-item-title[".concat(t.id, "]")),
                    c.classList.add("text-format-title"),
                    (c.onclick = function () {
                      return i(n);
                    }),
                    c.setAttribute("data-tooltip", "Double Click to Edit");
                  var u = document.createElement("p");
                  (u.textContent = " ".concat(t.body, " ")),
                    u.classList.add("text-format-body"),
                    (u.id = "note-item-body[".concat(t.id, "]")),
                    u.setAttribute("data-tooltip", "Double Click to Edit");
                  var s = document.createElement("p");
                  (s.textContent = " ".concat(t.createdAt)),
                    s.classList.add("text-format-date"),
                    (u.onclick = function () {
                      return i(n);
                    });
                  var l = document.createElement("button");
                  l.classList.add("delete-button"),
                    (l.onclick = function () {
                      return (function (t) {
                        return o.apply(this, arguments);
                      })(t.id);
                    }),
                    (l.innerHTML =
                      '<span class="material-icons">delete_forever</span>');
                  var f = document.createElement("button");
                  (f.onclick = function () {
                    return i(n);
                  }),
                    r.append(c, u, s, l, f),
                    e.append(r);
                } else
                  console.warn("Notes at Index ".concat(n, " not valid:"), t);
              }))
            : console.info("not array");
      };
      var u = "https://notes-api.dicoding.dev/v2";
      function s(t) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          s(t)
        );
      }
      function l() {
        l = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function f(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          f({}, "");
        } catch (t) {
          f = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function p(t, e, n, r) {
          var i = e && e.prototype instanceof g ? e : g,
            a = Object.create(i.prototype),
            c = new I(r || []);
          return o(a, "_invoke", { value: _(t, n, c) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = p;
        var h = "suspendedStart",
          y = "suspendedYield",
          v = "executing",
          m = "completed",
          b = {};
        function g() {}
        function w() {}
        function x() {}
        var E = {};
        f(E, a, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          L = O && O(O(N([])));
        L && L !== n && r.call(L, a) && (E = L);
        var j = (x.prototype = g.prototype = Object.create(E));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            f(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function k(t, e) {
          function n(o, i, a, c) {
            var u = d(t[o], t, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                f = l.value;
              return f && "object" == s(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function _(e, n, r) {
          var o = h;
          return function (i, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = P(c, r);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === h) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = v;
              var s = d(e, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? m : y), s.arg === b)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = m), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function P(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                P(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              b
            );
          var i = d(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), b
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                b)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              b);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function M(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function I(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function N(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(s(e) + " is not iterable");
        }
        return (
          (w.prototype = x),
          o(j, "constructor", { value: x, configurable: !0 }),
          o(x, "constructor", { value: w, configurable: !0 }),
          (w.displayName = f(x, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), f(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          S(k.prototype),
          f(k.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(p(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(j),
          f(j, u, "Generator"),
          f(j, a, function () {
            return this;
          }),
          f(j, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = N),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(M),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                b
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), M(n), b;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    M(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                b
              );
            },
          }),
          e
        );
      }
      function f(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function p(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              f(i, r, o, a, c, "next", t);
            }
            function c(t) {
              f(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function d() {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = p(
          l().mark(function t() {
            var e, n, r;
            return l().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        fetch(u + "/notes", { method: "GET" })
                      );
                    case 3:
                      return (e = t.sent), (t.next = 6), e.json();
                    case 6:
                      return (
                        (n = t.sent),
                        (r = n.data),
                        console.log({ notesData: r }),
                        c(r),
                        t.abrupt("return", r)
                      );
                    case 13:
                      (t.prev = 13), (t.t0 = t.catch(0)), console.error(t.t0);
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 13]],
            );
          }),
        )).apply(this, arguments);
      }
      function y(t) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = p(
          l().mark(function t(e) {
            var n, r, o, i;
            return l().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.title),
                        (r = e.body),
                        (t.prev = 1),
                        (t.next = 4),
                        fetch(u + "/notes", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ title: n, body: r }),
                        })
                      );
                    case 4:
                      return (o = t.sent), (t.next = 7), o.json();
                    case 7:
                      return (
                        (i = t.sent),
                        console.log("Result: ", i),
                        t.abrupt("return", i)
                      );
                    case 12:
                      (t.prev = 12), (t.t0 = t.catch(1)), console.error(t.t0);
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 12]],
            );
          }),
        )).apply(this, arguments);
      }
      function m(t) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = p(
          l().mark(function t(e) {
            var n, r;
            return l().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        fetch(u + "/notes/".concat(e), { method: "DELETE" })
                      );
                    case 3:
                      return (n = t.sent), (t.next = 6), n.json();
                    case 6:
                      return (
                        (r = t.sent), console.log(r), t.abrupt("return", r)
                      );
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(0)), console.error(t.t0);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 11]],
            );
          }),
        )).apply(this, arguments);
      }
      function g(t) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          g(t)
        );
      }
      function w(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, x(r.key), r);
        }
      }
      function x(t) {
        var e = (function (t) {
          if ("object" != g(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != g(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == g(e) ? e : e + "";
      }
      function E(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (E = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (O()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && L(o, n.prototype), o;
              })(t, arguments, j(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              L(n, t)
            );
          }),
          E(t)
        );
      }
      function O() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (O = function () {
          return !!t;
        })();
      }
      function L(t, e) {
        return (
          (L = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          L(t, e)
        );
      }
      function j(t) {
        return (
          (j = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          j(t)
        );
      }
      var S = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (t = (function (t, e, n) {
              return (
                (e = j(e)),
                (function (t, e) {
                  if (e && ("object" == g(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(t);
                })(
                  t,
                  O()
                    ? Reflect.construct(e, n || [], j(t).constructor)
                    : e.apply(t, n),
                )
              );
            })(this, e)).attachShadow({ mode: "open" }),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && L(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "connectedCallback",
              value: function () {
                var t = this;
                (this.shadowRoot.innerHTML =
                  '\n            <style> \n             @import url(\'https://fonts.googleapis.com/icon?family=Material+Icons\');\n                .search-bar-container {\n                    position: relative;\n                    display: flex;\n                    align-items: center;\n                    width: 100%;\n                    margin-left: 80px;\n                    opacity: 0; \n                    transform: scale(0.8);\n                    animation: zoomIn 0.8s ease-out forwards;\n                }\n                input[type="search"] {\n                    width: 100%;\n                    height: 50px;\n                    padding: 12px 40px 12px 15px;\n                    border: 1px solid #ccc;\n                    border-radius: 23px;\n                    font-size: 16px;\n                    font-family: \'Roboto\', sans-serif;\n                }\n                input:focus {\n                    outline: none;\n                    border-color:rgb(240, 182, 143);\n                    box-shadow: 0 0 10px rgb(243, 156, 57);\n                }\n                .material-icons {\n                    position: absolute;\n                    right: 10px;\n                    font-size: 25px;\n                    color:rgb(195, 199, 202);\n                }\n                @keyframes zoomIn {\n                    from {\n                        transform: scale(0.8);\n                        opacity: 0;\n                    }\n                    to {\n                        transform: scale(1);\n                        opacity: 1;\n                    }\n                }\n            </style>\n            <div class="search-bar-container">\n                <input type="search" id="search" placeholder="Search note . . .">\n                <span class="material-icons">search</span>\n            </div>\n        '),
                  (this.shadowRoot.getElementById("search").oninput =
                    function () {
                      return t.searchNote();
                    });
              },
            },
            {
              key: "searchNote",
              value: function () {
                var t = this.shadowRoot
                    .getElementById("search")
                    .value.toLowerCase(),
                  e = d.filter(function (e) {
                    return e.title.toLowerCase().includes(t);
                  });
                "" !== t
                  ? 0 !== e.length
                    ? c(e)
                    : (document.getElementById("note-list").innerHTML =
                        "\n        <p>No one note can't found</p>\n        ")
                  : c(d);
              },
            },
          ]) && w(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(E(HTMLElement));
      function k(t) {
        return (
          (k =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          k(t)
        );
      }
      function _() {
        _ = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            c = new I(r || []);
          return o(a, "_invoke", { value: S(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var p = "suspendedStart",
          d = "suspendedYield",
          h = "executing",
          y = "completed",
          v = {};
        function m() {}
        function b() {}
        function g() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          E = x && x(x(N([])));
        E && E !== n && r.call(E, a) && (w = E);
        var O = (g.prototype = m.prototype = Object.create(w));
        function L(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == k(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function S(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === h) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = P(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var s = f(e, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? y : d), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = y), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function P(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                P(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function M(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function I(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function N(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(k(e) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(O, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(g, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(O)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          L(j.prototype),
          s(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new j(l(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          L(O),
          s(O, u, "Generator"),
          s(O, a, function () {
            return this;
          }),
          s(O, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = N),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(M),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), M(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    M(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function P(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function T(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, M(r.key), r);
        }
      }
      function M(t) {
        var e = (function (t) {
          if ("object" != k(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != k(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == k(e) ? e : e + "";
      }
      function I(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (I = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (N()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && R(o, n.prototype), o;
              })(t, arguments, C(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              R(n, t)
            );
          }),
          I(t)
        );
      }
      function N() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (N = function () {
          return !!t;
        })();
      }
      function R(t, e) {
        return (
          (R = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          R(t, e)
        );
      }
      function C(t) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          C(t)
        );
      }
      customElements.get("search-bar") ||
        customElements.define("search-bar", S),
        n(853);
      var A = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (t = (function (t, e, n) {
              return (
                (e = C(e)),
                (function (t, e) {
                  if (e && ("object" == k(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(t);
                })(
                  t,
                  N()
                    ? Reflect.construct(e, n || [], C(t).constructor)
                    : e.apply(t, n),
                )
              );
            })(this, e)).attachShadow({ mode: "open" }),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && R(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "connectedCallback",
              value: function () {
                var t = this;
                (this.shadowRoot.innerHTML =
                  '\n            <style>\n                @import url("https://fonts.googleapis.com/icon?family=Material+Icons");\n                .note-form {\n                    display: grid;\n                    justify-content: left;\n                    margin: 20px;\n                    grid-template-columns: 1fr 1fr auto;\n                    gap: 1rem;\n                    border: 1px solid #ccc;\n                    border-radius: 5px;\n                    padding: 20px;\n                    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);\n                }\n                input[type="text"] {\n                  padding: 10px;\n                  gap: 2rem;\n                  border: 1px solid #ccc;\n                  border-radius: 5px;\n                }\n                input:focus {\n                  border-color:rgb(240, 182, 143);\n                  outline: none;\n                  box-shadow: 0 0 10px rgb(243, 156, 57);\n                }\n                button {\n                  padding-top: 5px;\n                  position: absolute;\n                  background : unset;\n                  border: none;\n                  cursor: pointer;\n                }\n                .material-icons {\n                  font-size: 30px;\n                  border: none;\n                }\n                button .material-icons:hover {\n                  color: rgb(218, 108, 34);\n                  transform: scale(1.2);\n                }\n            </style>\n            <div class="note-form">\n                <form id="form-add-note">\n                    <label for="title">Title</label>\n                    <input type="text" id="title" name="title" placeholder="Title" required>\n                    <label for="description">Description</label>\n                    <input type="text" id="description" name="description" placeholder="Description" required>\n                    <button type="submit" id="btn-add-note">\n                      <span class="material-icons">add_box</span>\n                    </button>\n                </form>\n            </div>\n            \n        '),
                  this.shadowRoot
                    .getElementById("form-add-note")
                    .addEventListener(
                      "submit",
                      (function () {
                        var e,
                          n =
                            ((e = _().mark(function e(n) {
                              var r, o, i;
                              return _().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        n.preventDefault(),
                                        (r =
                                          t.shadowRoot.getElementById(
                                            "title",
                                          ).value),
                                        (o =
                                          t.shadowRoot.getElementById(
                                            "description",
                                          ).value),
                                        (i = { title: r, body: o }),
                                        console.log("Data User:", i),
                                        (e.next = 7),
                                        y(i)
                                      );
                                    case 7:
                                      d();
                                    case 8:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })),
                            function () {
                              var t = this,
                                n = arguments;
                              return new Promise(function (r, o) {
                                var i = e.apply(t, n);
                                function a(t) {
                                  P(i, r, o, a, c, "next", t);
                                }
                                function c(t) {
                                  P(i, r, o, a, c, "throw", t);
                                }
                                a(void 0);
                              });
                            });
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })(),
                    );
              },
            },
          ]),
          r && T(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(I(HTMLElement));
      customElements.get("form-add-note") ||
        customElements.define("form-add-note", A),
        n(939);
      var G = n(72),
        D = n.n(G),
        F = n(825),
        B = n.n(F),
        z = n(659),
        H = n.n(z),
        q = n(56),
        Y = n.n(q),
        U = n(540),
        X = n.n(U),
        $ = n(113),
        J = n.n($),
        Q = n(621),
        K = {};
      (K.styleTagTransform = J()),
        (K.setAttributes = Y()),
        (K.insert = H().bind(null, "head")),
        (K.domAPI = B()),
        (K.insertStyleElement = X()),
        D()(Q.A, K),
        Q.A && Q.A.locals && Q.A.locals,
        document.addEventListener("DOMContentLoaded", function () {
          d(), y();
        }),
        (window.editNote = i);
    })();
})();
