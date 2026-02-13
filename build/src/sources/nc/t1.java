package nc;

import android.media.metrics.LogSessionId;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t1 {

    /* renamed from: b  reason: collision with root package name */
    public static final t1 f37698b;

    /* renamed from: a  reason: collision with root package name */
    private final a f37699a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: b  reason: collision with root package name */
        public static final a f37700b;

        /* renamed from: a  reason: collision with root package name */
        public final LogSessionId f37701a;

        static {
            LogSessionId logSessionId;
            logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
            f37700b = new a(logSessionId);
        }

        public a(LogSessionId logSessionId) {
            this.f37701a = logSessionId;
        }
    }

    static {
        t1 t1Var;
        if (oe.w0.f39606a < 31) {
            t1Var = new t1();
        } else {
            t1Var = new t1(a.f37700b);
        }
        f37698b = t1Var;
    }

    public t1() {
        this((a) null);
        oe.a.g(oe.w0.f39606a < 31);
    }

    public LogSessionId a() {
        return ((a) oe.a.e(this.f37699a)).f37701a;
    }

    public t1(LogSessionId logSessionId) {
        this(new a(logSessionId));
    }

    private t1(a aVar) {
        this.f37699a = aVar;
    }
}
