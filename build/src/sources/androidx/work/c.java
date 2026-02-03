package androidx.work;

import android.content.Context;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
import java.util.concurrent.Executor;
import k4.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: d  reason: collision with root package name */
    private Context f5514d;

    /* renamed from: e  reason: collision with root package name */
    private WorkerParameters f5515e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f5516i = -256;

    /* renamed from: o  reason: collision with root package name */
    private boolean f5517o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: androidx.work.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0076a extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5518a;

            public C0076a() {
                this(androidx.work.b.f5511c);
            }

            public androidx.work.b e() {
                return this.f5518a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0076a.class == obj.getClass()) {
                    return this.f5518a.equals(((C0076a) obj).f5518a);
                }
                return false;
            }

            public int hashCode() {
                return (C0076a.class.getName().hashCode() * 31) + this.f5518a.hashCode();
            }

            public String toString() {
                return "Failure {mOutputData=" + this.f5518a + '}';
            }

            public C0076a(androidx.work.b bVar) {
                this.f5518a = bVar;
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
        public static final class C0077c extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5519a;

            public C0077c() {
                this(androidx.work.b.f5511c);
            }

            public androidx.work.b e() {
                return this.f5519a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0077c.class == obj.getClass()) {
                    return this.f5519a.equals(((C0077c) obj).f5519a);
                }
                return false;
            }

            public int hashCode() {
                return (C0077c.class.getName().hashCode() * 31) + this.f5519a.hashCode();
            }

            public String toString() {
                return "Success {mOutputData=" + this.f5519a + '}';
            }

            public C0077c(androidx.work.b bVar) {
                this.f5519a = bVar;
            }
        }

        a() {
        }

        public static a a() {
            return new C0076a();
        }

        public static a b() {
            return new b();
        }

        public static a c() {
            return new C0077c();
        }

        public static a d(androidx.work.b bVar) {
            return new C0077c(bVar);
        }
    }

    public c(Context context, WorkerParameters workerParameters) {
        if (context != null) {
            if (workerParameters != null) {
                this.f5514d = context;
                this.f5515e = workerParameters;
                return;
            }
            throw new IllegalArgumentException("WorkerParameters is null");
        }
        throw new IllegalArgumentException("Application Context is null");
    }

    public final Context b() {
        return this.f5514d;
    }

    public Executor c() {
        return this.f5515e.a();
    }

    public ListenableFuture d() {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        t10.q(new IllegalStateException("Expedited WorkRequests require a ListenableWorker to provide an implementation for `getForegroundInfoAsync()`"));
        return t10;
    }

    public final UUID e() {
        return this.f5515e.c();
    }

    public final b f() {
        return this.f5515e.d();
    }

    public final int g() {
        return this.f5516i;
    }

    public r4.b h() {
        return this.f5515e.e();
    }

    public a0 i() {
        return this.f5515e.f();
    }

    public final boolean j() {
        if (this.f5516i != -256) {
            return true;
        }
        return false;
    }

    public final boolean k() {
        return this.f5517o;
    }

    public void l() {
    }

    public final void m() {
        this.f5517o = true;
    }

    public abstract ListenableFuture n();

    public final void o(int i10) {
        this.f5516i = i10;
        l();
    }
}
