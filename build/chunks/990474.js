/** Chunk was on web.js **/
/** chunk id: 990474, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => T,
    Oh: () => S,
    gn: () => I
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(314116),
    o = n(990078),
    l = n(397927),
    c = n(721768),
    u = n(842209),
    d = n(392054),
    f = n(332173),
    p = n(406704),
    _ = n(253932),
    h = n(734057),
    m = n(31717),
    g = n(576705),
    E = n(309010),
    y = n(203982),
    b = n(652215),
    O = n(73510);
n(827669);
var v = n(985018);

function A(e, t, n, r, i) {
    if (null == e) return;
    let a = () => {
        let a = h.A.getChannel(e);
        if (null == a) return;
        let {
            command: s,
            application: o
        } = u.EW({
            channel: a,
            type: "channel"
        }, n, i);
        if (null != s && s.untranslatedName === t) {
            var l, f;
            y._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: e
            });
            let t = null != o ? {
                type: d.Hf.APPLICATION,
                id: o.id,
                icon: o.icon,
                name: null != (l = null == o || null == (f = o.bot) ? void 0 : f.username) ? l : o.name,
                application: o
            } : null;
            c.Gf({
                channelId: e,
                command: null,
                section: null
            }), c.Gf({
                channelId: e,
                command: s,
                section: t,
                location: r
            })
        }
    };
    "" !== m.A.getDraft(e, m.C.ChannelMessage) ? (0, s.A)({
        title: v.intl.string(v.t.pe26Cj),
        subtitle: v.intl.string(v.t["+awCIy"]),
        confirmText: v.intl.string(v.t.VkKicb),
        onConfirm: () => a(),
        onCloseCallback: () => {
            y._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: e
            })
        }
    }) : a()
}

function I(e) {
    var t;
    let {
        node: n,
        stateKey: s,
        children: o
    } = e, l = (0, a.bG)([h.A, E.A], () => {
        var e;
        return h.A.getChannel(null != (e = n.channelId) ? e : E.A.getChannelId())
    }, [n.channelId]), {
        hasSendMessagePerm: c,
        hasUseAppCommandsPerm: m
    } = (0, a.cf)([g.A], () => ({
        hasSendMessagePerm: g.A.can(b.xBc.SEND_MESSAGES, l),
        hasUseAppCommandsPerm: g.A.can(b.xBc.USE_APPLICATION_COMMANDS, l)
    })), y = void 0 !== l ? {
        type: "channel",
        channel: l
    } : {
        type: "contextless"
    }, {
        command: v
    } = u.D3(y, null != (t = n.commandKey) ? t : ""), I = _.D_.useSetting(), S = i.useMemo(() => {
        if (null == v || null == l || v.untranslatedName !== n.commandName || I) return !1;
        let e = l.isPrivate();
        if ((0, p.UJ)(l) || !e && !c) return !1;
        let t = (null == v ? void 0 : v.applicationId) === O.Ik.BUILT_IN;
        return !!e || !!t || !!m
    }, [l, v, c, m, n.commandName, I]), T = i.useCallback(e => {
        null == e || e.stopPropagation(), null != l && null != n.commandName && null != n.commandKey && A(l.id, n.commandName, n.commandKey, d.Oh.MENTION)
    }, [l, n.commandKey, n.commandName]);
    return S ? (0, r.jsxs)(f.A, {
        role: "link",
        onClick: T,
        children: ["/", o]
    }, s) : (0, r.jsxs)("span", {
        children: ["/", o]
    })
}

function S(e) {
    let {
        commandId: t,
        commandName: n,
        commandDescription: i,
        applicationId: s,
        onClick: c
    } = e, u = (0, a.bG)([E.A], () => E.A.getChannelId()), f = e => {
        null == e || e.stopPropagation(), A(u, n, t, d.Oh.POPULAR_COMMANDS, s), null == c || c(t)
    };
    return (0, r.jsx)(o.m, {
        text: i,
        position: "top",
        children: (0, r.jsx)(l.Button, {
            size: "sm",
            variant: "secondary",
            onClick: f,
            text: "".concat("/").concat(n)
        })
    })
}

function T(e) {
    return {
        react: (e, t, n) => (0, r.jsx)(I, {
            node: e,
            stateKey: n.key,
            children: t(e.content, n)
        })
    }
}