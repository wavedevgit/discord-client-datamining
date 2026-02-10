package kotlinx.coroutines;

import java.util.ArrayList;
import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CancellationException;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.sequences.Sequence;
import kotlinx.coroutines.Job;
import ys.d1;
import ys.e1;
import ys.g1;
import ys.n0;
import ys.r1;
import ys.w0;
import ys.y0;
import ys.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b0 implements Job, ys.o, g1 {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35000d = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_state$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35001e = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_parentHandle$volatile");
    private volatile /* synthetic */ Object _parentHandle$volatile;
    private volatile /* synthetic */ Object _state$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends e {

        /* renamed from: t  reason: collision with root package name */
        private final b0 f35002t;

        public a(Continuation continuation, b0 b0Var) {
            super(continuation, 1);
            this.f35002t = b0Var;
        }

        @Override // kotlinx.coroutines.e
        protected String N() {
            return "AwaitContinuation";
        }

        @Override // kotlinx.coroutines.e
        public Throwable y(Job job) {
            Throwable f10;
            Object f02 = this.f35002t.f0();
            if ((f02 instanceof c) && (f10 = ((c) f02).f()) != null) {
                return f10;
            }
            if (f02 instanceof ys.r) {
                return ((ys.r) f02).f55816a;
            }
            return job.I();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends z0 {

        /* renamed from: p  reason: collision with root package name */
        private final b0 f35003p;

        /* renamed from: q  reason: collision with root package name */
        private final c f35004q;

        /* renamed from: r  reason: collision with root package name */
        private final g f35005r;

        /* renamed from: s  reason: collision with root package name */
        private final Object f35006s;

        public b(b0 b0Var, c cVar, g gVar, Object obj) {
            this.f35003p = b0Var;
            this.f35004q = cVar;
            this.f35005r = gVar;
            this.f35006s = obj;
        }

        @Override // ys.z0
        public boolean v() {
            return false;
        }

        @Override // ys.z0
        public void w(Throwable th2) {
            this.f35003p.T(this.f35004q, this.f35005r, this.f35006s);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements w0 {

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f35007e = AtomicIntegerFieldUpdater.newUpdater(c.class, "_isCompleting$volatile");

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f35008i = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_rootCause$volatile");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f35009o = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_exceptionsHolder$volatile");
        private volatile /* synthetic */ Object _exceptionsHolder$volatile;
        private volatile /* synthetic */ int _isCompleting$volatile;
        private volatile /* synthetic */ Object _rootCause$volatile;

        /* renamed from: d  reason: collision with root package name */
        private final d1 f35010d;

        public c(d1 d1Var, boolean z10, Throwable th2) {
            this.f35010d = d1Var;
            this._isCompleting$volatile = z10 ? 1 : 0;
            this._rootCause$volatile = th2;
        }

        private final ArrayList d() {
            return new ArrayList(4);
        }

        private final Object e() {
            return f35009o.get(this);
        }

        private final void o(Object obj) {
            f35009o.set(this, obj);
        }

        @Override // ys.w0
        public boolean a() {
            if (f() == null) {
                return true;
            }
            return false;
        }

        @Override // ys.w0
        public d1 b() {
            return this.f35010d;
        }

        public final void c(Throwable th2) {
            Throwable f10 = f();
            if (f10 == null) {
                p(th2);
            } else if (th2 != f10) {
                Object e10 = e();
                if (e10 == null) {
                    o(th2);
                } else if (e10 instanceof Throwable) {
                    if (th2 == e10) {
                        return;
                    }
                    ArrayList d10 = d();
                    d10.add(e10);
                    d10.add(th2);
                    o(d10);
                } else if (e10 instanceof ArrayList) {
                    ((ArrayList) e10).add(th2);
                } else {
                    throw new IllegalStateException(("State is " + e10).toString());
                }
            }
        }

        public final Throwable f() {
            return (Throwable) f35008i.get(this);
        }

        public final boolean j() {
            if (f() != null) {
                return true;
            }
            return false;
        }

        public final boolean k() {
            if (f35007e.get(this) == 1) {
                return true;
            }
            return false;
        }

        public final boolean l() {
            dt.e0 e0Var;
            Object e10 = e();
            e0Var = c0.f35021e;
            if (e10 == e0Var) {
                return true;
            }
            return false;
        }

        public final List m(Throwable th2) {
            ArrayList arrayList;
            dt.e0 e0Var;
            Object e10 = e();
            if (e10 == null) {
                arrayList = d();
            } else if (e10 instanceof Throwable) {
                ArrayList d10 = d();
                d10.add(e10);
                arrayList = d10;
            } else if (e10 instanceof ArrayList) {
                arrayList = (ArrayList) e10;
            } else {
                throw new IllegalStateException(("State is " + e10).toString());
            }
            Throwable f10 = f();
            if (f10 != null) {
                arrayList.add(0, f10);
            }
            if (th2 != null && !Intrinsics.areEqual(th2, f10)) {
                arrayList.add(th2);
            }
            e0Var = c0.f35021e;
            o(e0Var);
            return arrayList;
        }

        public final void n(boolean z10) {
            f35007e.set(this, z10 ? 1 : 0);
        }

        public final void p(Throwable th2) {
            f35008i.set(this, th2);
        }

        public String toString() {
            return "Finishing[cancelling=" + j() + ", completing=" + k() + ", rootCause=" + f() + ", exceptions=" + e() + ", list=" + b() + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f35011d;

        /* renamed from: e  reason: collision with root package name */
        Object f35012e;

        /* renamed from: i  reason: collision with root package name */
        int f35013i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f35014o;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f35014o = obj;
            return dVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0045, code lost:
            if (r6.b(r1, r5) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:25:0x007e, code lost:
            if (r4.b(r6, r5) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x0080, code lost:
            return r0;
         */
        /* JADX WARN: Removed duplicated region for block: B:22:0x0069  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:23:0x006b -> B:27:0x0081). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:25:0x007e -> B:27:0x0081). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = gs.b.f()
                int r1 = r5.f35013i
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L2a
                if (r1 == r3) goto L26
                if (r1 != r2) goto L1e
                java.lang.Object r1 = r5.f35012e
                dt.p r1 = (dt.p) r1
                java.lang.Object r3 = r5.f35011d
                dt.o r3 = (dt.o) r3
                java.lang.Object r4 = r5.f35014o
                kotlin.sequences.j r4 = (kotlin.sequences.j) r4
                kotlin.c.b(r6)
                goto L81
            L1e:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L26:
                kotlin.c.b(r6)
                goto L86
            L2a:
                kotlin.c.b(r6)
                java.lang.Object r6 = r5.f35014o
                kotlin.sequences.j r6 = (kotlin.sequences.j) r6
                kotlinx.coroutines.b0 r1 = kotlinx.coroutines.b0.this
                java.lang.Object r1 = r1.f0()
                boolean r4 = r1 instanceof kotlinx.coroutines.g
                if (r4 == 0) goto L48
                kotlinx.coroutines.g r1 = (kotlinx.coroutines.g) r1
                ys.o r1 = r1.f35034p
                r5.f35013i = r3
                java.lang.Object r6 = r6.b(r1, r5)
                if (r6 != r0) goto L86
                goto L80
            L48:
                boolean r3 = r1 instanceof ys.w0
                if (r3 == 0) goto L86
                ys.w0 r1 = (ys.w0) r1
                ys.d1 r1 = r1.b()
                if (r1 == 0) goto L86
                java.lang.Object r3 = r1.k()
                java.lang.String r4 = "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode"
                kotlin.jvm.internal.Intrinsics.checkNotNull(r3, r4)
                dt.p r3 = (dt.p) r3
                r4 = r3
                r3 = r1
                r1 = r4
                r4 = r6
            L63:
                boolean r6 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r3)
                if (r6 != 0) goto L86
                boolean r6 = r1 instanceof kotlinx.coroutines.g
                if (r6 == 0) goto L81
                r6 = r1
                kotlinx.coroutines.g r6 = (kotlinx.coroutines.g) r6
                ys.o r6 = r6.f35034p
                r5.f35014o = r4
                r5.f35011d = r3
                r5.f35012e = r1
                r5.f35013i = r2
                java.lang.Object r6 = r4.b(r6, r5)
                if (r6 != r0) goto L81
            L80:
                return r0
            L81:
                dt.p r1 = r1.l()
                goto L63
            L86:
                kotlin.Unit r6 = kotlin.Unit.f31987a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlinx.coroutines.b0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((d) create(jVar, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public b0(boolean z10) {
        this._state$volatile = z10 ? c0.f35023g : c0.f35022f;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v2, types: [kotlinx.coroutines.u] */
    private final void A0(p pVar) {
        d1 d1Var = new d1();
        if (!pVar.a()) {
            d1Var = new u(d1Var);
        }
        androidx.concurrent.futures.b.a(f35000d, this, pVar, d1Var);
    }

    private final void B0(z0 z0Var) {
        z0Var.f(new d1());
        androidx.concurrent.futures.b.a(f35000d, this, z0Var, z0Var.l());
    }

    private final void E(Throwable th2, List list) {
        if (list.size() > 1) {
            Set newSetFromMap = Collections.newSetFromMap(new IdentityHashMap(list.size()));
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Throwable th3 = (Throwable) it.next();
                if (th3 != th2 && th3 != th2 && !(th3 instanceof CancellationException) && newSetFromMap.add(th3)) {
                    as.e.a(th2, th3);
                }
            }
        }
    }

    private final int E0(Object obj) {
        p pVar;
        if (obj instanceof p) {
            if (!((p) obj).a()) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35000d;
                pVar = c0.f35023g;
                if (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, obj, pVar)) {
                    return -1;
                }
                y0();
                return 1;
            }
            return 0;
        } else if (!(obj instanceof u)) {
            return 0;
        } else {
            if (!androidx.concurrent.futures.b.a(f35000d, this, obj, ((u) obj).b())) {
                return -1;
            }
            y0();
            return 1;
        }
    }

    private final Object H(Continuation continuation) {
        a aVar = new a(gs.b.c(continuation), this);
        aVar.H();
        ys.l.a(aVar, z.o(this, false, new e0(aVar), 1, null));
        Object B = aVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    private final String I0(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (cVar.j()) {
                return "Cancelling";
            }
            if (!cVar.k()) {
                return "Active";
            }
            return "Completing";
        } else if (obj instanceof w0) {
            if (((w0) obj).a()) {
                return "Active";
            }
            return "New";
        } else if (obj instanceof ys.r) {
            return "Cancelled";
        } else {
            return "Completed";
        }
    }

    public static /* synthetic */ CancellationException K0(b0 b0Var, Throwable th2, String str, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                str = null;
            }
            return b0Var.J0(th2, str);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: toCancellationException");
    }

    private final Object N(Object obj) {
        dt.e0 e0Var;
        Object R0;
        dt.e0 e0Var2;
        do {
            Object f02 = f0();
            if (!(f02 instanceof w0) || ((f02 instanceof c) && ((c) f02).k())) {
                e0Var = c0.f35017a;
                return e0Var;
            }
            R0 = R0(f02, new ys.r(U(obj), false, 2, null));
            e0Var2 = c0.f35019c;
        } while (R0 == e0Var2);
        return R0;
    }

    private final boolean O(Throwable th2) {
        if (m0()) {
            return true;
        }
        boolean z10 = th2 instanceof CancellationException;
        ys.n e02 = e0();
        if (e02 != null && e02 != e1.f55791d) {
            if (e02.d(th2) || z10) {
                return true;
            }
            return false;
        }
        return z10;
    }

    private final boolean P0(w0 w0Var, Object obj) {
        if (!androidx.concurrent.futures.b.a(f35000d, this, w0Var, c0.g(obj))) {
            return false;
        }
        w0(null);
        x0(obj);
        S(w0Var, obj);
        return true;
    }

    private final boolean Q0(w0 w0Var, Throwable th2) {
        d1 c02 = c0(w0Var);
        if (c02 == null) {
            return false;
        }
        if (!androidx.concurrent.futures.b.a(f35000d, this, w0Var, new c(c02, false, th2))) {
            return false;
        }
        u0(c02, th2);
        return true;
    }

    private final Object R0(Object obj, Object obj2) {
        dt.e0 e0Var;
        dt.e0 e0Var2;
        if (!(obj instanceof w0)) {
            e0Var2 = c0.f35017a;
            return e0Var2;
        } else if (((obj instanceof p) || (obj instanceof z0)) && !(obj instanceof g) && !(obj2 instanceof ys.r)) {
            if (!P0((w0) obj, obj2)) {
                e0Var = c0.f35019c;
                return e0Var;
            }
            return obj2;
        } else {
            return T0((w0) obj, obj2);
        }
    }

    private final void S(w0 w0Var, Object obj) {
        ys.r rVar;
        ys.n e02 = e0();
        if (e02 != null) {
            e02.dispose();
            D0(e1.f55791d);
        }
        Throwable th2 = null;
        if (obj instanceof ys.r) {
            rVar = (ys.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f55816a;
        }
        if (w0Var instanceof z0) {
            try {
                ((z0) w0Var).w(th2);
                return;
            } catch (Throwable th3) {
                j0(new ys.s("Exception in completion handler " + w0Var + " for " + this, th3));
                return;
            }
        }
        d1 b10 = w0Var.b();
        if (b10 != null) {
            v0(b10, th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void T(c cVar, g gVar, Object obj) {
        g t02 = t0(gVar);
        if (t02 == null || !U0(cVar, t02, obj)) {
            cVar.b().g(2);
            g t03 = t0(gVar);
            if (t03 != null && U0(cVar, t03, obj)) {
                return;
            }
            F(V(cVar, obj));
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v0 */
    /* JADX WARN: Type inference failed for: r2v1, types: [java.lang.Throwable, T] */
    /* JADX WARN: Type inference failed for: r2v2 */
    private final Object T0(w0 w0Var, Object obj) {
        c cVar;
        ys.r rVar;
        dt.e0 e0Var;
        dt.e0 e0Var2;
        dt.e0 e0Var3;
        d1 c02 = c0(w0Var);
        if (c02 == null) {
            e0Var3 = c0.f35019c;
            return e0Var3;
        }
        ?? r22 = 0;
        if (w0Var instanceof c) {
            cVar = (c) w0Var;
        } else {
            cVar = null;
        }
        if (cVar == null) {
            cVar = new c(c02, false, null);
        }
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        synchronized (cVar) {
            if (cVar.k()) {
                e0Var2 = c0.f35017a;
                return e0Var2;
            }
            cVar.n(true);
            if (cVar != w0Var && !androidx.concurrent.futures.b.a(f35000d, this, w0Var, cVar)) {
                e0Var = c0.f35019c;
                return e0Var;
            }
            boolean j10 = cVar.j();
            if (obj instanceof ys.r) {
                rVar = (ys.r) obj;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                cVar.c(rVar.f55816a);
            }
            Throwable f10 = cVar.f();
            if (!j10) {
                r22 = f10;
            }
            objectRef.element = r22;
            Unit unit = Unit.f31987a;
            if (r22 != 0) {
                u0(c02, r22);
            }
            g t02 = t0(c02);
            if (t02 != null && U0(cVar, t02, obj)) {
                return c0.f35018b;
            }
            c02.g(2);
            g t03 = t0(c02);
            if (t03 != null && U0(cVar, t03, obj)) {
                return c0.f35018b;
            }
            return V(cVar, obj);
        }
    }

    private final Throwable U(Object obj) {
        boolean z10;
        if (obj == null) {
            z10 = true;
        } else {
            z10 = obj instanceof Throwable;
        }
        if (z10) {
            Throwable th2 = (Throwable) obj;
            if (th2 == null) {
                return new y0(P(), null, this);
            }
            return th2;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.ParentJob");
        return ((g1) obj).L0();
    }

    private final boolean U0(c cVar, g gVar, Object obj) {
        while (z.n(gVar.f35034p, false, new b(this, cVar, gVar, obj)) == e1.f55791d) {
            gVar = t0(gVar);
            if (gVar == null) {
                return false;
            }
        }
        return true;
    }

    private final Object V(c cVar, Object obj) {
        ys.r rVar;
        Throwable th2;
        boolean j10;
        Throwable Y;
        if (obj instanceof ys.r) {
            rVar = (ys.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f55816a;
        } else {
            th2 = null;
        }
        synchronized (cVar) {
            j10 = cVar.j();
            List m10 = cVar.m(th2);
            Y = Y(cVar, m10);
            if (Y != null) {
                E(Y, m10);
            }
        }
        if (Y != null && Y != th2) {
            obj = new ys.r(Y, false, 2, null);
        }
        if (Y != null && (O(Y) || i0(Y))) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CompletedExceptionally");
            ((ys.r) obj).c();
        }
        if (!j10) {
            w0(Y);
        }
        x0(obj);
        androidx.concurrent.futures.b.a(f35000d, this, cVar, c0.g(obj));
        S(cVar, obj);
        return obj;
    }

    private final Throwable X(Object obj) {
        ys.r rVar;
        if (obj instanceof ys.r) {
            rVar = (ys.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f55816a;
    }

    private final Throwable Y(c cVar, List list) {
        Object obj;
        Object obj2 = null;
        if (list.isEmpty()) {
            if (!cVar.j()) {
                return null;
            }
            return new y0(P(), null, this);
        }
        List list2 = list;
        Iterator it = list2.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (!(((Throwable) obj) instanceof CancellationException)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        Throwable th2 = (Throwable) obj;
        if (th2 != null) {
            return th2;
        }
        Throwable th3 = (Throwable) list.get(0);
        if (th3 instanceof r1) {
            Iterator it2 = list2.iterator();
            while (true) {
                if (!it2.hasNext()) {
                    break;
                }
                Object next = it2.next();
                Throwable th4 = (Throwable) next;
                if (th4 != th3 && (th4 instanceof r1)) {
                    obj2 = next;
                    break;
                }
            }
            Throwable th5 = (Throwable) obj2;
            if (th5 != null) {
                return th5;
            }
        }
        return th3;
    }

    private final d1 c0(w0 w0Var) {
        d1 b10 = w0Var.b();
        if (b10 == null) {
            if (w0Var instanceof p) {
                return new d1();
            }
            if (w0Var instanceof z0) {
                B0((z0) w0Var);
                return null;
            }
            throw new IllegalStateException(("State should have list: " + w0Var).toString());
        }
        return b10;
    }

    private final boolean n0() {
        Object f02;
        do {
            f02 = f0();
            if (!(f02 instanceof w0)) {
                return false;
            }
        } while (E0(f02) < 0);
        return true;
    }

    private final Object o0(Continuation continuation) {
        e eVar = new e(gs.b.c(continuation), 1);
        eVar.H();
        ys.l.a(eVar, z.o(this, false, new f0(eVar), 1, null));
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == gs.b.f()) {
            return B;
        }
        return Unit.f31987a;
    }

    private final Object p0(Object obj) {
        dt.e0 e0Var;
        dt.e0 e0Var2;
        dt.e0 e0Var3;
        dt.e0 e0Var4;
        dt.e0 e0Var5;
        dt.e0 e0Var6;
        Throwable th2 = null;
        Throwable th3 = null;
        while (true) {
            Object f02 = f0();
            if (f02 instanceof c) {
                synchronized (f02) {
                    if (((c) f02).l()) {
                        e0Var2 = c0.f35020d;
                        return e0Var2;
                    }
                    boolean j10 = ((c) f02).j();
                    if (obj != null || !j10) {
                        if (th3 == null) {
                            th3 = U(obj);
                        }
                        ((c) f02).c(th3);
                    }
                    Throwable f10 = ((c) f02).f();
                    if (!j10) {
                        th2 = f10;
                    }
                    if (th2 != null) {
                        u0(((c) f02).b(), th2);
                    }
                    e0Var = c0.f35017a;
                    return e0Var;
                }
            } else if (!(f02 instanceof w0)) {
                e0Var3 = c0.f35020d;
                return e0Var3;
            } else {
                if (th3 == null) {
                    th3 = U(obj);
                }
                w0 w0Var = (w0) f02;
                if (w0Var.a()) {
                    if (Q0(w0Var, th3)) {
                        e0Var4 = c0.f35017a;
                        return e0Var4;
                    }
                } else {
                    Object R0 = R0(f02, new ys.r(th3, false, 2, null));
                    e0Var5 = c0.f35017a;
                    if (R0 != e0Var5) {
                        e0Var6 = c0.f35019c;
                        if (R0 != e0Var6) {
                            return R0;
                        }
                    } else {
                        throw new IllegalStateException(("Cannot happen in " + f02).toString());
                    }
                }
            }
        }
    }

    private final g t0(dt.p pVar) {
        while (pVar.q()) {
            pVar = pVar.m();
        }
        while (true) {
            pVar = pVar.l();
            if (!pVar.q()) {
                if (pVar instanceof g) {
                    return (g) pVar;
                }
                if (pVar instanceof d1) {
                    return null;
                }
            }
        }
    }

    private final void u0(d1 d1Var, Throwable th2) {
        w0(th2);
        d1Var.g(4);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        ys.s sVar = null;
        for (dt.p pVar = (dt.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if ((pVar instanceof z0) && ((z0) pVar).v()) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        as.e.a(sVar, th3);
                    } else {
                        sVar = new ys.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f31987a;
                    }
                }
            }
        }
        if (sVar != null) {
            j0(sVar);
        }
        O(th2);
    }

    private final void v0(d1 d1Var, Throwable th2) {
        d1Var.g(1);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        ys.s sVar = null;
        for (dt.p pVar = (dt.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if (pVar instanceof z0) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        as.e.a(sVar, th3);
                    } else {
                        sVar = new ys.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f31987a;
                    }
                }
            }
        }
        if (sVar != null) {
            j0(sVar);
        }
    }

    @Override // kotlinx.coroutines.Job
    public final n0 C(boolean z10, boolean z11, Function1 function1) {
        z0 xVar;
        if (z10) {
            xVar = new w(function1);
        } else {
            xVar = new x(function1);
        }
        return l0(z11, xVar);
    }

    public final void C0(z0 z0Var) {
        Object f02;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater;
        p pVar;
        do {
            f02 = f0();
            if (f02 instanceof z0) {
                if (f02 == z0Var) {
                    atomicReferenceFieldUpdater = f35000d;
                    pVar = c0.f35023g;
                } else {
                    return;
                }
            } else if ((f02 instanceof w0) && ((w0) f02).b() != null) {
                z0Var.r();
                return;
            } else {
                return;
            }
        } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, f02, pVar));
    }

    public final void D0(ys.n nVar) {
        f35001e.set(this, nVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void F(Object obj) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object G(Continuation continuation) {
        Object f02;
        do {
            f02 = f0();
            if (!(f02 instanceof w0)) {
                if (!(f02 instanceof ys.r)) {
                    return c0.h(f02);
                }
                throw ((ys.r) f02).f55816a;
            }
        } while (E0(f02) < 0);
        return H(continuation);
    }

    @Override // kotlinx.coroutines.Job
    public final CancellationException I() {
        Object f02 = f0();
        if (f02 instanceof c) {
            Throwable f10 = ((c) f02).f();
            if (f10 != null) {
                CancellationException J0 = J0(f10, ys.e0.a(this) + " is cancelling");
                if (J0 != null) {
                    return J0;
                }
            }
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        } else if (!(f02 instanceof w0)) {
            if (f02 instanceof ys.r) {
                return K0(this, ((ys.r) f02).f55816a, null, 1, null);
            }
            return new y0(ys.e0.a(this) + " has completed normally", null, this);
        } else {
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        }
    }

    @Override // ys.o
    public final void J(g1 g1Var) {
        L(g1Var);
    }

    protected final CancellationException J0(Throwable th2, String str) {
        CancellationException cancellationException;
        if (th2 instanceof CancellationException) {
            cancellationException = (CancellationException) th2;
        } else {
            cancellationException = null;
        }
        if (cancellationException == null) {
            if (str == null) {
                str = P();
            }
            cancellationException = new y0(str, th2, this);
        }
        return cancellationException;
    }

    public final boolean K(Throwable th2) {
        return L(th2);
    }

    public final boolean L(Object obj) {
        Object obj2;
        dt.e0 e0Var;
        dt.e0 e0Var2;
        dt.e0 e0Var3;
        obj2 = c0.f35017a;
        if (!b0() || (obj2 = N(obj)) != c0.f35018b) {
            e0Var = c0.f35017a;
            if (obj2 == e0Var) {
                obj2 = p0(obj);
            }
            e0Var2 = c0.f35017a;
            if (obj2 != e0Var2 && obj2 != c0.f35018b) {
                e0Var3 = c0.f35020d;
                if (obj2 == e0Var3) {
                    return false;
                }
                F(obj2);
                return true;
            }
            return true;
        }
        return true;
    }

    @Override // ys.g1
    public CancellationException L0() {
        Throwable th2;
        Object f02 = f0();
        CancellationException cancellationException = null;
        if (f02 instanceof c) {
            th2 = ((c) f02).f();
        } else if (f02 instanceof ys.r) {
            th2 = ((ys.r) f02).f55816a;
        } else if (!(f02 instanceof w0)) {
            th2 = null;
        } else {
            throw new IllegalStateException(("Cannot be cancelling child in this state: " + f02).toString());
        }
        if (th2 instanceof CancellationException) {
            cancellationException = th2;
        }
        if (cancellationException == null) {
            return new y0("Parent job is " + I0(f02), th2, this);
        }
        return cancellationException;
    }

    public void M(Throwable th2) {
        L(th2);
    }

    public final String M0() {
        return s0() + '{' + I0(f0()) + '}';
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext O0(CoroutineContext coroutineContext) {
        return Job.a.e(this, coroutineContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String P() {
        return "Job was cancelled";
    }

    public boolean R(Throwable th2) {
        if (th2 instanceof CancellationException) {
            return true;
        }
        if (L(th2) && a0()) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public final Object S0(Continuation continuation) {
        if (!n0()) {
            z.k(continuation.getContext());
            return Unit.f31987a;
        }
        Object o02 = o0(continuation);
        if (o02 == gs.b.f()) {
            return o02;
        }
        return Unit.f31987a;
    }

    public final Object W() {
        Object f02 = f0();
        if (!(f02 instanceof w0)) {
            if (!(f02 instanceof ys.r)) {
                return c0.h(f02);
            }
            throw ((ys.r) f02).f55816a;
        }
        throw new IllegalStateException("This job has not completed yet");
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Z0(CoroutineContext.b bVar) {
        return Job.a.d(this, bVar);
    }

    @Override // kotlinx.coroutines.Job
    public boolean a() {
        Object f02 = f0();
        if ((f02 instanceof w0) && ((w0) f02).a()) {
            return true;
        }
        return false;
    }

    public boolean a0() {
        return true;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object a1(Object obj, Function2 function2) {
        return Job.a.b(this, obj, function2);
    }

    public boolean b0() {
        return false;
    }

    public Job d0() {
        ys.n e02 = e0();
        if (e02 != null) {
            return e02.getParent();
        }
        return null;
    }

    public final ys.n e0() {
        return (ys.n) f35001e.get(this);
    }

    public final Object f0() {
        return f35000d.get(this);
    }

    @Override // kotlinx.coroutines.Job
    public final Sequence getChildren() {
        return kotlin.sequences.k.b(new d(null));
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public final CoroutineContext.b getKey() {
        return Job.f34996k;
    }

    @Override // kotlinx.coroutines.Job, at.v
    public void i(CancellationException cancellationException) {
        if (cancellationException == null) {
            cancellationException = new y0(P(), null, this);
        }
        M(cancellationException);
    }

    protected boolean i0(Throwable th2) {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCancelled() {
        Object f02 = f0();
        if (!(f02 instanceof ys.r)) {
            if (!(f02 instanceof c) || !((c) f02).j()) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCompleted() {
        return !(f0() instanceof w0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void k0(Job job) {
        if (job == null) {
            D0(e1.f55791d);
            return;
        }
        job.start();
        ys.n y10 = job.y(this);
        D0(y10);
        if (isCompleted()) {
            y10.dispose();
            D0(e1.f55791d);
        }
    }

    public final n0 l0(boolean z10, z0 z0Var) {
        boolean z11;
        Throwable th2;
        ys.r rVar;
        boolean c10;
        c cVar;
        Throwable th3;
        z0Var.x(this);
        while (true) {
            Object f02 = f0();
            z11 = true;
            th2 = null;
            if (f02 instanceof p) {
                p pVar = (p) f02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f35000d, this, f02, z0Var)) {
                        break;
                    }
                } else {
                    A0(pVar);
                }
            } else if (f02 instanceof w0) {
                w0 w0Var = (w0) f02;
                d1 b10 = w0Var.b();
                if (b10 == null) {
                    Intrinsics.checkNotNull(f02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                    B0((z0) f02);
                } else {
                    if (z0Var.v()) {
                        if (w0Var instanceof c) {
                            cVar = (c) w0Var;
                        } else {
                            cVar = null;
                        }
                        if (cVar != null) {
                            th3 = cVar.f();
                        } else {
                            th3 = null;
                        }
                        if (th3 == null) {
                            c10 = b10.c(z0Var, 5);
                        } else {
                            if (z10) {
                                z0Var.w(th3);
                            }
                            return e1.f55791d;
                        }
                    } else {
                        c10 = b10.c(z0Var, 1);
                    }
                    if (c10) {
                        break;
                    }
                }
            } else {
                z11 = false;
                break;
            }
        }
        if (z11) {
            return z0Var;
        }
        if (z10) {
            Object f03 = f0();
            if (f03 instanceof ys.r) {
                rVar = (ys.r) f03;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                th2 = rVar.f55816a;
            }
            z0Var.w(th2);
        }
        return e1.f55791d;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return Job.a.c(this, bVar);
    }

    protected boolean m0() {
        return false;
    }

    public final boolean q0(Object obj) {
        Object R0;
        dt.e0 e0Var;
        dt.e0 e0Var2;
        do {
            R0 = R0(f0(), obj);
            e0Var = c0.f35017a;
            if (R0 == e0Var) {
                return false;
            }
            if (R0 != c0.f35018b) {
                e0Var2 = c0.f35019c;
            } else {
                return true;
            }
        } while (R0 == e0Var2);
        F(R0);
        return true;
    }

    public final Object r0(Object obj) {
        Object R0;
        dt.e0 e0Var;
        dt.e0 e0Var2;
        do {
            R0 = R0(f0(), obj);
            e0Var = c0.f35017a;
            if (R0 != e0Var) {
                e0Var2 = c0.f35019c;
            } else {
                throw new IllegalStateException("Job " + this + " is already complete or completing, but is being completed with " + obj, X(obj));
            }
        } while (R0 == e0Var2);
        return R0;
    }

    public String s0() {
        return ys.e0.a(this);
    }

    @Override // kotlinx.coroutines.Job
    public final boolean start() {
        int E0;
        do {
            E0 = E0(f0());
            if (E0 == 0) {
                return false;
            }
        } while (E0 != 1);
        return true;
    }

    public String toString() {
        return M0() + '@' + ys.e0.b(this);
    }

    protected void w0(Throwable th2) {
    }

    protected void x0(Object obj) {
    }

    @Override // kotlinx.coroutines.Job
    public final ys.n y(ys.o oVar) {
        ys.r rVar;
        ys.r rVar2;
        g gVar = new g(oVar);
        gVar.x(this);
        while (true) {
            Object f02 = f0();
            if (f02 instanceof p) {
                p pVar = (p) f02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f35000d, this, f02, gVar)) {
                        return gVar;
                    }
                } else {
                    A0(pVar);
                }
            } else {
                Throwable th2 = null;
                if (f02 instanceof w0) {
                    d1 b10 = ((w0) f02).b();
                    if (b10 == null) {
                        Intrinsics.checkNotNull(f02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                        B0((z0) f02);
                    } else {
                        if (!b10.c(gVar, 7)) {
                            boolean c10 = b10.c(gVar, 3);
                            Object f03 = f0();
                            if (f03 instanceof c) {
                                th2 = ((c) f03).f();
                            } else {
                                if (f03 instanceof ys.r) {
                                    rVar2 = (ys.r) f03;
                                } else {
                                    rVar2 = null;
                                }
                                if (rVar2 != null) {
                                    th2 = rVar2.f55816a;
                                }
                            }
                            gVar.w(th2);
                            if (!c10) {
                                return e1.f55791d;
                            }
                        }
                        return gVar;
                    }
                } else {
                    Object f04 = f0();
                    if (f04 instanceof ys.r) {
                        rVar = (ys.r) f04;
                    } else {
                        rVar = null;
                    }
                    if (rVar != null) {
                        th2 = rVar.f55816a;
                    }
                    gVar.w(th2);
                    return e1.f55791d;
                }
            }
        }
    }

    protected void y0() {
    }

    @Override // kotlinx.coroutines.Job
    public final n0 z0(Function1 function1) {
        return l0(true, new x(function1));
    }

    public void j0(Throwable th2) {
        throw th2;
    }
}
