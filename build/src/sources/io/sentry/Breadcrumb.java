package io.sentry;

import io.sentry.SentryLevel;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Breadcrumb implements w1, Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final Long f27088d;

    /* renamed from: e  reason: collision with root package name */
    private Date f27089e;

    /* renamed from: i  reason: collision with root package name */
    private final Long f27090i;

    /* renamed from: o  reason: collision with root package name */
    private String f27091o;

    /* renamed from: p  reason: collision with root package name */
    private String f27092p;

    /* renamed from: q  reason: collision with root package name */
    private Map f27093q;

    /* renamed from: r  reason: collision with root package name */
    private String f27094r;

    /* renamed from: s  reason: collision with root package name */
    private String f27095s;

    /* renamed from: t  reason: collision with root package name */
    private SentryLevel f27096t;

    /* renamed from: u  reason: collision with root package name */
    private Map f27097u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v4, types: [java.util.Map] */
        @Override // io.sentry.m1
        /* renamed from: b */
        public Breadcrumb a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            Date d10 = k.d();
            ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
            String str = null;
            String str2 = null;
            String str3 = null;
            String str4 = null;
            SentryLevel sentryLevel = null;
            ConcurrentHashMap concurrentHashMap2 = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1008619738:
                        if (o02.equals("origin")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3076010:
                        if (o02.equals("data")) {
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
                    case 50511102:
                        if (o02.equals("category")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 102865796:
                        if (o02.equals("level")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 954925063:
                        if (o02.equals("message")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        str4 = e3Var.m1();
                        break;
                    case 1:
                        ?? b10 = io.sentry.util.c.b((Map) e3Var.T1());
                        if (b10 == 0) {
                            break;
                        } else {
                            concurrentHashMap = b10;
                            break;
                        }
                    case 2:
                        str2 = e3Var.m1();
                        break;
                    case 3:
                        str3 = e3Var.m1();
                        break;
                    case 4:
                        Date s02 = e3Var.s0(iLogger);
                        if (s02 == null) {
                            break;
                        } else {
                            d10 = s02;
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
                        str = e3Var.m1();
                        break;
                    default:
                        if (concurrentHashMap2 == null) {
                            concurrentHashMap2 = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap2, o02);
                        break;
                }
            }
            Breadcrumb breadcrumb = new Breadcrumb(d10);
            breadcrumb.f27091o = str;
            breadcrumb.f27092p = str2;
            breadcrumb.f27093q = concurrentHashMap;
            breadcrumb.f27094r = str3;
            breadcrumb.f27095s = str4;
            breadcrumb.f27096t = sentryLevel;
            breadcrumb.F(concurrentHashMap2);
            e3Var.D();
            return breadcrumb;
        }
    }

    public Breadcrumb(Date date) {
        this.f27093q = new ConcurrentHashMap();
        this.f27090i = Long.valueOf(System.nanoTime());
        this.f27089e = date;
        this.f27088d = null;
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
            breadcrumb.o().put((String) entry.getKey(), entry.getValue());
        }
        breadcrumb.B(SentryLevel.INFO);
        return breadcrumb;
    }

    private static boolean i(Breadcrumb breadcrumb, Breadcrumb breadcrumb2) {
        if (breadcrumb.t().getTime() == breadcrumb2.t().getTime() && io.sentry.util.y.a(breadcrumb.f27091o, breadcrumb2.f27091o) && io.sentry.util.y.a(breadcrumb.f27092p, breadcrumb2.f27092p) && io.sentry.util.y.a(breadcrumb.f27094r, breadcrumb2.f27094r) && io.sentry.util.y.a(breadcrumb.f27095s, breadcrumb2.f27095s) && breadcrumb.f27096t == breadcrumb2.f27096t) {
            return true;
        }
        return false;
    }

    private static int k(Breadcrumb breadcrumb) {
        return io.sentry.util.y.b(Long.valueOf(breadcrumb.t().getTime()), breadcrumb.f27091o, breadcrumb.f27092p, breadcrumb.f27094r, breadcrumb.f27095s, breadcrumb.f27096t);
    }

    private static boolean v(Breadcrumb breadcrumb, Breadcrumb breadcrumb2) {
        if (i(breadcrumb, breadcrumb2) && io.sentry.util.y.a(breadcrumb.n("status_code"), breadcrumb2.n("status_code")) && io.sentry.util.y.a(breadcrumb.n("url"), breadcrumb2.n("url")) && io.sentry.util.y.a(breadcrumb.n("method"), breadcrumb2.n("method")) && io.sentry.util.y.a(breadcrumb.n("http.fragment"), breadcrumb2.n("http.fragment")) && io.sentry.util.y.a(breadcrumb.n("http.query"), breadcrumb2.n("http.query"))) {
            return true;
        }
        return false;
    }

    private static int w(Breadcrumb breadcrumb) {
        return io.sentry.util.y.b(Long.valueOf(breadcrumb.t().getTime()), breadcrumb.f27091o, breadcrumb.f27092p, breadcrumb.f27094r, breadcrumb.f27095s, breadcrumb.f27096t, breadcrumb.n("status_code"), breadcrumb.n("url"), breadcrumb.n("method"), breadcrumb.n("http.fragment"), breadcrumb.n("http.query"));
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
            this.f27093q.put(str, obj);
        }
    }

    public void B(SentryLevel sentryLevel) {
        this.f27096t = sentryLevel;
    }

    public void C(String str) {
        this.f27091o = str;
    }

    public void D(String str) {
        this.f27095s = str;
    }

    public void E(String str) {
        this.f27092p = str;
    }

    public void F(Map map) {
        this.f27097u = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && Breadcrumb.class == obj.getClass()) {
            Breadcrumb breadcrumb = (Breadcrumb) obj;
            if ("http".equals(this.f27092p)) {
                return v(this, breadcrumb);
            }
            return i(this, breadcrumb);
        }
        return false;
    }

    public int hashCode() {
        if ("http".equals(this.f27092p)) {
            return w(this);
        }
        return k(this);
    }

    @Override // java.lang.Comparable
    /* renamed from: l */
    public int compareTo(Breadcrumb breadcrumb) {
        return this.f27090i.compareTo(breadcrumb.f27090i);
    }

    public String m() {
        return this.f27094r;
    }

    public Object n(String str) {
        if (str == null) {
            return null;
        }
        return this.f27093q.get(str);
    }

    public Map o() {
        return this.f27093q;
    }

    public SentryLevel q() {
        return this.f27096t;
    }

    public String r() {
        return this.f27091o;
    }

    public String s() {
        return this.f27095s;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("timestamp").j(iLogger, t());
        if (this.f27091o != null) {
            f3Var.e("message").f(this.f27091o);
        }
        if (this.f27092p != null) {
            f3Var.e("type").f(this.f27092p);
        }
        f3Var.e("data").j(iLogger, this.f27093q);
        if (this.f27094r != null) {
            f3Var.e("category").f(this.f27094r);
        }
        if (this.f27095s != null) {
            f3Var.e("origin").f(this.f27095s);
        }
        if (this.f27096t != null) {
            f3Var.e("level").j(iLogger, this.f27096t);
        }
        Map map = this.f27097u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f27097u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public Date t() {
        Date date = this.f27089e;
        if (date != null) {
            return (Date) date.clone();
        }
        Long l10 = this.f27088d;
        if (l10 != null) {
            Date e10 = k.e(l10.longValue());
            this.f27089e = e10;
            return e10;
        }
        throw new IllegalStateException("No timestamp set for breadcrumb");
    }

    public String u() {
        return this.f27092p;
    }

    public void y(String str) {
        if (str == null) {
            return;
        }
        this.f27093q.remove(str);
    }

    public void z(String str) {
        this.f27094r = str;
    }

    public Breadcrumb(long j10) {
        this.f27093q = new ConcurrentHashMap();
        this.f27090i = Long.valueOf(System.nanoTime());
        this.f27088d = Long.valueOf(j10);
        this.f27089e = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Breadcrumb(Breadcrumb breadcrumb) {
        this.f27093q = new ConcurrentHashMap();
        this.f27090i = Long.valueOf(System.nanoTime());
        this.f27089e = breadcrumb.f27089e;
        this.f27088d = breadcrumb.f27088d;
        this.f27091o = breadcrumb.f27091o;
        this.f27092p = breadcrumb.f27092p;
        this.f27094r = breadcrumb.f27094r;
        this.f27095s = breadcrumb.f27095s;
        Map b10 = io.sentry.util.c.b(breadcrumb.f27093q);
        if (b10 != null) {
            this.f27093q = b10;
        }
        this.f27097u = io.sentry.util.c.b(breadcrumb.f27097u);
        this.f27096t = breadcrumb.f27096t;
    }

    public Breadcrumb() {
        this(System.currentTimeMillis());
    }

    public Breadcrumb(String str) {
        this();
        this.f27091o = str;
    }
}
