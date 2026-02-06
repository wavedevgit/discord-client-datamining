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
    private String f28493d;

    /* renamed from: e  reason: collision with root package name */
    private String f28494e;

    /* renamed from: i  reason: collision with root package name */
    private String f28495i;

    /* renamed from: o  reason: collision with root package name */
    private x f28496o;

    /* renamed from: p  reason: collision with root package name */
    private x f28497p;

    /* renamed from: q  reason: collision with root package name */
    private String f28498q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28499r;

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
                        str4 = e3Var.q1();
                        break;
                    case 3:
                        str3 = e3Var.q1();
                        break;
                    case 4:
                        str2 = e3Var.q1();
                        break;
                    case 5:
                        str = e3Var.q1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            if (str != null) {
                h hVar = new h(str);
                hVar.f28494e = str2;
                hVar.f28495i = str3;
                hVar.f28496o = xVar;
                hVar.f28497p = xVar2;
                hVar.f28498q = str4;
                hVar.f28499r = hashMap;
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
        if (io.sentry.util.y.a(this.f28493d, hVar.f28493d) && io.sentry.util.y.a(this.f28494e, hVar.f28494e) && io.sentry.util.y.a(this.f28495i, hVar.f28495i) && io.sentry.util.y.a(this.f28496o, hVar.f28496o) && io.sentry.util.y.a(this.f28497p, hVar.f28497p) && io.sentry.util.y.a(this.f28498q, hVar.f28498q) && io.sentry.util.y.a(this.f28499r, hVar.f28499r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f28493d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f28493d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28493d, this.f28494e, this.f28495i, this.f28496o, this.f28497p, this.f28498q, this.f28499r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("message").f(this.f28493d);
        if (this.f28494e != null) {
            f3Var.e("contact_email").f(this.f28494e);
        }
        if (this.f28495i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28495i);
        }
        if (this.f28496o != null) {
            f3Var.e("associated_event_id");
            this.f28496o.serialize(f3Var, iLogger);
        }
        if (this.f28497p != null) {
            f3Var.e("replay_id");
            this.f28497p.serialize(f3Var, iLogger);
        }
        if (this.f28498q != null) {
            f3Var.e("url").f(this.f28498q);
        }
        Map map = this.f28499r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28499r.get(str));
            }
        }
        f3Var.D();
    }

    public String toString() {
        return "Feedback{message='" + this.f28493d + "', contactEmail='" + this.f28494e + "', name='" + this.f28495i + "', associatedEventId=" + this.f28496o + ", replayId=" + this.f28497p + ", url='" + this.f28498q + "', unknown=" + this.f28499r + '}';
    }

    public h(h hVar) {
        this.f28493d = hVar.f28493d;
        this.f28494e = hVar.f28494e;
        this.f28495i = hVar.f28495i;
        this.f28496o = hVar.f28496o;
        this.f28497p = hVar.f28497p;
        this.f28498q = hVar.f28498q;
        this.f28499r = io.sentry.util.c.b(hVar.f28499r);
    }
}
