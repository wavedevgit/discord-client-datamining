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
    private String f30348d;

    /* renamed from: e  reason: collision with root package name */
    private String f30349e;

    /* renamed from: i  reason: collision with root package name */
    private String f30350i;

    /* renamed from: o  reason: collision with root package name */
    private x f30351o;

    /* renamed from: p  reason: collision with root package name */
    private x f30352p;

    /* renamed from: q  reason: collision with root package name */
    private String f30353q;

    /* renamed from: r  reason: collision with root package name */
    private Map f30354r;

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
                hVar.f30349e = str2;
                hVar.f30350i = str3;
                hVar.f30351o = xVar;
                hVar.f30352p = xVar2;
                hVar.f30353q = str4;
                hVar.f30354r = hashMap;
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
        if (io.sentry.util.y.a(this.f30348d, hVar.f30348d) && io.sentry.util.y.a(this.f30349e, hVar.f30349e) && io.sentry.util.y.a(this.f30350i, hVar.f30350i) && io.sentry.util.y.a(this.f30351o, hVar.f30351o) && io.sentry.util.y.a(this.f30352p, hVar.f30352p) && io.sentry.util.y.a(this.f30353q, hVar.f30353q) && io.sentry.util.y.a(this.f30354r, hVar.f30354r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f30348d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f30348d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30348d, this.f30349e, this.f30350i, this.f30351o, this.f30352p, this.f30353q, this.f30354r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("message").f(this.f30348d);
        if (this.f30349e != null) {
            f3Var.e("contact_email").f(this.f30349e);
        }
        if (this.f30350i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30350i);
        }
        if (this.f30351o != null) {
            f3Var.e("associated_event_id");
            this.f30351o.serialize(f3Var, iLogger);
        }
        if (this.f30352p != null) {
            f3Var.e("replay_id");
            this.f30352p.serialize(f3Var, iLogger);
        }
        if (this.f30353q != null) {
            f3Var.e("url").f(this.f30353q);
        }
        Map map = this.f30354r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30354r.get(str));
            }
        }
        f3Var.y();
    }

    public String toString() {
        return "Feedback{message='" + this.f30348d + "', contactEmail='" + this.f30349e + "', name='" + this.f30350i + "', associatedEventId=" + this.f30351o + ", replayId=" + this.f30352p + ", url='" + this.f30353q + "', unknown=" + this.f30354r + '}';
    }

    public h(h hVar) {
        this.f30348d = hVar.f30348d;
        this.f30349e = hVar.f30349e;
        this.f30350i = hVar.f30350i;
        this.f30351o = hVar.f30351o;
        this.f30352p = hVar.f30352p;
        this.f30353q = hVar.f30353q;
        this.f30354r = io.sentry.util.c.b(hVar.f30354r);
    }
}
