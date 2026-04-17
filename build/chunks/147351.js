/** chunk id: 147351 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(732955),
    a = n(843472),
    o = n(355622),
    c = n(148355),
    u = n(406704),
    d = n(696451),
    _ = n(576705),
    A = n(287809),
    E = n(954571),
    m = n(661191),
    I = n(460350),
    T = n(652215),
    g = n(968782);

function N(e) {
    let {
        assets: t,
        currentUser: n,
        message: i
    } = e, r = (m.default.extractTimestamp(n.id) + m.default.extractTimestamp(i.id)) % t.length;
    return t[r]
}

function f(e) {
    let {
        currentUser: t,
        channel: n,
        message: l,
        buttonLabels: u,
        stickers: d,
        event: _,
        eventProperties: A
    } = e, m = r.useMemo(() => N({
        assets: d,
        currentUser: t,
        message: l
    }), [d, t, l]), T = r.useMemo(() => N({
        assets: u,
        currentUser: t,
        message: l
    }), [u, t, l]), g = r.useCallback(async () => {
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
            a.A.sendGreetMessage(t.id, i.id, a.A.getSendMessageOptionsForReply({
                channel: t,
                message: n,
                shouldMention: !0,
                showMentionToggle: !0
            }))
        }({
            channel: n,
            message: l,
            sticker: m
        }), function(e) {
            let {
                sticker: t,
                event: n,
                eventProperties: i
            } = e;
            null != n && E.default.track(n, {
                ...i,
                sticker_id: t.id
            })
        }({
            sticker: m,
            event: _,
            eventProperties: A
        }))
    }, [n, l, m, _, A]);
    return (0, i.jsx)(s.$nd, {
        icon: {
            type: "sticker",
            asset: m,
            component: c.A
        },
        text: T,
        onClick: g,
        variant: "secondary"
    })
}

function C(e) {
    let {
        channel: t,
        message: n,
        buttonLabels: r,
        stickers: s,
        event: a,
        eventProperties: o
    } = e, c = A.default.getCurrentUser(), E = function(e) {
        let {
            channel: t,
            message: n,
            currentUser: i
        } = e;
        return (0, l.bG)([_.A, d.Ay], () => {
            let e = t.guild_id;
            if (null == i || null == e) return !1;
            let r = (0, u.UJ)(t),
                l = _.A.can(T.xBc.SEND_MESSAGES, t),
                s = d.Ay.getMember(e, i.id)?.isPending,
                a = n.author.bot;
            return l && !r && !s && !a
        })
    }({
        channel: t,
        message: n,
        currentUser: c
    });
    return null != c && E ? (0, i.jsx)("div", {
        className: g.S,
        children: (0, i.jsx)(f, {
            currentUser: c,
            channel: t,
            message: n,
            buttonLabels: r,
            stickers: s,
            event: a,
            eventProperties: o
        })
    }) : null
}