/** chunk id: 900686 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    s = n(522579),
    l = n(77729),
    a = n(723702);
class r extends i.Component {
    getFileContents() {
        let {
            fileContents: e
        } = this.props;
        return "function" == typeof e && (e = e()), e
    }
    handleFileDownload = e => {
        e.preventDefault();
        let t = this.getFileContents(),
            {
                fileName: n,
                onDownload: i
            } = this.props;
        a.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), i?.()
    };
    downloadNative(e, t) {
        l.A.fileManager.saveWithDialog(e, t)
    }
    downloadHtml5(e, t) {
        let n = new Blob([e], {
            type: this.props.contentType
        });
        (0, s.saveAs)(n, t)
    }
    render() {
        let {
            children: e
        } = this.props, t = i.Children.only(e);
        return i.cloneElement(t, {
            onClick: this.handleFileDownload
        })
    }
}