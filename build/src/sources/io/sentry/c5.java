package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    boolean f29771d;

    /* renamed from: e  reason: collision with root package name */
    Double f29772e;

    /* renamed from: i  reason: collision with root package name */
    boolean f29773i;

    /* renamed from: o  reason: collision with root package name */
    Double f29774o;

    /* renamed from: p  reason: collision with root package name */
    String f29775p;

    /* renamed from: q  reason: collision with root package name */
    boolean f29776q;

    /* renamed from: r  reason: collision with root package name */
    boolean f29777r;

    /* renamed from: s  reason: collision with root package name */
    int f29778s;

    /* renamed from: t  reason: collision with root package name */
    boolean f29779t;

    /* renamed from: u  reason: collision with root package name */
    boolean f29780u;

    /* renamed from: v  reason: collision with root package name */
    boolean f29781v;

    /* renamed from: w  reason: collision with root package name */
    o3 f29782w;

    /* renamed from: x  reason: collision with root package name */
    private Map f29783x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c5 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            c5 c5Var = new c5();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -801141276:
                        if (l02.equals("is_enable_app_start_profiling")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -566246656:
                        if (l02.equals("trace_sampled")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -450071601:
                        if (l02.equals("profiling_traces_dir_path")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -436975123:
                        if (l02.equals("is_continuous_profiling_enabled")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -116896685:
                        if (l02.equals("is_profiling_enabled")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -104146616:
                        if (l02.equals("is_start_profiler_on_app_start")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -69617820:
                        if (l02.equals("profile_sampled")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 401419348:
                        if (l02.equals("profile_lifecycle")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1401020980:
                        if (l02.equals("continuous_profile_sampled")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1583866442:
                        if (l02.equals("profiling_traces_hz")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1653938779:
                        if (l02.equals("trace_sample_rate")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2140552383:
                        if (l02.equals("profile_sample_rate")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Boolean v02 = e3Var.v0();
                        if (v02 == null) {
                            break;
                        } else {
                            c5Var.f29780u = v02.booleanValue();
                            break;
                        }
                    case 1:
                        Boolean v03 = e3Var.v0();
                        if (v03 == null) {
                            break;
                        } else {
                            c5Var.f29773i = v03.booleanValue();
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            c5Var.f29775p = r12;
                            break;
                        }
                    case 3:
                        Boolean v04 = e3Var.v0();
                        if (v04 == null) {
                            break;
                        } else {
                            c5Var.f29777r = v04.booleanValue();
                            break;
                        }
                    case 4:
                        Boolean v05 = e3Var.v0();
                        if (v05 == null) {
                            break;
                        } else {
                            c5Var.f29776q = v05.booleanValue();
                            break;
                        }
                    case 5:
                        Boolean v06 = e3Var.v0();
                        if (v06 == null) {
                            break;
                        } else {
                            c5Var.f29781v = v06.booleanValue();
                            break;
                        }
                    case 6:
                        Boolean v07 = e3Var.v0();
                        if (v07 == null) {
                            break;
                        } else {
                            c5Var.f29771d = v07.booleanValue();
                            break;
                        }
                    case 7:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            try {
                                c5Var.f29782w = o3.valueOf(r13);
                                break;
                            } catch (IllegalArgumentException unused) {
                                iLogger.c(SentryLevel.ERROR, "Error when deserializing ProfileLifecycle: " + r13, new Object[0]);
                                break;
                            }
                        }
                    case '\b':
                        Boolean v08 = e3Var.v0();
                        if (v08 == null) {
                            break;
                        } else {
                            c5Var.f29779t = v08.booleanValue();
                            break;
                        }
                    case '\t':
                        Integer j12 = e3Var.j1();
                        if (j12 == null) {
                            break;
                        } else {
                            c5Var.f29778s = j12.intValue();
                            break;
                        }
                    case '\n':
                        Double k02 = e3Var.k0();
                        if (k02 == null) {
                            break;
                        } else {
                            c5Var.f29774o = k02;
                            break;
                        }
                    case 11:
                        Double k03 = e3Var.k0();
                        if (k03 == null) {
                            break;
                        } else {
                            c5Var.f29772e = k03;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            c5Var.m(concurrentHashMap);
            e3Var.y();
            return c5Var;
        }
    }

    public c5() {
        this.f29773i = false;
        this.f29774o = null;
        this.f29771d = false;
        this.f29772e = null;
        this.f29779t = false;
        this.f29775p = null;
        this.f29776q = false;
        this.f29777r = false;
        this.f29782w = o3.MANUAL;
        this.f29778s = 0;
        this.f29780u = true;
        this.f29781v = false;
    }

    public o3 a() {
        return this.f29782w;
    }

    public Double b() {
        return this.f29772e;
    }

    public String c() {
        return this.f29775p;
    }

    public int d() {
        return this.f29778s;
    }

    public Double e() {
        return this.f29774o;
    }

    public boolean f() {
        return this.f29779t;
    }

    public boolean g() {
        return this.f29777r;
    }

    public boolean h() {
        return this.f29780u;
    }

    public boolean i() {
        return this.f29771d;
    }

    public boolean j() {
        return this.f29776q;
    }

    public boolean k() {
        return this.f29781v;
    }

    public boolean l() {
        return this.f29773i;
    }

    public void m(Map map) {
        this.f29783x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("profile_sampled").j(iLogger, Boolean.valueOf(this.f29771d));
        f3Var.e("profile_sample_rate").j(iLogger, this.f29772e);
        f3Var.e("continuous_profile_sampled").j(iLogger, Boolean.valueOf(this.f29779t));
        f3Var.e("trace_sampled").j(iLogger, Boolean.valueOf(this.f29773i));
        f3Var.e("trace_sample_rate").j(iLogger, this.f29774o);
        f3Var.e("profiling_traces_dir_path").j(iLogger, this.f29775p);
        f3Var.e("is_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29776q));
        f3Var.e("is_continuous_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29777r));
        f3Var.e("profile_lifecycle").j(iLogger, this.f29782w.name());
        f3Var.e("profiling_traces_hz").j(iLogger, Integer.valueOf(this.f29778s));
        f3Var.e("is_enable_app_start_profiling").j(iLogger, Boolean.valueOf(this.f29780u));
        f3Var.e("is_start_profiler_on_app_start").j(iLogger, Boolean.valueOf(this.f29781v));
        Map map = this.f29783x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29783x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(k7 k7Var, s8 s8Var) {
        this.f29773i = s8Var.e().booleanValue();
        this.f29774o = s8Var.d();
        this.f29771d = s8Var.b().booleanValue();
        this.f29772e = s8Var.a();
        this.f29779t = k7Var.getInternalTracesSampler().c(io.sentry.util.d0.a().c());
        this.f29775p = k7Var.getProfilingTracesDirPath();
        this.f29776q = k7Var.isProfilingEnabled();
        this.f29777r = k7Var.isContinuousProfilingEnabled();
        this.f29782w = k7Var.getProfileLifecycle();
        this.f29778s = k7Var.getProfilingTracesHz();
        this.f29780u = k7Var.isEnableAppStartProfiling();
        this.f29781v = k7Var.isStartProfilerOnAppStart();
    }
}
