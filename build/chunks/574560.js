/** chunk id: 574560, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(311907),
    s = n(73153);
let l = {
        gameUpsellsDismissal: {}
    },
    r = {
        ...l
    };
class a extends i.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        r = e ?? r
    }
    getState() {
        return r
    }
    getGameUpsellDismissal(e, t) {
        return r.gameUpsellsDismissal[t]?.[e] ?? null
    }
}
let o = new a(s.h, {
    LOGOUT: function() {
        r = {
            ...l
        }
    },
    GAME_UPSELL_DISMISS: function(e) {
        let {
            applicationId: t,
            dismissedAt: n,
            dismissibleContent: i
        } = e, s = r.gameUpsellsDismissal[i]?.[t], l = null != s ? s.timesDismissed + 1 : 1;
        r = {
            gameUpsellsDismissal: {
                ...r.gameUpsellsDismissal,
                [i]: {
                    ...r.gameUpsellsDismissal[i],
                    [t]: {
                        dismissedAt: n,
                        timesDismissed: l
                    }
                }
            }
        }
    }
})