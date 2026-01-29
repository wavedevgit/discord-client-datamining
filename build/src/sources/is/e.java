package is;

import gs.w1;
import is.g;
import java.util.ArrayList;
import java.util.concurrent.CancellationException;
import java.util.concurrent.atomic.AtomicLongFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.reflect.KFunction;
import kotlinx.coroutines.CancellableContinuation;
import ls.b0;
import ls.c0;
import ls.d0;
import ls.e0;
import ls.q0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements is.g {

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f31136o = AtomicLongFieldUpdater.newUpdater(e.class, "sendersAndCloseStatus$volatile");

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f31137p = AtomicLongFieldUpdater.newUpdater(e.class, "receivers$volatile");

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f31138q = AtomicLongFieldUpdater.newUpdater(e.class, "bufferEnd$volatile");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicLongFieldUpdater f31139r = AtomicLongFieldUpdater.newUpdater(e.class, "completedExpandBuffersAndPauseFlag$volatile");

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f31140s = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "sendSegment$volatile");

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f31141t = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "receiveSegment$volatile");

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f31142u = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "bufferEndSegment$volatile");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f31143v = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "_closeCause$volatile");

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f31144w = AtomicReferenceFieldUpdater.newUpdater(e.class, Object.class, "closeHandler$volatile");
    private volatile /* synthetic */ Object _closeCause$volatile;
    private volatile /* synthetic */ long bufferEnd$volatile;
    private volatile /* synthetic */ Object bufferEndSegment$volatile;
    private volatile /* synthetic */ Object closeHandler$volatile;
    private volatile /* synthetic */ long completedExpandBuffersAndPauseFlag$volatile;

    /* renamed from: d  reason: collision with root package name */
    private final int f31145d;

    /* renamed from: e  reason: collision with root package name */
    public final Function1 f31146e;

    /* renamed from: i  reason: collision with root package name */
    private final Function3 f31147i;
    private volatile /* synthetic */ Object receiveSegment$volatile;
    private volatile /* synthetic */ long receivers$volatile;
    private volatile /* synthetic */ Object sendSegment$volatile;
    private volatile /* synthetic */ long sendersAndCloseStatus$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements is.i, w1 {

        /* renamed from: d  reason: collision with root package name */
        private Object f31148d;

        /* renamed from: e  reason: collision with root package name */
        private kotlinx.coroutines.e f31149e;

        public a() {
            e0 e0Var;
            e0Var = is.f.f31180p;
            this.f31148d = e0Var;
        }

        /* JADX WARN: Code restructure failed: missing block: B:38:0x00a4, code lost:
            if (r12 != null) goto L43;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final java.lang.Object f(is.m r10, int r11, long r12, kotlin.coroutines.Continuation r14) {
            /*
                r9 = this;
                is.e r0 = is.e.this
                kotlin.coroutines.Continuation r1 = or.b.c(r14)
                kotlinx.coroutines.e r6 = gs.l.b(r1)
                c(r9, r6)     // Catch: java.lang.Throwable -> Ld6
                r5 = r9
                r1 = r10
                r2 = r11
                r3 = r12
                java.lang.Object r10 = is.e.M(r0, r1, r2, r3, r5)     // Catch: java.lang.Throwable -> L20
                ls.e0 r11 = is.f.r()     // Catch: java.lang.Throwable -> L20
                if (r10 != r11) goto L24
                is.e.G(r0, r9, r1, r2)     // Catch: java.lang.Throwable -> L20
                goto Lc8
            L20:
                r0 = move-exception
            L21:
                r10 = r0
                goto Lda
            L24:
                ls.e0 r11 = is.f.h()     // Catch: java.lang.Throwable -> L20
                r12 = 1
                r13 = 0
                if (r10 != r11) goto Lb3
                long r10 = r0.s0()     // Catch: java.lang.Throwable -> L20
                int r10 = (r3 > r10 ? 1 : (r3 == r10 ? 0 : -1))
                if (r10 >= 0) goto L37
                r1.b()     // Catch: java.lang.Throwable -> L20
            L37:
                java.util.concurrent.atomic.AtomicReferenceFieldUpdater r10 = is.e.t()     // Catch: java.lang.Throwable -> L20
                java.lang.Object r10 = r10.get(r0)     // Catch: java.lang.Throwable -> L20
                is.m r10 = (is.m) r10     // Catch: java.lang.Throwable -> L20
            L41:
                boolean r11 = r0.i()     // Catch: java.lang.Throwable -> L20
                if (r11 == 0) goto L4c
                b(r9)     // Catch: java.lang.Throwable -> L20
                goto Lc8
            L4c:
                java.util.concurrent.atomic.AtomicLongFieldUpdater r11 = is.e.w()     // Catch: java.lang.Throwable -> L20
                long r3 = r11.getAndIncrement(r0)     // Catch: java.lang.Throwable -> L20
                int r11 = is.f.f31166b     // Catch: java.lang.Throwable -> L20
                long r1 = (long) r11     // Catch: java.lang.Throwable -> L20
                long r1 = r3 / r1
                long r7 = (long) r11     // Catch: java.lang.Throwable -> L20
                long r7 = r3 % r7
                int r11 = (int) r7     // Catch: java.lang.Throwable -> L20
                long r7 = r10.f37432i     // Catch: java.lang.Throwable -> L20
                int r7 = (r7 > r1 ? 1 : (r7 == r1 ? 0 : -1))
                if (r7 == 0) goto L6c
                is.m r1 = is.e.n(r0, r1, r10)     // Catch: java.lang.Throwable -> L20
                if (r1 != 0) goto L6a
                goto L41
            L6a:
                r2 = r11
                goto L6e
            L6c:
                r1 = r10
                goto L6a
            L6e:
                java.lang.Object r10 = is.e.M(r0, r1, r2, r3, r5)     // Catch: java.lang.Throwable -> L20
                ls.e0 r11 = is.f.r()     // Catch: java.lang.Throwable -> L20
                if (r10 != r11) goto L7c
                is.e.G(r0, r9, r1, r2)     // Catch: java.lang.Throwable -> L20
                goto Lc8
            L7c:
                ls.e0 r11 = is.f.h()     // Catch: java.lang.Throwable -> L20
                if (r10 != r11) goto L8f
                long r10 = r0.s0()     // Catch: java.lang.Throwable -> L20
                int r10 = (r3 > r10 ? 1 : (r3 == r10 ? 0 : -1))
                if (r10 >= 0) goto L8d
                r1.b()     // Catch: java.lang.Throwable -> L20
            L8d:
                r10 = r1
                goto L41
            L8f:
                ls.e0 r11 = is.f.s()     // Catch: java.lang.Throwable -> L20
                if (r10 == r11) goto Lab
                r1.b()     // Catch: java.lang.Throwable -> L20
                d(r9, r10)     // Catch: java.lang.Throwable -> L20
                c(r9, r13)     // Catch: java.lang.Throwable -> L20
                java.lang.Boolean r11 = kotlin.coroutines.jvm.internal.b.a(r12)     // Catch: java.lang.Throwable -> L20
                kotlin.jvm.functions.Function1 r12 = r0.f31146e     // Catch: java.lang.Throwable -> L20
                if (r12 == 0) goto Lc5
            La6:
                kotlin.jvm.functions.Function3 r13 = is.e.f(r0, r12, r10)     // Catch: java.lang.Throwable -> L20
                goto Lc5
            Lab:
                java.lang.IllegalStateException r10 = new java.lang.IllegalStateException     // Catch: java.lang.Throwable -> L20
                java.lang.String r11 = "unexpected"
                r10.<init>(r11)     // Catch: java.lang.Throwable -> L20
                throw r10     // Catch: java.lang.Throwable -> L20
            Lb3:
                r1.b()     // Catch: java.lang.Throwable -> L20
                d(r9, r10)     // Catch: java.lang.Throwable -> L20
                c(r9, r13)     // Catch: java.lang.Throwable -> L20
                java.lang.Boolean r11 = kotlin.coroutines.jvm.internal.b.a(r12)     // Catch: java.lang.Throwable -> L20
                kotlin.jvm.functions.Function1 r12 = r0.f31146e     // Catch: java.lang.Throwable -> L20
                if (r12 == 0) goto Lc5
                goto La6
            Lc5:
                r6.p(r11, r13)     // Catch: java.lang.Throwable -> L20
            Lc8:
                java.lang.Object r10 = r6.B()
                java.lang.Object r11 = or.b.f()
                if (r10 != r11) goto Ld5
                kotlin.coroutines.jvm.internal.g.c(r14)
            Ld5:
                return r10
            Ld6:
                r0 = move-exception
                r5 = r9
                goto L21
            Lda:
                r6.P()
                throw r10
            */
            throw new UnsupportedOperationException("Method not decompiled: is.e.a.f(is.m, int, long, kotlin.coroutines.Continuation):java.lang.Object");
        }

        private final boolean g() {
            this.f31148d = is.f.z();
            Throwable i02 = e.this.i0();
            if (i02 == null) {
                return false;
            }
            throw d0.a(i02);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void h() {
            kotlinx.coroutines.e eVar = this.f31149e;
            Intrinsics.checkNotNull(eVar);
            this.f31149e = null;
            this.f31148d = is.f.z();
            Throwable i02 = e.this.i0();
            if (i02 == null) {
                Result.a aVar = Result.f33279e;
                eVar.resumeWith(Result.b(Boolean.FALSE));
                return;
            }
            Result.a aVar2 = Result.f33279e;
            eVar.resumeWith(Result.b(kotlin.c.a(i02)));
        }

        @Override // is.i
        public Object a(Continuation continuation) {
            e0 e0Var;
            m mVar;
            e0 e0Var2;
            e0 e0Var3;
            e0 e0Var4;
            Object obj = this.f31148d;
            e0Var = is.f.f31180p;
            boolean z10 = true;
            if (obj == e0Var || this.f31148d == is.f.z()) {
                e eVar = e.this;
                m mVar2 = (m) e.t().get(eVar);
                while (!eVar.i()) {
                    long andIncrement = e.w().getAndIncrement(eVar);
                    int i10 = is.f.f31166b;
                    long j10 = andIncrement / i10;
                    int i11 = (int) (andIncrement % i10);
                    if (mVar2.f37432i != j10) {
                        mVar = eVar.d0(j10, mVar2);
                        if (mVar == null) {
                            continue;
                        }
                    } else {
                        mVar = mVar2;
                    }
                    Object q12 = eVar.q1(mVar, i11, andIncrement, null);
                    e0Var2 = is.f.f31177m;
                    if (q12 != e0Var2) {
                        e0Var3 = is.f.f31179o;
                        if (q12 != e0Var3) {
                            e0Var4 = is.f.f31178n;
                            if (q12 == e0Var4) {
                                return f(mVar, i11, andIncrement, continuation);
                            }
                            mVar.b();
                            this.f31148d = q12;
                            return kotlin.coroutines.jvm.internal.b.a(z10);
                        }
                        if (andIncrement < eVar.s0()) {
                            mVar.b();
                        }
                        mVar2 = mVar;
                    } else {
                        throw new IllegalStateException("unreachable");
                    }
                }
                z10 = g();
            }
            return kotlin.coroutines.jvm.internal.b.a(z10);
        }

        @Override // gs.w1
        public void e(b0 b0Var, int i10) {
            kotlinx.coroutines.e eVar = this.f31149e;
            if (eVar != null) {
                eVar.e(b0Var, i10);
            }
        }

        public final boolean i(Object obj) {
            boolean B;
            kotlinx.coroutines.e eVar = this.f31149e;
            Intrinsics.checkNotNull(eVar);
            Function3 function3 = null;
            this.f31149e = null;
            this.f31148d = obj;
            Boolean bool = Boolean.TRUE;
            e eVar2 = e.this;
            Function1 function1 = eVar2.f31146e;
            if (function1 != null) {
                function3 = eVar2.O(function1, obj);
            }
            B = is.f.B(eVar, bool, function3);
            return B;
        }

        public final void j() {
            kotlinx.coroutines.e eVar = this.f31149e;
            Intrinsics.checkNotNull(eVar);
            this.f31149e = null;
            this.f31148d = is.f.z();
            Throwable i02 = e.this.i0();
            if (i02 == null) {
                Result.a aVar = Result.f33279e;
                eVar.resumeWith(Result.b(Boolean.FALSE));
                return;
            }
            Result.a aVar2 = Result.f33279e;
            eVar.resumeWith(Result.b(kotlin.c.a(i02)));
        }

        @Override // is.i
        public Object next() {
            e0 e0Var;
            e0 e0Var2;
            Object obj = this.f31148d;
            e0Var = is.f.f31180p;
            if (obj != e0Var) {
                e0Var2 = is.f.f31180p;
                this.f31148d = e0Var2;
                if (obj != is.f.z()) {
                    return obj;
                }
                throw d0.a(e.this.l0());
            }
            throw new IllegalStateException("`hasNext()` has not been invoked");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {
        b(Object obj) {
            super(3, obj, e.class, "onCancellationImplDoNotCall", "onCancellationImplDoNotCall(Ljava/lang/Throwable;Ljava/lang/Object;Lkotlin/coroutines/CoroutineContext;)V", 0);
        }

        public final void a(Throwable th2, Object obj, CoroutineContext coroutineContext) {
            ((e) this.receiver).K0(th2, obj, coroutineContext);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            a((Throwable) obj, obj2, (CoroutineContext) obj3);
            return Unit.f33282a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class c extends FunctionReferenceImpl implements Function3 {
        c(Object obj) {
            super(3, obj, e.class, "onCancellationChannelResultImplDoNotCall", "onCancellationChannelResultImplDoNotCall-5_sEAP8(Ljava/lang/Throwable;Ljava/lang/Object;Lkotlin/coroutines/CoroutineContext;)V", 0);
        }

        public final void a(Throwable th2, Object obj, CoroutineContext coroutineContext) {
            ((e) this.receiver).J0(th2, obj, coroutineContext);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            a((Throwable) obj, ((k) obj2).k(), (CoroutineContext) obj3);
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final d f31151d = new d();

        d() {
            super(3, e.class, "registerSelectForReceive", "registerSelectForReceive(Lkotlinx/coroutines/selects/SelectInstance;Ljava/lang/Object;)V", 0);
        }

        public final void a(e eVar, os.l lVar, Object obj) {
            eVar.d1(lVar, obj);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            a((e) obj, (os.l) obj2, obj3);
            return Unit.f33282a;
        }
    }

    /* renamed from: is.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class C0407e extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0407e f31152d = new C0407e();

        C0407e() {
            super(3, e.class, "processResultSelectReceive", "processResultSelectReceive(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(e eVar, Object obj, Object obj2) {
            return eVar.X0(obj, obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class f extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final f f31153d = new f();

        f() {
            super(3, e.class, "registerSelectForReceive", "registerSelectForReceive(Lkotlinx/coroutines/selects/SelectInstance;Ljava/lang/Object;)V", 0);
        }

        public final void a(e eVar, os.l lVar, Object obj) {
            eVar.d1(lVar, obj);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            a((e) obj, (os.l) obj2, obj3);
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class g extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final g f31154d = new g();

        g() {
            super(3, e.class, "processResultSelectReceiveCatching", "processResultSelectReceiveCatching(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(e eVar, Object obj, Object obj2) {
            return eVar.Y0(obj, obj2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f31155d;

        /* renamed from: i  reason: collision with root package name */
        int f31157i;

        h(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f31155d = obj;
            this.f31157i |= Integer.MIN_VALUE;
            Object a12 = e.a1(e.this, this);
            if (a12 == or.b.f()) {
                return a12;
            }
            return k.b(a12);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f31158d;

        /* renamed from: e  reason: collision with root package name */
        Object f31159e;

        /* renamed from: i  reason: collision with root package name */
        int f31160i;

        /* renamed from: o  reason: collision with root package name */
        long f31161o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f31162p;

        /* renamed from: r  reason: collision with root package name */
        int f31164r;

        i(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f31162p = obj;
            this.f31164r |= Integer.MIN_VALUE;
            Object b12 = e.this.b1(null, 0, 0L, this);
            if (b12 == or.b.f()) {
                return b12;
            }
            return k.b(b12);
        }
    }

    public e(int i10, Function1 function1) {
        long A;
        Function3 function3;
        e0 e0Var;
        this.f31145d = i10;
        this.f31146e = function1;
        if (i10 >= 0) {
            A = is.f.A(i10);
            this.bufferEnd$volatile = A;
            this.completedExpandBuffersAndPauseFlag$volatile = g0();
            m mVar = new m(0L, null, this, 3);
            this.sendSegment$volatile = mVar;
            this.receiveSegment$volatile = mVar;
            if (D0()) {
                mVar = is.f.f31165a;
                Intrinsics.checkNotNull(mVar, "null cannot be cast to non-null type kotlinx.coroutines.channels.ChannelSegment<E of kotlinx.coroutines.channels.BufferedChannel>");
            }
            this.bufferEndSegment$volatile = mVar;
            if (function1 != null) {
                function3 = new Function3() { // from class: is.b
                    @Override // kotlin.jvm.functions.Function3
                    public final Object invoke(Object obj, Object obj2, Object obj3) {
                        Function3 T0;
                        T0 = e.T0(e.this, (os.l) obj, obj2, obj3);
                        return T0;
                    }
                };
            } else {
                function3 = null;
            }
            this.f31147i = function3;
            e0Var = is.f.f31183s;
            this._closeCause$volatile = e0Var;
            return;
        }
        throw new IllegalArgumentException(("Invalid channel capacity: " + i10 + ", should be >=0").toString());
    }

    private final boolean A0(long j10) {
        return z0(j10, true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean B0(long j10) {
        return z0(j10, false);
    }

    private final boolean D0() {
        long g02 = g0();
        if (g02 != 0 && g02 != LongCompanionObject.MAX_VALUE) {
            return false;
        }
        return true;
    }

    private final long E0(m mVar) {
        e0 e0Var;
        do {
            int i10 = is.f.f31166b;
            while (true) {
                i10--;
                if (-1 < i10) {
                    long j10 = (mVar.f37432i * is.f.f31166b) + i10;
                    if (j10 >= o0()) {
                        while (true) {
                            Object B = mVar.B(i10);
                            if (B != null) {
                                e0Var = is.f.f31169e;
                                if (B != e0Var) {
                                    if (B == is.f.f31168d) {
                                        return j10;
                                    }
                                }
                            }
                            if (mVar.v(i10, B, is.f.z())) {
                                mVar.t();
                                break;
                            }
                        }
                    } else {
                        return -1L;
                    }
                } else {
                    mVar = (m) mVar.h();
                }
            }
        } while (mVar != null);
        return -1L;
    }

    private final void F0() {
        long j10;
        long w10;
        AtomicLongFieldUpdater atomicLongFieldUpdater = f31136o;
        do {
            j10 = atomicLongFieldUpdater.get(this);
            if (((int) (j10 >> 60)) == 0) {
                w10 = is.f.w(1152921504606846975L & j10, 1);
            } else {
                return;
            }
        } while (!atomicLongFieldUpdater.compareAndSet(this, j10, w10));
    }

    private final void G0() {
        long j10;
        long w10;
        AtomicLongFieldUpdater atomicLongFieldUpdater = f31136o;
        do {
            j10 = atomicLongFieldUpdater.get(this);
            w10 = is.f.w(1152921504606846975L & j10, 3);
        } while (!atomicLongFieldUpdater.compareAndSet(this, j10, w10));
    }

    private final void H0() {
        long j10;
        long w10;
        AtomicLongFieldUpdater atomicLongFieldUpdater = f31136o;
        do {
            j10 = atomicLongFieldUpdater.get(this);
            int i10 = (int) (j10 >> 60);
            if (i10 == 0) {
                w10 = is.f.w(1152921504606846975L & j10, 2);
            } else if (i10 == 1) {
                w10 = is.f.w(1152921504606846975L & j10, 3);
            } else {
                return;
            }
        } while (!atomicLongFieldUpdater.compareAndSet(this, j10, w10));
    }

    /* JADX WARN: Code restructure failed: missing block: B:38:0x0011, code lost:
        continue;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void I0(long r5, is.m r7) {
        /*
            r4 = this;
        L0:
            long r0 = r7.f37432i
            int r0 = (r0 > r5 ? 1 : (r0 == r5 ? 0 : -1))
            if (r0 >= 0) goto L11
            ls.c r0 = r7.f()
            is.m r0 = (is.m) r0
            if (r0 != 0) goto Lf
            goto L11
        Lf:
            r7 = r0
            goto L0
        L11:
            boolean r5 = r7.k()
            if (r5 == 0) goto L22
            ls.c r5 = r7.f()
            is.m r5 = (is.m) r5
            if (r5 != 0) goto L20
            goto L22
        L20:
            r7 = r5
            goto L11
        L22:
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r5 = h0()
        L26:
            java.lang.Object r6 = r5.get(r4)
            ls.b0 r6 = (ls.b0) r6
            long r0 = r6.f37432i
            long r2 = r7.f37432i
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 < 0) goto L35
            return
        L35:
            boolean r0 = r7.u()
            if (r0 != 0) goto L3c
            goto L11
        L3c:
            boolean r0 = androidx.concurrent.futures.b.a(r5, r4, r6, r7)
            if (r0 == 0) goto L4c
            boolean r5 = r6.p()
            if (r5 == 0) goto L4b
            r6.n()
        L4b:
            return
        L4c:
            boolean r6 = r7.p()
            if (r6 == 0) goto L26
            r7.n()
            goto L26
        */
        throw new UnsupportedOperationException("Method not decompiled: is.e.I0(long, is.m):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void J0(Throwable th2, Object obj, CoroutineContext coroutineContext) {
        Function1 function1 = this.f31146e;
        Intrinsics.checkNotNull(function1);
        Object f10 = k.f(obj);
        Intrinsics.checkNotNull(f10);
        ls.x.a(function1, f10, coroutineContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void K0(Throwable th2, Object obj, CoroutineContext coroutineContext) {
        Function1 function1 = this.f31146e;
        Intrinsics.checkNotNull(function1);
        ls.x.a(function1, obj, coroutineContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void M0(CancellableContinuation cancellableContinuation) {
        Result.a aVar = Result.f33279e;
        cancellableContinuation.resumeWith(Result.b(k.b(k.f31189b.a(i0()))));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void N0(CancellableContinuation cancellableContinuation) {
        Result.a aVar = Result.f33279e;
        cancellableContinuation.resumeWith(Result.b(kotlin.c.a(l0())));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Function3 O(final Function1 function1, final Object obj) {
        return new Function3() { // from class: is.c
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj2, Object obj3, Object obj4) {
                Unit Q;
                Q = e.Q(Function1.this, obj, (Throwable) obj2, obj3, (CoroutineContext) obj4);
                return Q;
            }
        };
    }

    private final void O0(os.l lVar) {
        lVar.d(is.f.z());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final KFunction P(Function1 function1) {
        return new b(this);
    }

    private final Object P0(Object obj, Continuation continuation) {
        q0 c10;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(or.b.c(continuation), 1);
        eVar.H();
        Function1 function1 = this.f31146e;
        if (function1 != null && (c10 = ls.x.c(function1, obj, null, 2, null)) != null) {
            ir.e.a(c10, p0());
            Result.a aVar = Result.f33279e;
            eVar.resumeWith(Result.b(kotlin.c.a(c10)));
        } else {
            Throwable p02 = p0();
            Result.a aVar2 = Result.f33279e;
            eVar.resumeWith(Result.b(kotlin.c.a(p02)));
        }
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == or.b.f()) {
            return B;
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(Function1 function1, Object obj, Throwable th2, Object obj2, CoroutineContext coroutineContext) {
        ls.x.a(function1, obj, coroutineContext);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void Q0(Object obj, CancellableContinuation cancellableContinuation) {
        Function1 function1 = this.f31146e;
        if (function1 != null) {
            ls.x.a(function1, obj, cancellableContinuation.getContext());
        }
        Throwable p02 = p0();
        Result.a aVar = Result.f33279e;
        cancellableContinuation.resumeWith(Result.b(kotlin.c.a(p02)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final KFunction R(Function1 function1) {
        return new c(this);
    }

    private final boolean S(long j10) {
        if (j10 >= g0() && j10 >= o0() + this.f31145d) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Function3 T0(final e eVar, final os.l lVar, Object obj, final Object obj2) {
        return new Function3() { // from class: is.d
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj3, Object obj4, Object obj5) {
                Unit U0;
                U0 = e.U0(obj2, eVar, lVar, (Throwable) obj3, obj4, (CoroutineContext) obj5);
                return U0;
            }
        };
    }

    private final void U(m mVar, long j10) {
        e0 e0Var;
        Object b10 = ls.k.b(null, 1, null);
        loop0: while (mVar != null) {
            for (int i10 = is.f.f31166b - 1; -1 < i10; i10--) {
                if ((mVar.f37432i * is.f.f31166b) + i10 < j10) {
                    break loop0;
                }
                while (true) {
                    Object B = mVar.B(i10);
                    if (B != null) {
                        e0Var = is.f.f31169e;
                        if (B != e0Var) {
                            if (B instanceof x) {
                                if (mVar.v(i10, B, is.f.z())) {
                                    b10 = ls.k.c(b10, ((x) B).f31203a);
                                    mVar.C(i10, true);
                                    break;
                                }
                            } else if (!(B instanceof w1)) {
                                break;
                            } else if (mVar.v(i10, B, is.f.z())) {
                                b10 = ls.k.c(b10, B);
                                mVar.C(i10, true);
                                break;
                            }
                        }
                    }
                    if (mVar.v(i10, B, is.f.z())) {
                        mVar.t();
                        break;
                    }
                }
            }
            mVar = (m) mVar.h();
        }
        if (b10 != null) {
            if (!(b10 instanceof ArrayList)) {
                f1((w1) b10);
                return;
            }
            Intrinsics.checkNotNull(b10, "null cannot be cast to non-null type java.util.ArrayList<E of kotlinx.coroutines.internal.InlineList>");
            ArrayList arrayList = (ArrayList) b10;
            for (int size = arrayList.size() - 1; -1 < size; size--) {
                f1((w1) arrayList.get(size));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(Object obj, e eVar, os.l lVar, Throwable th2, Object obj2, CoroutineContext coroutineContext) {
        if (obj != is.f.z()) {
            ls.x.a(eVar.f31146e, obj, lVar.getContext());
        }
        return Unit.f33282a;
    }

    private final m V() {
        m mVar = f31142u.get(this);
        m mVar2 = (m) f31140s.get(this);
        if (mVar2.f37432i > ((m) mVar).f37432i) {
            mVar = mVar2;
        }
        m mVar3 = (m) f31141t.get(this);
        if (mVar3.f37432i > ((m) mVar).f37432i) {
            mVar = mVar3;
        }
        return (m) ls.b.b((ls.c) mVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V0(w1 w1Var, m mVar, int i10) {
        S0();
        w1Var.e(mVar, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void W0(w1 w1Var, m mVar, int i10) {
        w1Var.e(mVar, i10 + is.f.f31166b);
    }

    private final void X(long j10) {
        e1(Y(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object X0(Object obj, Object obj2) {
        if (obj2 != is.f.z()) {
            return obj2;
        }
        throw l0();
    }

    private final m Y(long j10) {
        m V = V();
        if (C0()) {
            long E0 = E0(V);
            if (E0 != -1) {
                a0(E0);
            }
        }
        U(V, j10);
        return V;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object Y0(Object obj, Object obj2) {
        Object c10;
        if (obj2 == is.f.z()) {
            c10 = k.f31189b.a(i0());
        } else {
            c10 = k.f31189b.c(obj2);
        }
        return k.b(c10);
    }

    private final void Z() {
        v();
    }

    static /* synthetic */ Object Z0(e eVar, Continuation continuation) {
        m mVar;
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        m mVar2 = (m) t().get(eVar);
        while (!eVar.i()) {
            long andIncrement = w().getAndIncrement(eVar);
            int i10 = is.f.f31166b;
            long j10 = andIncrement / i10;
            int i11 = (int) (andIncrement % i10);
            if (mVar2.f37432i != j10) {
                m d02 = eVar.d0(j10, mVar2);
                if (d02 == null) {
                    continue;
                } else {
                    mVar = d02;
                }
            } else {
                mVar = mVar2;
            }
            e eVar2 = eVar;
            Object q12 = eVar2.q1(mVar, i11, andIncrement, null);
            e0Var = is.f.f31177m;
            if (q12 != e0Var) {
                e0Var2 = is.f.f31179o;
                if (q12 != e0Var2) {
                    e0Var3 = is.f.f31178n;
                    if (q12 == e0Var3) {
                        return eVar2.c1(mVar, i11, andIncrement, continuation);
                    }
                    mVar.b();
                    return q12;
                }
                if (andIncrement < eVar2.s0()) {
                    mVar.b();
                }
                eVar = eVar2;
                mVar2 = mVar;
            } else {
                throw new IllegalStateException("unexpected");
            }
        }
        throw d0.a(eVar.l0());
    }

    /* JADX WARN: Removed duplicated region for block: B:11:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0039  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    static /* synthetic */ java.lang.Object a1(is.e r13, kotlin.coroutines.Continuation r14) {
        /*
            boolean r0 = r14 instanceof is.e.h
            if (r0 == 0) goto L14
            r0 = r14
            is.e$h r0 = (is.e.h) r0
            int r1 = r0.f31157i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L14
            int r1 = r1 - r2
            r0.f31157i = r1
        L12:
            r6 = r0
            goto L1a
        L14:
            is.e$h r0 = new is.e$h
            r0.<init>(r14)
            goto L12
        L1a:
            java.lang.Object r14 = r6.f31155d
            java.lang.Object r0 = or.b.f()
            int r1 = r6.f31157i
            r2 = 1
            if (r1 == 0) goto L39
            if (r1 != r2) goto L31
            kotlin.c.b(r14)
            is.k r14 = (is.k) r14
            java.lang.Object r13 = r14.k()
            return r13
        L31:
            java.lang.IllegalStateException r13 = new java.lang.IllegalStateException
            java.lang.String r14 = "call to 'resume' before 'invoke' with coroutine"
            r13.<init>(r14)
            throw r13
        L39:
            kotlin.c.b(r14)
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r14 = t()
            java.lang.Object r14 = r14.get(r13)
            is.m r14 = (is.m) r14
        L46:
            boolean r1 = r13.i()
            if (r1 == 0) goto L57
            is.k$b r14 = is.k.f31189b
            java.lang.Throwable r13 = r13.i0()
            java.lang.Object r13 = r14.a(r13)
            return r13
        L57:
            java.util.concurrent.atomic.AtomicLongFieldUpdater r1 = w()
            long r4 = r1.getAndIncrement(r13)
            int r1 = is.f.f31166b
            long r7 = (long) r1
            long r7 = r4 / r7
            long r9 = (long) r1
            long r9 = r4 % r9
            int r3 = (int) r9
            long r9 = r14.f37432i
            int r1 = (r9 > r7 ? 1 : (r9 == r7 ? 0 : -1))
            if (r1 == 0) goto L77
            is.m r1 = n(r13, r7, r14)
            if (r1 != 0) goto L75
            goto L46
        L75:
            r8 = r1
            goto L78
        L77:
            r8 = r14
        L78:
            r12 = 0
            r7 = r13
            r9 = r3
            r10 = r4
            java.lang.Object r13 = M(r7, r8, r9, r10, r12)
            r1 = r7
            ls.e0 r14 = is.f.r()
            if (r13 == r14) goto Lb6
            ls.e0 r14 = is.f.h()
            if (r13 != r14) goto L9b
            long r13 = r1.s0()
            int r13 = (r4 > r13 ? 1 : (r4 == r13 ? 0 : -1))
            if (r13 >= 0) goto L98
            r8.b()
        L98:
            r13 = r1
            r14 = r8
            goto L46
        L9b:
            ls.e0 r14 = is.f.s()
            if (r13 != r14) goto Lac
            r6.f31157i = r2
            r2 = r8
            java.lang.Object r13 = r1.b1(r2, r3, r4, r6)
            if (r13 != r0) goto Lab
            return r0
        Lab:
            return r13
        Lac:
            r8.b()
            is.k$b r14 = is.k.f31189b
            java.lang.Object r13 = r14.c(r13)
            return r13
        Lb6:
            java.lang.IllegalStateException r13 = new java.lang.IllegalStateException
            java.lang.String r14 = "unexpected"
            r13.<init>(r14)
            throw r13
        */
        throw new UnsupportedOperationException("Method not decompiled: is.e.a1(is.e, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final void b0() {
        if (D0()) {
            return;
        }
        m mVar = (m) f31142u.get(this);
        while (true) {
            long andIncrement = f31138q.getAndIncrement(this);
            int i10 = is.f.f31166b;
            long j10 = andIncrement / i10;
            if (s0() <= andIncrement) {
                if (mVar.f37432i < j10 && mVar.f() != null) {
                    I0(j10, mVar);
                }
                w0(this, 0L, 1, null);
                return;
            }
            if (mVar.f37432i != j10) {
                m c02 = c0(j10, mVar, andIncrement);
                if (c02 == null) {
                    continue;
                } else {
                    mVar = c02;
                }
            }
            if (o1(mVar, (int) (andIncrement % i10), andIncrement)) {
                w0(this, 0L, 1, null);
                return;
            }
            w0(this, 0L, 1, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object b1(is.m r11, int r12, long r13, kotlin.coroutines.Continuation r15) {
        /*
            Method dump skipped, instructions count: 315
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: is.e.b1(is.m, int, long, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final m c0(long j10, m mVar, long j11) {
        Object c10;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f31142u;
        Function2 function2 = (Function2) is.f.y();
        loop0: while (true) {
            c10 = ls.b.c(mVar, j10, function2);
            if (!c0.c(c10)) {
                b0 b10 = c0.b(c10);
                while (true) {
                    b0 b0Var = (b0) atomicReferenceFieldUpdater.get(this);
                    if (b0Var.f37432i >= b10.f37432i) {
                        break loop0;
                    } else if (!b10.u()) {
                        break;
                    } else if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, b0Var, b10)) {
                        if (b0Var.p()) {
                            b0Var.n();
                        }
                    } else if (b10.p()) {
                        b10.n();
                    }
                }
            } else {
                break;
            }
        }
        if (c0.c(c10)) {
            Z();
            I0(j10, mVar);
            w0(this, 0L, 1, null);
            return null;
        }
        m mVar2 = (m) c0.b(c10);
        if (mVar2.f37432i > j10) {
            long j12 = mVar2.f37432i;
            int i10 = is.f.f31166b;
            if (f31138q.compareAndSet(this, j11 + 1, j12 * i10)) {
                v0((mVar2.f37432i * i10) - j11);
            } else {
                w0(this, 0L, 1, null);
            }
            return null;
        }
        return mVar2;
    }

    private final Object c1(m mVar, int i10, long j10, Continuation continuation) {
        e0 e0Var;
        e0 e0Var2;
        m mVar2;
        e0 e0Var3;
        e0 e0Var4;
        e0 e0Var5;
        kotlinx.coroutines.e b10 = gs.l.b(or.b.c(continuation));
        try {
            Object q12 = q1(mVar, i10, j10, b10);
            e0Var = is.f.f31177m;
            if (q12 == e0Var) {
                V0(b10, mVar, i10);
            } else {
                e0Var2 = is.f.f31179o;
                KFunction kFunction = null;
                kFunction = null;
                kotlinx.coroutines.e eVar = null;
                if (q12 == e0Var2) {
                    if (j10 < s0()) {
                        mVar.b();
                    }
                    m mVar3 = (m) t().get(this);
                    while (true) {
                        if (i()) {
                            N0(b10);
                            break;
                        }
                        long andIncrement = w().getAndIncrement(this);
                        int i11 = is.f.f31166b;
                        long j11 = andIncrement / i11;
                        int i12 = (int) (andIncrement % i11);
                        if (mVar3.f37432i != j11) {
                            m d02 = d0(j11, mVar3);
                            if (d02 != null) {
                                mVar2 = d02;
                            }
                        } else {
                            mVar2 = mVar3;
                        }
                        q12 = q1(mVar2, i12, andIncrement, b10);
                        m mVar4 = mVar2;
                        e0Var3 = is.f.f31177m;
                        if (q12 != e0Var3) {
                            e0Var4 = is.f.f31179o;
                            if (q12 != e0Var4) {
                                e0Var5 = is.f.f31178n;
                                if (q12 != e0Var5) {
                                    mVar4.b();
                                    Function1 function1 = this.f31146e;
                                    if (function1 != null) {
                                        kFunction = P(function1);
                                    }
                                } else {
                                    throw new IllegalStateException("unexpected");
                                }
                            } else {
                                if (andIncrement < s0()) {
                                    mVar4.b();
                                }
                                mVar3 = mVar4;
                            }
                        } else {
                            if (b10 != null) {
                                eVar = b10;
                            }
                            if (eVar != null) {
                                V0(eVar, mVar4, i12);
                            }
                        }
                    }
                } else {
                    mVar.b();
                    Function1 function12 = this.f31146e;
                    if (function12 != null) {
                        kFunction = P(function12);
                    }
                }
                b10.p(q12, (Function3) kFunction);
            }
            Object B = b10.B();
            if (B == or.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            return B;
        } catch (Throwable th2) {
            b10.P();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final m d0(long j10, m mVar) {
        Object c10;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f31141t;
        Function2 function2 = (Function2) is.f.y();
        loop0: while (true) {
            c10 = ls.b.c(mVar, j10, function2);
            if (!c0.c(c10)) {
                b0 b10 = c0.b(c10);
                while (true) {
                    b0 b0Var = (b0) atomicReferenceFieldUpdater.get(this);
                    if (b0Var.f37432i >= b10.f37432i) {
                        break loop0;
                    } else if (!b10.u()) {
                        break;
                    } else if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, b0Var, b10)) {
                        if (b0Var.p()) {
                            b0Var.n();
                        }
                    } else if (b10.p()) {
                        b10.n();
                    }
                }
            } else {
                break;
            }
        }
        if (c0.c(c10)) {
            Z();
            if (mVar.f37432i * is.f.f31166b < s0()) {
                mVar.b();
            }
            return null;
        }
        m mVar2 = (m) c0.b(c10);
        if (!D0() && j10 <= g0() / is.f.f31166b) {
            AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2 = f31142u;
            while (true) {
                b0 b0Var2 = (b0) atomicReferenceFieldUpdater2.get(this);
                if (b0Var2.f37432i >= mVar2.f37432i || !mVar2.u()) {
                    break;
                } else if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater2, this, b0Var2, mVar2)) {
                    if (b0Var2.p()) {
                        b0Var2.n();
                    }
                } else if (mVar2.p()) {
                    mVar2.n();
                }
            }
        }
        long j11 = mVar2.f37432i;
        if (j11 > j10) {
            int i10 = is.f.f31166b;
            u1(j11 * i10);
            if (mVar2.f37432i * i10 < s0()) {
                mVar2.b();
            }
            return null;
        }
        return mVar2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void d1(os.l lVar, Object obj) {
        m mVar;
        e0 e0Var;
        w1 w1Var;
        e0 e0Var2;
        e0 e0Var3;
        m mVar2 = (m) t().get(this);
        while (!i()) {
            long andIncrement = w().getAndIncrement(this);
            int i10 = is.f.f31166b;
            long j10 = andIncrement / i10;
            int i11 = (int) (andIncrement % i10);
            if (mVar2.f37432i != j10) {
                m d02 = d0(j10, mVar2);
                if (d02 == null) {
                    continue;
                } else {
                    mVar = d02;
                }
            } else {
                mVar = mVar2;
            }
            os.l lVar2 = lVar;
            Object q12 = q1(mVar, i11, andIncrement, lVar2);
            mVar2 = mVar;
            e0Var = is.f.f31177m;
            if (q12 != e0Var) {
                e0Var2 = is.f.f31179o;
                if (q12 != e0Var2) {
                    e0Var3 = is.f.f31178n;
                    if (q12 != e0Var3) {
                        mVar2.b();
                        lVar2.d(q12);
                        return;
                    }
                    throw new IllegalStateException("unexpected");
                }
                if (andIncrement < s0()) {
                    mVar2.b();
                }
                lVar = lVar2;
            } else {
                if (lVar2 instanceof w1) {
                    w1Var = (w1) lVar2;
                } else {
                    w1Var = null;
                }
                if (w1Var != null) {
                    V0(w1Var, mVar2, i11);
                    return;
                }
                return;
            }
        }
        O0(lVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final m e0(long j10, m mVar) {
        Object c10;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f31140s;
        Function2 function2 = (Function2) is.f.y();
        loop0: while (true) {
            c10 = ls.b.c(mVar, j10, function2);
            if (!c0.c(c10)) {
                b0 b10 = c0.b(c10);
                while (true) {
                    b0 b0Var = (b0) atomicReferenceFieldUpdater.get(this);
                    if (b0Var.f37432i >= b10.f37432i) {
                        break loop0;
                    } else if (!b10.u()) {
                        break;
                    } else if (androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, b0Var, b10)) {
                        if (b0Var.p()) {
                            b0Var.n();
                        }
                    } else if (b10.p()) {
                        b10.n();
                    }
                }
            } else {
                break;
            }
        }
        if (c0.c(c10)) {
            Z();
            if (mVar.f37432i * is.f.f31166b < o0()) {
                mVar.b();
            }
            return null;
        }
        m mVar2 = (m) c0.b(c10);
        long j11 = mVar2.f37432i;
        if (j11 > j10) {
            int i10 = is.f.f31166b;
            v1(j11 * i10);
            if (mVar2.f37432i * i10 < o0()) {
                mVar2.b();
            }
            return null;
        }
        return mVar2;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00b3, code lost:
        r12 = (is.m) r12.h();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void e1(is.m r12) {
        /*
            r11 = this;
            kotlin.jvm.functions.Function1 r0 = r11.f31146e
            r1 = 0
            r2 = 1
            java.lang.Object r3 = ls.k.b(r1, r2, r1)
        L8:
            int r4 = is.f.f31166b
            int r4 = r4 - r2
        Lb:
            r5 = -1
            if (r5 >= r4) goto Lb3
            long r6 = r12.f37432i
            int r8 = is.f.f31166b
            long r8 = (long) r8
            long r6 = r6 * r8
            long r8 = (long) r4
            long r6 = r6 + r8
        L16:
            java.lang.Object r8 = r12.B(r4)
            ls.e0 r9 = is.f.f()
            if (r8 == r9) goto Lbb
            ls.e0 r9 = is.f.f31168d
            if (r8 != r9) goto L48
            long r9 = r11.o0()
            int r9 = (r6 > r9 ? 1 : (r6 == r9 ? 0 : -1))
            if (r9 < 0) goto Lbb
            ls.e0 r9 = is.f.z()
            boolean r8 = r12.v(r4, r8, r9)
            if (r8 == 0) goto L16
            if (r0 == 0) goto L40
            java.lang.Object r5 = r12.A(r4)
            ls.q0 r1 = ls.x.b(r0, r5, r1)
        L40:
            r12.w(r4)
            r12.t()
            goto Laf
        L48:
            ls.e0 r9 = is.f.k()
            if (r8 == r9) goto La2
            if (r8 != 0) goto L51
            goto La2
        L51:
            boolean r9 = r8 instanceof gs.w1
            if (r9 != 0) goto L6e
            boolean r9 = r8 instanceof is.x
            if (r9 == 0) goto L5a
            goto L6e
        L5a:
            ls.e0 r9 = is.f.p()
            if (r8 == r9) goto Lbb
            ls.e0 r9 = is.f.q()
            if (r8 != r9) goto L67
            goto Lbb
        L67:
            ls.e0 r9 = is.f.p()
            if (r8 == r9) goto L16
            goto Laf
        L6e:
            long r9 = r11.o0()
            int r9 = (r6 > r9 ? 1 : (r6 == r9 ? 0 : -1))
            if (r9 < 0) goto Lbb
            boolean r9 = r8 instanceof is.x
            if (r9 == 0) goto L80
            r9 = r8
            is.x r9 = (is.x) r9
            gs.w1 r9 = r9.f31203a
            goto L83
        L80:
            r9 = r8
            gs.w1 r9 = (gs.w1) r9
        L83:
            ls.e0 r10 = is.f.z()
            boolean r8 = r12.v(r4, r8, r10)
            if (r8 == 0) goto L16
            if (r0 == 0) goto L97
            java.lang.Object r5 = r12.A(r4)
            ls.q0 r1 = ls.x.b(r0, r5, r1)
        L97:
            java.lang.Object r3 = ls.k.c(r3, r9)
            r12.w(r4)
            r12.t()
            goto Laf
        La2:
            ls.e0 r9 = is.f.z()
            boolean r8 = r12.v(r4, r8, r9)
            if (r8 == 0) goto L16
            r12.t()
        Laf:
            int r4 = r4 + (-1)
            goto Lb
        Lb3:
            ls.c r12 = r12.h()
            is.m r12 = (is.m) r12
            if (r12 != 0) goto L8
        Lbb:
            if (r3 == 0) goto Le1
            boolean r12 = r3 instanceof java.util.ArrayList
            if (r12 != 0) goto Lc7
            gs.w1 r3 = (gs.w1) r3
            r11.g1(r3)
            goto Le1
        Lc7:
            java.lang.String r12 = "null cannot be cast to non-null type java.util.ArrayList<E of kotlinx.coroutines.internal.InlineList>"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r3, r12)
            java.util.ArrayList r3 = (java.util.ArrayList) r3
            int r12 = r3.size()
            int r12 = r12 - r2
        Ld3:
            if (r5 >= r12) goto Le1
            java.lang.Object r0 = r3.get(r12)
            gs.w1 r0 = (gs.w1) r0
            r11.g1(r0)
            int r12 = r12 + (-1)
            goto Ld3
        Le1:
            if (r1 != 0) goto Le4
            return
        Le4:
            throw r1
        */
        throw new UnsupportedOperationException("Method not decompiled: is.e.e1(is.m):void");
    }

    private final void f1(w1 w1Var) {
        h1(w1Var, true);
    }

    private final long g0() {
        return f31138q.get(this);
    }

    private final void g1(w1 w1Var) {
        h1(w1Var, false);
    }

    private final void h1(w1 w1Var, boolean z10) {
        Throwable p02;
        if (w1Var instanceof CancellableContinuation) {
            Continuation continuation = (Continuation) w1Var;
            Result.a aVar = Result.f33279e;
            if (z10) {
                p02 = l0();
            } else {
                p02 = p0();
            }
            continuation.resumeWith(Result.b(kotlin.c.a(p02)));
        } else if (w1Var instanceof u) {
            kotlinx.coroutines.e eVar = ((u) w1Var).f31202d;
            Result.a aVar2 = Result.f33279e;
            eVar.resumeWith(Result.b(k.b(k.f31189b.a(i0()))));
        } else if (w1Var instanceof a) {
            ((a) w1Var).j();
        } else if (w1Var instanceof os.l) {
            ((os.l) w1Var).f(this, is.f.z());
        } else {
            throw new IllegalStateException(("Unexpected waiter: " + w1Var).toString());
        }
    }

    static /* synthetic */ Object i1(e eVar, Object obj, Continuation continuation) {
        m mVar;
        m mVar2 = (m) y().get(eVar);
        while (true) {
            long andIncrement = z().getAndIncrement(eVar);
            long j10 = andIncrement & 1152921504606846975L;
            boolean B0 = eVar.B0(andIncrement);
            int i10 = is.f.f31166b;
            long j11 = j10 / i10;
            int i11 = (int) (j10 % i10);
            if (mVar2.f37432i != j11) {
                m e02 = eVar.e0(j11, mVar2);
                if (e02 == null) {
                    if (B0) {
                        Object P0 = eVar.P0(obj, continuation);
                        if (P0 == or.b.f()) {
                            return P0;
                        }
                    }
                } else {
                    mVar = e02;
                }
            } else {
                mVar = mVar2;
            }
            e eVar2 = eVar;
            Object obj2 = obj;
            int s12 = eVar2.s1(mVar, i11, obj2, j10, null, B0);
            if (s12 != 0) {
                if (s12 == 1) {
                    break;
                } else if (s12 != 2) {
                    if (s12 != 3) {
                        if (s12 != 4) {
                            if (s12 == 5) {
                                mVar.b();
                            }
                            eVar = eVar2;
                            mVar2 = mVar;
                            obj = obj2;
                        } else {
                            if (j10 < eVar2.o0()) {
                                mVar.b();
                            }
                            Object P02 = eVar2.P0(obj2, continuation);
                            if (P02 == or.b.f()) {
                                return P02;
                            }
                        }
                    } else {
                        Object j12 = eVar2.j1(mVar, i11, obj2, j10, continuation);
                        if (j12 == or.b.f()) {
                            return j12;
                        }
                    }
                } else if (B0) {
                    mVar.t();
                    Object P03 = eVar2.P0(obj2, continuation);
                    if (P03 == or.b.f()) {
                        return P03;
                    }
                }
            } else {
                mVar.b();
                break;
            }
        }
        return Unit.f33282a;
    }

    /* JADX WARN: Removed duplicated region for block: B:62:0x00f4  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x00fd A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:66:0x00fe  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object j1(is.m r17, int r18, java.lang.Object r19, long r20, kotlin.coroutines.Continuation r22) {
        /*
            Method dump skipped, instructions count: 261
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: is.e.j1(is.m, int, java.lang.Object, long, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final boolean k1(long j10) {
        if (B0(j10)) {
            return false;
        }
        return !S(j10 & 1152921504606846975L);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Throwable l0() {
        Throwable i02 = i0();
        if (i02 == null) {
            return new p("Channel was closed");
        }
        return i02;
    }

    private final boolean l1(Object obj, Object obj2) {
        boolean B;
        boolean B2;
        if (obj instanceof os.l) {
            return ((os.l) obj).f(this, obj2);
        }
        KFunction kFunction = null;
        if (obj instanceof u) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.channels.ReceiveCatching<E of kotlinx.coroutines.channels.BufferedChannel>");
            kotlinx.coroutines.e eVar = ((u) obj).f31202d;
            k b10 = k.b(k.f31189b.c(obj2));
            Function1 function1 = this.f31146e;
            if (function1 != null) {
                kFunction = R(function1);
            }
            B2 = is.f.B(eVar, b10, (Function3) kFunction);
            return B2;
        } else if (obj instanceof a) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.channels.BufferedChannel.BufferedChannelIterator<E of kotlinx.coroutines.channels.BufferedChannel>");
            return ((a) obj).i(obj2);
        } else if (obj instanceof CancellableContinuation) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CancellableContinuation<E of kotlinx.coroutines.channels.BufferedChannel>");
            CancellableContinuation cancellableContinuation = (CancellableContinuation) obj;
            Function1 function12 = this.f31146e;
            if (function12 != null) {
                kFunction = P(function12);
            }
            B = is.f.B(cancellableContinuation, obj2, (Function3) kFunction);
            return B;
        } else {
            throw new IllegalStateException(("Unexpected receiver type: " + obj).toString());
        }
    }

    private final boolean m1(Object obj, m mVar, int i10) {
        if (obj instanceof CancellableContinuation) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.CancellableContinuation<kotlin.Unit>");
            return is.f.C((CancellableContinuation) obj, Unit.f33282a, null, 2, null);
        } else if (obj instanceof os.l) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.selects.SelectImplementation<*>");
            os.o x10 = ((os.k) obj).x(this, Unit.f33282a);
            if (x10 == os.o.f44757e) {
                mVar.w(i10);
            }
            if (x10 == os.o.f44756d) {
                return true;
            }
            return false;
        } else {
            throw new IllegalStateException(("Unexpected waiter: " + obj).toString());
        }
    }

    private final boolean o1(m mVar, int i10, long j10) {
        e0 e0Var;
        e0 e0Var2;
        Object B = mVar.B(i10);
        if ((B instanceof w1) && j10 >= f31137p.get(this)) {
            e0Var = is.f.f31171g;
            if (mVar.v(i10, B, e0Var)) {
                if (!m1(B, mVar, i10)) {
                    e0Var2 = is.f.f31174j;
                    mVar.F(i10, e0Var2);
                    mVar.C(i10, false);
                    return false;
                }
                mVar.F(i10, is.f.f31168d);
                return true;
            }
        }
        return p1(mVar, i10, j10);
    }

    private final boolean p1(m mVar, int i10, long j10) {
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        e0 e0Var4;
        e0 e0Var5;
        e0 e0Var6;
        e0 e0Var7;
        e0 e0Var8;
        while (true) {
            Object B = mVar.B(i10);
            if (!(B instanceof w1)) {
                e0Var3 = is.f.f31174j;
                if (B == e0Var3) {
                    return false;
                }
                if (B == null) {
                    e0Var4 = is.f.f31169e;
                    if (mVar.v(i10, B, e0Var4)) {
                        return true;
                    }
                } else if (B != is.f.f31168d) {
                    e0Var5 = is.f.f31172h;
                    if (B == e0Var5) {
                        break;
                    }
                    e0Var6 = is.f.f31173i;
                    if (B == e0Var6) {
                        break;
                    }
                    e0Var7 = is.f.f31175k;
                    if (B != e0Var7 && B != is.f.z()) {
                        e0Var8 = is.f.f31170f;
                        if (B != e0Var8) {
                            throw new IllegalStateException(("Unexpected cell state: " + B).toString());
                        }
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            } else if (j10 >= f31137p.get(this)) {
                e0Var = is.f.f31171g;
                if (mVar.v(i10, B, e0Var)) {
                    if (!m1(B, mVar, i10)) {
                        e0Var2 = is.f.f31174j;
                        mVar.F(i10, e0Var2);
                        mVar.C(i10, false);
                        return false;
                    }
                    mVar.F(i10, is.f.f31168d);
                    return true;
                }
            } else if (mVar.v(i10, B, new x((w1) B))) {
                return true;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object q1(m mVar, int i10, long j10, Object obj) {
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        Object B = mVar.B(i10);
        if (B == null) {
            if (j10 >= (f31136o.get(this) & 1152921504606846975L)) {
                if (obj == null) {
                    e0Var3 = is.f.f31178n;
                    return e0Var3;
                } else if (mVar.v(i10, B, obj)) {
                    b0();
                    e0Var2 = is.f.f31177m;
                    return e0Var2;
                }
            }
        } else if (B == is.f.f31168d) {
            e0Var = is.f.f31173i;
            if (mVar.v(i10, B, e0Var)) {
                b0();
                return mVar.D(i10);
            }
        }
        return r1(mVar, i10, j10, obj);
    }

    private final Object r1(m mVar, int i10, long j10, Object obj) {
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        e0 e0Var4;
        e0 e0Var5;
        e0 e0Var6;
        e0 e0Var7;
        e0 e0Var8;
        e0 e0Var9;
        e0 e0Var10;
        e0 e0Var11;
        e0 e0Var12;
        e0 e0Var13;
        e0 e0Var14;
        e0 e0Var15;
        e0 e0Var16;
        while (true) {
            Object B = mVar.B(i10);
            if (B != null) {
                e0Var5 = is.f.f31169e;
                if (B != e0Var5) {
                    if (B == is.f.f31168d) {
                        e0Var6 = is.f.f31173i;
                        if (mVar.v(i10, B, e0Var6)) {
                            b0();
                            return mVar.D(i10);
                        }
                    } else {
                        e0Var7 = is.f.f31174j;
                        if (B == e0Var7) {
                            e0Var8 = is.f.f31179o;
                            return e0Var8;
                        }
                        e0Var9 = is.f.f31172h;
                        if (B == e0Var9) {
                            e0Var10 = is.f.f31179o;
                            return e0Var10;
                        } else if (B != is.f.z()) {
                            e0Var12 = is.f.f31171g;
                            if (B != e0Var12) {
                                e0Var13 = is.f.f31170f;
                                if (mVar.v(i10, B, e0Var13)) {
                                    boolean z10 = B instanceof x;
                                    if (z10) {
                                        B = ((x) B).f31203a;
                                    }
                                    if (m1(B, mVar, i10)) {
                                        e0Var16 = is.f.f31173i;
                                        mVar.F(i10, e0Var16);
                                        b0();
                                        return mVar.D(i10);
                                    }
                                    e0Var14 = is.f.f31174j;
                                    mVar.F(i10, e0Var14);
                                    mVar.C(i10, false);
                                    if (z10) {
                                        b0();
                                    }
                                    e0Var15 = is.f.f31179o;
                                    return e0Var15;
                                }
                            } else {
                                continue;
                            }
                        } else {
                            b0();
                            e0Var11 = is.f.f31179o;
                            return e0Var11;
                        }
                    }
                }
            }
            if (j10 < (f31136o.get(this) & 1152921504606846975L)) {
                e0Var = is.f.f31172h;
                if (mVar.v(i10, B, e0Var)) {
                    b0();
                    e0Var2 = is.f.f31179o;
                    return e0Var2;
                }
            } else if (obj == null) {
                e0Var3 = is.f.f31178n;
                return e0Var3;
            } else if (mVar.v(i10, B, obj)) {
                b0();
                e0Var4 = is.f.f31177m;
                return e0Var4;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int s1(m mVar, int i10, Object obj, long j10, Object obj2, boolean z10) {
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        mVar.G(i10, obj);
        if (z10) {
            return t1(mVar, i10, obj, j10, obj2, z10);
        }
        Object B = mVar.B(i10);
        if (B == null) {
            if (S(j10)) {
                if (mVar.v(i10, null, is.f.f31168d)) {
                    return 1;
                }
            } else if (obj2 == null) {
                return 3;
            } else {
                if (mVar.v(i10, null, obj2)) {
                    return 2;
                }
            }
        } else if (B instanceof w1) {
            mVar.w(i10);
            if (l1(B, obj)) {
                e0Var3 = is.f.f31173i;
                mVar.F(i10, e0Var3);
                R0();
                return 0;
            }
            e0Var = is.f.f31175k;
            Object x10 = mVar.x(i10, e0Var);
            e0Var2 = is.f.f31175k;
            if (x10 != e0Var2) {
                mVar.C(i10, true);
                return 5;
            }
            return 5;
        }
        return t1(mVar, i10, obj, j10, obj2, z10);
    }

    public static final /* synthetic */ AtomicReferenceFieldUpdater t() {
        return f31141t;
    }

    private final int t1(m mVar, int i10, Object obj, long j10, Object obj2, boolean z10) {
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        e0 e0Var4;
        e0 e0Var5;
        e0 e0Var6;
        e0 e0Var7;
        while (true) {
            Object B = mVar.B(i10);
            if (B != null) {
                e0Var2 = is.f.f31169e;
                if (B != e0Var2) {
                    e0Var3 = is.f.f31175k;
                    if (B != e0Var3) {
                        e0Var4 = is.f.f31172h;
                        if (B == e0Var4) {
                            mVar.w(i10);
                            return 5;
                        } else if (B == is.f.z()) {
                            mVar.w(i10);
                            Z();
                            return 4;
                        } else {
                            mVar.w(i10);
                            if (B instanceof x) {
                                B = ((x) B).f31203a;
                            }
                            if (l1(B, obj)) {
                                e0Var7 = is.f.f31173i;
                                mVar.F(i10, e0Var7);
                                R0();
                                return 0;
                            }
                            e0Var5 = is.f.f31175k;
                            Object x10 = mVar.x(i10, e0Var5);
                            e0Var6 = is.f.f31175k;
                            if (x10 != e0Var6) {
                                mVar.C(i10, true);
                            }
                            return 5;
                        }
                    }
                    mVar.w(i10);
                    return 5;
                } else if (mVar.v(i10, B, is.f.f31168d)) {
                    return 1;
                }
            } else if (S(j10) && !z10) {
                if (mVar.v(i10, null, is.f.f31168d)) {
                    return 1;
                }
            } else if (z10) {
                e0Var = is.f.f31174j;
                if (mVar.v(i10, null, e0Var)) {
                    mVar.C(i10, false);
                    return 4;
                }
            } else if (obj2 == null) {
                return 3;
            } else {
                if (mVar.v(i10, null, obj2)) {
                    return 2;
                }
            }
        }
    }

    private final void u1(long j10) {
        AtomicLongFieldUpdater atomicLongFieldUpdater = f31137p;
        while (true) {
            long j11 = atomicLongFieldUpdater.get(this);
            if (j11 < j10) {
                long j12 = j10;
                if (f31137p.compareAndSet(this, j11, j12)) {
                    return;
                }
                j10 = j12;
            } else {
                return;
            }
        }
    }

    private final void v0(long j10) {
        if ((f31139r.addAndGet(this, j10) & 4611686018427387904L) != 0) {
            do {
            } while ((f31139r.get(this) & 4611686018427387904L) != 0);
        }
    }

    private final void v1(long j10) {
        long j11;
        long w10;
        AtomicLongFieldUpdater atomicLongFieldUpdater = f31136o;
        do {
            j11 = atomicLongFieldUpdater.get(this);
            long j12 = 1152921504606846975L & j11;
            if (j12 < j10) {
                w10 = is.f.w(j12, (int) (j11 >> 60));
            } else {
                return;
            }
        } while (!f31136o.compareAndSet(this, j11, w10));
    }

    public static final /* synthetic */ AtomicLongFieldUpdater w() {
        return f31137p;
    }

    static /* synthetic */ void w0(e eVar, long j10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                j10 = 1;
            }
            eVar.v0(j10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: incCompletedExpandBufferAttempts");
    }

    private final void x0() {
        Object obj;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f31144w;
        do {
            obj = atomicReferenceFieldUpdater.get(this);
        } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, obj, obj == null ? is.f.f31181q : is.f.f31182r));
        if (obj == null) {
            return;
        }
        Function1 function1 = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(obj, 1);
        ((Function1) obj).invoke(i0());
    }

    public static final /* synthetic */ AtomicReferenceFieldUpdater y() {
        return f31140s;
    }

    private final boolean y0(m mVar, int i10, long j10) {
        Object B;
        e0 e0Var;
        e0 e0Var2;
        e0 e0Var3;
        e0 e0Var4;
        e0 e0Var5;
        e0 e0Var6;
        e0 e0Var7;
        do {
            B = mVar.B(i10);
            if (B != null) {
                e0Var2 = is.f.f31169e;
                if (B != e0Var2) {
                    if (B != is.f.f31168d) {
                        e0Var3 = is.f.f31174j;
                        if (B != e0Var3 && B != is.f.z()) {
                            e0Var4 = is.f.f31173i;
                            if (B != e0Var4) {
                                e0Var5 = is.f.f31172h;
                                if (B != e0Var5) {
                                    e0Var6 = is.f.f31171g;
                                    if (B != e0Var6) {
                                        e0Var7 = is.f.f31170f;
                                        if (B == e0Var7 || j10 != o0()) {
                                            return false;
                                        }
                                        return true;
                                    }
                                    return true;
                                }
                                return false;
                            }
                            return false;
                        }
                        return false;
                    }
                    return true;
                }
            }
            e0Var = is.f.f31172h;
        } while (!mVar.v(i10, B, e0Var));
        b0();
        return false;
    }

    public static final /* synthetic */ AtomicLongFieldUpdater z() {
        return f31136o;
    }

    private final boolean z0(long j10, boolean z10) {
        int i10 = (int) (j10 >> 60);
        if (i10 == 0 || i10 == 1) {
            return false;
        }
        if (i10 != 2) {
            if (i10 == 3) {
                X(j10 & 1152921504606846975L);
                return true;
            }
            throw new IllegalStateException(("unexpected close status: " + i10).toString());
        }
        Y(j10 & 1152921504606846975L);
        if (z10 && u0()) {
            return false;
        }
        return true;
    }

    protected boolean C0() {
        return false;
    }

    public boolean T(Throwable th2) {
        if (th2 == null) {
            th2 = new CancellationException("Channel was cancelled");
        }
        return W(th2, true);
    }

    protected boolean W(Throwable th2, boolean z10) {
        e0 e0Var;
        if (z10) {
            F0();
        }
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f31143v;
        e0Var = is.f.f31183s;
        boolean a10 = androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, e0Var, th2);
        if (z10) {
            G0();
        } else {
            H0();
        }
        Z();
        L0();
        if (a10) {
            x0();
        }
        return a10;
    }

    protected final void a0(long j10) {
        m mVar;
        e0 e0Var;
        q0 c10;
        m mVar2 = (m) f31141t.get(this);
        while (true) {
            long j11 = f31137p.get(this);
            if (j10 < Math.max(this.f31145d + j11, g0())) {
                return;
            }
            if (f31137p.compareAndSet(this, j11, 1 + j11)) {
                int i10 = is.f.f31166b;
                long j12 = j11 / i10;
                int i11 = (int) (j11 % i10);
                if (mVar2.f37432i != j12) {
                    mVar = d0(j12, mVar2);
                    if (mVar == null) {
                        continue;
                    }
                } else {
                    mVar = mVar2;
                }
                Object q12 = q1(mVar, i11, j11, null);
                e0Var = is.f.f31179o;
                if (q12 == e0Var) {
                    if (j11 < s0()) {
                        mVar.b();
                    }
                } else {
                    mVar.b();
                    Function1 function1 = this.f31146e;
                    if (function1 != null && (c10 = ls.x.c(function1, q12, null, 2, null)) != null) {
                        throw c10;
                    }
                }
                mVar2 = mVar;
            }
        }
    }

    @Override // is.w
    public void b(Function1 function1) {
        e0 e0Var;
        e0 e0Var2;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater;
        e0 e0Var3;
        e0 e0Var4;
        if (!androidx.concurrent.futures.b.a(f31144w, this, null, function1)) {
            AtomicReferenceFieldUpdater atomicReferenceFieldUpdater2 = f31144w;
            do {
                Object obj = atomicReferenceFieldUpdater2.get(this);
                e0Var = is.f.f31181q;
                if (obj == e0Var) {
                    atomicReferenceFieldUpdater = f31144w;
                    e0Var3 = is.f.f31181q;
                    e0Var4 = is.f.f31182r;
                } else {
                    e0Var2 = is.f.f31182r;
                    if (obj == e0Var2) {
                        throw new IllegalStateException("Another handler was already registered and successfully invoked");
                    }
                    throw new IllegalStateException(("Another handler is already registered: " + obj).toString());
                }
            } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, this, e0Var3, e0Var4));
            function1.invoke(i0());
        }
    }

    @Override // is.w
    public Object e(Object obj) {
        e0 e0Var;
        Object obj2;
        int i10;
        m mVar;
        e eVar;
        w1 w1Var;
        if (!k1(f31136o.get(this))) {
            e0Var = is.f.f31174j;
            m mVar2 = (m) y().get(this);
            while (true) {
                long andIncrement = z().getAndIncrement(this);
                long j10 = andIncrement & 1152921504606846975L;
                boolean B0 = B0(andIncrement);
                int i11 = is.f.f31166b;
                long j11 = j10 / i11;
                int i12 = (int) (j10 % i11);
                if (mVar2.f37432i != j11) {
                    m e02 = e0(j11, mVar2);
                    if (e02 == null) {
                        if (B0) {
                            return k.f31189b.a(p0());
                        }
                    } else {
                        i10 = i12;
                        mVar = e02;
                        eVar = this;
                        obj2 = obj;
                    }
                } else {
                    obj2 = obj;
                    i10 = i12;
                    mVar = mVar2;
                    eVar = this;
                }
                int s12 = eVar.s1(mVar, i10, obj2, j10, e0Var, B0);
                mVar2 = mVar;
                if (s12 != 0) {
                    if (s12 != 1) {
                        if (s12 != 2) {
                            if (s12 != 3) {
                                if (s12 != 4) {
                                    if (s12 == 5) {
                                        mVar2.b();
                                    }
                                    obj = obj2;
                                } else {
                                    if (j10 < o0()) {
                                        mVar2.b();
                                    }
                                    return k.f31189b.a(p0());
                                }
                            } else {
                                throw new IllegalStateException("unexpected");
                            }
                        } else if (B0) {
                            mVar2.t();
                            return k.f31189b.a(p0());
                        } else {
                            if (e0Var instanceof w1) {
                                w1Var = (w1) e0Var;
                            } else {
                                w1Var = null;
                            }
                            if (w1Var != null) {
                                W0(w1Var, mVar2, i10);
                            }
                            mVar2.t();
                            return k.f31189b.b();
                        }
                    } else {
                        return k.f31189b.c(Unit.f33282a);
                    }
                } else {
                    mVar2.b();
                    return k.f31189b.c(Unit.f33282a);
                }
            }
        } else {
            return k.f31189b.b();
        }
    }

    @Override // is.v
    public final void h(CancellationException cancellationException) {
        T(cancellationException);
    }

    @Override // is.v
    public boolean i() {
        return A0(f31136o.get(this));
    }

    protected final Throwable i0() {
        return (Throwable) f31143v.get(this);
    }

    @Override // is.v
    public is.i iterator() {
        return new a();
    }

    @Override // is.v
    public os.h j() {
        d dVar = d.f31151d;
        Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlin.Function3<@[ParameterName(name = \"clauseObject\")] kotlin.Any, @[ParameterName(name = \"select\")] kotlinx.coroutines.selects.SelectInstance<*>, @[ParameterName(name = \"param\")] kotlin.Any?, kotlin.Unit>");
        C0407e c0407e = C0407e.f31152d;
        Intrinsics.checkNotNull(c0407e, "null cannot be cast to non-null type kotlin.Function3<@[ParameterName(name = \"clauseObject\")] kotlin.Any, @[ParameterName(name = \"param\")] kotlin.Any?, @[ParameterName(name = \"clauseResult\")] kotlin.Any?, kotlin.Any?>");
        return new os.i(this, (Function3) TypeIntrinsics.beforeCheckcastToFunctionOfArity(dVar, 3), (Function3) TypeIntrinsics.beforeCheckcastToFunctionOfArity(c0407e, 3), this.f31147i);
    }

    @Override // is.v
    public os.h k() {
        f fVar = f.f31153d;
        Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type kotlin.Function3<@[ParameterName(name = \"clauseObject\")] kotlin.Any, @[ParameterName(name = \"select\")] kotlinx.coroutines.selects.SelectInstance<*>, @[ParameterName(name = \"param\")] kotlin.Any?, kotlin.Unit>");
        g gVar = g.f31154d;
        Intrinsics.checkNotNull(gVar, "null cannot be cast to non-null type kotlin.Function3<@[ParameterName(name = \"clauseObject\")] kotlin.Any, @[ParameterName(name = \"param\")] kotlin.Any?, @[ParameterName(name = \"clauseResult\")] kotlin.Any?, kotlin.Any?>");
        return new os.i(this, (Function3) TypeIntrinsics.beforeCheckcastToFunctionOfArity(fVar, 3), (Function3) TypeIntrinsics.beforeCheckcastToFunctionOfArity(gVar, 3), this.f31147i);
    }

    @Override // is.v
    public Object m() {
        e0 e0Var;
        m mVar;
        e0 e0Var2;
        w1 w1Var;
        e0 e0Var3;
        e0 e0Var4;
        long j10 = f31137p.get(this);
        long j11 = f31136o.get(this);
        if (A0(j11)) {
            return k.f31189b.a(i0());
        }
        if (j10 < (j11 & 1152921504606846975L)) {
            e0Var = is.f.f31175k;
            m mVar2 = (m) t().get(this);
            while (!i()) {
                long andIncrement = w().getAndIncrement(this);
                int i10 = is.f.f31166b;
                long j12 = andIncrement / i10;
                int i11 = (int) (andIncrement % i10);
                if (mVar2.f37432i != j12) {
                    mVar = d0(j12, mVar2);
                    if (mVar == null) {
                        continue;
                    }
                } else {
                    mVar = mVar2;
                }
                Object q12 = q1(mVar, i11, andIncrement, e0Var);
                e0Var2 = is.f.f31177m;
                if (q12 != e0Var2) {
                    e0Var3 = is.f.f31179o;
                    if (q12 != e0Var3) {
                        e0Var4 = is.f.f31178n;
                        if (q12 != e0Var4) {
                            mVar.b();
                            return k.f31189b.c(q12);
                        }
                        throw new IllegalStateException("unexpected");
                    }
                    if (andIncrement < s0()) {
                        mVar.b();
                    }
                    mVar2 = mVar;
                } else {
                    if (e0Var instanceof w1) {
                        w1Var = (w1) e0Var;
                    } else {
                        w1Var = null;
                    }
                    if (w1Var != null) {
                        V0(w1Var, mVar, i11);
                    }
                    w1(andIncrement);
                    mVar.t();
                    return k.f31189b.b();
                }
            }
            return k.f31189b.a(i0());
        }
        return k.f31189b.b();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object n1(Object obj) {
        m mVar;
        int i10;
        e eVar;
        w1 w1Var;
        e0 e0Var = is.f.f31168d;
        m mVar2 = (m) y().get(this);
        while (true) {
            long andIncrement = z().getAndIncrement(this);
            long j10 = andIncrement & 1152921504606846975L;
            boolean B0 = B0(andIncrement);
            int i11 = is.f.f31166b;
            long j11 = j10 / i11;
            int i12 = (int) (j10 % i11);
            if (mVar2.f37432i != j11) {
                mVar = e0(j11, mVar2);
                if (mVar == null) {
                    if (B0) {
                        return k.f31189b.a(p0());
                    }
                } else {
                    eVar = this;
                    i10 = i12;
                }
            } else {
                mVar = mVar2;
                i10 = i12;
                eVar = this;
            }
            Object obj2 = obj;
            int s12 = eVar.s1(mVar, i10, obj2, j10, e0Var, B0);
            mVar2 = mVar;
            if (s12 != 0) {
                if (s12 != 1) {
                    if (s12 != 2) {
                        if (s12 != 3) {
                            if (s12 != 4) {
                                if (s12 == 5) {
                                    mVar2.b();
                                }
                                obj = obj2;
                            } else {
                                if (j10 < o0()) {
                                    mVar2.b();
                                }
                                return k.f31189b.a(p0());
                            }
                        } else {
                            throw new IllegalStateException("unexpected");
                        }
                    } else if (B0) {
                        mVar2.t();
                        return k.f31189b.a(p0());
                    } else {
                        if (e0Var instanceof w1) {
                            w1Var = (w1) e0Var;
                        } else {
                            w1Var = null;
                        }
                        if (w1Var != null) {
                            W0(w1Var, mVar2, i10);
                        }
                        a0((mVar2.f37432i * i11) + i10);
                        return k.f31189b.c(Unit.f33282a);
                    }
                } else {
                    return k.f31189b.c(Unit.f33282a);
                }
            } else {
                mVar2.b();
                return k.f31189b.c(Unit.f33282a);
            }
        }
    }

    @Override // is.v
    public Object o(Continuation continuation) {
        return a1(this, continuation);
    }

    public final long o0() {
        return f31137p.get(this);
    }

    @Override // is.w
    public boolean offer(Object obj) {
        return g.a.a(this, obj);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Throwable p0() {
        Throwable i02 = i0();
        if (i02 == null) {
            return new q("Channel was closed");
        }
        return i02;
    }

    @Override // is.v
    public Object r(Continuation continuation) {
        return Z0(this, continuation);
    }

    @Override // is.w
    public boolean s(Throwable th2) {
        return W(th2, false);
    }

    public final long s0() {
        return f31136o.get(this) & 1152921504606846975L;
    }

    /* JADX WARN: Code restructure failed: missing block: B:85:0x01d7, code lost:
        r16 = r7;
        r3 = (is.m) r3.f();
     */
    /* JADX WARN: Code restructure failed: missing block: B:86:0x01e0, code lost:
        if (r3 != null) goto L103;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:103:0x01d7 A[EDGE_INSN: B:103:0x01d7->B:85:0x01d7 ?: BREAK  , SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:28:0x00cb  */
    /* JADX WARN: Removed duplicated region for block: B:89:0x01e8  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.String toString() {
        /*
            Method dump skipped, instructions count: 524
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: is.e.toString():java.lang.String");
    }

    @Override // is.w
    public Object u(Object obj, Continuation continuation) {
        return i1(this, obj, continuation);
    }

    public final boolean u0() {
        while (true) {
            m mVar = (m) f31141t.get(this);
            long o02 = o0();
            if (s0() <= o02) {
                return false;
            }
            int i10 = is.f.f31166b;
            long j10 = o02 / i10;
            if (mVar.f37432i != j10 && (mVar = d0(j10, mVar)) == null) {
                if (((m) f31141t.get(this)).f37432i < j10) {
                    return false;
                }
            } else {
                mVar.b();
                if (y0(mVar, (int) (o02 % i10), o02)) {
                    return true;
                }
                f31137p.compareAndSet(this, o02, 1 + o02);
            }
        }
    }

    @Override // is.w
    public boolean v() {
        return B0(f31136o.get(this));
    }

    public final void w1(long j10) {
        int i10;
        long v10;
        boolean z10;
        long v11;
        long v12;
        e eVar = this;
        if (!eVar.D0()) {
            while (eVar.g0() <= j10) {
                eVar = this;
            }
            i10 = is.f.f31167c;
            for (int i11 = 0; i11 < i10; i11++) {
                long g02 = eVar.g0();
                if (g02 == (4611686018427387903L & f31139r.get(eVar)) && g02 == eVar.g0()) {
                    return;
                }
            }
            AtomicLongFieldUpdater atomicLongFieldUpdater = f31139r;
            while (true) {
                long j11 = atomicLongFieldUpdater.get(eVar);
                v10 = is.f.v(j11 & 4611686018427387903L, true);
                if (atomicLongFieldUpdater.compareAndSet(eVar, j11, v10)) {
                    break;
                }
                eVar = this;
            }
            while (true) {
                long g03 = eVar.g0();
                long j12 = f31139r.get(eVar);
                long j13 = j12 & 4611686018427387903L;
                if ((4611686018427387904L & j12) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (g03 == j13 && g03 == eVar.g0()) {
                    break;
                } else if (!z10) {
                    AtomicLongFieldUpdater atomicLongFieldUpdater2 = f31139r;
                    v11 = is.f.v(j13, true);
                    eVar = this;
                    atomicLongFieldUpdater2.compareAndSet(eVar, j12, v11);
                } else {
                    eVar = this;
                }
            }
            AtomicLongFieldUpdater atomicLongFieldUpdater3 = f31139r;
            while (true) {
                long j14 = atomicLongFieldUpdater3.get(eVar);
                v12 = is.f.v(j14 & 4611686018427387903L, false);
                boolean compareAndSet = atomicLongFieldUpdater3.compareAndSet(eVar, j14, v12);
                AtomicLongFieldUpdater atomicLongFieldUpdater4 = atomicLongFieldUpdater3;
                if (compareAndSet) {
                    return;
                }
                atomicLongFieldUpdater3 = atomicLongFieldUpdater4;
                eVar = this;
            }
        }
    }

    protected void L0() {
    }

    protected void R0() {
    }

    protected void S0() {
    }
}
