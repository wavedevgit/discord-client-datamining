package io.sentry;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.protocol.x;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f30891d;

    /* renamed from: e  reason: collision with root package name */
    private String f30892e;

    /* renamed from: i  reason: collision with root package name */
    private String f30893i;

    /* renamed from: o  reason: collision with root package name */
    private String f30894o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30895p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public x8 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            io.sentry.protocol.x xVar = null;
            String str = null;
            String str2 = null;
            String str3 = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -602415628:
                        if (l02.equals("comments")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 96619420:
                        if (l02.equals("email")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 278118624:
                        if (l02.equals("event_id")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        str3 = e3Var.r1();
                        break;
                    case 1:
                        str = e3Var.r1();
                        break;
                    case 2:
                        str2 = e3Var.r1();
                        break;
                    case 3:
                        xVar = new x.a().a(e3Var, iLogger);
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
        this.f30891d = xVar;
        this.f30892e = str;
        this.f30893i = str2;
        this.f30894o = str3;
    }

    public void a(Map map) {
        this.f30895p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("event_id");
        this.f30891d.serialize(f3Var, iLogger);
        if (this.f30892e != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30892e);
        }
        if (this.f30893i != null) {
            f3Var.e("email").f(this.f30893i);
        }
        if (this.f30894o != null) {
            f3Var.e("comments").f(this.f30894o);
        }
        Map map = this.f30895p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30895p.get(str));
            }
        }
        f3Var.y();
    }

    public String toString() {
        return "UserFeedback{eventId=" + this.f30891d + ", name='" + this.f30892e + "', email='" + this.f30893i + "', comments='" + this.f30894o + "'}";
    }
}
