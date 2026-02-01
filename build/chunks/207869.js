/** chunk id: 207869, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => L
});
var a = n(627968),
    l = n(64700),
    r = n(732955),
    i = n(421380),
    s = n(397927),
    o = n(793574),
    c = n(979286),
    d = n(341915),
    u = n(714510),
    m = n(890687),
    p = n(590202),
    h = n(971649),
    x = n(651892),
    g = n(901406),
    f = n(92246),
    b = n(792620),
    v = n(814793),
    j = n(753386),
    _ = n(201805),
    y = n(545986),
    A = n(194267),
    C = n(963713),
    S = n(758836),
    O = n(985018),
    T = n(703653);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a
        })
    }
    return e
}

function N(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function w(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        taskDetails: l
    } = e;
    return (0, a.jsx)(r.$nd, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            var e;
            let a = (null == (e = t.userStatus) ? void 0 : e.enrolledAt) == null ? p.Cy.ACCEPT_QUEST : p.Cy.WATCH_VIDEO;
            (0, y.d5)({
                quest: t,
                questContent: d.uF.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: a
            })
        },
        size: "sm",
        text: (0, j.WM)(l)
    })
}
let I = e => {
        let {
            quest: t,
            sourceQuestContent: n
        } = e, l = (0, h.go)(), i = (0, x.wr)(t);
        return (0, a.jsx)(r.$nd, {
            size: "sm",
            fullWidth: !0,
            onClick: () => (0, g.pu)(t, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: p.Cy.OPEN_GAME_LINK,
                impressionId: l,
                sourceQuestContent: n
            }),
            text: i
        })
    },
    k = e => {
        var t;
        let {
            quest: n,
            sourceQuestContent: l
        } = e, i = null == (t = (0, h.vU)()) ? void 0 : t.getId();
        return (0, a.jsx)(r.$nd, {
            fullWidth: !0,
            onClick: () => (0, g.se)({
                quest: n
            }, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: p.Cy.CONNECT_CONSOLE,
                impressionId: i,
                sourceQuestContent: l
            }),
            size: "sm",
            text: O.intl.string(O.t.csptqV)
        })
    },
    P = e => {
        let {
            quest: t
        } = e, n = (0, u.NA)({
            quest: t
        }), {
            launchInGameActivity: l
        } = (0, m.zW)(t);
        return (0, v.vA)(t) ? (0, a.jsx)(r.$nd, {
            fullWidth: !0,
            variant: "primary",
            icon: (0, y.Oz)(t),
            onClick: l,
            size: "sm",
            text: n
        }) : null
    },
    R = e => {
        let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: l,
            popoutTargetElementRef: i,
            onGameSheetOpened: s,
            onGameSheetClosed: o
        } = e, {
            applications: c
        } = l;
        return (0, a.jsx)(A.A, {
            quest: t,
            sourceQuestContent: n,
            applications: null != c ? c : [],
            targetElementRef: i,
            onGameSheetOpened: s,
            onGameSheetClosed: o,
            children: e => (0, a.jsx)(r.$nd, E({
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: O.intl.string(O.t["93PTEs"])
            }, e))
        })
    },
    D = e => {
        var t;
        let {
            quest: n,
            ctaLabel: s,
            onClick: u,
            questContent: m = d.uF.QUEST_BAR_V2,
            sourceQuestContent: p
        } = e, h = function(e, t) {
            if (null == e) return {};
            var n, a, l, r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
                return r
            }
            if (r = function(e, t) {
                    if (null == e) return {};
                    var n, a, l = {},
                        r = Object.getOwnPropertyNames(e);
                    for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l
                }(e, t), Object.getOwnPropertySymbols)
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
            return r
        }(e, ["quest", "ctaLabel", "onClick", "questContent", "sourceQuestContent"]), x = (0, _.ix)({
            quest: n,
            questContent: m,
            sourceQuestContent: p
        }), g = l.useCallback(e => {
            var t;
            null == u || u(e), (0, f.ks)(n.config) && (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null ? (0, c.Cz)({
                tab: S.G2.ORBS,
                analyticsLocations: [],
                analyticsSource: o.A.QUEST_HOME_PAGE
            }) : x()
        }, [u, n.config, null == (t = n.userStatus) ? void 0 : t.claimedAt, x]);
        return (0, a.jsx)(r.$nd, N(E({
            fullWidth: !0,
            onClick: g,
            text: null != s ? s : O.intl.string(O.t.cfY4PE)
        }, h), {
            size: h.size === i.$n.Sizes.MEDIUM ? "md" : "sm"
        }))
    },
    M = e => {
        var t;
        let {
            sourceQuestContent: n,
            awaitingConsoleConnections: r,
            hasMadeProgress: i,
            isProgressing: s,
            activeScreen: o,
            popoutTargetElementRef: c
        } = e, {
            quest: u,
            onGameSheetOpen: m,
            onGameSheetClose: p,
            taskDetails: h
        } = l.useContext(C.T), x = (null == (t = u.userStatus) ? void 0 : t.completedAt) != null, g = (0, b.vv)(u), f = o !== d.X0.SELECT && !i && !s, j = null;
        return x ? j = (0, a.jsx)(D, {
            quest: u,
            sourceQuestContent: n
        }) : g ? j = (0, a.jsx)(w, {
            quest: u,
            sourceQuestContent: n,
            taskDetails: h
        }) : (0, v.vA)(u) ? j = (0, a.jsx)(P, {
            quest: u
        }) : o === d.X0.CONSOLE && r ? j = (0, a.jsx)(k, {
            quest: u,
            sourceQuestContent: n
        }) : f && (0, v.ui)(u) ? j = (0, a.jsx)(R, {
            quest: u,
            sourceQuestContent: n,
            taskDetails: h,
            popoutTargetElementRef: c,
            onGameSheetOpened: m,
            onGameSheetClosed: p
        }) : f && (j = (0, a.jsx)(I, {
            quest: u,
            sourceQuestContent: n
        })), null == j ? null : (0, a.jsx)("div", {
            className: T.lO,
            children: j
        })
    };

function L(e) {
    let t = l.useRef(null);
    return (0, a.jsxs)("div", {
        className: T.oG,
        ref: t,
        children: [e.showBackButton && (0, a.jsx)(r.K0, {
            size: "sm",
            "aria-label": O.intl.string(O.t["13/7kX"]),
            onClick: e.onBack,
            icon: s.n2b,
            variant: "secondary"
        }), (0, a.jsx)(M, N(E({}, e), {
            popoutTargetElementRef: t
        }))]
    })
}