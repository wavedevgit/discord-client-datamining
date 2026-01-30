/** chunk id: 34968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CJ: () => x,
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
    h = n(877991),
    p = n(904828),
    g = n(251494),
    f = n(82038),
    m = n(14214),
    b = n(151199),
    A = n(512513),
    y = n(801796),
    O = n(652215),
    _ = n(985018);

function j() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map(e => {
        let t = x[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0]
    })
}
let x = {
        [O.IWg.SERVER_NEXT]: p.yx,
        [O.IWg.SERVER_PREV]: p.yv,
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
        [O.IWg.SEARCH_EMOJIS]: h.L,
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
        description: _.intl.string(_.t.bx4Uyz),
        binds: j(O.IWg.SERVER_PREV, O.IWg.SERVER_NEXT)
    }, {
        description: _.intl.string(_.t["+Wem6h"]),
        binds: j(O.IWg.CHANNEL_PREV, O.IWg.CHANNEL_NEXT)
    }, {
        description: _.intl.string(_.t["+2fcdz"]),
        binds: j(O.IWg.NAVIGATE_BACK, O.IWg.NAVIGATE_FORWARD)
    }, {
        description: _.intl.string(_.t.eVmj1H),
        binds: j(O.IWg.UNREAD_PREV, O.IWg.UNREAD_NEXT)
    }, {
        description: _.intl.string(_.t.EcqS7Y),
        binds: j(O.IWg.MENTION_CHANNEL_PREV, O.IWg.MENTION_CHANNEL_NEXT),
        groupEnd: !0
    }, {
        description: _.intl.string(_.t.Bqss72),
        binds: j(O.IWg.TOGGLE_PREVIOUS_GUILD)
    }, {
        description: _.intl.string(_.t.UaXAPx),
        binds: j(O.IWg.MARK_SERVER_READ)
    }, {
        description: _.intl.string(_.t["5X9vFj"]),
        binds: j(O.IWg.MARK_CHANNEL_READ)
    }, {
        description: _.intl.string(_.t.JoxNnl),
        binds: j(O.IWg.SEARCH_EMOJIS),
        groupEnd: !0
    }, {
        description: _.intl.string(_.t.tL6eVW),
        binds: j(O.IWg.TOGGLE_MUTE)
    }, {
        description: _.intl.string(_.t["QXe/7T"]),
        binds: j(O.IWg.TOGGLE_DEAFEN)
    }, {
        description: _.intl.string(_.t.d6UIii),
        binds: j(O.IWg.CALL_ACCEPT)
    }, {
        description: _.intl.string(_.t.IcEW06),
        binds: j(O.IWg.MARK_CHANNEL_READ)
    }, {
        description: _.intl.string(_.t.WN2dsS),
        binds: j(O.IWg.CALL_START),
        groupEnd: !0
    }, {
        description: _.intl.string(_.t.L3RYYJ),
        binds: j(O.IWg.SCROLL_UP, O.IWg.SCROLL_DOWN)
    }, {
        description: _.intl.string(_.t["3HAurM"]),
        binds: j(O.IWg.JUMP_TO_FIRST_UNREAD)
    }, {
        description: _.intl.string(_.t.rrYBEu),
        binds: j(O.IWg.TEXTAREA_FOCUS)
    }, {
        description: _.intl.string(_.t.yYsRlD),
        binds: j(O.IWg.QUICKSWITCHER_SHOW)
    }]
}