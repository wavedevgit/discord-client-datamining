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
    public static final ExecutorService f50399i = u4.b.a();

    /* renamed from: j  reason: collision with root package name */
    private static final Executor f50400j = u4.b.b();

    /* renamed from: k  reason: collision with root package name */
    public static final Executor f50401k = u4.a.c();

    /* renamed from: l  reason: collision with root package name */
    private static f f50402l = new f((Object) null);

    /* renamed from: m  reason: collision with root package name */
    private static f f50403m = new f(Boolean.TRUE);

    /* renamed from: n  reason: collision with root package name */
    private static f f50404n = new f(Boolean.FALSE);

    /* renamed from: o  reason: collision with root package name */
    private static f f50405o = new f(true);

    /* renamed from: b  reason: collision with root package name */
    private boolean f50407b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50408c;

    /* renamed from: d  reason: collision with root package name */
    private Object f50409d;

    /* renamed from: e  reason: collision with root package name */
    private Exception f50410e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f50411f;

    /* renamed from: g  reason: collision with root package name */
    private h f50412g;

    /* renamed from: a  reason: collision with root package name */
    private final Object f50406a = new Object();

    /* renamed from: h  reason: collision with root package name */
    private List f50413h = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ g f50414a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ u4.d f50415b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Executor f50416c;

        a(g gVar, u4.d dVar, Executor executor, u4.c cVar) {
            this.f50414a = gVar;
            this.f50415b = dVar;
            this.f50416c = executor;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(f fVar) {
            f.d(this.f50414a, this.f50415b, fVar, this.f50416c, null);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f50418d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ u4.d f50419e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ f f50420i;

        b(u4.c cVar, g gVar, u4.d dVar, f fVar) {
            this.f50418d = gVar;
            this.f50419e = dVar;
            this.f50420i = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f50418d.d(this.f50419e.a(this.f50420i));
            } catch (CancellationException unused) {
                this.f50418d.b();
            } catch (Exception e10) {
                this.f50418d.c(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f50421d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Callable f50422e;

        c(u4.c cVar, g gVar, Callable callable) {
            this.f50421d = gVar;
            this.f50422e = callable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f50421d.d(this.f50422e.call());
            } catch (CancellationException unused) {
                this.f50421d.b();
            } catch (Exception e10) {
                this.f50421d.c(e10);
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
            return f50402l;
        }
        if (obj instanceof Boolean) {
            if (((Boolean) obj).booleanValue()) {
                return f50403m;
            }
            return f50404n;
        }
        g gVar = new g();
        gVar.d(obj);
        return gVar.a();
    }

    public static d k() {
        return null;
    }

    private void o() {
        synchronized (this.f50406a) {
            for (u4.d dVar : this.f50413h) {
                try {
                    dVar.a(this);
                } catch (RuntimeException e10) {
                    throw e10;
                } catch (Exception e11) {
                    throw new RuntimeException(e11);
                }
            }
            this.f50413h = null;
        }
    }

    public f e(u4.d dVar) {
        return f(dVar, f50400j, null);
    }

    public f f(u4.d dVar, Executor executor, u4.c cVar) {
        u4.d dVar2;
        Executor executor2;
        u4.c cVar2;
        g gVar = new g();
        synchronized (this.f50406a) {
            try {
                try {
                    boolean m10 = m();
                    if (!m10) {
                        dVar2 = dVar;
                        executor2 = executor;
                        cVar2 = cVar;
                        this.f50413h.add(new a(gVar, dVar2, executor2, cVar2));
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
        synchronized (this.f50406a) {
            try {
                if (this.f50410e != null) {
                    this.f50411f = true;
                }
                exc = this.f50410e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return exc;
    }

    public Object j() {
        Object obj;
        synchronized (this.f50406a) {
            obj = this.f50409d;
        }
        return obj;
    }

    public boolean l() {
        boolean z10;
        synchronized (this.f50406a) {
            z10 = this.f50408c;
        }
        return z10;
    }

    public boolean m() {
        boolean z10;
        synchronized (this.f50406a) {
            z10 = this.f50407b;
        }
        return z10;
    }

    public boolean n() {
        boolean z10;
        synchronized (this.f50406a) {
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
        synchronized (this.f50406a) {
            try {
                if (this.f50407b) {
                    return false;
                }
                this.f50407b = true;
                this.f50408c = true;
                this.f50406a.notifyAll();
                o();
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q(Exception exc) {
        synchronized (this.f50406a) {
            try {
                if (this.f50407b) {
                    return false;
                }
                this.f50407b = true;
                this.f50410e = exc;
                this.f50411f = false;
                this.f50406a.notifyAll();
                o();
                if (!this.f50411f) {
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
        synchronized (this.f50406a) {
            try {
                if (this.f50407b) {
                    return false;
                }
                this.f50407b = true;
                this.f50409d = obj;
                this.f50406a.notifyAll();
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
