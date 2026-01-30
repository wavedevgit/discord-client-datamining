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
    public static final ExecutorService f50059i = u4.b.a();

    /* renamed from: j  reason: collision with root package name */
    private static final Executor f50060j = u4.b.b();

    /* renamed from: k  reason: collision with root package name */
    public static final Executor f50061k = u4.a.c();

    /* renamed from: l  reason: collision with root package name */
    private static f f50062l = new f((Object) null);

    /* renamed from: m  reason: collision with root package name */
    private static f f50063m = new f(Boolean.TRUE);

    /* renamed from: n  reason: collision with root package name */
    private static f f50064n = new f(Boolean.FALSE);

    /* renamed from: o  reason: collision with root package name */
    private static f f50065o = new f(true);

    /* renamed from: b  reason: collision with root package name */
    private boolean f50067b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50068c;

    /* renamed from: d  reason: collision with root package name */
    private Object f50069d;

    /* renamed from: e  reason: collision with root package name */
    private Exception f50070e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f50071f;

    /* renamed from: g  reason: collision with root package name */
    private h f50072g;

    /* renamed from: a  reason: collision with root package name */
    private final Object f50066a = new Object();

    /* renamed from: h  reason: collision with root package name */
    private List f50073h = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ g f50074a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ u4.d f50075b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Executor f50076c;

        a(g gVar, u4.d dVar, Executor executor, u4.c cVar) {
            this.f50074a = gVar;
            this.f50075b = dVar;
            this.f50076c = executor;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(f fVar) {
            f.d(this.f50074a, this.f50075b, fVar, this.f50076c, null);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f50078d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ u4.d f50079e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ f f50080i;

        b(u4.c cVar, g gVar, u4.d dVar, f fVar) {
            this.f50078d = gVar;
            this.f50079e = dVar;
            this.f50080i = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f50078d.d(this.f50079e.a(this.f50080i));
            } catch (CancellationException unused) {
                this.f50078d.b();
            } catch (Exception e10) {
                this.f50078d.c(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f50081d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Callable f50082e;

        c(u4.c cVar, g gVar, Callable callable) {
            this.f50081d = gVar;
            this.f50082e = callable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f50081d.d(this.f50082e.call());
            } catch (CancellationException unused) {
                this.f50081d.b();
            } catch (Exception e10) {
                this.f50081d.c(e10);
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
            return f50062l;
        }
        if (obj instanceof Boolean) {
            if (((Boolean) obj).booleanValue()) {
                return f50063m;
            }
            return f50064n;
        }
        g gVar = new g();
        gVar.d(obj);
        return gVar.a();
    }

    public static d k() {
        return null;
    }

    private void o() {
        synchronized (this.f50066a) {
            for (u4.d dVar : this.f50073h) {
                try {
                    dVar.a(this);
                } catch (RuntimeException e10) {
                    throw e10;
                } catch (Exception e11) {
                    throw new RuntimeException(e11);
                }
            }
            this.f50073h = null;
        }
    }

    public f e(u4.d dVar) {
        return f(dVar, f50060j, null);
    }

    public f f(u4.d dVar, Executor executor, u4.c cVar) {
        u4.d dVar2;
        Executor executor2;
        u4.c cVar2;
        g gVar = new g();
        synchronized (this.f50066a) {
            try {
                try {
                    boolean m10 = m();
                    if (!m10) {
                        dVar2 = dVar;
                        executor2 = executor;
                        cVar2 = cVar;
                        this.f50073h.add(new a(gVar, dVar2, executor2, cVar2));
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
        synchronized (this.f50066a) {
            try {
                if (this.f50070e != null) {
                    this.f50071f = true;
                }
                exc = this.f50070e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return exc;
    }

    public Object j() {
        Object obj;
        synchronized (this.f50066a) {
            obj = this.f50069d;
        }
        return obj;
    }

    public boolean l() {
        boolean z10;
        synchronized (this.f50066a) {
            z10 = this.f50068c;
        }
        return z10;
    }

    public boolean m() {
        boolean z10;
        synchronized (this.f50066a) {
            z10 = this.f50067b;
        }
        return z10;
    }

    public boolean n() {
        boolean z10;
        synchronized (this.f50066a) {
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
        synchronized (this.f50066a) {
            try {
                if (this.f50067b) {
                    return false;
                }
                this.f50067b = true;
                this.f50068c = true;
                this.f50066a.notifyAll();
                o();
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q(Exception exc) {
        synchronized (this.f50066a) {
            try {
                if (this.f50067b) {
                    return false;
                }
                this.f50067b = true;
                this.f50070e = exc;
                this.f50071f = false;
                this.f50066a.notifyAll();
                o();
                if (!this.f50071f) {
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
        synchronized (this.f50066a) {
            try {
                if (this.f50067b) {
                    return false;
                }
                this.f50067b = true;
                this.f50069d = obj;
                this.f50066a.notifyAll();
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
