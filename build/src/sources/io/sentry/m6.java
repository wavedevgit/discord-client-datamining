package io.sentry;

import io.sentry.v6;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f29776d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f29777e;

    /* renamed from: i  reason: collision with root package name */
    private final String f29778i;

    /* renamed from: o  reason: collision with root package name */
    private final String f29779o;

    /* renamed from: p  reason: collision with root package name */
    private final v6 f29780p;

    /* renamed from: q  reason: collision with root package name */
    private final int f29781q;

    /* renamed from: r  reason: collision with root package name */
    private final Callable f29782r;

    /* renamed from: s  reason: collision with root package name */
    private final String f29783s;

    /* renamed from: t  reason: collision with root package name */
    private Map f29784t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private Exception c(String str, ILogger iLogger) {
            String str2 = "Missing required field \"" + str + "\"";
            IllegalStateException illegalStateException = new IllegalStateException(str2);
            iLogger.b(SentryLevel.ERROR, str2, illegalStateException);
            return illegalStateException;
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public m6 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            HashMap hashMap = null;
            v6 v6Var = null;
            String str = null;
            String str2 = null;
            String str3 = null;
            String str4 = null;
            Integer num = null;
            int i10 = 0;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1966910237:
                        if (m02.equals("item_count")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1106363674:
                        if (m02.equals("length")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -734768633:
                        if (m02.equals("filename")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -672977706:
                        if (m02.equals("attachment_type")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 831846208:
                        if (m02.equals("content_type")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (m02.equals("platform")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        num = e3Var.k1();
                        break;
                    case 1:
                        i10 = e3Var.nextInt();
                        break;
                    case 2:
                        str2 = e3Var.r1();
                        break;
                    case 3:
                        str3 = e3Var.r1();
                        break;
                    case 4:
                        v6Var = (v6) e3Var.H0(iLogger, new v6.a());
                        break;
                    case 5:
                        str = e3Var.r1();
                        break;
                    case 6:
                        str4 = e3Var.r1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            if (v6Var != null) {
                m6 m6Var = new m6(v6Var, i10, str, str2, str3, str4, num);
                m6Var.c(hashMap);
                e3Var.y();
                return m6Var;
            }
            throw c("type", iLogger);
        }
    }

    public m6(v6 v6Var, int i10, String str, String str2, String str3, String str4, Integer num) {
        this.f29780p = (v6) io.sentry.util.y.c(v6Var, "type is required");
        this.f29776d = str;
        this.f29781q = i10;
        this.f29778i = str2;
        this.f29782r = null;
        this.f29783s = str3;
        this.f29779o = str4;
        this.f29777e = num;
    }

    public int a() {
        Callable callable = this.f29782r;
        if (callable != null) {
            try {
                return ((Integer) callable.call()).intValue();
            } catch (Throwable unused) {
                return -1;
            }
        }
        return this.f29781q;
    }

    public v6 b() {
        return this.f29780p;
    }

    public void c(Map map) {
        this.f29784t = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29776d != null) {
            f3Var.e("content_type").f(this.f29776d);
        }
        if (this.f29778i != null) {
            f3Var.e("filename").f(this.f29778i);
        }
        f3Var.e("type").j(iLogger, this.f29780p);
        if (this.f29783s != null) {
            f3Var.e("attachment_type").f(this.f29783s);
        }
        if (this.f29779o != null) {
            f3Var.e("platform").f(this.f29779o);
        }
        if (this.f29777e != null) {
            f3Var.e("item_count").i(this.f29777e);
        }
        f3Var.e("length").b(a());
        Map map = this.f29784t;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29784t.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m6(v6 v6Var, Callable callable, String str, String str2, String str3) {
        this(v6Var, callable, str, str2, str3, (String) null, (Integer) null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m6(v6 v6Var, Callable callable, String str, String str2, String str3, String str4, Integer num) {
        this.f29780p = (v6) io.sentry.util.y.c(v6Var, "type is required");
        this.f29776d = str;
        this.f29781q = -1;
        this.f29778i = str2;
        this.f29782r = callable;
        this.f29783s = str3;
        this.f29779o = str4;
        this.f29777e = num;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m6(v6 v6Var, Callable callable, String str, String str2) {
        this(v6Var, callable, str, str2, null);
    }
}
