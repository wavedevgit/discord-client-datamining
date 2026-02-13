package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    boolean f29668d;

    /* renamed from: e  reason: collision with root package name */
    Double f29669e;

    /* renamed from: i  reason: collision with root package name */
    boolean f29670i;

    /* renamed from: o  reason: collision with root package name */
    Double f29671o;

    /* renamed from: p  reason: collision with root package name */
    String f29672p;

    /* renamed from: q  reason: collision with root package name */
    boolean f29673q;

    /* renamed from: r  reason: collision with root package name */
    boolean f29674r;

    /* renamed from: s  reason: collision with root package name */
    int f29675s;

    /* renamed from: t  reason: collision with root package name */
    boolean f29676t;

    /* renamed from: u  reason: collision with root package name */
    boolean f29677u;

    /* renamed from: v  reason: collision with root package name */
    boolean f29678v;

    /* renamed from: w  reason: collision with root package name */
    o3 f29679w;

    /* renamed from: x  reason: collision with root package name */
    private Map f29680x;

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
                        Boolean w02 = e3Var.w0();
                        if (w02 == null) {
                            break;
                        } else {
                            c5Var.f29677u = w02.booleanValue();
                            break;
                        }
                    case 1:
                        Boolean w03 = e3Var.w0();
                        if (w03 == null) {
                            break;
                        } else {
                            c5Var.f29670i = w03.booleanValue();
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            c5Var.f29672p = r12;
                            break;
                        }
                    case 3:
                        Boolean w04 = e3Var.w0();
                        if (w04 == null) {
                            break;
                        } else {
                            c5Var.f29674r = w04.booleanValue();
                            break;
                        }
                    case 4:
                        Boolean w05 = e3Var.w0();
                        if (w05 == null) {
                            break;
                        } else {
                            c5Var.f29673q = w05.booleanValue();
                            break;
                        }
                    case 5:
                        Boolean w06 = e3Var.w0();
                        if (w06 == null) {
                            break;
                        } else {
                            c5Var.f29678v = w06.booleanValue();
                            break;
                        }
                    case 6:
                        Boolean w07 = e3Var.w0();
                        if (w07 == null) {
                            break;
                        } else {
                            c5Var.f29668d = w07.booleanValue();
                            break;
                        }
                    case 7:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            try {
                                c5Var.f29679w = o3.valueOf(r13);
                                break;
                            } catch (IllegalArgumentException unused) {
                                iLogger.c(SentryLevel.ERROR, "Error when deserializing ProfileLifecycle: " + r13, new Object[0]);
                                break;
                            }
                        }
                    case '\b':
                        Boolean w08 = e3Var.w0();
                        if (w08 == null) {
                            break;
                        } else {
                            c5Var.f29676t = w08.booleanValue();
                            break;
                        }
                    case '\t':
                        Integer l12 = e3Var.l1();
                        if (l12 == null) {
                            break;
                        } else {
                            c5Var.f29675s = l12.intValue();
                            break;
                        }
                    case '\n':
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            c5Var.f29671o = n02;
                            break;
                        }
                    case 11:
                        Double n03 = e3Var.n0();
                        if (n03 == null) {
                            break;
                        } else {
                            c5Var.f29669e = n03;
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
        this.f29670i = false;
        this.f29671o = null;
        this.f29668d = false;
        this.f29669e = null;
        this.f29676t = false;
        this.f29672p = null;
        this.f29673q = false;
        this.f29674r = false;
        this.f29679w = o3.MANUAL;
        this.f29675s = 0;
        this.f29677u = true;
        this.f29678v = false;
    }

    public o3 a() {
        return this.f29679w;
    }

    public Double b() {
        return this.f29669e;
    }

    public String c() {
        return this.f29672p;
    }

    public int d() {
        return this.f29675s;
    }

    public Double e() {
        return this.f29671o;
    }

    public boolean f() {
        return this.f29676t;
    }

    public boolean g() {
        return this.f29674r;
    }

    public boolean h() {
        return this.f29677u;
    }

    public boolean i() {
        return this.f29668d;
    }

    public boolean j() {
        return this.f29673q;
    }

    public boolean k() {
        return this.f29678v;
    }

    public boolean l() {
        return this.f29670i;
    }

    public void m(Map map) {
        this.f29680x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("profile_sampled").j(iLogger, Boolean.valueOf(this.f29668d));
        f3Var.e("profile_sample_rate").j(iLogger, this.f29669e);
        f3Var.e("continuous_profile_sampled").j(iLogger, Boolean.valueOf(this.f29676t));
        f3Var.e("trace_sampled").j(iLogger, Boolean.valueOf(this.f29670i));
        f3Var.e("trace_sample_rate").j(iLogger, this.f29671o);
        f3Var.e("profiling_traces_dir_path").j(iLogger, this.f29672p);
        f3Var.e("is_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29673q));
        f3Var.e("is_continuous_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29674r));
        f3Var.e("profile_lifecycle").j(iLogger, this.f29679w.name());
        f3Var.e("profiling_traces_hz").j(iLogger, Integer.valueOf(this.f29675s));
        f3Var.e("is_enable_app_start_profiling").j(iLogger, Boolean.valueOf(this.f29677u));
        f3Var.e("is_start_profiler_on_app_start").j(iLogger, Boolean.valueOf(this.f29678v));
        Map map = this.f29680x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29680x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(k7 k7Var, s8 s8Var) {
        this.f29670i = s8Var.e().booleanValue();
        this.f29671o = s8Var.d();
        this.f29668d = s8Var.b().booleanValue();
        this.f29669e = s8Var.a();
        this.f29676t = k7Var.getInternalTracesSampler().c(io.sentry.util.d0.a().c());
        this.f29672p = k7Var.getProfilingTracesDirPath();
        this.f29673q = k7Var.isProfilingEnabled();
        this.f29674r = k7Var.isContinuousProfilingEnabled();
        this.f29679w = k7Var.getProfileLifecycle();
        this.f29675s = k7Var.getProfilingTracesHz();
        this.f29677u = k7Var.isEnableAppStartProfiling();
        this.f29678v = k7Var.isStartProfilerOnAppStart();
    }
}
