package io.sentry;

import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f29512d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29513e;

    /* renamed from: i  reason: collision with root package name */
    private final String f29514i;

    /* renamed from: o  reason: collision with root package name */
    private final String f29515o;

    /* renamed from: p  reason: collision with root package name */
    private final String f29516p;

    /* renamed from: q  reason: collision with root package name */
    private final String f29517q;

    /* renamed from: r  reason: collision with root package name */
    private final String f29518r;

    /* renamed from: s  reason: collision with root package name */
    private final String f29519s;

    /* renamed from: t  reason: collision with root package name */
    private final String f29520t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.protocol.x f29521u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29522v;

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
            e3Var.s();
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
                    String m02 = e3Var.m0();
                    m02.getClass();
                    char c10 = 65535;
                    switch (m02.hashCode()) {
                        case -454767501:
                            if (m02.equals("replay_id")) {
                                c10 = 0;
                                break;
                            }
                            break;
                        case -147132913:
                            if (m02.equals("user_id")) {
                                c10 = 1;
                                break;
                            }
                            break;
                        case -85904877:
                            if (m02.equals("environment")) {
                                c10 = 2;
                                break;
                            }
                            break;
                        case 153192858:
                            if (m02.equals("sample_rand")) {
                                c10 = 3;
                                break;
                            }
                            break;
                        case 153193045:
                            if (m02.equals("sample_rate")) {
                                c10 = 4;
                                break;
                            }
                            break;
                        case 1090594823:
                            if (m02.equals("release")) {
                                c10 = 5;
                                break;
                            }
                            break;
                        case 1270300245:
                            if (m02.equals("trace_id")) {
                                c10 = 6;
                                break;
                            }
                            break;
                        case 1864843258:
                            if (m02.equals("sampled")) {
                                c10 = 7;
                                break;
                            }
                            break;
                        case 1904812937:
                            if (m02.equals("public_key")) {
                                c10 = '\b';
                                break;
                            }
                            break;
                        case 2141246174:
                            if (m02.equals("transaction")) {
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
                            str = e3Var.f1();
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
                            e3Var.v1(iLogger, concurrentHashMap, m02);
                            xVar = xVar3;
                            break;
                    }
                    str = str9;
                } else if (xVar3 != null) {
                    if (str9 != null) {
                        q8 q8Var = new q8(xVar3, str9, str2, str3, str4, str5, str6, str7, xVar2, str8);
                        q8Var.c(concurrentHashMap);
                        e3Var.z();
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
        return this.f29519s;
    }

    public String b() {
        return this.f29518r;
    }

    public void c(Map map) {
        this.f29522v = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("trace_id").j(iLogger, this.f29512d);
        f3Var.e("public_key").f(this.f29513e);
        if (this.f29514i != null) {
            f3Var.e("release").f(this.f29514i);
        }
        if (this.f29515o != null) {
            f3Var.e("environment").f(this.f29515o);
        }
        if (this.f29516p != null) {
            f3Var.e("user_id").f(this.f29516p);
        }
        if (this.f29517q != null) {
            f3Var.e("transaction").f(this.f29517q);
        }
        if (this.f29518r != null) {
            f3Var.e("sample_rate").f(this.f29518r);
        }
        if (this.f29519s != null) {
            f3Var.e("sample_rand").f(this.f29519s);
        }
        if (this.f29520t != null) {
            f3Var.e("sampled").f(this.f29520t);
        }
        if (this.f29521u != null) {
            f3Var.e("replay_id").j(iLogger, this.f29521u);
        }
        Map map = this.f29522v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29522v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    q8(io.sentry.protocol.x xVar, String str, String str2, String str3, String str4, String str5, String str6, String str7, io.sentry.protocol.x xVar2) {
        this(xVar, str, str2, str3, str4, str5, str6, str7, xVar2, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q8(io.sentry.protocol.x xVar, String str, String str2, String str3, String str4, String str5, String str6, String str7, io.sentry.protocol.x xVar2, String str8) {
        this.f29512d = xVar;
        this.f29513e = str;
        this.f29514i = str2;
        this.f29515o = str3;
        this.f29516p = str4;
        this.f29517q = str5;
        this.f29518r = str6;
        this.f29520t = str7;
        this.f29521u = xVar2;
        this.f29519s = str8;
    }
}
