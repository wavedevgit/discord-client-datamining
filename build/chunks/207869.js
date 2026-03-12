/** chunk id: 207869 params = (module,exports,require) **/
n.d(t, {
    f: () => M
});
var a = n(627968),
    i = n(64700),
    s = n(732955),
    l = n(421380),
    r = n(397927),
    o = n(793574),
    d = n(979286),
    c = n(341915),
    u = n(714510),
    m = n(890687),
    h = n(590202),
    p = n(971649),
    x = n(651892),
    g = n(901406),
    _ = n(92246),
    f = n(792620),
    v = n(814793),
    b = n(753386),
    j = n(201805),
    A = n(545986),
    C = n(194267),
    y = n(963713),
    T = n(758836),
    S = n(985018),
    E = n(976499);

function N(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        taskDetails: i
    } = e;
    return (0, a.jsx)(s.$nd, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? h.Cy.ACCEPT_QUEST : h.Cy.WATCH_VIDEO;
            (0, A.d5)({
                quest: t,
                questContent: c.uF.QUEST_BAR_V2,
                sourceQuestContent: n,
                sourceQuestContentCTA: e
            })
        },
        size: "sm",
        text: (0, b.WM)(i)
    })
}
let I = e => {
        let {
            quest: t,
            sourceQuestContent: n
        } = e, i = (0, p.go)(), l = (0, x.wr)(t);
        return (0, a.jsx)(s.$nd, {
            size: "sm",
            fullWidth: !0,
            onClick: () => (0, g.pu)(t, {
                content: c.uF.QUEST_BAR_V2,
                ctaContent: h.Cy.OPEN_GAME_LINK,
                impressionId: i,
                sourceQuestContent: n
            }),
            text: l
        })
    },
    k = e => {
        let {
            quest: t,
            sourceQuestContent: n
        } = e, i = (0, p.vU)()?.getId();
        return (0, a.jsx)(s.$nd, {
            fullWidth: !0,
            onClick: () => (0, g.se)({
                quest: t
            }, {
                content: c.uF.QUEST_BAR_V2,
                ctaContent: h.Cy.CONNECT_CONSOLE,
                impressionId: i,
                sourceQuestContent: n
            }),
            size: "sm",
            text: S.intl.string(S.t.csptqV)
        })
    },
    R = e => {
        let {
            quest: t
        } = e, n = (0, u.NA)({
            quest: t
        }), {
            launchInGameActivity: i
        } = (0, m.zW)(t);
        return (0, v.vA)(t) ? (0, a.jsx)(s.$nd, {
            fullWidth: !0,
            variant: "primary",
            icon: (0, A.Oz)(t),
            onClick: i,
            size: "sm",
            text: n
        }) : null
    },
    O = e => {
        let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: i,
            popoutTargetElementRef: l,
            onGameSheetOpened: r,
            onGameSheetClosed: o
        } = e, {
            applications: d
        } = i;
        return (0, a.jsx)(C.A, {
            quest: t,
            sourceQuestContent: n,
            applications: d ?? [],
            targetElementRef: l,
            onGameSheetOpened: r,
            onGameSheetClosed: o,
            children: e => (0, a.jsx)(s.$nd, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: S.intl.string(S.t["93PTEs"]),
                ...e
            })
        })
    },
    w = e => {
        let {
            quest: t,
            ctaLabel: n,
            onClick: r,
            questContent: u = c.uF.QUEST_BAR_V2,
            sourceQuestContent: m,
            ...h
        } = e, p = (0, j.ix)({
            quest: t,
            questContent: u,
            sourceQuestContent: m
        }), x = i.useCallback(e => {
            r?.(e), (0, _.ks)(t.config) && t.userStatus?.claimedAt != null ? (0, d.Cz)({
                tab: T.G2.ORBS,
                analyticsLocations: [],
                analyticsSource: o.A.QUEST_HOME_PAGE
            }) : p()
        }, [r, t.config, t.userStatus?.claimedAt, p]);
        return (0, a.jsx)(s.$nd, {
            fullWidth: !0,
            onClick: x,
            text: n ?? S.intl.string(S.t.cfY4PE),
            ...h,
            size: h.size === l.$n.Sizes.MEDIUM ? "md" : "sm"
        })
    },
    D = e => {
        let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: s,
            isProgressing: l,
            activeScreen: r,
            popoutTargetElementRef: o
        } = e, {
            quest: d,
            onGameSheetOpen: u,
            onGameSheetClose: m,
            taskDetails: h
        } = i.useContext(y.T), p = d.userStatus?.completedAt != null, x = (0, f.vv)(d), g = r !== c.X0.SELECT && !s && !l, _ = null;
        return p ? _ = (0, a.jsx)(w, {
            quest: d,
            sourceQuestContent: t
        }) : x ? _ = (0, a.jsx)(N, {
            quest: d,
            sourceQuestContent: t,
            taskDetails: h
        }) : (0, v.vA)(d) ? _ = (0, a.jsx)(R, {
            quest: d
        }) : r === c.X0.CONSOLE && n ? _ = (0, a.jsx)(k, {
            quest: d,
            sourceQuestContent: t
        }) : g && (0, v.ui)(d) ? _ = (0, a.jsx)(O, {
            quest: d,
            sourceQuestContent: t,
            taskDetails: h,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: m
        }) : g && (_ = (0, a.jsx)(I, {
            quest: d,
            sourceQuestContent: t
        })), null == _ ? null : (0, a.jsx)("div", {
            className: E.lO,
            children: _
        })
    };

function M(e) {
    let t = i.useRef(null);
    return (0, a.jsxs)("div", {
        className: E.oG,
        ref: t,
        children: [e.showBackButton && (0, a.jsx)(s.K0, {
            size: "sm",
            "aria-label": S.intl.string(S.t["13/7kX"]),
            onClick: e.onBack,
            icon: r.n2b,
            variant: "secondary"
        }), (0, a.jsx)(D, {
            ...e,
            popoutTargetElementRef: t
        })]
    })
}