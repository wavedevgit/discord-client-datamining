package androidx.work;

import android.content.Context;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
import java.util.concurrent.Executor;
import k4.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: d  reason: collision with root package name */
    private Context f5662d;

    /* renamed from: e  reason: collision with root package name */
    private WorkerParameters f5663e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f5664i = -256;

    /* renamed from: o  reason: collision with root package name */
    private boolean f5665o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: androidx.work.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0073a extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5666a;

            public C0073a() {
                this(androidx.work.b.f5659c);
            }

            public androidx.work.b e() {
                return this.f5666a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0073a.class == obj.getClass()) {
                    return this.f5666a.equals(((C0073a) obj).f5666a);
                }
                return false;
            }

            public int hashCode() {
                return (C0073a.class.getName().hashCode() * 31) + this.f5666a.hashCode();
            }

            public String toString() {
                return "Failure {mOutputData=" + this.f5666a + '}';
            }

            public C0073a(androidx.work.b bVar) {
                this.f5666a = bVar;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b extends a {
            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && b.class == obj.getClass()) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return b.class.getName().hashCode();
            }

            public String toString() {
                return "Retry";
            }
        }

        /* renamed from: androidx.work.c$a$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0074c extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5667a;

            public C0074c() {
                this(androidx.work.b.f5659c);
            }

            public androidx.work.b e() {
                return this.f5667a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0074c.class == obj.getClass()) {
                    return this.f5667a.equals(((C0074c) obj).f5667a);
                }
                return false;
            }

            public int hashCode() {
                return (C0074c.class.getName().hashCode() * 31) + this.f5667a.hashCode();
            }

            public String toString() {
                return "Success {mOutputData=" + this.f5667a + '}';
            }

            public C0074c(androidx.work.b bVar) {
                this.f5667a = bVar;
            }
        }

        a() {
        }

        public static a a() {
            return new C0073a();
        }

        public static a b() {
            return new b();
        }

        public static a c() {
            return new C0074c();
        }

        public static a d(androidx.work.b bVar) {
            return new C0074c(bVar);
        }
    }

    public c(Context context, WorkerParameters workerParameters) {
        if (context != null) {
            if (workerParameters != null) {
                this.f5662d = context;
                this.f5663e = workerParameters;
                return;
            }
            throw new IllegalArgumentException("WorkerParameters is null");
        }
        throw new IllegalArgumentException("Application Context is null");
    }

    public final Context b() {
        return this.f5662d;
    }

    public Executor c() {
        return this.f5663e.a();
    }

    public ListenableFuture d() {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        t10.q(new IllegalStateException("Expedited WorkRequests require a ListenableWorker to provide an implementation for `getForegroundInfoAsync()`"));
        return t10;
    }

    public final UUID e() {
        return this.f5663e.c();
    }

    public final b f() {
        return this.f5663e.d();
    }

    public final int g() {
        return this.f5664i;
    }

    public r4.b h() {
        return this.f5663e.e();
    }

    public a0 i() {
        return this.f5663e.f();
    }

    public final boolean j() {
        if (this.f5664i != -256) {
            return true;
        }
        return false;
    }

    public final boolean k() {
        return this.f5665o;
    }

    public void l() {
    }

    public final void m() {
        this.f5665o = true;
    }

    public abstract ListenableFuture n();

    public final void o(int i10) {
        this.f5664i = i10;
        l();
    }
}
