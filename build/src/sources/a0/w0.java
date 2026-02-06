package a0;

import android.util.Log;
import android.util.Size;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class w0 {

    /* renamed from: k  reason: collision with root package name */
    public static final Size f290k = new Size(0, 0);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f291l = x.y0.f("DeferrableSurface");

    /* renamed from: m  reason: collision with root package name */
    private static final AtomicInteger f292m = new AtomicInteger(0);

    /* renamed from: n  reason: collision with root package name */
    private static final AtomicInteger f293n = new AtomicInteger(0);

    /* renamed from: a  reason: collision with root package name */
    private final Object f294a;

    /* renamed from: b  reason: collision with root package name */
    private int f295b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f296c;

    /* renamed from: d  reason: collision with root package name */
    private c.a f297d;

    /* renamed from: e  reason: collision with root package name */
    private final ListenableFuture f298e;

    /* renamed from: f  reason: collision with root package name */
    private c.a f299f;

    /* renamed from: g  reason: collision with root package name */
    private final ListenableFuture f300g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f301h;

    /* renamed from: i  reason: collision with root package name */
    private final int f302i;

    /* renamed from: j  reason: collision with root package name */
    Class f303j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Exception {

        /* renamed from: d  reason: collision with root package name */
        w0 f304d;

        public a(String str, w0 w0Var) {
            super(str);
            this.f304d = w0Var;
        }

        public w0 a() {
            return this.f304d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Exception {
        public b(String str) {
            super(str);
        }
    }

    public w0() {
        this(f290k, 0);
    }

    public static /* synthetic */ Object a(w0 w0Var, c.a aVar) {
        synchronized (w0Var.f294a) {
            w0Var.f297d = aVar;
        }
        return "DeferrableSurface-termination(" + w0Var + ")";
    }

    public static /* synthetic */ Object b(w0 w0Var, c.a aVar) {
        synchronized (w0Var.f294a) {
            w0Var.f299f = aVar;
        }
        return "DeferrableSurface-close(" + w0Var + ")";
    }

    public static /* synthetic */ void c(w0 w0Var, String str) {
        w0Var.getClass();
        try {
            w0Var.f298e.get();
            w0Var.n("Surface terminated", f293n.decrementAndGet(), f292m.get());
        } catch (Exception e10) {
            x.y0.c("DeferrableSurface", "Unexpected surface termination for " + w0Var + "\nStack Trace:\n" + str);
            synchronized (w0Var.f294a) {
                throw new IllegalArgumentException(String.format("DeferrableSurface %s [closed: %b, use_count: %s] terminated with unexpected exception.", w0Var, Boolean.valueOf(w0Var.f296c), Integer.valueOf(w0Var.f295b)), e10);
            }
        }
    }

    private void n(String str, int i10, int i11) {
        if (!f291l && x.y0.f("DeferrableSurface")) {
            x.y0.a("DeferrableSurface", "DeferrableSurface usage statistics may be inaccurate since debug logging was not enabled at static initialization time. App restart may be required to enable accurate usage statistics.");
        }
        x.y0.a("DeferrableSurface", str + "[total_surfaces=" + i10 + ", used_surfaces=" + i11 + "](" + this + "}");
    }

    public void d() {
        c.a aVar;
        synchronized (this.f294a) {
            try {
                if (!this.f296c) {
                    this.f296c = true;
                    this.f299f.c(null);
                    if (this.f295b == 0) {
                        aVar = this.f297d;
                        this.f297d = null;
                    } else {
                        aVar = null;
                    }
                    if (x.y0.f("DeferrableSurface")) {
                        x.y0.a("DeferrableSurface", "surface closed,  useCount=" + this.f295b + " closed=true " + this);
                    }
                } else {
                    aVar = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (aVar != null) {
            aVar.c(null);
        }
    }

    public void e() {
        c.a aVar;
        synchronized (this.f294a) {
            try {
                int i10 = this.f295b;
                if (i10 != 0) {
                    int i11 = i10 - 1;
                    this.f295b = i11;
                    if (i11 == 0 && this.f296c) {
                        aVar = this.f297d;
                        this.f297d = null;
                    } else {
                        aVar = null;
                    }
                    if (x.y0.f("DeferrableSurface")) {
                        x.y0.a("DeferrableSurface", "use count-1,  useCount=" + this.f295b + " closed=" + this.f296c + " " + this);
                        if (this.f295b == 0) {
                            n("Surface no longer in use", f293n.get(), f292m.decrementAndGet());
                        }
                    }
                } else {
                    throw new IllegalStateException("Decrementing use count occurs more times than incrementing");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (aVar != null) {
            aVar.c(null);
        }
    }

    public ListenableFuture f() {
        return d0.n.s(this.f300g);
    }

    public Class g() {
        return this.f303j;
    }

    public Size h() {
        return this.f301h;
    }

    public int i() {
        return this.f302i;
    }

    public final ListenableFuture j() {
        synchronized (this.f294a) {
            try {
                if (this.f296c) {
                    return d0.n.n(new a("DeferrableSurface already closed.", this));
                }
                return o();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public ListenableFuture k() {
        return d0.n.s(this.f298e);
    }

    public void l() {
        synchronized (this.f294a) {
            try {
                int i10 = this.f295b;
                if (i10 == 0 && this.f296c) {
                    throw new a("Cannot begin use on a closed surface.", this);
                }
                this.f295b = i10 + 1;
                if (x.y0.f("DeferrableSurface")) {
                    if (this.f295b == 1) {
                        n("New surface in use", f293n.get(), f292m.incrementAndGet());
                    }
                    x.y0.a("DeferrableSurface", "use count+1, useCount=" + this.f295b + " " + this);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean m() {
        boolean z10;
        synchronized (this.f294a) {
            z10 = this.f296c;
        }
        return z10;
    }

    protected abstract ListenableFuture o();

    public void p(Class cls) {
        this.f303j = cls;
    }

    public w0(Size size, int i10) {
        this.f294a = new Object();
        this.f295b = 0;
        this.f296c = false;
        this.f301h = size;
        this.f302i = i10;
        ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0027c() { // from class: a0.t0
            @Override // androidx.concurrent.futures.c.InterfaceC0027c
            public final Object a(c.a aVar) {
                return w0.a(w0.this, aVar);
            }
        });
        this.f298e = a10;
        this.f300g = androidx.concurrent.futures.c.a(new c.InterfaceC0027c() { // from class: a0.u0
            @Override // androidx.concurrent.futures.c.InterfaceC0027c
            public final Object a(c.a aVar) {
                return w0.b(w0.this, aVar);
            }
        });
        if (x.y0.f("DeferrableSurface")) {
            n("Surface created", f293n.incrementAndGet(), f292m.get());
            final String stackTraceString = Log.getStackTraceString(new Exception());
            a10.a(new Runnable() { // from class: a0.v0
                @Override // java.lang.Runnable
                public final void run() {
                    w0.c(w0.this, stackTraceString);
                }
            }, c0.a.a());
        }
    }
}
