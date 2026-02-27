/** chunk id: 915967, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => X,
    Bx: () => z,
    Gm: () => W,
    Q_: () => j,
    zF: () => k,
    zR: () => Y
}), n(321073);
var i, r = n(966597),
    a = n(774603),
    l = n(430086),
    s = n(394318),
    o = n(303757),
    d = n(830004),
    _ = n(434728),
    c = n(308494),
    u = n(64460),
    A = n(92960),
    g = n(739008),
    I = n(314519),
    E = n(198168),
    h = n(799592),
    C = n(675704),
    p = n(806964),
    S = n(552049),
    f = n(877991),
    m = n(332779),
    T = n(187521),
    b = n(568765),
    L = n(904828),
    N = n(251494),
    O = n(82038),
    G = n(14214),
    R = n(151199),
    U = n(144353),
    y = n(535527),
    D = n(46647),
    v = n(512513),
    P = n(910492),
    M = n(416092),
    x = n(801796),
    w = n(344731),
    V = n(58841),
    F = n(406975),
    B = n(652215),
    H = n(985018),
    j = ((i = {}).NAVIGATION = "NAVIGATION", i.CHAT = "CHAT", i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", i.MISCELLANEOUS = "MISCELLANEOUS", i.MESSAGE = "MESSAGE", i.DND = "DND", i);

function W(e) {
    switch (e) {
        case "NAVIGATION":
            return H.intl.string(H.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return H.intl.string(H.t.bI8F5u);
        case "CHAT":
            return H.intl.string(H.t.hDhbb3);
        case "MISCELLANEOUS":
            return H.intl.string(H.t.cBdwqs);
        case "MESSAGE":
            return H.intl.string(H.t["5fpmX9"]);
        case "DND":
            return H.intl.string(H.t["69j6+4"])
    }
}

function k(e) {
    switch (e) {
        case "MESSAGE":
            return H.intl.string(H.t.iepGDn);
        case "DND":
            return H.intl.string(H.t.LBsB0a);
        default:
            return
    }
}

function K() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map(e => {
        let t = Y[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0]
    })
}
let Y = {
    [B.IWg.SERVER_NEXT]: L.yx,
    [B.IWg.SERVER_PREV]: L.yv,
    [B.IWg.CHANNEL_NEXT]: l.kF,
    [B.IWg.CHANNEL_PREV]: l.Oc,
    [B.IWg.NAVIGATE_BACK]: l.GY,
    [B.IWg.NAVIGATE_FORWARD]: l.M$,
    [B.IWg.UNREAD_NEXT]: x.mH,
    [B.IWg.UNREAD_PREV]: x.US,
    [B.IWg.MENTION_CHANNEL_NEXT]: x.BD,
    [B.IWg.MENTION_CHANNEL_PREV]: x.X8,
    [B.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
    [B.IWg.JUMP_TO_GUILD]: u.J,
    [B.IWg.SUBMIT]: N.X,
    [B.IWg.TEXTAREA_FOCUS]: O.c,
    [B.IWg.MARK_CHANNEL_READ]: A.D,
    [B.IWg.MARK_SERVER_READ]: g.P,
    [B.IWg.TOGGLE_CHANNEL_PINS]: U.O,
    [B.IWg.TOGGLE_FOR_LATER]: y.K,
    [B.IWg.TOGGLE_INBOX]: P.q,
    [B.IWg.MARK_TOP_INBOX_CHANNEL_READ]: P.O,
    [B.IWg.TOGGLE_USERS]: M.U,
    [B.IWg.TOGGLE_HELP]: D.x,
    [B.IWg.VIBE_WITH_WUMPUS]: V.y,
    [B.IWg.TOGGLE_MUTE]: G.VT,
    [B.IWg.TOGGLE_DEAFEN]: G.rR,
    [B.IWg.TOGGLE_CATEGORY_COLLAPSED]: R.y,
    [B.IWg.SEARCH_SOUNDBOARD]: T.A,
    [B.IWg.SCROLL_UP]: S.U5,
    [B.IWg.SCROLL_DOWN]: S.fz,
    [B.IWg.QUICKSWITCHER_SHOW]: C.R,
    [B.IWg.CREATE_DM_GROUP]: s.X,
    [B.IWg.SEARCH_EMOJIS]: f.L,
    [B.IWg.SEARCH_GIFS]: m.T,
    [B.IWg.SEARCH_STICKERS]: b.w,
    [B.IWg.TOGGLE_HOTKEYS]: v.z,
    [B.IWg.JUMP_TO_FIRST_UNREAD]: I.s,
    [B.IWg.CREATE_GUILD]: o.$,
    [B.IWg.UPLOAD_FILE]: w.T,
    [B.IWg.RETURN_TO_AUDIO_CHANNEL]: p.u,
    [B.IWg.CALL_ACCEPT]: a.Yo,
    [B.IWg.CALL_START]: a.OX,
    [B.IWg.FOCUS_SEARCH]: _.O,
    [B.IWg.JUMP_TO_CURRENT_CALL]: c.s,
    [B.IWg.ZOOM_IN]: F.Ur,
    [B.IWg.ZOOM_OUT]: F.hU,
    [B.IWg.ZOOM_RESET]: F.O$,
    [B.IWg.OPEN_APP_DIRECTORY]: E.N,
    [B.IWg.BROWSER_DEVTOOLS]: d.i,
    [B.IWg.OPEN_CONTEXT_MENU]: h.b
};

function z() {
    let e = [{
            description: H.intl.string(H.t.bx4Uyz),
            binds: K(B.IWg.SERVER_PREV, B.IWg.SERVER_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t["+Wem6h"]),
            binds: K(B.IWg.CHANNEL_PREV, B.IWg.CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t["+2fcdz"]),
            binds: K(B.IWg.NAVIGATE_BACK, B.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.eVmj1H),
            binds: K(B.IWg.UNREAD_PREV, B.IWg.UNREAD_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.EcqS7Y),
            binds: K(B.IWg.MENTION_CHANNEL_PREV, B.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t["4I3pwW"]),
            binds: K(B.IWg.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.Bqss72),
            binds: K(B.IWg.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.yYsRlD),
            binds: K(B.IWg.QUICKSWITCHER_SHOW),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.O7ouXO),
            binds: K(B.IWg.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.Lns0Fc),
            binds: ["mod+d"],
            group: "DND"
        }, {
            description: H.intl.string(H.t.dmMqay),
            binds: ["up", "down"],
            group: "DND"
        }, {
            description: H.intl.string(H.t["cs/HVH"]),
            binds: ["spacebar", "enter"],
            group: "DND"
        }, {
            description: H.intl.string(H.t["1ioMJQ"]),
            binds: ["esc"],
            group: "DND",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.UaXAPx),
            binds: K(B.IWg.MARK_SERVER_READ),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["5X9vFj"]),
            binds: K(B.IWg.MARK_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.wxQFsl),
            binds: K(B.IWg.CREATE_DM_GROUP),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["C+XV7f"]),
            binds: K(B.IWg.TOGGLE_CHANNEL_PINS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["Q+YV/T"]),
            binds: K(B.IWg.TOGGLE_INBOX),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["YEjV+W"]),
            binds: K(B.IWg.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.AcBI9S),
            binds: K(B.IWg.TOGGLE_USERS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.JoxNnl),
            binds: K(B.IWg.SEARCH_EMOJIS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["3PHxo8"]),
            binds: K(B.IWg.SEARCH_GIFS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.YFl7eb),
            binds: K(B.IWg.SEARCH_STICKERS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.L3RYYJ),
            binds: K(B.IWg.SCROLL_UP, B.IWg.SCROLL_DOWN),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["3HAurM"]),
            binds: K(B.IWg.JUMP_TO_FIRST_UNREAD),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.rrYBEu),
            binds: K(B.IWg.TEXTAREA_FOCUS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.sUJlPL),
            binds: K(B.IWg.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.tL6eVW),
            binds: K(B.IWg.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t["QXe/7T"]),
            binds: K(B.IWg.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.d6UIii),
            binds: K(B.IWg.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.IcEW06),
            binds: K(B.IWg.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.WN2dsS),
            binds: K(B.IWg.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.rUK0kk),
            binds: K(B.IWg.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.vkGkSn),
            binds: K(B.IWg.TOGGLE_HELP),
            group: "MISCELLANEOUS"
        }, {
            description: H.intl.string(H.t.FJvZ87),
            binds: K(B.IWg.FOCUS_SEARCH),
            group: "MISCELLANEOUS"
        }, {
            description: H.intl.string(H.t["FiWl/T"]),
            binds: K(B.IWg.OPEN_CONTEXT_MENU),
            group: "MISCELLANEOUS"
        }, {
            description: H.intl.string(H.t.HnNtEI),
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.fsBWmS),
            binds: ["e"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.xwMqD7),
            binds: ["backspace"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.CvQ18w),
            binds: ["p"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.lfIHs4),
            binds: ["plus"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t["5IEsGx"]),
            binds: ["r"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.zSyDdA),
            binds: ["f"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.yGLjXF),
            binds: ["s"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.JrGD7E),
            binds: ["mod+c"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.RpE9k7),
            binds: ["alt+enter"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.rrYBEu),
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.z9c6mt),
            binds: K(B.IWg.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS"
        }],
        {
            enabled: t,
            inInbox: n
        } = r.A.getCurrentConfig({
            location: "keybinds"
        }, {
            autoTrackExposure: !1
        });
    return t && !n && e.push({
        description: H.intl.string(H.t.IWNSoH),
        binds: K(B.IWg.TOGGLE_FOR_LATER),
        group: "CHAT"
    }), e
}
let X = 21552 == n.j ? Y : null