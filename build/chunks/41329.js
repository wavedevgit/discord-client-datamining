/** Chunk was on web.js **/
/** chunk id: 41329, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(557158),
    d = n(696451),
    f = n(963146),
    p = n(664929);
n(827669);
var _ = n(985018),
    h = n(27101);
let m = 200;

function g(e, t, n) {
    return (0, r.jsx)(f.A, {
        className: h.uK,
        name: e.displayName,
        state: t,
        onClick: n
    }, e.name)
}

function E(e) {
    let {
        command: t,
        optionStates: n,
        onOptionClick: a
    } = e, {
        requiredOptions: o,
        setOptionalOptions: s,
        unsetOptionalOptions: u
    } = i.useMemo(() => {
        var e, r, i, a;
        let o = null != (e = null == (i = t.options) ? void 0 : i.filter(e => e.required)) ? e : [],
            s = null != (r = null == (a = t.options) ? void 0 : a.filter(e => !e.required)) ? r : [];
        return {
            requiredOptions: o,
            setOptionalOptions: s.filter(e => {
                var t;
                return null == n || null == (t = n[e.name]) ? void 0 : t.hasValue
            }),
            unsetOptionalOptions: s.filter(e => {
                var t;
                return !(null == n || null == (t = n[e.name]) ? void 0 : t.hasValue)
            })
        }
    }, [t.options, n]), d = (0, r.jsx)("div", {
        className: h.$2,
        children: u.map(e => (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: e.displayName
        }, e.name))
    }), f = o.map(e => g(e, null == n ? void 0 : n[e.name], a)), p = s.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Heading, {
            className: h.Ki,
            variant: "heading-deprecated-12/semibold",
            children: _.intl.string(_.t["5C107K"])
        }), s.map(e => g(e, null == n ? void 0 : n[e.name], a))]
    }) : null, E = u.length > 0 ? (0, r.jsx)(l.m, {
        __unsupportedReactNodeAsText: d,
        "aria-label": !1,
        delay: m,
        children: (0, r.jsx)(c.Text, {
            className: h.kP,
            color: "text-muted",
            variant: "text-sm/normal",
            children: 0 === s.length ? _.intl.formatToPlainString(_.t["0mI72g"], {
                count: u.length
            }) : _.intl.formatToPlainString(_.t.BP8N0K, {
                count: u.length
            })
        })
    }) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [f, null != p || null != E ? (0, r.jsxs)("div", {
            className: h.gM,
            children: [p, E]
        }) : null]
    })
}

function y(e) {
    var t, n, a;
    let l, {
            command: c,
            activeOptionName: f,
            channel: _,
            showOptions: m,
            showImage: g,
            optionStates: y,
            onOptionClick: b,
            section: O,
            isSelectable: v = !0
        } = e,
        A = i.useMemo(() => {
            var e;
            return null == c || null == (e = c.options) ? void 0 : e.find(e => e.name === f)
        }, [f, c]),
        I = null != f ? null == y ? void 0 : y[f] : null;
    l = null != I && (null == (n = I.lastValidationResult) ? void 0 : n.success) === !1 ? null != (a = I.lastValidationResult.error) ? a : "" : null;
    let S = g && null != O ? (0, p.Rg)(O) : null,
        T = (0, s.bG)([d.Ay], () => {
            if (null != _.guild_id && (null == O ? void 0 : O.botId) != null) {
                var e;
                return null == (e = d.Ay.getMember(_.guild_id, O.botId)) ? void 0 : e.nick
            }
        });
    return (0, r.jsxs)("div", {
        className: o()(h.iE, v ? null : h.r9),
        children: [null != S ? (0, r.jsx)(S, {
            className: h.Sl,
            channel: _,
            section: O,
            width: 32,
            height: 32
        }) : null, (0, r.jsxs)("div", {
            className: h.QR,
            children: [(0, r.jsxs)("div", {
                className: h.nY,
                children: [(0, r.jsx)(u.dB, {
                    className: h.DD,
                    children: "/" + c.displayName
                }), m ? (0, r.jsx)(E, {
                    command: c,
                    optionStates: y,
                    onOptionClick: b
                }) : null]
            }), (0, r.jsx)(u.Nd, {
                className: o()(h.h_, null != l ? h.z3 : null),
                children: null != (t = null != l ? l : null == A ? void 0 : A.displayDescription) ? t : c.displayDescription
            })]
        }), (0, r.jsx)(u.Aq, {
            className: h.sP,
            children: null != T ? T : null == O ? void 0 : O.name
        })]
    })
}