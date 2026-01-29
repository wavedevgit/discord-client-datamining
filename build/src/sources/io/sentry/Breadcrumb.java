package io.sentry;

import io.sentry.SentryLevel;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Breadcrumb implements w1, Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final Long f28695d;

    /* renamed from: e  reason: collision with root package name */
    private Date f28696e;

    /* renamed from: i  reason: collision with root package name */
    private final Long f28697i;

    /* renamed from: o  reason: collision with root package name */
    private String f28698o;

    /* renamed from: p  reason: collision with root package name */
    private String f28699p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28700q;

    /* renamed from: r  reason: collision with root package name */
    private String f28701r;

    /* renamed from: s  reason: collision with root package name */
    private String f28702s;

    /* renamed from: t  reason: collision with root package name */
    private SentryLevel f28703t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28704u;

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
            breadcrumb.f28698o = str;
            breadcrumb.f28699p = str2;
            breadcrumb.f28700q = concurrentHashMap;
            breadcrumb.f28701r = str3;
            breadcrumb.f28702s = str4;
            breadcrumb.f28703t = sentryLevel;
            breadcrumb.F(concurrentHashMap2);
            e3Var.y();
            return breadcrumb;
        }
    }

    public Breadcrumb(Date date) {
        this.f28700q = new ConcurrentHashMap();
        this.f28697i = Long.valueOf(System.nanoTime());
        this.f28696e = date;
        this.f28695d = null;
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
        if (breadcrumb.t().getTime() == breadcrumb2.t().getTime() && io.sentry.util.y.a(breadcrumb.f28698o, breadcrumb2.f28698o) && io.sentry.util.y.a(breadcrumb.f28699p, breadcrumb2.f28699p) && io.sentry.util.y.a(breadcrumb.f28701r, breadcrumb2.f28701r) && io.sentry.util.y.a(breadcrumb.f28702s, breadcrumb2.f28702s) && breadcrumb.f28703t == breadcrumb2.f28703t) {
            return true;
        }
        return false;
    }

    private static int j(Breadcrumb breadcrumb) {
        return io.sentry.util.y.b(Long.valueOf(breadcrumb.t().getTime()), breadcrumb.f28698o, breadcrumb.f28699p, breadcrumb.f28701r, breadcrumb.f28702s, breadcrumb.f28703t);
    }

    private static boolean v(Breadcrumb breadcrumb, Breadcrumb breadcrumb2) {
        if (i(breadcrumb, breadcrumb2) && io.sentry.util.y.a(breadcrumb.o("status_code"), breadcrumb2.o("status_code")) && io.sentry.util.y.a(breadcrumb.o("url"), breadcrumb2.o("url")) && io.sentry.util.y.a(breadcrumb.o("method"), breadcrumb2.o("method")) && io.sentry.util.y.a(breadcrumb.o("http.fragment"), breadcrumb2.o("http.fragment")) && io.sentry.util.y.a(breadcrumb.o("http.query"), breadcrumb2.o("http.query"))) {
            return true;
        }
        return false;
    }

    private static int w(Breadcrumb breadcrumb) {
        return io.sentry.util.y.b(Long.valueOf(breadcrumb.t().getTime()), breadcrumb.f28698o, breadcrumb.f28699p, breadcrumb.f28701r, breadcrumb.f28702s, breadcrumb.f28703t, breadcrumb.o("status_code"), breadcrumb.o("url"), breadcrumb.o("method"), breadcrumb.o("http.fragment"), breadcrumb.o("http.query"));
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
            this.f28700q.put(str, obj);
        }
    }

    public void B(SentryLevel sentryLevel) {
        this.f28703t = sentryLevel;
    }

    public void C(String str) {
        this.f28698o = str;
    }

    public void D(String str) {
        this.f28702s = str;
    }

    public void E(String str) {
        this.f28699p = str;
    }

    public void F(Map map) {
        this.f28704u = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && Breadcrumb.class == obj.getClass()) {
            Breadcrumb breadcrumb = (Breadcrumb) obj;
            if ("http".equals(this.f28699p)) {
                return v(this, breadcrumb);
            }
            return i(this, breadcrumb);
        }
        return false;
    }

    public int hashCode() {
        if ("http".equals(this.f28699p)) {
            return w(this);
        }
        return j(this);
    }

    @Override // java.lang.Comparable
    /* renamed from: k */
    public int compareTo(Breadcrumb breadcrumb) {
        return this.f28697i.compareTo(breadcrumb.f28697i);
    }

    public String l() {
        return this.f28701r;
    }

    public Object o(String str) {
        if (str == null) {
            return null;
        }
        return this.f28700q.get(str);
    }

    public Map p() {
        return this.f28700q;
    }

    public SentryLevel q() {
        return this.f28703t;
    }

    public String r() {
        return this.f28698o;
    }

    public String s() {
        return this.f28702s;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("timestamp").j(iLogger, t());
        if (this.f28698o != null) {
            f3Var.e("message").f(this.f28698o);
        }
        if (this.f28699p != null) {
            f3Var.e("type").f(this.f28699p);
        }
        f3Var.e("data").j(iLogger, this.f28700q);
        if (this.f28701r != null) {
            f3Var.e("category").f(this.f28701r);
        }
        if (this.f28702s != null) {
            f3Var.e("origin").f(this.f28702s);
        }
        if (this.f28703t != null) {
            f3Var.e("level").j(iLogger, this.f28703t);
        }
        Map map = this.f28704u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28704u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public Date t() {
        Date date = this.f28696e;
        if (date != null) {
            return (Date) date.clone();
        }
        Long l10 = this.f28695d;
        if (l10 != null) {
            Date e10 = k.e(l10.longValue());
            this.f28696e = e10;
            return e10;
        }
        throw new IllegalStateException("No timestamp set for breadcrumb");
    }

    public String u() {
        return this.f28699p;
    }

    public void y(String str) {
        if (str == null) {
            return;
        }
        this.f28700q.remove(str);
    }

    public void z(String str) {
        this.f28701r = str;
    }

    public Breadcrumb(long j10) {
        this.f28700q = new ConcurrentHashMap();
        this.f28697i = Long.valueOf(System.nanoTime());
        this.f28695d = Long.valueOf(j10);
        this.f28696e = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Breadcrumb(Breadcrumb breadcrumb) {
        this.f28700q = new ConcurrentHashMap();
        this.f28697i = Long.valueOf(System.nanoTime());
        this.f28696e = breadcrumb.f28696e;
        this.f28695d = breadcrumb.f28695d;
        this.f28698o = breadcrumb.f28698o;
        this.f28699p = breadcrumb.f28699p;
        this.f28701r = breadcrumb.f28701r;
        this.f28702s = breadcrumb.f28702s;
        Map b10 = io.sentry.util.c.b(breadcrumb.f28700q);
        if (b10 != null) {
            this.f28700q = b10;
        }
        this.f28704u = io.sentry.util.c.b(breadcrumb.f28704u);
        this.f28703t = breadcrumb.f28703t;
    }

    public Breadcrumb() {
        this(System.currentTimeMillis());
    }

    public Breadcrumb(String str) {
        this();
        this.f28698o = str;
    }
}
