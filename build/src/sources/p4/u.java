package p4;

import androidx.arch.core.util.Function;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u {

    /* renamed from: x  reason: collision with root package name */
    public static final a f44907x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f44908y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f44909z;

    /* renamed from: a  reason: collision with root package name */
    public final String f44910a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f44911b;

    /* renamed from: c  reason: collision with root package name */
    public String f44912c;

    /* renamed from: d  reason: collision with root package name */
    public String f44913d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f44914e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f44915f;

    /* renamed from: g  reason: collision with root package name */
    public long f44916g;

    /* renamed from: h  reason: collision with root package name */
    public long f44917h;

    /* renamed from: i  reason: collision with root package name */
    public long f44918i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f44919j;

    /* renamed from: k  reason: collision with root package name */
    public int f44920k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f44921l;

    /* renamed from: m  reason: collision with root package name */
    public long f44922m;

    /* renamed from: n  reason: collision with root package name */
    public long f44923n;

    /* renamed from: o  reason: collision with root package name */
    public long f44924o;

    /* renamed from: p  reason: collision with root package name */
    public long f44925p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f44926q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f44927r;

    /* renamed from: s  reason: collision with root package name */
    private int f44928s;

    /* renamed from: t  reason: collision with root package name */
    private final int f44929t;

    /* renamed from: u  reason: collision with root package name */
    private long f44930u;

    /* renamed from: v  reason: collision with root package name */
    private int f44931v;

    /* renamed from: w  reason: collision with root package name */
    private final int f44932w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final long a(boolean z10, int i10, k4.a backoffPolicy, long j10, long j11, int i11, boolean z11, long j12, long j13, long j14, long j15) {
            long j16;
            long scalb;
            Intrinsics.checkNotNullParameter(backoffPolicy, "backoffPolicy");
            if (j15 != LongCompanionObject.MAX_VALUE && z11) {
                if (i11 == 0) {
                    return j15;
                }
                return kotlin.ranges.d.e(j15, 900000 + j11);
            } else if (z10) {
                if (backoffPolicy == k4.a.LINEAR) {
                    scalb = j10 * i10;
                } else {
                    scalb = Math.scalb((float) j10, i10 - 1);
                }
                return kotlin.ranges.d.j(scalb, 18000000L) + j11;
            } else if (z11) {
                if (i11 == 0) {
                    j16 = j11 + j12;
                } else {
                    j16 = j11 + j14;
                }
                if (j13 != j14 && i11 == 0) {
                    return j16 + (j14 - j13);
                }
                return j16;
            } else if (j11 == -1) {
                return LongCompanionObject.MAX_VALUE;
            } else {
                return j11 + j12;
            }
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public String f44933a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f44934b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f44933a = id2;
            this.f44934b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f44933a, bVar.f44933a) && this.f44934b == bVar.f44934b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44933a.hashCode() * 31) + this.f44934b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f44933a + ", state=" + this.f44934b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f44908y = i10;
        f44909z = new Function() { // from class: p4.t
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                List b10;
                b10 = u.b((List) obj);
                return b10;
            }
        };
    }

    public u(String id2, k4.x state, String workerClassName, String inputMergerClassName, androidx.work.b input, androidx.work.b output, long j10, long j11, long j12, k4.d constraints, int i10, k4.a backoffPolicy, long j13, long j14, long j15, long j16, boolean z10, k4.r outOfQuotaPolicy, int i11, int i12, long j17, int i13, int i14) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(workerClassName, "workerClassName");
        Intrinsics.checkNotNullParameter(inputMergerClassName, "inputMergerClassName");
        Intrinsics.checkNotNullParameter(input, "input");
        Intrinsics.checkNotNullParameter(output, "output");
        Intrinsics.checkNotNullParameter(constraints, "constraints");
        Intrinsics.checkNotNullParameter(backoffPolicy, "backoffPolicy");
        Intrinsics.checkNotNullParameter(outOfQuotaPolicy, "outOfQuotaPolicy");
        this.f44910a = id2;
        this.f44911b = state;
        this.f44912c = workerClassName;
        this.f44913d = inputMergerClassName;
        this.f44914e = input;
        this.f44915f = output;
        this.f44916g = j10;
        this.f44917h = j11;
        this.f44918i = j12;
        this.f44919j = constraints;
        this.f44920k = i10;
        this.f44921l = backoffPolicy;
        this.f44922m = j13;
        this.f44923n = j14;
        this.f44924o = j15;
        this.f44925p = j16;
        this.f44926q = z10;
        this.f44927r = outOfQuotaPolicy;
        this.f44928s = i11;
        this.f44929t = i12;
        this.f44930u = j17;
        this.f44931v = i13;
        this.f44932w = i14;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List b(List list) {
        if (list == null) {
            return null;
        }
        List list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        Iterator it = list2.iterator();
        if (!it.hasNext()) {
            return arrayList;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public static /* synthetic */ u e(u uVar, String str, k4.x xVar, String str2, String str3, androidx.work.b bVar, androidx.work.b bVar2, long j10, long j11, long j12, k4.d dVar, int i10, k4.a aVar, long j13, long j14, long j15, long j16, boolean z10, k4.r rVar, int i11, int i12, long j17, int i13, int i14, int i15, Object obj) {
        String str4 = (i15 & 1) != 0 ? uVar.f44910a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f44911b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f44912c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f44913d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f44914e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f44915f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f44916g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f44917h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f44918i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f44919j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f44920k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f44921l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f44922m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f44923n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f44924o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f44925p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f44926q : z10, (i15 & 131072) != 0 ? uVar.f44927r : rVar, (i15 & 262144) != 0 ? uVar.f44928s : i11, (i15 & 524288) != 0 ? uVar.f44929t : i12, (i15 & 1048576) != 0 ? uVar.f44930u : j17, (i15 & 2097152) != 0 ? uVar.f44931v : i13, (i15 & 4194304) != 0 ? uVar.f44932w : i14);
    }

    public final long c() {
        return f44907x.a(l(), this.f44920k, this.f44921l, this.f44922m, this.f44923n, this.f44928s, m(), this.f44916g, this.f44918i, this.f44917h, this.f44930u);
    }

    public final u d(String id2, k4.x state, String workerClassName, String inputMergerClassName, androidx.work.b input, androidx.work.b output, long j10, long j11, long j12, k4.d constraints, int i10, k4.a backoffPolicy, long j13, long j14, long j15, long j16, boolean z10, k4.r outOfQuotaPolicy, int i11, int i12, long j17, int i13, int i14) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(workerClassName, "workerClassName");
        Intrinsics.checkNotNullParameter(inputMergerClassName, "inputMergerClassName");
        Intrinsics.checkNotNullParameter(input, "input");
        Intrinsics.checkNotNullParameter(output, "output");
        Intrinsics.checkNotNullParameter(constraints, "constraints");
        Intrinsics.checkNotNullParameter(backoffPolicy, "backoffPolicy");
        Intrinsics.checkNotNullParameter(outOfQuotaPolicy, "outOfQuotaPolicy");
        return new u(id2, state, workerClassName, inputMergerClassName, input, output, j10, j11, j12, constraints, i10, backoffPolicy, j13, j14, j15, j16, z10, outOfQuotaPolicy, i11, i12, j17, i13, i14);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f44910a, uVar.f44910a) && this.f44911b == uVar.f44911b && Intrinsics.areEqual(this.f44912c, uVar.f44912c) && Intrinsics.areEqual(this.f44913d, uVar.f44913d) && Intrinsics.areEqual(this.f44914e, uVar.f44914e) && Intrinsics.areEqual(this.f44915f, uVar.f44915f) && this.f44916g == uVar.f44916g && this.f44917h == uVar.f44917h && this.f44918i == uVar.f44918i && Intrinsics.areEqual(this.f44919j, uVar.f44919j) && this.f44920k == uVar.f44920k && this.f44921l == uVar.f44921l && this.f44922m == uVar.f44922m && this.f44923n == uVar.f44923n && this.f44924o == uVar.f44924o && this.f44925p == uVar.f44925p && this.f44926q == uVar.f44926q && this.f44927r == uVar.f44927r && this.f44928s == uVar.f44928s && this.f44929t == uVar.f44929t && this.f44930u == uVar.f44930u && this.f44931v == uVar.f44931v && this.f44932w == uVar.f44932w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f44929t;
    }

    public final long g() {
        return this.f44930u;
    }

    public final int h() {
        return this.f44931v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f44910a.hashCode() * 31) + this.f44911b.hashCode()) * 31) + this.f44912c.hashCode()) * 31) + this.f44913d.hashCode()) * 31) + this.f44914e.hashCode()) * 31) + this.f44915f.hashCode()) * 31) + Long.hashCode(this.f44916g)) * 31) + Long.hashCode(this.f44917h)) * 31) + Long.hashCode(this.f44918i)) * 31) + this.f44919j.hashCode()) * 31) + Integer.hashCode(this.f44920k)) * 31) + this.f44921l.hashCode()) * 31) + Long.hashCode(this.f44922m)) * 31) + Long.hashCode(this.f44923n)) * 31) + Long.hashCode(this.f44924o)) * 31) + Long.hashCode(this.f44925p)) * 31;
        boolean z10 = this.f44926q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f44927r.hashCode()) * 31) + Integer.hashCode(this.f44928s)) * 31) + Integer.hashCode(this.f44929t)) * 31) + Long.hashCode(this.f44930u)) * 31) + Integer.hashCode(this.f44931v)) * 31) + Integer.hashCode(this.f44932w);
    }

    public final int i() {
        return this.f44928s;
    }

    public final int j() {
        return this.f44932w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f32948j, this.f44919j);
    }

    public final boolean l() {
        if (this.f44911b == k4.x.ENQUEUED && this.f44920k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f44917h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f44910a + '}';
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ u(java.lang.String r35, k4.x r36, java.lang.String r37, java.lang.String r38, androidx.work.b r39, androidx.work.b r40, long r41, long r43, long r45, k4.d r47, int r48, k4.a r49, long r50, long r52, long r54, long r56, boolean r58, k4.r r59, int r60, int r61, long r62, int r64, int r65, int r66, kotlin.jvm.internal.DefaultConstructorMarker r67) {
        /*
            Method dump skipped, instructions count: 248
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: p4.u.<init>(java.lang.String, k4.x, java.lang.String, java.lang.String, androidx.work.b, androidx.work.b, long, long, long, k4.d, int, k4.a, long, long, long, long, boolean, k4.r, int, int, long, int, int, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public u(String id2, String workerClassName_) {
        this(id2, null, workerClassName_, null, null, null, 0L, 0L, 0L, null, 0, null, 0L, 0L, 0L, 0L, false, null, 0, 0, 0L, 0, 0, 8388602, null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(workerClassName_, "workerClassName_");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public u(String newId, u other) {
        this(newId, other.f44911b, other.f44912c, other.f44913d, new androidx.work.b(other.f44914e), new androidx.work.b(other.f44915f), other.f44916g, other.f44917h, other.f44918i, new k4.d(other.f44919j), other.f44920k, other.f44921l, other.f44922m, other.f44923n, other.f44924o, other.f44925p, other.f44926q, other.f44927r, other.f44928s, 0, other.f44930u, other.f44931v, other.f44932w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
