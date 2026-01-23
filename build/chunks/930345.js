/** Chunk was on 94194 **/
/** chunk id: 930345, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => j
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(91871),
    i = n.n(a),
    s = n(158954),
    o = n(417597),
    c = n(397927),
    u = n(374084),
    d = n(696451),
    g = n(71393),
    m = n(287809),
    p = n(569944),
    x = n(721228),
    b = n(985018),
    h = n(43079);

function f(e) {
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

function v(e, t) {
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

function j(e) {
    var t;
    let {
        transitionState: n,
        onClose: a,
        guildId: j,
        welcomeMessage: y,
        onSave: O
    } = e, [k, C] = l.useState(f({}, y)), I = (0, o.bG)([g.A], () => g.A.getGuild(j)), _ = l.useCallback(e => {
        let t = {};
        return Promise.resolve(d.Ay.getMembers(j).filter(n => {
            var r;
            let l = m.default.getUser(n.userId);
            if (null != l && (t[n.userId] = l), null == I || null == l || !(0, p.c)(I, l)) return !1;
            let a = "".concat(null != (r = n.nick) ? r : "", " ").concat(null == l ? void 0 : l.username);
            return i()(e.toLowerCase(), a.toLowerCase())
        }).map(e => {
            var n, l, a;
            return {
                id: e.userId,
                value: e.userId,
                label: null != (n = null != (l = e.nick) ? l : null == (a = t[e.userId]) ? void 0 : a.username) ? n : "",
                leading: null != t[e.userId] ? (0, r.jsx)(c.JsQ, {
                    size: c._3J.SIZE_20,
                    src: t[e.userId].getAvatarURL(j, 20),
                    "aria-hidden": !0
                }) : void 0
            }
        }))
    }, [j, I]), P = l.useCallback(e => {
        C(t => v(f({}, t), {
            authorIds: null != e ? [e] : []
        }))
    }, [C]), w = l.useCallback(e => {
        C(t => v(f({}, t), {
            message: null != e ? e : ""
        }))
    }, [C]), S = l.useCallback(() => {
        O(k), a()
    }, [a, O, k]), L = l.useCallback(() => {
        O(null), a()
    }, [O, a]), H = null != (t = k.authorIds[0]) ? t : "", E = function(e) {
        if (null == e.message || 0 === e.message.length) return null;
        if (null == e.authorIds || 0 === e.authorIds.length)
            if (e.message.length < u.Fi) return b.intl.formatToPlainString(b.t.Lj831L, {
                minLength: u.Fi
            });
            else return b.intl.string(b.t["4m7gtn"]);
        return e.message.length < u.Fi ? b.intl.formatToPlainString(b.t.TJGHXt, {
            minLength: u.Fi
        }) : null
    }(k), T = l.useMemo(() => [{
        text: b.intl.string(b.t["ETE/oC"]),
        onClick: a,
        variant: "secondary"
    }, {
        text: b.intl.string(b.t["R3BPH+"]),
        onClick: S,
        variant: "primary",
        disabled: 0 === k.message.length || null != E
    }], [E, S, a, k.message.length]);
    return (0, r.jsxs)(s.Modal, {
        title: b.intl.string(b.t.UnLrit),
        transitionState: n,
        onClose: a,
        actions: T,
        actionBarInput: (0, r.jsx)(c.QWc, {
            text: b.intl.string(b.t.N86XcP),
            onClick: L,
            variant: "critical"
        }),
        children: [(0, r.jsxs)("div", {
            className: h.eH,
            children: [(0, r.jsxs)(c.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [b.intl.string(b.t.zNQfQy), (0, r.jsx)(x.A, {})]
            }), (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: b.intl.string(b.t.mQHK2S)
            }), (0, r.jsx)(c.ZiE, {
                selectionMode: "single",
                value: null != H ? H : void 0,
                options: _,
                onSelectionChange: P
            })]
        }), (0, r.jsx)("div", {
            className: h.me
        }), (0, r.jsxs)("div", {
            className: h.eH,
            children: [(0, r.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: b.intl.string(b.t.SHQcv7)
            }), (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: b.intl.format(b.t["6biC4R"], {})
            }), (0, r.jsx)(c.fs1, {
                placeholder: b.intl.string(b.t["kX/Sbx"]),
                value: k.message,
                onChange: w,
                maxLength: u.dl
            }), null != E ? (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-feedback-critical",
                children: E
            }) : null]
        })]
    })
}