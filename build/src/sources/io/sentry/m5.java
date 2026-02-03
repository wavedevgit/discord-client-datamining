package io.sentry;

import com.discord.js_watchdog.SharedPreferencesKey;
import io.sentry.protocol.r;
import io.sentry.protocol.x;
import io.sentry.q8;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29771d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.protocol.r f29772e;

    /* renamed from: i  reason: collision with root package name */
    private final q8 f29773i;

    /* renamed from: o  reason: collision with root package name */
    private Date f29774o;

    /* renamed from: p  reason: collision with root package name */
    private Map f29775p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public m5 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            io.sentry.protocol.x xVar = null;
            io.sentry.protocol.r rVar = null;
            q8 q8Var = null;
            Date date = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case 113722:
                        if (m02.equals("sdk")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 110620997:
                        if (m02.equals(SharedPreferencesKey.TRACE)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 278118624:
                        if (m02.equals("event_id")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 1980389946:
                        if (m02.equals("sent_at")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        rVar = (io.sentry.protocol.r) e3Var.H0(iLogger, new r.a());
                        break;
                    case 1:
                        q8Var = (q8) e3Var.H0(iLogger, new q8.a());
                        break;
                    case 2:
                        xVar = (io.sentry.protocol.x) e3Var.H0(iLogger, new x.a());
                        break;
                    case 3:
                        date = e3Var.s0(iLogger);
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            m5 m5Var = new m5(xVar, rVar, q8Var);
            m5Var.d(date);
            m5Var.e(hashMap);
            e3Var.y();
            return m5Var;
        }
    }

    public m5(io.sentry.protocol.x xVar, io.sentry.protocol.r rVar) {
        this(xVar, rVar, null);
    }

    public io.sentry.protocol.x a() {
        return this.f29771d;
    }

    public io.sentry.protocol.r b() {
        return this.f29772e;
    }

    public q8 c() {
        return this.f29773i;
    }

    public void d(Date date) {
        this.f29774o = date;
    }

    public void e(Map map) {
        this.f29775p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29771d != null) {
            f3Var.e("event_id").j(iLogger, this.f29771d);
        }
        if (this.f29772e != null) {
            f3Var.e("sdk").j(iLogger, this.f29772e);
        }
        if (this.f29773i != null) {
            f3Var.e(SharedPreferencesKey.TRACE).j(iLogger, this.f29773i);
        }
        if (this.f29774o != null) {
            f3Var.e("sent_at").j(iLogger, k.h(this.f29774o));
        }
        Map map = this.f29775p;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29775p.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public m5(io.sentry.protocol.x xVar, io.sentry.protocol.r rVar, q8 q8Var) {
        this.f29771d = xVar;
        this.f29772e = rVar;
        this.f29773i = q8Var;
    }
}
