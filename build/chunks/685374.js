/** Chunk was on 1113 **/
/** chunk id: 685374, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => j
}), n(896048), n(228524), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(702805),
    c = n(198982),
    u = n(95701),
    d = n(734057),
    h = n(71393),
    p = n(954571),
    g = n(147036),
    f = n(845202),
    m = n(86944),
    b = n(737045),
    A = n(652215),
    y = n(985018),
    O = n(695244);

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function x(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }
    if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
}

function j(e) {
    let {
        channelId: t
    } = e, n = x(e, ["channelId"]), i = (0, s.bG)([d.A], () => d.A.getChannel(t), [t]), a = (0, s.bG)([h.A], () => h.A.getGuild(null == i ? void 0 : i.getGuildId()));
    return (l.useEffect(() => {
        p.default.track(A.HAw.OPEN_MODAL, {
            type: "Grant Channel Access"
        })
    }, []), null == i || null == a) ? null : (0, r.jsx)(v, _({
        guild: a,
        channel: i
    }, n))
}

function v(e) {
    var t, n;
    let {
        guild: s,
        channel: d,
        onClose: h,
        newChannel: p,
        inSettings: A
    } = e, j = x(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]), [v, E] = l.useState(""), [C, S] = l.useState({}), [I, N] = l.useState(!1), [T, P] = l.useState(null), w = l.useRef(null), {
        roles: R,
        members: D,
        getRichTag: L
    } = (0, m.K)(s, d, d.accessPermissions, v), M = f.A.useSections({
        roles: R,
        members: D
    }), k = p && 0 === Object.keys(C).length;
    async function G() {
        if (null == d || 0 === Object.keys(C).length) return void h();
        N(!0);
        try {
            var e, t, n;
            let r;
            await (e = d, t = C, n = A, r = [], Object.values(t).forEach(t => {
                let {
                    row: n
                } = t;
                null != n.id && "" !== n.id && (n.rowType === b.T6.ROLE ? r.push((0, g.we)(n.id, e.type)) : n.rowType === b.T6.MEMBER && r.push((0, g.n3)(n.id, e.type)))
            }), (0, o.R$)(e.id, r, n)), h(), N(!1)
        } catch (t) {
            let e = new c.LG(t);
            N(!1), P(e)
        }
    }
    let U = (0, u.ke)(d.type) ? a.I$d : a.trU;
    return (0, r.jsx)(f.A.Provider, {
        listRef: w,
        query: v,
        setQuery: E,
        pendingAdditions: C,
        setPendingAdditions: S,
        roles: R,
        members: D,
        getRichTag: L,
        children: (0, r.jsx)(i.Modal, (t = _({}, j), n = n = {
            title: y.intl.string(y.t.dMJ3Y6),
            onClose: h,
            input: (0, r.jsxs)("div", {
                children: [(0, r.jsxs)(a.Text, {
                    className: O.HA,
                    variant: "text-lg/normal",
                    color: "text-default",
                    children: [(0, r.jsx)(U, {
                        className: O.p,
                        size: "sm",
                        color: "currentColor"
                    }), d.name]
                }), d.isGuildStageVoice() && (0, r.jsx)(a.Text, {
                    color: "text-default",
                    className: O.h_,
                    variant: "text-sm/normal",
                    children: y.intl.string(y.t.f7VbhF)
                }), (0, r.jsx)(f.A.SearchBox, {
                    placeholderText: y.intl.string(y.t.iezLLn)
                }), (0, r.jsx)(a.Text, {
                    className: O.W$,
                    variant: "text-xs/normal",
                    children: y.intl.string(y.t.rwFx85)
                }), null != T ? (0, r.jsx)(a.Text, {
                    className: O.W$,
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: T.getAnyErrorMessage()
                }) : null]
            }),
            listProps: {
                ref: w,
                sectionHeight: f.A.SECTION_HEIGHT,
                renderSection: f.A.renderSection,
                rowHeight: f.A.ROW_HEIGHT,
                renderRow: f.A.renderRow,
                sections: M
            },
            actions: k ? [{
                variant: "secondary",
                text: y.intl.string(y.t.u46sxe),
                onClick: h
            }] : [{
                variant: "secondary",
                text: y.intl.string(y.t["ETE/oC"]),
                onClick: h
            }, {
                variant: "primary",
                text: y.intl.string(y.t.i4jeWR),
                onClick: G,
                loading: I
            }]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    })
}