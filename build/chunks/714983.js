/** chunk id: 714983 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => d
});
var n = i(627968),
    s = i(64700),
    a = i(684013),
    l = i(471024),
    r = i(652215);
class o extends s.Component {
    handleNotificationShow = () => {
        let {
            id: e,
            props: {
                onNotificationShow: t
            }
        } = this.props.notification;
        t(e)
    };
    handleDismissClick = e => {
        let {
            id: t,
            props: {
                onDismissClick: i
            }
        } = this.props.notification;
        a.A.updateNotificationStatus(t), i?.(e, t)
    };
    handleNotificationClick = e => {
        let {
            id: t,
            props: {
                onNotificationClick: i
            }
        } = this.props.notification;
        null != i && i(e, t)
    };
    handleConfirmClick = e => {
        let {
            id: t,
            props: {
                onConfirmClick: i
            }
        } = this.props.notification;
        null != i && i(e, t)
    };
    handleCancelClick = e => {
        let {
            id: t,
            props: {
                onCancelClick: i
            }
        } = this.props.notification;
        null != i && i(e, t)
    };
    renderFooter = e => {
        let {
            id: t,
            props: {
                renderFooter: i
            }
        } = this.props.notification, n = this.props.locked;
        return null != i ? i(e, t, n) : null
    };
    getStyle() {
        let e, t, i, n, {
            props: {
                position: s,
                zIndex: a
            }
        } = this;
        switch (s) {
            case r.G6Q.TOP_LEFT:
            case r.G6Q.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0
        }
        switch (s) {
            case r.G6Q.BOTTOM_LEFT:
            case r.G6Q.BOTTOM_RIGHT:
                i = 0;
                break;
            default:
                n = 0
        }
        return {
            left: e,
            right: t,
            bottom: i,
            top: n,
            zIndex: a
        }
    }
    render() {
        let {
            props: {
                locked: e,
                notification: {
                    props: {
                        renderFooter: t,
                        onNotificationShow: i,
                        onDismissClick: s,
                        onNotificationClick: a,
                        onConfirmClick: r,
                        onCancelClick: o,
                        ...d
                    }
                }
            }
        } = this;
        return (0, n.jsx)(l.Ay, {
            ...d,
            locked: e,
            onNotificationShow: this.handleNotificationShow,
            onDismissClick: null != s ? this.handleDismissClick : void 0,
            onNotificationClick: null != a ? this.handleNotificationClick : null,
            onConfirmClick: null != r ? this.handleConfirmClick : null,
            onCancelClick: null != o ? this.handleCancelClick : null,
            renderFooter: this.renderFooter,
            expand: !e
        })
    }
}
let d = o