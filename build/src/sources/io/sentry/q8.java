package io.sentry;

import io.sentry.protocol.x;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q8 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.protocol.x f30093d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30094e;

    /* renamed from: i  reason: collision with root package name */
    private final String f30095i;

    /* renamed from: o  reason: collision with root package name */
    private final String f30096o;

    /* renamed from: p  reason: collision with root package name */
    private final String f30097p;

    /* renamed from: q  reason: collision with root package name */
    private final String f30098q;

    /* renamed from: r  reason: collision with root package name */
    private final String f30099r;

    /* renamed from: s  reason: collision with root package name */
    private final String f30100s;

    /* renamed from: t  reason: collision with root package name */
    private final String f30101t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.protocol.x f30102u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30103v;

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
        return this.f30100s;
    }

    public String b() {
        return this.f30099r;
    }

    public void c(Map map) {
        this.f30103v = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("trace_id").j(iLogger, this.f30093d);
        f3Var.e("public_key").f(this.f30094e);
        if (this.f30095i != null) {
            f3Var.e("release").f(this.f30095i);
        }
        if (this.f30096o != null) {
            f3Var.e("environment").f(this.f30096o);
        }
        if (this.f30097p != null) {
            f3Var.e("user_id").f(this.f30097p);
        }
        if (this.f30098q != null) {
            f3Var.e("transaction").f(this.f30098q);
        }
        if (this.f30099r != null) {
            f3Var.e("sample_rate").f(this.f30099r);
        }
        if (this.f30100s != null) {
            f3Var.e("sample_rand").f(this.f30100s);
        }
        if (this.f30101t != null) {
            f3Var.e("sampled").f(this.f30101t);
        }
        if (this.f30102u != null) {
            f3Var.e("replay_id").j(iLogger, this.f30102u);
        }
        Map map = this.f30103v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30103v.get(str);
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
        this.f30093d = xVar;
        this.f30094e = str;
        this.f30095i = str2;
        this.f30096o = str3;
        this.f30097p = str4;
        this.f30098q = str5;
        this.f30099r = str6;
        this.f30101t = str7;
        this.f30102u = xVar2;
        this.f30100s = str8;
    }
}
