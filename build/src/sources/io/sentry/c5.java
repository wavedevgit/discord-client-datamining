package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    boolean f29099d;

    /* renamed from: e  reason: collision with root package name */
    Double f29100e;

    /* renamed from: i  reason: collision with root package name */
    boolean f29101i;

    /* renamed from: o  reason: collision with root package name */
    Double f29102o;

    /* renamed from: p  reason: collision with root package name */
    String f29103p;

    /* renamed from: q  reason: collision with root package name */
    boolean f29104q;

    /* renamed from: r  reason: collision with root package name */
    boolean f29105r;

    /* renamed from: s  reason: collision with root package name */
    int f29106s;

    /* renamed from: t  reason: collision with root package name */
    boolean f29107t;

    /* renamed from: u  reason: collision with root package name */
    boolean f29108u;

    /* renamed from: v  reason: collision with root package name */
    boolean f29109v;

    /* renamed from: w  reason: collision with root package name */
    o3 f29110w;

    /* renamed from: x  reason: collision with root package name */
    private Map f29111x;

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
                            c5Var.f29108u = w02.booleanValue();
                            break;
                        }
                    case 1:
                        Boolean w03 = e3Var.w0();
                        if (w03 == null) {
                            break;
                        } else {
                            c5Var.f29101i = w03.booleanValue();
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            c5Var.f29103p = r12;
                            break;
                        }
                    case 3:
                        Boolean w04 = e3Var.w0();
                        if (w04 == null) {
                            break;
                        } else {
                            c5Var.f29105r = w04.booleanValue();
                            break;
                        }
                    case 4:
                        Boolean w05 = e3Var.w0();
                        if (w05 == null) {
                            break;
                        } else {
                            c5Var.f29104q = w05.booleanValue();
                            break;
                        }
                    case 5:
                        Boolean w06 = e3Var.w0();
                        if (w06 == null) {
                            break;
                        } else {
                            c5Var.f29109v = w06.booleanValue();
                            break;
                        }
                    case 6:
                        Boolean w07 = e3Var.w0();
                        if (w07 == null) {
                            break;
                        } else {
                            c5Var.f29099d = w07.booleanValue();
                            break;
                        }
                    case 7:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            try {
                                c5Var.f29110w = o3.valueOf(r13);
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
                            c5Var.f29107t = w08.booleanValue();
                            break;
                        }
                    case '\t':
                        Integer l12 = e3Var.l1();
                        if (l12 == null) {
                            break;
                        } else {
                            c5Var.f29106s = l12.intValue();
                            break;
                        }
                    case '\n':
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            c5Var.f29102o = n02;
                            break;
                        }
                    case 11:
                        Double n03 = e3Var.n0();
                        if (n03 == null) {
                            break;
                        } else {
                            c5Var.f29100e = n03;
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
        this.f29101i = false;
        this.f29102o = null;
        this.f29099d = false;
        this.f29100e = null;
        this.f29107t = false;
        this.f29103p = null;
        this.f29104q = false;
        this.f29105r = false;
        this.f29110w = o3.MANUAL;
        this.f29106s = 0;
        this.f29108u = true;
        this.f29109v = false;
    }

    public o3 a() {
        return this.f29110w;
    }

    public Double b() {
        return this.f29100e;
    }

    public String c() {
        return this.f29103p;
    }

    public int d() {
        return this.f29106s;
    }

    public Double e() {
        return this.f29102o;
    }

    public boolean f() {
        return this.f29107t;
    }

    public boolean g() {
        return this.f29105r;
    }

    public boolean h() {
        return this.f29108u;
    }

    public boolean i() {
        return this.f29099d;
    }

    public boolean j() {
        return this.f29104q;
    }

    public boolean k() {
        return this.f29109v;
    }

    public boolean l() {
        return this.f29101i;
    }

    public void m(Map map) {
        this.f29111x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("profile_sampled").j(iLogger, Boolean.valueOf(this.f29099d));
        f3Var.e("profile_sample_rate").j(iLogger, this.f29100e);
        f3Var.e("continuous_profile_sampled").j(iLogger, Boolean.valueOf(this.f29107t));
        f3Var.e("trace_sampled").j(iLogger, Boolean.valueOf(this.f29101i));
        f3Var.e("trace_sample_rate").j(iLogger, this.f29102o);
        f3Var.e("profiling_traces_dir_path").j(iLogger, this.f29103p);
        f3Var.e("is_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29104q));
        f3Var.e("is_continuous_profiling_enabled").j(iLogger, Boolean.valueOf(this.f29105r));
        f3Var.e("profile_lifecycle").j(iLogger, this.f29110w.name());
        f3Var.e("profiling_traces_hz").j(iLogger, Integer.valueOf(this.f29106s));
        f3Var.e("is_enable_app_start_profiling").j(iLogger, Boolean.valueOf(this.f29108u));
        f3Var.e("is_start_profiler_on_app_start").j(iLogger, Boolean.valueOf(this.f29109v));
        Map map = this.f29111x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29111x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(k7 k7Var, s8 s8Var) {
        this.f29101i = s8Var.e().booleanValue();
        this.f29102o = s8Var.d();
        this.f29099d = s8Var.b().booleanValue();
        this.f29100e = s8Var.a();
        this.f29107t = k7Var.getInternalTracesSampler().c(io.sentry.util.d0.a().c());
        this.f29103p = k7Var.getProfilingTracesDirPath();
        this.f29104q = k7Var.isProfilingEnabled();
        this.f29105r = k7Var.isContinuousProfilingEnabled();
        this.f29110w = k7Var.getProfileLifecycle();
        this.f29106s = k7Var.getProfilingTracesHz();
        this.f29108u = k7Var.isEnableAppStartProfiling();
        this.f29109v = k7Var.isStartProfilerOnAppStart();
    }
}
