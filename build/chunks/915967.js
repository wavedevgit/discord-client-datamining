/** chunk id: 915967 params = (module,exports,require) **/
n.d(t, {
    Ay: () => X,
    Bx: () => Y,
    Gm: () => W,
    Q_: () => F,
    zF: () => k,
    zR: () => z
}), n(321073);
var i, r = n(966597),
    l = n(774603),
    s = n(430086),
    o = n(394318),
    a = n(303757),
    d = n(830004),
    c = n(434728),
    u = n(308494),
    _ = n(64460),
    A = n(92960),
    E = n(739008),
    I = n(314519),
    h = n(198168),
    g = n(799592),
    C = n(675704),
    p = n(806964),
    T = n(552049),
    S = n(877991),
    b = n(332779),
    f = n(187521),
    N = n(568765),
    m = n(904828),
    L = n(251494),
    O = n(82038),
    R = n(14214),
    G = n(151199),
    U = n(144353),
    D = n(535527),
    y = n(46647),
    P = n(512513),
    M = n(910492),
    v = n(416092),
    x = n(801796),
    V = n(344731),
    j = n(58841),
    H = n(406975),
    B = n(652215),
    w = n(985018),
    F = ((i = {}).NAVIGATION = "NAVIGATION", i.CHAT = "CHAT", i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", i.MISCELLANEOUS = "MISCELLANEOUS", i.MESSAGE = "MESSAGE", i.DND = "DND", i);

function W(e) {
    switch (e) {
        case "NAVIGATION":
            return w.intl.string(w.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return w.intl.string(w.t.bI8F5u);
        case "CHAT":
            return w.intl.string(w.t.hDhbb3);
        case "MISCELLANEOUS":
            return w.intl.string(w.t.cBdwqs);
        case "MESSAGE":
            return w.intl.string(w.t["5fpmX9"]);
        case "DND":
            return w.intl.string(w.t["69j6+4"])
    }
}

function k(e) {
    switch (e) {
        case "MESSAGE":
            return w.intl.string(w.t.iepGDn);
        case "DND":
            return w.intl.string(w.t.LBsB0a);
        default:
            return
    }
}

function K() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map(e => {
        let t = z[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0]
    })
}
let z = {
    [B.IWg.SERVER_NEXT]: m.yx,
    [B.IWg.SERVER_PREV]: m.yv,
    [B.IWg.CHANNEL_NEXT]: s.kF,
    [B.IWg.CHANNEL_PREV]: s.Oc,
    [B.IWg.NAVIGATE_BACK]: s.GY,
    [B.IWg.NAVIGATE_FORWARD]: s.M$,
    [B.IWg.UNREAD_NEXT]: x.mH,
    [B.IWg.UNREAD_PREV]: x.US,
    [B.IWg.MENTION_CHANNEL_NEXT]: x.BD,
    [B.IWg.MENTION_CHANNEL_PREV]: x.X8,
    [B.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [B.IWg.JUMP_TO_GUILD]: _.J,
    [B.IWg.SUBMIT]: L.X,
    [B.IWg.TEXTAREA_FOCUS]: O.c,
    [B.IWg.MARK_CHANNEL_READ]: A.Df,
    [B.IWg.MARK_SERVER_READ]: E.P,
    [B.IWg.TOGGLE_CHANNEL_PINS]: U.O,
    [B.IWg.TOGGLE_FOR_LATER]: D.K,
    [B.IWg.TOGGLE_INBOX]: M.q,
    [B.IWg.MARK_TOP_INBOX_CHANNEL_READ]: M.O,
    [B.IWg.TOGGLE_USERS]: v.U,
    [B.IWg.TOGGLE_HELP]: y.x,
    [B.IWg.VIBE_WITH_WUMPUS]: j.y,
    [B.IWg.TOGGLE_MUTE]: R.VT,
    [B.IWg.TOGGLE_DEAFEN]: R.rR,
    [B.IWg.TOGGLE_CATEGORY_COLLAPSED]: G.y,
    [B.IWg.SEARCH_SOUNDBOARD]: f.A,
    [B.IWg.SCROLL_UP]: T.U5,
    [B.IWg.SCROLL_DOWN]: T.fz,
    [B.IWg.QUICKSWITCHER_SHOW]: C.R,
    [B.IWg.CREATE_DM_GROUP]: o.X,
    [B.IWg.SEARCH_EMOJIS]: S.L,
    [B.IWg.SEARCH_GIFS]: b.T,
    [B.IWg.SEARCH_STICKERS]: N.w,
    [B.IWg.TOGGLE_HOTKEYS]: P.z,
    [B.IWg.JUMP_TO_FIRST_UNREAD]: I.s,
    [B.IWg.CREATE_GUILD]: a.$,
    [B.IWg.UPLOAD_FILE]: V.T,
    [B.IWg.RETURN_TO_AUDIO_CHANNEL]: p.u,
    [B.IWg.CALL_ACCEPT]: l.Yo,
    [B.IWg.CALL_START]: l.OX,
    [B.IWg.FOCUS_SEARCH]: c.O,
    [B.IWg.JUMP_TO_CURRENT_CALL]: u.s,
    [B.IWg.ZOOM_IN]: H.Ur,
    [B.IWg.ZOOM_OUT]: H.hU,
    [B.IWg.ZOOM_RESET]: H.O$,
    [B.IWg.OPEN_APP_DIRECTORY]: h.N,
    [B.IWg.BROWSER_DEVTOOLS]: d.i,
    [B.IWg.OPEN_CONTEXT_MENU]: g.b
};

function Y() {
    let e = [{
            description: w.intl.string(w.t.bx4Uyz),
            binds: K(B.IWg.SERVER_PREV, B.IWg.SERVER_NEXT),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t["+Wem6h"]),
            binds: K(B.IWg.CHANNEL_PREV, B.IWg.CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t["+2fcdz"]),
            binds: K(B.IWg.NAVIGATE_BACK, B.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t.eVmj1H),
            binds: K(B.IWg.UNREAD_PREV, B.IWg.UNREAD_NEXT),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t.EcqS7Y),
            binds: K(B.IWg.MENTION_CHANNEL_PREV, B.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t["4I3pwW"]),
            binds: K(B.IWg.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t.Bqss72),
            binds: K(B.IWg.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t.yYsRlD),
            binds: K(B.IWg.QUICKSWITCHER_SHOW),
            group: "NAVIGATION"
        }, {
            description: w.intl.string(w.t.O7ouXO),
            binds: K(B.IWg.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0
        }, {
            description: w.intl.string(w.t.Lns0Fc),
            binds: ["mod+d"],
            group: "DND"
        }, {
            description: w.intl.string(w.t.dmMqay),
            binds: ["up", "down"],
            group: "DND"
        }, {
            description: w.intl.string(w.t["cs/HVH"]),
            binds: ["spacebar", "enter"],
            group: "DND"
        }, {
            description: w.intl.string(w.t["1ioMJQ"]),
            binds: ["esc"],
            group: "DND",
            groupEnd: !0
        }, {
            description: w.intl.string(w.t.UaXAPx),
            binds: K(B.IWg.MARK_SERVER_READ),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t["5X9vFj"]),
            binds: K(B.IWg.MARK_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t.wxQFsl),
            binds: K(B.IWg.CREATE_DM_GROUP),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t["C+XV7f"]),
            binds: K(B.IWg.TOGGLE_CHANNEL_PINS),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t["Q+YV/T"]),
            binds: K(B.IWg.TOGGLE_INBOX),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t["YEjV+W"]),
            binds: K(B.IWg.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t.AcBI9S),
            binds: K(B.IWg.TOGGLE_USERS),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t.JoxNnl),
            binds: K(B.IWg.SEARCH_EMOJIS),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t["3PHxo8"]),
            binds: K(B.IWg.SEARCH_GIFS),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t.YFl7eb),
            binds: K(B.IWg.SEARCH_STICKERS),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t.L3RYYJ),
            binds: K(B.IWg.SCROLL_UP, B.IWg.SCROLL_DOWN),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t["3HAurM"]),
            binds: K(B.IWg.JUMP_TO_FIRST_UNREAD),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t.rrYBEu),
            binds: K(B.IWg.TEXTAREA_FOCUS),
            group: "CHAT"
        }, {
            description: w.intl.string(w.t.sUJlPL),
            binds: K(B.IWg.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0
        }, {
            description: w.intl.string(w.t.tL6eVW),
            binds: K(B.IWg.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO"
        }, {
            description: w.intl.string(w.t["QXe/7T"]),
            binds: K(B.IWg.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO"
        }, {
            description: w.intl.string(w.t.d6UIii),
            binds: K(B.IWg.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO"
        }, {
            description: w.intl.string(w.t.IcEW06),
            binds: K(B.IWg.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO"
        }, {
            description: w.intl.string(w.t.WN2dsS),
            binds: K(B.IWg.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0
        }, {
            description: w.intl.string(w.t.rUK0kk),
            binds: K(B.IWg.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO"
        }, {
            description: w.intl.string(w.t.vkGkSn),
            binds: K(B.IWg.TOGGLE_HELP),
            group: "MISCELLANEOUS"
        }, {
            description: w.intl.string(w.t.FJvZ87),
            binds: K(B.IWg.FOCUS_SEARCH),
            group: "MISCELLANEOUS"
        }, {
            description: w.intl.string(w.t["FiWl/T"]),
            binds: K(B.IWg.OPEN_CONTEXT_MENU),
            group: "MISCELLANEOUS"
        }, {
            description: w.intl.string(w.t.HnNtEI),
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0
        }, {
            description: w.intl.string(w.t.fsBWmS),
            binds: ["e"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.xwMqD7),
            binds: ["backspace"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.CvQ18w),
            binds: ["p"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.lfIHs4),
            binds: ["plus"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t["5IEsGx"]),
            binds: ["r"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.zSyDdA),
            binds: ["f"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.yGLjXF),
            binds: ["s"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.JrGD7E),
            binds: ["mod+c"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.RpE9k7),
            binds: ["alt+enter"],
            group: "MESSAGE"
        }, {
            description: w.intl.string(w.t.rrYBEu),
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0
        }, {
            description: w.intl.string(w.t.z9c6mt),
            binds: K(B.IWg.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS"
        }],
        {
            enabled: t,
            inInbox: n
        } = r.A.getConfig({
            location: "keybinds"
        });
    return t && !n && e.push({
        description: w.intl.string(w.t.IWNSoH),
        binds: K(B.IWg.TOGGLE_FOR_LATER),
        group: "CHAT"
    }), e
}
let X = 21552 == n.j ? z : null