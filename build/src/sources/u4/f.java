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
    public static final ExecutorService f50410i = u4.b.a();

    /* renamed from: j  reason: collision with root package name */
    private static final Executor f50411j = u4.b.b();

    /* renamed from: k  reason: collision with root package name */
    public static final Executor f50412k = u4.a.c();

    /* renamed from: l  reason: collision with root package name */
    private static f f50413l = new f((Object) null);

    /* renamed from: m  reason: collision with root package name */
    private static f f50414m = new f(Boolean.TRUE);

    /* renamed from: n  reason: collision with root package name */
    private static f f50415n = new f(Boolean.FALSE);

    /* renamed from: o  reason: collision with root package name */
    private static f f50416o = new f(true);

    /* renamed from: b  reason: collision with root package name */
    private boolean f50418b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50419c;

    /* renamed from: d  reason: collision with root package name */
    private Object f50420d;

    /* renamed from: e  reason: collision with root package name */
    private Exception f50421e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f50422f;

    /* renamed from: g  reason: collision with root package name */
    private h f50423g;

    /* renamed from: a  reason: collision with root package name */
    private final Object f50417a = new Object();

    /* renamed from: h  reason: collision with root package name */
    private List f50424h = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ g f50425a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ u4.d f50426b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Executor f50427c;

        a(g gVar, u4.d dVar, Executor executor, u4.c cVar) {
            this.f50425a = gVar;
            this.f50426b = dVar;
            this.f50427c = executor;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(f fVar) {
            f.d(this.f50425a, this.f50426b, fVar, this.f50427c, null);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f50429d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ u4.d f50430e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ f f50431i;

        b(u4.c cVar, g gVar, u4.d dVar, f fVar) {
            this.f50429d = gVar;
            this.f50430e = dVar;
            this.f50431i = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f50429d.d(this.f50430e.a(this.f50431i));
            } catch (CancellationException unused) {
                this.f50429d.b();
            } catch (Exception e10) {
                this.f50429d.c(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f50432d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Callable f50433e;

        c(u4.c cVar, g gVar, Callable callable) {
            this.f50432d = gVar;
            this.f50433e = callable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f50432d.d(this.f50433e.call());
            } catch (CancellationException unused) {
                this.f50432d.b();
            } catch (Exception e10) {
                this.f50432d.c(e10);
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
            return f50413l;
        }
        if (obj instanceof Boolean) {
            if (((Boolean) obj).booleanValue()) {
                return f50414m;
            }
            return f50415n;
        }
        g gVar = new g();
        gVar.d(obj);
        return gVar.a();
    }

    public static d k() {
        return null;
    }

    private void o() {
        synchronized (this.f50417a) {
            for (u4.d dVar : this.f50424h) {
                try {
                    dVar.a(this);
                } catch (RuntimeException e10) {
                    throw e10;
                } catch (Exception e11) {
                    throw new RuntimeException(e11);
                }
            }
            this.f50424h = null;
        }
    }

    public f e(u4.d dVar) {
        return f(dVar, f50411j, null);
    }

    public f f(u4.d dVar, Executor executor, u4.c cVar) {
        u4.d dVar2;
        Executor executor2;
        u4.c cVar2;
        g gVar = new g();
        synchronized (this.f50417a) {
            try {
                try {
                    boolean m10 = m();
                    if (!m10) {
                        dVar2 = dVar;
                        executor2 = executor;
                        cVar2 = cVar;
                        this.f50424h.add(new a(gVar, dVar2, executor2, cVar2));
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
        synchronized (this.f50417a) {
            try {
                if (this.f50421e != null) {
                    this.f50422f = true;
                }
                exc = this.f50421e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return exc;
    }

    public Object j() {
        Object obj;
        synchronized (this.f50417a) {
            obj = this.f50420d;
        }
        return obj;
    }

    public boolean l() {
        boolean z10;
        synchronized (this.f50417a) {
            z10 = this.f50419c;
        }
        return z10;
    }

    public boolean m() {
        boolean z10;
        synchronized (this.f50417a) {
            z10 = this.f50418b;
        }
        return z10;
    }

    public boolean n() {
        boolean z10;
        synchronized (this.f50417a) {
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
        synchronized (this.f50417a) {
            try {
                if (this.f50418b) {
                    return false;
                }
                this.f50418b = true;
                this.f50419c = true;
                this.f50417a.notifyAll();
                o();
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q(Exception exc) {
        synchronized (this.f50417a) {
            try {
                if (this.f50418b) {
                    return false;
                }
                this.f50418b = true;
                this.f50421e = exc;
                this.f50422f = false;
                this.f50417a.notifyAll();
                o();
                if (!this.f50422f) {
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
        synchronized (this.f50417a) {
            try {
                if (this.f50418b) {
                    return false;
                }
                this.f50418b = true;
                this.f50420d = obj;
                this.f50417a.notifyAll();
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
