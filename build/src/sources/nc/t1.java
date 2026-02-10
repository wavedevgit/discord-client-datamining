package nc;

import android.media.metrics.LogSessionId;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t1 {

    /* renamed from: b  reason: collision with root package name */
    public static final t1 f38125b;

    /* renamed from: a  reason: collision with root package name */
    private final a f38126a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: b  reason: collision with root package name */
        public static final a f38127b;

        /* renamed from: a  reason: collision with root package name */
        public final LogSessionId f38128a;

        static {
            LogSessionId logSessionId;
            logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
            f38127b = new a(logSessionId);
        }

        public a(LogSessionId logSessionId) {
            this.f38128a = logSessionId;
        }
    }

    static {
        t1 t1Var;
        if (oe.w0.f40711a < 31) {
            t1Var = new t1();
        } else {
            t1Var = new t1(a.f38127b);
        }
        f38125b = t1Var;
    }

    public t1() {
        this((a) null);
        oe.a.g(oe.w0.f40711a < 31);
    }

    public LogSessionId a() {
        return ((a) oe.a.e(this.f38126a)).f38128a;
    }

    public t1(LogSessionId logSessionId) {
        this(new a(logSessionId));
    }

    private t1(a aVar) {
        this.f38126a = aVar;
    }
}
