/** Chunk was on 78528 **/
/** chunk id: 412484, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => C,
    NH: () => N,
    T: () => I
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(481613),
    o = n.n(a),
    c = n(837381),
    u = n(311907),
    d = n(397927),
    p = n(73153),
    h = n(964486),
    f = n(775602),
    g = n(928039),
    m = n(954571),
    b = n(203982),
    A = n(723702),
    y = n(157296),
    _ = n(963702),
    O = n(792967),
    j = n(712209),
    v = n(652215),
    x = n(985018),
    E = n(852570);

function C(e) {
    var t, n, i, a, y, C, I;
    let {
        onJump: N,
        showTutorial: T,
        setSeenTutorial: P,
        closePopout: w
    } = e, R = l.useRef(null), [D, M] = (0, j.Ay)(R), {
        loadState: L,
        channels: k
    } = D, {
        maybeLoadMore: G
    } = M, U = (0, u.bG)([f.A], () => f.A.messageGroupSpacing);
    t = R, n = D, i = M, l.useLayoutEffect(() => {
        var e;
        let {
            scrollToChannelIndex: r
        } = n;
        i.clearScrollToChannelIndex();
        let {
            current: l
        } = t;
        if (null == l || null == r) return;
        let s = null == (e = l.getScrollerNode()) ? void 0 : e.children;
        if (null == s) return;
        let a = s[r];
        if (null == a) return;
        let {
            scrollTop: o,
            offsetHeight: c
        } = l.getScrollerState();
        (a.offsetTop < o || a.offsetTop > o + c) && l.scrollTo({
            to: a.offsetTop
        })
    }), a = D, y = M, l.useEffect(() => {
        let e = () => {
            let e = a.channels.find(e => !e.collapsed);
            null != e && y.markChannelRead(e)
        };
        return b._.subscribe(v.jej.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
            b._.unsubscribe(v.jej.MARK_TOP_INBOX_CHANNEL_READ, e)
        }
    }, [y, a.channels]), C = M, l.useEffect(() => {
        let e = e => {
            ((0, A.isMac)() || (0, A.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && "z" === e.key && C.undoMarkChannelRead()
        };
        return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
        }
    }, [C]), l.useEffect(() => {
        m.default.track(v.HAw.OPEN_POPOUT, {
            type: "Inbox"
        })
    }, []), l.useEffect(() => (p.h.subscribe("CONNECTION_OPEN", w), () => {
        p.h.unsubscribe("CONNECTION_OPEN", w)
    }), [w]), (0, h.Ay)(() => (b._.subscribe(v.jej.INBOX_MARK_ALL_UNREADS_READ, M.markAllRead), () => {
        b._.unsubscribe(v.jej.INBOX_MARK_ALL_UNREADS_READ, M.markAllRead)
    }));
    let B = (0, g.A)("unreads", R);
    if (0 === k.length) {
        return (0, r.jsx)(_.A, {
            Icon: d.K$s,
            header: x.intl.string(x.t["6XMM+D"]),
            tip: (null == (I = o().os) ? void 0 : I.family) === "OS X" ? x.intl.string(x.t.w9uDOW) : x.intl.string(x.t.BiUJC6)
        })
    }
    return (0, r.jsx)(c.hD, {
        navigator: B,
        children: (0, r.jsx)(c.PR, {
            children: e => {
                var t, n;
                let {
                    ref: l
                } = e, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, l, i = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                        return i
                    }
                    if (i = function(e, t) {
                            if (null == e) return {};
                            var n, r, l = {},
                                i = Object.getOwnPropertyNames(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                            return l
                        }(e, t), Object.getOwnPropertySymbols)
                        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }(e, ["ref"]);
                return (0, r.jsxs)(d.ChK, (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({
                    ref: e => {
                        var t;
                        R.current = e, l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
                    }
                }, i), n = n = {
                    onScroll: L === j.mJ.Done ? void 0 : G,
                    className: s()(E.XG, "group-spacing-".concat(U)),
                    children: [T ? (0, r.jsx)(S, {
                        setSeenTutorial: P
                    }) : null, (0, O.A)(k, M, N), L === j.mJ.Done ? null : (0, r.jsx)(d.y$y, {
                        className: E.u1
                    })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
            }
        })
    })
}

function S(e) {
    let {
        setSeenTutorial: t
    } = e;
    return (0, r.jsxs)("div", {
        className: E.d$,
        children: [(0, r.jsx)("div", {
            className: E.cm,
            children: (0, r.jsx)(d.K$s, {
                size: "md",
                color: "currentColor"
            })
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(d.Heading, {
                className: E.__invalid_tutorialHeader,
                variant: "heading-md/semibold",
                children: x.intl.string(x.t.vZPktJ)
            }), (0, r.jsx)(d.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: x.intl.string(x.t.vWkIII)
            }), (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: E.dh,
                children: (0, r.jsx)(d.Button, {
                    variant: "primary",
                    size: "sm",
                    text: x.intl.string(x.t["+IrDzN"]),
                    onClick: t
                })
            })]
        })]
    })
}

function I() {
    return (0, r.jsx)(_.A, {
        Icon: d.K$s,
        disableStars: !0,
        header: x.intl.string(x.t["KG/ynf"]),
        tip: x.intl.string(x.t.cvcKzX)
    })
}
let N = () => (0, r.jsx)(y.A, {
    onClick: () => b._.dispatch(v.jej.INBOX_MARK_ALL_UNREADS_READ)
})