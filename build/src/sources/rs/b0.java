package rs;

import java.util.Arrays;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b0 extends ss.b implements MutableSharedFlow, rs.c, ss.q {

    /* renamed from: p  reason: collision with root package name */
    private final int f49224p;

    /* renamed from: q  reason: collision with root package name */
    private final int f49225q;

    /* renamed from: r  reason: collision with root package name */
    private final qs.a f49226r;

    /* renamed from: s  reason: collision with root package name */
    private Object[] f49227s;

    /* renamed from: t  reason: collision with root package name */
    private long f49228t;

    /* renamed from: u  reason: collision with root package name */
    private long f49229u;

    /* renamed from: v  reason: collision with root package name */
    private int f49230v;

    /* renamed from: w  reason: collision with root package name */
    private int f49231w;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements os.n0 {

        /* renamed from: d  reason: collision with root package name */
        public final b0 f49232d;

        /* renamed from: e  reason: collision with root package name */
        public long f49233e;

        /* renamed from: i  reason: collision with root package name */
        public final Object f49234i;

        /* renamed from: o  reason: collision with root package name */
        public final Continuation f49235o;

        public a(b0 b0Var, long j10, Object obj, Continuation continuation) {
            this.f49232d = b0Var;
            this.f49233e = j10;
            this.f49234i = obj;
            this.f49235o = continuation;
        }

        @Override // os.n0
        public void dispose() {
            this.f49232d.y(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f49236a;

        static {
            int[] iArr = new int[qs.a.values().length];
            try {
                iArr[qs.a.f48066d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[qs.a.f48068i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[qs.a.f48067e.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f49236a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f49237d;

        /* renamed from: e  reason: collision with root package name */
        Object f49238e;

        /* renamed from: i  reason: collision with root package name */
        Object f49239i;

        /* renamed from: o  reason: collision with root package name */
        Object f49240o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f49241p;

        /* renamed from: r  reason: collision with root package name */
        int f49243r;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f49241p = obj;
            this.f49243r |= Integer.MIN_VALUE;
            return b0.A(b0.this, null, this);
        }
    }

    public b0(int i10, int i11, qs.a aVar) {
        this.f49224p = i10;
        this.f49225q = i11;
        this.f49226r = aVar;
    }

    /* JADX WARN: Can't wrap try/catch for region: R(10:1|(2:3|(8:5|6|(3:(7:(1:(1:11)(2:41|42))(1:43)|12|13|14|15|(2:16|(3:28|29|(2:31|32)(2:33|27))(4:18|(1:20)|21|(1:23)(2:26|27)))|24)(4:44|45|46|47)|37|38)(5:53|54|55|(1:57)|60)|48|49|15|(3:16|(0)(0)|27)|24))|63|6|(0)(0)|48|49|15|(3:16|(0)(0)|27)|24) */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0092, code lost:
        if (((rs.n0) r9).a(r0) == r1) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x00c2, code lost:
        r10 = move-exception;
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x00c3, code lost:
        r5 = r8;
        r8 = r10;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0076  */
    /* JADX WARN: Removed duplicated region for block: B:60:0x00c6 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:62:0x00b1 A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    static /* synthetic */ java.lang.Object A(rs.b0 r8, kotlinx.coroutines.flow.FlowCollector r9, kotlin.coroutines.Continuation r10) {
        /*
            Method dump skipped, instructions count: 224
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: rs.b0.A(rs.b0, kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final void B(long j10) {
        ss.d[] c10;
        if (ss.b.a(this) != 0 && (c10 = ss.b.c(this)) != null) {
            for (ss.d dVar : c10) {
                if (dVar != null) {
                    d0 d0Var = (d0) dVar;
                    long j11 = d0Var.f49250a;
                    if (j11 >= 0 && j11 < j10) {
                        d0Var.f49250a = j10;
                    }
                }
            }
        }
        this.f49229u = j10;
    }

    private final void E() {
        Object[] objArr = this.f49227s;
        Intrinsics.checkNotNull(objArr);
        c0.g(objArr, K(), null);
        this.f49230v--;
        long K = K() + 1;
        if (this.f49228t < K) {
            this.f49228t = K;
        }
        if (this.f49229u < K) {
            B(K);
        }
    }

    static /* synthetic */ Object F(b0 b0Var, Object obj, Continuation continuation) {
        if (b0Var.b(obj)) {
            return Unit.f32008a;
        }
        Object G = b0Var.G(obj, continuation);
        if (G == wr.b.f()) {
            return G;
        }
        return Unit.f32008a;
    }

    private final Object G(Object obj, Continuation continuation) {
        Throwable th2;
        Continuation[] I;
        a aVar;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(wr.b.c(continuation), 1);
        eVar.H();
        Continuation[] continuationArr = ss.c.f50025a;
        synchronized (this) {
            try {
                if (R(obj)) {
                    try {
                        Result.a aVar2 = Result.f32005e;
                        eVar.resumeWith(Result.b(Unit.f32008a));
                        I = I(continuationArr);
                        aVar = null;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                } else {
                    try {
                        aVar = new a(this, K() + P(), obj, eVar);
                        H(aVar);
                        this.f49231w++;
                        if (this.f49225q == 0) {
                            continuationArr = I(continuationArr);
                        }
                        I = continuationArr;
                    } catch (Throwable th4) {
                        th = th4;
                        th2 = th;
                        throw th2;
                    }
                }
                if (aVar != null) {
                    os.l.a(eVar, aVar);
                }
                for (Continuation continuation2 : I) {
                    if (continuation2 != null) {
                        Result.a aVar3 = Result.f32005e;
                        continuation2.resumeWith(Result.b(Unit.f32008a));
                    }
                }
                Object B = eVar.B();
                if (B == wr.b.f()) {
                    kotlin.coroutines.jvm.internal.g.c(continuation);
                }
                if (B == wr.b.f()) {
                    return B;
                }
                return Unit.f32008a;
            } catch (Throwable th5) {
                th = th5;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void H(Object obj) {
        int P = P();
        Object[] objArr = this.f49227s;
        if (objArr == null) {
            objArr = Q(null, 0, 2);
        } else if (P >= objArr.length) {
            objArr = Q(objArr, P, objArr.length * 2);
        }
        c0.g(objArr, K() + P, obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r11v6, types: [java.lang.Object[], java.lang.Object] */
    public final Continuation[] I(Continuation[] continuationArr) {
        ss.d[] c10;
        d0 d0Var;
        Continuation continuation;
        int length = continuationArr.length;
        if (ss.b.a(this) != 0 && (c10 = ss.b.c(this)) != null) {
            int length2 = c10.length;
            int i10 = 0;
            continuationArr = continuationArr;
            while (i10 < length2) {
                ss.d dVar = c10[i10];
                if (dVar != null && (continuation = (d0Var = (d0) dVar).f49251b) != null && T(d0Var) >= 0) {
                    int length3 = continuationArr.length;
                    continuationArr = continuationArr;
                    if (length >= length3) {
                        ?? copyOf = Arrays.copyOf(continuationArr, Math.max(2, continuationArr.length * 2));
                        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                        continuationArr = copyOf;
                    }
                    continuationArr[length] = continuation;
                    d0Var.f49251b = null;
                    length++;
                }
                i10++;
                continuationArr = continuationArr;
            }
        }
        return continuationArr;
    }

    private final long J() {
        return K() + this.f49230v;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final long K() {
        return Math.min(this.f49229u, this.f49228t);
    }

    private final Object M(long j10) {
        Object f10;
        Object[] objArr = this.f49227s;
        Intrinsics.checkNotNull(objArr);
        f10 = c0.f(objArr, j10);
        if (f10 instanceof a) {
            return ((a) f10).f49234i;
        }
        return f10;
    }

    private final long N() {
        return K() + this.f49230v + this.f49231w;
    }

    private final int O() {
        return (int) ((K() + this.f49230v) - this.f49228t);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int P() {
        return this.f49230v + this.f49231w;
    }

    private final Object[] Q(Object[] objArr, int i10, int i11) {
        Object f10;
        if (i11 > 0) {
            Object[] objArr2 = new Object[i11];
            this.f49227s = objArr2;
            if (objArr != null) {
                long K = K();
                for (int i12 = 0; i12 < i10; i12++) {
                    long j10 = i12 + K;
                    f10 = c0.f(objArr, j10);
                    c0.g(objArr2, j10, f10);
                }
            }
            return objArr2;
        }
        throw new IllegalStateException("Buffer size overflow");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean R(Object obj) {
        if (l() == 0) {
            return S(obj);
        }
        if (this.f49230v >= this.f49225q && this.f49229u <= this.f49228t) {
            int i10 = b.f49236a[this.f49226r.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return true;
                }
                if (i10 != 3) {
                    throw new qr.p();
                }
            } else {
                return false;
            }
        }
        H(obj);
        int i11 = this.f49230v + 1;
        this.f49230v = i11;
        if (i11 > this.f49225q) {
            E();
        }
        if (O() > this.f49224p) {
            V(this.f49228t + 1, this.f49229u, J(), N());
        }
        return true;
    }

    private final boolean S(Object obj) {
        if (this.f49224p == 0) {
            return true;
        }
        H(obj);
        int i10 = this.f49230v + 1;
        this.f49230v = i10;
        if (i10 > this.f49224p) {
            E();
        }
        this.f49229u = K() + this.f49230v;
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final long T(d0 d0Var) {
        long j10 = d0Var.f49250a;
        if (j10 >= J() && (this.f49225q > 0 || j10 > K() || this.f49231w == 0)) {
            return -1L;
        }
        return j10;
    }

    private final Object U(d0 d0Var) {
        Object obj;
        Continuation[] continuationArr = ss.c.f50025a;
        synchronized (this) {
            try {
                long T = T(d0Var);
                if (T < 0) {
                    obj = c0.f49244a;
                } else {
                    long j10 = d0Var.f49250a;
                    Object M = M(T);
                    d0Var.f49250a = T + 1;
                    continuationArr = W(j10);
                    obj = M;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        for (Continuation continuation : continuationArr) {
            if (continuation != null) {
                Result.a aVar = Result.f32005e;
                continuation.resumeWith(Result.b(Unit.f32008a));
            }
        }
        return obj;
    }

    private final void V(long j10, long j11, long j12, long j13) {
        long min = Math.min(j11, j10);
        for (long K = K(); K < min; K++) {
            Object[] objArr = this.f49227s;
            Intrinsics.checkNotNull(objArr);
            c0.g(objArr, K, null);
        }
        this.f49228t = j10;
        this.f49229u = j11;
        this.f49230v = (int) (j12 - min);
        this.f49231w = (int) (j13 - j12);
    }

    private final Object x(d0 d0Var, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(wr.b.c(continuation), 1);
        eVar.H();
        synchronized (this) {
            try {
                if (T(d0Var) < 0) {
                    d0Var.f49251b = eVar;
                } else {
                    Result.a aVar = Result.f32005e;
                    eVar.resumeWith(Result.b(Unit.f32008a));
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        Object B = eVar.B();
        if (B == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == wr.b.f()) {
            return B;
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void y(a aVar) {
        Object f10;
        synchronized (this) {
            if (aVar.f49233e < K()) {
                return;
            }
            Object[] objArr = this.f49227s;
            Intrinsics.checkNotNull(objArr);
            f10 = c0.f(objArr, aVar.f49233e);
            if (f10 == aVar) {
                c0.g(objArr, aVar.f49233e, c0.f49244a);
                z();
                Unit unit = Unit.f32008a;
            }
        }
    }

    private final void z() {
        Object f10;
        if (this.f49225q != 0 || this.f49231w > 1) {
            Object[] objArr = this.f49227s;
            Intrinsics.checkNotNull(objArr);
            while (this.f49231w > 0) {
                f10 = c0.f(objArr, (K() + P()) - 1);
                if (f10 == c0.f49244a) {
                    this.f49231w--;
                    c0.g(objArr, K() + P(), null);
                } else {
                    return;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ss.b
    /* renamed from: C */
    public d0 h() {
        return new d0();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ss.b
    /* renamed from: D */
    public d0[] j(int i10) {
        return new d0[i10];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object L() {
        Object f10;
        Object[] objArr = this.f49227s;
        Intrinsics.checkNotNull(objArr);
        f10 = c0.f(objArr, (this.f49228t + O()) - 1);
        return f10;
    }

    public final Continuation[] W(long j10) {
        int i10;
        long j11;
        long j12;
        long j13;
        long j14;
        boolean z10;
        Object f10;
        Object f11;
        ss.d[] c10;
        if (j10 > this.f49229u) {
            return ss.c.f50025a;
        }
        long K = K();
        long j15 = this.f49230v + K;
        if (this.f49225q == 0 && this.f49231w > 0) {
            j15++;
        }
        if (ss.b.a(this) != 0 && (c10 = ss.b.c(this)) != null) {
            for (ss.d dVar : c10) {
                if (dVar != null) {
                    long j16 = ((d0) dVar).f49250a;
                    if (j16 >= 0 && j16 < j15) {
                        j15 = j16;
                    }
                }
            }
        }
        if (j15 <= this.f49229u) {
            return ss.c.f50025a;
        }
        long J = J();
        if (l() > 0) {
            i10 = Math.min(this.f49231w, this.f49225q - ((int) (J - j15)));
        } else {
            i10 = this.f49231w;
        }
        Continuation[] continuationArr = ss.c.f50025a;
        long j17 = this.f49231w + J;
        if (i10 > 0) {
            continuationArr = new Continuation[i10];
            Object[] objArr = this.f49227s;
            Intrinsics.checkNotNull(objArr);
            j13 = 1;
            long j18 = J;
            int i11 = 0;
            while (true) {
                if (J < j17) {
                    f11 = c0.f(objArr, J);
                    j11 = K;
                    ts.e0 e0Var = c0.f49244a;
                    if (f11 != e0Var) {
                        Intrinsics.checkNotNull(f11, "null cannot be cast to non-null type kotlinx.coroutines.flow.SharedFlowImpl.Emitter");
                        a aVar = (a) f11;
                        int i12 = i11 + 1;
                        j12 = j15;
                        continuationArr[i11] = aVar.f49235o;
                        c0.g(objArr, J, e0Var);
                        c0.g(objArr, j18, aVar.f49234i);
                        long j19 = j18 + 1;
                        if (i12 < i10) {
                            i11 = i12;
                            j18 = j19;
                        } else {
                            J = j19;
                            break;
                        }
                    } else {
                        j12 = j15;
                    }
                    J++;
                    K = j11;
                    j15 = j12;
                } else {
                    j11 = K;
                    j12 = j15;
                    J = j18;
                    break;
                }
            }
        } else {
            j11 = K;
            j12 = j15;
            j13 = 1;
        }
        Continuation[] continuationArr2 = continuationArr;
        int i13 = (int) (J - j11);
        if (l() == 0) {
            j14 = J;
        } else {
            j14 = j12;
        }
        long max = Math.max(this.f49228t, J - Math.min(this.f49224p, i13));
        if (this.f49225q == 0 && max < j17) {
            Object[] objArr2 = this.f49227s;
            Intrinsics.checkNotNull(objArr2);
            f10 = c0.f(objArr2, max);
            if (Intrinsics.areEqual(f10, c0.f49244a)) {
                J += j13;
                max += j13;
            }
        }
        V(max, j14, J, j17);
        z();
        if (continuationArr2.length == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            return I(continuationArr2);
        }
        return continuationArr2;
    }

    public final long X() {
        long j10 = this.f49228t;
        if (j10 < this.f49229u) {
            this.f49229u = j10;
        }
        return j10;
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow
    public boolean b(Object obj) {
        int i10;
        boolean z10;
        Continuation[] continuationArr = ss.c.f50025a;
        synchronized (this) {
            if (R(obj)) {
                continuationArr = I(continuationArr);
                z10 = true;
            } else {
                z10 = false;
            }
        }
        for (Continuation continuation : continuationArr) {
            if (continuation != null) {
                Result.a aVar = Result.f32005e;
                continuation.resumeWith(Result.b(Unit.f32008a));
            }
        }
        return z10;
    }

    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return A(this, flowCollector, continuation);
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow, kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        return F(this, obj, continuation);
    }

    @Override // ss.q
    public Flow f(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        return c0.e(this, coroutineContext, i10, aVar);
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow
    public void i() {
        synchronized (this) {
            try {
                try {
                    V(J(), this.f49229u, J(), N());
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    th = th2;
                    throw th;
                }
            } catch (Throwable th3) {
                th = th3;
            }
        }
    }
}
