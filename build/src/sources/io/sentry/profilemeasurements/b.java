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
    private Map f28400d;

    /* renamed from: e  reason: collision with root package name */
    private double f28401e;

    /* renamed from: i  reason: collision with root package name */
    private String f28402i;

    /* renamed from: o  reason: collision with root package name */
    private double f28403o;

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
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            break;
                        } else {
                            bVar.f28402i = q12;
                            break;
                        }
                    case 1:
                        try {
                            d10 = e3Var.n0();
                        } catch (NumberFormatException unused) {
                            Date u02 = e3Var.u0(iLogger);
                            if (u02 != null) {
                                d10 = Double.valueOf(k.b(u02));
                            } else {
                                d10 = null;
                            }
                        }
                        if (d10 == null) {
                            break;
                        } else {
                            bVar.f28401e = d10.doubleValue();
                            break;
                        }
                    case 2:
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            bVar.f28403o = n02.doubleValue();
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
        this.f28400d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f28400d, bVar.f28400d) && this.f28402i.equals(bVar.f28402i) && this.f28403o == bVar.f28403o && this.f28401e == bVar.f28401e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f28400d, this.f28402i, Double.valueOf(this.f28403o));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("value").j(iLogger, Double.valueOf(this.f28403o));
        f3Var.e("elapsed_since_start_ns").j(iLogger, this.f28402i);
        f3Var.e("timestamp").j(iLogger, d(Double.valueOf(this.f28401e)));
        Map map = this.f28400d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28400d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public b(Long l10, Number number, long j10) {
        this.f28402i = l10.toString();
        this.f28403o = number.doubleValue();
        this.f28401e = k.m(j10);
    }
}
