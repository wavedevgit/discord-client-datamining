/** Chunk was on web.js **/
/** chunk id: 236899, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => L
}), n(896048), n(747238), n(812715), n(638769);
var i, a = n(311907),
    o = n(73153),
    s = n(49463),
    l = n(215619),
    c = n(968011),
    u = n(369487);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let f = 5,
    p = 250,
    _ = .001,
    h = .01,
    m = 10,
    g = new Map,
    E = 0;

function y(e) {
    return e.replace(/[^\w\s]|\b\d+\b/g, "")
}

function b(e) {
    return y(e).replace(/(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g, "").split(/\s+/)
}

function O(e) {
    return Array.from(e.entries()).sort((e, t) => t[1] - e[1])
}

function v(e, t) {
    if (e.size <= t) return;
    let n = O(e);
    e.clear();
    for (let r = 0; r < t; r++) {
        let [t, i] = n[r];
        e.set(t, i)
    }
}

function A() {
    let e = 1e3,
        t = 5e3,
        n = .05;
    return E < 1e3 || Math.random() < (1 - n) * Math.max(0, 1 - (E - e) / (t - e)) + n
}

function I(e) {
    null == r && (r = l.M.createEstimate(_, h));
    let t = !1;
    for (let n of e)
        if (A())
            for (let e of b(n.content.toLowerCase())) {
                if (0 === e.length || e.length > f) continue;
                r.update(e);
                let n = r.query(e);
                g.set(e, n), n > E && (E = n), t = !0
            }
    v(g, p), t && D.emitChange()
}

function S() {
    let e = u.R.getCurrentConfig({
            location: "WordFrequencyStore"
        }, {
            autoTrackExposure: !0
        }).enabled,
        t = (0, c.sA)("WordFrequencyStore", {
            autoTrackExposure: !1
        }).enabled;
    return e || t
}

function T() {
    return !!s.A.hasLoadedExperiments && u.R.getCurrentConfig({
        location: "WordFrequencyStore"
    }, {
        autoTrackExposure: !1
    }).resetDataIfUnused
}
let C = () => {
    r = void 0, g.clear(), E = 0
};

function N(e) {
    return S() ? (requestIdleCallback(() => {
        I(e)
    }), !1) : !!T() && g.size > 0 && (C(), !0)
}
let w = e => {
        let {
            messages: t
        } = e;
        return N(t)
    },
    R = e => {
        let {
            message: t
        } = e;
        return N([t])
    };
class P extends(i = a.Ay.PersistedStore) {
    initialize(e) {
        if (this.waitFor(s.A), null != e) {
            var t;
            if (e.wordSketchData) try {
                e.wordSketchData && (r = l.M.fromJSON(e.wordSketchData))
            } catch (e) {
                r = void 0
            }
            g = new Map(null != (t = e.wordCounts) ? t : [])
        }
        let n = O(g);
        if (n.length > 0) {
            let [e, t] = n[0];
            E = t
        }
    }
    getState() {
        return {
            wordCounts: O(g),
            wordSketchData: null == r ? void 0 : r.toJSON()
        }
    }
    getMaxWordCount() {
        return E
    }
    getAllWordsSorted() {
        return O(g)
    }
    isFrequentlyUsedWord(e) {
        let t = g.get(e.toLowerCase());
        return null != t && t > m
    }
}
d(P, "displayName", "WordFrequencyStore"), d(P, "persistKey", "WordFrequencyStore");
let D = new P(o.h, {
        LOAD_MESSAGES_SUCCESS: w,
        MESSAGE_CREATE: R,
        DEV_TOOLS_WORD_FREQUENCY_RESET: C
    }),
    L = D