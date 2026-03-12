/** chunk id: 535762 params = (module,exports,require) **/
n.d(t, {
    A: () => r
}), n(321073);
var i = n(91871),
    s = n.n(i),
    l = n(18108);
class r {
    terms;
    cache;
    cacheScored;
    preprocessed;
    constructor(e) {
        this.terms = e, this.cache = new Map, this.cacheScored = new Map, this.preprocessed = [], e.forEach(e => {
            let [t, n] = e, i = [], s = [], l = new Set;
            n.forEach(e => {
                i.push(e.toLocaleLowerCase()), e.includes(" ") && e.split(/\s+/).forEach(e => {
                    let t = e.toLocaleLowerCase();
                    l.has(t) || (s.push(t), l.add(t))
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
                let [i, l] = n;
                for (let n of l)
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
            }] = e, a = 0;
            r.some(e => e === t) ? a = 1 : s.some(e => e.startsWith(t)) ? a = .95 : r.forEach(e => {
                let n = 0,
                    i = (0, l.g)(t, e);
                i >= .8 && (n = i), a = Math.max(a, n)
            }), a > 0 && i.push({
                setting: n,
                score: a
            })
        }), this.cacheScored.set(t, i), i
    }
}