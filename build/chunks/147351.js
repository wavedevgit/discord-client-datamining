/** chunk id: 147351 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    r = n(64700),
    s = n(311907),
    a = n(732955),
    l = n(843472),
    o = n(355622),
    c = n(148355),
    u = n(406704),
    d = n(696451),
    _ = n(576705),
    E = n(287809),
    A = n(954571),
    m = n(661191),
    I = n(460350),
    T = n(652215),
    N = n(968782);

function g(e) {
    let {
        assets: t,
        currentUser: n,
        message: i
    } = e, r = (m.default.extractTimestamp(n.id) + m.default.extractTimestamp(i.id)) % t.length;
    return t[r]
}

function p(e) {
    let {
        currentUser: t,
        channel: n,
        message: s,
        buttonLabels: u,
        stickers: d,
        event: _,
        eventProperties: E
    } = e, m = r.useMemo(() => g({
        assets: d,
        currentUser: t,
        message: s
    }), [d, t, s]), T = r.useMemo(() => g({
        assets: u,
        currentUser: t,
        message: s
    }), [u, t, s]), N = r.useCallback(async () => {
        let {
            valid: e
        } = await (0, I.i)({
            type: o.oU.FORM,
            content: "",
            channel: n
        });
        e && (! function(e) {
            let {
                channel: t,
                message: n,
                sticker: i
            } = e;
            l.A.sendGreetMessage(t.id, i.id, l.A.getSendMessageOptionsForReply({
                channel: t,
                message: n,
                shouldMention: !0,
                showMentionToggle: !0
            }))
        }({
            channel: n,
            message: s,
            sticker: m
        }), function(e) {
            let {
                sticker: t,
                event: n,
                eventProperties: i
            } = e;
            null != n && A.default.track(n, {
                ...i,
                sticker_id: t.id
            })
        }({
            sticker: m,
            event: _,
            eventProperties: E
        }))
    }, [n, s, m, _, E]);
    return (0, i.jsx)(a.$nd, {
        icon: {
            type: "sticker",
            asset: m,
            component: c.A
        },
        text: T,
        onClick: N,
        variant: "secondary"
    })
}

function C(e) {
    let {
        channel: t,
        message: n,
        buttonLabels: r,
        stickers: a,
        event: l,
        eventProperties: o
    } = e, c = E.default.getCurrentUser(), A = function(e) {
        let {
            channel: t,
            message: n,
            currentUser: i
        } = e;
        return (0, s.bG)([_.A, d.Ay], () => {
            let e = t.guild_id;
            if (null == i || null == e) return !1;
            let r = (0, u.UJ)(t),
                s = _.A.can(T.xBc.SEND_MESSAGES, t),
                a = d.Ay.getMember(e, i.id)?.isPending,
                l = n.author.bot;
            return s && !r && !a && !l
        })
    }({
        channel: t,
        message: n,
        currentUser: c
    });
    return null != c && A ? (0, i.jsx)("div", {
        className: N.S,
        children: (0, i.jsx)(p, {
            currentUser: c,
            channel: t,
            message: n,
            buttonLabels: r,
            stickers: a,
            event: l,
            eventProperties: o
        })
    }) : null
}