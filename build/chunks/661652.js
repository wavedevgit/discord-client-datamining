/** chunk id: 661652, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    o = n(873298),
    d = n(397927),
    c = n(824552),
    u = n(793574),
    m = n(688810),
    h = n(975460),
    p = n(362490),
    x = n(587895),
    g = n(429913),
    _ = n(15285),
    f = n(905552),
    b = n(253932),
    v = n(546183),
    j = n(157257),
    A = n(661251),
    C = n(508474);
let T = [{
    id: "unset",
    label: "Unset",
    value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
}, {
    id: "all",
    label: "All",
    value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
}, {
    id: "usersWithGame",
    label: "Users With Game",
    value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
}, {
    id: "none",
    label: "None",
    value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
}];

function y() {
    var e;
    let t, n, s = i.useRef(null),
        {
            analyticsLocations: o
        } = (0, m.Ay)(u.A.DEV_TOOLS),
        y = b.TA.useSetting(),
        [S, E] = i.useState(""),
        N = (0, r.bG)([_.Ay, j.A], () => (0, f.A)(_.Ay, j.A)),
        I = (0, g.h)(S),
        k = (0, r.yK)([x.A], () => I?.linkedGames?.map(e => x.A.getApplication(e.id)).filter(e => null != e) ?? []),
        R = (0, p.RD)(I, {
            allowedFlows: [p._M.RPC]
        }),
        O = (0, p.RD)(I, {
            allowedFlows: [p._M.WEB]
        }),
        w = (0, p.RD)(I),
        {
            canDeauthorize: D,
            deauthorize: M
        } = (e = I?.id, t = (0, r.bG)([v.default], () => v.default.getNewestTokenForApplication(e)), n = i.useCallback(() => {
            null != t && c.A.delete(t.id)
        }, [t]), {
            canDeauthorize: null != t,
            deauthorize: n
        });
    return (0, a.jsxs)("div", {
        ref: s,
        className: l()(A.nd, C.n),
        children: [(0, a.jsxs)("div", {
            className: C.k,
            children: [(0, a.jsx)(d.Heading, {
                variant: "heading-lg/normal",
                children: "Settings"
            }), (0, a.jsx)(d.l6P, {
                label: "Receive DMs In Game",
                options: T,
                value: y,
                onSelectionChange: b.TA.updateSetting,
                selectionMode: "single",
                fullWidth: !0
            })]
        }), (0, a.jsxs)("div", {
            className: C.k,
            children: [(0, a.jsx)(d.Heading, {
                variant: "heading-lg/normal",
                children: "Application"
            }), (0, a.jsx)(d.ksK, {
                label: "Application ID",
                value: S,
                onChange: E
            }), null != N && null != N.id ? (0, a.jsx)(d.Button, {
                onClick: () => E(N.id),
                variant: "primary",
                text: `Use detected game: ${N.name} (${N.id})`
            }) : null, (0, a.jsxs)(d.Text, {
                variant: "text-md/normal",
                children: ["Application Name: ", null != I ? I.name : "N/A"]
            }), (0, a.jsxs)(d.Text, {
                variant: "text-md/normal",
                children: ["Linked Games:", " ", k.length > 0 ? k.map(e => (0, h.t)(I)?.id === e.id ? `${e.name}*` : e.name).join(", ") : "N/A"]
            })]
        }), (0, a.jsxs)("div", {
            className: C.k,
            children: [(0, a.jsx)(d.Heading, {
                variant: "heading-lg/normal",
                children: "Authorization"
            }), (0, a.jsx)(d.Button, {
                disabled: !w.canStartAuthorization,
                onClick: () => w.startAuthorization({
                    analyticsLocations: o
                }),
                variant: "primary",
                text: "Start Authorization"
            }), (0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: "This will start whichever authorization flow is available. RPC authorization takes precedence over web."
            }), (0, a.jsx)(d.Button, {
                disabled: !R.canStartAuthorization,
                onClick: () => R.startAuthorization({
                    analyticsLocations: o
                }),
                variant: "secondary",
                text: "Start In-App Authorization"
            }), (0, a.jsx)(d.Button, {
                disabled: !O.canStartAuthorization,
                onClick: () => O.startAuthorization({
                    analyticsLocations: o
                }),
                variant: "secondary",
                text: "Start Web Authorization"
            }), (0, a.jsx)(d.Button, {
                disabled: !D,
                onClick: M,
                variant: "critical-primary",
                text: "Deauthorize"
            })]
        })]
    })
}