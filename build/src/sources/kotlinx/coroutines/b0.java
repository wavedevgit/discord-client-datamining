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
import os.d1;
import os.e1;
import os.g1;
import os.n0;
import os.r1;
import os.w0;
import os.y0;
import os.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b0 implements Job, os.o, g1 {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35069d = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_state$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f35070e = AtomicReferenceFieldUpdater.newUpdater(b0.class, Object.class, "_parentHandle$volatile");
    private volatile /* synthetic */ Object _parentHandle$volatile;
    private volatile /* synthetic */ Object _state$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends e {

        /* renamed from: t  reason: collision with root package name */
        private final b0 f35071t;

        public a(Continuation continuation, b0 b0Var) {
            super(continuation, 1);
            this.f35071t = b0Var;
        }

        @Override // kotlinx.coroutines.e
        protected String N() {
            return "AwaitContinuation";
        }

        @Override // kotlinx.coroutines.e
        public Throwable y(Job job) {
            Throwable f10;
            Object e02 = this.f35071t.e0();
            if ((e02 instanceof c) && (f10 = ((c) e02).f()) != null) {
                return f10;
            }
            if (e02 instanceof os.r) {
                return ((os.r) e02).f43573a;
            }
            return job.C();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends z0 {

        /* renamed from: p  reason: collision with root package name */
        private final b0 f35072p;

        /* renamed from: q  reason: collision with root package name */
        private final c f35073q;

        /* renamed from: r  reason: collision with root package name */
        private final g f35074r;

        /* renamed from: s  reason: collision with root package name */
        private final Object f35075s;

        public b(b0 b0Var, c cVar, g gVar, Object obj) {
            this.f35072p = b0Var;
            this.f35073q = cVar;
            this.f35074r = gVar;
            this.f35075s = obj;
        }

        @Override // os.z0
        public boolean v() {
            return false;
        }

        @Override // os.z0
        public void w(Throwable th2) {
            this.f35072p.T(this.f35073q, this.f35074r, this.f35075s);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements w0 {

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ AtomicIntegerFieldUpdater f35076e = AtomicIntegerFieldUpdater.newUpdater(c.class, "_isCompleting$volatile");

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f35077i = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_rootCause$volatile");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f35078o = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_exceptionsHolder$volatile");
        private volatile /* synthetic */ Object _exceptionsHolder$volatile;
        private volatile /* synthetic */ int _isCompleting$volatile;
        private volatile /* synthetic */ Object _rootCause$volatile;

        /* renamed from: d  reason: collision with root package name */
        private final d1 f35079d;

        public c(d1 d1Var, boolean z10, Throwable th2) {
            this.f35079d = d1Var;
            this._isCompleting$volatile = z10 ? 1 : 0;
            this._rootCause$volatile = th2;
        }

        private final ArrayList d() {
            return new ArrayList(4);
        }

        private final Object e() {
            return f35078o.get(this);
        }

        private final void o(Object obj) {
            f35078o.set(this, obj);
        }

        @Override // os.w0
        public boolean a() {
            if (f() == null) {
                return true;
            }
            return false;
        }

        @Override // os.w0
        public d1 b() {
            return this.f35079d;
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
            return (Throwable) f35077i.get(this);
        }

        public final boolean j() {
            if (f() != null) {
                return true;
            }
            return false;
        }

        public final boolean k() {
            if (f35076e.get(this) == 1) {
                return true;
            }
            return false;
        }

        public final boolean l() {
            ts.e0 e0Var;
            Object e10 = e();
            e0Var = c0.f35090e;
            if (e10 == e0Var) {
                return true;
            }
            return false;
        }

        public final List m(Throwable th2) {
            ArrayList arrayList;
            ts.e0 e0Var;
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
            e0Var = c0.f35090e;
            o(e0Var);
            return arrayList;
        }

        public final void n(boolean z10) {
            f35076e.set(this, z10 ? 1 : 0);
        }

        public final void p(Throwable th2) {
            f35077i.set(this, th2);
        }

        public String toString() {
            return "Finishing[cancelling=" + j() + ", completing=" + k() + ", rootCause=" + f() + ", exceptions=" + e() + ", list=" + b() + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f35080d;

        /* renamed from: e  reason: collision with root package name */
        Object f35081e;

        /* renamed from: i  reason: collision with root package name */
        int f35082i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f35083o;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f35083o = obj;
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
                java.lang.Object r0 = wr.b.f()
                int r1 = r5.f35082i
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L2a
                if (r1 == r3) goto L26
                if (r1 != r2) goto L1e
                java.lang.Object r1 = r5.f35081e
                ts.p r1 = (ts.p) r1
                java.lang.Object r3 = r5.f35080d
                ts.o r3 = (ts.o) r3
                java.lang.Object r4 = r5.f35083o
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
                java.lang.Object r6 = r5.f35083o
                kotlin.sequences.j r6 = (kotlin.sequences.j) r6
                kotlinx.coroutines.b0 r1 = kotlinx.coroutines.b0.this
                java.lang.Object r1 = r1.e0()
                boolean r4 = r1 instanceof kotlinx.coroutines.g
                if (r4 == 0) goto L48
                kotlinx.coroutines.g r1 = (kotlinx.coroutines.g) r1
                os.o r1 = r1.f35103p
                r5.f35082i = r3
                java.lang.Object r6 = r6.b(r1, r5)
                if (r6 != r0) goto L86
                goto L80
            L48:
                boolean r3 = r1 instanceof os.w0
                if (r3 == 0) goto L86
                os.w0 r1 = (os.w0) r1
                os.d1 r1 = r1.b()
                if (r1 == 0) goto L86
                java.lang.Object r3 = r1.k()
                java.lang.String r4 = "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode"
                kotlin.jvm.internal.Intrinsics.checkNotNull(r3, r4)
                ts.p r3 = (ts.p) r3
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
                os.o r6 = r6.f35103p
                r5.f35083o = r4
                r5.f35080d = r3
                r5.f35081e = r1
                r5.f35082i = r2
                java.lang.Object r6 = r4.b(r6, r5)
                if (r6 != r0) goto L81
            L80:
                return r0
            L81:
                ts.p r1 = r1.l()
                goto L63
            L86:
                kotlin.Unit r6 = kotlin.Unit.f32056a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlinx.coroutines.b0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((d) create(jVar, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public b0(boolean z10) {
        this._state$volatile = z10 ? c0.f35092g : c0.f35091f;
    }

    private final int C0(Object obj) {
        p pVar;
        if (obj instanceof p) {
            if (!((p) obj).a()) {
                AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f35069d;
                pVar = c0.f35092g;
                if (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, obj, pVar)) {
                    return -1;
                }
                x0();
                return 1;
            }
            return 0;
        } else if (!(obj instanceof u)) {
            return 0;
        } else {
            if (!androidx.concurrent.futures.b.a(f35069d, this, obj, ((u) obj).b())) {
                return -1;
            }
            x0();
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
        } else if (obj instanceof os.r) {
            return "Cancelled";
        } else {
            return "Completed";
        }
    }

    private final void E(Throwable th2, List list) {
        if (list.size() > 1) {
            Set newSetFromMap = Collections.newSetFromMap(new IdentityHashMap(list.size()));
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Throwable th3 = (Throwable) it.next();
                if (th3 != th2 && th3 != th2 && !(th3 instanceof CancellationException) && newSetFromMap.add(th3)) {
                    qr.e.a(th2, th3);
                }
            }
        }
    }

    public static /* synthetic */ CancellationException G0(b0 b0Var, Throwable th2, String str, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                str = null;
            }
            return b0Var.F0(th2, str);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: toCancellationException");
    }

    private final Object H(Continuation continuation) {
        a aVar = new a(wr.b.c(continuation), this);
        aVar.H();
        os.l.a(aVar, z.o(this, false, new e0(aVar), 1, null));
        Object B = aVar.B();
        if (B == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    private final boolean M0(w0 w0Var, Object obj) {
        if (!androidx.concurrent.futures.b.a(f35069d, this, w0Var, c0.g(obj))) {
            return false;
        }
        v0(null);
        w0(obj);
        S(w0Var, obj);
        return true;
    }

    private final Object N(Object obj) {
        ts.e0 e0Var;
        Object P0;
        ts.e0 e0Var2;
        do {
            Object e02 = e0();
            if (!(e02 instanceof w0) || ((e02 instanceof c) && ((c) e02).k())) {
                e0Var = c0.f35086a;
                return e0Var;
            }
            P0 = P0(e02, new os.r(U(obj), false, 2, null));
            e0Var2 = c0.f35088c;
        } while (P0 == e0Var2);
        return P0;
    }

    private final boolean N0(w0 w0Var, Throwable th2) {
        d1 b02 = b0(w0Var);
        if (b02 == null) {
            return false;
        }
        if (!androidx.concurrent.futures.b.a(f35069d, this, w0Var, new c(b02, false, th2))) {
            return false;
        }
        t0(b02, th2);
        return true;
    }

    private final boolean O(Throwable th2) {
        if (l0()) {
            return true;
        }
        boolean z10 = th2 instanceof CancellationException;
        os.n d02 = d0();
        if (d02 != null && d02 != e1.f43548d) {
            if (d02.d(th2) || z10) {
                return true;
            }
            return false;
        }
        return z10;
    }

    private final Object P0(Object obj, Object obj2) {
        ts.e0 e0Var;
        ts.e0 e0Var2;
        if (!(obj instanceof w0)) {
            e0Var2 = c0.f35086a;
            return e0Var2;
        } else if (((obj instanceof p) || (obj instanceof z0)) && !(obj instanceof g) && !(obj2 instanceof os.r)) {
            if (!M0((w0) obj, obj2)) {
                e0Var = c0.f35088c;
                return e0Var;
            }
            return obj2;
        } else {
            return Q0((w0) obj, obj2);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v0 */
    /* JADX WARN: Type inference failed for: r2v1, types: [java.lang.Throwable, T] */
    /* JADX WARN: Type inference failed for: r2v2 */
    private final Object Q0(w0 w0Var, Object obj) {
        c cVar;
        os.r rVar;
        ts.e0 e0Var;
        ts.e0 e0Var2;
        ts.e0 e0Var3;
        d1 b02 = b0(w0Var);
        if (b02 == null) {
            e0Var3 = c0.f35088c;
            return e0Var3;
        }
        ?? r22 = 0;
        if (w0Var instanceof c) {
            cVar = (c) w0Var;
        } else {
            cVar = null;
        }
        if (cVar == null) {
            cVar = new c(b02, false, null);
        }
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        synchronized (cVar) {
            if (cVar.k()) {
                e0Var2 = c0.f35086a;
                return e0Var2;
            }
            cVar.n(true);
            if (cVar != w0Var && !androidx.concurrent.futures.b.a(f35069d, this, w0Var, cVar)) {
                e0Var = c0.f35088c;
                return e0Var;
            }
            boolean j10 = cVar.j();
            if (obj instanceof os.r) {
                rVar = (os.r) obj;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                cVar.c(rVar.f43573a);
            }
            Throwable f10 = cVar.f();
            if (!j10) {
                r22 = f10;
            }
            objectRef.element = r22;
            Unit unit = Unit.f32056a;
            if (r22 != 0) {
                t0(b02, r22);
            }
            g s02 = s0(b02);
            if (s02 != null && R0(cVar, s02, obj)) {
                return c0.f35087b;
            }
            b02.g(2);
            g s03 = s0(b02);
            if (s03 != null && R0(cVar, s03, obj)) {
                return c0.f35087b;
            }
            return V(cVar, obj);
        }
    }

    private final boolean R0(c cVar, g gVar, Object obj) {
        while (z.n(gVar.f35103p, false, new b(this, cVar, gVar, obj)) == e1.f43548d) {
            gVar = s0(gVar);
            if (gVar == null) {
                return false;
            }
        }
        return true;
    }

    private final void S(w0 w0Var, Object obj) {
        os.r rVar;
        os.n d02 = d0();
        if (d02 != null) {
            d02.dispose();
            B0(e1.f43548d);
        }
        Throwable th2 = null;
        if (obj instanceof os.r) {
            rVar = (os.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f43573a;
        }
        if (w0Var instanceof z0) {
            try {
                ((z0) w0Var).w(th2);
                return;
            } catch (Throwable th3) {
                i0(new os.s("Exception in completion handler " + w0Var + " for " + this, th3));
                return;
            }
        }
        d1 b10 = w0Var.b();
        if (b10 != null) {
            u0(b10, th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void T(c cVar, g gVar, Object obj) {
        g s02 = s0(gVar);
        if (s02 == null || !R0(cVar, s02, obj)) {
            cVar.b().g(2);
            g s03 = s0(gVar);
            if (s03 != null && R0(cVar, s03, obj)) {
                return;
            }
            F(V(cVar, obj));
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
                return new y0(Q(), null, this);
            }
            return th2;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.ParentJob");
        return ((g1) obj).O0();
    }

    private final Object V(c cVar, Object obj) {
        os.r rVar;
        Throwable th2;
        boolean j10;
        Throwable Y;
        if (obj instanceof os.r) {
            rVar = (os.r) obj;
        } else {
            rVar = null;
        }
        if (rVar != null) {
            th2 = rVar.f43573a;
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
            obj = new os.r(Y, false, 2, null);
        }
        if (Y != null && (O(Y) || h0(Y))) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CompletedExceptionally");
            ((os.r) obj).c();
        }
        if (!j10) {
            v0(Y);
        }
        w0(obj);
        androidx.concurrent.futures.b.a(f35069d, this, cVar, c0.g(obj));
        S(cVar, obj);
        return obj;
    }

    private final Throwable X(Object obj) {
        os.r rVar;
        if (obj instanceof os.r) {
            rVar = (os.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f43573a;
    }

    private final Throwable Y(c cVar, List list) {
        Object obj;
        Object obj2 = null;
        if (list.isEmpty()) {
            if (!cVar.j()) {
                return null;
            }
            return new y0(Q(), null, this);
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

    private final d1 b0(w0 w0Var) {
        d1 b10 = w0Var.b();
        if (b10 == null) {
            if (w0Var instanceof p) {
                return new d1();
            }
            if (w0Var instanceof z0) {
                z0((z0) w0Var);
                return null;
            }
            throw new IllegalStateException(("State should have list: " + w0Var).toString());
        }
        return b10;
    }

    private final boolean m0() {
        Object e02;
        do {
            e02 = e0();
            if (!(e02 instanceof w0)) {
                return false;
            }
        } while (C0(e02) < 0);
        return true;
    }

    private final Object n0(Continuation continuation) {
        e eVar = new e(wr.b.c(continuation), 1);
        eVar.H();
        os.l.a(eVar, z.o(this, false, new f0(eVar), 1, null));
        Object B = eVar.B();
        if (B == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == wr.b.f()) {
            return B;
        }
        return Unit.f32056a;
    }

    private final Object o0(Object obj) {
        ts.e0 e0Var;
        ts.e0 e0Var2;
        ts.e0 e0Var3;
        ts.e0 e0Var4;
        ts.e0 e0Var5;
        ts.e0 e0Var6;
        Throwable th2 = null;
        Throwable th3 = null;
        while (true) {
            Object e02 = e0();
            if (e02 instanceof c) {
                synchronized (e02) {
                    if (((c) e02).l()) {
                        e0Var2 = c0.f35089d;
                        return e0Var2;
                    }
                    boolean j10 = ((c) e02).j();
                    if (obj != null || !j10) {
                        if (th3 == null) {
                            th3 = U(obj);
                        }
                        ((c) e02).c(th3);
                    }
                    Throwable f10 = ((c) e02).f();
                    if (!j10) {
                        th2 = f10;
                    }
                    if (th2 != null) {
                        t0(((c) e02).b(), th2);
                    }
                    e0Var = c0.f35086a;
                    return e0Var;
                }
            } else if (!(e02 instanceof w0)) {
                e0Var3 = c0.f35089d;
                return e0Var3;
            } else {
                if (th3 == null) {
                    th3 = U(obj);
                }
                w0 w0Var = (w0) e02;
                if (w0Var.a()) {
                    if (N0(w0Var, th3)) {
                        e0Var4 = c0.f35086a;
                        return e0Var4;
                    }
                } else {
                    Object P0 = P0(e02, new os.r(th3, false, 2, null));
                    e0Var5 = c0.f35086a;
                    if (P0 != e0Var5) {
                        e0Var6 = c0.f35088c;
                        if (P0 != e0Var6) {
                            return P0;
                        }
                    } else {
                        throw new IllegalStateException(("Cannot happen in " + e02).toString());
                    }
                }
            }
        }
    }

    private final g s0(ts.p pVar) {
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

    private final void t0(d1 d1Var, Throwable th2) {
        v0(th2);
        d1Var.g(4);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        os.s sVar = null;
        for (ts.p pVar = (ts.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if ((pVar instanceof z0) && ((z0) pVar).v()) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        qr.e.a(sVar, th3);
                    } else {
                        sVar = new os.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f32056a;
                    }
                }
            }
        }
        if (sVar != null) {
            i0(sVar);
        }
        O(th2);
    }

    private final void u0(d1 d1Var, Throwable th2) {
        d1Var.g(1);
        Object k10 = d1Var.k();
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        os.s sVar = null;
        for (ts.p pVar = (ts.p) k10; !Intrinsics.areEqual(pVar, d1Var); pVar = pVar.l()) {
            if (pVar instanceof z0) {
                try {
                    ((z0) pVar).w(th2);
                } catch (Throwable th3) {
                    if (sVar != null) {
                        qr.e.a(sVar, th3);
                    } else {
                        sVar = new os.s("Exception in completion handler " + pVar + " for " + this, th3);
                        Unit unit = Unit.f32056a;
                    }
                }
            }
        }
        if (sVar != null) {
            i0(sVar);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v2, types: [kotlinx.coroutines.u] */
    private final void y0(p pVar) {
        d1 d1Var = new d1();
        if (!pVar.a()) {
            d1Var = new u(d1Var);
        }
        androidx.concurrent.futures.b.a(f35069d, this, pVar, d1Var);
    }

    private final void z0(z0 z0Var) {
        z0Var.f(new d1());
        androidx.concurrent.futures.b.a(f35069d, this, z0Var, z0Var.l());
    }

    public final void A0(z0 z0Var) {
        Object e02;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater;
        p pVar;
        do {
            e02 = e0();
            if (e02 instanceof z0) {
                if (e02 == z0Var) {
                    atomicReferenceFieldUpdater = f35069d;
                    pVar = c0.f35092g;
                } else {
                    return;
                }
            } else if ((e02 instanceof w0) && ((w0) e02).b() != null) {
                z0Var.r();
                return;
            } else {
                return;
            }
        } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, e02, pVar));
    }

    public final void B0(os.n nVar) {
        f35070e.set(this, nVar);
    }

    @Override // kotlinx.coroutines.Job
    public final CancellationException C() {
        Object e02 = e0();
        if (e02 instanceof c) {
            Throwable f10 = ((c) e02).f();
            if (f10 != null) {
                CancellationException F0 = F0(f10, os.e0.a(this) + " is cancelling");
                if (F0 != null) {
                    return F0;
                }
            }
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        } else if (!(e02 instanceof w0)) {
            if (e02 instanceof os.r) {
                return G0(this, ((os.r) e02).f43573a, null, 1, null);
            }
            return new y0(os.e0.a(this) + " has completed normally", null, this);
        } else {
            throw new IllegalStateException(("Job is still new or active: " + this).toString());
        }
    }

    @Override // kotlinx.coroutines.Job
    public final os.n E0(os.o oVar) {
        os.r rVar;
        os.r rVar2;
        g gVar = new g(oVar);
        gVar.x(this);
        while (true) {
            Object e02 = e0();
            if (e02 instanceof p) {
                p pVar = (p) e02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f35069d, this, e02, gVar)) {
                        return gVar;
                    }
                } else {
                    y0(pVar);
                }
            } else {
                Throwable th2 = null;
                if (e02 instanceof w0) {
                    d1 b10 = ((w0) e02).b();
                    if (b10 == null) {
                        Intrinsics.checkNotNull(e02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                        z0((z0) e02);
                    } else {
                        if (!b10.c(gVar, 7)) {
                            boolean c10 = b10.c(gVar, 3);
                            Object e03 = e0();
                            if (e03 instanceof c) {
                                th2 = ((c) e03).f();
                            } else {
                                if (e03 instanceof os.r) {
                                    rVar2 = (os.r) e03;
                                } else {
                                    rVar2 = null;
                                }
                                if (rVar2 != null) {
                                    th2 = rVar2.f43573a;
                                }
                            }
                            gVar.w(th2);
                            if (!c10) {
                                return e1.f43548d;
                            }
                        }
                        return gVar;
                    }
                } else {
                    Object e04 = e0();
                    if (e04 instanceof os.r) {
                        rVar = (os.r) e04;
                    } else {
                        rVar = null;
                    }
                    if (rVar != null) {
                        th2 = rVar.f43573a;
                    }
                    gVar.w(th2);
                    return e1.f43548d;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void F(Object obj) {
    }

    protected final CancellationException F0(Throwable th2, String str) {
        CancellationException cancellationException;
        if (th2 instanceof CancellationException) {
            cancellationException = (CancellationException) th2;
        } else {
            cancellationException = null;
        }
        if (cancellationException == null) {
            if (str == null) {
                str = Q();
            }
            cancellationException = new y0(str, th2, this);
        }
        return cancellationException;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object G(Continuation continuation) {
        Object e02;
        do {
            e02 = e0();
            if (!(e02 instanceof w0)) {
                if (!(e02 instanceof os.r)) {
                    return c0.h(e02);
                }
                throw ((os.r) e02).f43573a;
            }
        } while (C0(e02) < 0);
        return H(continuation);
    }

    public final String H0() {
        return r0() + '{' + D0(e0()) + '}';
    }

    public final boolean K(Throwable th2) {
        return L(th2);
    }

    @Override // os.o
    public final void K0(g1 g1Var) {
        L(g1Var);
    }

    public final boolean L(Object obj) {
        Object obj2;
        ts.e0 e0Var;
        ts.e0 e0Var2;
        ts.e0 e0Var3;
        obj2 = c0.f35086a;
        if (!a0() || (obj2 = N(obj)) != c0.f35087b) {
            e0Var = c0.f35086a;
            if (obj2 == e0Var) {
                obj2 = o0(obj);
            }
            e0Var2 = c0.f35086a;
            if (obj2 != e0Var2 && obj2 != c0.f35087b) {
                e0Var3 = c0.f35089d;
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

    public void M(Throwable th2) {
        L(th2);
    }

    @Override // os.g1
    public CancellationException O0() {
        Throwable th2;
        Object e02 = e0();
        CancellationException cancellationException = null;
        if (e02 instanceof c) {
            th2 = ((c) e02).f();
        } else if (e02 instanceof os.r) {
            th2 = ((os.r) e02).f43573a;
        } else if (!(e02 instanceof w0)) {
            th2 = null;
        } else {
            throw new IllegalStateException(("Cannot be cancelling child in this state: " + e02).toString());
        }
        if (th2 instanceof CancellationException) {
            cancellationException = th2;
        }
        if (cancellationException == null) {
            return new y0("Parent job is " + D0(e02), th2, this);
        }
        return cancellationException;
    }

    @Override // kotlinx.coroutines.Job
    public final n0 P(Function1 function1) {
        return k0(true, new x(function1));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String Q() {
        return "Job was cancelled";
    }

    public boolean R(Throwable th2) {
        if (th2 instanceof CancellationException) {
            return true;
        }
        if (L(th2) && Z()) {
            return true;
        }
        return false;
    }

    public final Object W() {
        Object e02 = e0();
        if (!(e02 instanceof w0)) {
            if (!(e02 instanceof os.r)) {
                return c0.h(e02);
            }
            throw ((os.r) e02).f43573a;
        }
        throw new IllegalStateException("This job has not completed yet");
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Y0(CoroutineContext coroutineContext) {
        return Job.a.e(this, coroutineContext);
    }

    public boolean Z() {
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public boolean a() {
        Object e02 = e0();
        if ((e02 instanceof w0) && ((w0) e02).a()) {
            return true;
        }
        return false;
    }

    public boolean a0() {
        return false;
    }

    public Job c0() {
        os.n d02 = d0();
        if (d02 != null) {
            return d02.getParent();
        }
        return null;
    }

    public final os.n d0() {
        return (os.n) f35070e.get(this);
    }

    @Override // kotlinx.coroutines.Job
    public final Object d1(Continuation continuation) {
        if (!m0()) {
            z.k(continuation.getContext());
            return Unit.f32056a;
        }
        Object n02 = n0(continuation);
        if (n02 == wr.b.f()) {
            return n02;
        }
        return Unit.f32056a;
    }

    public final Object e0() {
        return f35069d.get(this);
    }

    @Override // kotlinx.coroutines.Job
    public final Sequence getChildren() {
        return kotlin.sequences.k.b(new d(null));
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public final CoroutineContext.b getKey() {
        return Job.f35065h;
    }

    protected boolean h0(Throwable th2) {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCancelled() {
        Object e02 = e0();
        if (!(e02 instanceof os.r)) {
            if (!(e02 instanceof c) || !((c) e02).j()) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public final boolean isCompleted() {
        return !(e0() instanceof w0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void j0(Job job) {
        if (job == null) {
            B0(e1.f43548d);
            return;
        }
        job.start();
        os.n E0 = job.E0(this);
        B0(E0);
        if (isCompleted()) {
            E0.dispose();
            B0(e1.f43548d);
        }
    }

    @Override // kotlinx.coroutines.Job
    public void k(CancellationException cancellationException) {
        if (cancellationException == null) {
            cancellationException = new y0(Q(), null, this);
        }
        M(cancellationException);
    }

    public final n0 k0(boolean z10, z0 z0Var) {
        boolean z11;
        Throwable th2;
        os.r rVar;
        boolean c10;
        c cVar;
        Throwable th3;
        z0Var.x(this);
        while (true) {
            Object e02 = e0();
            z11 = true;
            th2 = null;
            if (e02 instanceof p) {
                p pVar = (p) e02;
                if (pVar.a()) {
                    if (androidx.concurrent.futures.b.a(f35069d, this, e02, z0Var)) {
                        break;
                    }
                } else {
                    y0(pVar);
                }
            } else if (e02 instanceof w0) {
                w0 w0Var = (w0) e02;
                d1 b10 = w0Var.b();
                if (b10 == null) {
                    Intrinsics.checkNotNull(e02, "null cannot be cast to non-null type kotlinx.coroutines.JobNode");
                    z0((z0) e02);
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
                            return e1.f43548d;
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
            Object e03 = e0();
            if (e03 instanceof os.r) {
                rVar = (os.r) e03;
            } else {
                rVar = null;
            }
            if (rVar != null) {
                th2 = rVar.f43573a;
            }
            z0Var.w(th2);
        }
        return e1.f43548d;
    }

    protected boolean l0() {
        return false;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return Job.a.c(this, bVar);
    }

    public final boolean p0(Object obj) {
        Object P0;
        ts.e0 e0Var;
        ts.e0 e0Var2;
        do {
            P0 = P0(e0(), obj);
            e0Var = c0.f35086a;
            if (P0 == e0Var) {
                return false;
            }
            if (P0 != c0.f35087b) {
                e0Var2 = c0.f35088c;
            } else {
                return true;
            }
        } while (P0 == e0Var2);
        F(P0);
        return true;
    }

    public final Object q0(Object obj) {
        Object P0;
        ts.e0 e0Var;
        ts.e0 e0Var2;
        do {
            P0 = P0(e0(), obj);
            e0Var = c0.f35086a;
            if (P0 != e0Var) {
                e0Var2 = c0.f35088c;
            } else {
                throw new IllegalStateException("Job " + this + " is already complete or completing, but is being completed with " + obj, X(obj));
            }
        } while (P0 == e0Var2);
        return P0;
    }

    public String r0() {
        return os.e0.a(this);
    }

    @Override // kotlinx.coroutines.Job
    public final boolean start() {
        int C0;
        do {
            C0 = C0(e0());
            if (C0 == 0) {
                return false;
            }
        } while (C0 != 1);
        return true;
    }

    public String toString() {
        return H0() + '@' + os.e0.b(this);
    }

    protected void v0(Throwable th2) {
    }

    protected void w0(Object obj) {
    }

    protected void x0() {
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return Job.a.d(this, bVar);
    }

    @Override // kotlinx.coroutines.Job
    public final n0 z(boolean z10, boolean z11, Function1 function1) {
        z0 xVar;
        if (z10) {
            xVar = new w(function1);
        } else {
            xVar = new x(function1);
        }
        return k0(z11, xVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object z1(Object obj, Function2 function2) {
        return Job.a.b(this, obj, function2);
    }

    public void i0(Throwable th2) {
        throw th2;
    }
}
