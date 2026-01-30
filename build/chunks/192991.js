/** chunk id: 192991, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => k
}), n(747238), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    u = n(421380),
    c = n(397927),
    d = n(686956),
    b = n(71393),
    p = n(200662),
    g = n(739174),
    f = n(73510),
    h = n(985018),
    y = n(650659);

function k(e) {
    let {
        editPermissions: t,
        guildId: n,
        hasMemberSearch: l,
        headerText: k,
        onClose: m,
        overwrittenKeys: C,
        search: j,
        searchPlaceholderText: v,
        selectedPermissionCount: w,
        transitionState: E
    } = e, O = (0, o.bG)([b.A], () => b.A.getGuild(n), [n]);
    s()(null != O, "");
    let [x, A] = r.useState(null), {
        query: T,
        results: M,
        setQuery: P
    } = j(n), [S, I] = r.useState({}), _ = r.useMemo(() => Object.keys(S).length, [S]), q = _ + w >= f.iW, N = r.useMemo(() => M.filter(e => {
        let t = (0, p.Eu)(e.id, e.type);
        return !C.includes(t)
    }), [C, M]), V = r.useCallback((e, t) => {
        I(n => {
            let i = (0, p.Eu)(e, t),
                r = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), i.forEach(function(t) {
                            var i;
                            i = n[t], t in e ? Object.defineProperty(e, t, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = i
                        })
                    }
                    return e
                }({}, n);
            return i in n ? delete r[i] : q || (r[i] = {
                id: e,
                permission: !0,
                type: t
            }), r
        })
    }, [q, I]), W = r.useCallback(() => {
        t(S, []), m()
    }, [t, m, S]);
    r.useEffect(() => () => clearTimeout(x), [x]);
    let D = r.useCallback(e => {
            P(e), l && A(t => (clearTimeout(t), 0 === e.length) ? null : setTimeout(() => {
                d.A.requestMembers(n, e, 200, !1)
            }, 500))
        }, [n, l, P, A]),
        G = r.useCallback(e => {
            let t = N[e.rowIndex],
                n = (0, p.Eu)(t.id, t.type),
                r = n in S,
                l = q && !r;
            return (0, i.jsx)("div", {
                className: y.A,
                children: (0, i.jsx)(u.Kj, {
                    type: u.Xo.INVERTED,
                    disabled: l,
                    value: r,
                    onChange: () => V(t.id, t.type),
                    children: (0, i.jsx)(g.A, {
                        guild: O,
                        id: t.id,
                        type: t.type,
                        isLocked: !1
                    })
                })
            }, n)
        }, [N, O, q, V, S]);
    return r.useEffect(() => {
        d.A.requestMembers(n, void 0, 200, !1)
    }, [n]), (0, i.jsx)(a.Modal, {
        "aria-label": h.intl.string(h.t["N+InBa"]),
        transitionState: E,
        title: k,
        subtitle: q ? h.intl.string(h.t["XTwtW/"]) : void 0,
        onClose: m,
        input: (0, i.jsx)(c.IWV, {
            query: T,
            placeholder: v,
            "aria-label": v,
            onChange: D,
            onClear: () => P("")
        }),
        actions: [{
            text: h.intl.string(h.t["ETE/oC"]),
            onClick: m,
            variant: "secondary"
        }, {
            text: h.intl.string(h.t.OYkgVk),
            onClick: W,
            variant: "primary",
            disabled: 0 === _
        }],
        listProps: {
            renderRow: G,
            sections: [N.length],
            rowHeight: 36,
            sectionHeight: 36
        }
    })
}