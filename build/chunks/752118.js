/** Chunk was on 48635 **/
/** chunk id: 752118, original params: l,t,e (module,exports,require) **/
e.d(t, {
    default: () => E
}), e(896048);
var n = e(627968),
    r = e(64700),
    i = e(311907),
    a = e(562465),
    s = e(732955),
    u = e(397927),
    c = e(964486),
    d = e(504049),
    o = e(961350),
    x = e(696451),
    A = e(71393),
    N = e(576705),
    v = e(287809),
    g = e(954571),
    k = e(427262),
    m = e(652215),
    h = e(985018),
    p = e(940892);

function C(l) {
    let {
        disabled: t = !1,
        user: e,
        setNickname: i,
        nickname: a,
        error: s,
        hasNick: c
    } = l, d = r.useRef(null), x = r.useCallback(() => {
        var l;
        i(""), null == (l = d.current) || l.focus()
    }, [i]);
    return (0, n.jsxs)(n.Fragment, {
        children: [t || null == e || e.id === o.default.getId() ? null : (0, n.jsx)(u.ZpM, {
            type: u.ZpM.Types.WARNING,
            className: p.Nr,
            children: (0, n.jsx)(u.Text, {
                variant: "text-md/normal",
                children: h.intl.string(h.t.dq3At2)
            })
        }), (0, n.jsx)(u.ksK, {
            label: t ? h.intl.string(h.t.EyA4q5) : h.intl.string(h.t["621LJD"]),
            disabled: t,
            inputRef: d,
            maxLength: m.d0r,
            value: a,
            placeholder: k.Ay.getName(e),
            onChange: i,
            autoFocus: !0
        }), null != s ? (0, n.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: p.wt,
            children: s
        }) : null, c && !t ? (0, n.jsx)("div", {
            className: p.cL,
            children: (0, n.jsx)(u.QWc, {
                text: h.intl.string(h.t.aE02Rz),
                onClick: x,
                textVariant: "text-sm/normal"
            })
        }) : null]
    })
}
let E = function(l) {
    var t;
    let {
        transitionState: e,
        user: u,
        guildId: o,
        onClose: k,
        analyticsSource: p,
        analyticsLocations: E
    } = l, y = (0, i.bG)([x.Ay], () => null != o ? x.Ay.getMember(o, u.id) : null), b = (0, i.bG)([N.A, v.default, A.A], () => {
        var l;
        let t = A.A.getGuild(o);
        return null != t && ((null == (l = v.default.getCurrentUser()) ? void 0 : l.id) === u.id ? N.A.can(m.xBc.CHANGE_NICKNAME, t) || N.A.can(m.xBc.MANAGE_NICKNAMES, t) : N.A.canManageUser(m.xBc.MANAGE_NICKNAMES, u.id, t))
    }), [f, _] = r.useState(!1), [M, j] = r.useState(null != (t = null == y ? void 0 : y.nick) ? t : ""), [G, I] = r.useState({});
    (0, c.Ay)(() => {
        g.default.track(m.HAw.OPEN_MODAL, {
            type: "Change Server Identity",
            location: m.liQ.GUILD_CHANNEL,
            source: p
        })
    });
    let S = (0, d.$9)(o, {
            location: null == E ? void 0 : E[0],
            targetUserId: u.id
        }),
        L = r.useCallback(async l => {
            var t, e, n, r, i, s, c, x, A;
            l.preventDefault();
            let N = null;
            if (M !== (null != (t = null == y ? void 0 : y.nick) ? t : "") && ((N = null != N ? N : {}).nick = M), null == N) return void k();
            try {
                _(!0), await a.Bo.patch({
                    url: m.Rsh.GUILD_MEMBER(o, u.id),
                    body: N,
                    rejectWithError: !1
                }), S(d.Nj.CHANGE_NICKNAME), k()
            } catch (a) {
                let l;
                _(!1);
                let t = null != (e = null == (n = a.body) ? void 0 : n.errors) ? e : null;
                (null == t ? void 0 : t.nick) != null ? l = (null == (s = t.nick) || null == (i = s._errors) || null == (r = i[0]) ? void 0 : r.message) || h.intl.string(h.t.xex86n) : (null == t ? void 0 : t.username) != null && (l = (null == (A = t.username) || null == (x = A._errors) || null == (c = x[0]) ? void 0 : c.message) || h.intl.string(h.t.xex86n)), I({
                    nick: l
                })
            }
        }, [o, M, k, u, y, S]);
    return (0, n.jsx)("form", {
        onSubmit: L,
        children: (0, n.jsx)(s.aFV, {
            transitionState: e,
            onClose: k,
            title: h.intl.string(h.t.dilOF6),
            actions: [{
                text: h.intl.string(h.t["ETE/oC"]),
                onClick: k,
                variant: "secondary"
            }, {
                text: h.intl.string(h.t["R3BPH+"]),
                variant: "primary",
                type: "submit",
                disabled: f
            }],
            children: (0, n.jsx)(C, {
                disabled: !b,
                user: u,
                error: G.nick,
                nickname: M,
                setNickname: j,
                hasNick: (null == y ? void 0 : y.nick) != null
            })
        })
    })
}