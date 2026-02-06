package x;

import a0.b0;
import a0.c0;
import a0.r0;
import a0.y2;
import android.os.Handler;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w implements e0.m {
    static final r0.a J = r0.a.a("camerax.core.appConfig.cameraFactoryProvider", c0.a.class);
    static final r0.a K = r0.a.a("camerax.core.appConfig.deviceSurfaceManagerProvider", b0.a.class);
    static final r0.a L = r0.a.a("camerax.core.appConfig.useCaseConfigFactoryProvider", y2.c.class);
    static final r0.a M = r0.a.a("camerax.core.appConfig.cameraExecutor", Executor.class);
    static final r0.a N = r0.a.a("camerax.core.appConfig.schedulerHandler", Handler.class);
    static final r0.a O = r0.a.a("camerax.core.appConfig.minimumLoggingLevel", Integer.TYPE);
    static final r0.a P = r0.a.a("camerax.core.appConfig.availableCamerasLimiter", p.class);
    static final r0.a Q = r0.a.a("camerax.core.appConfig.cameraOpenRetryMaxTimeoutInMillisWhileResuming", Long.TYPE);
    static final r0.a R = r0.a.a("camerax.core.appConfig.cameraProviderInitRetryPolicy", i1.class);
    static final r0.a S = r0.a.a("camerax.core.appConfig.quirksSettings", a0.z1.class);
    private final a0.w1 I;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final a0.r1 f54329a;

        public a() {
            this(a0.r1.Z());
        }

        private a0.q1 b() {
            return this.f54329a;
        }

        public w a() {
            return new w(a0.w1.Y(this.f54329a));
        }

        public a c(c0.a aVar) {
            b().V(w.J, aVar);
            return this;
        }

        public a d(b0.a aVar) {
            b().V(w.K, aVar);
            return this;
        }

        public a e(Class cls) {
            b().V(e0.m.G, cls);
            if (b().e(e0.m.F, null) == null) {
                f(cls.getCanonicalName() + "-" + UUID.randomUUID());
            }
            return this;
        }

        public a f(String str) {
            b().V(e0.m.F, str);
            return this;
        }

        public a g(y2.c cVar) {
            b().V(w.L, cVar);
            return this;
        }

        private a(a0.r1 r1Var) {
            this.f54329a = r1Var;
            Class cls = (Class) r1Var.e(e0.m.G, null);
            if (cls != null && !cls.equals(v.class)) {
                throw new IllegalArgumentException("Invalid target class configuration for " + this + ": " + cls);
            }
            e(v.class);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        w getCameraXConfig();
    }

    w(a0.w1 w1Var) {
        this.I = w1Var;
    }

    public p W(p pVar) {
        return (p) this.I.e(P, pVar);
    }

    public Executor X(Executor executor) {
        return (Executor) this.I.e(M, executor);
    }

    public c0.a Y(c0.a aVar) {
        return (c0.a) this.I.e(J, aVar);
    }

    public long Z() {
        return ((Long) this.I.e(Q, -1L)).longValue();
    }

    public i1 a0() {
        i1 i1Var = (i1) this.I.e(R, i1.f54201b);
        Objects.requireNonNull(i1Var);
        return i1Var;
    }

    public b0.a b0(b0.a aVar) {
        return (b0.a) this.I.e(K, aVar);
    }

    public a0.z1 c0() {
        return (a0.z1) this.I.e(S, null);
    }

    public Handler d0(Handler handler) {
        return (Handler) this.I.e(N, handler);
    }

    public y2.c e0(y2.c cVar) {
        return (y2.c) this.I.e(L, cVar);
    }

    @Override // a0.e2
    public a0.r0 getConfig() {
        return this.I;
    }
}
