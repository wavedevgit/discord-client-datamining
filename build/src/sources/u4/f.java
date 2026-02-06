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
    public static final ExecutorService f51212i = u4.b.a();

    /* renamed from: j  reason: collision with root package name */
    private static final Executor f51213j = u4.b.b();

    /* renamed from: k  reason: collision with root package name */
    public static final Executor f51214k = u4.a.c();

    /* renamed from: l  reason: collision with root package name */
    private static f f51215l = new f((Object) null);

    /* renamed from: m  reason: collision with root package name */
    private static f f51216m = new f(Boolean.TRUE);

    /* renamed from: n  reason: collision with root package name */
    private static f f51217n = new f(Boolean.FALSE);

    /* renamed from: o  reason: collision with root package name */
    private static f f51218o = new f(true);

    /* renamed from: b  reason: collision with root package name */
    private boolean f51220b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51221c;

    /* renamed from: d  reason: collision with root package name */
    private Object f51222d;

    /* renamed from: e  reason: collision with root package name */
    private Exception f51223e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f51224f;

    /* renamed from: g  reason: collision with root package name */
    private h f51225g;

    /* renamed from: a  reason: collision with root package name */
    private final Object f51219a = new Object();

    /* renamed from: h  reason: collision with root package name */
    private List f51226h = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ g f51227a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ u4.d f51228b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Executor f51229c;

        a(g gVar, u4.d dVar, Executor executor, u4.c cVar) {
            this.f51227a = gVar;
            this.f51228b = dVar;
            this.f51229c = executor;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(f fVar) {
            f.d(this.f51227a, this.f51228b, fVar, this.f51229c, null);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f51231d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ u4.d f51232e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ f f51233i;

        b(u4.c cVar, g gVar, u4.d dVar, f fVar) {
            this.f51231d = gVar;
            this.f51232e = dVar;
            this.f51233i = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f51231d.d(this.f51232e.a(this.f51233i));
            } catch (CancellationException unused) {
                this.f51231d.b();
            } catch (Exception e10) {
                this.f51231d.c(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f51234d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Callable f51235e;

        c(u4.c cVar, g gVar, Callable callable) {
            this.f51234d = gVar;
            this.f51235e = callable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f51234d.d(this.f51235e.call());
            } catch (CancellationException unused) {
                this.f51234d.b();
            } catch (Exception e10) {
                this.f51234d.c(e10);
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
            return f51215l;
        }
        if (obj instanceof Boolean) {
            if (((Boolean) obj).booleanValue()) {
                return f51216m;
            }
            return f51217n;
        }
        g gVar = new g();
        gVar.d(obj);
        return gVar.a();
    }

    public static d k() {
        return null;
    }

    private void o() {
        synchronized (this.f51219a) {
            for (u4.d dVar : this.f51226h) {
                try {
                    dVar.a(this);
                } catch (RuntimeException e10) {
                    throw e10;
                } catch (Exception e11) {
                    throw new RuntimeException(e11);
                }
            }
            this.f51226h = null;
        }
    }

    public f e(u4.d dVar) {
        return f(dVar, f51213j, null);
    }

    public f f(u4.d dVar, Executor executor, u4.c cVar) {
        u4.d dVar2;
        Executor executor2;
        u4.c cVar2;
        g gVar = new g();
        synchronized (this.f51219a) {
            try {
                try {
                    boolean m10 = m();
                    if (!m10) {
                        dVar2 = dVar;
                        executor2 = executor;
                        cVar2 = cVar;
                        this.f51226h.add(new a(gVar, dVar2, executor2, cVar2));
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
        synchronized (this.f51219a) {
            try {
                if (this.f51223e != null) {
                    this.f51224f = true;
                }
                exc = this.f51223e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return exc;
    }

    public Object j() {
        Object obj;
        synchronized (this.f51219a) {
            obj = this.f51222d;
        }
        return obj;
    }

    public boolean l() {
        boolean z10;
        synchronized (this.f51219a) {
            z10 = this.f51221c;
        }
        return z10;
    }

    public boolean m() {
        boolean z10;
        synchronized (this.f51219a) {
            z10 = this.f51220b;
        }
        return z10;
    }

    public boolean n() {
        boolean z10;
        synchronized (this.f51219a) {
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
        synchronized (this.f51219a) {
            try {
                if (this.f51220b) {
                    return false;
                }
                this.f51220b = true;
                this.f51221c = true;
                this.f51219a.notifyAll();
                o();
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q(Exception exc) {
        synchronized (this.f51219a) {
            try {
                if (this.f51220b) {
                    return false;
                }
                this.f51220b = true;
                this.f51223e = exc;
                this.f51224f = false;
                this.f51219a.notifyAll();
                o();
                if (!this.f51224f) {
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
        synchronized (this.f51219a) {
            try {
                if (this.f51220b) {
                    return false;
                }
                this.f51220b = true;
                this.f51222d = obj;
                this.f51219a.notifyAll();
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
