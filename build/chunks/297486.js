/** chunk id: 297486, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ch: () => R,
    SD: () => N,
    dn: () => w,
    hg: () => P
});
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(436857),
    l = n(212245),
    c = n(849269),
    u = n(869003),
    d = n(58149),
    f = n(264322),
    p = n(392054),
    _ = n(999443),
    h = n(542664),
    m = n(551965),
    g = n(203982),
    E = n(211401),
    y = n(989837),
    b = n(500049),
    O = n(615807),
    v = n(652215),
    A = n(985018);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}
let T = function(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }(function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                I(e, t, n[t])
            })
        }
        return e
    }({}, h.A.RULES.commandMention), {
        parse: (e, t, n) => ({
            content: h.A.RULES.commandMention.parse(e, t, n).content
        })
    }),
    C = a().pick((0, m.A)([h.A.RULES, {
        commandMention: T
    }, (0, _.A)({
        enableBuildOverrides: !1,
        enableEmojiClick: !1
    })]), ["commandMention", "customEmoji", "em", "emoji", "emoticon", "highlight", "inlineCode", "looseEm", "s", "strong", "text", "timestamp", "u", "spoiler"]),
    N = s.aV(C);

function w(e) {
    let {
        context: t,
        application: n,
        location: i,
        sectionName: a,
        commandName: s,
        autoDismissOnClick: _ = !0,
        launchingComponentId: h,
        submitting: m = !1,
        fetchesApplication: g = !0,
        onConfirmActivityLaunchChecksAlertOpen: I
    } = e, S = (0, l.p)(), T = (0, c.Hq)({
        context: t,
        applicationId: n.id,
        fetchesApplication: g
    }), C = (0, O.G)(T), N = (0, o.bG)([y.A], () => y.A.entrypoint()), w = r.useMemo(() => {
        var e, r, i;
        if ("channel" !== t.type) return null != (e = null == (r = n.bot) ? void 0 : r.id) ? e : null == (i = (0, f.Sx)(t, n.id).descriptor) ? void 0 : i.botId
    }, [t, n.id, n.bot]), R = (0, c.wK)({
        application: n,
        botUserIdForAppDM: w,
        embeddedActivitiesManager: u.A,
        context: t,
        locationObject: S.location,
        onActivityItemSelectedProp: e => {
            let {
                applicationId: t
            } = e;
            _ && E.k(b.Se.ACTIVITY), (0, d.zV)(v.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                location: i,
                application_id: t,
                section_name: a,
                action: C,
                source: N
            })
        },
        launchingComponentId: h,
        commandOrigin: p.iw.APPLICATION_LAUNCHER,
        sectionName: a,
        source: N,
        fetchesApplication: g,
        onConfirmActivityLaunchChecksAlertOpen: I
    }), P = "primary", D = null != s ? s : A.intl.string(A.t.zKX8Nu);
    return C === c.o6.JOIN ? (P = "active", D = A.intl.string(A.t.d9PsMj)) : C !== c.o6.LEAVE || m || (P = "critical-primary", D = A.intl.string(A.t["Hi1/aQ"])), {
        onActivityItemSelected: R,
        activityAction: C,
        buttonVariant: P,
        buttonText: D
    }
}

function R(e, t) {
    let n = y.A.entrypoint(),
        a = r.useMemo(() => (0, i.debounce)((e, t) => {
            (0, d.zV)(v.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                type: e,
                source: t
            })
        }, 400, {
            leading: !1,
            trailing: !0
        }), []);
    r.useEffect(() => {
        null != e && a(e, n)
    }, [e, t, n, a])
}

function P(e) {
    g._.dispatchToLastSubscribed(v.jej.OPEN_APP_LAUNCHER, {
        applicationId: e
    })
}