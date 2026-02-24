/** chunk id: 685374, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => C
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(702805),
    c = n(198982),
    d = n(95701),
    u = n(734057),
    h = n(71393),
    m = n(954571),
    A = n(147036),
    g = n(845202),
    p = n(86944),
    f = n(737045),
    _ = n(652215),
    E = n(985018),
    x = n(695244);

function C(e) {
    let {
        channelId: t,
        ...n
    } = e, s = (0, a.bG)([u.A], () => u.A.getChannel(t), [t]), r = (0, a.bG)([h.A], () => h.A.getGuild(s?.getGuildId()));
    return (l.useEffect(() => {
        m.default.track(_.HAw.OPEN_MODAL, {
            type: "Grant Channel Access"
        })
    }, []), null == s || null == r) ? null : (0, i.jsx)(S, {
        guild: r,
        channel: s,
        ...n
    })
}

function S(e) {
    let {
        guild: t,
        channel: n,
        onClose: a,
        newChannel: u,
        inSettings: h,
        ...m
    } = e, [_, C] = l.useState(""), [S, I] = l.useState({}), [T, N] = l.useState(!1), [y, v] = l.useState(null), b = l.useRef(null), {
        roles: j,
        members: R,
        getRichTag: M
    } = (0, p.K)(t, n, n.accessPermissions, _), D = g.A.useSections({
        roles: j,
        members: R
    }), O = u && 0 === Object.keys(S).length;
    async function L() {
        if (null == n || 0 === Object.keys(S).length) return void a();
        N(!0);
        try {
            var e, t, i;
            let l;
            await (e = n, t = S, i = h, l = [], Object.values(t).forEach(t => {
                let {
                    row: n
                } = t;
                null != n.id && "" !== n.id && (n.rowType === f.T6.ROLE ? l.push((0, A.we)(n.id, e.type)) : n.rowType === f.T6.MEMBER && l.push((0, A.n3)(n.id, e.type)))
            }), (0, o.R$)(e.id, l, i)), a(), N(!1)
        } catch (t) {
            let e = new c.LG(t);
            N(!1), v(e)
        }
    }
    let P = (0, d.ke)(n.type) ? r.I$d : r.trU;
    return (0, i.jsx)(g.A.Provider, {
        listRef: b,
        query: _,
        setQuery: C,
        pendingAdditions: S,
        setPendingAdditions: I,
        roles: j,
        members: R,
        getRichTag: M,
        children: (0, i.jsx)(s.Modal, {
            ...m,
            title: E.intl.string(E.t.dMJ3Y6),
            onClose: a,
            input: (0, i.jsxs)("div", {
                children: [(0, i.jsxs)(r.Text, {
                    className: x.HA,
                    variant: "text-lg/normal",
                    color: "text-default",
                    children: [(0, i.jsx)(P, {
                        className: x.p,
                        size: "sm",
                        color: "currentColor"
                    }), n.name]
                }), n.isGuildStageVoice() && (0, i.jsx)(r.Text, {
                    color: "text-default",
                    className: x.h_,
                    variant: "text-sm/normal",
                    children: E.intl.string(E.t.f7VbhF)
                }), (0, i.jsx)(g.A.SearchBox, {
                    placeholderText: E.intl.string(E.t.iezLLn)
                }), (0, i.jsx)(r.Text, {
                    className: x.W$,
                    variant: "text-xs/normal",
                    children: E.intl.string(E.t.rwFx85)
                }), null != y ? (0, i.jsx)(r.Text, {
                    className: x.W$,
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: y.getAnyErrorMessage()
                }) : null]
            }),
            listProps: {
                ref: b,
                sectionHeight: g.A.SECTION_HEIGHT,
                renderSection: g.A.renderSection,
                rowHeight: g.A.ROW_HEIGHT,
                renderRow: g.A.renderRow,
                sections: D
            },
            actions: O ? [{
                variant: "secondary",
                text: E.intl.string(E.t.u46sxe),
                onClick: a
            }] : [{
                variant: "secondary",
                text: E.intl.string(E.t["ETE/oC"]),
                onClick: a
            }, {
                variant: "primary",
                text: E.intl.string(E.t.i4jeWR),
                onClick: L,
                loading: T
            }]
        })
    })
}