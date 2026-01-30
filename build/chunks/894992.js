/** chunk id: 894992, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(517846),
    i = n(439372),
    a = n(236698),
    o = n(859703);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class l extends i.A {
    _terminate() {
        this.questCompletionStates.clear()
    }
    constructor(...e) {
        super(...e), s(this, "questCompletionStates", new Map), s(this, "handleQuestStoreChange", () => {
            let e = o.A.quests;
            e.forEach(e => {
                this.checkQuestCompletion(e.id, e)
            });
            let t = new Set(e.keys());
            for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e)
        }), s(this, "checkQuestCompletion", (e, t) => {
            var n, r;
            let i = null != (n = null == (r = t.userStatus) ? void 0 : r.completedAt) ? n : null;
            this.questCompletionStates.has(e) && null == this.questCompletionStates.get(e) && null != i && this.onQuestCompleted(e), this.questCompletionStates.set(e, i)
        }), s(this, "onQuestCompleted", e => {
            (0, a.hs)(r.w.QUEST_COMPLETED, {
                quest_id: e
            })
        }), s(this, "stores", new Map([
            [o.A, this.handleQuestStoreChange]
        ])), s(this, "actions", {
            LOGOUT: () => {
                this.questCompletionStates.clear()
            }
        })
    }
}
let c = new l