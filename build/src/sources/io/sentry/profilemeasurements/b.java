package io.sentry.profilemeasurements;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.k;
import io.sentry.m1;
import io.sentry.util.y;
import io.sentry.w1;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private Map f29256d;

    /* renamed from: e  reason: collision with root package name */
    private double f29257e;

    /* renamed from: i  reason: collision with root package name */
    private String f29258i;

    /* renamed from: o  reason: collision with root package name */
    private double f29259o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b a(e3 e3Var, ILogger iLogger) {
            Double d10;
            e3Var.s();
            b bVar = new b();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1709412534:
                        if (m02.equals("elapsed_since_start_ns")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 55126294:
                        if (m02.equals("timestamp")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 111972721:
                        if (m02.equals("value")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            bVar.f29258i = r12;
                            break;
                        }
                    case 1:
                        try {
                            d10 = e3Var.l0();
                        } catch (NumberFormatException unused) {
                            Date s02 = e3Var.s0(iLogger);
                            if (s02 != null) {
                                d10 = Double.valueOf(k.b(s02));
                            } else {
                                d10 = null;
                            }
                        }
                        if (d10 == null) {
                            break;
                        } else {
                            bVar.f29257e = d10.doubleValue();
                            break;
                        }
                    case 2:
                        Double l02 = e3Var.l0();
                        if (l02 == null) {
                            break;
                        } else {
                            bVar.f29259o = l02.doubleValue();
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            bVar.e(concurrentHashMap);
            e3Var.z();
            return bVar;
        }
    }

    public b() {
        this(0L, 0, 0L);
    }

    private BigDecimal d(Double d10) {
        return BigDecimal.valueOf(d10.doubleValue()).setScale(6, RoundingMode.DOWN);
    }

    public void e(Map map) {
        this.f29256d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f29256d, bVar.f29256d) && this.f29258i.equals(bVar.f29258i) && this.f29259o == bVar.f29259o && this.f29257e == bVar.f29257e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f29256d, this.f29258i, Double.valueOf(this.f29259o));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("value").j(iLogger, Double.valueOf(this.f29259o));
        f3Var.e("elapsed_since_start_ns").j(iLogger, this.f29258i);
        f3Var.e("timestamp").j(iLogger, d(Double.valueOf(this.f29257e)));
        Map map = this.f29256d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29256d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public b(Long l10, Number number, long j10) {
        this.f29258i = l10.toString();
        this.f29259o = number.doubleValue();
        this.f29257e = k.m(j10);
    }
}
