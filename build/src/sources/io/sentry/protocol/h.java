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
    private String f28541d;

    /* renamed from: e  reason: collision with root package name */
    private String f28542e;

    /* renamed from: i  reason: collision with root package name */
    private String f28543i;

    /* renamed from: o  reason: collision with root package name */
    private x f28544o;

    /* renamed from: p  reason: collision with root package name */
    private x f28545p;

    /* renamed from: q  reason: collision with root package name */
    private String f28546q;

    /* renamed from: r  reason: collision with root package name */
    private Map f28547r;

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
                hVar.f28542e = str2;
                hVar.f28543i = str3;
                hVar.f28544o = xVar;
                hVar.f28545p = xVar2;
                hVar.f28546q = str4;
                hVar.f28547r = hashMap;
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
        if (io.sentry.util.y.a(this.f28541d, hVar.f28541d) && io.sentry.util.y.a(this.f28542e, hVar.f28542e) && io.sentry.util.y.a(this.f28543i, hVar.f28543i) && io.sentry.util.y.a(this.f28544o, hVar.f28544o) && io.sentry.util.y.a(this.f28545p, hVar.f28545p) && io.sentry.util.y.a(this.f28546q, hVar.f28546q) && io.sentry.util.y.a(this.f28547r, hVar.f28547r)) {
            return true;
        }
        return false;
    }

    public void g(String str) {
        if (str.length() > 4096) {
            this.f28541d = str.substring(0, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        } else {
            this.f28541d = str;
        }
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28541d, this.f28542e, this.f28543i, this.f28544o, this.f28545p, this.f28546q, this.f28547r);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("message").f(this.f28541d);
        if (this.f28542e != null) {
            f3Var.e("contact_email").f(this.f28542e);
        }
        if (this.f28543i != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28543i);
        }
        if (this.f28544o != null) {
            f3Var.e("associated_event_id");
            this.f28544o.serialize(f3Var, iLogger);
        }
        if (this.f28545p != null) {
            f3Var.e("replay_id");
            this.f28545p.serialize(f3Var, iLogger);
        }
        if (this.f28546q != null) {
            f3Var.e("url").f(this.f28546q);
        }
        Map map = this.f28547r;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28547r.get(str));
            }
        }
        f3Var.D();
    }

    public String toString() {
        return "Feedback{message='" + this.f28541d + "', contactEmail='" + this.f28542e + "', name='" + this.f28543i + "', associatedEventId=" + this.f28544o + ", replayId=" + this.f28545p + ", url='" + this.f28546q + "', unknown=" + this.f28547r + '}';
    }

    public h(h hVar) {
        this.f28541d = hVar.f28541d;
        this.f28542e = hVar.f28542e;
        this.f28543i = hVar.f28543i;
        this.f28544o = hVar.f28544o;
        this.f28545p = hVar.f28545p;
        this.f28546q = hVar.f28546q;
        this.f28547r = io.sentry.util.c.b(hVar.f28547r);
    }
}
