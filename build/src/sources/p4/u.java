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
    public static final a f42985x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f42986y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f42987z;

    /* renamed from: a  reason: collision with root package name */
    public final String f42988a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f42989b;

    /* renamed from: c  reason: collision with root package name */
    public String f42990c;

    /* renamed from: d  reason: collision with root package name */
    public String f42991d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f42992e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f42993f;

    /* renamed from: g  reason: collision with root package name */
    public long f42994g;

    /* renamed from: h  reason: collision with root package name */
    public long f42995h;

    /* renamed from: i  reason: collision with root package name */
    public long f42996i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f42997j;

    /* renamed from: k  reason: collision with root package name */
    public int f42998k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f42999l;

    /* renamed from: m  reason: collision with root package name */
    public long f43000m;

    /* renamed from: n  reason: collision with root package name */
    public long f43001n;

    /* renamed from: o  reason: collision with root package name */
    public long f43002o;

    /* renamed from: p  reason: collision with root package name */
    public long f43003p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f43004q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f43005r;

    /* renamed from: s  reason: collision with root package name */
    private int f43006s;

    /* renamed from: t  reason: collision with root package name */
    private final int f43007t;

    /* renamed from: u  reason: collision with root package name */
    private long f43008u;

    /* renamed from: v  reason: collision with root package name */
    private int f43009v;

    /* renamed from: w  reason: collision with root package name */
    private final int f43010w;

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
        public String f43011a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f43012b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f43011a = id2;
            this.f43012b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f43011a, bVar.f43011a) && this.f43012b == bVar.f43012b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f43011a.hashCode() * 31) + this.f43012b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f43011a + ", state=" + this.f43012b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f42986y = i10;
        f42987z = new Function() { // from class: p4.t
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
        this.f42988a = id2;
        this.f42989b = state;
        this.f42990c = workerClassName;
        this.f42991d = inputMergerClassName;
        this.f42992e = input;
        this.f42993f = output;
        this.f42994g = j10;
        this.f42995h = j11;
        this.f42996i = j12;
        this.f42997j = constraints;
        this.f42998k = i10;
        this.f42999l = backoffPolicy;
        this.f43000m = j13;
        this.f43001n = j14;
        this.f43002o = j15;
        this.f43003p = j16;
        this.f43004q = z10;
        this.f43005r = outOfQuotaPolicy;
        this.f43006s = i11;
        this.f43007t = i12;
        this.f43008u = j17;
        this.f43009v = i13;
        this.f43010w = i14;
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
        String str4 = (i15 & 1) != 0 ? uVar.f42988a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f42989b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f42990c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f42991d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f42992e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f42993f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f42994g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f42995h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f42996i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f42997j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f42998k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f42999l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f43000m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f43001n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f43002o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f43003p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f43004q : z10, (i15 & 131072) != 0 ? uVar.f43005r : rVar, (i15 & 262144) != 0 ? uVar.f43006s : i11, (i15 & 524288) != 0 ? uVar.f43007t : i12, (i15 & 1048576) != 0 ? uVar.f43008u : j17, (i15 & 2097152) != 0 ? uVar.f43009v : i13, (i15 & 4194304) != 0 ? uVar.f43010w : i14);
    }

    public final long c() {
        return f42985x.a(l(), this.f42998k, this.f42999l, this.f43000m, this.f43001n, this.f43006s, m(), this.f42994g, this.f42996i, this.f42995h, this.f43008u);
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
        if (Intrinsics.areEqual(this.f42988a, uVar.f42988a) && this.f42989b == uVar.f42989b && Intrinsics.areEqual(this.f42990c, uVar.f42990c) && Intrinsics.areEqual(this.f42991d, uVar.f42991d) && Intrinsics.areEqual(this.f42992e, uVar.f42992e) && Intrinsics.areEqual(this.f42993f, uVar.f42993f) && this.f42994g == uVar.f42994g && this.f42995h == uVar.f42995h && this.f42996i == uVar.f42996i && Intrinsics.areEqual(this.f42997j, uVar.f42997j) && this.f42998k == uVar.f42998k && this.f42999l == uVar.f42999l && this.f43000m == uVar.f43000m && this.f43001n == uVar.f43001n && this.f43002o == uVar.f43002o && this.f43003p == uVar.f43003p && this.f43004q == uVar.f43004q && this.f43005r == uVar.f43005r && this.f43006s == uVar.f43006s && this.f43007t == uVar.f43007t && this.f43008u == uVar.f43008u && this.f43009v == uVar.f43009v && this.f43010w == uVar.f43010w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f43007t;
    }

    public final long g() {
        return this.f43008u;
    }

    public final int h() {
        return this.f43009v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f42988a.hashCode() * 31) + this.f42989b.hashCode()) * 31) + this.f42990c.hashCode()) * 31) + this.f42991d.hashCode()) * 31) + this.f42992e.hashCode()) * 31) + this.f42993f.hashCode()) * 31) + Long.hashCode(this.f42994g)) * 31) + Long.hashCode(this.f42995h)) * 31) + Long.hashCode(this.f42996i)) * 31) + this.f42997j.hashCode()) * 31) + Integer.hashCode(this.f42998k)) * 31) + this.f42999l.hashCode()) * 31) + Long.hashCode(this.f43000m)) * 31) + Long.hashCode(this.f43001n)) * 31) + Long.hashCode(this.f43002o)) * 31) + Long.hashCode(this.f43003p)) * 31;
        boolean z10 = this.f43004q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f43005r.hashCode()) * 31) + Integer.hashCode(this.f43006s)) * 31) + Integer.hashCode(this.f43007t)) * 31) + Long.hashCode(this.f43008u)) * 31) + Integer.hashCode(this.f43009v)) * 31) + Integer.hashCode(this.f43010w);
    }

    public final int i() {
        return this.f43006s;
    }

    public final int j() {
        return this.f43010w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f30631j, this.f42997j);
    }

    public final boolean l() {
        if (this.f42989b == k4.x.ENQUEUED && this.f42998k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f42995h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f42988a + '}';
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
        this(newId, other.f42989b, other.f42990c, other.f42991d, new androidx.work.b(other.f42992e), new androidx.work.b(other.f42993f), other.f42994g, other.f42995h, other.f42996i, new k4.d(other.f42997j), other.f42998k, other.f42999l, other.f43000m, other.f43001n, other.f43002o, other.f43003p, other.f43004q, other.f43005r, other.f43006s, 0, other.f43008u, other.f43009v, other.f43010w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
