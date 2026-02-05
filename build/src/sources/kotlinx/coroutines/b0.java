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
import ms.d1;
import ms.e1;
import ms.g1;
import ms.n0;
import ms.r1;
import ms.w0;
import ms.y0;
import ms.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b0 implements Job, ms.o, g1 {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35001d = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_state$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35002e = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_parentHandle$volatile");
    private volatile /* synthetic */ Object _parentHandle$volatile;
    private volatile /* synthetic */ Object _state$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends e {

        /* renamed from: t  reason: collision with root package name */
        private final b0 f35003t;

        public a(Continuation continuation, b0 b0Var) {
            super(continuation, 1);
            this.f35003t = b0Var;
        }

        @Override // kotlinx.coroutines.e
        protected String N() {
            return "AwaitContinuation";
        }

        @Override // kotlinx.coroutines.e
        public Throwable z(Job job) {
            Throwable f10;
            Object d02 = this.f35003t.d0();
            if ((d02 instanceof c) && (f10 = ((c) d02).f()) != null) {
                return f10;
            }
            if (d02 instanceof ms.r) {
                return ((ms.r) d02).f38943a;
            }
            return job.N();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends z0 {

        /* renamed from: p  reason: collision with root package name */
        private final b0 f35004p;

        /* renamed from: q  reason: collision with root package name */
        private final c f35005q;

        /* renamed from: r  reason: collision with root package name */
        private final g f35006r;

        /* renamed from: s  reason: collision with root package name */
        private final Object f35007s;

        public b(b0 b0Var, c cVar, g gVar, Object obj) {
            this.f35004p = b0Var;
            this.f35005q = cVar;
            this.f35006r = gVar;
            this.f35007s = obj;
        }

        @Override // ms.z0
        public boolean v() {
            return false;
        }

        @Override // ms.z0
        public void w(Throwable th2) {
            this.f35004p.Q(this.f35005q, this.f35006r, this.f35007s);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements w0 {

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f35008e = AtomicIntegerFieldUpdater.newUpdater(c.class, "_isCompleting$volatile");

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f35009i = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_rootCause$volatile");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f35010o = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_exceptionsHolder$volatile");
        private volatile /* synthetic */ Object _exceptionsHolder$volatile;
        private volatile /* synthetic */ int _isCompleting$volatile;
        private volatile /* synthetic */ Object _rootCause$volatile;

        /* renamed from: d  reason: collision with root package name */
        private final d1 f35011d;

        public c(d1 d1Var, boolean z10, Throwable th2) {
            this.f35011d = d1Var;
            this._isCompleting$volatile = z10 ? 1 : 0;
            this._rootCause$volatile = th2;
        }

        private final ArrayList d() {
            return new ArrayList(4);
        }

        private final Object e() {
            return f35010o.get(this);
        }

        private final void o(Object obj) {
            f35010o.set(this, obj);
        }

        @Override // ms.w0
        public boolean a() {
            if (f() == null) {
                return true;
            }
            return false;
        }

        @Override // ms.w0
        public d1 b() {
            return this.f35011d;
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
            return (Throwable) f35009i.get(this);
        }

        public final boolean j() {
            if (f() != null) {
                return true;
            }
            return false;
        }

        public final boolean k() {
            if (f35008e.get(this) == 1) {
                return true;
            }
            return false;
        }

        public final boolean l() {
            rs.e0 e0Var;
            Object e10 = e();
            e0Var = c0.f35022e;
            if (e10 == e0Var) {
                return true;
            }
            return false;
        }

        public final List m(Throwable th2) {
            ArrayList arrayList;
            rs.e0 e0Var;
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
            e0Var = c0.f35022e;
            o(e0Var);
            return arrayList;
        }

        public final void n(boolean z10) {
            f35008e.set(this, z10 ? 1 : 0);
        }

        public final void p(Throwable th2) {
            f35009i.set(this, th2);
        }

        public String toString() {
            return "Finishing[cancelling=" + j() + ", completing=" + k() + ", rootCause=" + f() + ", exceptions=" + e() + ", list=" + b() + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f35012d;

        /* renamed from: e  reason: collision with root package name */
        Object f35013e;

        /* renamed from: i  reason: collision with root package name */
        int f35014i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f35015o;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f35015o = obj;
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
                java.lang.Object r0 = ur.b.f()
                int r1 = r5.f35014i
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L2a
                if (r1 == r3) goto L26
                if (r1 != r2) goto L1e
                java.lang.Object r1 = r5.f35013e
                rs.p r1 = (rs.p) r1
                java.lang.Object r3 = r5.f35012d
                rs.o r3 = (rs.o) r3
                java.lang.Object r4 = r5.f35015o
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
                java.lang.Object r6 = r5.f35015o
                kotlin.sequences.j r6 = (kotlin.sequences.j) r6
                kotlinx.coroutines.b0 r1 = kotlinx.coroutines.b0.this
                java.lang.Object r1 = r1.d0()
                boolean r4 = r1 instanceof kotlinx.coroutines.g
                if (r4 == 0) goto L48
                kotlinx.coroutines.g r1 = (kotlinx.coroutines.g) r1
                ms.o r1 = r1.f35035p
                r5.f35014i = r3
                java.lang.Object r6 = r6.b(r1, r5)
                if (r6 != r0) goto L86
                goto L80
            L48:
                boolean r3 = r1 instanceof ms.w0
                if (r3 == 0) goto L86
                ms.w0 r1 = (ms.w0) r1
                ms.d1 r1 = r1.b()
                if (r1 == 0) goto L86
                java.lang.Object r3 = r1.k()
                java.lang.String r4 = "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode"
                kotlin.jvm.internal.Intrinsics.checkNotNull(r3, r4)
                rs.p r3 = (rs.p) r3
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
                ms.o r6 = r6.f35035p
                r5.f35015o = r4
                r5.f35012d = r3
                r5.f35013e = r1
                r5.f35014i = r2
                java.lang.Object r6 = r4.b(r6, r5)
                if (r6 != r0) goto L81
            L80:
                return r0
            L81:
                rs.p r1 = r1.l()
                goto L63
            L86:
                kotlin.Unit r6 = kotlin.Unit.f31988a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlinx.coroutines.b0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((d) create(jVar, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public b0(boolean z10) {
        this._state$volatile = z10 ? c0.f35024g : c0.f35023f;
    }

    private final void B(Throwable th2, List list) {
        if (list.size() > 1) {
            Set newSetFromMap = Collections.newSetFromMap(new IdentityHashMap(list.size()));
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Throwable th3 = (Throwable) it.next();
                if (th3 != th2 && th3 != th2 && !(th3 instanceof CancellationException) && newSetFromMap.add(th3)) {
                    or.e.a(th2, th3);
                }
            }
        }
    }

    private final int B0(Object obj) {
        p pVar;
        if (obj instanceof p) {
            if (!((p) obj).a()) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35001d;
                pVar = c0.f35024g;
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
            if (!androidx.concurrent.futures.b.a(f35001d, this, obj, ((u) obj).b())) {
                return -1;
            }
            w0();
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
        } else if (obj instanceof ms.r) {
            return "Cancelled";
        } else {
            return "Completed";
        }
    }

    private final Object F(Continuation continuation) {
        a aVar = new a(ur.b.c(continuation), this);
        aVar.H();
        ms.l.a(aVar, z.o(this, false, new e0(aVar), 1, null));
        Object B = aVar.B();
        if (B == ur.b.f()) {
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
        rs.e0 e0Var;
        Object M0;
        rs.e0 e0Var2;
        do {
            Object d02 = d0();
            if (!(d02 instanceof w0) || ((d02 instanceof c) && ((c) d02).k())) {
                e0Var = c0.f35018a;
                return e0Var;
            }
            M0 = M0(d02, new ms.r(R(obj), false, 2, null));
            e0Var2 = c0.f35020c;
        } while (M0 == e0Var2);
        return M0;
    }

    private final boolean J0(w0 w0Var, Object obj) {
        if (!androidx.concurrent.futures.b.a(f35001d, this, w0Var, c0.g(obj))) {
            return false;
        }
        u0(null);
        v0(obj);
        P(w0Var, obj);
        return true;
    }

    private final boolean K(Throwable th2) {
        if (k0()) {
            return true;
        }
        boolean z10 = th2 instanceof CancellationException;
        ms.n c02 = c0();
        if (c02 != null && c02 != e1.f38918d) {
            if (c02.d(th2) || z10) {
                return true;
            }
            return false;
        }
        return z10;
    }

    private final boolean L0(w0 w0Var, Throwable th2) {
        d1 a02 = a0(w0Var);
        if (a02 == null) {
            return false;
        }
        if (!androidx.concurrent.futures.b.a(f35001d, this, w0Var, new c(a02, false, th2))) {
            return false;
        }
        s0(a02, th2);
        return true;
    }

    private final Object M0(Object obj, Object obj2) {
        rs.e0 e0Var;
        rs.e0 e0Var2;
        if (!(obj instanceof w0)) {
            e0Var2 = c0.f35018a;
            return e0Var2;
        } else if (((obj instanceof p) || (obj instanceof z0)) && !(obj instanceof g) && !(obj2 instanceof ms.r)) {
            if (!J0((w0) obj, obj2)) {
                e0Var = c0.f35020c;
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
        ms.r rVar;
        rs.e0 e0Var;
        rs.e0 e0Var2;
        rs.e0 e0Var3;
        d1 a02 = a0(w0Var);
        if (a02 == null) {
            e0Var3 = c0.f35020c;
            return e0Var3;
        }
        ?? r22 = 0;
        if (w0Var instanceof c) {
            cVar = (c) w0Var;
        } else {
            cVar = null;
        }
        if (cVar == null) {
            cVar = new c(a02, false, null);
        }
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        synchronized (cVar) {
            if (cVar.k()) {
                e0Var2 = c0.f35018a;
                return e0Var2;
            }
            cVar.n(true);
            if (cVar != w0Var && !androidx.concurrent.futures.b.a(f35001d, this, w0Var, cVar)) {
                e0Var = c0.f35020c;
                return e0Var;
            }
            boolean j10 = cVar.j();
            if (obj instanceof ms.r) {
                rVar = (ms.r) obj;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                cVar.c(rVar.f38943a);
            }
            Throwable f10 = cVar.f();
            if (!j10) {
                r22 = f10;
            }
            objectRef.element = r22;
            Unit unit = Unit.f31988a;
            if (r22 != 0) {
                s0(a02, r22);
            }
            g r02 = r0(a02);
            if (r02 != null && P0(cVar, r02, obj)) {
                return c0.f35019b;
            }
            a02.g(2);
            g r03 = r0(a02);
            if (r03 != null && P0(cVar, r03, obj)) {
                return c0.f35019b;
            }
            return S(cVar, obj);
        }
    }

    private final void P(w0 w0Var, Object obj) {
        ms.r rVar;
        ms.n c02 = c0();
        if (c02 != null) {
            c02.dispose();
            A0(e1.f38918d);
        }
        Throwable th2 = null;
        if (obj instanceof ms.r) {
            rVar = (ms.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f38943a;
        }
        if (w0Var instanceof z0) {
            try {
                ((z0) w0Var).w(th2);
                return;
            } catch (Throwable th3) {
                h0(new ms.s("Exception in completion handler " + w0Var + " for " + this, th3));
                return;
            }
        }
        d1 b10 = w0Var.b();
        if (b10 != null) {
            t0(b10, th2);
        }
    }

    private final boolean P0(c cVar, g gVar, Object obj) {
        while (z.n(gVar.f35035p, false, new b(this, cVar, gVar, obj)) == e1.f38918d) {
            gVar = r0(gVar);
            if (gVar == null) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void Q(c cVar, g gVar, Object obj) {
        g r02 = r0(gVar);
        if (r02 == null || !P0(cVar, r02, obj)) {
            cVar.b().g(2);
            g r03 = r0(gVar);
            if (r03 != null && P0(cVar, r03, obj)) {
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
        return ((g1) obj).N0();
    }

    private final Object S(c cVar, Object obj) {
        ms.r rVar;
        Throwable th2;
        boolean j10;
        Throwable X;
        if (obj instanceof ms.r) {
            rVar = (ms.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f38943a;
        } else {
            th2 = null;
        }
        synchronized (cVar) {
            j10 = cVar.j();
            List m10 = cVar.m(th2);
            X = X(cVar, m10);
            if (X != null) {
                B(X, m10);
            }
        }
        if (X != null && X != th2) {
            obj = new ms.r(X, false, 2, null);
        }
        if (X != null && (K(X) || g0(X))) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CompletedExceptionally");
            ((ms.r) obj).c();
        }
        if (!j10) {
            u0(X);
        }
        v0(obj);
        androidx.concurrent.futures.b.a(f35001d, this, cVar, c0.g(obj));
        P(cVar, obj);
        return obj;
    }

    private final Throwable U(Object obj) {
        ms.r rVar;
        if (obj instanceof ms.r) {
            rVar = (ms.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f38943a;
    }

    private final Throwable X(c cVar, List list) {
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

    private final d1 a0(w0 w0Var) {
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

    private final boolean l0() {
        Object d02;
        do {
            d02 = d0();
            if (!(d02 instanceof w0)) {
                return false;
            }
        } while (B0(d02) < 0);
        return true;
    }

    private final Object m0(Continuation continuation) {
        e eVar = new e(ur.b.c(continuation), 1);
        eVar.H();
        ms.l.a(eVar, z.o(this, false, new f0(eVar), 1, null));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == ur.b.f()) {
            return B;
        }
        return Unit.f31988a;
    }

    private final Object n0(Object obj) {
        rs.e0 e0Var;
        rs.e0 e0Var2;
        rs.e0 e0Var3;
        rs.e0 e0Var4;
        rs.e0 e0Var5;
        rs.e0 e0Var6;
        Throwable th2 = null;
        Throwable th3 = null;
        while (true) {
            Object d02 = d0();
            if (d02 instanceof c) {
                synchronized (d02) {
                    if (((c) d02).l()) {
                        e0Var2 = c0.f35021d;
                        return e0Var2;
                    }
                    boolean j10 = ((c) d02).j();
                    if (obj != null || !j10) {
                        if (th3 == null) {
                            th3 = R(obj);
                        }
                        ((c) d02).c(th3);
                    }
                    Throwable f10 = ((c) d02).f();
                    if (!j10) {
                        th2 = f10;
                    }
                    if (th2 != null) {
                        s0(((c) d02).b(), th2);
                    }
                    e0Var = c0.f35018a;
                    return e0Var;
                }
            } else if (!(d02 instanceof w0)) {
                e0Var3 = c0.f35021d;
                return e0Var3;
            } else {
                if (th3 == null) {
                    th3 = R(obj);
                }
                w0 w0Var = (w0) d02;
                if (w0Var.a()) {
                    if (L0(w0Var, th3)) {
                        e0Var4 = c0.f35018a;
                        return e0Var4;
                    }
                } else {
                    Object M0 = M0(d02, new ms.r(th3, false, 2, null));
                    e0Var5 = c0.f35018a;
                    if (M0 != e0Var5) {
                        e0Var6 = c0.f35020c;
                        if (M0 != e0Var6) {
                            return M0;
                        }
                    } else {
                        throw new IllegalStateException(("Cannot happen in " + d02).toString());
                    }
                }
            }
        }
    }

    private final g r0(rs.p pVar) {
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

    private final void s0(d1 d1Var, Throwable th2) {
        u0(th2);
        d1Var.g(4);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        ms.s sVar = null;
        for (rs.p pVar = (rs.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if ((pVar instanceof z0) && ((z0) pVar).v()) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        or.e.a(sVar, th3);
                    } else {
                        sVar = new ms.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f31988a;
                    }
                }
            }
        }
        if (sVar != null) {
            h0(sVar);
        }
        K(th2);
    }

    private final void t0(d1 d1Var, Throwable th2) {
        d1Var.g(1);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        ms.s sVar = null;
        for (rs.p pVar = (rs.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if (pVar instanceof z0) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        or.e.a(sVar, th3);
                    } else {
                        sVar = new ms.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f31988a;
                    }
                }
            }
        }
        if (sVar != null) {
            h0(sVar);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v2, types: [kotlinx.coroutines.u] */
    private final void x0(p pVar) {
        d1 d1Var = new d1();
        if (!pVar.a()) {
            d1Var = new u(d1Var);
        }
        androidx.concurrent.futures.b.a(f35001d, this, pVar, d1Var);
    }

    private final void y0(z0 z0Var) {
        z0Var.f(new d1());
        androidx.concurrent.futures.b.a(f35001d, this, z0Var, z0Var.l());
    }

    public final void A0(ms.n nVar) {
        f35002e.set(this, nVar);
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
        return j0(true, new x(function1));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object D(Continuation continuation) {
        Object d02;
        do {
            d02 = d0();
            if (!(d02 instanceof w0)) {
                if (!(d02 instanceof ms.r)) {
                    return c0.h(d02);
                }
                throw ((ms.r) d02).f38943a;
            }
        } while (B0(d02) < 0);
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
        rs.e0 e0Var;
        rs.e0 e0Var2;
        rs.e0 e0Var3;
        obj2 = c0.f35018a;
        if (!Z() || (obj2 = J(obj)) != c0.f35019b) {
            e0Var = c0.f35018a;
            if (obj2 == e0Var) {
                obj2 = n0(obj);
            }
            e0Var2 = c0.f35018a;
            if (obj2 != e0Var2 && obj2 != c0.f35019b) {
                e0Var3 = c0.f35021d;
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
        return q0() + '{' + D0(d0()) + '}';
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
        return j0(z11, xVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String M() {
        return "Job was cancelled";
    }

    @Override // kotlinx.coroutines.Job
    public final CancellationException N() {
        Object d02 = d0();
        if (d02 instanceof c) {
            Throwable f10 = ((c) d02).f();
            if (f10 != null) {
                CancellationException E0 = E0(f10, ms.e0.a(this) + " is cancelling");
                if (E0 != null) {
                    return E0;
                }
            }
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        } else if (!(d02 instanceof w0)) {
            if (d02 instanceof ms.r) {
                return G0(this, ((ms.r) d02).f38943a, null, 1, null);
            }
            return new y0(ms.e0.a(this) + " has completed normally", null, this);
        } else {
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        }
    }

    @Override // ms.g1
    public CancellationException N0() {
        Throwable th2;
        Object d02 = d0();
        CancellationException cancellationException = null;
        if (d02 instanceof c) {
            th2 = ((c) d02).f();
        } else if (d02 instanceof ms.r) {
            th2 = ((ms.r) d02).f38943a;
        } else if (!(d02 instanceof w0)) {
            th2 = null;
        } else {
            throw new IllegalStateException(("Cannot be cancelling child in this state: " + d02).toString());
        }
        if (th2 instanceof CancellationException) {
            cancellationException = th2;
        }
        if (cancellationException == null) {
            return new y0("Parent job is " + D0(d02), th2, this);
        }
        return cancellationException;
    }

    public boolean O(Throwable th2) {
        if (th2 instanceof CancellationException) {
            return true;
        }
        if (H(th2) && Y()) {
            return true;
        }
        return false;
    }

    public final Object T() {
        Object d02 = d0();
        if (!(d02 instanceof w0)) {
            if (!(d02 instanceof ms.r)) {
                return c0.h(d02);
            }
            throw ((ms.r) d02).f38943a;
        }
        throw new IllegalStateException("This job has not completed yet");
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return Job.a.e(this, coroutineContext);
    }

    public boolean Y() {
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public final Object Y0(Continuation continuation) {
        if (!l0()) {
            z.k(continuation.getContext());
            return Unit.f31988a;
        }
        Object m02 = m0(continuation);
        if (m02 == ur.b.f()) {
            return m02;
        }
        return Unit.f31988a;
    }

    public boolean Z() {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public final ms.n Z0(ms.o oVar) {
        ms.r rVar;
        ms.r rVar2;
        g gVar = new g(oVar);
        gVar.x(this);
        while (true) {
            Object d02 = d0();
            if (d02 instanceof p) {
                p pVar = (p) d02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f35001d, this, d02, gVar)) {
                        return gVar;
                    }
                } else {
                    x0(pVar);
                }
            } else {
                Throwable th2 = null;
                if (d02 instanceof w0) {
                    d1 b10 = ((w0) d02).b();
                    if (b10 == null) {
                        Intrinsics.checkNotNull(d02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                        y0((z0) d02);
                    } else {
                        if (!b10.c(gVar, 7)) {
                            boolean c10 = b10.c(gVar, 3);
                            Object d03 = d0();
                            if (d03 instanceof c) {
                                th2 = ((c) d03).f();
                            } else {
                                if (d03 instanceof ms.r) {
                                    rVar2 = (ms.r) d03;
                                } else {
                                    rVar2 = null;
                                }
                                if (rVar2 != null) {
                                    th2 = rVar2.f38943a;
                                }
                            }
                            gVar.w(th2);
                            if (!c10) {
                                return e1.f38918d;
                            }
                        }
                        return gVar;
                    }
                } else {
                    Object d04 = d0();
                    if (d04 instanceof ms.r) {
                        rVar = (ms.r) d04;
                    } else {
                        rVar = null;
                    }
                    if (rVar != null) {
                        th2 = rVar.f38943a;
                    }
                    gVar.w(th2);
                    return e1.f38918d;
                }
            }
        }
    }

    @Override // kotlinx.coroutines.Job
    public boolean a() {
        Object d02 = d0();
        if ((d02 instanceof w0) && ((w0) d02).a()) {
            return true;
        }
        return false;
    }

    public Job b0() {
        ms.n c02 = c0();
        if (c02 != null) {
            return c02.getParent();
        }
        return null;
    }

    public final ms.n c0() {
        return (ms.n) f35002e.get(this);
    }

    public final Object d0() {
        return f35001d.get(this);
    }

    protected boolean g0(Throwable th2) {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public final Sequence getChildren() {
        return kotlin.sequences.k.b(new d(null));
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public final CoroutineContext.b getKey() {
        return Job.f34997h;
    }

    @Override // kotlinx.coroutines.Job
    public void h(CancellationException cancellationException) {
        if (cancellationException == null) {
            cancellationException = new y0(M(), null, this);
        }
        I(cancellationException);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void i0(Job job) {
        if (job == null) {
            A0(e1.f38918d);
            return;
        }
        job.start();
        ms.n Z0 = job.Z0(this);
        A0(Z0);
        if (isCompleted()) {
            Z0.dispose();
            A0(e1.f38918d);
        }
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCancelled() {
        Object d02 = d0();
        if (!(d02 instanceof ms.r)) {
            if (!(d02 instanceof c) || !((c) d02).j()) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCompleted() {
        return !(d0() instanceof w0);
    }

    public final n0 j0(boolean z10, z0 z0Var) {
        boolean z11;
        Throwable th2;
        ms.r rVar;
        boolean c10;
        c cVar;
        Throwable th3;
        z0Var.x(this);
        while (true) {
            Object d02 = d0();
            z11 = true;
            th2 = null;
            if (d02 instanceof p) {
                p pVar = (p) d02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f35001d, this, d02, z0Var)) {
                        break;
                    }
                } else {
                    x0(pVar);
                }
            } else if (d02 instanceof w0) {
                w0 w0Var = (w0) d02;
                d1 b10 = w0Var.b();
                if (b10 == null) {
                    Intrinsics.checkNotNull(d02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                    y0((z0) d02);
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
                            return e1.f38918d;
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
            Object d03 = d0();
            if (d03 instanceof ms.r) {
                rVar = (ms.r) d03;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                th2 = rVar.f38943a;
            }
            z0Var.w(th2);
        }
        return e1.f38918d;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element k(CoroutineContext.b bVar) {
        return Job.a.c(this, bVar);
    }

    protected boolean k0() {
        return false;
    }

    public final boolean o0(Object obj) {
        Object M0;
        rs.e0 e0Var;
        rs.e0 e0Var2;
        do {
            M0 = M0(d0(), obj);
            e0Var = c0.f35018a;
            if (M0 == e0Var) {
                return false;
            }
            if (M0 != c0.f35019b) {
                e0Var2 = c0.f35020c;
            } else {
                return true;
            }
        } while (M0 == e0Var2);
        C(M0);
        return true;
    }

    public final Object p0(Object obj) {
        Object M0;
        rs.e0 e0Var;
        rs.e0 e0Var2;
        do {
            M0 = M0(d0(), obj);
            e0Var = c0.f35018a;
            if (M0 != e0Var) {
                e0Var2 = c0.f35020c;
            } else {
                throw new IllegalStateException("Job " + this + " is already complete or completing, but is being completed with " + obj, U(obj));
            }
        } while (M0 == e0Var2);
        return M0;
    }

    public String q0() {
        return ms.e0.a(this);
    }

    @Override // kotlinx.coroutines.Job
    public final boolean start() {
        int B0;
        do {
            B0 = B0(d0());
            if (B0 == 0) {
                return false;
            }
        } while (B0 != 1);
        return true;
    }

    public String toString() {
        return H0() + '@' + ms.e0.b(this);
    }

    protected void u0(Throwable th2) {
    }

    protected void v0(Object obj) {
    }

    protected void w0() {
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return Job.a.d(this, bVar);
    }

    @Override // ms.o
    public final void y1(g1 g1Var) {
        H(g1Var);
    }

    public final void z0(z0 z0Var) {
        Object d02;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater;
        p pVar;
        do {
            d02 = d0();
            if (d02 instanceof z0) {
                if (d02 == z0Var) {
                    atomicReferenceFieldUpdater = f35001d;
                    pVar = c0.f35024g;
                } else {
                    return;
                }
            } else if ((d02 instanceof w0) && ((w0) d02).b() != null) {
                z0Var.r();
                return;
            } else {
                return;
            }
        } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, d02, pVar));
    }

    public void h0(Throwable th2) {
        throw th2;
    }
}
