package io.sentry;

import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f30511d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30512e;

    /* renamed from: i  reason: collision with root package name */
    private final String f30513i;

    /* renamed from: o  reason: collision with root package name */
    private final String f30514o;

    /* renamed from: p  reason: collision with root package name */
    private final String f30515p;

    /* renamed from: q  reason: collision with root package name */
    private final String f30516q;

    /* renamed from: r  reason: collision with root package name */
    private final String f30517r;

    /* renamed from: s  reason: collision with root package name */
    private final String f30518s;

    /* renamed from: t  reason: collision with root package name */
    private final String f30519t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.protocol.x f30520u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30521v;

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
        public q8 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            io.sentry.protocol.x xVar = null;
            String str = null;
            String str2 = null;
            String str3 = null;
            String str4 = null;
            String str5 = null;
            String str6 = null;
            String str7 = null;
            io.sentry.protocol.x xVar2 = null;
            String str8 = null;
            while (true) {
                io.sentry.protocol.x xVar3 = xVar;
                String str9 = str;
                if (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                    String l02 = e3Var.l0();
                    l02.getClass();
                    char c10 = 65535;
                    switch (l02.hashCode()) {
                        case -454767501:
                            if (l02.equals("replay_id")) {
                                c10 = 0;
                                break;
                            }
                            break;
                        case -147132913:
                            if (l02.equals("user_id")) {
                                c10 = 1;
                                break;
                            }
                            break;
                        case -85904877:
                            if (l02.equals("environment")) {
                                c10 = 2;
                                break;
                            }
                            break;
                        case 153192858:
                            if (l02.equals("sample_rand")) {
                                c10 = 3;
                                break;
                            }
                            break;
                        case 153193045:
                            if (l02.equals("sample_rate")) {
                                c10 = 4;
                                break;
                            }
                            break;
                        case 1090594823:
                            if (l02.equals("release")) {
                                c10 = 5;
                                break;
                            }
                            break;
                        case 1270300245:
                            if (l02.equals("trace_id")) {
                                c10 = 6;
                                break;
                            }
                            break;
                        case 1864843258:
                            if (l02.equals("sampled")) {
                                c10 = 7;
                                break;
                            }
                            break;
                        case 1904812937:
                            if (l02.equals("public_key")) {
                                c10 = '\b';
                                break;
                            }
                            break;
                        case 2141246174:
                            if (l02.equals("transaction")) {
                                c10 = '\t';
                                break;
                            }
                            break;
                    }
                    switch (c10) {
                        case 0:
                            xVar2 = new x.a().a(e3Var, iLogger);
                            xVar = xVar3;
                            break;
                        case 1:
                            str4 = e3Var.r1();
                            xVar = xVar3;
                            break;
                        case 2:
                            str3 = e3Var.r1();
                            xVar = xVar3;
                            break;
                        case 3:
                            str8 = e3Var.r1();
                            xVar = xVar3;
                            break;
                        case 4:
                            str6 = e3Var.r1();
                            xVar = xVar3;
                            break;
                        case 5:
                            str2 = e3Var.r1();
                            xVar = xVar3;
                            break;
                        case 6:
                            xVar = new x.a().a(e3Var, iLogger);
                            break;
                        case 7:
                            str7 = e3Var.r1();
                            xVar = xVar3;
                            break;
                        case '\b':
                            str = e3Var.e1();
                            xVar = xVar3;
                            continue;
                        case '\t':
                            str5 = e3Var.r1();
                            xVar = xVar3;
                            break;
                        default:
                            if (concurrentHashMap == null) {
                                concurrentHashMap = new ConcurrentHashMap();
                            }
                            e3Var.v1(iLogger, concurrentHashMap, l02);
                            xVar = xVar3;
                            break;
                    }
                    str = str9;
                } else if (xVar3 != null) {
                    if (str9 != null) {
                        q8 q8Var = new q8(xVar3, str9, str2, str3, str4, str5, str6, str7, xVar2, str8);
                        q8Var.c(concurrentHashMap);
                        e3Var.y();
                        return q8Var;
                    }
                    throw c("public_key", iLogger);
                } else {
                    throw c("trace_id", iLogger);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q8(io.sentry.protocol.x xVar, String str) {
        this(xVar, str, null, null, null, null, null, null, null);
    }

    public String a() {
        return this.f30518s;
    }

    public String b() {
        return this.f30517r;
    }

    public void c(Map map) {
        this.f30521v = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("trace_id").j(iLogger, this.f30511d);
        f3Var.e("public_key").f(this.f30512e);
        if (this.f30513i != null) {
            f3Var.e("release").f(this.f30513i);
        }
        if (this.f30514o != null) {
            f3Var.e("environment").f(this.f30514o);
        }
        if (this.f30515p != null) {
            f3Var.e("user_id").f(this.f30515p);
        }
        if (this.f30516q != null) {
            f3Var.e("transaction").f(this.f30516q);
        }
        if (this.f30517r != null) {
            f3Var.e("sample_rate").f(this.f30517r);
        }
        if (this.f30518s != null) {
            f3Var.e("sample_rand").f(this.f30518s);
        }
        if (this.f30519t != null) {
            f3Var.e("sampled").f(this.f30519t);
        }
        if (this.f30520u != null) {
            f3Var.e("replay_id").j(iLogger, this.f30520u);
        }
        Map map = this.f30521v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30521v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    q8(io.sentry.protocol.x xVar, String str, String str2, String str3, String str4, String str5, String str6, String str7, io.sentry.protocol.x xVar2) {
        this(xVar, str, str2, str3, str4, str5, str6, str7, xVar2, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q8(io.sentry.protocol.x xVar, String str, String str2, String str3, String str4, String str5, String str6, String str7, io.sentry.protocol.x xVar2, String str8) {
        this.f30511d = xVar;
        this.f30512e = str;
        this.f30513i = str2;
        this.f30514o = str3;
        this.f30515p = str4;
        this.f30516q = str5;
        this.f30517r = str6;
        this.f30519t = str7;
        this.f30520u = xVar2;
        this.f30518s = str8;
    }
}
