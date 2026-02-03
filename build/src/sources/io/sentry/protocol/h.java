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
    private String f30291d;

    /* renamed from: e  reason: collision with root package name */
    private String f30292e;

    /* renamed from: i  reason: collision with root package name */
    private String f30293i;

    /* renamed from: o  reason: collision with root package name */
    private x f30294o;

    /* renamed from: p  reason: collision with root package name */
    private x f30295p;

    /* renamed from: q  reason: collision with root package name */
    private String f30296q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30297r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public h a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            String str = null;
            String str2 = null;
            String str3 = null;
            x xVar = null;
            x xVar2 = null;
            String str4 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -964729863:
                        if (l02.equals("associated_event_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -454767501:
                        if (l02.equals("replay_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 116079:
                        if (l02.equals("url")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 947010237:
                        if (l02.equals("contact_email")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 954925063:
                        if (l02.equals("message")) {
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
                        str4 = e3Var.r1();
                        break;
                    case 3:
                        str3 = e3Var.r1();
                        break;
                    case 4:
                        str2 = e3Var.r1();
                        break;
                    case 5:
                        str = e3Var.r1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
            if (str != null) {
                h hVar = new h(str);
                hVar.f30292e = str2;
                hVar.f30293i = str3;
                hVar.f30294o = xVar;
                hVar.f30295p = xVar2;
                hVar.f30296q = str4;
                hVar.f30297r = hashMap;
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
        if (io.sentry.util.y.a(this.f30291d, hVar.f30291d) && io.sentry.util.y.a(this.f30292e, hVar.f30292e) && io.sentry.util.y.a(this.f30293i, hVar.f30293i) && io.sentry.util.y.a(this.f30294o, hVar.f30294o) && io.sentry.util.y.a(this.f30295p, hVar.f30295p) && io.sentry.util.y.a(this.f30296q, hVar.f30296q) && io.sentry.util.y.a(this.f30297r, hVar.f30297r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f30291d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f30291d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30291d, this.f30292e, this.f30293i, this.f30294o, this.f30295p, this.f30296q, this.f30297r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("message").f(this.f30291d);
        if (this.f30292e != null) {
            f3Var.e("contact_email").f(this.f30292e);
        }
        if (this.f30293i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30293i);
        }
        if (this.f30294o != null) {
            f3Var.e("associated_event_id");
            this.f30294o.serialize(f3Var, iLogger);
        }
        if (this.f30295p != null) {
            f3Var.e("replay_id");
            this.f30295p.serialize(f3Var, iLogger);
        }
        if (this.f30296q != null) {
            f3Var.e("url").f(this.f30296q);
        }
        Map map = this.f30297r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30297r.get(str));
            }
        }
        f3Var.y();
    }

    public String toString() {
        return "Feedback{message='" + this.f30291d + "', contactEmail='" + this.f30292e + "', name='" + this.f30293i + "', associatedEventId=" + this.f30294o + ", replayId=" + this.f30295p + ", url='" + this.f30296q + "', unknown=" + this.f30297r + '}';
    }

    public h(h hVar) {
        this.f30291d = hVar.f30291d;
        this.f30292e = hVar.f30292e;
        this.f30293i = hVar.f30293i;
        this.f30294o = hVar.f30294o;
        this.f30295p = hVar.f30295p;
        this.f30296q = hVar.f30296q;
        this.f30297r = io.sentry.util.c.b(hVar.f30297r);
    }
}
