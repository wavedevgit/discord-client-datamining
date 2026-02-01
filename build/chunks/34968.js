/** chunk id: 34968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CJ: () => _,
    dY: () => v,
    y8: () => E
}), n(65821);
var r = n(774603),
    l = n(430086),
    i = n(64460),
    s = n(92960),
    a = n(739008),
    o = n(314519),
    c = n(967497),
    u = n(806964),
    d = n(552049),
    p = n(877991),
    h = n(904828),
    g = n(251494),
    f = n(82038),
    m = n(14214),
    b = n(151199),
    A = n(512513),
    y = n(801796),
    O = n(652215),
    j = n(985018);

function x() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map(e => {
        let t = _[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0]
    })
}
let _ = {
        [O.IWg.SERVER_NEXT]: h.yx,
        [O.IWg.SERVER_PREV]: h.yv,
        [O.IWg.CHANNEL_NEXT]: l.kF,
        [O.IWg.CHANNEL_PREV]: l.Oc,
        [O.IWg.NAVIGATE_BACK]: l.GY,
        [O.IWg.NAVIGATE_FORWARD]: l.M$,
        [O.IWg.UNREAD_NEXT]: y.mH,
        [O.IWg.UNREAD_PREV]: y.US,
        [O.IWg.MENTION_CHANNEL_NEXT]: y.BD,
        [O.IWg.MENTION_CHANNEL_PREV]: y.X8,
        [O.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
        [O.IWg.JUMP_TO_GUILD]: i.J,
        [O.IWg.SUBMIT]: g.X,
        [O.IWg.TEXTAREA_FOCUS]: f.c,
        [O.IWg.MARK_CHANNEL_READ]: s.D,
        [O.IWg.MARK_SERVER_READ]: a.P,
        [O.IWg.TOGGLE_MUTE]: m.VT,
        [O.IWg.TOGGLE_DEAFEN]: m.rR,
        [O.IWg.TOGGLE_CATEGORY_COLLAPSED]: b.y,
        [O.IWg.SCROLL_UP]: d.U5,
        [O.IWg.SCROLL_DOWN]: d.fz,
        [O.IWg.SEARCH_EMOJIS]: p.L,
        [O.IWg.TOGGLE_HOTKEYS]: A.z,
        [O.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [O.IWg.RETURN_TO_AUDIO_CHANNEL]: u.u,
        [O.IWg.CALL_ACCEPT]: r.Yo,
        [O.IWg.CALL_START]: r.OX,
        [O.IWg.QUICKSWITCHER_SHOW]: c.R
    },
    v = {
        [O.IWg.QUICKSWITCHER_SHOW]: c.R
    };

function E() {
    return [{
        description: j.intl.string(j.t.bx4Uyz),
        binds: x(O.IWg.SERVER_PREV, O.IWg.SERVER_NEXT)
    }, {
        description: j.intl.string(j.t["+Wem6h"]),
        binds: x(O.IWg.CHANNEL_PREV, O.IWg.CHANNEL_NEXT)
    }, {
        description: j.intl.string(j.t["+2fcdz"]),
        binds: x(O.IWg.NAVIGATE_BACK, O.IWg.NAVIGATE_FORWARD)
    }, {
        description: j.intl.string(j.t.eVmj1H),
        binds: x(O.IWg.UNREAD_PREV, O.IWg.UNREAD_NEXT)
    }, {
        description: j.intl.string(j.t.EcqS7Y),
        binds: x(O.IWg.MENTION_CHANNEL_PREV, O.IWg.MENTION_CHANNEL_NEXT),
        groupEnd: !0
    }, {
        description: j.intl.string(j.t.Bqss72),
        binds: x(O.IWg.TOGGLE_PREVIOUS_GUILD)
    }, {
        description: j.intl.string(j.t.UaXAPx),
        binds: x(O.IWg.MARK_SERVER_READ)
    }, {
        description: j.intl.string(j.t["5X9vFj"]),
        binds: x(O.IWg.MARK_CHANNEL_READ)
    }, {
        description: j.intl.string(j.t.JoxNnl),
        binds: x(O.IWg.SEARCH_EMOJIS),
        groupEnd: !0
    }, {
        description: j.intl.string(j.t.tL6eVW),
        binds: x(O.IWg.TOGGLE_MUTE)
    }, {
        description: j.intl.string(j.t["QXe/7T"]),
        binds: x(O.IWg.TOGGLE_DEAFEN)
    }, {
        description: j.intl.string(j.t.d6UIii),
        binds: x(O.IWg.CALL_ACCEPT)
    }, {
        description: j.intl.string(j.t.IcEW06),
        binds: x(O.IWg.MARK_CHANNEL_READ)
    }, {
        description: j.intl.string(j.t.WN2dsS),
        binds: x(O.IWg.CALL_START),
        groupEnd: !0
    }, {
        description: j.intl.string(j.t.L3RYYJ),
        binds: x(O.IWg.SCROLL_UP, O.IWg.SCROLL_DOWN)
    }, {
        description: j.intl.string(j.t["3HAurM"]),
        binds: x(O.IWg.JUMP_TO_FIRST_UNREAD)
    }, {
        description: j.intl.string(j.t.rrYBEu),
        binds: x(O.IWg.TEXTAREA_FOCUS)
    }, {
        description: j.intl.string(j.t.yYsRlD),
        binds: x(O.IWg.QUICKSWITCHER_SHOW)
    }]
}