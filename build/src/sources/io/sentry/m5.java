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
    private final io.sentry.protocol.x f30132d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.protocol.r f30133e;

    /* renamed from: i  reason: collision with root package name */
    private final q8 f30134i;

    /* renamed from: o  reason: collision with root package name */
    private Date f30135o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30136p;

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
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case 113722:
                        if (l02.equals("sdk")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 110620997:
                        if (l02.equals(SharedPreferencesKey.TRACE)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 278118624:
                        if (l02.equals("event_id")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 1980389946:
                        if (l02.equals("sent_at")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        rVar = (io.sentry.protocol.r) e3Var.G0(iLogger, new r.a());
                        break;
                    case 1:
                        q8Var = (q8) e3Var.G0(iLogger, new q8.a());
                        break;
                    case 2:
                        xVar = (io.sentry.protocol.x) e3Var.G0(iLogger, new x.a());
                        break;
                    case 3:
                        date = e3Var.r0(iLogger);
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
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
        return this.f30132d;
    }

    public io.sentry.protocol.r b() {
        return this.f30133e;
    }

    public q8 c() {
        return this.f30134i;
    }

    public void d(Date date) {
        this.f30135o = date;
    }

    public void e(Map map) {
        this.f30136p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30132d != null) {
            f3Var.e("event_id").j(iLogger, this.f30132d);
        }
        if (this.f30133e != null) {
            f3Var.e("sdk").j(iLogger, this.f30133e);
        }
        if (this.f30134i != null) {
            f3Var.e(SharedPreferencesKey.TRACE).j(iLogger, this.f30134i);
        }
        if (this.f30135o != null) {
            f3Var.e("sent_at").j(iLogger, k.h(this.f30135o));
        }
        Map map = this.f30136p;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30136p.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public m5(io.sentry.protocol.x xVar, io.sentry.protocol.r rVar, q8 q8Var) {
        this.f30132d = xVar;
        this.f30133e = rVar;
        this.f30134i = q8Var;
    }
}
