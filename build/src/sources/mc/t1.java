package mc;

import android.media.metrics.LogSessionId;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t1 {

    /* renamed from: b  reason: collision with root package name */
    public static final t1 f37977b;

    /* renamed from: a  reason: collision with root package name */
    private final a f37978a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: b  reason: collision with root package name */
        public static final a f37979b;

        /* renamed from: a  reason: collision with root package name */
        public final LogSessionId f37980a;

        static {
            LogSessionId logSessionId;
            logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
            f37979b = new a(logSessionId);
        }

        public a(LogSessionId logSessionId) {
            this.f37980a = logSessionId;
        }
    }

    static {
        t1 t1Var;
        if (ne.w0.f40158a < 31) {
            t1Var = new t1();
        } else {
            t1Var = new t1(a.f37979b);
        }
        f37977b = t1Var;
    }

    public t1() {
        this((a) null);
        ne.a.g(ne.w0.f40158a < 31);
    }

    public LogSessionId a() {
        return ((a) ne.a.e(this.f37978a)).f37980a;
    }

    public t1(LogSessionId logSessionId) {
        this(new a(logSessionId));
    }

    private t1(a aVar) {
        this.f37978a = aVar;
    }
}
