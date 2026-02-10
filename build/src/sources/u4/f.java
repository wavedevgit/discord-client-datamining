package u4;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: i  reason: collision with root package name */
    public static final ExecutorService f51230i = u4.b.a();

    /* renamed from: j  reason: collision with root package name */
    private static final Executor f51231j = u4.b.b();

    /* renamed from: k  reason: collision with root package name */
    public static final Executor f51232k = u4.a.c();

    /* renamed from: l  reason: collision with root package name */
    private static f f51233l = new f((Object) null);

    /* renamed from: m  reason: collision with root package name */
    private static f f51234m = new f(Boolean.TRUE);

    /* renamed from: n  reason: collision with root package name */
    private static f f51235n = new f(Boolean.FALSE);

    /* renamed from: o  reason: collision with root package name */
    private static f f51236o = new f(true);

    /* renamed from: b  reason: collision with root package name */
    private boolean f51238b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51239c;

    /* renamed from: d  reason: collision with root package name */
    private Object f51240d;

    /* renamed from: e  reason: collision with root package name */
    private Exception f51241e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f51242f;

    /* renamed from: g  reason: collision with root package name */
    private h f51243g;

    /* renamed from: a  reason: collision with root package name */
    private final Object f51237a = new Object();

    /* renamed from: h  reason: collision with root package name */
    private List f51244h = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ g f51245a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ u4.d f51246b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Executor f51247c;

        a(g gVar, u4.d dVar, Executor executor, u4.c cVar) {
            this.f51245a = gVar;
            this.f51246b = dVar;
            this.f51247c = executor;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(f fVar) {
            f.d(this.f51245a, this.f51246b, fVar, this.f51247c, null);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f51249d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ u4.d f51250e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ f f51251i;

        b(u4.c cVar, g gVar, u4.d dVar, f fVar) {
            this.f51249d = gVar;
            this.f51250e = dVar;
            this.f51251i = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f51249d.d(this.f51250e.a(this.f51251i));
            } catch (CancellationException unused) {
                this.f51249d.b();
            } catch (Exception e10) {
                this.f51249d.c(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f51252d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Callable f51253e;

        c(u4.c cVar, g gVar, Callable callable) {
            this.f51252d = gVar;
            this.f51253e = callable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f51252d.d(this.f51253e.call());
            } catch (CancellationException unused) {
                this.f51252d.b();
            } catch (Exception e10) {
                this.f51252d.c(e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface d {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f() {
    }

    public static f b(Callable callable, Executor executor) {
        return c(callable, executor, null);
    }

    public static f c(Callable callable, Executor executor, u4.c cVar) {
        g gVar = new g();
        try {
            executor.execute(new c(cVar, gVar, callable));
        } catch (Exception e10) {
            gVar.c(new e(e10));
        }
        return gVar.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void d(g gVar, u4.d dVar, f fVar, Executor executor, u4.c cVar) {
        try {
            executor.execute(new b(cVar, gVar, dVar, fVar));
        } catch (Exception e10) {
            gVar.c(new e(e10));
        }
    }

    public static f g(Exception exc) {
        g gVar = new g();
        gVar.c(exc);
        return gVar.a();
    }

    public static f h(Object obj) {
        if (obj == null) {
            return f51233l;
        }
        if (obj instanceof Boolean) {
            if (((Boolean) obj).booleanValue()) {
                return f51234m;
            }
            return f51235n;
        }
        g gVar = new g();
        gVar.d(obj);
        return gVar.a();
    }

    public static d k() {
        return null;
    }

    private void o() {
        synchronized (this.f51237a) {
            for (u4.d dVar : this.f51244h) {
                try {
                    dVar.a(this);
                } catch (RuntimeException e10) {
                    throw e10;
                } catch (Exception e11) {
                    throw new RuntimeException(e11);
                }
            }
            this.f51244h = null;
        }
    }

    public f e(u4.d dVar) {
        return f(dVar, f51231j, null);
    }

    public f f(u4.d dVar, Executor executor, u4.c cVar) {
        u4.d dVar2;
        Executor executor2;
        u4.c cVar2;
        g gVar = new g();
        synchronized (this.f51237a) {
            try {
                try {
                    boolean m10 = m();
                    if (!m10) {
                        dVar2 = dVar;
                        executor2 = executor;
                        cVar2 = cVar;
                        this.f51244h.add(new a(gVar, dVar2, executor2, cVar2));
                    } else {
                        dVar2 = dVar;
                        executor2 = executor;
                        cVar2 = cVar;
                    }
                    if (m10) {
                        d(gVar, dVar2, this, executor2, cVar2);
                    }
                    return gVar.a();
                } catch (Throwable th2) {
                    th = th2;
                    throw th;
                }
            } catch (Throwable th3) {
                th = th3;
            }
        }
    }

    public Exception i() {
        Exception exc;
        synchronized (this.f51237a) {
            try {
                if (this.f51241e != null) {
                    this.f51242f = true;
                }
                exc = this.f51241e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return exc;
    }

    public Object j() {
        Object obj;
        synchronized (this.f51237a) {
            obj = this.f51240d;
        }
        return obj;
    }

    public boolean l() {
        boolean z10;
        synchronized (this.f51237a) {
            z10 = this.f51239c;
        }
        return z10;
    }

    public boolean m() {
        boolean z10;
        synchronized (this.f51237a) {
            z10 = this.f51238b;
        }
        return z10;
    }

    public boolean n() {
        boolean z10;
        synchronized (this.f51237a) {
            if (i() != null) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        synchronized (this.f51237a) {
            try {
                if (this.f51238b) {
                    return false;
                }
                this.f51238b = true;
                this.f51239c = true;
                this.f51237a.notifyAll();
                o();
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q(Exception exc) {
        synchronized (this.f51237a) {
            try {
                if (this.f51238b) {
                    return false;
                }
                this.f51238b = true;
                this.f51241e = exc;
                this.f51242f = false;
                this.f51237a.notifyAll();
                o();
                if (!this.f51242f) {
                    k();
                }
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r(Object obj) {
        synchronized (this.f51237a) {
            try {
                if (this.f51238b) {
                    return false;
                }
                this.f51238b = true;
                this.f51240d = obj;
                this.f51237a.notifyAll();
                o();
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private f(Object obj) {
        r(obj);
    }

    private f(boolean z10) {
        if (z10) {
            p();
        } else {
            r(null);
        }
    }
}
