/** chunk id: 246884, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(442433),
    o = n(688810),
    c = n(272613),
    d = n(398884),
    u = n(772366),
    h = n(728321),
    A = n(260509),
    m = n(71393),
    p = n(287809),
    g = n(531053),
    _ = n(606256),
    f = n(652215),
    x = n(819638),
    C = n(985018),
    E = n(283237);
let I = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};

function N(e) {
    (0, r.L3)(e, async () => {
        let {
            default: e
        } = await n.e("17288").then(n.bind(n, 4571));
        return t => (0, i.jsx)(e, {
            ...t
        })
    })
}

function b(e) {
    let {
        disableTooltip: t,
        lastTargetNode: n
    } = e, r = (0, l.yK)([m.A], () => m.A.getGuildsArray()), b = (0, l.bG)([p.default], () => p.default.getCurrentUser()), S = s.useMemo(() => r.some(e => (0, A.bM)(e, b)), [r, b]), T = (0, a.red)(e => (0, a.fDT)(e, x.fc)), {
        analyticsLocations: v
    } = (0, o.Ay)(), y = (0, i.jsx)(_.A, {
        showPill: !1,
        id: "create-join-button",
        onClick: () => {
            (0, d.Sn)() ? (0, u.A)({
                analyticsSource: {
                    page: f.ThZ.CREATE_JOIN_GUILD_MODAL
                },
                analyticsLocation: {
                    page: f.ThZ.CREATE_JOIN_GUILD_MODAL,
                    section: f.JJy.GUILD_CAP_UPSELL_MODAL
                },
                analyticsLocations: v
            }) : c.A.openCreateGuildModal({
                location: "Guild List"
            })
        },
        selected: T,
        onContextMenu: N,
        tooltip: C.intl.string(C.t.l5WIbf),
        icon: a.U1e
    });
    return t ? y : (0, i.jsx)("div", {
        className: E.Uq,
        children: (0, i.jsxs)(h.A, {
            tutorialId: S ? "create-more-servers" : "create-first-server",
            inlineSpecs: I,
            position: "right",
            children: [y, null != n && (0, i.jsx)(g.Ay, {
                name: C.intl.string(C.t["45xjM5"]),
                targetNode: n,
                below: !0,
                noCombine: !0
            })]
        })
    })
}