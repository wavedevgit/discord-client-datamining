package io.sentry.protocol;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.x;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f28741d;

    /* renamed from: e  reason: collision with root package name */
    private String f28742e;

    /* renamed from: i  reason: collision with root package name */
    private String f28743i;

    /* renamed from: o  reason: collision with root package name */
    private x f28744o;

    /* renamed from: p  reason: collision with root package name */
    private x f28745p;

    /* renamed from: q  reason: collision with root package name */
    private String f28746q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28747r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public h a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            String str = null;
            String str2 = null;
            String str3 = null;
            x xVar = null;
            x xVar2 = null;
            String str4 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -964729863:
                        if (o02.equals("associated_event_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -454767501:
                        if (o02.equals("replay_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 116079:
                        if (o02.equals("url")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 947010237:
                        if (o02.equals("contact_email")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 954925063:
                        if (o02.equals("message")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        xVar = new x.a().a(e3Var, iLogger);
                        break;
                    case 1:
                        xVar2 = new x.a().a(e3Var, iLogger);
                        break;
                    case 2:
                        str4 = e3Var.m1();
                        break;
                    case 3:
                        str3 = e3Var.m1();
                        break;
                    case 4:
                        str2 = e3Var.m1();
                        break;
                    case 5:
                        str = e3Var.m1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.p1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            if (str != null) {
                h hVar = new h(str);
                hVar.f28742e = str2;
                hVar.f28743i = str3;
                hVar.f28744o = xVar;
                hVar.f28745p = xVar2;
                hVar.f28746q = str4;
                hVar.f28747r = hashMap;
                return hVar;
            }
            IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"message\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"message\"", illegalStateException);
            throw illegalStateException;
        }
    }

    public h(String str) {
        g(str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (io.sentry.util.y.a(this.f28741d, hVar.f28741d) && io.sentry.util.y.a(this.f28742e, hVar.f28742e) && io.sentry.util.y.a(this.f28743i, hVar.f28743i) && io.sentry.util.y.a(this.f28744o, hVar.f28744o) && io.sentry.util.y.a(this.f28745p, hVar.f28745p) && io.sentry.util.y.a(this.f28746q, hVar.f28746q) && io.sentry.util.y.a(this.f28747r, hVar.f28747r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f28741d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f28741d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28741d, this.f28742e, this.f28743i, this.f28744o, this.f28745p, this.f28746q, this.f28747r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("message").f(this.f28741d);
        if (this.f28742e != null) {
            f3Var.e("contact_email").f(this.f28742e);
        }
        if (this.f28743i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28743i);
        }
        if (this.f28744o != null) {
            f3Var.e("associated_event_id");
            this.f28744o.serialize(f3Var, iLogger);
        }
        if (this.f28745p != null) {
            f3Var.e("replay_id");
            this.f28745p.serialize(f3Var, iLogger);
        }
        if (this.f28746q != null) {
            f3Var.e("url").f(this.f28746q);
        }
        Map map = this.f28747r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28747r.get(str));
            }
        }
        f3Var.D();
    }

    public String toString() {
        return "Feedback{message='" + this.f28741d + "', contactEmail='" + this.f28742e + "', name='" + this.f28743i + "', associatedEventId=" + this.f28744o + ", replayId=" + this.f28745p + ", url='" + this.f28746q + "', unknown=" + this.f28747r + '}';
    }

    public h(h hVar) {
        this.f28741d = hVar.f28741d;
        this.f28742e = hVar.f28742e;
        this.f28743i = hVar.f28743i;
        this.f28744o = hVar.f28744o;
        this.f28745p = hVar.f28745p;
        this.f28746q = hVar.f28746q;
        this.f28747r = io.sentry.util.c.b(hVar.f28747r);
    }
}
