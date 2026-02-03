package io.sentry;

import java.util.Date;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z7 implements w1 {
    private Map A;

    /* renamed from: d  reason: collision with root package name */
    private final Date f30948d;

    /* renamed from: e  reason: collision with root package name */
    private Date f30949e;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicInteger f30950i;

    /* renamed from: o  reason: collision with root package name */
    private final String f30951o;

    /* renamed from: p  reason: collision with root package name */
    private final String f30952p;

    /* renamed from: q  reason: collision with root package name */
    private Boolean f30953q;

    /* renamed from: r  reason: collision with root package name */
    private b f30954r;

    /* renamed from: s  reason: collision with root package name */
    private Long f30955s;

    /* renamed from: t  reason: collision with root package name */
    private Double f30956t;

    /* renamed from: u  reason: collision with root package name */
    private final String f30957u;

    /* renamed from: v  reason: collision with root package name */
    private String f30958v;

    /* renamed from: w  reason: collision with root package name */
    private final String f30959w;

    /* renamed from: x  reason: collision with root package name */
    private final String f30960x;

    /* renamed from: y  reason: collision with root package name */
    private String f30961y;

    /* renamed from: z  reason: collision with root package name */
    private final io.sentry.util.a f30962z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private Exception c(String str, ILogger iLogger) {
            String str2 = "Missing required field \"" + str + "\"";
            IllegalStateException illegalStateException = new IllegalStateException(str2);
            iLogger.b(SentryLevel.ERROR, str2, illegalStateException);
            return illegalStateException;
        }

        /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
        @Override // io.sentry.m1
        /* renamed from: b */
        public z7 a(e3 e3Var, ILogger iLogger) {
            char c10;
            boolean z10;
            e3Var.r();
            Integer num = null;
            ConcurrentHashMap concurrentHashMap = null;
            b bVar = null;
            Date date = null;
            Date date2 = null;
            String str = null;
            String str2 = null;
            Boolean bool = null;
            Long l10 = null;
            Double d10 = null;
            String str3 = null;
            String str4 = null;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            while (true) {
                Integer num2 = num;
                ConcurrentHashMap concurrentHashMap2 = concurrentHashMap;
                b bVar2 = bVar;
                Date date3 = date;
                Date date4 = date2;
                if (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                    String l02 = e3Var.l0();
                    l02.getClass();
                    switch (l02.hashCode()) {
                        case -1992012396:
                            if (l02.equals("duration")) {
                                c10 = 0;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case -1897185151:
                            if (l02.equals("started")) {
                                c10 = 1;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case -1294635157:
                            if (l02.equals("errors")) {
                                c10 = 2;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case -892481550:
                            if (l02.equals("status")) {
                                c10 = 3;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 99455:
                            if (l02.equals("did")) {
                                c10 = 4;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 113759:
                            if (l02.equals("seq")) {
                                c10 = 5;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 113870:
                            if (l02.equals("sid")) {
                                c10 = 6;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 3237136:
                            if (l02.equals("init")) {
                                c10 = 7;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 55126294:
                            if (l02.equals("timestamp")) {
                                c10 = '\b';
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 93152418:
                            if (l02.equals("attrs")) {
                                c10 = '\t';
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 213717026:
                            if (l02.equals("abnormal_mechanism")) {
                                c10 = '\n';
                                break;
                            }
                            c10 = 65535;
                            break;
                        default:
                            c10 = 65535;
                            break;
                    }
                    switch (c10) {
                        case 0:
                            d10 = e3Var.k0();
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        case 1:
                            date = e3Var.r0(iLogger);
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            break;
                        case 2:
                            num = e3Var.k1();
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        case 3:
                            String c11 = io.sentry.util.f0.c(e3Var.r1());
                            if (c11 != null) {
                                bVar = b.valueOf(c11);
                                num = num2;
                                concurrentHashMap = concurrentHashMap2;
                                date = date3;
                                break;
                            }
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                        case 4:
                            str = e3Var.r1();
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        case 5:
                            l10 = e3Var.m1();
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        case 6:
                            String r12 = e3Var.r1();
                            if (r12 != null && (r12.length() == 36 || r12.length() == 32)) {
                                str2 = r12;
                            } else {
                                iLogger.c(SentryLevel.ERROR, "%s sid is not valid.", r12);
                            }
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        case 7:
                            bool = e3Var.v0();
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        case '\b':
                            date2 = e3Var.r0(iLogger);
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            continue;
                        case '\t':
                            e3Var.r();
                            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                                String l03 = e3Var.l0();
                                l03.getClass();
                                switch (l03.hashCode()) {
                                    case -85904877:
                                        if (l03.equals("environment")) {
                                            z10 = false;
                                            break;
                                        }
                                        z10 = true;
                                        break;
                                    case 1090594823:
                                        if (l03.equals("release")) {
                                            z10 = true;
                                            break;
                                        }
                                        z10 = true;
                                        break;
                                    case 1480014044:
                                        if (l03.equals("ip_address")) {
                                            z10 = true;
                                            break;
                                        }
                                        z10 = true;
                                        break;
                                    case 1917799825:
                                        if (l03.equals("user_agent")) {
                                            z10 = true;
                                            break;
                                        }
                                        z10 = true;
                                        break;
                                    default:
                                        z10 = true;
                                        break;
                                }
                                switch (z10) {
                                    case false:
                                        str5 = e3Var.r1();
                                        break;
                                    case true:
                                        str6 = e3Var.r1();
                                        break;
                                    case true:
                                        str3 = e3Var.r1();
                                        break;
                                    case true:
                                        str4 = e3Var.r1();
                                        break;
                                    default:
                                        e3Var.P();
                                        break;
                                }
                            }
                            e3Var.y();
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        case '\n':
                            str7 = e3Var.r1();
                            num = num2;
                            concurrentHashMap = concurrentHashMap2;
                            bVar = bVar2;
                            date = date3;
                            break;
                        default:
                            if (concurrentHashMap2 == null) {
                                concurrentHashMap = new ConcurrentHashMap();
                            } else {
                                concurrentHashMap = concurrentHashMap2;
                            }
                            e3Var.v1(iLogger, concurrentHashMap, l02);
                            num = num2;
                            bVar = bVar2;
                            date = date3;
                            break;
                    }
                    date2 = date4;
                } else if (bVar2 != null) {
                    if (date3 != null) {
                        if (num2 != null) {
                            if (str6 != null) {
                                z7 z7Var = new z7(bVar2, date3, date4, num2.intValue(), str, str2, bool, l10, d10, str3, str4, str5, str6, str7);
                                z7Var.o(concurrentHashMap2);
                                e3Var.y();
                                return z7Var;
                            }
                            throw c("release", iLogger);
                        }
                        throw c("errors", iLogger);
                    }
                    throw c("started", iLogger);
                } else {
                    throw c("status", iLogger);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b {
        Ok,
        Exited,
        Crashed,
        Abnormal
    }

    public z7(b bVar, Date date, Date date2, int i10, String str, String str2, Boolean bool, Long l10, Double d10, String str3, String str4, String str5, String str6, String str7) {
        this.f30962z = new io.sentry.util.a();
        this.f30954r = bVar;
        this.f30948d = date;
        this.f30949e = date2;
        this.f30950i = new AtomicInteger(i10);
        this.f30951o = str;
        this.f30952p = str2;
        this.f30953q = bool;
        this.f30955s = l10;
        this.f30956t = d10;
        this.f30957u = str3;
        this.f30958v = str4;
        this.f30959w = str5;
        this.f30960x = str6;
        this.f30961y = str7;
    }

    private double a(Date date) {
        return Math.abs(date.getTime() - this.f30948d.getTime()) / 1000.0d;
    }

    private long i(Date date) {
        long time = date.getTime();
        if (time < 0) {
            return Math.abs(time);
        }
        return time;
    }

    /* renamed from: b */
    public z7 clone() {
        return new z7(this.f30954r, this.f30948d, this.f30949e, this.f30950i.get(), this.f30951o, this.f30952p, this.f30953q, this.f30955s, this.f30956t, this.f30957u, this.f30958v, this.f30959w, this.f30960x, this.f30961y);
    }

    public void c() {
        d(k.d());
    }

    public void d(Date date) {
        a1 a10 = this.f30962z.a();
        try {
            this.f30953q = null;
            if (this.f30954r == b.Ok) {
                this.f30954r = b.Exited;
            }
            if (date != null) {
                this.f30949e = date;
            } else {
                this.f30949e = k.d();
            }
            Date date2 = this.f30949e;
            if (date2 != null) {
                this.f30956t = Double.valueOf(a(date2));
                this.f30955s = Long.valueOf(i(this.f30949e));
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public int e() {
        return this.f30950i.get();
    }

    public String f() {
        return this.f30961y;
    }

    public Boolean g() {
        return this.f30953q;
    }

    public String h() {
        return this.f30960x;
    }

    public String j() {
        return this.f30952p;
    }

    public Date k() {
        Date date = this.f30948d;
        if (date == null) {
            return null;
        }
        return (Date) date.clone();
    }

    public b l() {
        return this.f30954r;
    }

    public boolean m() {
        if (this.f30954r != b.Ok) {
            return true;
        }
        return false;
    }

    public void n() {
        this.f30953q = Boolean.TRUE;
    }

    public void o(Map map) {
        this.A = map;
    }

    public boolean p(b bVar, String str, boolean z10) {
        return q(bVar, str, z10, null);
    }

    public boolean q(b bVar, String str, boolean z10, String str2) {
        boolean z11;
        a1 a10 = this.f30962z.a();
        boolean z12 = true;
        if (bVar != null) {
            try {
                this.f30954r = bVar;
                z11 = true;
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        } else {
            z11 = false;
        }
        if (str != null) {
            this.f30958v = str;
            z11 = true;
        }
        if (z10) {
            this.f30950i.addAndGet(1);
            z11 = true;
        }
        if (str2 != null) {
            this.f30961y = str2;
        } else {
            z12 = z11;
        }
        if (z12) {
            this.f30953q = null;
            Date d10 = k.d();
            this.f30949e = d10;
            if (d10 != null) {
                this.f30955s = Long.valueOf(i(d10));
            }
        }
        if (a10 != null) {
            a10.close();
        }
        return z12;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30952p != null) {
            f3Var.e("sid").f(this.f30952p);
        }
        if (this.f30951o != null) {
            f3Var.e("did").f(this.f30951o);
        }
        if (this.f30953q != null) {
            f3Var.e("init").k(this.f30953q);
        }
        f3Var.e("started").j(iLogger, this.f30948d);
        f3Var.e("status").j(iLogger, this.f30954r.name().toLowerCase(Locale.ROOT));
        if (this.f30955s != null) {
            f3Var.e("seq").i(this.f30955s);
        }
        f3Var.e("errors").b(this.f30950i.intValue());
        if (this.f30956t != null) {
            f3Var.e("duration").i(this.f30956t);
        }
        if (this.f30949e != null) {
            f3Var.e("timestamp").j(iLogger, this.f30949e);
        }
        if (this.f30961y != null) {
            f3Var.e("abnormal_mechanism").j(iLogger, this.f30961y);
        }
        f3Var.e("attrs");
        f3Var.r();
        f3Var.e("release").j(iLogger, this.f30960x);
        if (this.f30959w != null) {
            f3Var.e("environment").j(iLogger, this.f30959w);
        }
        if (this.f30957u != null) {
            f3Var.e("ip_address").j(iLogger, this.f30957u);
        }
        if (this.f30958v != null) {
            f3Var.e("user_agent").j(iLogger, this.f30958v);
        }
        f3Var.y();
        Map map = this.A;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.A.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public z7(String str, io.sentry.protocol.h0 h0Var, String str2, String str3) {
        this(b.Ok, k.d(), k.d(), 0, str, x7.a(), Boolean.TRUE, null, null, h0Var != null ? h0Var.j() : null, null, str2, str3, null);
    }
}
