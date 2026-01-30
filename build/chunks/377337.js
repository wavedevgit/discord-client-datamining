/** chunk id: 377337, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(397927),
    o = n(383329),
    c = n(997509),
    d = n(308072),
    u = n(298818),
    g = n(985018),
    m = n(258761);

function p(e) {
    let {
        gameApplicationIds: t,
        handleChange: n,
        disabled: i
    } = e, {
        options: l,
        matchSorterOptions: s
    } = (0, o.R)();
    return (0, r.jsx)(a.ZiE, {
        selectionMode: "multiple",
        hideTags: !0,
        options: l,
        value: t,
        placeholder: g.intl.string(g.t.JTLolO),
        onSelectionChange: n,
        disabled: 20 === t.length || i,
        matchSorterOptions: s
    })
}

function f(e) {
    let {
        gameApplicationIds: t,
        onRemoveGame: n,
        disabled: i
    } = e;
    return 0 === t.length ? null : (0, r.jsx)("div", {
        className: m.Rh,
        children: t.map(e => (0, r.jsx)(d.A, {
            applicationId: e,
            selected: !0,
            onClick: n,
            disabled: i
        }, e))
    })
}
let h = [];

function b(e) {
    var t;
    let {
        profile: n,
        canManageGuild: l
    } = e, o = n.id, d = null != (t = null == n ? void 0 : n.gameApplicationIds) ? t : h, m = i.useCallback(e => {
        c.A.updateGuildProfile(o, {
            gameApplicationIds: e
        })
    }, [o]), b = i.useCallback(e => {
        let t = d.filter(t => t !== e);
        c.A.updateGuildProfile(o, {
            gameApplicationIds: t
        })
    }, [o, d]), x = i.useRef(d), j = i.useMemo(() => (s().isEqual(new Set(d), new Set(x.current)) || (x.current = [...d]), x.current), [d]);
    return (0, r.jsxs)(a.nVY, {
        label: g.intl.string(g.t.BR68vK),
        description: g.intl.string(g.t.MobxiB),
        children: [(0, r.jsx)(p, {
            gameApplicationIds: d,
            handleChange: m,
            disabled: !l
        }), (0, r.jsx)(f, {
            gameApplicationIds: j,
            onRemoveGame: b,
            disabled: !l
        }), (0, r.jsx)(u.A, {
            guildId: o,
            selectedGameApplicationIds: d,
            onUpdateGames: m,
            disabled: !l
        })]
    })
}