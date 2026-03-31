/** chunk id: 915967 params = (module,exports,require) **/
n.d(t, {
    Ay: () => X,
    Bx: () => Y,
    Gm: () => F,
    Q_: () => W,
    zF: () => k,
    zR: () => z
}), n(321073);
var i, r = n(966597),
    s = n(774603),
    a = n(430086),
    l = n(394318),
    o = n(303757),
    d = n(830004),
    _ = n(434728),
    c = n(308494),
    u = n(64460),
    A = n(92960),
    E = n(739008),
    g = n(314519),
    I = n(198168),
    h = n(799592),
    C = n(675704),
    p = n(806964),
    m = n(552049),
    S = n(877991),
    T = n(332779),
    b = n(187521),
    f = n(568765),
    N = n(904828),
    L = n(251494),
    O = n(82038),
    y = n(14214),
    G = n(151199),
    R = n(144353),
    U = n(535527),
    D = n(46647),
    P = n(512513),
    v = n(910492),
    M = n(416092),
    x = n(801796),
    V = n(344731),
    w = n(58841),
    H = n(406975),
    B = n(652215),
    j = n(985018),
    W = ((i = {}).NAVIGATION = "NAVIGATION", i.CHAT = "CHAT", i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", i.MISCELLANEOUS = "MISCELLANEOUS", i.MESSAGE = "MESSAGE", i.DND = "DND", i);

function F(e) {
    switch (e) {
        case "NAVIGATION":
            return j.intl.string(j.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return j.intl.string(j.t.bI8F5u);
        case "CHAT":
            return j.intl.string(j.t.hDhbb3);
        case "MISCELLANEOUS":
            return j.intl.string(j.t.cBdwqs);
        case "MESSAGE":
            return j.intl.string(j.t["5fpmX9"]);
        case "DND":
            return j.intl.string(j.t["69j6+4"])
    }
}

function k(e) {
    switch (e) {
        case "MESSAGE":
            return j.intl.string(j.t.iepGDn);
        case "DND":
            return j.intl.string(j.t.LBsB0a);
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
    [B.IWg.SERVER_NEXT]: N.yx,
    [B.IWg.SERVER_PREV]: N.yv,
    [B.IWg.CHANNEL_NEXT]: a.kF,
    [B.IWg.CHANNEL_PREV]: a.Oc,
    [B.IWg.NAVIGATE_BACK]: a.GY,
    [B.IWg.NAVIGATE_FORWARD]: a.M$,
    [B.IWg.UNREAD_NEXT]: x.mH,
    [B.IWg.UNREAD_PREV]: x.US,
    [B.IWg.MENTION_CHANNEL_NEXT]: x.BD,
    [B.IWg.MENTION_CHANNEL_PREV]: x.X8,
    [B.IWg.TOGGLE_PREVIOUS_GUILD]: a.Fv,
    [B.IWg.JUMP_TO_GUILD]: u.J,
    [B.IWg.SUBMIT]: L.X,
    [B.IWg.TEXTAREA_FOCUS]: O.c,
    [B.IWg.MARK_CHANNEL_READ]: A.Df,
    [B.IWg.MARK_SERVER_READ]: E.P,
    [B.IWg.TOGGLE_CHANNEL_PINS]: R.O,
    [B.IWg.TOGGLE_FOR_LATER]: U.K,
    [B.IWg.TOGGLE_INBOX]: v.q,
    [B.IWg.MARK_TOP_INBOX_CHANNEL_READ]: v.O,
    [B.IWg.TOGGLE_USERS]: M.U,
    [B.IWg.TOGGLE_HELP]: D.x,
    [B.IWg.VIBE_WITH_WUMPUS]: w.y,
    [B.IWg.TOGGLE_MUTE]: y.VT,
    [B.IWg.TOGGLE_DEAFEN]: y.rR,
    [B.IWg.TOGGLE_CATEGORY_COLLAPSED]: G.y,
    [B.IWg.SEARCH_SOUNDBOARD]: b.A,
    [B.IWg.SCROLL_UP]: m.U5,
    [B.IWg.SCROLL_DOWN]: m.fz,
    [B.IWg.QUICKSWITCHER_SHOW]: C.R,
    [B.IWg.CREATE_DM_GROUP]: l.X,
    [B.IWg.SEARCH_EMOJIS]: S.L,
    [B.IWg.SEARCH_GIFS]: T.T,
    [B.IWg.SEARCH_STICKERS]: f.w,
    [B.IWg.TOGGLE_HOTKEYS]: P.z,
    [B.IWg.JUMP_TO_FIRST_UNREAD]: g.s,
    [B.IWg.CREATE_GUILD]: o.$,
    [B.IWg.UPLOAD_FILE]: V.T,
    [B.IWg.RETURN_TO_AUDIO_CHANNEL]: p.u,
    [B.IWg.CALL_ACCEPT]: s.Yo,
    [B.IWg.CALL_START]: s.OX,
    [B.IWg.FOCUS_SEARCH]: _.O,
    [B.IWg.JUMP_TO_CURRENT_CALL]: c.s,
    [B.IWg.ZOOM_IN]: H.Ur,
    [B.IWg.ZOOM_OUT]: H.hU,
    [B.IWg.ZOOM_RESET]: H.O$,
    [B.IWg.OPEN_APP_DIRECTORY]: I.N,
    [B.IWg.BROWSER_DEVTOOLS]: d.i,
    [B.IWg.OPEN_CONTEXT_MENU]: h.b
};

function Y() {
    let e = [{
            description: j.intl.string(j.t.bx4Uyz),
            binds: K(B.IWg.SERVER_PREV, B.IWg.SERVER_NEXT),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t["+Wem6h"]),
            binds: K(B.IWg.CHANNEL_PREV, B.IWg.CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t["+2fcdz"]),
            binds: K(B.IWg.NAVIGATE_BACK, B.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t.eVmj1H),
            binds: K(B.IWg.UNREAD_PREV, B.IWg.UNREAD_NEXT),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t.EcqS7Y),
            binds: K(B.IWg.MENTION_CHANNEL_PREV, B.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t["4I3pwW"]),
            binds: K(B.IWg.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t.Bqss72),
            binds: K(B.IWg.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t.yYsRlD),
            binds: K(B.IWg.QUICKSWITCHER_SHOW),
            group: "NAVIGATION"
        }, {
            description: j.intl.string(j.t.O7ouXO),
            binds: K(B.IWg.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0
        }, {
            description: j.intl.string(j.t.Lns0Fc),
            binds: ["mod+d"],
            group: "DND"
        }, {
            description: j.intl.string(j.t.dmMqay),
            binds: ["up", "down"],
            group: "DND"
        }, {
            description: j.intl.string(j.t["cs/HVH"]),
            binds: ["spacebar", "enter"],
            group: "DND"
        }, {
            description: j.intl.string(j.t["1ioMJQ"]),
            binds: ["esc"],
            group: "DND",
            groupEnd: !0
        }, {
            description: j.intl.string(j.t.UaXAPx),
            binds: K(B.IWg.MARK_SERVER_READ),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t["5X9vFj"]),
            binds: K(B.IWg.MARK_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t.wxQFsl),
            binds: K(B.IWg.CREATE_DM_GROUP),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t["C+XV7f"]),
            binds: K(B.IWg.TOGGLE_CHANNEL_PINS),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t["Q+YV/T"]),
            binds: K(B.IWg.TOGGLE_INBOX),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t["YEjV+W"]),
            binds: K(B.IWg.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t.AcBI9S),
            binds: K(B.IWg.TOGGLE_USERS),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t.JoxNnl),
            binds: K(B.IWg.SEARCH_EMOJIS),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t["3PHxo8"]),
            binds: K(B.IWg.SEARCH_GIFS),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t.YFl7eb),
            binds: K(B.IWg.SEARCH_STICKERS),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t.L3RYYJ),
            binds: K(B.IWg.SCROLL_UP, B.IWg.SCROLL_DOWN),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t["3HAurM"]),
            binds: K(B.IWg.JUMP_TO_FIRST_UNREAD),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t.rrYBEu),
            binds: K(B.IWg.TEXTAREA_FOCUS),
            group: "CHAT"
        }, {
            description: j.intl.string(j.t.sUJlPL),
            binds: K(B.IWg.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0
        }, {
            description: j.intl.string(j.t.tL6eVW),
            binds: K(B.IWg.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO"
        }, {
            description: j.intl.string(j.t["QXe/7T"]),
            binds: K(B.IWg.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO"
        }, {
            description: j.intl.string(j.t.d6UIii),
            binds: K(B.IWg.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO"
        }, {
            description: j.intl.string(j.t.IcEW06),
            binds: K(B.IWg.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO"
        }, {
            description: j.intl.string(j.t.WN2dsS),
            binds: K(B.IWg.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0
        }, {
            description: j.intl.string(j.t.rUK0kk),
            binds: K(B.IWg.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO"
        }, {
            description: j.intl.string(j.t.vkGkSn),
            binds: K(B.IWg.TOGGLE_HELP),
            group: "MISCELLANEOUS"
        }, {
            description: j.intl.string(j.t.FJvZ87),
            binds: K(B.IWg.FOCUS_SEARCH),
            group: "MISCELLANEOUS"
        }, {
            description: j.intl.string(j.t["FiWl/T"]),
            binds: K(B.IWg.OPEN_CONTEXT_MENU),
            group: "MISCELLANEOUS"
        }, {
            description: j.intl.string(j.t.HnNtEI),
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0
        }, {
            description: j.intl.string(j.t.fsBWmS),
            binds: ["e"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.xwMqD7),
            binds: ["backspace"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.CvQ18w),
            binds: ["p"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.lfIHs4),
            binds: ["plus"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t["5IEsGx"]),
            binds: ["r"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.zSyDdA),
            binds: ["f"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.yGLjXF),
            binds: ["s"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.JrGD7E),
            binds: ["mod+c"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.RpE9k7),
            binds: ["alt+enter"],
            group: "MESSAGE"
        }, {
            description: j.intl.string(j.t.rrYBEu),
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0
        }, {
            description: j.intl.string(j.t.z9c6mt),
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
        description: j.intl.string(j.t.IWNSoH),
        binds: K(B.IWg.TOGGLE_FOR_LATER),
        group: "CHAT"
    }), e
}
let X = 21552 == n.j ? z : null