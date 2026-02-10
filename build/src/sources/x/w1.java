package x;

import a0.m2;
import a0.w0;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Range;
import android.util.Size;
import android.view.Surface;
import androidx.concurrent.futures.c;
import androidx.core.util.Consumer;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
import x.w1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w1 {

    /* renamed from: p  reason: collision with root package name */
    public static final Range f54470p = m2.f165a;

    /* renamed from: a  reason: collision with root package name */
    private final Object f54471a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Size f54472b;

    /* renamed from: c  reason: collision with root package name */
    private final z f54473c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f54474d;

    /* renamed from: e  reason: collision with root package name */
    private final a0.e0 f54475e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f54476f;

    /* renamed from: g  reason: collision with root package name */
    final ListenableFuture f54477g;

    /* renamed from: h  reason: collision with root package name */
    private final c.a f54478h;

    /* renamed from: i  reason: collision with root package name */
    private final ListenableFuture f54479i;

    /* renamed from: j  reason: collision with root package name */
    private final c.a f54480j;

    /* renamed from: k  reason: collision with root package name */
    private final c.a f54481k;

    /* renamed from: l  reason: collision with root package name */
    private final a0.w0 f54482l;

    /* renamed from: m  reason: collision with root package name */
    private h f54483m;

    /* renamed from: n  reason: collision with root package name */
    private i f54484n;

    /* renamed from: o  reason: collision with root package name */
    private Executor f54485o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f54486a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f54487b;

        a(c.a aVar, ListenableFuture listenableFuture) {
            this.f54486a = aVar;
            this.f54487b = listenableFuture;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r22) {
            b2.e.i(this.f54486a.c(null));
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            if (th2 instanceof f) {
                b2.e.i(this.f54487b.cancel(false));
            } else {
                b2.e.i(this.f54486a.c(null));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends a0.w0 {
        b(Size size, int i10) {
            super(size, i10);
        }

        @Override // a0.w0
        protected ListenableFuture o() {
            return w1.this.f54477g;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f54490a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ c.a f54491b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f54492c;

        c(ListenableFuture listenableFuture, c.a aVar, String str) {
            this.f54490a = listenableFuture;
            this.f54491b = aVar;
            this.f54492c = str;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Surface surface) {
            d0.n.t(this.f54490a, this.f54491b);
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            if (th2 instanceof CancellationException) {
                c.a aVar = this.f54491b;
                b2.e.i(aVar.f(new f(this.f54492c + " cancelled.", th2)));
                return;
            }
            this.f54491b.c(null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Consumer f54494a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Surface f54495b;

        d(Consumer consumer, Surface surface) {
            this.f54494a = consumer;
            this.f54495b = surface;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r32) {
            this.f54494a.accept(g.c(0, this.f54495b));
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            b2.e.j(th2 instanceof f, "Camera surface session should only fail with request cancellation. Instead failed due to:\n" + th2);
            this.f54494a.accept(g.c(1, this.f54495b));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class f extends RuntimeException {
        f(String str, Throwable th2) {
            super(str, th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class g {
        static g c(int i10, Surface surface) {
            return new x.g(i10, surface);
        }

        public abstract int a();

        public abstract Surface b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class h {
        public static h g(Rect rect, int i10, int i11, boolean z10, Matrix matrix, boolean z11) {
            return new x.h(rect, i10, i11, z10, matrix, z11);
        }

        public abstract Rect a();

        public abstract int b();

        public abstract Matrix c();

        public abstract int d();

        public abstract boolean e();

        public abstract boolean f();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface i {
        void a(h hVar);
    }

    public w1(Size size, a0.e0 e0Var, boolean z10, z zVar, Range range, Runnable runnable) {
        this.f54472b = size;
        this.f54475e = e0Var;
        this.f54476f = z10;
        this.f54473c = zVar;
        this.f54474d = range;
        final String str = "SurfaceRequest[size: " + size + ", id: " + hashCode() + "]";
        final AtomicReference atomicReference = new AtomicReference(null);
        ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: x.s1
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return w1.b(atomicReference, str, aVar);
            }
        });
        c.a aVar = (c.a) b2.e.g((c.a) atomicReference.get());
        this.f54481k = aVar;
        final AtomicReference atomicReference2 = new AtomicReference(null);
        ListenableFuture a11 = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: x.t1
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar2) {
                return w1.h(atomicReference2, str, aVar2);
            }
        });
        this.f54479i = a11;
        d0.n.j(a11, new a(aVar, a10), c0.a.a());
        final AtomicReference atomicReference3 = new AtomicReference(null);
        ListenableFuture a12 = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: x.u1
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar2) {
                return w1.c(atomicReference3, str, aVar2);
            }
        });
        this.f54477g = a12;
        this.f54478h = (c.a) b2.e.g((c.a) atomicReference3.get());
        b bVar = new b(size, 34);
        this.f54482l = bVar;
        ListenableFuture k10 = bVar.k();
        d0.n.j(a12, new c(k10, (c.a) b2.e.g((c.a) atomicReference2.get()), str), c0.a.a());
        k10.a(new Runnable() { // from class: x.v1
            @Override // java.lang.Runnable
            public final void run() {
                w1.this.f54477g.cancel(true);
            }
        }, c0.a.a());
        this.f54480j = p(c0.a.a(), runnable);
    }

    public static /* synthetic */ Object b(AtomicReference atomicReference, String str, c.a aVar) {
        atomicReference.set(aVar);
        return str + "-cancellation";
    }

    public static /* synthetic */ Object c(AtomicReference atomicReference, String str, c.a aVar) {
        atomicReference.set(aVar);
        return str + "-Surface";
    }

    public static /* synthetic */ Object g(w1 w1Var, AtomicReference atomicReference, c.a aVar) {
        w1Var.getClass();
        atomicReference.set(aVar);
        return "SurfaceRequest-surface-recreation(" + w1Var.hashCode() + ")";
    }

    public static /* synthetic */ Object h(AtomicReference atomicReference, String str, c.a aVar) {
        atomicReference.set(aVar);
        return str + "-status";
    }

    private c.a p(Executor executor, Runnable runnable) {
        final AtomicReference atomicReference = new AtomicReference(null);
        d0.n.j(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: x.n1
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return w1.g(w1.this, atomicReference, aVar);
            }
        }), new e(runnable), executor);
        return (c.a) b2.e.g((c.a) atomicReference.get());
    }

    public void j(Executor executor, Runnable runnable) {
        this.f54481k.a(runnable, executor);
    }

    public void k() {
        synchronized (this.f54471a) {
            this.f54484n = null;
            this.f54485o = null;
        }
    }

    public a0.e0 l() {
        return this.f54475e;
    }

    public a0.w0 m() {
        return this.f54482l;
    }

    public z n() {
        return this.f54473c;
    }

    public Size o() {
        return this.f54472b;
    }

    public boolean q() {
        v();
        return this.f54480j.c(null);
    }

    public boolean r() {
        return this.f54476f;
    }

    public void s(final Surface surface, Executor executor, final Consumer consumer) {
        if (!this.f54478h.c(surface) && !this.f54477g.isCancelled()) {
            b2.e.i(this.f54477g.isDone());
            try {
                this.f54477g.get();
                executor.execute(new Runnable() { // from class: x.p1
                    @Override // java.lang.Runnable
                    public final void run() {
                        Consumer.this.accept(w1.g.c(3, surface));
                    }
                });
                return;
            } catch (InterruptedException | ExecutionException unused) {
                executor.execute(new Runnable() { // from class: x.q1
                    @Override // java.lang.Runnable
                    public final void run() {
                        Consumer.this.accept(w1.g.c(4, surface));
                    }
                });
                return;
            }
        }
        d0.n.j(this.f54479i, new d(consumer, surface), executor);
    }

    public void t(Executor executor, final i iVar) {
        final h hVar;
        synchronized (this.f54471a) {
            this.f54484n = iVar;
            this.f54485o = executor;
            hVar = this.f54483m;
        }
        if (hVar != null) {
            executor.execute(new Runnable() { // from class: x.o1
                @Override // java.lang.Runnable
                public final void run() {
                    w1.i.this.a(hVar);
                }
            });
        }
    }

    public void u(final h hVar) {
        final i iVar;
        Executor executor;
        synchronized (this.f54471a) {
            this.f54483m = hVar;
            iVar = this.f54484n;
            executor = this.f54485o;
        }
        if (iVar != null && executor != null) {
            executor.execute(new Runnable() { // from class: x.r1
                @Override // java.lang.Runnable
                public final void run() {
                    w1.i.this.a(hVar);
                }
            });
        }
    }

    public boolean v() {
        return this.f54478h.f(new w0.b("Surface request will not complete."));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Runnable f54497a;

        e(Runnable runnable) {
            this.f54497a = runnable;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
            this.f54497a.run();
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
        }
    }
}
