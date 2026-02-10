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
    private Map f29583d;

    /* renamed from: e  reason: collision with root package name */
    private double f29584e;

    /* renamed from: i  reason: collision with root package name */
    private String f29585i;

    /* renamed from: o  reason: collision with root package name */
    private double f29586o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public b a(e3 e3Var, ILogger iLogger) {
            Double d10;
            e3Var.u();
            b bVar = new b();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1709412534:
                        if (o02.equals("elapsed_since_start_ns")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 111972721:
                        if (o02.equals("value")) {
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
                            bVar.f29585i = r12;
                            break;
                        }
                    case 1:
                        try {
                            d10 = e3Var.n0();
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
                            bVar.f29584e = d10.doubleValue();
                            break;
                        }
                    case 2:
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            bVar.f29586o = n02.doubleValue();
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            bVar.e(concurrentHashMap);
            e3Var.D();
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
        this.f29583d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f29583d, bVar.f29583d) && this.f29585i.equals(bVar.f29585i) && this.f29586o == bVar.f29586o && this.f29584e == bVar.f29584e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f29583d, this.f29585i, Double.valueOf(this.f29586o));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("value").j(iLogger, Double.valueOf(this.f29586o));
        f3Var.e("elapsed_since_start_ns").j(iLogger, this.f29585i);
        f3Var.e("timestamp").j(iLogger, d(Double.valueOf(this.f29584e)));
        Map map = this.f29583d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29583d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public b(Long l10, Number number, long j10) {
        this.f29585i = l10.toString();
        this.f29586o = number.doubleValue();
        this.f29584e = k.m(j10);
    }
}
