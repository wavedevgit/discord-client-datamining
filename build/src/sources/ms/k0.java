package ms;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k0 extends ns.b implements MutableStateFlow, c, ns.q {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f39198q = AtomicReferenceFieldUpdater.newUpdater(k0.class, Object.class, "_state$volatile");
    private volatile /* synthetic */ Object _state$volatile;

    /* renamed from: p  reason: collision with root package name */
    private int f39199p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f39200d;

        /* renamed from: e  reason: collision with root package name */
        Object f39201e;

        /* renamed from: i  reason: collision with root package name */
        Object f39202i;

        /* renamed from: o  reason: collision with root package name */
        Object f39203o;

        /* renamed from: p  reason: collision with root package name */
        Object f39204p;

        /* renamed from: q  reason: collision with root package name */
        /* synthetic */ Object f39205q;

        /* renamed from: s  reason: collision with root package name */
        int f39207s;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f39205q = obj;
            this.f39207s |= Integer.MIN_VALUE;
            return k0.this.collect(null, this);
        }
    }

    public k0(Object obj) {
        this._state$volatile = obj;
    }

    private final boolean q(Object obj, Object obj2) {
        int i10;
        ns.d[] m10;
        synchronized (this) {
            Object obj3 = f39198q.get(this);
            if (obj != null && !Intrinsics.areEqual(obj3, obj)) {
                return false;
            }
            if (Intrinsics.areEqual(obj3, obj2)) {
                return true;
            }
            f39198q.set(this, obj2);
            int i11 = this.f39199p;
            if ((i11 & 1) == 0) {
                int i12 = i11 + 1;
                this.f39199p = i12;
                ns.d[] m11 = m();
                Unit unit = Unit.f32464a;
                while (true) {
                    m0[] m0VarArr = (m0[]) m11;
                    if (m0VarArr != null) {
                        for (m0 m0Var : m0VarArr) {
                            if (m0Var != null) {
                                m0Var.g();
                            }
                        }
                    }
                    synchronized (this) {
                        i10 = this.f39199p;
                        if (i10 == i12) {
                            this.f39199p = i12 + 1;
                            return true;
                        }
                        m10 = m();
                        Unit unit2 = Unit.f32464a;
                    }
                    m11 = m10;
                    i12 = i10;
                }
            } else {
                this.f39199p = i11 + 2;
                return true;
            }
        }
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow
    public boolean b(Object obj) {
        setValue(obj);
        return true;
    }

    /* JADX WARN: Code restructure failed: missing block: B:30:0x0093, code lost:
        if (((ms.n0) r11).a(r0) == r1) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x00bf, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r11, r12) == false) goto L26;
     */
    /* JADX WARN: Code restructure failed: missing block: B:53:0x00f2, code lost:
        if (r12 == r1) goto L24;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0026  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0077  */
    /* JADX WARN: Removed duplicated region for block: B:38:0x00b6 A[Catch: all -> 0x0043, TryCatch #0 {all -> 0x0043, blocks: (B:14:0x003e, B:36:0x00ac, B:38:0x00b6, B:40:0x00bb, B:50:0x00dc, B:52:0x00e2, B:42:0x00c1, B:46:0x00c8, B:21:0x0060, B:24:0x0073, B:35:0x009d), top: B:57:0x0024 }] */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00bb A[Catch: all -> 0x0043, TryCatch #0 {all -> 0x0043, blocks: (B:14:0x003e, B:36:0x00ac, B:38:0x00b6, B:40:0x00bb, B:50:0x00dc, B:52:0x00e2, B:42:0x00c1, B:46:0x00c8, B:21:0x0060, B:24:0x0073, B:35:0x009d), top: B:57:0x0024 }] */
    /* JADX WARN: Removed duplicated region for block: B:44:0x00c5  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x00c7  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x00da  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x00db  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x00e2 A[Catch: all -> 0x0043, TRY_LEAVE, TryCatch #0 {all -> 0x0043, blocks: (B:14:0x003e, B:36:0x00ac, B:38:0x00b6, B:40:0x00bb, B:50:0x00dc, B:52:0x00e2, B:42:0x00c1, B:46:0x00c8, B:21:0x0060, B:24:0x0073, B:35:0x009d), top: B:57:0x0024 }] */
    /* JADX WARN: Type inference failed for: r6v0 */
    /* JADX WARN: Type inference failed for: r6v1 */
    /* JADX WARN: Type inference failed for: r6v14 */
    /* JADX WARN: Type inference failed for: r6v15 */
    /* JADX WARN: Type inference failed for: r6v16 */
    /* JADX WARN: Type inference failed for: r6v17 */
    /* JADX WARN: Type inference failed for: r6v2, types: [ns.d] */
    /* JADX WARN: Type inference failed for: r6v7, types: [java.lang.Object] */
    /* JADX WARN: Type inference failed for: r8v1, types: [ns.b] */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:51:0x00e0 -> B:36:0x00ac). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:53:0x00f2 -> B:36:0x00ac). Please submit an issue!!! */
    @Override // ms.a0, kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r11, kotlin.coroutines.Continuation r12) {
        /*
            Method dump skipped, instructions count: 249
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.k0.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // ns.q
    public Flow e(CoroutineContext coroutineContext, int i10, ls.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow, kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        setValue(obj);
        return Unit.f32464a;
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow, ms.j0
    public Object getValue() {
        os.e0 e0Var = ns.t.f42015a;
        Object obj = f39198q.get(this);
        if (obj == e0Var) {
            return null;
        }
        return obj;
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow
    public boolean h(Object obj, Object obj2) {
        if (obj == null) {
            obj = ns.t.f42015a;
        }
        if (obj2 == null) {
            obj2 = ns.t.f42015a;
        }
        return q(obj, obj2);
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow
    public void i() {
        throw new UnsupportedOperationException("MutableStateFlow.resetReplayCache is not supported");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ns.b
    /* renamed from: n */
    public m0 g() {
        return new m0();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ns.b
    /* renamed from: o */
    public m0[] j(int i10) {
        return new m0[i10];
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow
    public void setValue(Object obj) {
        if (obj == null) {
            obj = ns.t.f42015a;
        }
        q(null, obj);
    }
}
