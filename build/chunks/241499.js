/** chunk id: 241499 params = (module,exports,require) **/
l.d(t, {
    _: () => T
});
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(296489),
    o = l.n(s),
    u = l(131346),
    c = l(522437),
    d = l(311907),
    x = l(397927),
    p = l(355622),
    g = l(408018),
    _ = l(133343),
    h = l(734057),
    f = l(808728),
    C = l(557420),
    m = l(596484),
    b = l(260197),
    v = l(652215),
    k = l(985018),
    j = l(545205);
let y = "RULE";

function I(e) {
    let {
        rule: t,
        rulesChannel: l,
        index: a,
        onChange: s,
        onKeyDown: o,
        onClear: d,
        onRuleReorder: h,
        isDropHovered: f,
        focused: C,
        onFocus: m,
        previewEnabled: v,
        isDragEnabled: I,
        disabled: T
    } = e, E = i.useRef(null), R = i.useRef(null), [{
        textValue: N,
        richValue: A
    }, D] = i.useState((0, g.ur)(t.value)), [, S, w] = (0, u.i)({
        type: y,
        item: {
            rule: t,
            index: a
        },
        end: (e, t) => {
            null == e || t.didDrop() || h(e.rule, null, !0)
        }
    }), [, B] = (0, c.H)({
        accept: y,
        hover: (e, t) => {
            let {
                index: l
            } = e, n = E.current?.getBoundingClientRect(), i = t.getClientOffset();
            if (null == n || null == i) return;
            let r = (n.bottom - n.top) / 2,
                s = i.y - n.top;
            l < a && s < r || l > a && s > r || h(e.rule, a, !1)
        },
        drop: e => {
            h(e.rule, a, !0)
        }
    });
    if (i.useLayoutEffect(() => (S(R), w(B(E)), () => {
            S(null), B(null)
        }), [S, B, w]), i.useEffect(() => {
            "" !== t.value && "" === N && D((0, g.ur)(t.value))
        }, [t.value, N]), null == l) return null;
    let L = "" !== t.value ? t.value : t.id;
    return (0, n.jsx)("div", {
        ref: E,
        className: r()(j.XQ, {
            [j.cB]: f
        }),
        "data-dnd-name": L,
        children: (0, n.jsxs)("div", {
            className: j.I6,
            children: [(0, n.jsx)(x.DUT, {
                onMouseDown: () => m(a),
                children: (0, n.jsx)(_.Ay, {
                    innerClassName: j.oQ,
                    type: p.oU.RULES_INPUT,
                    textValue: N,
                    richValue: A,
                    channel: l,
                    placeholder: k.intl.string(k.t.BRkD41),
                    focused: C,
                    onChange: (e, l, n) => {
                        let i = T ? t.value : l;
                        i.length > b.pc && (i = i.slice(0, b.pc)), l !== i && (l = i, n = (0, g.x7)(i)), s(l), D({
                            textValue: l,
                            richValue: n
                        })
                    },
                    onKeyDown: o,
                    canMentionChannels: v,
                    canMentionRoles: v,
                    maxCharacterCount: b.pc,
                    onSubmit: () => Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    })
                })
            }), (0, n.jsx)("div", {
                className: j.mt,
                children: (0, n.jsx)(x.K0, {
                    size: "sm",
                    variant: "icon-only",
                    icon: x.aXh,
                    "aria-label": k.intl.string(k.t.VkKicb),
                    onClick: d
                })
            }), (0, n.jsx)("div", {
                ref: R,
                className: j.cK,
                "data-dnd-name": L,
                children: I && (0, n.jsx)(x.WP0, {
                    size: "xs",
                    color: "currentColor",
                    className: j.co
                })
            })]
        })
    })
}

function T(e) {
    let {
        rules: t,
        setRules: l,
        guild: a,
        disabled: r
    } = e, s = a.rulesChannelId, u = a.features.has(v.GuildFeatures.PREVIEW_ENABLED), c = (0, d.bG)([h.A], () => null != s ? h.A.getChannel(s) : null), p = (0, d.bG)([f.Ay], () => f.Ay.getDefaultChannel(a.id)), [g, _] = i.useState(null), [y, T] = i.useState(null), E = i.useCallback(e => {
        if (!r && t.length !== b.yN)
            if (null != e && "" === t[t.length - 1].value) {
                let n = [...t];
                n[t.length - 1] = {
                    ...n[t.length - 1],
                    value: e
                }, l(n), T(n.length - 1)
            } else l([...t, {
                id: o()(),
                value: e ?? ""
            }]), T(t.length)
    }, [r, t, l]), R = i.useCallback(() => {
        r || E(void 0)
    }, [E, r]), N = i.useCallback((e, n) => {
        if (r) return;
        let i = [...t];
        i[n] = {
            ...i[n],
            value: e
        }, l(i)
    }, [r, t, l]), A = i.useCallback((e, n, i) => {
        if (r || null == t) return;
        let a = t.indexOf(e);
        if (null != n && n !== a) {
            let i = [...t];
            i.splice(a, 1), i.splice(n, 0, e), l(i)
        }
        i ? null !== g && _(null) : n !== g && _(n)
    }, [r, g, t, l]), D = t.length === b.yN, S = i.useMemo(() => {
        let e = D ? k.intl.formatToPlainString(k.t.tU718E, {
            number: b.yN
        }) : void 0;
        return [{
            text: k.intl.string(k.t.DXq2od),
            onClick: () => E(k.intl.string(k.t.XudkSq)),
            disabled: D || r,
            tooltipText: e
        }, {
            text: k.intl.string(k.t.nSqTjM),
            onClick: () => E(k.intl.string(k.t.np91jA)),
            disabled: D || r,
            tooltipText: e
        }, {
            text: k.intl.string(k.t.AtRxsO),
            onClick: () => E(k.intl.string(k.t.PNIDDJ)),
            disabled: D || r,
            tooltipText: e
        }, {
            text: k.intl.string(k.t["0K5NJt"]),
            onClick: () => E(k.intl.string(k.t.HolIDy)),
            disabled: D || r,
            tooltipText: e
        }]
    }, [E, r, D]);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
            className: j.$W,
            children: t.map((e, i) => (0, n.jsx)(I, {
                rulesChannel: c ?? p,
                rule: e,
                index: i,
                onChange: e => N(e, i),
                onClear: () => (e => {
                    if (r) return;
                    let n = [...t.slice(0, e), ...t.slice(e + 1)];
                    l(0 === n.length ? [{
                        id: o()(),
                        value: ""
                    }] : n)
                })(i),
                onRuleReorder: A,
                isDropHovered: i === g,
                focused: i === y,
                onFocus: T,
                previewEnabled: u ?? !0,
                isDragEnabled: !r && t.length > 1,
                disabled: r
            }, e.id))
        }), !D && (0, n.jsx)(C.d, {
            text: k.intl.string(k.t.Cq5JuR),
            onClick: R,
            disabled: r
        }), (0, n.jsx)(x.Heading, {
            variant: "text-xs/bold",
            color: "text-muted",
            className: j.V7,
            children: k.intl.string(k.t.XHWj8W)
        }), (0, n.jsx)(m.z, {
            pills: S,
            pillClassName: j.Io
        })]
    })
}