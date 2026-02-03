package io.sentry;

import io.sentry.SentryLevel;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Breadcrumb implements w1, Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final Long f28638d;

    /* renamed from: e  reason: collision with root package name */
    private Date f28639e;

    /* renamed from: i  reason: collision with root package name */
    private final Long f28640i;

    /* renamed from: o  reason: collision with root package name */
    private String f28641o;

    /* renamed from: p  reason: collision with root package name */
    private String f28642p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28643q;

    /* renamed from: r  reason: collision with root package name */
    private String f28644r;

    /* renamed from: s  reason: collision with root package name */
    private String f28645s;

    /* renamed from: t  reason: collision with root package name */
    private SentryLevel f28646t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28647u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v4, types: [java.util.Map] */
        @Override // io.sentry.m1
        /* renamed from: b */
        public Breadcrumb a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            Date d10 = k.d();
            ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
            String str = null;
            String str2 = null;
            String str3 = null;
            String str4 = null;
            SentryLevel sentryLevel = null;
            ConcurrentHashMap concurrentHashMap2 = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1008619738:
                        if (l02.equals("origin")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3076010:
                        if (l02.equals("data")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 50511102:
                        if (l02.equals("category")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 55126294:
                        if (l02.equals("timestamp")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 102865796:
                        if (l02.equals("level")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 954925063:
                        if (l02.equals("message")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        str4 = e3Var.r1();
                        break;
                    case 1:
                        ?? b10 = io.sentry.util.c.b((Map) e3Var.V1());
                        if (b10 == 0) {
                            break;
                        } else {
                            concurrentHashMap = b10;
                            break;
                        }
                    case 2:
                        str2 = e3Var.r1();
                        break;
                    case 3:
                        str3 = e3Var.r1();
                        break;
                    case 4:
                        Date r02 = e3Var.r0(iLogger);
                        if (r02 == null) {
                            break;
                        } else {
                            d10 = r02;
                            break;
                        }
                    case 5:
                        try {
                            sentryLevel = new SentryLevel.a().a(e3Var, iLogger);
                            break;
                        } catch (Exception e10) {
                            iLogger.a(SentryLevel.ERROR, e10, "Error when deserializing SentryLevel", new Object[0]);
                            break;
                        }
                    case 6:
                        str = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap2 == null) {
                            concurrentHashMap2 = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap2, l02);
                        break;
                }
            }
            Breadcrumb breadcrumb = new Breadcrumb(d10);
            breadcrumb.f28641o = str;
            breadcrumb.f28642p = str2;
            breadcrumb.f28643q = concurrentHashMap;
            breadcrumb.f28644r = str3;
            breadcrumb.f28645s = str4;
            breadcrumb.f28646t = sentryLevel;
            breadcrumb.F(concurrentHashMap2);
            e3Var.y();
            return breadcrumb;
        }
    }

    public Breadcrumb(Date date) {
        this.f28643q = new ConcurrentHashMap();
        this.f28640i = Long.valueOf(System.nanoTime());
        this.f28639e = date;
        this.f28638d = null;
    }

    public static Breadcrumb G(String str, String str2, String str3, String str4, Map map) {
        Breadcrumb breadcrumb = new Breadcrumb();
        breadcrumb.E("user");
        breadcrumb.z("ui." + str);
        if (str2 != null) {
            breadcrumb.A("view.id", str2);
        }
        if (str3 != null) {
            breadcrumb.A("view.class", str3);
        }
        if (str4 != null) {
            breadcrumb.A("view.tag", str4);
        }
        for (Map.Entry entry : map.entrySet()) {
            breadcrumb.p().put((String) entry.getKey(), entry.getValue());
        }
        breadcrumb.B(SentryLevel.INFO);
        return breadcrumb;
    }

    private static boolean i(Breadcrumb breadcrumb, Breadcrumb breadcrumb2) {
        if (breadcrumb.t().getTime() == breadcrumb2.t().getTime() && io.sentry.util.y.a(breadcrumb.f28641o, breadcrumb2.f28641o) && io.sentry.util.y.a(breadcrumb.f28642p, breadcrumb2.f28642p) && io.sentry.util.y.a(breadcrumb.f28644r, breadcrumb2.f28644r) && io.sentry.util.y.a(breadcrumb.f28645s, breadcrumb2.f28645s) && breadcrumb.f28646t == breadcrumb2.f28646t) {
            return true;
        }
        return false;
    }

    private static int j(Breadcrumb breadcrumb) {
        return io.sentry.util.y.b(Long.valueOf(breadcrumb.t().getTime()), breadcrumb.f28641o, breadcrumb.f28642p, breadcrumb.f28644r, breadcrumb.f28645s, breadcrumb.f28646t);
    }

    private static boolean v(Breadcrumb breadcrumb, Breadcrumb breadcrumb2) {
        if (i(breadcrumb, breadcrumb2) && io.sentry.util.y.a(breadcrumb.o("status_code"), breadcrumb2.o("status_code")) && io.sentry.util.y.a(breadcrumb.o("url"), breadcrumb2.o("url")) && io.sentry.util.y.a(breadcrumb.o("method"), breadcrumb2.o("method")) && io.sentry.util.y.a(breadcrumb.o("http.fragment"), breadcrumb2.o("http.fragment")) && io.sentry.util.y.a(breadcrumb.o("http.query"), breadcrumb2.o("http.query"))) {
            return true;
        }
        return false;
    }

    private static int w(Breadcrumb breadcrumb) {
        return io.sentry.util.y.b(Long.valueOf(breadcrumb.t().getTime()), breadcrumb.f28641o, breadcrumb.f28642p, breadcrumb.f28644r, breadcrumb.f28645s, breadcrumb.f28646t, breadcrumb.o("status_code"), breadcrumb.o("url"), breadcrumb.o("method"), breadcrumb.o("http.fragment"), breadcrumb.o("http.query"));
    }

    public static Breadcrumb x(String str) {
        Breadcrumb breadcrumb = new Breadcrumb();
        breadcrumb.E("info");
        breadcrumb.C(str);
        breadcrumb.B(SentryLevel.INFO);
        return breadcrumb;
    }

    public void A(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            y(str);
        } else {
            this.f28643q.put(str, obj);
        }
    }

    public void B(SentryLevel sentryLevel) {
        this.f28646t = sentryLevel;
    }

    public void C(String str) {
        this.f28641o = str;
    }

    public void D(String str) {
        this.f28645s = str;
    }

    public void E(String str) {
        this.f28642p = str;
    }

    public void F(Map map) {
        this.f28647u = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && Breadcrumb.class == obj.getClass()) {
            Breadcrumb breadcrumb = (Breadcrumb) obj;
            if ("http".equals(this.f28642p)) {
                return v(this, breadcrumb);
            }
            return i(this, breadcrumb);
        }
        return false;
    }

    public int hashCode() {
        if ("http".equals(this.f28642p)) {
            return w(this);
        }
        return j(this);
    }

    @Override // java.lang.Comparable
    /* renamed from: k */
    public int compareTo(Breadcrumb breadcrumb) {
        return this.f28640i.compareTo(breadcrumb.f28640i);
    }

    public String l() {
        return this.f28644r;
    }

    public Object o(String str) {
        if (str == null) {
            return null;
        }
        return this.f28643q.get(str);
    }

    public Map p() {
        return this.f28643q;
    }

    public SentryLevel q() {
        return this.f28646t;
    }

    public String r() {
        return this.f28641o;
    }

    public String s() {
        return this.f28645s;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("timestamp").j(iLogger, t());
        if (this.f28641o != null) {
            f3Var.e("message").f(this.f28641o);
        }
        if (this.f28642p != null) {
            f3Var.e("type").f(this.f28642p);
        }
        f3Var.e("data").j(iLogger, this.f28643q);
        if (this.f28644r != null) {
            f3Var.e("category").f(this.f28644r);
        }
        if (this.f28645s != null) {
            f3Var.e("origin").f(this.f28645s);
        }
        if (this.f28646t != null) {
            f3Var.e("level").j(iLogger, this.f28646t);
        }
        Map map = this.f28647u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28647u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public Date t() {
        Date date = this.f28639e;
        if (date != null) {
            return (Date) date.clone();
        }
        Long l10 = this.f28638d;
        if (l10 != null) {
            Date e10 = k.e(l10.longValue());
            this.f28639e = e10;
            return e10;
        }
        throw new IllegalStateException("No timestamp set for breadcrumb");
    }

    public String u() {
        return this.f28642p;
    }

    public void y(String str) {
        if (str == null) {
            return;
        }
        this.f28643q.remove(str);
    }

    public void z(String str) {
        this.f28644r = str;
    }

    public Breadcrumb(long j10) {
        this.f28643q = new ConcurrentHashMap();
        this.f28640i = Long.valueOf(System.nanoTime());
        this.f28638d = Long.valueOf(j10);
        this.f28639e = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Breadcrumb(Breadcrumb breadcrumb) {
        this.f28643q = new ConcurrentHashMap();
        this.f28640i = Long.valueOf(System.nanoTime());
        this.f28639e = breadcrumb.f28639e;
        this.f28638d = breadcrumb.f28638d;
        this.f28641o = breadcrumb.f28641o;
        this.f28642p = breadcrumb.f28642p;
        this.f28644r = breadcrumb.f28644r;
        this.f28645s = breadcrumb.f28645s;
        Map b10 = io.sentry.util.c.b(breadcrumb.f28643q);
        if (b10 != null) {
            this.f28643q = b10;
        }
        this.f28647u = io.sentry.util.c.b(breadcrumb.f28647u);
        this.f28646t = breadcrumb.f28646t;
    }

    public Breadcrumb() {
        this(System.currentTimeMillis());
    }

    public Breadcrumb(String str) {
        this();
        this.f28641o = str;
    }
}
