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
    private final u f44303a;

    /* renamed from: b  reason: collision with root package name */
    private final u.c0 f44304b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f44305c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.d2 f44306d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f44307e;

    /* renamed from: f  reason: collision with root package name */
    private final ScheduledExecutorService f44308f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f44309g;

    /* renamed from: h  reason: collision with root package name */
    private int f44310h = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        private final u f44311a;

        /* renamed from: b  reason: collision with root package name */
        private final u.o f44312b;

        /* renamed from: c  reason: collision with root package name */
        private final int f44313c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44314d = false;

        a(u uVar, int i10, u.o oVar) {
            this.f44311a = uVar;
            this.f44313c = i10;
            this.f44312b = oVar;
        }

        public static /* synthetic */ Object e(a aVar, c.a aVar2) {
            aVar.f44311a.B().R(aVar2);
            aVar.f44312b.b();
            return "AePreCapture";
        }

        @Override // q.z0.e
        public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
            if (z0.e(this.f44313c, totalCaptureResult)) {
                x.y0.a("Camera2CapturePipeline", "Trigger AE");
                this.f44314d = true;
                return d0.d.b(androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.x0
                    @Override // androidx.concurrent.futures.c.InterfaceC0026c
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
            if (this.f44313c == 0) {
                return true;
            }
            return false;
        }

        @Override // q.z0.e
        public void c() {
            if (this.f44314d) {
                x.y0.a("Camera2CapturePipeline", "cancel TriggerAePreCapture");
                this.f44311a.B().o(false, true);
                this.f44312b.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements e {

        /* renamed from: a  reason: collision with root package name */
        private final u f44315a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f44316b = false;

        b(u uVar) {
            this.f44315a = uVar;
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
                    this.f44316b = true;
                    this.f44315a.B().S(null, false);
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
            if (this.f44316b) {
                x.y0.a("Camera2CapturePipeline", "cancel TriggerAF");
                this.f44315a.B().o(true, false);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements z.k {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f44317a;

        /* renamed from: b  reason: collision with root package name */
        private final d f44318b;

        /* renamed from: c  reason: collision with root package name */
        private int f44319c;

        c(d dVar, Executor executor, int i10) {
            this.f44318b = dVar;
            this.f44317a = executor;
            this.f44319c = i10;
        }

        public static /* synthetic */ Object c(c cVar, c.a aVar) {
            cVar.f44318b.j();
            aVar.c(null);
            return "invokePostCaptureFuture";
        }

        public static /* synthetic */ Void d(TotalCaptureResult totalCaptureResult) {
            return null;
        }

        @Override // z.k
        public ListenableFuture a() {
            x.y0.a("Camera2CapturePipeline", "invokePreCapture");
            return d0.d.b(this.f44318b.k(this.f44319c)).e(new Function() { // from class: q.b1
                @Override // androidx.arch.core.util.Function
                public final Object apply(Object obj) {
                    return z0.c.d((TotalCaptureResult) obj);
                }
            }, this.f44317a);
        }

        @Override // z.k
        public ListenableFuture b() {
            return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.a1
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
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
        private static final long f44320j;

        /* renamed from: k  reason: collision with root package name */
        private static final long f44321k;

        /* renamed from: a  reason: collision with root package name */
        private final int f44322a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f44323b;

        /* renamed from: c  reason: collision with root package name */
        private final ScheduledExecutorService f44324c;

        /* renamed from: d  reason: collision with root package name */
        private final u f44325d;

        /* renamed from: e  reason: collision with root package name */
        private final u.o f44326e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f44327f;

        /* renamed from: g  reason: collision with root package name */
        private long f44328g = f44320j;

        /* renamed from: h  reason: collision with root package name */
        final List f44329h = new ArrayList();

        /* renamed from: i  reason: collision with root package name */
        private final e f44330i = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements e {
            a() {
            }

            @Override // q.z0.e
            public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
                ArrayList arrayList = new ArrayList();
                for (e eVar : d.this.f44329h) {
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
                for (e eVar : d.this.f44329h) {
                    if (eVar.b()) {
                        return true;
                    }
                }
                return false;
            }

            @Override // q.z0.e
            public void c() {
                for (e eVar : d.this.f44329h) {
                    eVar.c();
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class b extends a0.k {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c.a f44332a;

            b(c.a aVar) {
                this.f44332a = aVar;
            }

            @Override // a0.k
            public void a(int i10) {
                this.f44332a.f(new x.o0(3, "Capture request is cancelled because camera is closed", null));
            }

            @Override // a0.k
            public void b(int i10, a0.u uVar) {
                this.f44332a.c(null);
            }

            @Override // a0.k
            public void c(int i10, a0.m mVar) {
                this.f44332a.f(new x.o0(2, "Capture request failed with reason " + mVar.a(), null));
            }
        }

        static {
            TimeUnit timeUnit = TimeUnit.SECONDS;
            f44320j = timeUnit.toNanos(1L);
            f44321k = timeUnit.toNanos(5L);
        }

        d(int i10, Executor executor, ScheduledExecutorService scheduledExecutorService, u uVar, boolean z10, u.o oVar) {
            this.f44322a = i10;
            this.f44323b = executor;
            this.f44324c = scheduledExecutorService;
            this.f44325d = uVar;
            this.f44327f = z10;
            this.f44326e = oVar;
        }

        public static /* synthetic */ ListenableFuture a(d dVar, int i10, TotalCaptureResult totalCaptureResult) {
            dVar.getClass();
            if (z0.e(i10, totalCaptureResult)) {
                dVar.l(f44321k);
            }
            return dVar.f44330i.a(totalCaptureResult);
        }

        public static /* synthetic */ ListenableFuture d(d dVar, Boolean bool) {
            dVar.getClass();
            if (Boolean.TRUE.equals(bool)) {
                return z0.i(dVar.f44328g, dVar.f44324c, dVar.f44325d, new f.a() { // from class: q.h1
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
            a.C0582a c0582a = new a.C0582a();
            c0582a.f(CaptureRequest.CONTROL_AE_MODE, 3);
            aVar.e(c0582a.c());
        }

        private void h(p0.a aVar, a0.p0 p0Var) {
            int i10;
            if (this.f44322a == 3 && !this.f44327f) {
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
            this.f44328g = j10;
        }

        void f(e eVar) {
            this.f44329h.add(eVar);
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
            }, this.f44323b);
            f10.a(new Runnable() { // from class: q.d1
                @Override // java.lang.Runnable
                public final void run() {
                    z0.d.this.j();
                }
            }, this.f44323b);
            return f10;
        }

        public void j() {
            this.f44330i.c();
        }

        public ListenableFuture k(final int i10) {
            ListenableFuture p10;
            ListenableFuture p11 = d0.n.p(null);
            if (!this.f44329h.isEmpty()) {
                if (this.f44330i.b()) {
                    p10 = z0.j(this.f44325d, null);
                } else {
                    p10 = d0.n.p(null);
                }
                return d0.d.b(p10).f(new d0.a() { // from class: q.f1
                    @Override // d0.a
                    public final ListenableFuture apply(Object obj) {
                        return z0.d.a(z0.d.this, i10, (TotalCaptureResult) obj);
                    }
                }, this.f44323b).f(new d0.a() { // from class: q.g1
                    @Override // d0.a
                    public final ListenableFuture apply(Object obj) {
                        return z0.d.d(z0.d.this, (Boolean) obj);
                    }
                }, this.f44323b);
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
                if (p0Var.k() == 5 && !this.f44325d.P().g() && !this.f44325d.P().a() && (e10 = this.f44325d.P().e()) != null && this.f44325d.P().f(e10)) {
                    uVar = a0.v.a(e10.E());
                } else {
                    uVar = null;
                }
                if (uVar != null) {
                    j10.n(uVar);
                } else {
                    h(j10, p0Var);
                }
                if (this.f44326e.c(i10)) {
                    g(j10);
                }
                arrayList.add(androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.e1
                    @Override // androidx.concurrent.futures.c.InterfaceC0026c
                    public final Object a(c.a aVar) {
                        return z0.d.e(z0.d.this, j10, aVar);
                    }
                }));
                arrayList2.add(j10.h());
            }
            this.f44325d.d0(arrayList2);
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
        private c.a f44334a;

        /* renamed from: b  reason: collision with root package name */
        private final ListenableFuture f44335b = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.j1
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return z0.f.b(z0.f.this, aVar);
            }
        });

        /* renamed from: c  reason: collision with root package name */
        private final a f44336c;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public interface a {
            boolean a(TotalCaptureResult totalCaptureResult);
        }

        f(a aVar) {
            this.f44336c = aVar;
        }

        public static /* synthetic */ Object b(f fVar, c.a aVar) {
            fVar.f44334a = aVar;
            return "waitFor3AResult";
        }

        @Override // q.u.c
        public boolean a(TotalCaptureResult totalCaptureResult) {
            a aVar = this.f44336c;
            if (aVar != null && !aVar.a(totalCaptureResult)) {
                return false;
            }
            this.f44334a.c(totalCaptureResult);
            return true;
        }

        public ListenableFuture c() {
            return this.f44335b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g implements e {

        /* renamed from: f  reason: collision with root package name */
        private static final long f44337f = TimeUnit.SECONDS.toNanos(2);

        /* renamed from: a  reason: collision with root package name */
        private final u f44338a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f44339b;

        /* renamed from: c  reason: collision with root package name */
        private final ScheduledExecutorService f44340c;

        /* renamed from: d  reason: collision with root package name */
        private final n0.i f44341d;

        /* renamed from: e  reason: collision with root package name */
        private final u.b0 f44342e;

        g(u uVar, Executor executor, ScheduledExecutorService scheduledExecutorService, u.b0 b0Var) {
            this.f44338a = uVar;
            this.f44339b = executor;
            this.f44340c = scheduledExecutorService;
            this.f44342e = b0Var;
            n0.i F = uVar.F();
            Objects.requireNonNull(F);
            this.f44341d = F;
        }

        public static /* synthetic */ void d(g gVar, AtomicReference atomicReference, c.a aVar) {
            gVar.getClass();
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#preCapture: invoking applyScreenFlashUi");
            gVar.f44341d.a(System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(3L), (n0.j) atomicReference.get());
            aVar.c(null);
        }

        public static /* synthetic */ ListenableFuture h(final g gVar, Void r12) {
            gVar.getClass();
            return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.l1
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
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
            if (!gVar.f44342e.a()) {
                aVar.c(null);
                return "EnableTorchInternal";
            }
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#preCapture: enable torch");
            gVar.f44338a.y(true);
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
            return d0.n.r(TimeUnit.SECONDS.toMillis(3L), gVar.f44340c, null, true, listenableFuture);
        }

        @Override // q.z0.e
        public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
            x.y0.a("Camera2CapturePipeline", "ScreenFlashTask#preCapture");
            final AtomicReference atomicReference = new AtomicReference();
            final ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.q1
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return z0.g.n(atomicReference, aVar);
                }
            });
            return d0.d.b(androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.r1
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return z0.g.j(z0.g.this, atomicReference, aVar);
                }
            })).f(new d0.a() { // from class: q.s1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture v10;
                    Void r22 = (Void) obj;
                    v10 = z0.g.this.f44338a.B().v(true);
                    return v10;
                }
            }, this.f44339b).f(new d0.a() { // from class: q.t1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    return z0.g.h(z0.g.this, (Void) obj);
                }
            }, this.f44339b).f(new d0.a() { // from class: q.u1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    return z0.g.p(z0.g.this, a10, obj);
                }
            }, this.f44339b).f(new d0.a() { // from class: q.v1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture Q;
                    Void r22 = (Void) obj;
                    Q = z0.g.this.f44338a.B().Q();
                    return Q;
                }
            }, this.f44339b).f(new d0.a() { // from class: q.w1
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture i10;
                    Void r22 = (Void) obj;
                    i10 = z0.i(z0.g.f44337f, r0.f44340c, z0.g.this.f44338a, new z0.f.a() { // from class: q.n1
                        @Override // q.z0.f.a
                        public final boolean a(TotalCaptureResult totalCaptureResult2) {
                            boolean d10;
                            d10 = z0.d(totalCaptureResult2, false);
                            return d10;
                        }
                    });
                    return i10;
                }
            }, this.f44339b).e(new Function() { // from class: q.x1
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
            if (this.f44342e.a()) {
                this.f44338a.y(false);
            }
            this.f44338a.B().v(false).a(new Runnable() { // from class: q.k1
                @Override // java.lang.Runnable
                public final void run() {
                    Log.d("Camera2CapturePipeline", "enableExternalFlashAeMode disabled");
                }
            }, this.f44339b);
            this.f44338a.B().o(false, true);
            ScheduledExecutorService d10 = c0.a.d();
            final n0.i iVar = this.f44341d;
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
        private static final long f44343g = TimeUnit.SECONDS.toNanos(2);

        /* renamed from: a  reason: collision with root package name */
        private final u f44344a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44345b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f44346c = false;

        /* renamed from: d  reason: collision with root package name */
        private final Executor f44347d;

        /* renamed from: e  reason: collision with root package name */
        private final ScheduledExecutorService f44348e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f44349f;

        h(u uVar, int i10, Executor executor, ScheduledExecutorService scheduledExecutorService, boolean z10) {
            this.f44344a = uVar;
            this.f44345b = i10;
            this.f44347d = executor;
            this.f44348e = scheduledExecutorService;
            this.f44349f = z10;
        }

        public static /* synthetic */ ListenableFuture d(h hVar, Void r12) {
            if (hVar.f44349f) {
                return hVar.f44344a.B().Q();
            }
            return d0.n.p(null);
        }

        public static /* synthetic */ Object e(h hVar, c.a aVar) {
            hVar.f44344a.M().e(aVar, true);
            return "TorchOn";
        }

        @Override // q.z0.e
        public ListenableFuture a(TotalCaptureResult totalCaptureResult) {
            boolean e10 = z0.e(this.f44345b, totalCaptureResult);
            x.y0.a("Camera2CapturePipeline", "TorchTask#preCapture: isFlashRequired = " + e10);
            if (z0.e(this.f44345b, totalCaptureResult)) {
                if (this.f44344a.V()) {
                    x.y0.a("Camera2CapturePipeline", "Torch already on, not turn on");
                } else {
                    x.y0.a("Camera2CapturePipeline", "Turn on torch");
                    this.f44346c = true;
                    return d0.d.b(androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.y1
                        @Override // androidx.concurrent.futures.c.InterfaceC0026c
                        public final Object a(c.a aVar) {
                            return z0.h.e(z0.h.this, aVar);
                        }
                    })).f(new d0.a() { // from class: q.z1
                        @Override // d0.a
                        public final ListenableFuture apply(Object obj) {
                            return z0.h.d(z0.h.this, (Void) obj);
                        }
                    }, this.f44347d).f(new d0.a() { // from class: q.a2
                        @Override // d0.a
                        public final ListenableFuture apply(Object obj) {
                            ListenableFuture i10;
                            Void r22 = (Void) obj;
                            i10 = z0.i(z0.h.f44343g, r0.f44348e, z0.h.this.f44344a, new z0.f.a() { // from class: q.c2
                                @Override // q.z0.f.a
                                public final boolean a(TotalCaptureResult totalCaptureResult2) {
                                    boolean d10;
                                    d10 = z0.d(totalCaptureResult2, true);
                                    return d10;
                                }
                            });
                            return i10;
                        }
                    }, this.f44347d).e(new Function() { // from class: q.b2
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
            if (this.f44345b == 0) {
                return true;
            }
            return false;
        }

        @Override // q.z0.e
        public void c() {
            if (this.f44346c) {
                this.f44344a.M().e(null, false);
                x.y0.a("Camera2CapturePipeline", "Turning off torch");
                if (this.f44349f) {
                    this.f44344a.B().o(false, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z0(u uVar, r.a0 a0Var, a0.d2 d2Var, Executor executor, ScheduledExecutorService scheduledExecutorService) {
        boolean z10 = true;
        this.f44303a = uVar;
        Integer num = (Integer) a0Var.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        this.f44309g = (num == null || num.intValue() != 2) ? false : false;
        this.f44307e = executor;
        this.f44308f = scheduledExecutorService;
        this.f44306d = d2Var;
        this.f44304b = new u.c0(d2Var);
        this.f44305c = u.g.a(new w0(a0Var));
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
        if (this.f44304b.a() || this.f44310h == 3 || i10 == 1) {
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
        }, uVar.f44164c);
        return c10;
    }

    d b(int i10, int i11, int i12) {
        int i13;
        boolean z10;
        u.o oVar = new u.o(this.f44306d);
        d dVar = new d(this.f44310h, this.f44307e, this.f44308f, this.f44303a, this.f44309g, oVar);
        if (i10 == 0) {
            dVar.f(new b(this.f44303a));
        }
        if (i11 == 3) {
            dVar.f(new g(this.f44303a, this.f44307e, this.f44308f, new u.b0(this.f44306d)));
        } else if (this.f44305c) {
            if (f(i12)) {
                if (!this.f44304b.a() && !this.f44303a.S()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                i13 = i11;
                dVar.f(new h(this.f44303a, i13, this.f44307e, this.f44308f, z10));
            } else {
                i13 = i11;
                dVar.f(new a(this.f44303a, i13, oVar));
            }
            x.y0.a("Camera2CapturePipeline", "createPipeline: captureMode = " + i10 + ", flashMode = " + i13 + ", flashType = " + i12 + ", pipeline tasks = " + dVar.f44329h);
            return dVar;
        }
        i13 = i11;
        x.y0.a("Camera2CapturePipeline", "createPipeline: captureMode = " + i10 + ", flashMode = " + i13 + ", flashType = " + i12 + ", pipeline tasks = " + dVar.f44329h);
        return dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z.k c(int i10, int i11, int i12) {
        return new c(b(i10, i11, i12), this.f44307e, i11);
    }

    public void g(int i10) {
        this.f44310h = i10;
    }

    public ListenableFuture h(List list, int i10, int i11, int i12) {
        return d0.n.s(b(i10, i11, i12).i(list, i11));
    }
}
