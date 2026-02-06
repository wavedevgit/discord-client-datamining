package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.d8;
import io.sentry.e3;
import io.sentry.e5;
import io.sentry.e8;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.a0;
import io.sentry.protocol.f0;
import io.sentry.protocol.k;
import io.sentry.s8;
import io.sentry.w1;
import io.sentry.w7;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends e5 implements w1 {
    private String A;
    private Double B;
    private Double C;
    private final List D;
    private final String E;
    private final Map F;
    private f0 G;
    private Map H;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public d0 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            d0 d0Var = new d0("", Double.valueOf(0.0d), null, new ArrayList(), new HashMap(), new f0(g0.CUSTOM.apiName()));
            e5.a aVar = new e5.a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1526966919:
                        if (o02.equals("start_timestamp")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -362243017:
                        if (o02.equals("measurements")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 109638249:
                        if (o02.equals("spans")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 508716399:
                        if (o02.equals("transaction_info")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 2141246174:
                        if (o02.equals("transaction")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        try {
                            Double n02 = e3Var.n0();
                            if (n02 == null) {
                                break;
                            } else {
                                d0Var.B = n02;
                                break;
                            }
                        } catch (NumberFormatException unused) {
                            Date u02 = e3Var.u0(iLogger);
                            if (u02 == null) {
                                break;
                            } else {
                                d0Var.B = Double.valueOf(io.sentry.k.b(u02));
                                break;
                            }
                        }
                    case 1:
                        Map t12 = e3Var.t1(iLogger, new k.a());
                        if (t12 == null) {
                            break;
                        } else {
                            d0Var.F.putAll(t12);
                            break;
                        }
                    case 2:
                        e3Var.e1();
                        break;
                    case 3:
                        try {
                            Double n03 = e3Var.n0();
                            if (n03 == null) {
                                break;
                            } else {
                                d0Var.C = n03;
                                break;
                            }
                        } catch (NumberFormatException unused2) {
                            Date u03 = e3Var.u0(iLogger);
                            if (u03 == null) {
                                break;
                            } else {
                                d0Var.C = Double.valueOf(io.sentry.k.b(u03));
                                break;
                            }
                        }
                    case 4:
                        List g22 = e3Var.g2(iLogger, new a0.a());
                        if (g22 == null) {
                            break;
                        } else {
                            d0Var.D.addAll(g22);
                            break;
                        }
                    case 5:
                        d0Var.G = new f0.a().a(e3Var, iLogger);
                        break;
                    case 6:
                        d0Var.A = e3Var.q1();
                        break;
                    default:
                        if (!aVar.a(d0Var, o02, e3Var, iLogger)) {
                            if (concurrentHashMap == null) {
                                concurrentHashMap = new ConcurrentHashMap();
                            }
                            e3Var.u1(iLogger, concurrentHashMap, o02);
                            break;
                        } else {
                            break;
                        }
                }
            }
            d0Var.u0(concurrentHashMap);
            e3Var.D();
            return d0Var;
        }
    }

    public d0(w7 w7Var) {
        super(w7Var.f());
        this.D = new ArrayList();
        this.E = "transaction";
        this.F = new HashMap();
        io.sentry.util.y.c(w7Var, "sentryTracer is required");
        this.B = Double.valueOf(io.sentry.k.m(w7Var.t().h()));
        this.C = Double.valueOf(io.sentry.k.m(w7Var.t().g(w7Var.r())));
        this.A = w7Var.getName();
        for (d8 d8Var : w7Var.I()) {
            if (Boolean.TRUE.equals(d8Var.c())) {
                this.D.add(new a0(d8Var));
            }
        }
        c C = C();
        C.m(w7Var.J());
        e8 q10 = w7Var.q();
        Map K = w7Var.K();
        e8 e8Var = new e8(q10.p(), q10.m(), q10.h(), q10.f(), q10.c(), q10.l(), q10.n(), q10.g());
        for (Map.Entry entry : q10.o().entrySet()) {
            f0((String) entry.getKey(), (String) entry.getValue());
        }
        if (K != null) {
            for (Map.Entry entry2 : K.entrySet()) {
                e8Var.q((String) entry2.getKey(), entry2.getValue());
            }
        }
        g o10 = q10.d().o();
        if (o10 != null) {
            for (f fVar : o10.a()) {
                e8Var.q("flag.evaluation." + fVar.a(), fVar.b());
            }
        }
        C.z(e8Var);
        this.G = new f0(w7Var.P().apiName());
    }

    public Map o0() {
        return this.F;
    }

    public s8 p0() {
        e8 j10 = C().j();
        if (j10 == null) {
            return null;
        }
        return j10.l();
    }

    public List q0() {
        return this.D;
    }

    public String r0() {
        return this.A;
    }

    public boolean s0() {
        if (this.C != null) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.A != null) {
            f3Var.e("transaction").f(this.A);
        }
        f3Var.e("start_timestamp").j(iLogger, io.sentry.k.c(this.B));
        if (this.C != null) {
            f3Var.e("timestamp").j(iLogger, io.sentry.k.c(this.C));
        }
        if (!this.D.isEmpty()) {
            f3Var.e("spans").j(iLogger, this.D);
        }
        f3Var.e("type").f("transaction");
        if (!this.F.isEmpty()) {
            f3Var.e("measurements").j(iLogger, this.F);
        }
        f3Var.e("transaction_info").j(iLogger, this.G);
        new e5.b().a(this, f3Var, iLogger);
        Map map = this.H;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.H.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public boolean t0() {
        s8 p02 = p0();
        if (p02 == null) {
            return false;
        }
        return p02.e().booleanValue();
    }

    public void u0(Map map) {
        this.H = map;
    }

    public d0(String str, Double d10, Double d11, List list, Map map, f0 f0Var) {
        ArrayList arrayList = new ArrayList();
        this.D = arrayList;
        this.E = "transaction";
        HashMap hashMap = new HashMap();
        this.F = hashMap;
        this.A = str;
        this.B = d10;
        this.C = d11;
        arrayList.addAll(list);
        hashMap.putAll(map);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            this.F.putAll(((a0) it.next()).c());
        }
        this.G = f0Var;
    }
}
