/** chunk id: 66655, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => R
}), r(896048), r(733351);
var a = r(627968),
    i = r(64700),
    n = r(158954),
    s = r(311907),
    l = r(397927),
    o = r(39255),
    c = r(198982),
    d = r(845202),
    u = r(695184),
    m = r(427262),
    b = r(545868),
    _ = r(997509),
    f = r(396816),
    g = r(856644),
    k = r(512031),
    w = r(737045),
    x = r(985018),
    p = r(489715);

function R(e) {
    let {
        transitionState: t,
        onClose: r,
        roleId: R,
        guildId: h
    } = e, A = (0, s.bG)([f.A], () => f.A.getRole(R), [R]), [T, v] = i.useState(""), [M, S] = i.useState({}), [y, E] = i.useState(!1), [C, B] = i.useState(null), H = i.useRef(null);
    i.useEffect(() => {
        u.A.requestMembers(h, T.trim().toLowerCase(), g.uc)
    }, [h, T]);
    let O = i.useCallback(e => !e.roles.includes(R), [R]),
        j = (0, g.SB)(h, O),
        L = i.useMemo(() => j.filter(e => (0, g.EF)(T, e)), [T, j]),
        G = i.useCallback(async () => {
            let e = Object.values(M).map(e => e.row.id);
            E(!0);
            try {
                await _.A.bulkAddMemberRoles(h, R, e), (0, b.a)(h, R, !1), r()
            } catch (t) {
                let e = new c.LG(t);
                E(!1), B(e)
            }
        }, [h, R, M, r]),
        P = i.useMemo(() => L.map(e => {
            var t;
            let r = m.Ay.getUserTag(e.user);
            return {
                rowType: w.T6.MEMBER,
                name: null != (t = e.name) ? t : r,
                nickname: e.name,
                username: r,
                id: e.id,
                avatarURL: e.avatarURL,
                bot: e.bot,
                verifiedBot: e.verifiedBot,
                disabled: !1,
                key: e.id
            }
        }), [L]),
        q = d.A.useSections({
            members: P
        }),
        N = i.useCallback(e => e.rowType === w.T6.MEMBER || e.rowType === w.T6.OWNER ? {
            type: o._.MEMBER,
            label: e.name,
            avatar: e.avatarURL
        } : null, []),
        U = i.useMemo(() => Object.keys(M).length, [M]);
    return (0, a.jsx)(d.A.Provider, {
        listRef: H,
        query: T,
        setQuery: v,
        pendingAdditions: M,
        setPendingAdditions: S,
        members: P,
        getRichTag: N,
        maxPendingRows: k.$S,
        children: (0, a.jsx)(n.Modal, {
            onClose: r,
            transitionState: t,
            title: x.intl.string(x.t.ZYOK46),
            subtitle: null != A ? x.intl.format(x.t["qP+nuZ"], {
                numMembers: k.$S,
                roleName: A.name
            }) : x.intl.format(x.t["3OxP4q"], {
                numMembers: k.$S
            }),
            input: (0, a.jsxs)("div", {
                children: [(0, a.jsx)(d.A.SearchBox, {
                    placeholderText: x.intl.string(x.t.vMiCaQ)
                }), null != C ? (0, a.jsx)(l.Text, {
                    className: p.k,
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: C.getAnyErrorMessage()
                }) : null]
            }),
            listProps: {
                ref: H,
                sectionHeight: d.A.SECTION_HEIGHT,
                renderSection: d.A.renderSection,
                rowHeight: d.A.ROW_HEIGHT,
                renderRow: d.A.renderRow,
                sections: q
            },
            actions: [{
                text: x.intl.string(x.t["ETE/oC"]),
                variant: "secondary",
                onClick: r
            }, {
                text: x.intl.string(x.t.OYkgVk),
                variant: "primary",
                onClick: G,
                loading: y,
                disabled: 0 === U || U > k.$S
            }]
        })
    })
}