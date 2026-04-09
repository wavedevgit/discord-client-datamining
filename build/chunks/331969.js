/** chunk id: 331969 params = (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(97260),
    d = n(337692),
    c = n(235986),
    u = n(586068),
    m = n(734057),
    g = n(808728),
    _ = n(71393),
    x = n(967198),
    A = n(926140),
    h = n(985018),
    p = n(730040);

function T() {}
let f = [A.rD.VOICE_CHANNEL];

function S(e) {
    e.setOptions({
        voiceChannelGuildFilter: null
    }), e.setLimit(1 / 0)
}

function b() {
    return (0, i.jsx)("div", {
        className: p.i1,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: p.GN,
            children: h.intl.string(h.t.zHjCd1)
        })
    })
}

function E(e) {
    let {
        keybind: t
    } = e, n = s.useRef(t);
    s.useEffect(() => {
        n.current = t
    });
    let [l, a] = s.useState(t.params?.channelId ?? void 0), d = s.useCallback(() => {
        (0, r.mMO)(async () => e => (0, i.jsx)(C, {
            ...e,
            onSelect: e => {
                a(e), o.A.setKeybind({
                    ...n.current,
                    params: {
                        channelId: e
                    }
                })
            }
        }))
    }, []);
    return (0, i.jsx)("div", {
        className: p.a8,
        children: (0, i.jsx)(r.D0$, {
            label: h.intl.string(h.t.q4JpM8),
            children: (0, i.jsxs)(c.A, {
                align: c.A.Align.STRETCH,
                children: [(0, i.jsx)("div", {
                    className: p.$X,
                    children: (0, i.jsx)(N, {
                        channelId: l
                    })
                }), (0, i.jsx)(c.A.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(r.Button, {
                        variant: "primary",
                        text: h.intl.string(h.t.Dm8O4e),
                        onClick: d
                    })
                })]
            })
        })
    })
}

function C(e) {
    let t, n, {
            transitionState: o,
            onClose: c,
            onSelect: T
        } = e,
        E = s.useId(),
        C = s.useRef(null),
        {
            query: N,
            updateQuery: v,
            queryResults: I
        } = (0, d.A)({
            visible: !0,
            autocompleterResultTypes: f,
            autocompleterBeforeCreateSearchContext: S
        }),
        j = (t = "" !== N, n = (0, a.yK)([g.Ay, m.A, x.A], () => {
            let e = x.A.getGuildId();
            if (t || null == e) return [];
            let n = [];
            for (let t of g.Ay.getVocalChannelIds(e)) {
                let e = m.A.getChannel(t);
                null != e && n.push(e)
            }
            return n
        }, [t]), t ? null : n),
        {
            focusedIndex: y,
            setFocusedIndex: O
        } = function(e) {
            let [t, n] = s.useState(0), i = s.useRef(e);
            return e !== i.current && 0 !== t && n(0), s.useEffect(() => {
                i.current = e
            }), {
                focusedIndex: t,
                setFocusedIndex: n
            }
        }(N);
    s.useEffect(() => {
        let {
            current: e
        } = C;
        null == e || e.isItemVisible(0, y, !0) || e.scrollToIndex({
            section: 0,
            row: y
        })
    }, [y]);
    let R = null != j ? j.length : I.length,
        L = (() => {
            if (null != j) return j[y]?.id;
            let e = I[y];
            if (e?.type === A.rD.VOICE_CHANNEL) return e.record.id
        })(),
        P = R > 0 || "" === N ? {
            innerId: E,
            innerRole: "listbox",
            innerAriaLabel: h.intl.string(h.t["+N3fW7"]),
            ref: C,
            sections: [R],
            renderRow: function(e) {
                let {
                    row: t
                } = e, n = (() => {
                    if (null != j) return j[t];
                    let e = I[t];
                    if (e?.type === A.rD.VOICE_CHANNEL) return e.record
                })();
                if (null == n) return null;
                let s = null != n.parent_id ? m.A.getChannel(n.parent_id) : void 0,
                    l = _.A.getGuild(n.guild_id);
                return (0, i.jsx)(u.c3, {
                    id: n.id,
                    channel: n,
                    category: s,
                    focused: y === t,
                    onMouseEnter: () => O(t),
                    onClick: () => {
                        T(n.id), c()
                    },
                    onFocus: () => O(t),
                    children: null != l ? (0, i.jsx)("div", {
                        className: p.J5,
                        children: l.name
                    }) : null
                }, n.id)
            },
            sectionHeight: 0,
            rowHeight: 34
        } : {
            sections: [1],
            renderRow: () => (0, i.jsx)(b, {}),
            sectionHeight: 0,
            rowHeight: 52
        };
    return (0, i.jsx)(l.Modal, {
        transitionState: o,
        onClose: c,
        title: h.intl.string(h.t.Dm8O4e),
        subtitle: h.intl.string(h.t.q4JpM8),
        actions: void 0,
        input: (0, i.jsx)(r.ksK, {
            value: N,
            onChange: v,
            onKeyDown: function(e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
                    case "escape":
                        c();
                        break;
                    case "enter": {
                        let e = (() => {
                            if (null != j) return j[y];
                            let e = I[y];
                            if (e?.type === A.rD.VOICE_CHANNEL) return e.record
                        })();
                        null == e ? T(void 0) : T(e.id), c();
                        break
                    }
                    case "arrowup":
                        0 === y ? O(R - 1) : O(y - 1);
                        break;
                    case "arrowdown":
                        y >= R - 1 ? O(0) : O(y + 1)
                }
            },
            placeholder: h.intl.string(h.t.tG0r7g),
            role: "combobox",
            "aria-controls": E,
            "aria-expanded": R > 0,
            "aria-activedescendant": R > 0 && null != L ? L : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0
        }),
        listProps: P
    })
}

function N(e) {
    let {
        channelId: t
    } = e, {
        channel: n,
        category: s,
        guild: l
    } = (0, a.cf)([m.A, _.A], () => {
        let e = null != t ? m.A.getChannel(t) : void 0;
        return null != e ? {
            channel: e,
            category: null != e.parent_id ? m.A.getChannel(e.parent_id) : void 0,
            guild: null != e.guild_id ? _.A.getGuild(e.guild_id) : void 0
        } : {
            channel: void 0,
            category: void 0,
            guild: void 0
        }
    });
    return null == n ? (0, i.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        className: p.GN,
        children: h.intl.string(h.t["/fYIK7"])
    }) : (0, i.jsx)(u.c3, {
        channel: n,
        id: n.id,
        category: s,
        onClick: T,
        onFocus: T,
        onMouseEnter: T,
        focused: !1,
        children: null != l ? (0, i.jsx)("div", {
            className: p.J5,
            children: l.name
        }) : null
    })
}