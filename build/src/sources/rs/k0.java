package rs;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k0 extends ss.b implements MutableStateFlow, c, ss.q {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f49344q = AtomicReferenceFieldUpdater.newUpdater(k0.class, Object.class, "_state$volatile");
    private volatile /* synthetic */ Object _state$volatile;

    /* renamed from: p  reason: collision with root package name */
    private int f49345p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f49346d;

        /* renamed from: e  reason: collision with root package name */
        Object f49347e;

        /* renamed from: i  reason: collision with root package name */
        Object f49348i;

        /* renamed from: o  reason: collision with root package name */
        Object f49349o;

        /* renamed from: p  reason: collision with root package name */
        Object f49350p;

        /* renamed from: q  reason: collision with root package name */
        /* synthetic */ Object f49351q;

        /* renamed from: s  reason: collision with root package name */
        int f49353s;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f49351q = obj;
            this.f49353s |= Integer.MIN_VALUE;
            return k0.this.collect(null, this);
        }
    }

    public k0(Object obj) {
        this._state$volatile = obj;
    }

    private final boolean q(Object obj, Object obj2) {
        int i10;
        ss.d[] m10;
        synchronized (this) {
            Object obj3 = f49344q.get(this);
            if (obj != null && !Intrinsics.areEqual(obj3, obj)) {
                return false;
            }
            if (Intrinsics.areEqual(obj3, obj2)) {
                return true;
            }
            f49344q.set(this, obj2);
            int i11 = this.f49345p;
            if ((i11 & 1) == 0) {
                int i12 = i11 + 1;
                this.f49345p = i12;
                ss.d[] m11 = m();
                Unit unit = Unit.f32056a;
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
                        i10 = this.f49345p;
                        if (i10 == i12) {
                            this.f49345p = i12 + 1;
                            return true;
                        }
                        m10 = m();
                        Unit unit2 = Unit.f32056a;
                    }
                    m11 = m10;
                    i12 = i10;
                }
            } else {
                this.f49345p = i11 + 2;
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
        if (((rs.n0) r11).a(r0) == r1) goto L24;
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
    /* JADX WARN: Type inference failed for: r6v2, types: [ss.d] */
    /* JADX WARN: Type inference failed for: r6v7, types: [java.lang.Object] */
    /* JADX WARN: Type inference failed for: r8v1, types: [ss.b] */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:51:0x00e0 -> B:36:0x00ac). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:53:0x00f2 -> B:36:0x00ac). Please submit an issue!!! */
    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r11, kotlin.coroutines.Continuation r12) {
        /*
            Method dump skipped, instructions count: 249
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: rs.k0.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow, kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        setValue(obj);
        return Unit.f32056a;
    }

    @Override // ss.q
    public Flow f(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        return l0.d(this, coroutineContext, i10, aVar);
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow
    public boolean g(Object obj, Object obj2) {
        if (obj == null) {
            obj = ss.t.f50147a;
        }
        if (obj2 == null) {
            obj2 = ss.t.f50147a;
        }
        return q(obj, obj2);
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow, rs.j0
    public Object getValue() {
        ts.e0 e0Var = ss.t.f50147a;
        Object obj = f49344q.get(this);
        if (obj == e0Var) {
            return null;
        }
        return obj;
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow
    public void i() {
        throw new UnsupportedOperationException("MutableStateFlow.resetReplayCache is not supported");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ss.b
    /* renamed from: n */
    public m0 h() {
        return new m0();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ss.b
    /* renamed from: o */
    public m0[] j(int i10) {
        return new m0[i10];
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow
    public void setValue(Object obj) {
        if (obj == null) {
            obj = ss.t.f50147a;
        }
        q(null, obj);
    }
}
