package kotlinx.coroutines;

import hs.d1;
import hs.e1;
import hs.g1;
import hs.n0;
import hs.r1;
import hs.w0;
import hs.y0;
import hs.z0;
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
public class b0 implements Job, hs.o, g1 {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f36087d = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_state$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f36088e = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_parentHandle$volatile");
    private volatile /* synthetic */ Object _parentHandle$volatile;
    private volatile /* synthetic */ Object _state$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends e {

        /* renamed from: t  reason: collision with root package name */
        private final b0 f36089t;

        public a(Continuation continuation, b0 b0Var) {
            super(continuation, 1);
            this.f36089t = b0Var;
        }

        @Override // kotlinx.coroutines.e
        protected String N() {
            return "AwaitContinuation";
        }

        @Override // kotlinx.coroutines.e
        public Throwable z(Job job) {
            Throwable f10;
            Object c02 = this.f36089t.c0();
            if ((c02 instanceof c) && (f10 = ((c) c02).f()) != null) {
                return f10;
            }
            if (c02 instanceof hs.r) {
                return ((hs.r) c02).f27941a;
            }
            return job.N();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends z0 {

        /* renamed from: p  reason: collision with root package name */
        private final b0 f36090p;

        /* renamed from: q  reason: collision with root package name */
        private final c f36091q;

        /* renamed from: r  reason: collision with root package name */
        private final g f36092r;

        /* renamed from: s  reason: collision with root package name */
        private final Object f36093s;

        public b(b0 b0Var, c cVar, g gVar, Object obj) {
            this.f36090p = b0Var;
            this.f36091q = cVar;
            this.f36092r = gVar;
            this.f36093s = obj;
        }

        @Override // hs.z0
        public boolean v() {
            return false;
        }

        @Override // hs.z0
        public void w(Throwable th2) {
            this.f36090p.Q(this.f36091q, this.f36092r, this.f36093s);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements w0 {

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f36094e = AtomicIntegerFieldUpdater.newUpdater(c.class, "_isCompleting$volatile");

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f36095i = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_rootCause$volatile");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f36096o = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_exceptionsHolder$volatile");
        private volatile /* synthetic */ Object _exceptionsHolder$volatile;
        private volatile /* synthetic */ int _isCompleting$volatile;
        private volatile /* synthetic */ Object _rootCause$volatile;

        /* renamed from: d  reason: collision with root package name */
        private final d1 f36097d;

        public c(d1 d1Var, boolean z10, Throwable th2) {
            this.f36097d = d1Var;
            this._isCompleting$volatile = z10 ? 1 : 0;
            this._rootCause$volatile = th2;
        }

        private final ArrayList d() {
            return new ArrayList(4);
        }

        private final Object e() {
            return f36096o.get(this);
        }

        private final void o(Object obj) {
            f36096o.set(this, obj);
        }

        @Override // hs.w0
        public boolean a() {
            if (f() == null) {
                return true;
            }
            return false;
        }

        @Override // hs.w0
        public d1 b() {
            return this.f36097d;
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
            return (Throwable) f36095i.get(this);
        }

        public final boolean j() {
            if (f() != null) {
                return true;
            }
            return false;
        }

        public final boolean k() {
            if (f36094e.get(this) == 1) {
                return true;
            }
            return false;
        }

        public final boolean l() {
            ms.e0 e0Var;
            Object e10 = e();
            e0Var = c0.f36108e;
            if (e10 == e0Var) {
                return true;
            }
            return false;
        }

        public final List m(Throwable th2) {
            ArrayList arrayList;
            ms.e0 e0Var;
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
            e0Var = c0.f36108e;
            o(e0Var);
            return arrayList;
        }

        public final void n(boolean z10) {
            f36094e.set(this, z10 ? 1 : 0);
        }

        public final void p(Throwable th2) {
            f36095i.set(this, th2);
        }

        public String toString() {
            return "Finishing[cancelling=" + j() + ", completing=" + k() + ", rootCause=" + f() + ", exceptions=" + e() + ", list=" + b() + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f36098d;

        /* renamed from: e  reason: collision with root package name */
        Object f36099e;

        /* renamed from: i  reason: collision with root package name */
        int f36100i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f36101o;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f36101o = obj;
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
                java.lang.Object r0 = pr.b.f()
                int r1 = r5.f36100i
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L2a
                if (r1 == r3) goto L26
                if (r1 != r2) goto L1e
                java.lang.Object r1 = r5.f36099e
                ms.p r1 = (ms.p) r1
                java.lang.Object r3 = r5.f36098d
                ms.o r3 = (ms.o) r3
                java.lang.Object r4 = r5.f36101o
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
                java.lang.Object r6 = r5.f36101o
                kotlin.sequences.j r6 = (kotlin.sequences.j) r6
                kotlinx.coroutines.b0 r1 = kotlinx.coroutines.b0.this
                java.lang.Object r1 = r1.c0()
                boolean r4 = r1 instanceof kotlinx.coroutines.g
                if (r4 == 0) goto L48
                kotlinx.coroutines.g r1 = (kotlinx.coroutines.g) r1
                hs.o r1 = r1.f36121p
                r5.f36100i = r3
                java.lang.Object r6 = r6.b(r1, r5)
                if (r6 != r0) goto L86
                goto L80
            L48:
                boolean r3 = r1 instanceof hs.w0
                if (r3 == 0) goto L86
                hs.w0 r1 = (hs.w0) r1
                hs.d1 r1 = r1.b()
                if (r1 == 0) goto L86
                java.lang.Object r3 = r1.k()
                java.lang.String r4 = "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode"
                kotlin.jvm.internal.Intrinsics.checkNotNull(r3, r4)
                ms.p r3 = (ms.p) r3
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
                hs.o r6 = r6.f36121p
                r5.f36101o = r4
                r5.f36098d = r3
                r5.f36099e = r1
                r5.f36100i = r2
                java.lang.Object r6 = r4.b(r6, r5)
                if (r6 != r0) goto L81
            L80:
                return r0
            L81:
                ms.p r1 = r1.l()
                goto L63
            L86:
                kotlin.Unit r6 = kotlin.Unit.f33074a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlinx.coroutines.b0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((d) create(jVar, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public b0(boolean z10) {
        this._state$volatile = z10 ? c0.f36110g : c0.f36109f;
    }

    private final void A(Throwable th2, List list) {
        if (list.size() > 1) {
            Set newSetFromMap = Collections.newSetFromMap(new IdentityHashMap(list.size()));
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Throwable th3 = (Throwable) it.next();
                if (th3 != th2 && th3 != th2 && !(th3 instanceof CancellationException) && newSetFromMap.add(th3)) {
                    jr.e.a(th2, th3);
                }
            }
        }
    }

    private final int B0(Object obj) {
        p pVar;
        if (obj instanceof p) {
            if (!((p) obj).a()) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f36087d;
                pVar = c0.f36110g;
                if (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, obj, pVar)) {
                    return -1;
                }
                w0();
                return 1;
            }
            return 0;
        } else if (!(obj instanceof u)) {
            return 0;
        } else {
            if (!androidx.concurrent.futures.b.a(f36087d, this, obj, ((u) obj).b())) {
                return -1;
            }
            w0();
            return 1;
        }
    }

    private final String C0(Object obj) {
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
        } else if (obj instanceof hs.r) {
            return "Cancelled";
        } else {
            return "Completed";
        }
    }

    private final Object F(Continuation continuation) {
        a aVar = new a(pr.b.c(continuation), this);
        aVar.H();
        hs.l.a(aVar, z.o(this, false, new e0(aVar), 1, null));
        Object B = aVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static /* synthetic */ CancellationException F0(b0 b0Var, Throwable th2, String str, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                str = null;
            }
            return b0Var.E0(th2, str);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: toCancellationException");
    }

    private final boolean I0(w0 w0Var, Object obj) {
        if (!androidx.concurrent.futures.b.a(f36087d, this, w0Var, c0.g(obj))) {
            return false;
        }
        u0(null);
        v0(obj);
        P(w0Var, obj);
        return true;
    }

    private final Object J(Object obj) {
        ms.e0 e0Var;
        Object N0;
        ms.e0 e0Var2;
        do {
            Object c02 = c0();
            if (!(c02 instanceof w0) || ((c02 instanceof c) && ((c) c02).k())) {
                e0Var = c0.f36104a;
                return e0Var;
            }
            N0 = N0(c02, new hs.r(R(obj), false, 2, null));
            e0Var2 = c0.f36106c;
        } while (N0 == e0Var2);
        return N0;
    }

    private final boolean K(Throwable th2) {
        if (j0()) {
            return true;
        }
        boolean z10 = th2 instanceof CancellationException;
        hs.n b02 = b0();
        if (b02 != null && b02 != e1.f27916d) {
            if (b02.d(th2) || z10) {
                return true;
            }
            return false;
        }
        return z10;
    }

    private final boolean M0(w0 w0Var, Throwable th2) {
        d1 Z = Z(w0Var);
        if (Z == null) {
            return false;
        }
        if (!androidx.concurrent.futures.b.a(f36087d, this, w0Var, new c(Z, false, th2))) {
            return false;
        }
        r0(Z, th2);
        return true;
    }

    private final Object N0(Object obj, Object obj2) {
        ms.e0 e0Var;
        ms.e0 e0Var2;
        if (!(obj instanceof w0)) {
            e0Var2 = c0.f36104a;
            return e0Var2;
        } else if (((obj instanceof p) || (obj instanceof z0)) && !(obj instanceof g) && !(obj2 instanceof hs.r)) {
            if (!I0((w0) obj, obj2)) {
                e0Var = c0.f36106c;
                return e0Var;
            }
            return obj2;
        } else {
            return P0((w0) obj, obj2);
        }
    }

    private final void P(w0 w0Var, Object obj) {
        hs.r rVar;
        hs.n b02 = b0();
        if (b02 != null) {
            b02.dispose();
            A0(e1.f27916d);
        }
        Throwable th2 = null;
        if (obj instanceof hs.r) {
            rVar = (hs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f27941a;
        }
        if (w0Var instanceof z0) {
            try {
                ((z0) w0Var).w(th2);
                return;
            } catch (Throwable th3) {
                g0(new hs.s("Exception in completion handler " + w0Var + " for " + this, th3));
                return;
            }
        }
        d1 b10 = w0Var.b();
        if (b10 != null) {
            s0(b10, th2);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v0 */
    /* JADX WARN: Type inference failed for: r2v1, types: [java.lang.Throwable, T] */
    /* JADX WARN: Type inference failed for: r2v2 */
    private final Object P0(w0 w0Var, Object obj) {
        c cVar;
        hs.r rVar;
        ms.e0 e0Var;
        ms.e0 e0Var2;
        ms.e0 e0Var3;
        d1 Z = Z(w0Var);
        if (Z == null) {
            e0Var3 = c0.f36106c;
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
                e0Var2 = c0.f36104a;
                return e0Var2;
            }
            cVar.n(true);
            if (cVar != w0Var && !androidx.concurrent.futures.b.a(f36087d, this, w0Var, cVar)) {
                e0Var = c0.f36106c;
                return e0Var;
            }
            boolean j10 = cVar.j();
            if (obj instanceof hs.r) {
                rVar = (hs.r) obj;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                cVar.c(rVar.f27941a);
            }
            Throwable f10 = cVar.f();
            if (!j10) {
                r22 = f10;
            }
            objectRef.element = r22;
            Unit unit = Unit.f33074a;
            if (r22 != 0) {
                r0(Z, r22);
            }
            g q02 = q0(Z);
            if (q02 != null && Q0(cVar, q02, obj)) {
                return c0.f36105b;
            }
            Z.g(2);
            g q03 = q0(Z);
            if (q03 != null && Q0(cVar, q03, obj)) {
                return c0.f36105b;
            }
            return S(cVar, obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void Q(c cVar, g gVar, Object obj) {
        g q02 = q0(gVar);
        if (q02 == null || !Q0(cVar, q02, obj)) {
            cVar.b().g(2);
            g q03 = q0(gVar);
            if (q03 != null && Q0(cVar, q03, obj)) {
                return;
            }
            C(S(cVar, obj));
        }
    }

    private final boolean Q0(c cVar, g gVar, Object obj) {
        while (z.n(gVar.f36121p, false, new b(this, cVar, gVar, obj)) == e1.f27916d) {
            gVar = q0(gVar);
            if (gVar == null) {
                return false;
            }
        }
        return true;
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
        return ((g1) obj).O0();
    }

    private final Object S(c cVar, Object obj) {
        hs.r rVar;
        Throwable th2;
        boolean j10;
        Throwable W;
        if (obj instanceof hs.r) {
            rVar = (hs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f27941a;
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
            obj = new hs.r(W, false, 2, null);
        }
        if (W != null && (K(W) || f0(W))) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CompletedExceptionally");
            ((hs.r) obj).c();
        }
        if (!j10) {
            u0(W);
        }
        v0(obj);
        androidx.concurrent.futures.b.a(f36087d, this, cVar, c0.g(obj));
        P(cVar, obj);
        return obj;
    }

    private final Throwable U(Object obj) {
        hs.r rVar;
        if (obj instanceof hs.r) {
            rVar = (hs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f27941a;
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
                y0((z0) w0Var);
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
        e eVar = new e(pr.b.c(continuation), 1);
        eVar.H();
        hs.l.a(eVar, z.o(this, false, new f0(eVar), 1, null));
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == pr.b.f()) {
            return B;
        }
        return Unit.f33074a;
    }

    private final Object m0(Object obj) {
        ms.e0 e0Var;
        ms.e0 e0Var2;
        ms.e0 e0Var3;
        ms.e0 e0Var4;
        ms.e0 e0Var5;
        ms.e0 e0Var6;
        Throwable th2 = null;
        Throwable th3 = null;
        while (true) {
            Object c02 = c0();
            if (c02 instanceof c) {
                synchronized (c02) {
                    if (((c) c02).l()) {
                        e0Var2 = c0.f36107d;
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
                    e0Var = c0.f36104a;
                    return e0Var;
                }
            } else if (!(c02 instanceof w0)) {
                e0Var3 = c0.f36107d;
                return e0Var3;
            } else {
                if (th3 == null) {
                    th3 = R(obj);
                }
                w0 w0Var = (w0) c02;
                if (w0Var.a()) {
                    if (M0(w0Var, th3)) {
                        e0Var4 = c0.f36104a;
                        return e0Var4;
                    }
                } else {
                    Object N0 = N0(c02, new hs.r(th3, false, 2, null));
                    e0Var5 = c0.f36104a;
                    if (N0 != e0Var5) {
                        e0Var6 = c0.f36106c;
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

    private final g q0(ms.p pVar) {
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
        u0(th2);
        d1Var.g(4);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        hs.s sVar = null;
        for (ms.p pVar = (ms.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if ((pVar instanceof z0) && ((z0) pVar).v()) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        jr.e.a(sVar, th3);
                    } else {
                        sVar = new hs.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f33074a;
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
        hs.s sVar = null;
        for (ms.p pVar = (ms.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if (pVar instanceof z0) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        jr.e.a(sVar, th3);
                    } else {
                        sVar = new hs.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f33074a;
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
    private final void x0(p pVar) {
        d1 d1Var = new d1();
        if (!pVar.a()) {
            d1Var = new u(d1Var);
        }
        androidx.concurrent.futures.b.a(f36087d, this, pVar, d1Var);
    }

    private final void y0(z0 z0Var) {
        z0Var.f(new d1());
        androidx.concurrent.futures.b.a(f36087d, this, z0Var, z0Var.l());
    }

    public final void A0(hs.n nVar) {
        f36088e.set(this, nVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return Job.a.b(this, obj, function2);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void C(Object obj) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object D(Continuation continuation) {
        Object c02;
        do {
            c02 = c0();
            if (!(c02 instanceof w0)) {
                if (!(c02 instanceof hs.r)) {
                    return c0.h(c02);
                }
                throw ((hs.r) c02).f27941a;
            }
        } while (B0(c02) < 0);
        return F(continuation);
    }

    @Override // kotlinx.coroutines.Job
    public final n0 D0(Function1 function1) {
        return i0(true, new x(function1));
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
        ms.e0 e0Var;
        ms.e0 e0Var2;
        ms.e0 e0Var3;
        obj2 = c0.f36104a;
        if (!Y() || (obj2 = J(obj)) != c0.f36105b) {
            e0Var = c0.f36104a;
            if (obj2 == e0Var) {
                obj2 = m0(obj);
            }
            e0Var2 = c0.f36104a;
            if (obj2 != e0Var2 && obj2 != c0.f36105b) {
                e0Var3 = c0.f36107d;
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
        return p0() + '{' + C0(c0()) + '}';
    }

    public void I(Throwable th2) {
        H(th2);
    }

    @Override // kotlinx.coroutines.Job
    public final hs.n J0(hs.o oVar) {
        hs.r rVar;
        hs.r rVar2;
        g gVar = new g(oVar);
        gVar.x(this);
        while (true) {
            Object c02 = c0();
            if (c02 instanceof p) {
                p pVar = (p) c02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f36087d, this, c02, gVar)) {
                        return gVar;
                    }
                } else {
                    x0(pVar);
                }
            } else {
                Throwable th2 = null;
                if (c02 instanceof w0) {
                    d1 b10 = ((w0) c02).b();
                    if (b10 == null) {
                        Intrinsics.checkNotNull(c02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                        y0((z0) c02);
                    } else {
                        if (!b10.c(gVar, 7)) {
                            boolean c10 = b10.c(gVar, 3);
                            Object c03 = c0();
                            if (c03 instanceof c) {
                                th2 = ((c) c03).f();
                            } else {
                                if (c03 instanceof hs.r) {
                                    rVar2 = (hs.r) c03;
                                } else {
                                    rVar2 = null;
                                }
                                if (rVar2 != null) {
                                    th2 = rVar2.f27941a;
                                }
                            }
                            gVar.w(th2);
                            if (!c10) {
                                return e1.f27916d;
                            }
                        }
                        return gVar;
                    }
                } else {
                    Object c04 = c0();
                    if (c04 instanceof hs.r) {
                        rVar = (hs.r) c04;
                    } else {
                        rVar = null;
                    }
                    if (rVar != null) {
                        th2 = rVar.f27941a;
                    }
                    gVar.w(th2);
                    return e1.f27916d;
                }
            }
        }
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

    @Override // kotlinx.coroutines.Job
    public final CancellationException N() {
        Object c02 = c0();
        if (c02 instanceof c) {
            Throwable f10 = ((c) c02).f();
            if (f10 != null) {
                CancellationException E0 = E0(f10, hs.e0.a(this) + " is cancelling");
                if (E0 != null) {
                    return E0;
                }
            }
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        } else if (!(c02 instanceof w0)) {
            if (c02 instanceof hs.r) {
                return F0(this, ((hs.r) c02).f27941a, null, 1, null);
            }
            return new y0(hs.e0.a(this) + " has completed normally", null, this);
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

    @Override // hs.g1
    public CancellationException O0() {
        Throwable th2;
        Object c02 = c0();
        CancellationException cancellationException = null;
        if (c02 instanceof c) {
            th2 = ((c) c02).f();
        } else if (c02 instanceof hs.r) {
            th2 = ((hs.r) c02).f27941a;
        } else if (!(c02 instanceof w0)) {
            th2 = null;
        } else {
            throw new IllegalStateException(("Cannot be cancelling child in this state: " + c02).toString());
        }
        if (th2 instanceof CancellationException) {
            cancellationException = th2;
        }
        if (cancellationException == null) {
            return new y0("Parent job is " + C0(c02), th2, this);
        }
        return cancellationException;
    }

    public final Object T() {
        Object c02 = c0();
        if (!(c02 instanceof w0)) {
            if (!(c02 instanceof hs.r)) {
                return c0.h(c02);
            }
            throw ((hs.r) c02).f27941a;
        }
        throw new IllegalStateException("This job has not completed yet");
    }

    public boolean X() {
        return true;
    }

    public boolean Y() {
        return false;
    }

    @Override // hs.o
    public final void Y0(g1 g1Var) {
        H(g1Var);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Z0(CoroutineContext coroutineContext) {
        return Job.a.e(this, coroutineContext);
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
        hs.n b02 = b0();
        if (b02 != null) {
            return b02.getParent();
        }
        return null;
    }

    public final hs.n b0() {
        return (hs.n) f36088e.get(this);
    }

    public final Object c0() {
        return f36087d.get(this);
    }

    @Override // kotlinx.coroutines.Job
    public final Object e1(Continuation continuation) {
        if (!k0()) {
            z.k(continuation.getContext());
            return Unit.f33074a;
        }
        Object l02 = l0(continuation);
        if (l02 == pr.b.f()) {
            return l02;
        }
        return Unit.f33074a;
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
        return Job.f36083j;
    }

    @Override // kotlinx.coroutines.Job, js.v
    public void h(CancellationException cancellationException) {
        if (cancellationException == null) {
            cancellationException = new y0(M(), null, this);
        }
        I(cancellationException);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h0(Job job) {
        if (job == null) {
            A0(e1.f27916d);
            return;
        }
        job.start();
        hs.n J0 = job.J0(this);
        A0(J0);
        if (isCompleted()) {
            J0.dispose();
            A0(e1.f27916d);
        }
    }

    public final n0 i0(boolean z10, z0 z0Var) {
        boolean z11;
        Throwable th2;
        hs.r rVar;
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
                    if (androidx.concurrent.futures.b.a(f36087d, this, c02, z0Var)) {
                        break;
                    }
                } else {
                    x0(pVar);
                }
            } else if (c02 instanceof w0) {
                w0 w0Var = (w0) c02;
                d1 b10 = w0Var.b();
                if (b10 == null) {
                    Intrinsics.checkNotNull(c02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                    y0((z0) c02);
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
                            return e1.f27916d;
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
            if (c03 instanceof hs.r) {
                rVar = (hs.r) c03;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                th2 = rVar.f27941a;
            }
            z0Var.w(th2);
        }
        return e1.f27916d;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCancelled() {
        Object c02 = c0();
        if (!(c02 instanceof hs.r)) {
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
        ms.e0 e0Var;
        ms.e0 e0Var2;
        do {
            N0 = N0(c0(), obj);
            e0Var = c0.f36104a;
            if (N0 == e0Var) {
                return false;
            }
            if (N0 != c0.f36105b) {
                e0Var2 = c0.f36106c;
            } else {
                return true;
            }
        } while (N0 == e0Var2);
        C(N0);
        return true;
    }

    public final Object o0(Object obj) {
        Object N0;
        ms.e0 e0Var;
        ms.e0 e0Var2;
        do {
            N0 = N0(c0(), obj);
            e0Var = c0.f36104a;
            if (N0 != e0Var) {
                e0Var2 = c0.f36106c;
            } else {
                throw new IllegalStateException("Job " + this + " is already complete or completing, but is being completed with " + obj, U(obj));
            }
        } while (N0 == e0Var2);
        return N0;
    }

    public String p0() {
        return hs.e0.a(this);
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

    public String toString() {
        return H0() + '@' + hs.e0.b(this);
    }

    protected void u0(Throwable th2) {
    }

    protected void v0(Object obj) {
    }

    protected void w0() {
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext y1(CoroutineContext.b bVar) {
        return Job.a.d(this, bVar);
    }

    public final void z0(z0 z0Var) {
        Object c02;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater;
        p pVar;
        do {
            c02 = c0();
            if (c02 instanceof z0) {
                if (c02 == z0Var) {
                    atomicReferenceFieldUpdater = f36087d;
                    pVar = c0.f36110g;
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

    public void g0(Throwable th2) {
        throw th2;
    }
}
