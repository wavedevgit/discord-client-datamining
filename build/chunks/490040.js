/** Chunk was on web.js **/
/** chunk id: 490040, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => T,
    LF: () => I
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(417597),
    l = n(990078),
    c = n(397927),
    u = n(565645),
    d = n(864145),
    f = n(704591),
    p = n(470020),
    _ = n(105713),
    h = n(586583),
    m = n(209932),
    g = n(807348),
    E = n(69217),
    y = n(253932),
    b = n(734057),
    O = n(985018),
    v = n(543218);

function A(e) {
    let {
        playSound: t
    } = e;
    return (0, r.jsxs)(c.DUT, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: v.Ls,
        children: [(0, r.jsx)(c.HKD, {
            size: "md",
            color: "currentColor",
            className: v.uA
        }), (0, r.jsx)("span", {
            children: "Unknown"
        })]
    })
}

function I(e) {
    let {
        soundId: t
    } = e, n = (0, o.bG)([m.A], () => m.A.getSoundById(t)), i = (0, f.tj)({
        location: "SoundboardMentionInline"
    }), {
        isPlaying: a,
        playSound: s
    } = (0, h.A)(n);
    return i ? null == n ? (0, r.jsx)(A, {}) : (0, r.jsx)(S, {
        className: v.wg,
        isPlaying: a,
        playSound: s,
        sound: n
    }) : null
}

function S(e) {
    let {
        className: t,
        sound: n,
        playSound: i,
        isPlaying: a
    } = e, o = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null, l = O.intl.formatToPlainString(O.t.tuMUJ2, {
        emojiName: null == n ? void 0 : n.emojiName,
        soundName: null == n ? void 0 : n.name
    });
    return (0, d.X9)({
        location: "SoundboardMentionInline"
    }) ? (0, r.jsxs)(c.DUT, {
        "aria-label": l,
        tag: "span",
        onClick: i,
        className: s()(v.Ls, v.oR, {
            [v.he]: !0 === a
        }, t),
        children: [o && (0, r.jsx)(u.A, {
            emojiId: null == n ? void 0 : n.emojiId,
            emojiName: null == n ? void 0 : n.emojiName,
            className: v.JS
        }), (0, r.jsx)("span", {
            children: " ".concat(null == n ? void 0 : n.name, " ")
        })]
    }) : null
}
let T = function(e) {
    let {
        channelId: t,
        messageId: n,
        soundId: a,
        messageSounds: s,
        jumbo: c = !1
    } = e, u = y.hH.useSetting(), f = (0, o.bG)([m.A], () => m.A.getSoundById(a), [a]), O = i.useMemo(() => {
        var e;
        return null != (e = (0, p.A)(t, n, a, s)) ? e : f
    }, [t, n, a, s, f]), I = (0, o.bG)([b.A], () => b.A.getChannel(t)), T = (0, d.X9)({
        location: "SoundboardMention"
    }), C = i.useRef(null), {
        isPlaying: N,
        playSound: w
    } = (0, h.A)(O, I), R = i.useCallback(async () => {
        if (await w()) {
            var e;
            null == (e = C.current) || e.addAnimation()
        }
    }, [w]);
    return T ? null == O ? (0, r.jsx)(A, {
        playSound: R
    }) : c && !u ? (0, r.jsx)(E.Ay, {
        containerClassName: v.Ti,
        className: v.UX,
        sound: O,
        channel: I,
        onSelectItem: R,
        isPlayingSoundOverride: N,
        isSoundmoji: !0,
        buttonOverlay: g.If.SOUNDMOJI,
        tooltipClassName: v.YL,
        tooltipContentClassName: v.R3,
        tooltipOverride: (0, r.jsx)(_.WE, {
            sound: O
        }),
        soundmojiVisualEffectRef: C
    }, "".concat(O.soundId)) : (0, r.jsx)(l.m, {
        "aria-label": O.name,
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: (0, r.jsx)(_.WE, {
            sound: O
        }),
        position: "top",
        delay: 500,
        children: (0, r.jsx)("span", {
            children: (0, r.jsx)(S, {
                sound: O,
                playSound: R,
                isPlaying: N
            })
        })
    }) : null
}