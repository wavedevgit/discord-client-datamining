package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    boolean f27964d;

    /* renamed from: e  reason: collision with root package name */
    Double f27965e;

    /* renamed from: i  reason: collision with root package name */
    boolean f27966i;

    /* renamed from: o  reason: collision with root package name */
    Double f27967o;

    /* renamed from: p  reason: collision with root package name */
    String f27968p;

    /* renamed from: q  reason: collision with root package name */
    boolean f27969q;

    /* renamed from: r  reason: collision with root package name */
    boolean f27970r;

    /* renamed from: s  reason: collision with root package name */
    int f27971s;

    /* renamed from: t  reason: collision with root package name */
    boolean f27972t;

    /* renamed from: u  reason: collision with root package name */
    boolean f27973u;

    /* renamed from: v  reason: collision with root package name */
    boolean f27974v;

    /* renamed from: w  reason: collision with root package name */
    o3 f27975w;

    /* renamed from: x  reason: collision with root package name */
    private Map f27976x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c5 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            c5 c5Var = new c5();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -801141276:
                        if (o02.equals("is_enable_app_start_profiling")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -566246656:
                        if (o02.equals("trace_sampled")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -450071601:
                        if (o02.equals("profiling_traces_dir_path")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -436975123:
                        if (o02.equals("is_continuous_profiling_enabled")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -116896685:
                        if (o02.equals("is_profiling_enabled")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -104146616:
                        if (o02.equals("is_start_profiler_on_app_start")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -69617820:
                        if (o02.equals("profile_sampled")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 401419348:
                        if (o02.equals("profile_lifecycle")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1401020980:
                        if (o02.equals("continuous_profile_sampled")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1583866442:
                        if (o02.equals("profiling_traces_hz")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1653938779:
                        if (o02.equals("trace_sample_rate")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2140552383:
                        if (o02.equals("profile_sample_rate")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Boolean y02 = e3Var.y0();
                        if (y02 == null) {
                            break;
                        } else {
                            c5Var.f27973u = y02.booleanValue();
                            break;
                        }
                    case 1:
                        Boolean y03 = e3Var.y0();
                        if (y03 == null) {
                            break;
                        } else {
                            c5Var.f27966i = y03.booleanValue();
                            break;
                        }
                    case 2:
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            break;
                        } else {
                            c5Var.f27968p = q12;
                            break;
                        }
                    case 3:
                        Boolean y04 = e3Var.y0();
                        if (y04 == null) {
                            break;
                        } else {
                            c5Var.f27970r = y04.booleanValue();
                            break;
                        }
                    case 4:
                        Boolean y05 = e3Var.y0();
                        if (y05 == null) {
                            break;
                        } else {
                            c5Var.f27969q = y05.booleanValue();
                            break;
                        }
                    case 5:
                        Boolean y06 = e3Var.y0();
                        if (y06 == null) {
                            break;
                        } else {
                            c5Var.f27974v = y06.booleanValue();
                            break;
                        }
                    case 6:
                        Boolean y07 = e3Var.y0();
                        if (y07 == null) {
                            break;
                        } else {
                            c5Var.f27964d = y07.booleanValue();
                            break;
                        }
                    case 7:
                        String q13 = e3Var.q1();
                        if (q13 == null) {
                            break;
                        } else {
                            try {
                                c5Var.f27975w = o3.valueOf(q13);
                                break;
                            } catch (IllegalArgumentException unused) {
                                iLogger.c(SentryLevel.ERROR, "Error when deserializing ProfileLifecycle: " + q13, new Object[0]);
                                break;
                            }
                        }
                    case '\b':
                        Boolean y08 = e3Var.y0();
                        if (y08 == null) {
                            break;
                        } else {
                            c5Var.f27972t = y08.booleanValue();
                            break;
                        }
                    case '\t':
                        Integer j12 = e3Var.j1();
                        if (j12 == null) {
                            break;
                        } else {
                            c5Var.f27971s = j12.intValue();
                            break;
                        }
                    case '\n':
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            c5Var.f27967o = n02;
                            break;
                        }
                    case 11:
                        Double n03 = e3Var.n0();
                        if (n03 == null) {
                            break;
                        } else {
                            c5Var.f27965e = n03;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            c5Var.m(concurrentHashMap);
            e3Var.D();
            return c5Var;
        }
    }

    public c5() {
        this.f27966i = false;
        this.f27967o = null;
        this.f27964d = false;
        this.f27965e = null;
        this.f27972t = false;
        this.f27968p = null;
        this.f27969q = false;
        this.f27970r = false;
        this.f27975w = o3.MANUAL;
        this.f27971s = 0;
        this.f27973u = true;
        this.f27974v = false;
    }

    public o3 a() {
        return this.f27975w;
    }

    public Double b() {
        return this.f27965e;
    }

    public String c() {
        return this.f27968p;
    }

    public int d() {
        return this.f27971s;
    }

    public Double e() {
        return this.f27967o;
    }

    public boolean f() {
        return this.f27972t;
    }

    public boolean g() {
        return this.f27970r;
    }

    public boolean h() {
        return this.f27973u;
    }

    public boolean i() {
        return this.f27964d;
    }

    public boolean j() {
        return this.f27969q;
    }

    public boolean k() {
        return this.f27974v;
    }

    public boolean l() {
        return this.f27966i;
    }

    public void m(Map map) {
        this.f27976x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("profile_sampled").j(iLogger, Boolean.valueOf(this.f27964d));
        f3Var.e("profile_sample_rate").j(iLogger, this.f27965e);
        f3Var.e("continuous_profile_sampled").j(iLogger, Boolean.valueOf(this.f27972t));
        f3Var.e("trace_sampled").j(iLogger, Boolean.valueOf(this.f27966i));
        f3Var.e("trace_sample_rate").j(iLogger, this.f27967o);
        f3Var.e("profiling_traces_dir_path").j(iLogger, this.f27968p);
        f3Var.e("is_profiling_enabled").j(iLogger, Boolean.valueOf(this.f27969q));
        f3Var.e("is_continuous_profiling_enabled").j(iLogger, Boolean.valueOf(this.f27970r));
        f3Var.e("profile_lifecycle").j(iLogger, this.f27975w.name());
        f3Var.e("profiling_traces_hz").j(iLogger, Integer.valueOf(this.f27971s));
        f3Var.e("is_enable_app_start_profiling").j(iLogger, Boolean.valueOf(this.f27973u));
        f3Var.e("is_start_profiler_on_app_start").j(iLogger, Boolean.valueOf(this.f27974v));
        Map map = this.f27976x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f27976x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(k7 k7Var, s8 s8Var) {
        this.f27966i = s8Var.e().booleanValue();
        this.f27967o = s8Var.d();
        this.f27964d = s8Var.b().booleanValue();
        this.f27965e = s8Var.a();
        this.f27972t = k7Var.getInternalTracesSampler().c(io.sentry.util.d0.a().c());
        this.f27968p = k7Var.getProfilingTracesDirPath();
        this.f27969q = k7Var.isProfilingEnabled();
        this.f27970r = k7Var.isContinuousProfilingEnabled();
        this.f27975w = k7Var.getProfileLifecycle();
        this.f27971s = k7Var.getProfilingTracesHz();
        this.f27973u = k7Var.isEnableAppStartProfiling();
        this.f27974v = k7Var.isStartProfilerOnAppStart();
    }
}
