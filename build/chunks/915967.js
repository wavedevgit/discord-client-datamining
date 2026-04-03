/** chunk id: 915967 params = (module,exports,require) **/
n.d(t, {
    Ay: () => X,
    Bx: () => Y,
    Gm: () => W,
    Q_: () => j,
    zF: () => k,
    zR: () => z
}), n(321073);
var i, r = n(966597),
    a = n(774603),
    l = n(430086),
    s = n(394318),
    o = n(303757),
    d = n(830004),
    c = n(434728),
    _ = n(308494),
    u = n(64460),
    A = n(92960),
    E = n(739008),
    I = n(314519),
    g = n(198168),
    h = n(799592),
    C = n(675704),
    p = n(806964),
    f = n(552049),
    m = n(877991),
    S = n(332779),
    b = n(187521),
    T = n(568765),
    N = n(904828),
    L = n(251494),
    O = n(82038),
    R = n(14214),
    y = n(151199),
    G = n(144353),
    U = n(535527),
    v = n(46647),
    D = n(512513),
    P = n(910492),
    M = n(416092),
    x = n(801796),
    V = n(344731),
    w = n(58841),
    H = n(406975),
    F = n(652215),
    B = n(985018),
    j = ((i = {}).NAVIGATION = "NAVIGATION", i.CHAT = "CHAT", i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", i.MISCELLANEOUS = "MISCELLANEOUS", i.MESSAGE = "MESSAGE", i.DND = "DND", i);

function W(e) {
    switch (e) {
        case "NAVIGATION":
            return B.intl.string(B.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return B.intl.string(B.t.bI8F5u);
        case "CHAT":
            return B.intl.string(B.t.hDhbb3);
        case "MISCELLANEOUS":
            return B.intl.string(B.t.cBdwqs);
        case "MESSAGE":
            return B.intl.string(B.t["5fpmX9"]);
        case "DND":
            return B.intl.string(B.t["69j6+4"])
    }
}

function k(e) {
    switch (e) {
        case "MESSAGE":
            return B.intl.string(B.t.iepGDn);
        case "DND":
            return B.intl.string(B.t.LBsB0a);
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
    [F.IWg.SERVER_NEXT]: N.yx,
    [F.IWg.SERVER_PREV]: N.yv,
    [F.IWg.CHANNEL_NEXT]: l.kF,
    [F.IWg.CHANNEL_PREV]: l.Oc,
    [F.IWg.NAVIGATE_BACK]: l.GY,
    [F.IWg.NAVIGATE_FORWARD]: l.M$,
    [F.IWg.UNREAD_NEXT]: x.mH,
    [F.IWg.UNREAD_PREV]: x.US,
    [F.IWg.MENTION_CHANNEL_NEXT]: x.BD,
    [F.IWg.MENTION_CHANNEL_PREV]: x.X8,
    [F.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
    [F.IWg.JUMP_TO_GUILD]: u.J,
    [F.IWg.SUBMIT]: L.X,
    [F.IWg.TEXTAREA_FOCUS]: O.c,
    [F.IWg.MARK_CHANNEL_READ]: A.Df,
    [F.IWg.MARK_SERVER_READ]: E.P,
    [F.IWg.TOGGLE_CHANNEL_PINS]: G.O,
    [F.IWg.TOGGLE_FOR_LATER]: U.K,
    [F.IWg.TOGGLE_INBOX]: P.q,
    [F.IWg.MARK_TOP_INBOX_CHANNEL_READ]: P.O,
    [F.IWg.TOGGLE_USERS]: M.U,
    [F.IWg.TOGGLE_HELP]: v.x,
    [F.IWg.VIBE_WITH_WUMPUS]: w.y,
    [F.IWg.TOGGLE_MUTE]: R.VT,
    [F.IWg.TOGGLE_DEAFEN]: R.rR,
    [F.IWg.TOGGLE_CATEGORY_COLLAPSED]: y.y,
    [F.IWg.SEARCH_SOUNDBOARD]: b.A,
    [F.IWg.SCROLL_UP]: f.U5,
    [F.IWg.SCROLL_DOWN]: f.fz,
    [F.IWg.QUICKSWITCHER_SHOW]: C.R,
    [F.IWg.CREATE_DM_GROUP]: s.X,
    [F.IWg.SEARCH_EMOJIS]: m.L,
    [F.IWg.SEARCH_GIFS]: S.T,
    [F.IWg.SEARCH_STICKERS]: T.w,
    [F.IWg.TOGGLE_HOTKEYS]: D.z,
    [F.IWg.JUMP_TO_FIRST_UNREAD]: I.s,
    [F.IWg.CREATE_GUILD]: o.$,
    [F.IWg.UPLOAD_FILE]: V.T,
    [F.IWg.RETURN_TO_AUDIO_CHANNEL]: p.u,
    [F.IWg.CALL_ACCEPT]: a.Yo,
    [F.IWg.CALL_START]: a.OX,
    [F.IWg.FOCUS_SEARCH]: c.O,
    [F.IWg.JUMP_TO_CURRENT_CALL]: _.s,
    [F.IWg.ZOOM_IN]: H.Ur,
    [F.IWg.ZOOM_OUT]: H.hU,
    [F.IWg.ZOOM_RESET]: H.O$,
    [F.IWg.OPEN_APP_DIRECTORY]: g.N,
    [F.IWg.BROWSER_DEVTOOLS]: d.i,
    [F.IWg.OPEN_CONTEXT_MENU]: h.b
};

function Y() {
    let e = [{
            description: B.intl.string(B.t.bx4Uyz),
            binds: K(F.IWg.SERVER_PREV, F.IWg.SERVER_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t["+Wem6h"]),
            binds: K(F.IWg.CHANNEL_PREV, F.IWg.CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t["+2fcdz"]),
            binds: K(F.IWg.NAVIGATE_BACK, F.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.eVmj1H),
            binds: K(F.IWg.UNREAD_PREV, F.IWg.UNREAD_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.EcqS7Y),
            binds: K(F.IWg.MENTION_CHANNEL_PREV, F.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t["4I3pwW"]),
            binds: K(F.IWg.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.Bqss72),
            binds: K(F.IWg.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.yYsRlD),
            binds: K(F.IWg.QUICKSWITCHER_SHOW),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.O7ouXO),
            binds: K(F.IWg.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.Lns0Fc),
            binds: ["mod+d"],
            group: "DND"
        }, {
            description: B.intl.string(B.t.dmMqay),
            binds: ["up", "down"],
            group: "DND"
        }, {
            description: B.intl.string(B.t["cs/HVH"]),
            binds: ["spacebar", "enter"],
            group: "DND"
        }, {
            description: B.intl.string(B.t["1ioMJQ"]),
            binds: ["esc"],
            group: "DND",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.UaXAPx),
            binds: K(F.IWg.MARK_SERVER_READ),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["5X9vFj"]),
            binds: K(F.IWg.MARK_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.wxQFsl),
            binds: K(F.IWg.CREATE_DM_GROUP),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["C+XV7f"]),
            binds: K(F.IWg.TOGGLE_CHANNEL_PINS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["Q+YV/T"]),
            binds: K(F.IWg.TOGGLE_INBOX),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["YEjV+W"]),
            binds: K(F.IWg.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.AcBI9S),
            binds: K(F.IWg.TOGGLE_USERS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.JoxNnl),
            binds: K(F.IWg.SEARCH_EMOJIS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["3PHxo8"]),
            binds: K(F.IWg.SEARCH_GIFS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.YFl7eb),
            binds: K(F.IWg.SEARCH_STICKERS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.L3RYYJ),
            binds: K(F.IWg.SCROLL_UP, F.IWg.SCROLL_DOWN),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["3HAurM"]),
            binds: K(F.IWg.JUMP_TO_FIRST_UNREAD),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.rrYBEu),
            binds: K(F.IWg.TEXTAREA_FOCUS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.sUJlPL),
            binds: K(F.IWg.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.tL6eVW),
            binds: K(F.IWg.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t["QXe/7T"]),
            binds: K(F.IWg.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.d6UIii),
            binds: K(F.IWg.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.IcEW06),
            binds: K(F.IWg.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.WN2dsS),
            binds: K(F.IWg.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.rUK0kk),
            binds: K(F.IWg.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.vkGkSn),
            binds: K(F.IWg.TOGGLE_HELP),
            group: "MISCELLANEOUS"
        }, {
            description: B.intl.string(B.t.FJvZ87),
            binds: K(F.IWg.FOCUS_SEARCH),
            group: "MISCELLANEOUS"
        }, {
            description: B.intl.string(B.t["FiWl/T"]),
            binds: K(F.IWg.OPEN_CONTEXT_MENU),
            group: "MISCELLANEOUS"
        }, {
            description: B.intl.string(B.t.HnNtEI),
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.fsBWmS),
            binds: ["e"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.xwMqD7),
            binds: ["backspace"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.CvQ18w),
            binds: ["p"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.lfIHs4),
            binds: ["plus"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t["5IEsGx"]),
            binds: ["r"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.zSyDdA),
            binds: ["f"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.yGLjXF),
            binds: ["s"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.JrGD7E),
            binds: ["mod+c"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.RpE9k7),
            binds: ["alt+enter"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.rrYBEu),
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.z9c6mt),
            binds: K(F.IWg.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS"
        }],
        {
            enabled: t,
            inInbox: n
        } = r.A.getConfig({
            location: "keybinds"
        });
    return t && !n && e.push({
        description: B.intl.string(B.t.IWNSoH),
        binds: K(F.IWg.TOGGLE_FOR_LATER),
        group: "CHAT"
    }), e
}
let X = 21552 == n.j ? z : null