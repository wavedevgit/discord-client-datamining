/** Chunk was on 5606 **/
/** chunk id: 958831, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(97260),
    c = n(337692),
    d = n(235986),
    u = n(586068),
    p = n(734057),
    _ = n(808728),
    m = n(71393),
    g = n(967198),
    f = n(926140),
    b = n(985018),
    h = n(777563);

function A(e) {
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

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function x() {}
let O = [f.rD.VOICE_CHANNEL];

function C(e) {
    e.setOptions({
        voiceChannelGuildFilter: null
    }), e.setLimit(1 / 0)
}

function y() {
    return (0, r.jsx)("div", {
        className: h.i1,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: h.GN,
            children: b.intl.string(b.t.zHjCd1)
        })
    })
}

function j(e) {
    var t, n;
    let {
        keybind: l
    } = e, s = i.useRef(l);
    i.useEffect(() => {
        s.current = l
    });
    let [c, u] = i.useState(null != (t = null == (n = l.params) ? void 0 : n.channelId) ? t : void 0), p = i.useCallback(() => {
        (0, a.mMO)(async () => e => (0, r.jsx)(T, E(A({}, e), {
            onSelect: e => {
                u(e), o.A.setKeybind(E(A({}, s.current), {
                    params: {
                        channelId: e
                    }
                }))
            }
        })))
    }, []);
    return (0, r.jsx)("div", {
        className: h.a8,
        children: (0, r.jsx)(a.D0$, {
            label: b.intl.string(b.t.q4JpM8),
            children: (0, r.jsxs)(d.A, {
                align: d.A.Align.STRETCH,
                children: [(0, r.jsx)("div", {
                    className: h.$X,
                    children: (0, r.jsx)(v, {
                        channelId: c
                    })
                }), (0, r.jsx)(d.A.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, r.jsx)(a.Button, {
                        variant: "primary",
                        text: b.intl.string(b.t.Dm8O4e),
                        onClick: p
                    })
                })]
            })
        })
    })
}

function T(e) {
    let t, n, {
            transitionState: o,
            onClose: d,
            onSelect: A
        } = e,
        E = i.useId(),
        x = i.useRef(null),
        {
            query: j,
            updateQuery: T,
            queryResults: v
        } = (0, c.A)({
            visible: !0,
            autocompleterResultTypes: O,
            autocompleterBeforeCreateSearchContext: C
        }),
        S = (t = "" !== j, n = (0, s.yK)([_.Ay, p.A, g.A], () => {
            let e = g.A.getGuildId();
            if (t || null == e) return [];
            let n = [];
            for (let t of _.Ay.getVocalChannelIds(e)) {
                let e = p.A.getChannel(t);
                null != e && n.push(e)
            }
            return n
        }, [t]), t ? null : n),
        {
            focusedIndex: I,
            setFocusedIndex: N
        } = function(e) {
            let [t, n] = i.useState(0), r = i.useRef(e);
            return e !== r.current && 0 !== t && n(0), i.useEffect(() => {
                r.current = e
            }), {
                focusedIndex: t,
                setFocusedIndex: n
            }
        }(j);
    i.useEffect(() => {
        let {
            current: e
        } = x;
        null == e || e.isItemVisible(0, I, !0) || e.scrollToIndex({
            section: 0,
            row: I
        })
    }, [I]);
    let P = null != S ? S.length : v.length,
        R = (() => {
            if (null != S) {
                var e;
                return null == (e = S[I]) ? void 0 : e.id
            }
            let t = v[I];
            if ((null == t ? void 0 : t.type) === f.rD.VOICE_CHANNEL) return t.record.id
        })(),
        D = P > 0 || "" === j ? {
            innerId: E,
            innerRole: "listbox",
            innerAriaLabel: b.intl.string(b.t["+N3fW7"]),
            ref: x,
            sections: [P],
            renderRow: function(e) {
                let {
                    row: t
                } = e, n = (() => {
                    if (null != S) return S[t];
                    let e = v[t];
                    if ((null == e ? void 0 : e.type) === f.rD.VOICE_CHANNEL) return e.record
                })();
                if (null == n) return null;
                let i = null != n.parent_id ? p.A.getChannel(n.parent_id) : void 0,
                    l = m.A.getGuild(n.guild_id);
                return (0, r.jsx)(u.c3, {
                    id: n.id,
                    channel: n,
                    category: i,
                    focused: I === t,
                    onMouseEnter: () => N(t),
                    onClick: () => {
                        A(n.id), d()
                    },
                    onFocus: () => N(t),
                    children: null != l ? (0, r.jsx)("div", {
                        className: h.J5,
                        children: l.name
                    }) : null
                }, n.id)
            },
            sectionHeight: 0,
            rowHeight: 34
        } : {
            sections: [1],
            renderRow: () => (0, r.jsx)(y, {}),
            sectionHeight: 0,
            rowHeight: 52
        };
    return (0, r.jsx)(l.Modal, {
        transitionState: o,
        onClose: d,
        title: b.intl.string(b.t.Dm8O4e),
        subtitle: b.intl.string(b.t.q4JpM8),
        actions: void 0,
        input: (0, r.jsx)(a.ksK, {
            value: j,
            onChange: T,
            onKeyDown: function(e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
                    case "escape":
                        d();
                        break;
                    case "enter": {
                        let e = (() => {
                            if (null != S) return S[I];
                            let e = v[I];
                            if ((null == e ? void 0 : e.type) === f.rD.VOICE_CHANNEL) return e.record
                        })();
                        null == e ? A(void 0) : A(e.id), d();
                        break
                    }
                    case "arrowup":
                        0 === I ? N(P - 1) : N(I - 1);
                        break;
                    case "arrowdown":
                        I >= P - 1 ? N(0) : N(I + 1)
                }
            },
            placeholder: b.intl.string(b.t.tG0r7g),
            role: "combobox",
            "aria-controls": E,
            "aria-expanded": P > 0,
            "aria-activedescendant": P > 0 && null != R ? R : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0
        }),
        listProps: D
    })
}

function v(e) {
    let {
        channelId: t
    } = e, {
        channel: n,
        category: i,
        guild: l
    } = (0, s.cf)([p.A, m.A], () => {
        let e = null != t ? p.A.getChannel(t) : void 0;
        return null != e ? {
            channel: e,
            category: null != e.parent_id ? p.A.getChannel(e.parent_id) : void 0,
            guild: null != e.guild_id ? m.A.getGuild(e.guild_id) : void 0
        } : {
            channel: void 0,
            category: void 0,
            guild: void 0
        }
    });
    return null == n ? (0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        className: h.GN,
        children: b.intl.string(b.t["/fYIK7"])
    }) : (0, r.jsx)(u.c3, {
        channel: n,
        id: n.id,
        category: i,
        onClick: x,
        onFocus: x,
        onMouseEnter: x,
        focused: !1,
        children: null != l ? (0, r.jsx)("div", {
            className: h.J5,
            children: l.name
        }) : null
    })
}