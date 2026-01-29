package kotlinx.coroutines;

import gs.d1;
import gs.e1;
import gs.g1;
import gs.n0;
import gs.r1;
import gs.w0;
import gs.y0;
import gs.z0;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b0 implements Job, gs.o, g1 {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f36295d = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_state$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f36296e = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_parentHandle$volatile");
    private volatile /* synthetic */ Object _parentHandle$volatile;
    private volatile /* synthetic */ Object _state$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends e {

        /* renamed from: t  reason: collision with root package name */
        private final b0 f36297t;

        public a(Continuation continuation, b0 b0Var) {
            super(continuation, 1);
            this.f36297t = b0Var;
        }

        @Override // kotlinx.coroutines.e
        protected String N() {
            return "AwaitContinuation";
        }

        @Override // kotlinx.coroutines.e
        public Throwable z(Job job) {
            Throwable f10;
            Object c02 = this.f36297t.c0();
            if ((c02 instanceof c) && (f10 = ((c) c02).f()) != null) {
                return f10;
            }
            if (c02 instanceof gs.r) {
                return ((gs.r) c02).f27178a;
            }
            return job.N();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends z0 {

        /* renamed from: p  reason: collision with root package name */
        private final b0 f36298p;

        /* renamed from: q  reason: collision with root package name */
        private final c f36299q;

        /* renamed from: r  reason: collision with root package name */
        private final g f36300r;

        /* renamed from: s  reason: collision with root package name */
        private final Object f36301s;

        public b(b0 b0Var, c cVar, g gVar, Object obj) {
            this.f36298p = b0Var;
            this.f36299q = cVar;
            this.f36300r = gVar;
            this.f36301s = obj;
        }

        @Override // gs.z0
        public boolean v() {
            return false;
        }

        @Override // gs.z0
        public void w(Throwable th2) {
            this.f36298p.Q(this.f36299q, this.f36300r, this.f36301s);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements w0 {

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f36302e = AtomicIntegerFieldUpdater.newUpdater(c.class, "_isCompleting$volatile");

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f36303i = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_rootCause$volatile");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f36304o = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_exceptionsHolder$volatile");
        private volatile /* synthetic */ Object _exceptionsHolder$volatile;
        private volatile /* synthetic */ int _isCompleting$volatile;
        private volatile /* synthetic */ Object _rootCause$volatile;

        /* renamed from: d  reason: collision with root package name */
        private final d1 f36305d;

        public c(d1 d1Var, boolean z10, Throwable th2) {
            this.f36305d = d1Var;
            this._isCompleting$volatile = z10 ? 1 : 0;
            this._rootCause$volatile = th2;
        }

        private final ArrayList d() {
            return new ArrayList(4);
        }

        private final Object e() {
            return f36304o.get(this);
        }

        private final void o(Object obj) {
            f36304o.set(this, obj);
        }

        @Override // gs.w0
        public boolean a() {
            if (f() == null) {
                return true;
            }
            return false;
        }

        @Override // gs.w0
        public d1 b() {
            return this.f36305d;
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
            return (Throwable) f36303i.get(this);
        }

        public final boolean j() {
            if (f() != null) {
                return true;
            }
            return false;
        }

        public final boolean k() {
            if (f36302e.get(this) == 1) {
                return true;
            }
            return false;
        }

        public final boolean l() {
            ls.e0 e0Var;
            Object e10 = e();
            e0Var = c0.f36316e;
            if (e10 == e0Var) {
                return true;
            }
            return false;
        }

        public final List m(Throwable th2) {
            ArrayList arrayList;
            ls.e0 e0Var;
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
            e0Var = c0.f36316e;
            o(e0Var);
            return arrayList;
        }

        public final void n(boolean z10) {
            f36302e.set(this, z10 ? 1 : 0);
        }

        public final void p(Throwable th2) {
            f36303i.set(this, th2);
        }

        public String toString() {
            return "Finishing[cancelling=" + j() + ", completing=" + k() + ", rootCause=" + f() + ", exceptions=" + e() + ", list=" + b() + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f36306d;

        /* renamed from: e  reason: collision with root package name */
        Object f36307e;

        /* renamed from: i  reason: collision with root package name */
        int f36308i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f36309o;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f36309o = obj;
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
                java.lang.Object r0 = or.b.f()
                int r1 = r5.f36308i
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L2a
                if (r1 == r3) goto L26
                if (r1 != r2) goto L1e
                java.lang.Object r1 = r5.f36307e
                ls.p r1 = (ls.p) r1
                java.lang.Object r3 = r5.f36306d
                ls.o r3 = (ls.o) r3
                java.lang.Object r4 = r5.f36309o
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
                java.lang.Object r6 = r5.f36309o
                kotlin.sequences.j r6 = (kotlin.sequences.j) r6
                kotlinx.coroutines.b0 r1 = kotlinx.coroutines.b0.this
                java.lang.Object r1 = r1.c0()
                boolean r4 = r1 instanceof kotlinx.coroutines.g
                if (r4 == 0) goto L48
                kotlinx.coroutines.g r1 = (kotlinx.coroutines.g) r1
                gs.o r1 = r1.f36329p
                r5.f36308i = r3
                java.lang.Object r6 = r6.b(r1, r5)
                if (r6 != r0) goto L86
                goto L80
            L48:
                boolean r3 = r1 instanceof gs.w0
                if (r3 == 0) goto L86
                gs.w0 r1 = (gs.w0) r1
                gs.d1 r1 = r1.b()
                if (r1 == 0) goto L86
                java.lang.Object r3 = r1.k()
                java.lang.String r4 = "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode"
                kotlin.jvm.internal.Intrinsics.checkNotNull(r3, r4)
                ls.p r3 = (ls.p) r3
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
                gs.o r6 = r6.f36329p
                r5.f36309o = r4
                r5.f36306d = r3
                r5.f36307e = r1
                r5.f36308i = r2
                java.lang.Object r6 = r4.b(r6, r5)
                if (r6 != r0) goto L81
            L80:
                return r0
            L81:
                ls.p r1 = r1.l()
                goto L63
            L86:
                kotlin.Unit r6 = kotlin.Unit.f33282a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlinx.coroutines.b0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((d) create(jVar, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public b0(boolean z10) {
        this._state$volatile = z10 ? c0.f36318g : c0.f36317f;
    }

    private final void A(Throwable th2, List list) {
        if (list.size() > 1) {
            Set newSetFromMap = Collections.newSetFromMap(new IdentityHashMap(list.size()));
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Throwable th3 = (Throwable) it.next();
                if (th3 != th2 && th3 != th2 && !(th3 instanceof CancellationException) && newSetFromMap.add(th3)) {
                    ir.e.a(th2, th3);
                }
            }
        }
    }

    private final int B0(Object obj) {
        p pVar;
        if (obj instanceof p) {
            if (!((p) obj).a()) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f36295d;
                pVar = c0.f36318g;
                if (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, obj, pVar)) {
                    return -1;
                }
                v0();
                return 1;
            }
            return 0;
        } else if (!(obj instanceof u)) {
            return 0;
        } else {
            if (!androidx.concurrent.futures.b.a(f36295d, this, obj, ((u) obj).b())) {
                return -1;
            }
            v0();
            return 1;
        }
    }

    private final String D0(Object obj) {
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
        } else if (obj instanceof gs.r) {
            return "Cancelled";
        } else {
            return "Completed";
        }
    }

    private final Object F(Continuation continuation) {
        a aVar = new a(or.b.c(continuation), this);
        aVar.H();
        gs.l.a(aVar, z.o(this, false, new e0(aVar), 1, null));
        Object B = aVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static /* synthetic */ CancellationException G0(b0 b0Var, Throwable th2, String str, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                str = null;
            }
            return b0Var.E0(th2, str);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: toCancellationException");
    }

    private final Object J(Object obj) {
        ls.e0 e0Var;
        Object N0;
        ls.e0 e0Var2;
        do {
            Object c02 = c0();
            if (!(c02 instanceof w0) || ((c02 instanceof c) && ((c) c02).k())) {
                e0Var = c0.f36312a;
                return e0Var;
            }
            N0 = N0(c02, new gs.r(R(obj), false, 2, null));
            e0Var2 = c0.f36314c;
        } while (N0 == e0Var2);
        return N0;
    }

    private final boolean K(Throwable th2) {
        if (j0()) {
            return true;
        }
        boolean z10 = th2 instanceof CancellationException;
        gs.n b02 = b0();
        if (b02 != null && b02 != e1.f27153d) {
            if (b02.d(th2) || z10) {
                return true;
            }
            return false;
        }
        return z10;
    }

    private final boolean K0(w0 w0Var, Object obj) {
        if (!androidx.concurrent.futures.b.a(f36295d, this, w0Var, c0.g(obj))) {
            return false;
        }
        t0(null);
        u0(obj);
        P(w0Var, obj);
        return true;
    }

    private final boolean L0(w0 w0Var, Throwable th2) {
        d1 Z = Z(w0Var);
        if (Z == null) {
            return false;
        }
        if (!androidx.concurrent.futures.b.a(f36295d, this, w0Var, new c(Z, false, th2))) {
            return false;
        }
        r0(Z, th2);
        return true;
    }

    private final Object N0(Object obj, Object obj2) {
        ls.e0 e0Var;
        ls.e0 e0Var2;
        if (!(obj instanceof w0)) {
            e0Var2 = c0.f36312a;
            return e0Var2;
        } else if (((obj instanceof p) || (obj instanceof z0)) && !(obj instanceof g) && !(obj2 instanceof gs.r)) {
            if (!K0((w0) obj, obj2)) {
                e0Var = c0.f36314c;
                return e0Var;
            }
            return obj2;
        } else {
            return O0((w0) obj, obj2);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v0 */
    /* JADX WARN: Type inference failed for: r2v1, types: [java.lang.Throwable, T] */
    /* JADX WARN: Type inference failed for: r2v2 */
    private final Object O0(w0 w0Var, Object obj) {
        c cVar;
        gs.r rVar;
        ls.e0 e0Var;
        ls.e0 e0Var2;
        ls.e0 e0Var3;
        d1 Z = Z(w0Var);
        if (Z == null) {
            e0Var3 = c0.f36314c;
            return e0Var3;
        }
        ?? r22 = 0;
        if (w0Var instanceof c) {
            cVar = (c) w0Var;
        } else {
            cVar = null;
        }
        if (cVar == null) {
            cVar = new c(Z, false, null);
        }
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        synchronized (cVar) {
            if (cVar.k()) {
                e0Var2 = c0.f36312a;
                return e0Var2;
            }
            cVar.n(true);
            if (cVar != w0Var && !androidx.concurrent.futures.b.a(f36295d, this, w0Var, cVar)) {
                e0Var = c0.f36314c;
                return e0Var;
            }
            boolean j10 = cVar.j();
            if (obj instanceof gs.r) {
                rVar = (gs.r) obj;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                cVar.c(rVar.f27178a);
            }
            Throwable f10 = cVar.f();
            if (!j10) {
                r22 = f10;
            }
            objectRef.element = r22;
            Unit unit = Unit.f33282a;
            if (r22 != 0) {
                r0(Z, r22);
            }
            g q02 = q0(Z);
            if (q02 != null && P0(cVar, q02, obj)) {
                return c0.f36313b;
            }
            Z.g(2);
            g q03 = q0(Z);
            if (q03 != null && P0(cVar, q03, obj)) {
                return c0.f36313b;
            }
            return S(cVar, obj);
        }
    }

    private final void P(w0 w0Var, Object obj) {
        gs.r rVar;
        gs.n b02 = b0();
        if (b02 != null) {
            b02.dispose();
            z0(e1.f27153d);
        }
        Throwable th2 = null;
        if (obj instanceof gs.r) {
            rVar = (gs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f27178a;
        }
        if (w0Var instanceof z0) {
            try {
                ((z0) w0Var).w(th2);
                return;
            } catch (Throwable th3) {
                g0(new gs.s("Exception in completion handler " + w0Var + " for " + this, th3));
                return;
            }
        }
        d1 b10 = w0Var.b();
        if (b10 != null) {
            s0(b10, th2);
        }
    }

    private final boolean P0(c cVar, g gVar, Object obj) {
        while (z.n(gVar.f36329p, false, new b(this, cVar, gVar, obj)) == e1.f27153d) {
            gVar = q0(gVar);
            if (gVar == null) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void Q(c cVar, g gVar, Object obj) {
        g q02 = q0(gVar);
        if (q02 == null || !P0(cVar, q02, obj)) {
            cVar.b().g(2);
            g q03 = q0(gVar);
            if (q03 != null && P0(cVar, q03, obj)) {
                return;
            }
            C(S(cVar, obj));
        }
    }

    private final Throwable R(Object obj) {
        boolean z10;
        if (obj == null) {
            z10 = true;
        } else {
            z10 = obj instanceof Throwable;
        }
        if (z10) {
            Throwable th2 = (Throwable) obj;
            if (th2 == null) {
                return new y0(M(), null, this);
            }
            return th2;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.ParentJob");
        return ((g1) obj).M0();
    }

    private final Object S(c cVar, Object obj) {
        gs.r rVar;
        Throwable th2;
        boolean j10;
        Throwable W;
        if (obj instanceof gs.r) {
            rVar = (gs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f27178a;
        } else {
            th2 = null;
        }
        synchronized (cVar) {
            j10 = cVar.j();
            List m10 = cVar.m(th2);
            W = W(cVar, m10);
            if (W != null) {
                A(W, m10);
            }
        }
        if (W != null && W != th2) {
            obj = new gs.r(W, false, 2, null);
        }
        if (W != null && (K(W) || f0(W))) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CompletedExceptionally");
            ((gs.r) obj).c();
        }
        if (!j10) {
            t0(W);
        }
        u0(obj);
        androidx.concurrent.futures.b.a(f36295d, this, cVar, c0.g(obj));
        P(cVar, obj);
        return obj;
    }

    private final Throwable U(Object obj) {
        gs.r rVar;
        if (obj instanceof gs.r) {
            rVar = (gs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f27178a;
    }

    private final Throwable W(c cVar, List list) {
        Object obj;
        Object obj2 = null;
        if (list.isEmpty()) {
            if (!cVar.j()) {
                return null;
            }
            return new y0(M(), null, this);
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

    private final d1 Z(w0 w0Var) {
        d1 b10 = w0Var.b();
        if (b10 == null) {
            if (w0Var instanceof p) {
                return new d1();
            }
            if (w0Var instanceof z0) {
                x0((z0) w0Var);
                return null;
            }
            throw new IllegalStateException(("State should have list: " + w0Var).toString());
        }
        return b10;
    }

    private final boolean k0() {
        Object c02;
        do {
            c02 = c0();
            if (!(c02 instanceof w0)) {
                return false;
            }
        } while (B0(c02) < 0);
        return true;
    }

    private final Object l0(Continuation continuation) {
        e eVar = new e(or.b.c(continuation), 1);
        eVar.H();
        gs.l.a(eVar, z.o(this, false, new f0(eVar), 1, null));
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == or.b.f()) {
            return B;
        }
        return Unit.f33282a;
    }

    private final Object m0(Object obj) {
        ls.e0 e0Var;
        ls.e0 e0Var2;
        ls.e0 e0Var3;
        ls.e0 e0Var4;
        ls.e0 e0Var5;
        ls.e0 e0Var6;
        Throwable th2 = null;
        Throwable th3 = null;
        while (true) {
            Object c02 = c0();
            if (c02 instanceof c) {
                synchronized (c02) {
                    if (((c) c02).l()) {
                        e0Var2 = c0.f36315d;
                        return e0Var2;
                    }
                    boolean j10 = ((c) c02).j();
                    if (obj != null || !j10) {
                        if (th3 == null) {
                            th3 = R(obj);
                        }
                        ((c) c02).c(th3);
                    }
                    Throwable f10 = ((c) c02).f();
                    if (!j10) {
                        th2 = f10;
                    }
                    if (th2 != null) {
                        r0(((c) c02).b(), th2);
                    }
                    e0Var = c0.f36312a;
                    return e0Var;
                }
            } else if (!(c02 instanceof w0)) {
                e0Var3 = c0.f36315d;
                return e0Var3;
            } else {
                if (th3 == null) {
                    th3 = R(obj);
                }
                w0 w0Var = (w0) c02;
                if (w0Var.a()) {
                    if (L0(w0Var, th3)) {
                        e0Var4 = c0.f36312a;
                        return e0Var4;
                    }
                } else {
                    Object N0 = N0(c02, new gs.r(th3, false, 2, null));
                    e0Var5 = c0.f36312a;
                    if (N0 != e0Var5) {
                        e0Var6 = c0.f36314c;
                        if (N0 != e0Var6) {
                            return N0;
                        }
                    } else {
                        throw new IllegalStateException(("Cannot happen in " + c02).toString());
                    }
                }
            }
        }
    }

    private final g q0(ls.p pVar) {
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

    private final void r0(d1 d1Var, Throwable th2) {
        t0(th2);
        d1Var.g(4);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        gs.s sVar = null;
        for (ls.p pVar = (ls.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if ((pVar instanceof z0) && ((z0) pVar).v()) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        ir.e.a(sVar, th3);
                    } else {
                        sVar = new gs.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f33282a;
                    }
                }
            }
        }
        if (sVar != null) {
            g0(sVar);
        }
        K(th2);
    }

    private final void s0(d1 d1Var, Throwable th2) {
        d1Var.g(1);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        gs.s sVar = null;
        for (ls.p pVar = (ls.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if (pVar instanceof z0) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        ir.e.a(sVar, th3);
                    } else {
                        sVar = new gs.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f33282a;
                    }
                }
            }
        }
        if (sVar != null) {
            g0(sVar);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v2, types: [kotlinx.coroutines.u] */
    private final void w0(p pVar) {
        d1 d1Var = new d1();
        if (!pVar.a()) {
            d1Var = new u(d1Var);
        }
        androidx.concurrent.futures.b.a(f36295d, this, pVar, d1Var);
    }

    private final void x0(z0 z0Var) {
        z0Var.f(new d1());
        androidx.concurrent.futures.b.a(f36295d, this, z0Var, z0Var.l());
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return Job.a.b(this, obj, function2);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void C(Object obj) {
    }

    @Override // kotlinx.coroutines.Job
    public final n0 C0(Function1 function1) {
        return i0(true, new x(function1));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object D(Continuation continuation) {
        Object c02;
        do {
            c02 = c0();
            if (!(c02 instanceof w0)) {
                if (!(c02 instanceof gs.r)) {
                    return c0.h(c02);
                }
                throw ((gs.r) c02).f27178a;
            }
        } while (B0(c02) < 0);
        return F(continuation);
    }

    protected final CancellationException E0(Throwable th2, String str) {
        CancellationException cancellationException;
        if (th2 instanceof CancellationException) {
            cancellationException = (CancellationException) th2;
        } else {
            cancellationException = null;
        }
        if (cancellationException == null) {
            if (str == null) {
                str = M();
            }
            cancellationException = new y0(str, th2, this);
        }
        return cancellationException;
    }

    public final boolean G(Throwable th2) {
        return H(th2);
    }

    public final boolean H(Object obj) {
        Object obj2;
        ls.e0 e0Var;
        ls.e0 e0Var2;
        ls.e0 e0Var3;
        obj2 = c0.f36312a;
        if (!Y() || (obj2 = J(obj)) != c0.f36313b) {
            e0Var = c0.f36312a;
            if (obj2 == e0Var) {
                obj2 = m0(obj);
            }
            e0Var2 = c0.f36312a;
            if (obj2 != e0Var2 && obj2 != c0.f36313b) {
                e0Var3 = c0.f36315d;
                if (obj2 == e0Var3) {
                    return false;
                }
                C(obj2);
                return true;
            }
            return true;
        }
        return true;
    }

    public final String H0() {
        return p0() + '{' + D0(c0()) + '}';
    }

    public void I(Throwable th2) {
        H(th2);
    }

    @Override // kotlinx.coroutines.Job
    public final n0 L(boolean z10, boolean z11, Function1 function1) {
        z0 xVar;
        if (z10) {
            xVar = new w(function1);
        } else {
            xVar = new x(function1);
        }
        return i0(z11, xVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String M() {
        return "Job was cancelled";
    }

    @Override // gs.g1
    public CancellationException M0() {
        Throwable th2;
        Object c02 = c0();
        CancellationException cancellationException = null;
        if (c02 instanceof c) {
            th2 = ((c) c02).f();
        } else if (c02 instanceof gs.r) {
            th2 = ((gs.r) c02).f27178a;
        } else if (!(c02 instanceof w0)) {
            th2 = null;
        } else {
            throw new IllegalStateException(("Cannot be cancelling child in this state: " + c02).toString());
        }
        if (th2 instanceof CancellationException) {
            cancellationException = th2;
        }
        if (cancellationException == null) {
            return new y0("Parent job is " + D0(c02), th2, this);
        }
        return cancellationException;
    }

    @Override // kotlinx.coroutines.Job
    public final CancellationException N() {
        Object c02 = c0();
        if (c02 instanceof c) {
            Throwable f10 = ((c) c02).f();
            if (f10 != null) {
                CancellationException E0 = E0(f10, gs.e0.a(this) + " is cancelling");
                if (E0 != null) {
                    return E0;
                }
            }
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        } else if (!(c02 instanceof w0)) {
            if (c02 instanceof gs.r) {
                return G0(this, ((gs.r) c02).f27178a, null, 1, null);
            }
            return new y0(gs.e0.a(this) + " has completed normally", null, this);
        } else {
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        }
    }

    public boolean O(Throwable th2) {
        if (th2 instanceof CancellationException) {
            return true;
        }
        if (H(th2) && X()) {
            return true;
        }
        return false;
    }

    public final Object T() {
        Object c02 = c0();
        if (!(c02 instanceof w0)) {
            if (!(c02 instanceof gs.r)) {
                return c0.h(c02);
            }
            throw ((gs.r) c02).f27178a;
        }
        throw new IllegalStateException("This job has not completed yet");
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext U0(CoroutineContext coroutineContext) {
        return Job.a.e(this, coroutineContext);
    }

    public boolean X() {
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public final Object X0(Continuation continuation) {
        if (!k0()) {
            z.k(continuation.getContext());
            return Unit.f33282a;
        }
        Object l02 = l0(continuation);
        if (l02 == or.b.f()) {
            return l02;
        }
        return Unit.f33282a;
    }

    public boolean Y() {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public final gs.n Y0(gs.o oVar) {
        gs.r rVar;
        gs.r rVar2;
        g gVar = new g(oVar);
        gVar.x(this);
        while (true) {
            Object c02 = c0();
            if (c02 instanceof p) {
                p pVar = (p) c02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f36295d, this, c02, gVar)) {
                        return gVar;
                    }
                } else {
                    w0(pVar);
                }
            } else {
                Throwable th2 = null;
                if (c02 instanceof w0) {
                    d1 b10 = ((w0) c02).b();
                    if (b10 == null) {
                        Intrinsics.checkNotNull(c02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                        x0((z0) c02);
                    } else {
                        if (!b10.c(gVar, 7)) {
                            boolean c10 = b10.c(gVar, 3);
                            Object c03 = c0();
                            if (c03 instanceof c) {
                                th2 = ((c) c03).f();
                            } else {
                                if (c03 instanceof gs.r) {
                                    rVar2 = (gs.r) c03;
                                } else {
                                    rVar2 = null;
                                }
                                if (rVar2 != null) {
                                    th2 = rVar2.f27178a;
                                }
                            }
                            gVar.w(th2);
                            if (!c10) {
                                return e1.f27153d;
                            }
                        }
                        return gVar;
                    }
                } else {
                    Object c04 = c0();
                    if (c04 instanceof gs.r) {
                        rVar = (gs.r) c04;
                    } else {
                        rVar = null;
                    }
                    if (rVar != null) {
                        th2 = rVar.f27178a;
                    }
                    gVar.w(th2);
                    return e1.f27153d;
                }
            }
        }
    }

    @Override // kotlinx.coroutines.Job
    public boolean a() {
        Object c02 = c0();
        if ((c02 instanceof w0) && ((w0) c02).a()) {
            return true;
        }
        return false;
    }

    public Job a0() {
        gs.n b02 = b0();
        if (b02 != null) {
            return b02.getParent();
        }
        return null;
    }

    public final gs.n b0() {
        return (gs.n) f36296e.get(this);
    }

    public final Object c0() {
        return f36295d.get(this);
    }

    protected boolean f0(Throwable th2) {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public final Sequence getChildren() {
        return kotlin.sequences.k.b(new d(null));
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public final CoroutineContext.b getKey() {
        return Job.f36291j;
    }

    @Override // kotlinx.coroutines.Job, is.v
    public void h(CancellationException cancellationException) {
        if (cancellationException == null) {
            cancellationException = new y0(M(), null, this);
        }
        I(cancellationException);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h0(Job job) {
        if (job == null) {
            z0(e1.f27153d);
            return;
        }
        job.start();
        gs.n Y0 = job.Y0(this);
        z0(Y0);
        if (isCompleted()) {
            Y0.dispose();
            z0(e1.f27153d);
        }
    }

    public final n0 i0(boolean z10, z0 z0Var) {
        boolean z11;
        Throwable th2;
        gs.r rVar;
        boolean c10;
        c cVar;
        Throwable th3;
        z0Var.x(this);
        while (true) {
            Object c02 = c0();
            z11 = true;
            th2 = null;
            if (c02 instanceof p) {
                p pVar = (p) c02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f36295d, this, c02, z0Var)) {
                        break;
                    }
                } else {
                    w0(pVar);
                }
            } else if (c02 instanceof w0) {
                w0 w0Var = (w0) c02;
                d1 b10 = w0Var.b();
                if (b10 == null) {
                    Intrinsics.checkNotNull(c02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                    x0((z0) c02);
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
                            return e1.f27153d;
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
            Object c03 = c0();
            if (c03 instanceof gs.r) {
                rVar = (gs.r) c03;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                th2 = rVar.f27178a;
            }
            z0Var.w(th2);
        }
        return e1.f27153d;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCancelled() {
        Object c02 = c0();
        if (!(c02 instanceof gs.r)) {
            if (!(c02 instanceof c) || !((c) c02).j()) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCompleted() {
        return !(c0() instanceof w0);
    }

    protected boolean j0() {
        return false;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return Job.a.c(this, bVar);
    }

    public final boolean n0(Object obj) {
        Object N0;
        ls.e0 e0Var;
        ls.e0 e0Var2;
        do {
            N0 = N0(c0(), obj);
            e0Var = c0.f36312a;
            if (N0 == e0Var) {
                return false;
            }
            if (N0 != c0.f36313b) {
                e0Var2 = c0.f36314c;
            } else {
                return true;
            }
        } while (N0 == e0Var2);
        C(N0);
        return true;
    }

    public final Object o0(Object obj) {
        Object N0;
        ls.e0 e0Var;
        ls.e0 e0Var2;
        do {
            N0 = N0(c0(), obj);
            e0Var = c0.f36312a;
            if (N0 != e0Var) {
                e0Var2 = c0.f36314c;
            } else {
                throw new IllegalStateException("Job " + this + " is already complete or completing, but is being completed with " + obj, U(obj));
            }
        } while (N0 == e0Var2);
        return N0;
    }

    public String p0() {
        return gs.e0.a(this);
    }

    @Override // kotlinx.coroutines.Job
    public final boolean start() {
        int B0;
        do {
            B0 = B0(c0());
            if (B0 == 0) {
                return false;
            }
        } while (B0 != 1);
        return true;
    }

    protected void t0(Throwable th2) {
    }

    public String toString() {
        return H0() + '@' + gs.e0.b(this);
    }

    protected void u0(Object obj) {
    }

    protected void v0() {
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return Job.a.d(this, bVar);
    }

    public final void y0(z0 z0Var) {
        Object c02;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater;
        p pVar;
        do {
            c02 = c0();
            if (c02 instanceof z0) {
                if (c02 == z0Var) {
                    atomicReferenceFieldUpdater = f36295d;
                    pVar = c0.f36318g;
                } else {
                    return;
                }
            } else if ((c02 instanceof w0) && ((w0) c02).b() != null) {
                z0Var.r();
                return;
            } else {
                return;
            }
        } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, c02, pVar));
    }

    @Override // gs.o
    public final void y1(g1 g1Var) {
        H(g1Var);
    }

    public final void z0(gs.n nVar) {
        f36296e.set(this, nVar);
    }

    public void g0(Throwable th2) {
        throw th2;
    }
}
