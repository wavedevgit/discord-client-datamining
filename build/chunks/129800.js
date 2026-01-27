/** Chunk was on web.js **/
/** chunk id: 129800, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => V
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(320448),
    l = n(559647),
    c = n(311907),
    u = n(397927),
    d = n(155718),
    f = n(775602),
    p = n(721768),
    _ = n(264322),
    h = n(842209),
    m = n(392054),
    g = n(972995),
    E = n(390756),
    y = n(203982),
    b = n(211401),
    O = n(989837),
    v = n(500049),
    A = n(555045),
    I = n(455440),
    S = n(720371),
    T = n(735991),
    C = n(297486),
    N = n(956522),
    w = n(652215),
    R = n(73510),
    P = n(985018),
    D = n(457806),
    L = n(577382);
let x = 5,
    M = "placeholder",
    j = [, , , , , ].fill(M);

function k(e) {
    var t, n;
    let {
        context: a,
        command: o,
        section: l,
        sectionName: c
    } = e, d = i.useCallback(() => {
        let e = O.A.entrypoint();
        b.k(v.Se.COMMAND), (0, E.Mv)({
            command: o,
            location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: c
        }), "channel" === a.type && (p.Gf({
            channelId: a.channel.id,
            command: o,
            section: l,
            location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: c,
            source: e,
            commandOrigin: m.iw.APPLICATION_LAUNCHER
        }), y._.dispatch(w.jej.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: a.channel.id
        }))
    }, [a, o, l, c]), f = (null != (t = null == (n = o.options) ? void 0 : n.length) ? t : 0) > 0, _ = i.useMemo(() => (0, C.SD)(o.displayDescription, void 0), [o.displayDescription]), h = i.useMemo(() => (0, r.jsxs)("div", {
        className: L.sd,
        children: [(0, r.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: o.displayName
        }), (0, r.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            lineClamp: 1,
            children: _
        })]
    }), [o.displayName, _]);
    return (0, r.jsxs)(u.DUT, {
        className: L.G5,
        onClick: d,
        children: [(0, r.jsx)(u.M1G, {
            className: L.fg,
            children: h
        }), f ? (0, r.jsx)(s._, {}) : (0, r.jsx)(G, {
            context: a,
            command: o,
            sectionName: c
        })]
    })
}

function U() {
    let e = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        {
            styleLarge: t,
            styleSmall: n
        } = i.useMemo(() => ({
            styleLarge: {
                width: "".concat(10 + 20 * Math.random(), "%"),
                height: "auto"
            },
            styleSmall: {
                width: "".concat(30 + 60 * Math.random(), "%"),
                height: "auto"
            }
        }), []),
        a = i.useMemo(() => (0, r.jsxs)("div", {
            className: L.Vc,
            children: [(0, r.jsx)("div", {
                className: D.jC,
                style: t,
                children: (0, r.jsx)(u.Text, {
                    className: D.R,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: "_"
                })
            }), (0, r.jsx)("div", {
                className: D.jC,
                style: n,
                children: (0, r.jsx)(u.Text, {
                    className: D.R,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: "_"
                })
            })]
        }), [t, n]);
    return (0, r.jsx)("div", {
        className: o()(L.G5, D.NX, {
            [D.cb]: e
        }),
        children: a
    })
}

function G(e) {
    let {
        context: t,
        command: n,
        sectionName: a
    } = e;
    (0, _.A4)(!0, !0), (0, _.SD)(t, !0, !0);
    let o = (0, A.e)(t),
        [s, c] = i.useState(!1),
        d = i.useCallback(async e => {
            if ("channel" !== t.type) return;
            e.stopPropagation();
            let r = O.A.lastShownEntrypoint();
            try {
                let {
                    isAuthorized: e
                } = await (0, g.q)({
                    applicationId: n.applicationId,
                    channel: "channel" === t.type ? t.channel : void 0,
                    commandIntegrationTypes: n.integration_types,
                    appLauncherContext: {
                        entrypoint: r,
                        location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: a
                    }
                });
                e && (await (0, T.MJ)({
                    command: n,
                    optionValues: {},
                    context: o,
                    sectionName: a,
                    commandOrigin: m.iw.APP_LAUNCHER_APPLICATION_VIEW
                }), b.k(v.Se.COMMAND))
            } finally {
                c(!1)
            }
        }, [n, t, a, o]);
    return (0, r.jsx)(u.Button, {
        type: "submit",
        onClick: d,
        disabled: s,
        variant: "secondary",
        "aria-label": P.intl.formatToPlainString(P.t.UXw6W2, {
            commandName: n.untranslatedName
        }),
        text: P.intl.string(P.t.TXNS7S),
        icon: l.l,
        iconPosition: "end",
        size: "md"
    })
}

function F(e) {
    let {
        context: t,
        commands: n,
        section: i,
        headerName: a,
        sectionName: o,
        children: s
    } = e;
    return 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: L.Zp,
            children: [(0, r.jsx)(u.Heading, {
                variant: "heading-sm/semibold",
                children: a
            }), s]
        }), (0, r.jsx)("ul", {
            className: L.dO,
            "aria-label": a,
            children: n.map((e, n) => e === M ? (0, r.jsx)(U, {}, e + n) : (0, r.jsx)(k, {
                context: t,
                command: e,
                section: i,
                sectionName: o
            }, e.id))
        })]
    })
}

function V(e) {
    var t;
    let {
        context: n,
        application: a,
        sectionName: o,
        installOnDemand: s,
        setHasCommands: l
    } = e, {
        filterSection: c,
        commandsByActiveSection: u,
        sectionDescriptors: f,
        loading: p
    } = h.cu({
        context: n,
        filters: {
            commandTypes: [d.kc.CHAT]
        },
        options: {
            placeholderCount: 0,
            limit: R.Hi,
            includeFrecency: !0,
            allowApplicationState: s,
            installOnDemand: s,
            applicationId: a.id
        },
        allowFetch: !0
    }), _ = null != (t = f.find(e => e.id === a.id)) ? t : null, {
        sortOrder: m,
        setSortOrder: g,
        commands: E,
        canSort: y
    } = (0, S.A)({
        sectionId: a.id,
        commandsByActiveSection: u
    });
    i.useEffect(() => {
        c(a.id)
    }, [a.id, c]);
    let b = (0, I.A)({
        context: n,
        commands: E,
        limit: x
    });
    return (i.useEffect(() => {
        l(E.length > 0)
    }, [l, E]), p || 0 !== E.length) ? (0, r.jsxs)("ul", {
        className: L.hQ,
        children: [(0, r.jsx)(F, {
            context: n,
            section: _,
            commands: b,
            headerName: P.intl.string(P.t.acSE0h),
            sectionName: o
        }), (0, r.jsx)(F, {
            context: n,
            section: _,
            commands: p ? j : E,
            headerName: P.intl.string(P.t.DUU9L3),
            sectionName: o,
            children: y && (0, r.jsx)(N.A, {
                sortOrder: m,
                onSortOptionClick: g
            })
        })]
    }) : null
}