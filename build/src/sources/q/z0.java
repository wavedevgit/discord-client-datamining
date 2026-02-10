package q;

import a0.p0;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.CaptureResult;
import android.hardware.camera2.TotalCaptureResult;
import android.util.Log;
import androidx.arch.core.util.Function;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import p.a;
import q.u;
import q.z0;
import x.n0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final u f45066a;

    /* renamed from: b  reason: collision with root package name */
    private final u.c0 f45067b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f45068c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.d2 f45069d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f45070e;

    /* renamed from: f  reason: collision with root package name */
    private final ScheduledExecutorService f45071f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f45072g;

    /* renamed from: h  reason: collision with root package name */
    private int f45073h = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        private final u f45074a;

        /* renamed from: b  reason: collision with root package name */
        private final u.o f45075b;

        /* renamed from: c  reason: collision with root package name */
        private final int f45076c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f45077d = false;

        a(u uVar, int i10, u.o oVar) {
            this.f45074a = uVar;
            this.f45076c = i10;
            this.f45075b = oVar;
        }

        public static /* synthetic */ Object e(a aVar, c.a aVar2) {
            aVar.f45074a.B().R(aVar2);
            aVar.f45075b.b();
            return "AePreCapture";
        }

        @Override // q.z0.e
        public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
            if (z0.e(this.f45076c, totalCaptureResult)) {
                x.y0.a("Camera2CapturePipeline", "Trigger AE");
                this.f45077d = true;
                return d0.d.b(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.x0
                    @Override // androidx.concurrent.futures.c.InterfaceC0029c
                    public final Object a(c.a aVar) {
                        return z0.a.e(z0.a.this, aVar);
                    }
                })).e(new Function() { // from class: q.y0
                    @Override // androidx.arch.core.util.Function
                    public final Object apply(Object obj) {
                        Boolean bool;
                        Void r12 = (Void) obj;
                        bool = Boolean.TRUE;
                        return bool;
                    }
                }, c0.a.a());
            }
            return d0.n.p(Boolean.FALSE);
        }

        @Override // q.z0.e
        public boolean b() {
            if (this.f45076c == 0) {
                return true;
            }
            return false;
        }

        @Override // q.z0.e
        public void c() {
            if (this.f45077d) {
                x.y0.a("Camera2CapturePipeline", "cancel TriggerAePreCapture");
                this.f45074a.B().o(false, true);
                this.f45075b.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements e {

        /* renamed from: a  reason: collision with root package name */
        private final u f45078a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f45079b = false;

        b(u uVar) {
            this.f45078a = uVar;
        }

        @Override // q.z0.e
        public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
            Integer num;
            int intValue;
            ListenableFuture p10 = d0.n.p(Boolean.TRUE);
            if (totalCaptureResult != null && (num = (Integer) totalCaptureResult.get(CaptureResult.CONTROL_AF_MODE)) != null && ((intValue = num.intValue()) == 1 || intValue == 2)) {
                x.y0.a("Camera2CapturePipeline", "TriggerAf? AF mode auto");
                Integer num2 = (Integer) totalCaptureResult.get(CaptureResult.CONTROL_AF_STATE);
                if (num2 != null && num2.intValue() == 0) {
                    x.y0.a("Camera2CapturePipeline", "Trigger AF");
                    this.f45079b = true;
                    this.f45078a.B().S(null, false);
                }
            }
            return p10;
        }

        @Override // q.z0.e
        public boolean b() {
            return true;
        }

        @Override // q.z0.e
        public void c() {
            if (this.f45079b) {
                x.y0.a("Camera2CapturePipeline", "cancel TriggerAF");
                this.f45078a.B().o(true, false);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements z.k {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f45080a;

        /* renamed from: b  reason: collision with root package name */
        private final d f45081b;

        /* renamed from: c  reason: collision with root package name */
        private int f45082c;

        c(d dVar, Executor executor, int i10) {
            this.f45081b = dVar;
            this.f45080a = executor;
            this.f45082c = i10;
        }

        public static /* synthetic */ Object c(c cVar, c.a aVar) {
            cVar.f45081b.j();
            aVar.c(null);
            return "invokePostCaptureFuture";
        }

        public static /* synthetic */ Void d(TotalCaptureResult totalCaptureResult) {
            return null;
        }

        @Override // z.k
        public ListenableFuture a() {
            x.y0.a("Camera2CapturePipeline", "invokePreCapture");
            return d0.d.b(this.f45081b.k(this.f45082c)).e(new Function() { // from class: q.b1
                @Override // androidx.arch.core.util.Function
                public final Object apply(Object obj) {
                    return z0.c.d((TotalCaptureResult) obj);
                }
            }, this.f45080a);
        }

        @Override // z.k
        public ListenableFuture b() {
            return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.a1
                @Override // androidx.concurrent.futures.c.InterfaceC0029c
                public final Object a(c.a aVar) {
                    return z0.c.c(z0.c.this, aVar);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: j  reason: collision with root package name */
        private static final long f45083j;

        /* renamed from: k  reason: collision with root package name */
        private static final long f45084k;

        /* renamed from: a  reason: collision with root package name */
        private final int f45085a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f45086b;

        /* renamed from: c  reason: collision with root package name */
        private final ScheduledExecutorService f45087c;

        /* renamed from: d  reason: collision with root package name */
        private final u f45088d;

        /* renamed from: e  reason: collision with root package name */
        private final u.o f45089e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f45090f;

        /* renamed from: g  reason: collision with root package name */
        private long f45091g = f45083j;

        /* renamed from: h  reason: collision with root package name */
        final List f45092h = new ArrayList();

        /* renamed from: i  reason: collision with root package name */
        private final e f45093i = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements e {
            a() {
            }

            @Override // q.z0.e
            public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
                ArrayList arrayList = new ArrayList();
                for (e eVar : d.this.f45092h) {
                    arrayList.add(eVar.a(totalCaptureResult));
                }
                return d0.n.x(d0.n.k(arrayList), new Function() { // from class: q.i1
                    @Override // androidx.arch.core.util.Function
                    public final Object apply(Object obj) {
                        Boolean valueOf;
                        valueOf = Boolean.valueOf(((List) obj).contains(Boolean.TRUE));
                        return valueOf;
                    }
                }, c0.a.a());
            }

            @Override // q.z0.e
            public boolean b() {
                for (e eVar : d.this.f45092h) {
                    if (eVar.b()) {
                        return true;
                    }
                }
                return false;
            }

            @Override // q.z0.e
            public void c() {
                for (e eVar : d.this.f45092h) {
                    eVar.c();
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class b extends a0.k {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c.a f45095a;

            b(c.a aVar) {
                this.f45095a = aVar;
            }

            @Override // a0.k
            public void a(int i10) {
                this.f45095a.f(new x.o0(3, "Capture request is cancelled because camera is closed", null));
            }

            @Override // a0.k
            public void b(int i10, a0.u uVar) {
                this.f45095a.c(null);
            }

            @Override // a0.k
            public void c(int i10, a0.m mVar) {
                this.f45095a.f(new x.o0(2, "Capture request failed with reason " + mVar.a(), null));
            }
        }

        static {
            TimeUnit timeUnit = TimeUnit.SECONDS;
            f45083j = timeUnit.toNanos(1L);
            f45084k = timeUnit.toNanos(5L);
        }

        d(int i10, Executor executor, ScheduledExecutorService scheduledExecutorService, u uVar, boolean z10, u.o oVar) {
            this.f45085a = i10;
            this.f45086b = executor;
            this.f45087c = scheduledExecutorService;
            this.f45088d = uVar;
            this.f45090f = z10;
            this.f45089e = oVar;
        }

        public static /* synthetic */ ListenableFuture a(d dVar, int i10, TotalCaptureResult totalCaptureResult) {
            dVar.getClass();
            if (z0.e(i10, totalCaptureResult)) {
                dVar.l(f45084k);
            }
            return dVar.f45093i.a(totalCaptureResult);
        }

        public static /* synthetic */ ListenableFuture d(d dVar, Boolean bool) {
            dVar.getClass();
            if (Boolean.TRUE.equals(bool)) {
                return z0.i(dVar.f45091g, dVar.f45087c, dVar.f45088d, new f.a() { // from class: q.h1
                    @Override // q.z0.f.a
                    public final boolean a(TotalCaptureResult totalCaptureResult) {
                        boolean d10;
                        d10 = z0.d(totalCaptureResult, false);
                        return d10;
                    }
                });
            }
            return d0.n.p(null);
        }

        public static /* synthetic */ Object e(d dVar, p0.a aVar, c.a aVar2) {
            dVar.getClass();
            aVar.c(new b(aVar2));
            return "submitStillCapture";
        }

        private void g(p0.a aVar) {
            a.C0606a c0606a = new a.C0606a();
            c0606a.f(CaptureRequest.CONTROL_AE_MODE, 3);
            aVar.e(c0606a.c());
        }

        private void h(p0.a aVar, a0.p0 p0Var) {
            int i10;
            if (this.f45085a == 3 && !this.f45090f) {
                i10 = 4;
            } else if (p0Var.k() != -1 && p0Var.k() != 5) {
                i10 = -1;
            } else {
                i10 = 2;
            }
            if (i10 != -1) {
                aVar.t(i10);
            }
        }

        private void l(long j10) {
            this.f45091g = j10;
        }

        void f(e eVar) {
            this.f45092h.add(eVar);
        }

        ListenableFuture i(final List list, final int i10) {
            d0.d f10 = d0.d.b(k(i10)).f(new d0.a() { // from class: q.c1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture m10;
                    TotalCaptureResult totalCaptureResult = (TotalCaptureResult) obj;
                    m10 = z0.d.this.m(list, i10);
                    return m10;
                }
            }, this.f45086b);
            f10.a(new Runnable() { // from class: q.d1
                @Override // java.lang.Runnable
                public final void run() {
                    z0.d.this.j();
                }
            }, this.f45086b);
            return f10;
        }

        public void j() {
            this.f45093i.c();
        }

        public ListenableFuture k(final int i10) {
            ListenableFuture p10;
            ListenableFuture p11 = d0.n.p(null);
            if (!this.f45092h.isEmpty()) {
                if (this.f45093i.b()) {
                    p10 = z0.j(this.f45088d, null);
                } else {
                    p10 = d0.n.p(null);
                }
                return d0.d.b(p10).f(new d0.a() { // from class: q.f1
                    @Override // d0.a
                    public final ListenableFuture apply(Object obj) {
                        return z0.d.a(z0.d.this, i10, (TotalCaptureResult) obj);
                    }
                }, this.f45086b).f(new d0.a() { // from class: q.g1
                    @Override // d0.a
                    public final ListenableFuture apply(Object obj) {
                        return z0.d.d(z0.d.this, (Boolean) obj);
                    }
                }, this.f45086b);
            }
            return p11;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public ListenableFuture m(List list, int i10) {
            a0.u uVar;
            androidx.camera.core.n e10;
            ArrayList arrayList = new ArrayList();
            ArrayList arrayList2 = new ArrayList();
            Iterator it = list.iterator();
            while (it.hasNext()) {
                a0.p0 p0Var = (a0.p0) it.next();
                final p0.a j10 = p0.a.j(p0Var);
                if (p0Var.k() == 5 && !this.f45088d.P().g() && !this.f45088d.P().a() && (e10 = this.f45088d.P().e()) != null && this.f45088d.P().f(e10)) {
                    uVar = a0.v.a(e10.E());
                } else {
                    uVar = null;
                }
                if (uVar != null) {
                    j10.n(uVar);
                } else {
                    h(j10, p0Var);
                }
                if (this.f45089e.c(i10)) {
                    g(j10);
                }
                arrayList.add(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.e1
                    @Override // androidx.concurrent.futures.c.InterfaceC0029c
                    public final Object a(c.a aVar) {
                        return z0.d.e(z0.d.this, j10, aVar);
                    }
                }));
                arrayList2.add(j10.h());
            }
            this.f45088d.d0(arrayList2);
            return d0.n.k(arrayList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface e {
        ListenableFuture a(TotalCaptureResult totalCaptureResult);

        boolean b();

        void c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f implements u.c {

        /* renamed from: a  reason: collision with root package name */
        private c.a f45097a;

        /* renamed from: b  reason: collision with root package name */
        private final ListenableFuture f45098b = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.j1
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return z0.f.b(z0.f.this, aVar);
            }
        });

        /* renamed from: c  reason: collision with root package name */
        private final a f45099c;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public interface a {
            boolean a(TotalCaptureResult totalCaptureResult);
        }

        f(a aVar) {
            this.f45099c = aVar;
        }

        public static /* synthetic */ Object b(f fVar, c.a aVar) {
            fVar.f45097a = aVar;
            return "waitFor3AResult";
        }

        @Override // q.u.c
        public boolean a(TotalCaptureResult totalCaptureResult) {
            a aVar = this.f45099c;
            if (aVar != null && !aVar.a(totalCaptureResult)) {
                return false;
            }
            this.f45097a.c(totalCaptureResult);
            return true;
        }

        public ListenableFuture c() {
            return this.f45098b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g implements e {

        /* renamed from: f  reason: collision with root package name */
        private static final long f45100f = TimeUnit.SECONDS.toNanos(2);

        /* renamed from: a  reason: collision with root package name */
        private final u f45101a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f45102b;

        /* renamed from: c  reason: collision with root package name */
        private final ScheduledExecutorService f45103c;

        /* renamed from: d  reason: collision with root package name */
        private final n0.i f45104d;

        /* renamed from: e  reason: collision with root package name */
        private final u.b0 f45105e;

        g(u uVar, Executor executor, ScheduledExecutorService scheduledExecutorService, u.b0 b0Var) {
            this.f45101a = uVar;
            this.f45102b = executor;
            this.f45103c = scheduledExecutorService;
            this.f45105e = b0Var;
            n0.i F = uVar.F();
            Objects.requireNonNull(F);
            this.f45104d = F;
        }

        public static /* synthetic */ void d(g gVar, AtomicReference atomicReference, c.a aVar) {
            gVar.getClass();
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#preCapture: invoking applyScreenFlashUi");
            gVar.f45104d.a(System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(3L), (n0.j) atomicReference.get());
            aVar.c(null);
        }

        public static /* synthetic */ ListenableFuture h(final g gVar, Void r12) {
            gVar.getClass();
            return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.l1
                @Override // androidx.concurrent.futures.c.InterfaceC0029c
                public final Object a(c.a aVar) {
                    return z0.g.l(z0.g.this, aVar);
                }
            });
        }

        public static /* synthetic */ Object j(final g gVar, final AtomicReference atomicReference, final c.a aVar) {
            gVar.getClass();
            c0.a.d().execute(new Runnable() { // from class: q.m1
                @Override // java.lang.Runnable
                public final void run() {
                    z0.g.d(z0.g.this, atomicReference, aVar);
                }
            });
            return "OnScreenFlashStart";
        }

        public static /* synthetic */ void k(c.a aVar) {
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#preCapture: UI change applied");
            aVar.c(null);
        }

        public static /* synthetic */ Object l(g gVar, c.a aVar) {
            if (!gVar.f45105e.a()) {
                aVar.c(null);
                return "EnableTorchInternal";
            }
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#preCapture: enable torch");
            gVar.f45101a.y(true);
            aVar.c(null);
            return "EnableTorchInternal";
        }

        public static /* synthetic */ Object n(AtomicReference atomicReference, final c.a aVar) {
            atomicReference.set(new n0.j() { // from class: q.o1
                @Override // x.n0.j
                public final void a() {
                    z0.g.k(c.a.this);
                }
            });
            return "OnScreenFlashUiApplied";
        }

        public static /* synthetic */ ListenableFuture p(g gVar, ListenableFuture listenableFuture, Object obj) {
            gVar.getClass();
            return d0.n.r(TimeUnit.SECONDS.toMillis(3L), gVar.f45103c, null, true, listenableFuture);
        }

        @Override // q.z0.e
        public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#preCapture");
            final AtomicReference atomicReference = new AtomicReference();
            final ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.q1
                @Override // androidx.concurrent.futures.c.InterfaceC0029c
                public final Object a(c.a aVar) {
                    return z0.g.n(atomicReference, aVar);
                }
            });
            return d0.d.b(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.r1
                @Override // androidx.concurrent.futures.c.InterfaceC0029c
                public final Object a(c.a aVar) {
                    return z0.g.j(z0.g.this, atomicReference, aVar);
                }
            })).f(new d0.a() { // from class: q.s1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture v10;
                    Void r22 = (Void) obj;
                    v10 = z0.g.this.f45101a.B().v(true);
                    return v10;
                }
            }, this.f45102b).f(new d0.a() { // from class: q.t1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    return z0.g.h(z0.g.this, (Void) obj);
                }
            }, this.f45102b).f(new d0.a() { // from class: q.u1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    return z0.g.p(z0.g.this, a10, obj);
                }
            }, this.f45102b).f(new d0.a() { // from class: q.v1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture Q;
                    Void r22 = (Void) obj;
                    Q = z0.g.this.f45101a.B().Q();
                    return Q;
                }
            }, this.f45102b).f(new d0.a() { // from class: q.w1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture i10;
                    Void r22 = (Void) obj;
                    i10 = z0.i(z0.g.f45100f, r0.f45103c, z0.g.this.f45101a, new z0.f.a() { // from class: q.n1
                        @Override // q.z0.f.a
                        public final boolean a(TotalCaptureResult totalCaptureResult2) {
                            boolean d10;
                            d10 = z0.d(totalCaptureResult2, false);
                            return d10;
                        }
                    });
                    return i10;
                }
            }, this.f45102b).e(new Function() { // from class: q.x1
                @Override // androidx.arch.core.util.Function
                public final Object apply(Object obj) {
                    Boolean bool;
                    TotalCaptureResult totalCaptureResult2 = (TotalCaptureResult) obj;
                    bool = Boolean.FALSE;
                    return bool;
                }
            }, c0.a.a());
        }

        @Override // q.z0.e
        public boolean b() {
            return false;
        }

        @Override // q.z0.e
        public void c() {
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#postCapture");
            if (this.f45105e.a()) {
                this.f45101a.y(false);
            }
            this.f45101a.B().v(false).a(new Runnable() { // from class: q.k1
                @Override // java.lang.Runnable
                public final void run() {
                    Log.d("Camera2CapturePipeline", "enableExternalFlashAeMode disabled");
                }
            }, this.f45102b);
            this.f45101a.B().o(false, true);
            ScheduledExecutorService d10 = c0.a.d();
            final n0.i iVar = this.f45104d;
            Objects.requireNonNull(iVar);
            d10.execute(new Runnable() { // from class: q.p1
                @Override // java.lang.Runnable
                public final void run() {
                    n0.i.this.clear();
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h implements e {

        /* renamed from: g  reason: collision with root package name */
        private static final long f45106g = TimeUnit.SECONDS.toNanos(2);

        /* renamed from: a  reason: collision with root package name */
        private final u f45107a;

        /* renamed from: b  reason: collision with root package name */
        private final int f45108b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f45109c = false;

        /* renamed from: d  reason: collision with root package name */
        private final Executor f45110d;

        /* renamed from: e  reason: collision with root package name */
        private final ScheduledExecutorService f45111e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f45112f;

        h(u uVar, int i10, Executor executor, ScheduledExecutorService scheduledExecutorService, boolean z10) {
            this.f45107a = uVar;
            this.f45108b = i10;
            this.f45110d = executor;
            this.f45111e = scheduledExecutorService;
            this.f45112f = z10;
        }

        public static /* synthetic */ ListenableFuture d(h hVar, Void r12) {
            if (hVar.f45112f) {
                return hVar.f45107a.B().Q();
            }
            return d0.n.p(null);
        }

        public static /* synthetic */ Object e(h hVar, c.a aVar) {
            hVar.f45107a.M().e(aVar, true);
            return "TorchOn";
        }

        @Override // q.z0.e
        public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
            boolean e10 = z0.e(this.f45108b, totalCaptureResult);
            x.y0.a("Camera2CapturePipeline", "TorchTask#preCapture: isFlashRequired = " + e10);
            if (z0.e(this.f45108b, totalCaptureResult)) {
                if (this.f45107a.V()) {
                    x.y0.a("Camera2CapturePipeline", "Torch already on, not turn on");
                } else {
                    x.y0.a("Camera2CapturePipeline", "Turn on torch");
                    this.f45109c = true;
                    return d0.d.b(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.y1
                        @Override // androidx.concurrent.futures.c.InterfaceC0029c
                        public final Object a(c.a aVar) {
                            return z0.h.e(z0.h.this, aVar);
                        }
                    })).f(new d0.a() { // from class: q.z1
                        @Override // d0.a
                        public final ListenableFuture apply(Object obj) {
                            return z0.h.d(z0.h.this, (Void) obj);
                        }
                    }, this.f45110d).f(new d0.a() { // from class: q.a2
                        @Override // d0.a
                        public final ListenableFuture apply(Object obj) {
                            ListenableFuture i10;
                            Void r22 = (Void) obj;
                            i10 = z0.i(z0.h.f45106g, r0.f45111e, z0.h.this.f45107a, new z0.f.a() { // from class: q.c2
                                @Override // q.z0.f.a
                                public final boolean a(TotalCaptureResult totalCaptureResult2) {
                                    boolean d10;
                                    d10 = z0.d(totalCaptureResult2, true);
                                    return d10;
                                }
                            });
                            return i10;
                        }
                    }, this.f45110d).e(new Function() { // from class: q.b2
                        @Override // androidx.arch.core.util.Function
                        public final Object apply(Object obj) {
                            Boolean bool;
                            TotalCaptureResult totalCaptureResult2 = (TotalCaptureResult) obj;
                            bool = Boolean.FALSE;
                            return bool;
                        }
                    }, c0.a.a());
                }
            }
            return d0.n.p(Boolean.FALSE);
        }

        @Override // q.z0.e
        public boolean b() {
            if (this.f45108b == 0) {
                return true;
            }
            return false;
        }

        @Override // q.z0.e
        public void c() {
            if (this.f45109c) {
                this.f45107a.M().e(null, false);
                x.y0.a("Camera2CapturePipeline", "Turning off torch");
                if (this.f45112f) {
                    this.f45107a.B().o(false, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z0(u uVar, r.a0 a0Var, a0.d2 d2Var, Executor executor, ScheduledExecutorService scheduledExecutorService) {
        boolean z10 = true;
        this.f45066a = uVar;
        Integer num = (Integer) a0Var.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        this.f45072g = (num == null || num.intValue() != 2) ? false : false;
        this.f45070e = executor;
        this.f45071f = scheduledExecutorService;
        this.f45069d = d2Var;
        this.f45067b = new u.c0(d2Var);
        this.f45068c = u.g.a(new w0(a0Var));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d(TotalCaptureResult totalCaptureResult, boolean z10) {
        if (totalCaptureResult == null) {
            return false;
        }
        return a0.s0.a(new q.g(totalCaptureResult), z10);
    }

    static boolean e(int i10, TotalCaptureResult totalCaptureResult) {
        Integer num;
        x.y0.a("Camera2CapturePipeline", "isFlashRequired: flashMode = " + i10);
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return false;
                }
                if (i10 != 3) {
                    throw new AssertionError(i10);
                }
            }
            return true;
        }
        if (totalCaptureResult != null) {
            num = (Integer) totalCaptureResult.get(CaptureResult.CONTROL_AE_STATE);
        } else {
            num = null;
        }
        x.y0.a("Camera2CapturePipeline", "isFlashRequired: aeState = " + num);
        if (num == null || num.intValue() != 4) {
            return false;
        }
        return true;
    }

    private boolean f(int i10) {
        if (this.f45067b.a() || this.f45073h == 3 || i10 == 1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ListenableFuture i(long j10, ScheduledExecutorService scheduledExecutorService, u uVar, f.a aVar) {
        return d0.n.r(TimeUnit.NANOSECONDS.toMillis(j10), scheduledExecutorService, null, true, j(uVar, aVar));
    }

    static ListenableFuture j(final u uVar, f.a aVar) {
        final f fVar = new f(aVar);
        uVar.v(fVar);
        ListenableFuture c10 = fVar.c();
        c10.a(new Runnable() { // from class: q.v0
            @Override // java.lang.Runnable
            public final void run() {
                u.this.W(fVar);
            }
        }, uVar.f44927c);
        return c10;
    }

    d b(int i10, int i11, int i12) {
        int i13;
        boolean z10;
        u.o oVar = new u.o(this.f45069d);
        d dVar = new d(this.f45073h, this.f45070e, this.f45071f, this.f45066a, this.f45072g, oVar);
        if (i10 == 0) {
            dVar.f(new b(this.f45066a));
        }
        if (i11 == 3) {
            dVar.f(new g(this.f45066a, this.f45070e, this.f45071f, new u.b0(this.f45069d)));
        } else if (this.f45068c) {
            if (f(i12)) {
                if (!this.f45067b.a() && !this.f45066a.S()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                i13 = i11;
                dVar.f(new h(this.f45066a, i13, this.f45070e, this.f45071f, z10));
            } else {
                i13 = i11;
                dVar.f(new a(this.f45066a, i13, oVar));
            }
            x.y0.a("Camera2CapturePipeline", "createPipeline: captureMode = " + i10 + ", flashMode = " + i13 + ", flashType = " + i12 + ", pipeline tasks = " + dVar.f45092h);
            return dVar;
        }
        i13 = i11;
        x.y0.a("Camera2CapturePipeline", "createPipeline: captureMode = " + i10 + ", flashMode = " + i13 + ", flashType = " + i12 + ", pipeline tasks = " + dVar.f45092h);
        return dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z.k c(int i10, int i11, int i12) {
        return new c(b(i10, i11, i12), this.f45070e, i11);
    }

    public void g(int i10) {
        this.f45073h = i10;
    }

    public ListenableFuture h(List list, int i10, int i11, int i12) {
        return d0.n.s(b(i10, i11, i12).i(list, i11));
    }
}
