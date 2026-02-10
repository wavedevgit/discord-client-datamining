package io.sentry;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.protocol.x;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29341d;

    /* renamed from: e  reason: collision with root package name */
    private String f29342e;

    /* renamed from: i  reason: collision with root package name */
    private String f29343i;

    /* renamed from: o  reason: collision with root package name */
    private String f29344o;

    /* renamed from: p  reason: collision with root package name */
    private Map f29345p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public x8 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            io.sentry.protocol.x xVar = null;
            String str = null;
            String str2 = null;
            String str3 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -602415628:
                        if (o02.equals("comments")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 96619420:
                        if (o02.equals("email")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 278118624:
                        if (o02.equals("event_id")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        str3 = e3Var.m1();
                        break;
                    case 1:
                        str = e3Var.m1();
                        break;
                    case 2:
                        str2 = e3Var.m1();
                        break;
                    case 3:
                        xVar = new x.a().a(e3Var, iLogger);
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
            if (xVar != null) {
                x8 x8Var = new x8(xVar, str, str2, str3);
                x8Var.a(hashMap);
                return x8Var;
            }
            IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"event_id\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"event_id\"", illegalStateException);
            throw illegalStateException;
        }
    }

    public x8(io.sentry.protocol.x xVar, String str, String str2, String str3) {
        this.f29341d = xVar;
        this.f29342e = str;
        this.f29343i = str2;
        this.f29344o = str3;
    }

    public void a(Map map) {
        this.f29345p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("event_id");
        this.f29341d.serialize(f3Var, iLogger);
        if (this.f29342e != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29342e);
        }
        if (this.f29343i != null) {
            f3Var.e("email").f(this.f29343i);
        }
        if (this.f29344o != null) {
            f3Var.e("comments").f(this.f29344o);
        }
        Map map = this.f29345p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29345p.get(str));
            }
        }
        f3Var.D();
    }

    public String toString() {
        return "UserFeedback{eventId=" + this.f29341d + ", name='" + this.f29342e + "', email='" + this.f29343i + "', comments='" + this.f29344o + "'}";
    }
}
