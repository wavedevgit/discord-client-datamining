/** Chunk was on 77870 **/
/** chunk id: 34968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CJ: () => v,
    dY: () => x,
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
    f = n(251494),
    g = n(82038),
    m = n(14214),
    b = n(151199),
    A = n(512513),
    y = n(801796),
    _ = n(652215),
    O = n(985018);

function j() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map(e => {
        let t = v[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0]
    })
}
let v = {
        [_.IWg.SERVER_NEXT]: h.yx,
        [_.IWg.SERVER_PREV]: h.yv,
        [_.IWg.CHANNEL_NEXT]: l.kF,
        [_.IWg.CHANNEL_PREV]: l.Oc,
        [_.IWg.NAVIGATE_BACK]: l.GY,
        [_.IWg.NAVIGATE_FORWARD]: l.M$,
        [_.IWg.UNREAD_NEXT]: y.mH,
        [_.IWg.UNREAD_PREV]: y.US,
        [_.IWg.MENTION_CHANNEL_NEXT]: y.BD,
        [_.IWg.MENTION_CHANNEL_PREV]: y.X8,
        [_.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
        [_.IWg.JUMP_TO_GUILD]: i.J,
        [_.IWg.SUBMIT]: f.X,
        [_.IWg.TEXTAREA_FOCUS]: g.c,
        [_.IWg.MARK_CHANNEL_READ]: s.D,
        [_.IWg.MARK_SERVER_READ]: a.P,
        [_.IWg.TOGGLE_MUTE]: m.VT,
        [_.IWg.TOGGLE_DEAFEN]: m.rR,
        [_.IWg.TOGGLE_CATEGORY_COLLAPSED]: b.y,
        [_.IWg.SCROLL_UP]: d.U5,
        [_.IWg.SCROLL_DOWN]: d.fz,
        [_.IWg.SEARCH_EMOJIS]: p.L,
        [_.IWg.TOGGLE_HOTKEYS]: A.z,
        [_.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [_.IWg.RETURN_TO_AUDIO_CHANNEL]: u.u,
        [_.IWg.CALL_ACCEPT]: r.Yo,
        [_.IWg.CALL_START]: r.OX,
        [_.IWg.QUICKSWITCHER_SHOW]: c.R
    },
    x = {
        [_.IWg.QUICKSWITCHER_SHOW]: c.R
    };

function E() {
    return [{
        description: O.intl.string(O.t.bx4Uyz),
        binds: j(_.IWg.SERVER_PREV, _.IWg.SERVER_NEXT)
    }, {
        description: O.intl.string(O.t["+Wem6h"]),
        binds: j(_.IWg.CHANNEL_PREV, _.IWg.CHANNEL_NEXT)
    }, {
        description: O.intl.string(O.t["+2fcdz"]),
        binds: j(_.IWg.NAVIGATE_BACK, _.IWg.NAVIGATE_FORWARD)
    }, {
        description: O.intl.string(O.t.eVmj1H),
        binds: j(_.IWg.UNREAD_PREV, _.IWg.UNREAD_NEXT)
    }, {
        description: O.intl.string(O.t.EcqS7Y),
        binds: j(_.IWg.MENTION_CHANNEL_PREV, _.IWg.MENTION_CHANNEL_NEXT),
        groupEnd: !0
    }, {
        description: O.intl.string(O.t.Bqss72),
        binds: j(_.IWg.TOGGLE_PREVIOUS_GUILD)
    }, {
        description: O.intl.string(O.t.UaXAPx),
        binds: j(_.IWg.MARK_SERVER_READ)
    }, {
        description: O.intl.string(O.t["5X9vFj"]),
        binds: j(_.IWg.MARK_CHANNEL_READ)
    }, {
        description: O.intl.string(O.t.JoxNnl),
        binds: j(_.IWg.SEARCH_EMOJIS),
        groupEnd: !0
    }, {
        description: O.intl.string(O.t.tL6eVW),
        binds: j(_.IWg.TOGGLE_MUTE)
    }, {
        description: O.intl.string(O.t["QXe/7T"]),
        binds: j(_.IWg.TOGGLE_DEAFEN)
    }, {
        description: O.intl.string(O.t.d6UIii),
        binds: j(_.IWg.CALL_ACCEPT)
    }, {
        description: O.intl.string(O.t.IcEW06),
        binds: j(_.IWg.MARK_CHANNEL_READ)
    }, {
        description: O.intl.string(O.t.WN2dsS),
        binds: j(_.IWg.CALL_START),
        groupEnd: !0
    }, {
        description: O.intl.string(O.t.L3RYYJ),
        binds: j(_.IWg.SCROLL_UP, _.IWg.SCROLL_DOWN)
    }, {
        description: O.intl.string(O.t["3HAurM"]),
        binds: j(_.IWg.JUMP_TO_FIRST_UNREAD)
    }, {
        description: O.intl.string(O.t.rrYBEu),
        binds: j(_.IWg.TEXTAREA_FOCUS)
    }, {
        description: O.intl.string(O.t.yYsRlD),
        binds: j(_.IWg.QUICKSWITCHER_SHOW)
    }]
}