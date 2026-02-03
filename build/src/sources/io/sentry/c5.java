package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    boolean f29353d;

    /* renamed from: e  reason: collision with root package name */
    Double f29354e;

    /* renamed from: i  reason: collision with root package name */
    boolean f29355i;

    /* renamed from: o  reason: collision with root package name */
    Double f29356o;

    /* renamed from: p  reason: collision with root package name */
    String f29357p;

    /* renamed from: q  reason: collision with root package name */
    boolean f29358q;

    /* renamed from: r  reason: collision with root package name */
    boolean f29359r;

    /* renamed from: s  reason: collision with root package name */
    int f29360s;

    /* renamed from: t  reason: collision with root package name */
    boolean f29361t;

    /* renamed from: u  reason: collision with root package name */
    boolean f29362u;

    /* renamed from: v  reason: collision with root package name */
    boolean f29363v;

    /* renamed from: w  reason: collision with root package name */
    o3 f29364w;

    /* renamed from: x  reason: collision with root package name */
    private Map f29365x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c5 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
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
                        Boolean x02 = e3Var.x0();
                        if (x02 == null) {
                            break;
                        } else {
                            c5Var.f29362u = x02.booleanValue();
                            break;
                        }
                    case 1:
                        Boolean x03 = e3Var.x0();
                        if (x03 == null) {
                            break;
                        } else {
                            c5Var.f29355i = x03.booleanValue();
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            c5Var.f29357p = r12;
                            break;
                        }
                    case 3:
                        Boolean x04 = e3Var.x0();
                        if (x04 == null) {
                            break;
                        } else {
                            c5Var.f29359r = x04.booleanValue();
                            break;
                        }
                    case 4:
                        Boolean x05 = e3Var.x0();
                        if (x05 == null) {
                            break;
                        } else {
                            c5Var.f29358q = x05.booleanValue();
                            break;
                        }
                    case 5:
                        Boolean x06 = e3Var.x0();
                        if (x06 == null) {
                            break;
                        } else {
                            c5Var.f29363v = x06.booleanValue();
                            break;
                        }
                    case 6:
                        Boolean x07 = e3Var.x0();
                        if (x07 == null) {
                            break;
                        } else {
                            c5Var.f29353d = x07.booleanValue();
                            break;
                        }
                    case 7:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            try {
                                c5Var.f29364w = o3.valueOf(r13);
                                break;
                            } catch (IllegalArgumentException unused) {
                                iLogger.c(SentryLevel.ERROR, "Error when deserializing ProfileLifecycle: " + r13, new Object[0]);
                                break;
                            }
                        }
                    case '\b':
                        Boolean x08 = e3Var.x0();
                        if (x08 == null) {
                            break;
                        } else {
                            c5Var.f29361t = x08.booleanValue();
                            break;
                        }
                    case '\t':
                        Integer k12 = e3Var.k1();
                        if (k12 == null) {
                            break;
                        } else {
                            c5Var.f29360s = k12.intValue();
                            break;
                        }
                    case '\n':
                        Double l02 = e3Var.l0();
                        if (l02 == null) {
                            break;
                        } else {
                            c5Var.f29356o = l02;
                            break;
                        }
                    case 11:
                        Double l03 = e3Var.l0();
                        if (l03 == null) {
                            break;
                        } else {
                            c5Var.f29354e = l03;
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
            e3Var.y();
            return c5Var;
        }
    }

    public c5() {
        this.f29355i = false;
        this.f29356o = null;
        this.f29353d = false;
        this.f29354e = null;
        this.f29361t = false;
        this.f29357p = null;
        this.f29358q = false;
        this.f29359r = false;
        this.f29364w = o3.MANUAL;
        this.f29360s = 0;
        this.f29362u = true;
        this.f29363v = false;
    }

    public o3 a() {
        return this.f29364w;
    }

    public Double b() {
        return this.f29354e;
    }

    public String c() {
        return this.f29357p;
    }

    public int d() {
        return this.f29360s;
    }

    public Double e() {
        return this.f29356o;
    }

    public boolean f() {
        return this.f29361t;
    }

    public boolean g() {
        return this.f29359r;
    }

    public boolean h() {
        return this.f29362u;
    }

    public boolean i() {
        return this.f29353d;
    }

    public boolean j() {
        return this.f29358q;
    }

    public boolean k() {
        return this.f29363v;
    }

    public boolean l() {
        return this.f29355i;
    }

    public void m(Map map) {
        this.f29365x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("profile_sampled").j(iLogger, Boolean.valueOf(this.f29353d));
        f3Var.e("profile_sample_rate").j(iLogger, this.f29354e);
        f3Var.e("continuous_profile_sampled").j(iLogger, Boolean.valueOf(this.f29361t));
        f3Var.e("trace_sampled").j(iLogger, Boolean.valueOf(this.f29355i));
        f3Var.e("trace_sample_rate").j(iLogger, this.f29356o);
        f3Var.e("profiling_traces_dir_path").j(iLogger, this.f29357p);
        f3Var.e("is_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29358q));
        f3Var.e("is_continuous_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29359r));
        f3Var.e("profile_lifecycle").j(iLogger, this.f29364w.name());
        f3Var.e("profiling_traces_hz").j(iLogger, Integer.valueOf(this.f29360s));
        f3Var.e("is_enable_app_start_profiling").j(iLogger, Boolean.valueOf(this.f29362u));
        f3Var.e("is_start_profiler_on_app_start").j(iLogger, Boolean.valueOf(this.f29363v));
        Map map = this.f29365x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29365x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(k7 k7Var, s8 s8Var) {
        this.f29355i = s8Var.e().booleanValue();
        this.f29356o = s8Var.d();
        this.f29353d = s8Var.b().booleanValue();
        this.f29354e = s8Var.a();
        this.f29361t = k7Var.getInternalTracesSampler().c(io.sentry.util.d0.a().c());
        this.f29357p = k7Var.getProfilingTracesDirPath();
        this.f29358q = k7Var.isProfilingEnabled();
        this.f29359r = k7Var.isContinuousProfilingEnabled();
        this.f29364w = k7Var.getProfileLifecycle();
        this.f29360s = k7Var.getProfilingTracesHz();
        this.f29362u = k7Var.isEnableAppStartProfiling();
        this.f29363v = k7Var.isStartProfilerOnAppStart();
    }
}
