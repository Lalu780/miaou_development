(self["webpackChunk"] = self["webpackChunk"] || []).push([
  [505],
  {
    557: (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var cart = __webpack_require__(9254);
      var lazysizes = __webpack_require__(3011);
      var lazysizes_default = __webpack_require__.n(lazysizes);
      var ls_bgset = __webpack_require__(8514);
      lazysizes_default().cfg.init = false;
      const init = async function () {
        lazysizes_default().init();
      };
      var jquery_min = __webpack_require__(7009);
      var jquery_min_default = __webpack_require__.n(jquery_min);
      var cart_drawer_open_request = __webpack_require__(6937);
      /*! Ported from Lodash v4 */
      const freeGlobal =
        "object" === typeof global &&
        null !== global &&
        global.Object === Object &&
        global;
      const freeGlobalThis =
        "object" === typeof globalThis &&
        null !== globalThis &&
        globalThis.Object == Object &&
        globalThis;
      const freeSelf =
        "object" === typeof self &&
        null !== self &&
        self.Object === Object &&
        self;
      const root =
        freeGlobalThis || freeGlobal || freeSelf || Function("return this")();

      function isObject(value) {
        const type = typeof value;
        return null != value && ("object" === type || "function" === type);
      }

      function debounce(func, wait, options) {
        let lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
        let lastInvokeTime = 0;
        let leading = false;
        let maxing = false;
        let trailing = true;
        const useRAF =
          !wait &&
          0 !== wait &&
          "function" === typeof root.requestAnimationFrame;
        if ("function" !== typeof func)
          throw new TypeError("Expected a function");
        wait = +wait || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }

        function invokeFunc(time) {
          const args = lastArgs;
          const thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }

        function startTimer(pendingFunc, wait) {
          if (useRAF) {
            root.cancelAnimationFrame(timerId);
            return root.requestAnimationFrame(pendingFunc);
          }
          return setTimeout(pendingFunc, wait);
        }

        function cancelTimer(id) {
          if (useRAF) return root.cancelAnimationFrame(id);
          clearTimeout(id);
        }

        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = startTimer(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }

        function remainingWait(time) {
          const timeSinceLastCall = time - lastCallTime;
          const timeSinceLastInvoke = time - lastInvokeTime;
          const timeWaiting = wait - timeSinceLastCall;
          return maxing
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
        }

        function shouldInvoke(time) {
          const timeSinceLastCall = time - lastCallTime;
          const timeSinceLastInvoke = time - lastInvokeTime;
          return (
            void 0 === lastCallTime ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && timeSinceLastInvoke >= maxWait)
          );
        }

        function timerExpired() {
          const time = Date.now();
          if (shouldInvoke(time)) return trailingEdge(time);
          timerId = startTimer(timerExpired, remainingWait(time));
        }

        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) return invokeFunc(time);
          lastArgs = lastThis = void 0;
          return result;
        }

        function cancel() {
          if (void 0 !== timerId) cancelTimer(timerId);
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }

        function flush() {
          return void 0 === timerId ? result : trailingEdge(Date.now());
        }

        function pending() {
          return void 0 !== timerId;
        }

        function debounced(...args) {
          const time = Date.now();
          const isInvoking = shouldInvoke(time);
          lastArgs = args;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (void 0 === timerId) return leadingEdge(lastCallTime);
            if (maxing) {
              timerId = startTimer(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (void 0 === timerId) timerId = startTimer(timerExpired, wait);
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        debounced.pending = pending;
        return debounced;
      }
      let oldBodyPosition = 0;
      const freeze = function (additionalClass = "") {
        const body = jquery_min_default()("body");
        const offset = -1 * (jquery_min_default()(window).scrollTop() || 0);
        oldBodyPosition = parseInt(body.css("top"), 10) || 0;
        body
          .css("top", offset)
          .addClass(["is-frozen", additionalClass].join(" "));
      };
      const thaw = function (additionalClass = "") {
        const body = jquery_min_default()("body");
        body
          .css("top", "")
          .removeClass(["is-frozen", additionalClass].join(" "));
        if (oldBodyPosition)
          window.requestAnimationFrame(function () {
            return jquery_min_default()(window).scrollTop(-1 * oldBodyPosition);
          });
      };
      var index_es = __webpack_require__(7729);
      function t(t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (t) {
          o = {
            error: t,
          };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      var n;
      !(function (t) {
        (t[(t.NotStarted = 0)] = "NotStarted"),
          (t[(t.Running = 1)] = "Running"),
          (t[(t.Stopped = 2)] = "Stopped");
      })(n || (n = {}));
      var e = {
        type: "xstate.init",
      };

      function r(t) {
        return void 0 === t ? [] : [].concat(t);
      }

      function o(t) {
        return {
          type: "xstate.assign",
          assignment: t,
        };
      }

      function i(t, n) {
        return "string" ==
          typeof (t = "string" == typeof t && n && n[t] ? n[t] : t)
          ? {
              type: t,
            }
          : "function" == typeof t
          ? {
              type: t.name,
              exec: t,
            }
          : t;
      }

      function a(t) {
        return function (n) {
          return t === n;
        };
      }

      function u(t) {
        return "string" == typeof t
          ? {
              type: t,
            }
          : t;
      }

      function c(t, n) {
        return {
          value: t,
          context: n,
          actions: [],
          changed: !1,
          matches: a(t),
        };
      }

      function f(t, n, e) {
        var r = n,
          o = !1;
        return [
          t.filter(function (t) {
            if ("xstate.assign" === t.type) {
              o = !0;
              var n = Object.assign({}, r);
              return (
                "function" == typeof t.assignment
                  ? (n = t.assignment(r, e))
                  : Object.keys(t.assignment).forEach(function (o) {
                      n[o] =
                        "function" == typeof t.assignment[o]
                          ? t.assignment[o](r, e)
                          : t.assignment[o];
                    }),
                (r = n),
                !1
              );
            }
            return !0;
          }),
          r,
          o,
        ];
      }

      function s(n, o) {
        void 0 === o && (o = {});
        var s = t(
            f(
              r(n.states[n.initial].entry).map(function (t) {
                return i(t, o.actions);
              }),
              n.context,
              e
            ),
            2
          ),
          l = s[0],
          v = s[1],
          y = {
            config: n,
            _options: o,
            initialState: {
              value: n.initial,
              actions: l,
              context: v,
              matches: a(n.initial),
            },
            transition: function (e, o) {
              var s,
                l,
                v =
                  "string" == typeof e
                    ? {
                        value: e,
                        context: n.context,
                      }
                    : e,
                p = v.value,
                g = v.context,
                d = u(o),
                x = n.states[p];
              if (x.on) {
                var m = r(x.on[d.type]);
                try {
                  for (
                    var h = (function (t) {
                        var n = "function" == typeof Symbol && Symbol.iterator,
                          e = n && t[n],
                          r = 0;
                        if (e) return e.call(t);
                        if (t && "number" == typeof t.length)
                          return {
                            next: function () {
                              return (
                                t && r >= t.length && (t = void 0),
                                {
                                  value: t && t[r++],
                                  done: !t,
                                }
                              );
                            },
                          };
                        throw new TypeError(
                          n
                            ? "Object is not iterable."
                            : "Symbol.iterator is not defined."
                        );
                      })(m),
                      b = h.next();
                    !b.done;
                    b = h.next()
                  ) {
                    var S = b.value;
                    if (void 0 === S) return c(p, g);
                    var w =
                        "string" == typeof S
                          ? {
                              target: S,
                            }
                          : S,
                      j = w.target,
                      E = w.actions,
                      R = void 0 === E ? [] : E,
                      N = w.cond,
                      O =
                        void 0 === N
                          ? function () {
                              return !0;
                            }
                          : N,
                      _ = void 0 === j,
                      k = null != j ? j : p,
                      T = n.states[k];
                    if (O(g, d)) {
                      var q = t(
                          f(
                            (_
                              ? r(R)
                              : []
                                  .concat(x.exit, R, T.entry)
                                  .filter(function (t) {
                                    return t;
                                  })
                            ).map(function (t) {
                              return i(t, y._options.actions);
                            }),
                            g,
                            d
                          ),
                          3
                        ),
                        z = q[0],
                        A = q[1],
                        B = q[2],
                        C = null != j ? j : p;
                      return {
                        value: C,
                        context: A,
                        actions: z,
                        changed: j !== p || z.length > 0 || B,
                        matches: a(C),
                      };
                    }
                  }
                } catch (t) {
                  s = {
                    error: t,
                  };
                } finally {
                  try {
                    b && !b.done && (l = h.return) && l.call(h);
                  } finally {
                    if (s) throw s.error;
                  }
                }
              }
              return c(p, g);
            },
          };
        return y;
      }
      var l = function (t, n) {
        return t.actions.forEach(function (e) {
          var r = e.exec;
          return r && r(t.context, n);
        });
      };

      function v(t) {
        var r = t.initialState,
          o = n.NotStarted,
          i = new Set(),
          c = {
            _machine: t,
            send: function (e) {
              o === n.Running &&
                ((r = t.transition(r, e)),
                l(r, u(e)),
                i.forEach(function (t) {
                  return t(r);
                }));
            },
            subscribe: function (t) {
              return (
                i.add(t),
                t(r),
                {
                  unsubscribe: function () {
                    return i.delete(t);
                  },
                }
              );
            },
            start: function (i) {
              if (i) {
                var u =
                  "object" == typeof i
                    ? i
                    : {
                        context: t.config.context,
                        value: i,
                      };
                r = {
                  value: u.value,
                  actions: [],
                  context: u.context,
                  matches: a(u.value),
                };
              }
              return (o = n.Running), l(r, e), c;
            },
            stop: function () {
              return (o = n.Stopped), i.clear(), c;
            },
            get state() {
              return r;
            },
            get status() {
              return o;
            },
          };
        return c;
      }
      const DrawerName = (0, index_es.union)([
        (0, index_es.literal)("cart"),
        (0, index_es.literal)("search"),
        (0, index_es.literal)("shop"),
        (0, index_es.literal)("universe"),
      ]);
      const makeOffcanvasMachine = function () {
        return s({
          initial: "collapsed",
          context: {
            drawerName: "cart",
          },
          states: {
            collapsed: {
              on: {
                expand: {
                  target: "expanded",
                  actions: [
                    o({
                      drawerName: function (_, evt) {
                        return evt.drawerName;
                      },
                    }),
                  ],
                },
              },
            },
            expanded: {
              on: {
                collapse: {
                  target: "collapsed",
                },
              },
            },
          },
        });
      };
      const initOffcanvasMachine = function () {
        return v(makeOffcanvasMachine());
      };
      const offcanvas_drawers_init = async function (cart) {
        const machine = initOffcanvasMachine();
        const drawerContainer = jquery_min_default()(".js-offcanvas");
        const allDrawers = jquery_min_default()(".js-offcanvas-drawer");
        if (0 === allDrawers.length) return;
        const adjustDrawerHeight = function () {
          drawerContainer.css(
            "height",
            jquery_min_default()(window).height() + "px"
          );
        };
        const debouncedAdjustDrawerHeight = debounce(adjustDrawerHeight, 150);
        machine.subscribe(function toggleDrawer({
          value: state,
          context: { drawerName: drawerName },
        }) {
          adjustDrawerHeight();
          if ("collapsed" === state) {
            drawerContainer.addClass("--hidden");
            allDrawers.removeClass("is-expanded");
            thaw("has-open-offcanvas");
            return;
          }
          const attrFilter = `[data-drawer-names~='${drawerName}']`;
          freeze("has-open-offcanvas");
          allDrawers.not(attrFilter).removeClass("is-expanded");
          allDrawers.filter(attrFilter).addClass("is-expanded");
          drawerContainer.removeClass("--hidden");
          if ("cart" === drawerName) cart.refresh();
        });
        machine.start();
        // jquery_min_default()("[data-col-image]").on("mouseenter", function (e) {
        //   var ref;
        //   const elem = e.target;
        //   const imageHolder =
        //     null === (ref = elem.closest(".Offcanvas-Drawer-Col")) ||
        //     void 0 === ref
        //       ? void 0
        //       : ref.querySelector(".Offcanvas-Drawer-ColImg");
        //   imageHolder.style.backgroundImage = `url('${elem.getAttribute(
        //     "data-col-image"
        //   )}')`;
        //   imageHolder.style.opacity = "1";
        // });
        jquery_min_default()("[data-col-image]").on("mouseleave", function (e) {
          var ref;
          const elem = e.target;
          const imageHolder =
            null === (ref = elem.closest(".Offcanvas-Drawer-Col")) ||
            void 0 === ref
              ? void 0
              : ref.querySelector(".Offcanvas-Drawer-ColImg");
          imageHolder.style.opacity = "0";
        });
        jquery_min_default()(".Offcanvas-Drawer-ColLink").on(
          "mouseenter",
          function (e) {
            var ref;
            const elem = e.target;
            const imageHolder =
              null === (ref = elem.parentNode) || void 0 === ref
                ? void 0
                : ref.querySelector(".hidden-3-deep");
            imageHolder.classList.add("menu-hover-effect");
          }
        );
        jquery_min_default()(".invisible-toggle-button").on(
          "click",
          function (e) {
            var ref;
            const elem = e.target;
            const imageHolder =
              null === (ref = elem.parentNode) || void 0 === ref
                ? void 0
                : ref.querySelector(".hidden-3-deep");
            imageHolder.classList.add("menu-hover-effect");
            elem.remove();
          }
        );
        jquery_min_default()(window).on("resize", function () {
          debouncedAdjustDrawerHeight();
          jquery_min_default()(".js-offcanvas-trigger").removeClass(
            "is-active"
          );
        });
        jquery_min_default()("#js-offcanvas-bg").on("click", function () {
          jquery_min_default()(".js-offcanvas-trigger").removeClass(
            "is-active"
          );
          machine.send({
            type: "collapse",
          });
        });
        jquery_min_default()(".js-offcanvas-trigger").on(
          "click",
          function (evt) {
            evt.preventDefault();
            const drawerName =
              jquery_min_default()(evt.delegateTarget).attr(
                "data-drawer-name"
              ) || "";
            if (DrawerName.is(drawerName)) {
              jquery_min_default()(".js-offcanvas-trigger")
                .not(`[data-drawer-name="${drawerName}"]`)
                .removeClass("is-active");
              jquery_min_default()(evt.delegateTarget).addClass("is-active");
              machine.send({
                type: "collapse",
              });
              machine.send({
                drawerName: drawerName,
                type: "expand",
              });
              if ("search" === drawerName)
                jquery_min_default()(".js-search-input").trigger("focus");
            }
          }
        );
        jquery_min_default()(document).on(
          cart_drawer_open_request.cartDrawerOpenRequestEventType,
          function () {
            machine.send({
              type: "expand",
              drawerName: "cart",
            });
          }
        );
      };
      const offcanvas_menu_init = async function () {
        const allTopLinks = jquery_min_default()(".js-offcanvas-nav-top-link");
        const allSubLists = jquery_min_default()(".js-offcanvas-nav-sublist");
        const wrapper = jquery_min_default()(".js-offcanvas-content");
        allSubLists.each(function measureItem(_, element) {
          jquery_min_default()(element)
            .css("height", jquery_min_default()(element).height() + "px")
            .addClass("is-hidden");
        });
        allTopLinks.on("click", function (evt) {
          evt.preventDefault();
          const selectedLink = jquery_min_default()(evt.delegateTarget);
          const listHandle = selectedLink.attr("data-list-handle") || "";
          if (selectedLink.hasClass("is-expanded")) {
            allTopLinks.removeClass("is-expanded");
            allSubLists.addClass("is-hidden");
            return;
          }
          const selectedList = allSubLists.filter(
            `[data-list-handle='${listHandle}']`
          );
          selectedLink.addClass("is-expanded");
          allTopLinks.not(selectedLink).removeClass("is-expanded");
          selectedList.removeClass("is-hidden");
          allSubLists.not(selectedList).addClass("is-hidden");
          wrapper.css("overflow-y", "scroll");
        });
      };
      const sum = function (nums) {
        return nums.reduce(function (acc, num) {
          return acc + num;
        }, 0);
      };
      const collapse_nav_init = async function () {
        const container = jquery_min_default()("#js-header-menu");
        const list = container.find(".js-header-menu-list");
        const items = list.find(".js-header-menu-item");
        const toggle = container.find(".js-header-menu-toggle");
        const dropdown = container.find(".js-header-menu-toggle-dropdown");
        if (0 === items.length) return;
        const getVisibleCount = function (
          widths = [],
          containerWidth = 0,
          buttonWidth = 0
        ) {
          if (sum(widths) < containerWidth) return widths.length;
          return widths.reduce(function (accumulator, width) {
            if (sum(accumulator) + width < containerWidth - buttonWidth)
              accumulator.push(width);
            return accumulator;
          }, []).length;
        };
        const itemWidths = items
          .map(function (_, element) {
            return jquery_min_default()(element).outerWidth(true);
          })
          .get();
        const calcNav = function () {
          const visibleCount = getVisibleCount(
            itemWidths,
            container.outerWidth(true),
            toggle.outerWidth(true)
          );
          dropdown.empty();
          toggle.toggleClass("is-hidden", visibleCount === items.length);
          items.each(function (index, element) {
            if (index + 1 > visibleCount) {
              jquery_min_default()(element)
                .addClass("is-collapsed")
                .clone()
                .appendTo(dropdown);
              return;
            }
            jquery_min_default()(element).removeClass("is-collapsed");
          });
        };
        const debouncedCalcNav = debounce(calcNav, 100);
        jquery_min_default()(window).on("resize", function () {
          debouncedCalcNav();
        });
        list
          .contents()
          .filter(function (_, element) {
            return 8 === element.nodeType;
          })
          .remove();
        list
          .contents()
          .filter(function (_, element) {
            return (
              3 === element.nodeType &&
              false === /\S/.test(element.nodeValue || "")
            );
          })
          .remove();
        calcNav();
        container.addClass("is-initialized");
      };
      const keep_dropdowns_in_viewport_init = async function () {
        const positionDropdowns = function () {
          jquery_min_default()(".js-header .js-header-dropdown").each(function (
            _,
            element
          ) {
            jquery_min_default()(element).css("left", 0);
            const offset = Math.round(
              (jquery_min_default()(window).width() || 0) -
                (jquery_min_default()(element).outerWidth() || 0) -
                element.getBoundingClientRect().left
            );
            if (offset >= 0) return;
            jquery_min_default()(element).css("left", offset);
          });
        };
        const debouncedPositionDropdowns = debounce(positionDropdowns, 200);
        jquery_min_default()(window).on("resize", function () {
          debouncedPositionDropdowns();
        });
        positionDropdowns();
      };
      const toggle_dropdowns_init = async function () {
        const items = jquery_min_default()(
          "#js-header-menu .js-header-menu-item.has-dropdown > a"
        );
        if (0 === items.length) return;
        items.on("click", function (evt) {
          evt.preventDefault();
        });
      };
      const collection_sort_filter_controls_init = async function () {
        jquery_min_default()("#js-collection-sorting li").on(
          "click",
          function changeSortOrder(evt) {
            const sortOrder = jquery_min_default()(evt.delegateTarget).attr("sort_value");
            if ("string" !== typeof sortOrder || !sortOrder) return;
            const uri = new URL(window.location.href);
            uri.searchParams.set("sort_by", sortOrder);
            window.location.href = uri.toString();
          }
        );
        jquery_min_default()(".color_options").on(
          "click",
          function filterByTag(evt) {
            const selector = jquery_min_default()(evt.delegateTarget);
            const color_tag = selector.attr("tag_value");
            const size_tag = jquery_min_default()(
              "#selected_size"
            ).attr("tag_value");
            const urlTemplate =
              selector.parent().attr("data-collection-url") || "/collections/all";
            if ("string" !== typeof color_tag || !color_tag) return;
            const uri = new URL(window.location.href);
            uri.pathname = [
              [urlTemplate, "nil" === color_tag ? "" : color_tag].join("/"),
              "nil" === size_tag ? "" : size_tag,
            ].join("+");
            window.location.href = uri.toString();
          }
        );
        jquery_min_default()(".size_options").on(
          "click",
          function filterByTag(evt) {
            const selector = jquery_min_default()(evt.delegateTarget);
            const size_tag = selector.attr("tag_value");
            const color_tag = jquery_min_default()(
              "#selected_color"
            ).attr("tag_value");
            const urlTemplate =
              selector.parent().attr("data-collection-url") || "/collections/all";
            if ("string" !== typeof size_tag || !size_tag) return;
            const uri = new URL(window.location.href);
            uri.pathname = [
              [urlTemplate, "nil" === size_tag ? "" : size_tag].join("/"),
              "nil" === color_tag ? "" : color_tag,
            ].join("+");
            window.location.href = uri.toString();
          }
        );
      };
      var preact_module = __webpack_require__(823);
      var io = __webpack_require__(285);
      var hooks_module = __webpack_require__(8132);
      var format_money = __webpack_require__(9646);
      const App = function ({ moneyFormat: moneyFormat }) {
        const [searchResults, setSearchResults] = (0, hooks_module.useState)();
        async function fetchSearch(query) {
          const data = await fetch(
            `https://miaou.com/search/suggest.json?q=${query}&resources[type]=product,page,collection,article&resources[options][unavailable_products]=hide&resources[options][fields]=title,body,tag,product_type,variants.title,vendor&resources[limit]=57`
          );
          const results = await data.json();
          //return results["resources"]["results"]["products"]
          var resultTypes = Object.entries(results["resources"]["results"]);
          var resultCount = 0;
          var search_result = [];
          Object.keys(resultTypes).forEach(function (i) {
            var obj = resultTypes[i];
            var type = obj[0];
            var results = obj[1];
            resultCount += results.length;

            switch (type) {
              case "products":
                search_result = buildProducts(search_result, results);
                break;
              case "collections":
                search_result = buildCollections(search_result, results);
                break;
              case "pages":
                search_result = buildPages(search_result, results);
                break;
            }
          });

          return search_result;
        }
        function buildProducts(search_result, results) {
          results.forEach((product) => {
            var new_product = {
              type: "product",
              title: product.title,
              url: product.url,
              content: "",
              image: product.featured_image.url,
              compare_at_price_max: product.compare_at_price_max,
              price: product.price,
            };
            search_result.push(new_product);
          });
          return search_result;
        }
        function buildCollections(search_result, results) {
          results.forEach((collection) => {
            var new_collection = {
              type: "collection",
              title: collection.title + " Collection",
              url: collection.url,
              content: "",
              //image: collection.featured_image.url,
              image: objectData.collections[collection.handle],
              handle: collection.handle,
              price: 0,
            };
            search_result.push(new_collection);
          });
          return search_result;
        }
        function buildPages(search_result, results) {
          results.forEach((page) => {
            var new_page = {
              type: "page",
              title: page.title,
              url: page.url,
              //content: page.body.replace(/<[^>]+>/g, '').slice(0, 250),
              content: "",
              handle: page.handle,
              price: 0,
            };
            search_result.push(new_page);
          });
          return search_result;
        }
        async function onInput(e) {
          const elem = e.target;
          if (elem && elem.value) {
            const response = await fetchSearch(elem.value);
            setSearchResults(response);
          }
        }
        (0, hooks_module.useEffect)(() => {
          const searchInput = document.querySelector(".js-search-input");
          null === searchInput || void 0 === searchInput
            ? void 0
            : searchInput.addEventListener("input", (e) => onInput(e), false);
          return () => {
            null === searchInput || void 0 === searchInput
              ? void 0
              : searchInput.removeEventListener(
                  "input",
                  (e) => onInput(e),
                  false
                );
          };
        }, []);
        return (0, preact_module.h)(
          "div",
          {
            className: "Search-FeedContent",
          },
          (searchResults || []).map((product) => {
            const parsedComparePrice =
              100 * parseFloat(product.compare_at_price_max);
            const parsedPrice = 100 * parseFloat(product.price);
            return (0, preact_module.h)(
              "a",
              {
                className: "Search-FeedItem",
                href: product.url,
                style: (product.type == "page" ? "grid-column:span 2" : "")
              },
              (0, preact_module.h)("div", {
                className: (product.type == "page" ? "" : "Search-FeedItem-ImagePlaceHolder o-placeholder"),
                style: (product.type == "page" ? "" : {
                  backgroundImage: `url('${product.image}')`,
                }),
              }),
              (0, preact_module.h)(
                "p",
                {
                  className: (product.type == "page" ? "Search-FeedItem-Name Search-FeedItem-Name-Page" : "Search-FeedItem-Name")
                },
                product.title
              ),
              (0, preact_module.h)(
                "p",
                {
                  className: "Search-FeedItem-Description",
                  style: "text-align:justify"
                },
                product.content
              ),
              (0, preact_module.h)(
                "p",
                {
                  className: (parsedPrice > 0 ? "Search-FeedItem-Price" : "Search-FeedItem-Price hide-price"),
                },
                parsedComparePrice > parsedPrice &&
                  (0, preact_module.h)("span", {
                    className: "Search-FeedItem-PriceDiscount",
                    innerHTML: (0, format_money.formatMoney)(
                      parsedComparePrice,
                      moneyFormat
                    ),
                  }),
                (0, preact_module.h)("span", {
                  innerHTML: (0, format_money.formatMoney)(
                    parsedPrice,
                    moneyFormat
                  ),
                })
              )
            );
          })
        );
      };
      const search_init = async function () {
        const container = jquery_min_default()(".js-search-feed");
        const rawIo =
          container.find('script[type="application/json"]').first().text() ||
          "{}";
        const { moneyFormat: moneyFormat } = io.CartDrawerIO.create(
          JSON.parse(rawIo)
        );
        if (0 === container.length)
          throw new Error(
            "Search container element is missing [5c20cd67c23b4b9cabc32faaaafad3b6]"
          );
        const target = container.get(0);
        if (!target)
          throw new Error(
            "Search container element is missing [ff8f3209b45f4845acdd8d79f5f1cada]"
          );
        (0, preact_module.render)(
          (0, preact_module.h)(App, {
            moneyFormat: moneyFormat,
          }),
          target
        );
      };
      const collection_add_init = async function () {
        const addBtns = document.querySelectorAll(".js-col-add");
        async function onClick(e) {
          const elem = e.target;
          const formData = {
            items: [
              {
                id: elem.getAttribute("data-variant-id"),
                quantity: 1,
                properties:
                  {
                    Terms: elem.getAttribute("terms"),
                  _compare_at_price: elem.getAttribute("compare_at_price"),
                  _final_sale: elem.getAttribute("final_sale")
                  }
              },
            ],
          };
          await fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then(() => {
              window
                .fetch(`?section_id=js-ajax-discount`)
                .then()
                .then((a) => a.text())
                .then((html) => {
                  const sectionElement = jquery_min_default()(
                    "#shopify-section-js-ajax-discount"
                  );
                  sectionElement.replaceWith(html);
                })
                .then(() => {
                  (0,
                  cart_drawer_open_request.sendCartDrawerOpenRequestEvent)();
                });
            })
            .catch((error) => {
              console.log(error);
            });
        }
        addBtns.forEach((elem) => {
          elem.addEventListener("click", async (e) => await onClick(e));
        });
      };
      const collection_init = async function () {
        const readMore = document.querySelector(".read-more-js");
        if (!readMore) return;
        const readLess = document.querySelector(".read-less-js");
        const collectionSeo = document.querySelector(
          ".Collection-seo--content"
        );
        readLess.classList.add("hidden");
        readMore.addEventListener("click", function () {
          collectionSeo.classList.toggle("open");
          readMore.classList.toggle("hidden");
          readLess.classList.toggle("hidden");
        });
        readLess.addEventListener("click", function () {
          collectionSeo.classList.toggle("open");
          readMore.classList.toggle("hidden");
          readLess.classList.toggle("hidden");
        });
      };
      const BACK_TO_STOCK = ".js-back-to-stock";
      const BACK_TO_STOCK_SELECTOR = "#js-bts-select";
      const BACK_TO_STOCK_CLOSE = ".js-bis-overlay-close";
      const BACK_TO_STOCK_EMAIL = "#js-bts-email";
      const BACK_TO_STOCK_CHECKBOX = "#js-bts-checkbox";
      const BACK_TO_STOCK_SUBMIT = ".js-out-of-stock";
      const BACK_TO_STOCK_OVERLAY = ".BackToStock-overlay";
      const BACK_TO_STOCK_POP_UP = ".BackToStock";
      const BACK_TO_STOCK_MESSAGE = "#js-bts-message";
      const BACK_TO_STOCK_MESSAGE_SUCCESS = "#js-bts-message-success";
      const IS_CHECKED_MESSAGE = "#js-checked-message";
      const PRODUCT_ID = "#js-bts-prod";
      const VARIANT_ID = "#js-bts-var";
      const validateEmail = (email) =>
        String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      const out_of_stock_init = async function () {
        const triggerPopup = () => {
          freeze("");
          jquery_min_default()(BACK_TO_STOCK_OVERLAY).addClass("opened");
          jquery_min_default()(BACK_TO_STOCK_POP_UP).addClass("opened");
        };
        jquery_min_default()(document).on(
          "change",
          BACK_TO_STOCK_SELECTOR,
          () => {
            const variant_id = jquery_min_default()(BACK_TO_STOCK_SELECTOR)
              .find(":selected")
              .attr("variant_id");
            if (variant_id) jquery_min_default()(VARIANT_ID).val(variant_id);
          }
        );
        jquery_min_default()(document).on("click", BACK_TO_STOCK, (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          triggerPopup();
        });
        jquery_min_default()(document).on("click", BACK_TO_STOCK_CLOSE, () => {
          jquery_min_default()(BACK_TO_STOCK_OVERLAY).removeClass("opened");
          jquery_min_default()(BACK_TO_STOCK_POP_UP).removeClass("opened");
          thaw("");
          jquery_min_default()(BACK_TO_STOCK_EMAIL).val("");
          jquery_min_default()(BACK_TO_STOCK_MESSAGE).css("display", "none");
        });
        jquery_min_default()(document).on(
          "keypress",
          BACK_TO_STOCK_EMAIL,
          (e) => {
            const key = e.which;
            if (
              13 === key &&
              void 0 ===
                jquery_min_default()(BACK_TO_STOCK_SUBMIT).attr("disabled")
            )
              jquery_min_default()(BACK_TO_STOCK_SUBMIT).trigger("click");
          }
        );
        jquery_min_default()(document).on("input", BACK_TO_STOCK_EMAIL, () => {
          const valueToTest = `${jquery_min_default()(
            BACK_TO_STOCK_EMAIL
          ).val()}`;
          const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          if (testEmail.test(valueToTest))
            jquery_min_default()(BACK_TO_STOCK_SUBMIT).removeAttr("disabled");
          else jquery_min_default()(BACK_TO_STOCK_SUBMIT).attr("disabled");
        });
        jquery_min_default()(document).on(
          "click",
          BACK_TO_STOCK_SUBMIT,
          async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation;
            const product_id = jquery_min_default()(PRODUCT_ID).val();
            const variant_id = jquery_min_default()(VARIANT_ID).val();
            const email = jquery_min_default()(BACK_TO_STOCK_EMAIL).val();
            if (null == validateEmail(email) || email.length < 1) {
              jquery_min_default()(BACK_TO_STOCK_MESSAGE).css("display", "");
              jquery_min_default()(BACK_TO_STOCK_MESSAGE).text(
                "Please enter valid email address"
              );
              return;
            }
            const data = {
              a: "HyvYgL",
              email: email,
              product: product_id,
              variant: variant_id,
              platform: "shopify",
            };
            fetch(
              "https://a.klaviyo.com/onsite/components/back-in-stock/subscribe",
              {
                headers: {
                  accept: "application/json, text/plain, */*",
                  "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: new URLSearchParams(data),
                method: "POST",
              }
            )
              .then((res) => res.json())
              .then((res) => {
                if (res.success) {
                  jquery_min_default()(BACK_TO_STOCK_MESSAGE).css(
                    "display",
                    "none"
                  );
                  jquery_min_default()(BACK_TO_STOCK_MESSAGE_SUCCESS).css(
                    "display",
                    ""
                  );
                  jquery_min_default()(BACK_TO_STOCK_MESSAGE_SUCCESS).text(
                    "You're in! We'll let you know when it's available."
                  );
                }
              })
              .catch((err) => {
                console.error(err);
              });
          }
        );
        if ("#bis" === window.location.hash) {
          triggerPopup();
          window.location.hash = "";
        }
      };
      const logErrors = function (err) {
        console.error(err);
      };
      const theme_cart = (0, cart.getCartMachine)();
      init().catch(logErrors);
      offcanvas_drawers_init(theme_cart).catch(logErrors);
      offcanvas_menu_init().catch(logErrors);
      toggle_dropdowns_init().catch(logErrors);
      keep_dropdowns_in_viewport_init().catch(logErrors);
      collapse_nav_init().catch(logErrors);
      collection_sort_filter_controls_init().catch(logErrors);
      search_init().catch(logErrors);
      collection_add_init().catch(logErrors);
      collection_init().catch(logErrors);
      out_of_stock_init().catch(logErrors);
    },
    3011: (module) => {
      (function (window, factory) {
        var lazySizes = factory(window, window.document, Date);
        window.lazySizes = lazySizes;
        if (true && module.exports) module.exports = lazySizes;
      })(
        "undefined" != typeof window ? window : {},
        function l(window, document, Date) {
          "use strict";
          var lazysizes, lazySizesCfg;
          (function () {
            var prop;
            var lazySizesDefaults = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              fastLoadedClass: "ls-is-cached",
              iframeLoadMode: 0,
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: true,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: true,
              ricTimeout: 0,
              throttleDelay: 125,
            };
            lazySizesCfg =
              window.lazySizesConfig || window.lazysizesConfig || {};
            for (prop in lazySizesDefaults)
              if (!(prop in lazySizesCfg))
                lazySizesCfg[prop] = lazySizesDefaults[prop];
          })();
          if (!document || !document.getElementsByClassName)
            return {
              init: function () {},
              cfg: lazySizesCfg,
              noSupport: true,
            };
          var docElem = document.documentElement;
          var supportPicture = window.HTMLPictureElement;
          var _addEventListener = "addEventListener";
          var _getAttribute = "getAttribute";
          var addEventListener = window[_addEventListener].bind(window);
          var setTimeout = window.setTimeout;
          var requestAnimationFrame =
            window.requestAnimationFrame || setTimeout;
          var requestIdleCallback = window.requestIdleCallback;
          var regPicture = /^picture$/i;
          var loadEvents = ["load", "error", "lazyincluded", "_lazyloaded"];
          var regClassCache = {};
          var forEach = Array.prototype.forEach;
          var hasClass = function (ele, cls) {
            if (!regClassCache[cls])
              regClassCache[cls] = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            return (
              regClassCache[cls].test(ele[_getAttribute]("class") || "") &&
              regClassCache[cls]
            );
          };
          var addClass = function (ele, cls) {
            if (!hasClass(ele, cls))
              ele.setAttribute(
                "class",
                (ele[_getAttribute]("class") || "").trim() + " " + cls
              );
          };
          var removeClass = function (ele, cls) {
            var reg;
            if ((reg = hasClass(ele, cls)))
              ele.setAttribute(
                "class",
                (ele[_getAttribute]("class") || "").replace(reg, " ")
              );
          };
          var addRemoveLoadEvents = function (dom, fn, add) {
            var action = add ? _addEventListener : "removeEventListener";
            if (add) addRemoveLoadEvents(dom, fn);
            loadEvents.forEach(function (evt) {
              dom[action](evt, fn);
            });
          };
          var triggerEvent = function (
            elem,
            name,
            detail,
            noBubbles,
            noCancelable
          ) {
            var event = document.createEvent("Event");
            if (!detail) detail = {};
            detail.instance = lazysizes;
            event.initEvent(name, !noBubbles, !noCancelable);
            event.detail = detail;
            elem.dispatchEvent(event);
            return event;
          };
          var updatePolyfill = function (el, full) {
            var polyfill;
            if (
              !supportPicture &&
              (polyfill = window.picturefill || lazySizesCfg.pf)
            ) {
              if (full && full.src && !el[_getAttribute]("srcset"))
                el.setAttribute("srcset", full.src);
              polyfill({
                reevaluate: true,
                elements: [el],
              });
            } else if (full && full.src) el.src = full.src;
          };
          var getCSS = function (elem, style) {
            return (getComputedStyle(elem, null) || {})[style];
          };
          var getWidth = function (elem, parent, width) {
            width = width || elem.offsetWidth;
            while (
              width < lazySizesCfg.minSize &&
              parent &&
              !elem._lazysizesWidth
            ) {
              width = parent.offsetWidth;
              parent = parent.parentNode;
            }
            return width;
          };
          var rAF = (function () {
            var running, waiting;
            var firstFns = [];
            var secondFns = [];
            var fns = firstFns;
            var run = function () {
              var runFns = fns;
              fns = firstFns.length ? secondFns : firstFns;
              running = true;
              waiting = false;
              while (runFns.length) runFns.shift()();
              running = false;
            };
            var rafBatch = function (fn, queue) {
              if (running && !queue) fn.apply(this, arguments);
              else {
                fns.push(fn);
                if (!waiting) {
                  waiting = true;
                  (document.hidden ? setTimeout : requestAnimationFrame)(run);
                }
              }
            };
            rafBatch._lsFlush = run;
            return rafBatch;
          })();
          var rAFIt = function (fn, simple) {
            return simple
              ? function () {
                  rAF(fn);
                }
              : function () {
                  var that = this;
                  var args = arguments;
                  rAF(function () {
                    fn.apply(that, args);
                  });
                };
          };
          var throttle = function (fn) {
            var running;
            var lastTime = 0;
            var gDelay = lazySizesCfg.throttleDelay;
            var rICTimeout = lazySizesCfg.ricTimeout;
            var run = function () {
              running = false;
              lastTime = Date.now();
              fn();
            };
            var idleCallback =
              requestIdleCallback && rICTimeout > 49
                ? function () {
                    requestIdleCallback(run, {
                      timeout: rICTimeout,
                    });
                    if (rICTimeout !== lazySizesCfg.ricTimeout)
                      rICTimeout = lazySizesCfg.ricTimeout;
                  }
                : rAFIt(function () {
                    setTimeout(run);
                  }, true);
            return function (isPriority) {
              var delay;
              if ((isPriority = true === isPriority)) rICTimeout = 33;
              if (running) return;
              running = true;
              delay = gDelay - (Date.now() - lastTime);
              if (delay < 0) delay = 0;
              if (isPriority || delay < 9) idleCallback();
              else setTimeout(idleCallback, delay);
            };
          };
          var debounce = function (func) {
            var timeout, timestamp;
            var wait = 99;
            var run = function () {
              timeout = null;
              func();
            };
            var later = function () {
              var last = Date.now() - timestamp;
              if (last < wait) setTimeout(later, wait - last);
              else (requestIdleCallback || run)(run);
            };
            return function () {
              timestamp = Date.now();
              if (!timeout) timeout = setTimeout(later, wait);
            };
          };
          var loader = (function () {
            var preloadElems,
              isCompleted,
              resetPreloadingTimer,
              loadMode,
              started;
            var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
            var regImg = /^img$/i;
            var regIframe = /^iframe$/i;
            var supportScroll =
              "onscroll" in window && !/(gle|ing)bot/.test(navigator.userAgent);
            var shrinkExpand = 0;
            var currentExpand = 0;
            var isLoading = 0;
            var lowRuns = -1;
            var resetPreloading = function (e) {
              isLoading--;
              if (!e || isLoading < 0 || !e.target) isLoading = 0;
            };
            var isVisible = function (elem) {
              if (null == isBodyHidden)
                isBodyHidden = "hidden" == getCSS(document.body, "visibility");
              return (
                isBodyHidden ||
                !(
                  "hidden" == getCSS(elem.parentNode, "visibility") &&
                  "hidden" == getCSS(elem, "visibility")
                )
              );
            };
            var isNestedVisible = function (elem, elemExpand) {
              var outerRect;
              var parent = elem;
              var visible = isVisible(elem);
              eLtop -= elemExpand;
              eLbottom += elemExpand;
              eLleft -= elemExpand;
              eLright += elemExpand;
              while (
                visible &&
                (parent = parent.offsetParent) &&
                parent != document.body &&
                parent != docElem
              ) {
                visible = (getCSS(parent, "opacity") || 1) > 0;
                if (visible && "visible" != getCSS(parent, "overflow")) {
                  outerRect = parent.getBoundingClientRect();
                  visible =
                    eLright > outerRect.left &&
                    eLleft < outerRect.right &&
                    eLbottom > outerRect.top - 1 &&
                    eLtop < outerRect.bottom + 1;
                }
              }
              return visible;
            };
            var checkElements = function () {
              var eLlen,
                i,
                rect,
                autoLoadElem,
                loadedSomething,
                elemExpand,
                elemNegativeExpand,
                elemExpandVal,
                beforeExpandVal,
                defaultExpand,
                preloadExpand,
                hFac;
              var lazyloadElems = lazysizes.elements;
              if (
                (loadMode = lazySizesCfg.loadMode) &&
                isLoading < 8 &&
                (eLlen = lazyloadElems.length)
              ) {
                i = 0;
                lowRuns++;
                for (; i < eLlen; i++) {
                  if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) continue;
                  if (
                    !supportScroll ||
                    (lazysizes.prematureUnveil &&
                      lazysizes.prematureUnveil(lazyloadElems[i]))
                  ) {
                    unveilElement(lazyloadElems[i]);
                    continue;
                  }
                  if (
                    !(elemExpandVal =
                      lazyloadElems[i][_getAttribute]("data-expand")) ||
                    !(elemExpand = 1 * elemExpandVal)
                  )
                    elemExpand = currentExpand;
                  if (!defaultExpand) {
                    defaultExpand =
                      !lazySizesCfg.expand || lazySizesCfg.expand < 1
                        ? docElem.clientHeight > 500 &&
                          docElem.clientWidth > 500
                          ? 500
                          : 370
                        : lazySizesCfg.expand;
                    lazysizes._defEx = defaultExpand;
                    preloadExpand = defaultExpand * lazySizesCfg.expFactor;
                    hFac = lazySizesCfg.hFac;
                    isBodyHidden = null;
                    if (
                      currentExpand < preloadExpand &&
                      isLoading < 1 &&
                      lowRuns > 2 &&
                      loadMode > 2 &&
                      !document.hidden
                    ) {
                      currentExpand = preloadExpand;
                      lowRuns = 0;
                    } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6)
                      currentExpand = defaultExpand;
                    else currentExpand = shrinkExpand;
                  }
                  if (beforeExpandVal !== elemExpand) {
                    eLvW = innerWidth + elemExpand * hFac;
                    elvH = innerHeight + elemExpand;
                    elemNegativeExpand = -1 * elemExpand;
                    beforeExpandVal = elemExpand;
                  }
                  rect = lazyloadElems[i].getBoundingClientRect();
                  if (
                    (eLbottom = rect.bottom) >= elemNegativeExpand &&
                    (eLtop = rect.top) <= elvH &&
                    (eLright = rect.right) >= elemNegativeExpand * hFac &&
                    (eLleft = rect.left) <= eLvW &&
                    (eLbottom || eLright || eLleft || eLtop) &&
                    (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
                    ((isCompleted &&
                      isLoading < 3 &&
                      !elemExpandVal &&
                      (loadMode < 3 || lowRuns < 4)) ||
                      isNestedVisible(lazyloadElems[i], elemExpand))
                  ) {
                    unveilElement(lazyloadElems[i]);
                    loadedSomething = true;
                    if (isLoading > 9) break;
                  } else if (
                    !loadedSomething &&
                    isCompleted &&
                    !autoLoadElem &&
                    isLoading < 4 &&
                    lowRuns < 4 &&
                    loadMode > 2 &&
                    (preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
                    (preloadElems[0] ||
                      (!elemExpandVal &&
                        (eLbottom ||
                          eLright ||
                          eLleft ||
                          eLtop ||
                          "auto" !=
                            lazyloadElems[i][_getAttribute](
                              lazySizesCfg.sizesAttr
                            ))))
                  )
                    autoLoadElem = preloadElems[0] || lazyloadElems[i];
                }
                if (autoLoadElem && !loadedSomething)
                  unveilElement(autoLoadElem);
              }
            };
            var throttledCheckElements = throttle(checkElements);
            var switchLoadingClass = function (e) {
              var elem = e.target;
              if (elem._lazyCache) {
                delete elem._lazyCache;
                return;
              }
              resetPreloading(e);
              addClass(elem, lazySizesCfg.loadedClass);
              removeClass(elem, lazySizesCfg.loadingClass);
              addRemoveLoadEvents(elem, rafSwitchLoadingClass);
              triggerEvent(elem, "lazyloaded");
            };
            var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
            var rafSwitchLoadingClass = function (e) {
              rafedSwitchLoadingClass({
                target: e.target,
              });
            };
            var changeIframeSrc = function (elem, src) {
              var loadMode =
                elem.getAttribute("data-load-mode") ||
                lazySizesCfg.iframeLoadMode;
              if (0 == loadMode) elem.contentWindow.location.replace(src);
              else if (1 == loadMode) elem.src = src;
            };
            var handleSources = function (source) {
              var customMedia;
              var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);
              if (
                (customMedia =
                  lazySizesCfg.customMedia[
                    source[_getAttribute]("data-media") ||
                      source[_getAttribute]("media")
                  ])
              )
                source.setAttribute("media", customMedia);
              if (sourceSrcset) source.setAttribute("srcset", sourceSrcset);
            };
            var lazyUnveil = rAFIt(function (
              elem,
              detail,
              isAuto,
              sizes,
              isImg
            ) {
              var src, srcset, parent, isPicture, event, firesLoad;
              if (
                !(event = triggerEvent(elem, "lazybeforeunveil", detail))
                  .defaultPrevented
              ) {
                if (sizes)
                  if (isAuto) addClass(elem, lazySizesCfg.autosizesClass);
                  else elem.setAttribute("sizes", sizes);
                srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
                src = elem[_getAttribute](lazySizesCfg.srcAttr);
                if (isImg) {
                  parent = elem.parentNode;
                  isPicture = parent && regPicture.test(parent.nodeName || "");
                }
                firesLoad =
                  detail.firesLoad ||
                  ("src" in elem && (srcset || src || isPicture));
                event = {
                  target: elem,
                };
                addClass(elem, lazySizesCfg.loadingClass);
                if (firesLoad) {
                  clearTimeout(resetPreloadingTimer);
                  resetPreloadingTimer = setTimeout(resetPreloading, 2500);
                  addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
                }
                if (isPicture)
                  forEach.call(
                    parent.getElementsByTagName("source"),
                    handleSources
                  );
                if (srcset) elem.setAttribute("srcset", srcset);
                else if (src && !isPicture)
                  if (regIframe.test(elem.nodeName)) changeIframeSrc(elem, src);
                  else elem.src = src;
                if (isImg && (srcset || isPicture))
                  updatePolyfill(elem, {
                    src: src,
                  });
              }
              if (elem._lazyRace) delete elem._lazyRace;
              removeClass(elem, lazySizesCfg.lazyClass);
              rAF(function () {
                var isLoaded = elem.complete && elem.naturalWidth > 1;
                if (!firesLoad || isLoaded) {
                  if (isLoaded) addClass(elem, lazySizesCfg.fastLoadedClass);
                  switchLoadingClass(event);
                  elem._lazyCache = true;
                  setTimeout(function () {
                    if ("_lazyCache" in elem) delete elem._lazyCache;
                  }, 9);
                }
                if ("lazy" == elem.loading) isLoading--;
              }, true);
            });
            var unveilElement = function (elem) {
              if (elem._lazyRace) return;
              var detail;
              var isImg = regImg.test(elem.nodeName);
              var sizes =
                isImg &&
                (elem[_getAttribute](lazySizesCfg.sizesAttr) ||
                  elem[_getAttribute]("sizes"));
              var isAuto = "auto" == sizes;
              if (
                (isAuto || !isCompleted) &&
                isImg &&
                (elem[_getAttribute]("src") || elem.srcset) &&
                !elem.complete &&
                !hasClass(elem, lazySizesCfg.errorClass) &&
                hasClass(elem, lazySizesCfg.lazyClass)
              )
                return;
              detail = triggerEvent(elem, "lazyunveilread").detail;
              if (isAuto) autoSizer.updateElem(elem, true, elem.offsetWidth);
              elem._lazyRace = true;
              isLoading++;
              lazyUnveil(elem, detail, isAuto, sizes, isImg);
            };
            var afterScroll = debounce(function () {
              lazySizesCfg.loadMode = 3;
              throttledCheckElements();
            });
            var altLoadmodeScrollListner = function () {
              if (3 == lazySizesCfg.loadMode) lazySizesCfg.loadMode = 2;
              afterScroll();
            };
            var onload = function () {
              if (isCompleted) return;
              if (Date.now() - started < 999) {
                setTimeout(onload, 999);
                return;
              }
              isCompleted = true;
              lazySizesCfg.loadMode = 3;
              throttledCheckElements();
              addEventListener("scroll", altLoadmodeScrollListner, true);
            };
            return {
              _: function () {
                started = Date.now();
                lazysizes.elements = document.getElementsByClassName(
                  lazySizesCfg.lazyClass
                );
                preloadElems = document.getElementsByClassName(
                  lazySizesCfg.lazyClass + " " + lazySizesCfg.preloadClass
                );
                addEventListener("scroll", throttledCheckElements, true);
                addEventListener("resize", throttledCheckElements, true);
                addEventListener("pageshow", function (e) {
                  if (e.persisted) {
                    var loadingElements = document.querySelectorAll(
                      "." + lazySizesCfg.loadingClass
                    );
                    if (loadingElements.length && loadingElements.forEach)
                      requestAnimationFrame(function () {
                        loadingElements.forEach(function (img) {
                          if (img.complete) unveilElement(img);
                        });
                      });
                  }
                });
                if (window.MutationObserver)
                  new MutationObserver(throttledCheckElements).observe(
                    docElem,
                    {
                      childList: true,
                      subtree: true,
                      attributes: true,
                    }
                  );
                else {
                  docElem[_addEventListener](
                    "DOMNodeInserted",
                    throttledCheckElements,
                    true
                  );
                  docElem[_addEventListener](
                    "DOMAttrModified",
                    throttledCheckElements,
                    true
                  );
                  setInterval(throttledCheckElements, 999);
                }
                addEventListener("hashchange", throttledCheckElements, true);
                [
                  "focus",
                  "mouseover",
                  "click",
                  "load",
                  "transitionend",
                  "animationend",
                ].forEach(function (name) {
                  document[_addEventListener](
                    name,
                    throttledCheckElements,
                    true
                  );
                });
                if (/d$|^c/.test(document.readyState)) onload();
                else {
                  addEventListener("load", onload);
                  document[_addEventListener](
                    "DOMContentLoaded",
                    throttledCheckElements
                  );
                  setTimeout(onload, 2e4);
                }
                if (lazysizes.elements.length) {
                  checkElements();
                  rAF._lsFlush();
                } else throttledCheckElements();
              },
              checkElems: throttledCheckElements,
              unveil: unveilElement,
              _aLSL: altLoadmodeScrollListner,
            };
          })();
          var autoSizer = (function () {
            var autosizesElems;
            var sizeElement = rAFIt(function (elem, parent, event, width) {
              var sources, i, len;
              elem._lazysizesWidth = width;
              width += "px";
              elem.setAttribute("sizes", width);
              if (regPicture.test(parent.nodeName || "")) {
                sources = parent.getElementsByTagName("source");
                for (i = 0, len = sources.length; i < len; i++)
                  sources[i].setAttribute("sizes", width);
              }
              if (!event.detail.dataAttr) updatePolyfill(elem, event.detail);
            });
            var getSizeElement = function (elem, dataAttr, width) {
              var event;
              var parent = elem.parentNode;
              if (parent) {
                width = getWidth(elem, parent, width);
                event = triggerEvent(elem, "lazybeforesizes", {
                  width: width,
                  dataAttr: !!dataAttr,
                });
                if (!event.defaultPrevented) {
                  width = event.detail.width;
                  if (width && width !== elem._lazysizesWidth)
                    sizeElement(elem, parent, event, width);
                }
              }
            };
            var updateElementsSizes = function () {
              var i;
              var len = autosizesElems.length;
              if (len) {
                i = 0;
                for (; i < len; i++) getSizeElement(autosizesElems[i]);
              }
            };
            var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
            return {
              _: function () {
                autosizesElems = document.getElementsByClassName(
                  lazySizesCfg.autosizesClass
                );
                addEventListener("resize", debouncedUpdateElementsSizes);
              },
              checkElems: debouncedUpdateElementsSizes,
              updateElem: getSizeElement,
            };
          })();
          var init = function () {
            if (!init.i && document.getElementsByClassName) {
              init.i = true;
              autoSizer._();
              loader._();
            }
          };
          setTimeout(function () {
            if (lazySizesCfg.init) init();
          });
          lazysizes = {
            cfg: lazySizesCfg,
            autoSizer: autoSizer,
            loader: loader,
            init: init,
            uP: updatePolyfill,
            aC: addClass,
            rC: removeClass,
            hC: hasClass,
            fire: triggerEvent,
            gW: getWidth,
            rAF: rAF,
          };
          return lazysizes;
        }
      );
    },
    8514: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_FACTORY__,
        __WEBPACK_AMD_DEFINE_ARRAY__,
        __WEBPACK_AMD_DEFINE_RESULT__;
      (function (window, factory) {
        var globalInstall = function () {
          factory(window.lazySizes);
          window.removeEventListener("lazyunveilread", globalInstall, true);
        };
        factory = factory.bind(null, window, window.document);
        if (true && module.exports) factory(__webpack_require__(3011));
        else if (true)
          !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3011)]),
          (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
          (__WEBPACK_AMD_DEFINE_RESULT__ =
            "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__
              ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                  exports,
                  __WEBPACK_AMD_DEFINE_ARRAY__
                )
              : __WEBPACK_AMD_DEFINE_FACTORY__),
          void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })(window, function (window, document, lazySizes) {
        "use strict";
        if (!window.addEventListener) return;
        var lazySizesCfg = lazySizes.cfg;
        var regWhite = /\s+/g;
        var regSplitSet = /\s*\|\s+|\s+\|\s*/g;
        var regSource = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/;
        var regType = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/;
        var regBgUrlEscape = /\(|\)|'/;
        var allowedBackgroundSize = {
          contain: 1,
          cover: 1,
        };
        var proxyWidth = function (elem) {
          var width = lazySizes.gW(elem, elem.parentNode);
          if (!elem._lazysizesWidth || width > elem._lazysizesWidth)
            elem._lazysizesWidth = width;
          return elem._lazysizesWidth;
        };
        var getBgSize = function (elem) {
          var bgSize;
          bgSize = (
            getComputedStyle(elem) || {
              getPropertyValue: function () {},
            }
          ).getPropertyValue("background-size");
          if (
            !allowedBackgroundSize[bgSize] &&
            allowedBackgroundSize[elem.style.backgroundSize]
          )
            bgSize = elem.style.backgroundSize;
          return bgSize;
        };
        var setTypeOrMedia = function (source, match) {
          if (match) {
            var typeMatch = match.match(regType);
            if (typeMatch && typeMatch[1])
              source.setAttribute("type", typeMatch[1]);
            else
              source.setAttribute(
                "media",
                lazySizesCfg.customMedia[match] || match
              );
          }
        };
        var createPicture = function (sets, elem, img) {
          var picture = document.createElement("picture");
          var sizes = elem.getAttribute(lazySizesCfg.sizesAttr);
          var ratio = elem.getAttribute("data-ratio");
          var optimumx = elem.getAttribute("data-optimumx");
          if (elem._lazybgset && elem._lazybgset.parentNode == elem)
            elem.removeChild(elem._lazybgset);
          Object.defineProperty(img, "_lazybgset", {
            value: elem,
            writable: true,
          });
          Object.defineProperty(elem, "_lazybgset", {
            value: picture,
            writable: true,
          });
          sets = sets.replace(regWhite, " ").split(regSplitSet);
          picture.style.display = "none";
          img.className = lazySizesCfg.lazyClass;
          if (1 == sets.length && !sizes) sizes = "auto";
          sets.forEach(function (set) {
            var match;
            var source = document.createElement("source");
            if (sizes && "auto" != sizes) source.setAttribute("sizes", sizes);
            if ((match = set.match(regSource))) {
              source.setAttribute(lazySizesCfg.srcsetAttr, match[1]);
              setTypeOrMedia(source, match[2]);
              setTypeOrMedia(source, match[3]);
            } else source.setAttribute(lazySizesCfg.srcsetAttr, set);
            picture.appendChild(source);
          });
          if (sizes) {
            img.setAttribute(lazySizesCfg.sizesAttr, sizes);
            elem.removeAttribute(lazySizesCfg.sizesAttr);
            elem.removeAttribute("sizes");
          }
          if (optimumx) img.setAttribute("data-optimumx", optimumx);
          if (ratio) img.setAttribute("data-ratio", ratio);
          picture.appendChild(img);
          elem.appendChild(picture);
        };
        var proxyLoad = function (e) {
          if (!e.target._lazybgset) return;
          var image = e.target;
          var elem = image._lazybgset;
          var bg = image.currentSrc || image.src;
          if (bg) {
            var useSrc = regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg;
            var event = lazySizes.fire(elem, "bgsetproxy", {
              src: bg,
              useSrc: useSrc,
              fullSrc: null,
            });
            if (!event.defaultPrevented)
              elem.style.backgroundImage =
                event.detail.fullSrc || "url(" + event.detail.useSrc + ")";
          }
          if (image._lazybgsetLoading) {
            lazySizes.fire(elem, "_lazyloaded", {}, false, true);
            delete image._lazybgsetLoading;
          }
        };
        addEventListener("lazybeforeunveil", function (e) {
          var set, image, elem;
          if (
            e.defaultPrevented ||
            !(set = e.target.getAttribute("data-bgset"))
          )
            return;
          elem = e.target;
          image = document.createElement("img");
          image.alt = "";
          image._lazybgsetLoading = true;
          e.detail.firesLoad = true;
          createPicture(set, elem, image);
          setTimeout(function () {
            lazySizes.loader.unveil(image);
            lazySizes.rAF(function () {
              lazySizes.fire(image, "_lazyloaded", {}, true, true);
              if (image.complete)
                proxyLoad({
                  target: image,
                });
            });
          });
        });
        document.addEventListener("load", proxyLoad, true);
        window.addEventListener(
          "lazybeforesizes",
          function (e) {
            if (e.detail.instance != lazySizes) return;
            if (e.target._lazybgset && e.detail.dataAttr) {
              var elem = e.target._lazybgset;
              var bgSize = getBgSize(elem);
              if (allowedBackgroundSize[bgSize]) {
                e.target._lazysizesParentFit = bgSize;
                lazySizes.rAF(function () {
                  e.target.setAttribute("data-parent-fit", bgSize);
                  if (e.target._lazysizesParentFit)
                    delete e.target._lazysizesParentFit;
                });
              }
            }
          },
          true
        );
        document.documentElement.addEventListener(
          "lazybeforesizes",
          function (e) {
            if (
              e.defaultPrevented ||
              !e.target._lazybgset ||
              e.detail.instance != lazySizes
            )
              return;
            e.detail.width = proxyWidth(e.target._lazybgset);
          }
        );
      });
    },
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(0, [351], () => __webpack_exec__(557));
    var __webpack_exports__ = __webpack_require__.O();
  },
]);
