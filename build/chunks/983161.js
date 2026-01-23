/** Chunk was on 36354 **/
/** chunk id: 983161, original params: e,n,l (module,exports,require) **/
l.d(n, {
    default: () => N
}), l(896048), l(228524);
var t = l(627968),
    a = l(64700),
    i = l(91871),
    s = l.n(i),
    r = l(158954),
    o = l(417597),
    c = l(397927),
    d = l(713654),
    u = l(374084),
    h = l(342298),
    m = l(734057),
    x = l(808728),
    g = l(71393),
    v = l(486020),
    p = l(132514),
    C = l(721228),
    j = l(985018),
    k = l(43079);

function b(e, n, l, t) {
    return {
        channelId: e,
        title: n,
        description: l,
        emoji: null,
        icon: null != t ? t : null
    }
}

function N(e) {
    var n, l;
    let {
        transitionState: i,
        onClose: N,
        resourceChannel: _,
        guildId: I,
        onSave: A,
        onDelete: f,
        onIconUpload: H
    } = e, [S, y] = a.useState(null != (n = null == _ ? void 0 : _.title) ? n : ""), [M, E] = a.useState(null != (l = null == _ ? void 0 : _.description) ? l : ""), [K, U] = a.useState(function(e) {
        if (null == e) return null;
        let n = m.A.getChannel(e.channelId);
        return null == n ? null : n.id
    }(_)), w = (0, o.bG)([p.A], () => {
        var e;
        return null == (e = p.A.getResourceChannel(null == _ ? void 0 : _.channelId)) ? void 0 : e.icon
    }), L = (0, o.yK)([p.A], () => {
        var e, n;
        return (null != (e = null == (n = p.A.getSettings()) ? void 0 : n.resourceChannels) ? e : []).map(e => e.channelId)
    }), R = S.length < u.SM || null == K, G = a.useCallback(() => {
        null == K || S.length <= 0 || (A(b(K, S, M, w)), N())
    }, [A, N, S, K, w, M]), J = a.useCallback(() => {
        null == f || f(), N()
    }, [f, N]), P = a.useCallback(e => {
        U(e)
    }, [U]), T = a.useCallback(e => {
        let n = x.Ay.getSelectableChannels(I),
            l = g.A.getGuild(I);
        return Promise.resolve(n.filter(n => (0, u.Yt)(n.channel) && !L.includes(n.channel.id) && s()(e, n.channel.name)).map(e => {
            let n = (0, d.gU)(e.channel, l);
            return {
                id: e.channel.id,
                value: e.channel.id,
                label: e.channel.name,
                leading: null != n ? (0, t.jsx)(n, {
                    size: "xs",
                    color: "currentColor",
                    className: k.p
                }) : void 0
            }
        }))
    }, [I, L]), W = a.useCallback(e => {
        null != H && null != K && H(b(K, S, M), e)
    }, [K, S, H, M]), z = a.useCallback(() => null == w || null == K ? null : v.Ay.getResourceChannelIconURL({
        channelId: K,
        icon: w
    }), [K, w]), B = a.useMemo(() => [{
        variant: "secondary",
        text: j.intl.string(j.t["ETE/oC"]),
        onClick: N
    }, {
        variant: "primary",
        text: j.intl.string(j.t["R3BPH+"]),
        onClick: G,
        disabled: R
    }], [G, R, N]);
    return (0, t.jsxs)(r.Modal, {
        title: j.intl.string(j.t.SNMXYt),
        transitionState: i,
        onClose: N,
        actions: B,
        actionBarInput: null != _ ? (0, t.jsx)(c.QWc, {
            text: j.intl.string(j.t.N86XcP),
            onClick: J,
            variant: "critical"
        }) : void 0,
        children: [(0, t.jsxs)("div", {
            className: k.eH,
            children: [(0, t.jsxs)(c.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [j.intl.string(j.t.nPa4Ju), (0, t.jsx)(C.A, {})]
            }), (0, t.jsx)(c.ZiE, {
                selectionMode: "single",
                value: null != K ? K : void 0,
                options: T,
                onSelectionChange: P
            }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: j.intl.string(j.t.eNDtJK)
            })]
        }), (0, t.jsx)("div", {
            className: k.me
        }), (0, t.jsxs)("div", {
            className: k.eH,
            children: [(0, t.jsxs)(c.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [j.intl.string(j.t["lFy+aW"]), (0, t.jsx)(C.A, {})]
            }), (0, t.jsx)(c.ksK, {
                value: S,
                onChange: y,
                placeholder: j.intl.string(j.t.XKUimI),
                maxLength: u.oW
            })]
        }), (0, t.jsx)("div", {
            className: k.me
        }), (0, t.jsxs)("div", {
            className: k.eH,
            children: [(0, t.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: j.intl.string(j.t.CnkilH)
            }), (0, t.jsx)(c.fs1, {
                value: M,
                onChange: E,
                placeholder: j.intl.string(j.t.na0V4E),
                maxLength: u.Mu
            })]
        }), (0, t.jsx)("div", {
            className: k.me
        }), (0, t.jsxs)("div", {
            className: k.kE,
            children: [(0, t.jsxs)("div", {
                children: [(0, t.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: j.intl.string(j.t.CB6dyu)
                }), (0, t.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: j.intl.string(j.t.Kcdk7D)
                })]
            }), (0, t.jsx)("div", {
                children: (0, t.jsx)(h.A, {
                    className: k.xp,
                    imageClassName: k.V6,
                    image: w,
                    makeURL: z,
                    icon: (0, t.jsx)(c.JMY, {
                        size: "md",
                        color: "currentColor"
                    }),
                    hideSize: !0,
                    onChange: W,
                    iconClassName: k.Ow,
                    showIcon: null == w
                })
            })]
        })]
    })
}