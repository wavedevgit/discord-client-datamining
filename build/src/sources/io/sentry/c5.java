package io.sentry;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    boolean f28164d;

    /* renamed from: e  reason: collision with root package name */
    Double f28165e;

    /* renamed from: i  reason: collision with root package name */
    boolean f28166i;

    /* renamed from: o  reason: collision with root package name */
    Double f28167o;

    /* renamed from: p  reason: collision with root package name */
    String f28168p;

    /* renamed from: q  reason: collision with root package name */
    boolean f28169q;

    /* renamed from: r  reason: collision with root package name */
    boolean f28170r;

    /* renamed from: s  reason: collision with root package name */
    int f28171s;

    /* renamed from: t  reason: collision with root package name */
    boolean f28172t;

    /* renamed from: u  reason: collision with root package name */
    boolean f28173u;

    /* renamed from: v  reason: collision with root package name */
    boolean f28174v;

    /* renamed from: w  reason: collision with root package name */
    o3 f28175w;

    /* renamed from: x  reason: collision with root package name */
    private Map f28176x;

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
                            c5Var.f28173u = w02.booleanValue();
                            break;
                        }
                    case 1:
                        Boolean w03 = e3Var.w0();
                        if (w03 == null) {
                            break;
                        } else {
                            c5Var.f28166i = w03.booleanValue();
                            break;
                        }
                    case 2:
                        String m12 = e3Var.m1();
                        if (m12 == null) {
                            break;
                        } else {
                            c5Var.f28168p = m12;
                            break;
                        }
                    case 3:
                        Boolean w04 = e3Var.w0();
                        if (w04 == null) {
                            break;
                        } else {
                            c5Var.f28170r = w04.booleanValue();
                            break;
                        }
                    case 4:
                        Boolean w05 = e3Var.w0();
                        if (w05 == null) {
                            break;
                        } else {
                            c5Var.f28169q = w05.booleanValue();
                            break;
                        }
                    case 5:
                        Boolean w06 = e3Var.w0();
                        if (w06 == null) {
                            break;
                        } else {
                            c5Var.f28174v = w06.booleanValue();
                            break;
                        }
                    case 6:
                        Boolean w07 = e3Var.w0();
                        if (w07 == null) {
                            break;
                        } else {
                            c5Var.f28164d = w07.booleanValue();
                            break;
                        }
                    case 7:
                        String m13 = e3Var.m1();
                        if (m13 == null) {
                            break;
                        } else {
                            try {
                                c5Var.f28175w = o3.valueOf(m13);
                                break;
                            } catch (IllegalArgumentException unused) {
                                iLogger.c(SentryLevel.ERROR, "Error when deserializing ProfileLifecycle: " + m13, new Object[0]);
                                break;
                            }
                        }
                    case '\b':
                        Boolean w08 = e3Var.w0();
                        if (w08 == null) {
                            break;
                        } else {
                            c5Var.f28172t = w08.booleanValue();
                            break;
                        }
                    case '\t':
                        Integer g12 = e3Var.g1();
                        if (g12 == null) {
                            break;
                        } else {
                            c5Var.f28171s = g12.intValue();
                            break;
                        }
                    case '\n':
                        Double n02 = e3Var.n0();
                        if (n02 == null) {
                            break;
                        } else {
                            c5Var.f28167o = n02;
                            break;
                        }
                    case 11:
                        Double n03 = e3Var.n0();
                        if (n03 == null) {
                            break;
                        } else {
                            c5Var.f28165e = n03;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            c5Var.m(concurrentHashMap);
            e3Var.D();
            return c5Var;
        }
    }

    public c5() {
        this.f28166i = false;
        this.f28167o = null;
        this.f28164d = false;
        this.f28165e = null;
        this.f28172t = false;
        this.f28168p = null;
        this.f28169q = false;
        this.f28170r = false;
        this.f28175w = o3.MANUAL;
        this.f28171s = 0;
        this.f28173u = true;
        this.f28174v = false;
    }

    public o3 a() {
        return this.f28175w;
    }

    public Double b() {
        return this.f28165e;
    }

    public String c() {
        return this.f28168p;
    }

    public int d() {
        return this.f28171s;
    }

    public Double e() {
        return this.f28167o;
    }

    public boolean f() {
        return this.f28172t;
    }

    public boolean g() {
        return this.f28170r;
    }

    public boolean h() {
        return this.f28173u;
    }

    public boolean i() {
        return this.f28164d;
    }

    public boolean j() {
        return this.f28169q;
    }

    public boolean k() {
        return this.f28174v;
    }

    public boolean l() {
        return this.f28166i;
    }

    public void m(Map map) {
        this.f28176x = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("profile_sampled").j(iLogger, Boolean.valueOf(this.f28164d));
        f3Var.e("profile_sample_rate").j(iLogger, this.f28165e);
        f3Var.e("continuous_profile_sampled").j(iLogger, Boolean.valueOf(this.f28172t));
        f3Var.e("trace_sampled").j(iLogger, Boolean.valueOf(this.f28166i));
        f3Var.e("trace_sample_rate").j(iLogger, this.f28167o);
        f3Var.e("profiling_traces_dir_path").j(iLogger, this.f28168p);
        f3Var.e("is_profiling_enabled").j(iLogger, Boolean.valueOf(this.f28169q));
        f3Var.e("is_continuous_profiling_enabled").j(iLogger, Boolean.valueOf(this.f28170r));
        f3Var.e("profile_lifecycle").j(iLogger, this.f28175w.name());
        f3Var.e("profiling_traces_hz").j(iLogger, Integer.valueOf(this.f28171s));
        f3Var.e("is_enable_app_start_profiling").j(iLogger, Boolean.valueOf(this.f28173u));
        f3Var.e("is_start_profiler_on_app_start").j(iLogger, Boolean.valueOf(this.f28174v));
        Map map = this.f28176x;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28176x.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(k7 k7Var, s8 s8Var) {
        this.f28166i = s8Var.e().booleanValue();
        this.f28167o = s8Var.d();
        this.f28164d = s8Var.b().booleanValue();
        this.f28165e = s8Var.a();
        this.f28172t = k7Var.getInternalTracesSampler().c(io.sentry.util.d0.a().c());
        this.f28168p = k7Var.getProfilingTracesDirPath();
        this.f28169q = k7Var.isProfilingEnabled();
        this.f28170r = k7Var.isContinuousProfilingEnabled();
        this.f28175w = k7Var.getProfileLifecycle();
        this.f28171s = k7Var.getProfilingTracesHz();
        this.f28173u = k7Var.isEnableAppStartProfiling();
        this.f28174v = k7Var.isStartProfilerOnAppStart();
    }
}
