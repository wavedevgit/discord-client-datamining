/** chunk id: 884392 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(412703),
    s = n(311907),
    r = n(397927),
    a = n(829219),
    o = n(859703),
    d = n(890687),
    c = n(590202),
    u = n(792620),
    _ = n(545986),
    m = n(654487),
    h = n(985018);

function p(e) {
    switch (e) {
        case l.n.ACHIEVEMENT_IN_ACTIVITY:
        case l.n.PLAY_ACTIVITY:
        case l.n.WATCH_VIDEO:
            return c.Cy.START_QUEST;
        default:
            return c.Cy.ACCEPT_QUEST
    }
}
let g = function(e) {
    var t;
    let {
        quest: n,
        taskType: c,
        size: g = "sm",
        variant: A = "primary",
        preClickCallback: x,
        analyticsCtxQuestContent: f,
        analyticsCtxSourceQuestContent: C,
        analyticsCtxQuestContentPosition: E,
        analyticsCtxQuestContentRowIndex: I
    } = e, v = {
        questContent: f,
        questContentCTA: p(c),
        sourceQuestContent: C,
        questContentPosition: E,
        questContentRowIndex: I
    }, b = n.id, {
        isEnrolling: T
    } = (0, s.cf)([o.A], () => ({
        isEnrolling: o.A.isEnrolling(b)
    }), [b]), N = (0, _.Oz)(n), S = function(e, t) {
        let {
            launchInGameActivity: n
        } = (0, d.zW)(t);
        if ((0, u.K$)(t)) return () => {
            (0, _.Fy)(t)
        };
        switch (e) {
            case l.n.ACHIEVEMENT_IN_ACTIVITY:
            case l.n.PLAY_ACTIVITY:
                return () => {
                    n()
                };
            default:
                return null
        }
    }(c, n), y = function(e, t) {
        let {
            features: n
        } = t.config;
        switch (e) {
            case l.n.WATCH_VIDEO:
                return h.intl.formatToPlainString(h.t.GNsKiW, {
                    remainTime: (0, u.xm)((0, u.Yh)(t))
                });
            case l.n.ACHIEVEMENT_IN_ACTIVITY:
                return h.intl.string(h.t["hRIVy+"]);
            case l.n.PLAY_ACTIVITY:
                if (n.includes(m.Li.CLOUD_GAMING_ACTIVITY)) return h.intl.string(h.t["+qoymD"]);
                return h.intl.string(h.t["Ie9++s"]);
            default:
                return h.intl.string(h.t.kUQLMJ)
        }
    }(c, n), j = (t = S ?? void 0, c === l.n.WATCH_VIDEO ? async () => {
        await (0, _.e0)(n, {
            questContent: v.questContent,
            questContentCTA: v.questContentCTA,
            sourceQuestContent: v.sourceQuestContent,
            sourceQuestContentCTA: p(c),
            questContentPosition: v.questContentPosition,
            questContentRowIndex: v.questContentRowIndex
        })
    }: async () => {
        await (0, a.Oy)(n.id, {
            questContent: v.questContent,
            questContentCTA: v.questContentCTA,
            sourceQuestContent: v.sourceQuestContent,
            questContentPosition: v.questContentPosition,
            questContentRowIndex: v.questContentRowIndex
        }), t?.()
    });
    return (0, i.jsx)(r.Button, {
        size: g,
        loading: T,
        variant: A,
        onClick: () => {
            x?.(), j()
        },
        text: y,
        icon: N,
        fullWidth: !0
    })
}