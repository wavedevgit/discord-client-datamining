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
    private String f29349d;

    /* renamed from: e  reason: collision with root package name */
    private String f29350e;

    /* renamed from: i  reason: collision with root package name */
    private String f29351i;

    /* renamed from: o  reason: collision with root package name */
    private x f29352o;

    /* renamed from: p  reason: collision with root package name */
    private x f29353p;

    /* renamed from: q  reason: collision with root package name */
    private String f29354q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29355r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public h a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            String str = null;
            String str2 = null;
            String str3 = null;
            x xVar = null;
            x xVar2 = null;
            String str4 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -964729863:
                        if (m02.equals("associated_event_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -454767501:
                        if (m02.equals("replay_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 116079:
                        if (m02.equals("url")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 947010237:
                        if (m02.equals("contact_email")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 954925063:
                        if (m02.equals("message")) {
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
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.z();
            if (str != null) {
                h hVar = new h(str);
                hVar.f29350e = str2;
                hVar.f29351i = str3;
                hVar.f29352o = xVar;
                hVar.f29353p = xVar2;
                hVar.f29354q = str4;
                hVar.f29355r = hashMap;
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
        if (io.sentry.util.y.a(this.f29349d, hVar.f29349d) && io.sentry.util.y.a(this.f29350e, hVar.f29350e) && io.sentry.util.y.a(this.f29351i, hVar.f29351i) && io.sentry.util.y.a(this.f29352o, hVar.f29352o) && io.sentry.util.y.a(this.f29353p, hVar.f29353p) && io.sentry.util.y.a(this.f29354q, hVar.f29354q) && io.sentry.util.y.a(this.f29355r, hVar.f29355r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f29349d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f29349d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29349d, this.f29350e, this.f29351i, this.f29352o, this.f29353p, this.f29354q, this.f29355r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("message").f(this.f29349d);
        if (this.f29350e != null) {
            f3Var.e("contact_email").f(this.f29350e);
        }
        if (this.f29351i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29351i);
        }
        if (this.f29352o != null) {
            f3Var.e("associated_event_id");
            this.f29352o.serialize(f3Var, iLogger);
        }
        if (this.f29353p != null) {
            f3Var.e("replay_id");
            this.f29353p.serialize(f3Var, iLogger);
        }
        if (this.f29354q != null) {
            f3Var.e("url").f(this.f29354q);
        }
        Map map = this.f29355r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29355r.get(str));
            }
        }
        f3Var.z();
    }

    public String toString() {
        return "Feedback{message='" + this.f29349d + "', contactEmail='" + this.f29350e + "', name='" + this.f29351i + "', associatedEventId=" + this.f29352o + ", replayId=" + this.f29353p + ", url='" + this.f29354q + "', unknown=" + this.f29355r + '}';
    }

    public h(h hVar) {
        this.f29349d = hVar.f29349d;
        this.f29350e = hVar.f29350e;
        this.f29351i = hVar.f29351i;
        this.f29352o = hVar.f29352o;
        this.f29353p = hVar.f29353p;
        this.f29354q = hVar.f29354q;
        this.f29355r = io.sentry.util.c.b(hVar.f29355r);
    }
}
