package io.sentry;

import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f28656d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28657e;

    /* renamed from: i  reason: collision with root package name */
    private final String f28658i;

    /* renamed from: o  reason: collision with root package name */
    private final String f28659o;

    /* renamed from: p  reason: collision with root package name */
    private final String f28660p;

    /* renamed from: q  reason: collision with root package name */
    private final String f28661q;

    /* renamed from: r  reason: collision with root package name */
    private final String f28662r;

    /* renamed from: s  reason: collision with root package name */
    private final String f28663s;

    /* renamed from: t  reason: collision with root package name */
    private final String f28664t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.protocol.x f28665u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28666v;

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
            e3Var.u();
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
                    String o02 = e3Var.o0();
                    o02.getClass();
                    char c10 = 65535;
                    switch (o02.hashCode()) {
                        case -454767501:
                            if (o02.equals("replay_id")) {
                                c10 = 0;
                                break;
                            }
                            break;
                        case -147132913:
                            if (o02.equals("user_id")) {
                                c10 = 1;
                                break;
                            }
                            break;
                        case -85904877:
                            if (o02.equals("environment")) {
                                c10 = 2;
                                break;
                            }
                            break;
                        case 153192858:
                            if (o02.equals("sample_rand")) {
                                c10 = 3;
                                break;
                            }
                            break;
                        case 153193045:
                            if (o02.equals("sample_rate")) {
                                c10 = 4;
                                break;
                            }
                            break;
                        case 1090594823:
                            if (o02.equals("release")) {
                                c10 = 5;
                                break;
                            }
                            break;
                        case 1270300245:
                            if (o02.equals("trace_id")) {
                                c10 = 6;
                                break;
                            }
                            break;
                        case 1864843258:
                            if (o02.equals("sampled")) {
                                c10 = 7;
                                break;
                            }
                            break;
                        case 1904812937:
                            if (o02.equals("public_key")) {
                                c10 = '\b';
                                break;
                            }
                            break;
                        case 2141246174:
                            if (o02.equals("transaction")) {
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
                            str4 = e3Var.q1();
                            xVar = xVar3;
                            break;
                        case 2:
                            str3 = e3Var.q1();
                            xVar = xVar3;
                            break;
                        case 3:
                            str8 = e3Var.q1();
                            xVar = xVar3;
                            break;
                        case 4:
                            str6 = e3Var.q1();
                            xVar = xVar3;
                            break;
                        case 5:
                            str2 = e3Var.q1();
                            xVar = xVar3;
                            break;
                        case 6:
                            xVar = new x.a().a(e3Var, iLogger);
                            break;
                        case 7:
                            str7 = e3Var.q1();
                            xVar = xVar3;
                            break;
                        case '\b':
                            str = e3Var.e1();
                            xVar = xVar3;
                            continue;
                        case '\t':
                            str5 = e3Var.q1();
                            xVar = xVar3;
                            break;
                        default:
                            if (concurrentHashMap == null) {
                                concurrentHashMap = new ConcurrentHashMap();
                            }
                            e3Var.u1(iLogger, concurrentHashMap, o02);
                            xVar = xVar3;
                            break;
                    }
                    str = str9;
                } else if (xVar3 != null) {
                    if (str9 != null) {
                        q8 q8Var = new q8(xVar3, str9, str2, str3, str4, str5, str6, str7, xVar2, str8);
                        q8Var.c(concurrentHashMap);
                        e3Var.D();
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
        return this.f28663s;
    }

    public String b() {
        return this.f28662r;
    }

    public void c(Map map) {
        this.f28666v = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("trace_id").j(iLogger, this.f28656d);
        f3Var.e("public_key").f(this.f28657e);
        if (this.f28658i != null) {
            f3Var.e("release").f(this.f28658i);
        }
        if (this.f28659o != null) {
            f3Var.e("environment").f(this.f28659o);
        }
        if (this.f28660p != null) {
            f3Var.e("user_id").f(this.f28660p);
        }
        if (this.f28661q != null) {
            f3Var.e("transaction").f(this.f28661q);
        }
        if (this.f28662r != null) {
            f3Var.e("sample_rate").f(this.f28662r);
        }
        if (this.f28663s != null) {
            f3Var.e("sample_rand").f(this.f28663s);
        }
        if (this.f28664t != null) {
            f3Var.e("sampled").f(this.f28664t);
        }
        if (this.f28665u != null) {
            f3Var.e("replay_id").j(iLogger, this.f28665u);
        }
        Map map = this.f28666v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28666v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    q8(io.sentry.protocol.x xVar, String str, String str2, String str3, String str4, String str5, String str6, String str7, io.sentry.protocol.x xVar2) {
        this(xVar, str, str2, str3, str4, str5, str6, str7, xVar2, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q8(io.sentry.protocol.x xVar, String str, String str2, String str3, String str4, String str5, String str6, String str7, io.sentry.protocol.x xVar2, String str8) {
        this.f28656d = xVar;
        this.f28657e = str;
        this.f28658i = str2;
        this.f28659o = str3;
        this.f28660p = str4;
        this.f28661q = str5;
        this.f28662r = str6;
        this.f28664t = str7;
        this.f28665u = xVar2;
        this.f28663s = str8;
    }
}
