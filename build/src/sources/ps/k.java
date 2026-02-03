package ps;

import hs.n0;
import hs.w1;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import ms.b0;
import ms.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements kotlinx.coroutines.d, d, l, w1 {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f46445q = AtomicReferenceFieldUpdater.newUpdater(k.class, Object.class, "state$volatile");

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f46446d;

    /* renamed from: e  reason: collision with root package name */
    private List f46447e;

    /* renamed from: i  reason: collision with root package name */
    private Object f46448i;

    /* renamed from: o  reason: collision with root package name */
    private int f46449o;

    /* renamed from: p  reason: collision with root package name */
    private Object f46450p;
    private volatile /* synthetic */ Object state$volatile;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Object f46451a;

        /* renamed from: b  reason: collision with root package name */
        private final Function3 f46452b;

        /* renamed from: c  reason: collision with root package name */
        private final Function3 f46453c;

        /* renamed from: d  reason: collision with root package name */
        private final Object f46454d;

        /* renamed from: e  reason: collision with root package name */
        private final Object f46455e;

        /* renamed from: f  reason: collision with root package name */
        public final Function3 f46456f;

        /* renamed from: g  reason: collision with root package name */
        public Object f46457g;

        /* renamed from: h  reason: collision with root package name */
        public int f46458h = -1;

        public a(Object obj, Function3 function3, Function3 function32, Object obj2, Object obj3, Function3 function33) {
            this.f46451a = obj;
            this.f46452b = function3;
            this.f46453c = function32;
            this.f46454d = obj2;
            this.f46455e = obj3;
            this.f46456f = function33;
        }

        public final Function3 a(l lVar, Object obj) {
            Function3 function3 = this.f46456f;
            if (function3 != null) {
                return (Function3) function3.invoke(lVar, this.f46454d, obj);
            }
            return null;
        }

        public final void b() {
            Object obj = this.f46457g;
            k kVar = k.this;
            n0 n0Var = null;
            if (obj instanceof b0) {
                ((b0) obj).s(this.f46458h, null, kVar.getContext());
                return;
            }
            if (obj instanceof n0) {
                n0Var = (n0) obj;
            }
            if (n0Var != null) {
                n0Var.dispose();
            }
        }

        public final Object c(Object obj, Continuation continuation) {
            Object obj2 = this.f46455e;
            if (this.f46454d == m.i()) {
                Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.coroutines.SuspendFunction0<R of kotlinx.coroutines.selects.SelectImplementation>");
                return ((Function1) obj2).invoke(continuation);
            }
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.coroutines.SuspendFunction1<kotlin.Any?, R of kotlinx.coroutines.selects.SelectImplementation>");
            return ((Function2) obj2).invoke(obj, continuation);
        }

        public final Object d(Object obj) {
            return this.f46453c.invoke(this.f46451a, this.f46454d, obj);
        }

        public final boolean e(k kVar) {
            e0 e0Var;
            this.f46452b.invoke(this.f46451a, kVar, this.f46454d);
            Object obj = kVar.f46450p;
            e0Var = m.f46468e;
            if (obj == e0Var) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f46460d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f46461e;

        /* renamed from: o  reason: collision with root package name */
        int f46463o;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46461e = obj;
            this.f46463o |= Integer.MIN_VALUE;
            return k.this.q(this);
        }
    }

    public k(CoroutineContext coroutineContext) {
        e0 e0Var;
        e0 e0Var2;
        this.f46446d = coroutineContext;
        e0Var = m.f46465b;
        this.state$volatile = e0Var;
        this.f46447e = new ArrayList(2);
        this.f46449o = -1;
        e0Var2 = m.f46468e;
        this.f46450p = e0Var2;
    }

    private final void k(Object obj) {
        List list = this.f46447e;
        Intrinsics.checkNotNull(list);
        List<a> list2 = list;
        if ((list2 instanceof Collection) && list2.isEmpty()) {
            return;
        }
        for (a aVar : list2) {
            if (aVar.f46451a == obj) {
                throw new IllegalStateException(("Cannot use select clauses on the same object: " + obj).toString());
            }
        }
    }

    private final void l(a aVar) {
        e0 e0Var;
        e0 e0Var2;
        List<a> list = this.f46447e;
        if (list == null) {
            return;
        }
        for (a aVar2 : list) {
            if (aVar2 != aVar) {
                aVar2.b();
            }
        }
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f46445q;
        e0Var = m.f46466c;
        atomicReferenceFieldUpdater.set(this, e0Var);
        e0Var2 = m.f46468e;
        this.f46450p = e0Var2;
        this.f46447e = null;
    }

    private final Object m(Continuation continuation) {
        Object obj = f46445q.get(this);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.selects.SelectImplementation.ClauseData<R of kotlinx.coroutines.selects.SelectImplementation>");
        a aVar = (a) obj;
        Object obj2 = this.f46450p;
        l(aVar);
        return aVar.c(aVar.d(obj2), continuation);
    }

    static /* synthetic */ Object p(k kVar, Continuation continuation) {
        if (kVar.t()) {
            return kVar.m(continuation);
        }
        return kVar.q(continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x003c  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0056 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0057 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object q(kotlin.coroutines.Continuation r6) {
        /*
            r5 = this;
            boolean r0 = r6 instanceof ps.k.b
            if (r0 == 0) goto L13
            r0 = r6
            ps.k$b r0 = (ps.k.b) r0
            int r1 = r0.f46463o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46463o = r1
            goto L18
        L13:
            ps.k$b r0 = new ps.k$b
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f46461e
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46463o
            r3 = 2
            r4 = 1
            if (r2 == 0) goto L3c
            if (r2 == r4) goto L34
            if (r2 != r3) goto L2c
            kotlin.c.b(r6)
            return r6
        L2c:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r0)
            throw r6
        L34:
            java.lang.Object r2 = r0.f46460d
            ps.k r2 = (ps.k) r2
            kotlin.c.b(r6)
            goto L4b
        L3c:
            kotlin.c.b(r6)
            r0.f46460d = r5
            r0.f46463o = r4
            java.lang.Object r6 = r5.z(r0)
            if (r6 != r1) goto L4a
            goto L56
        L4a:
            r2 = r5
        L4b:
            r6 = 0
            r0.f46460d = r6
            r0.f46463o = r3
            java.lang.Object r6 = r2.m(r0)
            if (r6 != r1) goto L57
        L56:
            return r1
        L57:
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: ps.k.q(kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final a r(Object obj) {
        List list = this.f46447e;
        Object obj2 = null;
        if (list == null) {
            return null;
        }
        Iterator it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            Object next = it.next();
            if (((a) next).f46451a == obj) {
                obj2 = next;
                break;
            }
        }
        a aVar = (a) obj2;
        if (aVar != null) {
            return aVar;
        }
        throw new IllegalStateException(("Clause with object " + obj + " is not found").toString());
    }

    private final boolean t() {
        return f46445q.get(this) instanceof a;
    }

    public static /* synthetic */ void v(k kVar, a aVar, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            kVar.u(aVar, z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: register");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w(Object obj) {
        a r10 = r(obj);
        Intrinsics.checkNotNull(r10);
        r10.f46457g = null;
        r10.f46458h = -1;
        u(r10, true);
    }

    private final int y(Object obj, Object obj2) {
        boolean j10;
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        e0 e0Var4;
        while (true) {
            Object obj3 = f46445q.get(this);
            if (!(obj3 instanceof CancellableContinuation)) {
                e0Var2 = m.f46466c;
                if (!Intrinsics.areEqual(obj3, e0Var2) && !(obj3 instanceof a)) {
                    e0Var3 = m.f46467d;
                    if (!Intrinsics.areEqual(obj3, e0Var3)) {
                        e0Var4 = m.f46465b;
                        if (Intrinsics.areEqual(obj3, e0Var4)) {
                            if (androidx.concurrent.futures.b.a(f46445q, this, obj3, CollectionsKt.e(obj))) {
                                return 1;
                            }
                        } else if (obj3 instanceof List) {
                            if (androidx.concurrent.futures.b.a(f46445q, this, obj3, CollectionsKt.M0((Collection) obj3, obj))) {
                                return 1;
                            }
                        } else {
                            throw new IllegalStateException(("Unexpected state: " + obj3).toString());
                        }
                    } else {
                        return 2;
                    }
                } else {
                    return 3;
                }
            } else {
                a r10 = r(obj);
                if (r10 == null) {
                    continue;
                } else {
                    Function3 a10 = r10.a(this, obj2);
                    if (androidx.concurrent.futures.b.a(f46445q, this, obj3, r10)) {
                        this.f46450p = obj2;
                        j10 = m.j((CancellableContinuation) obj3, a10);
                        if (!j10) {
                            e0Var = m.f46468e;
                            this.f46450p = e0Var;
                            return 2;
                        }
                        return 0;
                    }
                }
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:19:0x0062, code lost:
        r0 = r0.B();
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x006a, code lost:
        if (r0 != pr.b.f()) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x006c, code lost:
        kotlin.coroutines.jvm.internal.g.c(r6);
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x0073, code lost:
        if (r0 != pr.b.f()) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0075, code lost:
        return r0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0078, code lost:
        return kotlin.Unit.f33074a;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object z(kotlin.coroutines.Continuation r6) {
        /*
            r5 = this;
            kotlinx.coroutines.e r0 = new kotlinx.coroutines.e
            kotlin.coroutines.Continuation r1 = pr.b.c(r6)
            r2 = 1
            r0.<init>(r1, r2)
            r0.H()
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r1 = i()
        L11:
            java.lang.Object r2 = r1.get(r5)
            ms.e0 r3 = ps.m.g()
            if (r2 != r3) goto L29
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r3 = i()
            boolean r2 = androidx.concurrent.futures.b.a(r3, r5, r2, r0)
            if (r2 == 0) goto L11
            hs.l.c(r0, r5)
            goto L62
        L29:
            boolean r3 = r2 instanceof java.util.List
            if (r3 == 0) goto L4f
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r3 = i()
            ms.e0 r4 = ps.m.g()
            boolean r3 = androidx.concurrent.futures.b.a(r3, r5, r2, r4)
            if (r3 == 0) goto L11
            java.lang.Iterable r2 = (java.lang.Iterable) r2
            java.util.Iterator r2 = r2.iterator()
        L41:
            boolean r3 = r2.hasNext()
            if (r3 == 0) goto L11
            java.lang.Object r3 = r2.next()
            j(r5, r3)
            goto L41
        L4f:
            boolean r1 = r2 instanceof ps.k.a
            if (r1 == 0) goto L79
            kotlin.Unit r1 = kotlin.Unit.f33074a
            ps.k$a r2 = (ps.k.a) r2
            java.lang.Object r3 = h(r5)
            kotlin.jvm.functions.Function3 r2 = r2.a(r5, r3)
            r0.p(r1, r2)
        L62:
            java.lang.Object r0 = r0.B()
            java.lang.Object r1 = pr.b.f()
            if (r0 != r1) goto L6f
            kotlin.coroutines.jvm.internal.g.c(r6)
        L6f:
            java.lang.Object r6 = pr.b.f()
            if (r0 != r6) goto L76
            return r0
        L76:
            kotlin.Unit r6 = kotlin.Unit.f33074a
            return r6
        L79:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "unexpected state: "
            r0.append(r1)
            r0.append(r2)
            java.lang.String r0 = r0.toString()
            java.lang.String r0 = r0.toString()
            r6.<init>(r0)
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: ps.k.z(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // kotlinx.coroutines.d
    public void a(Throwable th2) {
        Object obj;
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f46445q;
        do {
            obj = atomicReferenceFieldUpdater.get(this);
            e0Var = m.f46466c;
            if (obj != e0Var) {
                e0Var2 = m.f46467d;
            } else {
                return;
            }
        } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, obj, e0Var2));
        List<a> list = this.f46447e;
        if (list == null) {
            return;
        }
        for (a aVar : list) {
            aVar.b();
        }
        e0Var3 = m.f46468e;
        this.f46450p = e0Var3;
        this.f46447e = null;
    }

    @Override // hs.w1
    public void b(b0 b0Var, int i10) {
        this.f46448i = b0Var;
        this.f46449o = i10;
    }

    @Override // ps.l
    public void c(Object obj) {
        this.f46450p = obj;
    }

    @Override // ps.d
    public void d(f fVar, Function1 function1) {
        v(this, new a(fVar.d(), fVar.a(), fVar.c(), m.i(), function1, fVar.b()), false, 1, null);
    }

    @Override // ps.d
    public void e(h hVar, Function2 function2) {
        v(this, new a(hVar.d(), hVar.a(), hVar.c(), null, function2, hVar.b()), false, 1, null);
    }

    @Override // ps.l
    public boolean f(Object obj, Object obj2) {
        if (y(obj, obj2) == 0) {
            return true;
        }
        return false;
    }

    @Override // ps.l
    public CoroutineContext getContext() {
        return this.f46446d;
    }

    public void n(n0 n0Var) {
        this.f46448i = n0Var;
    }

    public Object o(Continuation continuation) {
        return p(this, continuation);
    }

    public final void u(a aVar, boolean z10) {
        if (f46445q.get(this) instanceof a) {
            return;
        }
        if (!z10) {
            k(aVar.f46451a);
        }
        if (aVar.e(this)) {
            if (!z10) {
                List list = this.f46447e;
                Intrinsics.checkNotNull(list);
                list.add(aVar);
            }
            aVar.f46457g = this.f46448i;
            aVar.f46458h = this.f46449o;
            this.f46448i = null;
            this.f46449o = -1;
            return;
        }
        f46445q.set(this, aVar);
    }

    public final o x(Object obj, Object obj2) {
        o a10;
        a10 = m.a(y(obj, obj2));
        return a10;
    }
}
