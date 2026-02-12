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
    private String f29677d;

    /* renamed from: e  reason: collision with root package name */
    private String f29678e;

    /* renamed from: i  reason: collision with root package name */
    private String f29679i;

    /* renamed from: o  reason: collision with root package name */
    private x f29680o;

    /* renamed from: p  reason: collision with root package name */
    private x f29681p;

    /* renamed from: q  reason: collision with root package name */
    private String f29682q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29683r;

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
                        e3Var.u1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            if (str != null) {
                h hVar = new h(str);
                hVar.f29678e = str2;
                hVar.f29679i = str3;
                hVar.f29680o = xVar;
                hVar.f29681p = xVar2;
                hVar.f29682q = str4;
                hVar.f29683r = hashMap;
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
        if (io.sentry.util.y.a(this.f29677d, hVar.f29677d) && io.sentry.util.y.a(this.f29678e, hVar.f29678e) && io.sentry.util.y.a(this.f29679i, hVar.f29679i) && io.sentry.util.y.a(this.f29680o, hVar.f29680o) && io.sentry.util.y.a(this.f29681p, hVar.f29681p) && io.sentry.util.y.a(this.f29682q, hVar.f29682q) && io.sentry.util.y.a(this.f29683r, hVar.f29683r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f29677d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f29677d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29677d, this.f29678e, this.f29679i, this.f29680o, this.f29681p, this.f29682q, this.f29683r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("message").f(this.f29677d);
        if (this.f29678e != null) {
            f3Var.e("contact_email").f(this.f29678e);
        }
        if (this.f29679i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29679i);
        }
        if (this.f29680o != null) {
            f3Var.e("associated_event_id");
            this.f29680o.serialize(f3Var, iLogger);
        }
        if (this.f29681p != null) {
            f3Var.e("replay_id");
            this.f29681p.serialize(f3Var, iLogger);
        }
        if (this.f29682q != null) {
            f3Var.e("url").f(this.f29682q);
        }
        Map map = this.f29683r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29683r.get(str));
            }
        }
        f3Var.D();
    }

    public String toString() {
        return "Feedback{message='" + this.f29677d + "', contactEmail='" + this.f29678e + "', name='" + this.f29679i + "', associatedEventId=" + this.f29680o + ", replayId=" + this.f29681p + ", url='" + this.f29682q + "', unknown=" + this.f29683r + '}';
    }

    public h(h hVar) {
        this.f29677d = hVar.f29677d;
        this.f29678e = hVar.f29678e;
        this.f29679i = hVar.f29679i;
        this.f29680o = hVar.f29680o;
        this.f29681p = hVar.f29681p;
        this.f29682q = hVar.f29682q;
        this.f29683r = io.sentry.util.c.b(hVar.f29683r);
    }
}
