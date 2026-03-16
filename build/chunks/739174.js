/** chunk id: 739174 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    m = n(442433),
    g = n(392054),
    x = n(168186),
    h = n(713654),
    p = n(201275),
    A = n(657048),
    b = n(734057),
    _ = n(696451),
    f = n(317525),
    N = n(351906),
    j = n(287809),
    T = n(427262),
    v = n(652215),
    C = n(985018),
    I = n(393800);

function E(e) {
    let {
        guild: t,
        id: s,
        type: a,
        isLocked: r,
        lockTooltipText: d
    } = e, c = !r || null != d;
    o()(c, "No lockTooltipText provided while isLocked=true");
    let u = l.useCallback(e => {
        (0, m.L3)(e, async () => {
            let {
                default: e
            } = await n.e("15687").then(n.bind(n, 646938));
            return t => (0, i.jsx)(e, {
                ...t,
                id: s,
                label: C.intl.string(C.t.oJ1Muw)
            })
        })
    }, [s]);
    switch (a) {
        case g.RA.CHANNEL:
            return (0, i.jsx)(S, {
                guild: t,
                id: s,
                isLocked: r,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case g.RA.ROLE:
            return (0, i.jsx)(y, {
                guild: t,
                id: s,
                isLocked: r,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case g.RA.USER:
            return (0, i.jsx)(O, {
                guild: t,
                id: s,
                isLocked: r,
                lockTooltipText: d,
                openEntryContextMenu: u
            })
    }
}

function S(e) {
    let {
        guild: t,
        id: n,
        isLocked: s,
        lockTooltipText: r,
        openEntryContextMenu: o
    } = e, c = (0, x.Ap)(t.id), {
        icon: m,
        name: g,
        categoryName: p
    } = (0, d.cf)([b.A], () => {
        if (c === n) return {
            name: C.intl.string(C.t["7YqSGx"]),
            icon: u.N$i
        };
        let e = b.A.getChannel(n),
            i = e?.parent_id != null ? b.A.getChannel(e.parent_id) : null;
        return {
            icon: null != e ? (0, h.gU)(e, t) : null,
            name: e?.name,
            categoryName: i?.name
        }
    }, [c, t, n]), A = l.useCallback(e => {
        n !== c && o(e)
    }, [c, n, o]);
    return null == m || null == g ? null : (0, i.jsxs)("div", {
        onContextMenu: A,
        className: I.Cv,
        children: [(0, i.jsx)(m, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: a()(I.p, I.Sl)
        }), (0, i.jsx)(u.Text, {
            className: I.S3,
            color: "text-strong",
            variant: "text-md/normal",
            children: g
        }), null != p ? (0, i.jsxs)(u.Text, {
            className: I.Tc,
            variant: "text-sm/normal",
            children: ["(", p, ")"]
        }) : null, s ? (0, i.jsx)(w, {
            tooltipText: r
        }) : null]
    })
}

function y(e) {
    let {
        guild: t,
        id: s,
        isLocked: r,
        lockTooltipText: o
    } = e, c = (0, d.bG)([f.A], () => f.A.getRole(t.id, s)), g = (0, p.$7)({
        guildId: t.id,
        roleId: s,
        size: 24
    }), x = l.useCallback(e => {
        null != t && null != c && (0, m.L3)(e, async () => {
            let {
                default: e
            } = await n.e("41072").then(n.bind(n, 165747));
            return n => (0, i.jsx)(e, {
                ...n,
                guild: t,
                role: c
            })
        })
    }, [t, c]);
    return c?.name == null ? null : (0, i.jsxs)("div", {
        onContextMenu: x,
        className: I.Cv,
        children: [null != g ? (0, i.jsx)(A.A, {
            className: a()(I.__invalid_icon, I.Sl),
            ...g
        }) : (0, i.jsx)(u.iTF, {
            size: "custom",
            width: 23,
            height: 23,
            className: a()(I.a, I.Sl),
            color: c.colorString ?? v.TpD
        }), (0, i.jsx)(u.Text, {
            className: I.S3,
            color: "text-strong",
            variant: "text-md/normal",
            children: c.name
        }), r ? (0, i.jsx)(w, {
            tooltipText: o
        }) : null]
    })
}

function O(e) {
    let {
        guild: t,
        id: n,
        isLocked: l,
        lockTooltipText: s,
        openEntryContextMenu: a
    } = e, r = (0, d.bG)([j.default], () => j.default.getUser(n)), o = (0, d.bG)([_.Ay], () => _.Ay.getMember(t.id, n)?.nick, [t.id, n]), c = (0, d.bG)([N.A], () => N.A.hidePersonalInformation);
    return null == r ? null : (0, i.jsxs)("div", {
        onContextMenu: a,
        className: I.Cv,
        children: [(0, i.jsx)(u.euF, {
            className: I.Sl,
            src: r.getAvatarURL(t.id, 24),
            "aria-label": r.username,
            size: u._3J.SIZE_24
        }), (0, i.jsx)(u.Text, {
            className: I.S3,
            color: "text-strong",
            variant: "text-md/normal",
            children: o ?? r.username
        }), c ? null : (0, i.jsx)(u.Text, {
            className: I.Tc,
            variant: "text-sm/normal",
            children: T.Ay.getUserTag(r)
        }), l ? (0, i.jsx)(w, {
            tooltipText: s
        }) : null]
    })
}

function w(e) {
    let {
        tooltipText: t
    } = e;
    return (0, i.jsx)(c.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: I.hz,
            children: (0, i.jsx)(u.XAi, {
                size: "xs",
                color: "currentColor"
            })
        })
    })
}