package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    boolean f28772d;

    /* renamed from: e  reason: collision with root package name */
    Double f28773e;

    /* renamed from: i  reason: collision with root package name */
    boolean f28774i;

    /* renamed from: o  reason: collision with root package name */
    Double f28775o;

    /* renamed from: p  reason: collision with root package name */
    String f28776p;

    /* renamed from: q  reason: collision with root package name */
    boolean f28777q;

    /* renamed from: r  reason: collision with root package name */
    boolean f28778r;

    /* renamed from: s  reason: collision with root package name */
    int f28779s;

    /* renamed from: t  reason: collision with root package name */
    boolean f28780t;

    /* renamed from: u  reason: collision with root package name */
    boolean f28781u;

    /* renamed from: v  reason: collision with root package name */
    boolean f28782v;

    /* renamed from: w  reason: collision with root package name */
    o3 f28783w;

    /* renamed from: x  reason: collision with root package name */
    private Map f28784x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c5 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            c5 c5Var = new c5();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -801141276:
                        if (m02.equals("is_enable_app_start_profiling")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -566246656:
                        if (m02.equals("trace_sampled")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -450071601:
                        if (m02.equals("profiling_traces_dir_path")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -436975123:
                        if (m02.equals("is_continuous_profiling_enabled")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -116896685:
                        if (m02.equals("is_profiling_enabled")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -104146616:
                        if (m02.equals("is_start_profiler_on_app_start")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -69617820:
                        if (m02.equals("profile_sampled")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 401419348:
                        if (m02.equals("profile_lifecycle")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1401020980:
                        if (m02.equals("continuous_profile_sampled")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1583866442:
                        if (m02.equals("profiling_traces_hz")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1653938779:
                        if (m02.equals("trace_sample_rate")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2140552383:
                        if (m02.equals("profile_sample_rate")) {
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
                            c5Var.f28781u = w02.booleanValue();
                            break;
                        }
                    case 1:
                        Boolean w03 = e3Var.w0();
                        if (w03 == null) {
                            break;
                        } else {
                            c5Var.f28774i = w03.booleanValue();
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            c5Var.f28776p = r12;
                            break;
                        }
                    case 3:
                        Boolean w04 = e3Var.w0();
                        if (w04 == null) {
                            break;
                        } else {
                            c5Var.f28778r = w04.booleanValue();
                            break;
                        }
                    case 4:
                        Boolean w05 = e3Var.w0();
                        if (w05 == null) {
                            break;
                        } else {
                            c5Var.f28777q = w05.booleanValue();
                            break;
                        }
                    case 5:
                        Boolean w06 = e3Var.w0();
                        if (w06 == null) {
                            break;
                        } else {
                            c5Var.f28782v = w06.booleanValue();
                            break;
                        }
                    case 6:
                        Boolean w07 = e3Var.w0();
                        if (w07 == null) {
                            break;
                        } else {
                            c5Var.f28772d = w07.booleanValue();
                            break;
                        }
                    case 7:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            try {
                                c5Var.f28783w = o3.valueOf(r13);
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
                            c5Var.f28780t = w08.booleanValue();
                            break;
                        }
                    case '\t':
                        Integer k12 = e3Var.k1();
                        if (k12 == null) {
                            break;
                        } else {
                            c5Var.f28779s = k12.intValue();
                            break;
                        }
                    case '\n':
                        Double l02 = e3Var.l0();
                        if (l02 == null) {
                            break;
                        } else {
                            c5Var.f28775o = l02;
                            break;
                        }
                    case 11:
                        Double l03 = e3Var.l0();
                        if (l03 == null) {
                            break;
                        } else {
                            c5Var.f28773e = l03;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            c5Var.m(concurrentHashMap);
            e3Var.z();
            return c5Var;
        }
    }

    public c5() {
        this.f28774i = false;
        this.f28775o = null;
        this.f28772d = false;
        this.f28773e = null;
        this.f28780t = false;
        this.f28776p = null;
        this.f28777q = false;
        this.f28778r = false;
        this.f28783w = o3.MANUAL;
        this.f28779s = 0;
        this.f28781u = true;
        this.f28782v = false;
    }

    public o3 a() {
        return this.f28783w;
    }

    public Double b() {
        return this.f28773e;
    }

    public String c() {
        return this.f28776p;
    }

    public int d() {
        return this.f28779s;
    }

    public Double e() {
        return this.f28775o;
    }

    public boolean f() {
        return this.f28780t;
    }

    public boolean g() {
        return this.f28778r;
    }

    public boolean h() {
        return this.f28781u;
    }

    public boolean i() {
        return this.f28772d;
    }

    public boolean j() {
        return this.f28777q;
    }

    public boolean k() {
        return this.f28782v;
    }

    public boolean l() {
        return this.f28774i;
    }

    public void m(Map map) {
        this.f28784x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("profile_sampled").j(iLogger, Boolean.valueOf(this.f28772d));
        f3Var.e("profile_sample_rate").j(iLogger, this.f28773e);
        f3Var.e("continuous_profile_sampled").j(iLogger, Boolean.valueOf(this.f28780t));
        f3Var.e("trace_sampled").j(iLogger, Boolean.valueOf(this.f28774i));
        f3Var.e("trace_sample_rate").j(iLogger, this.f28775o);
        f3Var.e("profiling_traces_dir_path").j(iLogger, this.f28776p);
        f3Var.e("is_profiling_enabled").j(iLogger, Boolean.valueOf(this.f28777q));
        f3Var.e("is_continuous_profiling_enabled").j(iLogger, Boolean.valueOf(this.f28778r));
        f3Var.e("profile_lifecycle").j(iLogger, this.f28783w.name());
        f3Var.e("profiling_traces_hz").j(iLogger, Integer.valueOf(this.f28779s));
        f3Var.e("is_enable_app_start_profiling").j(iLogger, Boolean.valueOf(this.f28781u));
        f3Var.e("is_start_profiler_on_app_start").j(iLogger, Boolean.valueOf(this.f28782v));
        Map map = this.f28784x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28784x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(k7 k7Var, s8 s8Var) {
        this.f28774i = s8Var.e().booleanValue();
        this.f28775o = s8Var.d();
        this.f28772d = s8Var.b().booleanValue();
        this.f28773e = s8Var.a();
        this.f28780t = k7Var.getInternalTracesSampler().c(io.sentry.util.d0.a().c());
        this.f28776p = k7Var.getProfilingTracesDirPath();
        this.f28777q = k7Var.isProfilingEnabled();
        this.f28778r = k7Var.isContinuousProfilingEnabled();
        this.f28783w = k7Var.getProfileLifecycle();
        this.f28779s = k7Var.getProfilingTracesHz();
        this.f28781u = k7Var.isEnableAppStartProfiling();
        this.f28782v = k7Var.isStartProfilerOnAppStart();
    }
}
