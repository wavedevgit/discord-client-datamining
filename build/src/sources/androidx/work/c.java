package androidx.work;

import android.content.Context;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
import java.util.concurrent.Executor;
import k4.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: d  reason: collision with root package name */
    private Context f5652d;

    /* renamed from: e  reason: collision with root package name */
    private WorkerParameters f5653e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f5654i = -256;

    /* renamed from: o  reason: collision with root package name */
    private boolean f5655o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: androidx.work.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0077a extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5656a;

            public C0077a() {
                this(androidx.work.b.f5649c);
            }

            public androidx.work.b e() {
                return this.f5656a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0077a.class == obj.getClass()) {
                    return this.f5656a.equals(((C0077a) obj).f5656a);
                }
                return false;
            }

            public int hashCode() {
                return (C0077a.class.getName().hashCode() * 31) + this.f5656a.hashCode();
            }

            public String toString() {
                return "Failure {mOutputData=" + this.f5656a + '}';
            }

            public C0077a(androidx.work.b bVar) {
                this.f5656a = bVar;
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
        public static final class C0078c extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5657a;

            public C0078c() {
                this(androidx.work.b.f5649c);
            }

            public androidx.work.b e() {
                return this.f5657a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0078c.class == obj.getClass()) {
                    return this.f5657a.equals(((C0078c) obj).f5657a);
                }
                return false;
            }

            public int hashCode() {
                return (C0078c.class.getName().hashCode() * 31) + this.f5657a.hashCode();
            }

            public String toString() {
                return "Success {mOutputData=" + this.f5657a + '}';
            }

            public C0078c(androidx.work.b bVar) {
                this.f5657a = bVar;
            }
        }

        a() {
        }

        public static a a() {
            return new C0077a();
        }

        public static a b() {
            return new b();
        }

        public static a c() {
            return new C0078c();
        }

        public static a d(androidx.work.b bVar) {
            return new C0078c(bVar);
        }
    }

    public c(Context context, WorkerParameters workerParameters) {
        if (context != null) {
            if (workerParameters != null) {
                this.f5652d = context;
                this.f5653e = workerParameters;
                return;
            }
            throw new IllegalArgumentException("WorkerParameters is null");
        }
        throw new IllegalArgumentException("Application Context is null");
    }

    public final Context b() {
        return this.f5652d;
    }

    public Executor c() {
        return this.f5653e.a();
    }

    public ListenableFuture d() {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        t10.q(new IllegalStateException("Expedited WorkRequests require a ListenableWorker to provide an implementation for `getForegroundInfoAsync()`"));
        return t10;
    }

    public final UUID e() {
        return this.f5653e.c();
    }

    public final b f() {
        return this.f5653e.d();
    }

    public final int g() {
        return this.f5654i;
    }

    public r4.b h() {
        return this.f5653e.e();
    }

    public a0 i() {
        return this.f5653e.f();
    }

    public final boolean j() {
        if (this.f5654i != -256) {
            return true;
        }
        return false;
    }

    public final boolean k() {
        return this.f5655o;
    }

    public void l() {
    }

    public final void m() {
        this.f5655o = true;
    }

    public abstract ListenableFuture n();

    public final void o(int i10) {
        this.f5654i = i10;
        l();
    }
}
