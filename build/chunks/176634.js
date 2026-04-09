/** chunk id: 176634 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(621466),
    a = n(654108);

function o(e) {
    let {
        onPasteFiles: t,
        onPasteBackgroundText: n
    } = e;
    r.useEffect(() => {
        let e = e => {
            let r = e.clipboardData?.files;
            if (null != r && r.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(r));
            else if (null != n && !(0, a.A)((0, i.BF)(e))) {
                let t = e.clipboardData?.getData("text");
                null != t && (e.preventDefault(), e.stopPropagation(), n(t))
            }
        };
        return document.addEventListener("paste", e, !0), () => {
            document.removeEventListener("paste", e, !0)
        }
    }, [t, n])
}