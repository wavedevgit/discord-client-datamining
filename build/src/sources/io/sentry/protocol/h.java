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
    private String f29676d;

    /* renamed from: e  reason: collision with root package name */
    private String f29677e;

    /* renamed from: i  reason: collision with root package name */
    private String f29678i;

    /* renamed from: o  reason: collision with root package name */
    private x f29679o;

    /* renamed from: p  reason: collision with root package name */
    private x f29680p;

    /* renamed from: q  reason: collision with root package name */
    private String f29681q;

    /* renamed from: r  reason: collision with root package name */
    private Map f29682r;

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
                hVar.f29677e = str2;
                hVar.f29678i = str3;
                hVar.f29679o = xVar;
                hVar.f29680p = xVar2;
                hVar.f29681q = str4;
                hVar.f29682r = hashMap;
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
        if (io.sentry.util.y.a(this.f29676d, hVar.f29676d) && io.sentry.util.y.a(this.f29677e, hVar.f29677e) && io.sentry.util.y.a(this.f29678i, hVar.f29678i) && io.sentry.util.y.a(this.f29679o, hVar.f29679o) && io.sentry.util.y.a(this.f29680p, hVar.f29680p) && io.sentry.util.y.a(this.f29681q, hVar.f29681q) && io.sentry.util.y.a(this.f29682r, hVar.f29682r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f29676d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f29676d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29676d, this.f29677e, this.f29678i, this.f29679o, this.f29680p, this.f29681q, this.f29682r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("message").f(this.f29676d);
        if (this.f29677e != null) {
            f3Var.e("contact_email").f(this.f29677e);
        }
        if (this.f29678i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29678i);
        }
        if (this.f29679o != null) {
            f3Var.e("associated_event_id");
            this.f29679o.serialize(f3Var, iLogger);
        }
        if (this.f29680p != null) {
            f3Var.e("replay_id");
            this.f29680p.serialize(f3Var, iLogger);
        }
        if (this.f29681q != null) {
            f3Var.e("url").f(this.f29681q);
        }
        Map map = this.f29682r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29682r.get(str));
            }
        }
        f3Var.D();
    }

    public String toString() {
        return "Feedback{message='" + this.f29676d + "', contactEmail='" + this.f29677e + "', name='" + this.f29678i + "', associatedEventId=" + this.f29679o + ", replayId=" + this.f29680p + ", url='" + this.f29681q + "', unknown=" + this.f29682r + '}';
    }

    public h(h hVar) {
        this.f29676d = hVar.f29676d;
        this.f29677e = hVar.f29677e;
        this.f29678i = hVar.f29678i;
        this.f29679o = hVar.f29679o;
        this.f29680p = hVar.f29680p;
        this.f29681q = hVar.f29681q;
        this.f29682r = io.sentry.util.c.b(hVar.f29682r);
    }
}
