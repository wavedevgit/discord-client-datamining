/** chunk id: 495565 params = (module,exports,require) **/
n.d(t, {
    r: () => s
}), n(321073);
var r = n(64700),
    a = n(575593),
    i = n(985018);
let l = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return i.intl.formatToPlainString(i.t["/0Yndu"], {
            num: e.bundledProducts?.length
        });
        let n = e.bundledProducts ?? [],
            r = [],
            l = !1;
        for (let e of n) switch (e.type) {
            case a.R.AVATAR_DECORATION:
                r.push(i.intl.formatToPlainString(i.t.Ntv9Jt, {
                    itemName: e.name
                }));
                break;
            case a.R.PROFILE_EFFECT:
                r.push(i.intl.formatToPlainString(i.t["3Y8q7a"], {
                    itemName: e.name
                }));
                break;
            case a.R.NAMEPLATE:
                r.push(i.intl.formatToPlainString(i.t["2keXky"], {
                    itemName: e.name
                })), l = !0
        }
        if (l) {
            let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
            return i.intl.formatToPlainString(i.t.Ofrqj6, {
                joinedItems: e
            })
        }
        let s = r.join(" & ");
        return i.intl.formatToPlainString(i.t.Ofrqj6, {
            joinedItems: s
        })
    },
    s = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === a.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = l(e, t);
                    return e.summary.replace("{joinedItems}", n)
                }
                return e.summary
            }
            switch (e?.type) {
                case a.R.AVATAR_DECORATION:
                    return i.intl.string(i.t["3lv7q2"]);
                case a.R.PROFILE_EFFECT:
                    return i.intl.string(i.t.VhJL72);
                case a.R.NAMEPLATE:
                    return i.intl.string(i.t.ik37EZ);
                case a.R.BUNDLE:
                    return l(e, t);
                default:
                    return ""
            }
        }, [e, t])
    }