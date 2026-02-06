package androidx.work;

import android.content.Context;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
import java.util.concurrent.Executor;
import k4.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: d  reason: collision with root package name */
    private Context f5955d;

    /* renamed from: e  reason: collision with root package name */
    private WorkerParameters f5956e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f5957i = -256;

    /* renamed from: o  reason: collision with root package name */
    private boolean f5958o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: androidx.work.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0075a extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5959a;

            public C0075a() {
                this(androidx.work.b.f5952c);
            }

            public androidx.work.b e() {
                return this.f5959a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0075a.class == obj.getClass()) {
                    return this.f5959a.equals(((C0075a) obj).f5959a);
                }
                return false;
            }

            public int hashCode() {
                return (C0075a.class.getName().hashCode() * 31) + this.f5959a.hashCode();
            }

            public String toString() {
                return "Failure {mOutputData=" + this.f5959a + '}';
            }

            public C0075a(androidx.work.b bVar) {
                this.f5959a = bVar;
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
        public static final class C0076c extends a {

            /* renamed from: a  reason: collision with root package name */
            private final androidx.work.b f5960a;

            public C0076c() {
                this(androidx.work.b.f5952c);
            }

            public androidx.work.b e() {
                return this.f5960a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj != null && C0076c.class == obj.getClass()) {
                    return this.f5960a.equals(((C0076c) obj).f5960a);
                }
                return false;
            }

            public int hashCode() {
                return (C0076c.class.getName().hashCode() * 31) + this.f5960a.hashCode();
            }

            public String toString() {
                return "Success {mOutputData=" + this.f5960a + '}';
            }

            public C0076c(androidx.work.b bVar) {
                this.f5960a = bVar;
            }
        }

        a() {
        }

        public static a a() {
            return new C0075a();
        }

        public static a b() {
            return new b();
        }

        public static a c() {
            return new C0076c();
        }

        public static a d(androidx.work.b bVar) {
            return new C0076c(bVar);
        }
    }

    public c(Context context, WorkerParameters workerParameters) {
        if (context != null) {
            if (workerParameters != null) {
                this.f5955d = context;
                this.f5956e = workerParameters;
                return;
            }
            throw new IllegalArgumentException("WorkerParameters is null");
        }
        throw new IllegalArgumentException("Application Context is null");
    }

    public final Context b() {
        return this.f5955d;
    }

    public Executor c() {
        return this.f5956e.a();
    }

    public ListenableFuture d() {
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        t10.q(new IllegalStateException("Expedited WorkRequests require a ListenableWorker to provide an implementation for `getForegroundInfoAsync()`"));
        return t10;
    }

    public final UUID e() {
        return this.f5956e.c();
    }

    public final b f() {
        return this.f5956e.d();
    }

    public final int g() {
        return this.f5957i;
    }

    public r4.b h() {
        return this.f5956e.e();
    }

    public a0 i() {
        return this.f5956e.f();
    }

    public final boolean j() {
        if (this.f5957i != -256) {
            return true;
        }
        return false;
    }

    public final boolean k() {
        return this.f5958o;
    }

    public void l() {
    }

    public final void m() {
        this.f5958o = true;
    }

    public abstract ListenableFuture n();

    public final void o(int i10) {
        this.f5957i = i10;
        l();
    }
}
