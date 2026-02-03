package io.sentry;

import io.sentry.SentryLevel;
import io.sentry.e5;
import io.sentry.protocol.c0;
import io.sentry.protocol.m;
import io.sentry.protocol.s;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SentryEvent extends e5 implements w1 {
    private Date A;
    private io.sentry.protocol.m B;
    private String C;
    private y7 D;
    private y7 E;
    private SentryLevel F;
    private String G;
    private List H;
    private Map I;
    private Map J;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public SentryEvent a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            SentryEvent sentryEvent = new SentryEvent();
            e5.a aVar = new e5.a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1375934236:
                        if (m02.equals("fingerprint")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1337936983:
                        if (m02.equals("threads")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1097337456:
                        if (m02.equals("logger")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 55126294:
                        if (m02.equals("timestamp")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 102865796:
                        if (m02.equals("level")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 954925063:
                        if (m02.equals("message")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1227433863:
                        if (m02.equals("modules")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1481625679:
                        if (m02.equals("exception")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 2141246174:
                        if (m02.equals("transaction")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        List list = (List) e3Var.V1();
                        if (list == null) {
                            break;
                        } else {
                            sentryEvent.H = list;
                            break;
                        }
                    case 1:
                        e3Var.r();
                        e3Var.m0();
                        sentryEvent.D = new y7(e3Var.g2(iLogger, new c0.a()));
                        e3Var.y();
                        break;
                    case 2:
                        sentryEvent.C = e3Var.r1();
                        break;
                    case 3:
                        Date s02 = e3Var.s0(iLogger);
                        if (s02 == null) {
                            break;
                        } else {
                            sentryEvent.A = s02;
                            break;
                        }
                    case 4:
                        sentryEvent.F = (SentryLevel) e3Var.H0(iLogger, new SentryLevel.a());
                        break;
                    case 5:
                        sentryEvent.B = (io.sentry.protocol.m) e3Var.H0(iLogger, new m.a());
                        break;
                    case 6:
                        sentryEvent.J = io.sentry.util.c.b((Map) e3Var.V1());
                        break;
                    case 7:
                        e3Var.r();
                        e3Var.m0();
                        sentryEvent.E = new y7(e3Var.g2(iLogger, new s.a()));
                        e3Var.y();
                        break;
                    case '\b':
                        sentryEvent.G = e3Var.r1();
                        break;
                    default:
                        if (!aVar.a(sentryEvent, m02, e3Var, iLogger)) {
                            if (concurrentHashMap == null) {
                                concurrentHashMap = new ConcurrentHashMap();
                            }
                            e3Var.v1(iLogger, concurrentHashMap, m02);
                            break;
                        } else {
                            break;
                        }
                }
            }
            sentryEvent.K0(concurrentHashMap);
            e3Var.y();
            return sentryEvent;
        }
    }

    SentryEvent(io.sentry.protocol.x xVar, Date date) {
        super(xVar);
        this.A = date;
    }

    public boolean A0() {
        if (z0() != null) {
            return true;
        }
        return false;
    }

    public boolean B0() {
        y7 y7Var = this.E;
        if (y7Var != null && !y7Var.a().isEmpty()) {
            return true;
        }
        return false;
    }

    public void C0(List list) {
        this.E = new y7(list);
    }

    public void D0(List list) {
        ArrayList arrayList;
        if (list != null) {
            arrayList = new ArrayList(list);
        } else {
            arrayList = null;
        }
        this.H = arrayList;
    }

    public void E0(SentryLevel sentryLevel) {
        this.F = sentryLevel;
    }

    public void F0(io.sentry.protocol.m mVar) {
        this.B = mVar;
    }

    public void G0(Map map) {
        this.J = io.sentry.util.c.c(map);
    }

    public void H0(List list) {
        this.D = new y7(list);
    }

    public void I0(Date date) {
        this.A = date;
    }

    public void J0(String str) {
        this.G = str;
    }

    public void K0(Map map) {
        this.I = map;
    }

    public List r0() {
        y7 y7Var = this.E;
        if (y7Var == null) {
            return null;
        }
        return y7Var.a();
    }

    public List s0() {
        return this.H;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("timestamp").j(iLogger, this.A);
        if (this.B != null) {
            f3Var.e("message").j(iLogger, this.B);
        }
        if (this.C != null) {
            f3Var.e("logger").f(this.C);
        }
        y7 y7Var = this.D;
        if (y7Var != null && !y7Var.a().isEmpty()) {
            f3Var.e("threads");
            f3Var.r();
            f3Var.e("values").j(iLogger, this.D.a());
            f3Var.y();
        }
        y7 y7Var2 = this.E;
        if (y7Var2 != null && !y7Var2.a().isEmpty()) {
            f3Var.e("exception");
            f3Var.r();
            f3Var.e("values").j(iLogger, this.E.a());
            f3Var.y();
        }
        if (this.F != null) {
            f3Var.e("level").j(iLogger, this.F);
        }
        if (this.G != null) {
            f3Var.e("transaction").f(this.G);
        }
        if (this.H != null) {
            f3Var.e("fingerprint").j(iLogger, this.H);
        }
        if (this.J != null) {
            f3Var.e("modules").j(iLogger, this.J);
        }
        new e5.b().a(this, f3Var, iLogger);
        Map map = this.I;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.I.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public SentryLevel t0() {
        return this.F;
    }

    public io.sentry.protocol.m u0() {
        return this.B;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map v0() {
        return this.J;
    }

    public List w0() {
        y7 y7Var = this.D;
        if (y7Var != null) {
            return y7Var.a();
        }
        return null;
    }

    public Date x0() {
        return (Date) this.A.clone();
    }

    public String y0() {
        return this.G;
    }

    public io.sentry.protocol.s z0() {
        y7 y7Var = this.E;
        if (y7Var != null) {
            for (io.sentry.protocol.s sVar : y7Var.a()) {
                if (sVar.g() != null && sVar.g().l() != null && !sVar.g().l().booleanValue()) {
                    return sVar;
                }
            }
            return null;
        }
        return null;
    }

    public SentryEvent(Throwable th2) {
        this();
        this.f29533u = th2;
    }

    public SentryEvent() {
        this(new io.sentry.protocol.x(), k.d());
    }
}
