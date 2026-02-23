/** chunk id: 535762, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
}), n(321073);
var i = n(91871),
    s = n.n(i),
    a = n(18108);
class r {
    terms;
    cache;
    cacheScored;
    preprocessed;
    constructor(e) {
        this.terms = e, this.cache = new Map, this.cacheScored = new Map, this.preprocessed = [], e.forEach(e => {
            let [t, n] = e, i = [], s = [], a = new Set;
            n.forEach(e => {
                i.push(e.toLocaleLowerCase()), e.includes(" ") && e.split(/\s+/).forEach(e => {
                    let t = e.toLocaleLowerCase();
                    a.has(t) || (s.push(t), a.add(t))
                })
            }), this.preprocessed.push([t, {
                normalizedSearchTerms: i,
                normalizedTokens: s
            }])
        })
    }
    search(e) {
        return new Promise(t => {
            t(this.getMatchingSettings(e))
        })
    }
    getMatchingSettings(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = [];
            return this.terms.forEach(n => {
                let [i, a] = n;
                for (let n of a)
                    if (s()(e.toLowerCase(), n.toLowerCase())) {
                        t.push(i);
                        break
                    }
            }), this.cache.set(e, t), t
        }
    }
    getScoredSearchResults(e) {
        let t = e.trim().toLocaleLowerCase();
        if (0 === t.length) return [];
        let n = this.cacheScored.get(t);
        if (null != n) return n;
        let i = [];
        return this.preprocessed.forEach(e => {
            let [n, {
                normalizedTokens: s,
                normalizedSearchTerms: r
            }] = e, l = 0;
            r.some(e => e === t) ? l = 1 : s.some(e => e.startsWith(t)) ? l = .95 : r.forEach(e => {
                let n = 0,
                    i = (0, a.g)(t, e);
                i >= .8 && (n = i), l = Math.max(l, n)
            }), l > 0 && i.push({
                setting: n,
                score: l
            })
        }), this.cacheScored.set(t, i), i
    }
}