/** chunk id: 685374 params = (module,exports,require) **/
n.d(t, {
    default: () => S
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(158954),
    s = n(311907),
    r = n(397927),
    o = n(702805),
    c = n(198982),
    d = n(47167),
    u = n(95701),
    h = n(734057),
    m = n(71393),
    A = n(954571),
    g = n(147036),
    _ = n(845202),
    p = n(86944),
    f = n(737045),
    E = n(652215),
    C = n(985018),
    x = n(142483);

function S(e) {
    let {
        channelId: t,
        ...n
    } = e, a = (0, s.bG)([h.A], () => h.A.getChannel(t), [t]), r = (0, s.bG)([m.A], () => m.A.getGuild(a?.getGuildId()));
    return (l.useEffect(() => {
        A.default.track(E.HAw.OPEN_MODAL, {
            type: "Grant Channel Access"
        })
    }, []), null == a || null == r) ? null : (0, i.jsx)(I, {
        guild: r,
        channel: a,
        ...n
    })
}

function I(e) {
    let {
        guild: t,
        channel: n,
        onClose: s,
        newChannel: h,
        inSettings: m,
        ...A
    } = e, [E, S] = l.useState(""), [I, T] = l.useState({}), [v, N] = l.useState(!1), [y, b] = l.useState(null), j = l.useRef(null), R = (0, d.Ay)(n), {
        roles: M,
        members: L,
        getRichTag: O
    } = (0, p.K)(t, n, n.accessPermissions, E), D = _.A.useSections({
        roles: M,
        members: L
    }), P = h && 0 === Object.keys(I).length;
    async function k() {
        if (null == n || 0 === Object.keys(I).length) return void s();
        N(!0);
        try {
            var e, t, i;
            let l;
            await (e = n, t = I, i = m, l = [], Object.values(t).forEach(t => {
                let {
                    row: n
                } = t;
                null != n.id && "" !== n.id && (n.rowType === f.T6.ROLE ? l.push((0, g.we)(n.id, e.type)) : n.rowType === f.T6.MEMBER && l.push((0, g.n3)(n.id, e.type)))
            }), (0, o.R$)(e.id, l, i)), s(), N(!1)
        } catch (t) {
            let e = new c.LG(t);
            N(!1), b(e)
        }
    }
    let w = (0, u.ke)(n.type) ? r.I$d : r.trU;
    return (0, i.jsx)(_.A.Provider, {
        listRef: j,
        query: E,
        setQuery: S,
        pendingAdditions: I,
        setPendingAdditions: T,
        roles: M,
        members: L,
        getRichTag: O,
        children: (0, i.jsx)(a.Modal, {
            ...A,
            title: C.intl.string(C.t.dMJ3Y6),
            onClose: s,
            input: (0, i.jsxs)("div", {
                children: [(0, i.jsxs)(r.Text, {
                    className: x.HA,
                    variant: "text-lg/normal",
                    color: "text-default",
                    children: [(0, i.jsx)(w, {
                        className: x.p,
                        size: "sm",
                        color: "currentColor"
                    }), R]
                }), n.isGuildStageVoice() && (0, i.jsx)(r.Text, {
                    color: "text-default",
                    className: x.h_,
                    variant: "text-sm/normal",
                    children: C.intl.string(C.t.f7VbhF)
                }), (0, i.jsx)(_.A.SearchBox, {
                    placeholderText: C.intl.string(C.t.iezLLn)
                }), (0, i.jsx)(r.Text, {
                    className: x.W$,
                    variant: "text-xs/normal",
                    children: C.intl.string(C.t.rwFx85)
                }), null != y ? (0, i.jsx)(r.Text, {
                    className: x.W$,
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: y.getAnyErrorMessage()
                }) : null]
            }),
            listProps: {
                ref: j,
                sectionHeight: _.A.SECTION_HEIGHT,
                renderSection: _.A.renderSection,
                rowHeight: _.A.ROW_HEIGHT,
                renderRow: _.A.renderRow,
                sections: D
            },
            actions: P ? [{
                variant: "secondary",
                text: C.intl.string(C.t.u46sxe),
                onClick: s
            }] : [{
                variant: "secondary",
                text: C.intl.string(C.t["ETE/oC"]),
                onClick: s
            }, {
                variant: "primary",
                text: C.intl.string(C.t.i4jeWR),
                onClick: k,
                loading: v
            }]
        })
    })
}