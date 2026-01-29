package io.sentry;

import io.sentry.v6;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f30194d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f30195e;

    /* renamed from: i  reason: collision with root package name */
    private final String f30196i;

    /* renamed from: o  reason: collision with root package name */
    private final String f30197o;

    /* renamed from: p  reason: collision with root package name */
    private final v6 f30198p;

    /* renamed from: q  reason: collision with root package name */
    private final int f30199q;

    /* renamed from: r  reason: collision with root package name */
    private final Callable f30200r;

    /* renamed from: s  reason: collision with root package name */
    private final String f30201s;

    /* renamed from: t  reason: collision with root package name */
    private Map f30202t;

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
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1966910237:
                        if (l02.equals("item_count")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1106363674:
                        if (l02.equals("length")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -734768633:
                        if (l02.equals("filename")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -672977706:
                        if (l02.equals("attachment_type")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 831846208:
                        if (l02.equals("content_type")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (l02.equals("platform")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        num = e3Var.j1();
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
                        v6Var = (v6) e3Var.G0(iLogger, new v6.a());
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
                        e3Var.v1(iLogger, hashMap, l02);
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
        this.f30198p = (v6) io.sentry.util.y.c(v6Var, "type is required");
        this.f30194d = str;
        this.f30199q = i10;
        this.f30196i = str2;
        this.f30200r = null;
        this.f30201s = str3;
        this.f30197o = str4;
        this.f30195e = num;
    }

    public int a() {
        Callable callable = this.f30200r;
        if (callable != null) {
            try {
                return ((Integer) callable.call()).intValue();
            } catch (Throwable unused) {
                return -1;
            }
        }
        return this.f30199q;
    }

    public v6 b() {
        return this.f30198p;
    }

    public void c(Map map) {
        this.f30202t = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30194d != null) {
            f3Var.e("content_type").f(this.f30194d);
        }
        if (this.f30196i != null) {
            f3Var.e("filename").f(this.f30196i);
        }
        f3Var.e("type").j(iLogger, this.f30198p);
        if (this.f30201s != null) {
            f3Var.e("attachment_type").f(this.f30201s);
        }
        if (this.f30197o != null) {
            f3Var.e("platform").f(this.f30197o);
        }
        if (this.f30195e != null) {
            f3Var.e("item_count").i(this.f30195e);
        }
        f3Var.e("length").b(a());
        Map map = this.f30202t;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30202t.get(str);
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
        this.f30198p = (v6) io.sentry.util.y.c(v6Var, "type is required");
        this.f30194d = str;
        this.f30199q = -1;
        this.f30196i = str2;
        this.f30200r = callable;
        this.f30201s = str3;
        this.f30197o = str4;
        this.f30195e = num;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m6(v6 v6Var, Callable callable, String str, String str2) {
        this(v6Var, callable, str, str2, null);
    }
}
