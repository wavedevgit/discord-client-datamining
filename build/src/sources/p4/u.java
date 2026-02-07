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
    public static final a f43730x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f43731y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f43732z;

    /* renamed from: a  reason: collision with root package name */
    public final String f43733a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f43734b;

    /* renamed from: c  reason: collision with root package name */
    public String f43735c;

    /* renamed from: d  reason: collision with root package name */
    public String f43736d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f43737e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f43738f;

    /* renamed from: g  reason: collision with root package name */
    public long f43739g;

    /* renamed from: h  reason: collision with root package name */
    public long f43740h;

    /* renamed from: i  reason: collision with root package name */
    public long f43741i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f43742j;

    /* renamed from: k  reason: collision with root package name */
    public int f43743k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f43744l;

    /* renamed from: m  reason: collision with root package name */
    public long f43745m;

    /* renamed from: n  reason: collision with root package name */
    public long f43746n;

    /* renamed from: o  reason: collision with root package name */
    public long f43747o;

    /* renamed from: p  reason: collision with root package name */
    public long f43748p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f43749q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f43750r;

    /* renamed from: s  reason: collision with root package name */
    private int f43751s;

    /* renamed from: t  reason: collision with root package name */
    private final int f43752t;

    /* renamed from: u  reason: collision with root package name */
    private long f43753u;

    /* renamed from: v  reason: collision with root package name */
    private int f43754v;

    /* renamed from: w  reason: collision with root package name */
    private final int f43755w;

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
        public String f43756a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f43757b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f43756a = id2;
            this.f43757b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f43756a, bVar.f43756a) && this.f43757b == bVar.f43757b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f43756a.hashCode() * 31) + this.f43757b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f43756a + ", state=" + this.f43757b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f43731y = i10;
        f43732z = new Function() { // from class: p4.t
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
        this.f43733a = id2;
        this.f43734b = state;
        this.f43735c = workerClassName;
        this.f43736d = inputMergerClassName;
        this.f43737e = input;
        this.f43738f = output;
        this.f43739g = j10;
        this.f43740h = j11;
        this.f43741i = j12;
        this.f43742j = constraints;
        this.f43743k = i10;
        this.f43744l = backoffPolicy;
        this.f43745m = j13;
        this.f43746n = j14;
        this.f43747o = j15;
        this.f43748p = j16;
        this.f43749q = z10;
        this.f43750r = outOfQuotaPolicy;
        this.f43751s = i11;
        this.f43752t = i12;
        this.f43753u = j17;
        this.f43754v = i13;
        this.f43755w = i14;
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
        String str4 = (i15 & 1) != 0 ? uVar.f43733a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f43734b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f43735c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f43736d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f43737e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f43738f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f43739g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f43740h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f43741i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f43742j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f43743k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f43744l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f43745m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f43746n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f43747o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f43748p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f43749q : z10, (i15 & 131072) != 0 ? uVar.f43750r : rVar, (i15 & 262144) != 0 ? uVar.f43751s : i11, (i15 & 524288) != 0 ? uVar.f43752t : i12, (i15 & 1048576) != 0 ? uVar.f43753u : j17, (i15 & 2097152) != 0 ? uVar.f43754v : i13, (i15 & 4194304) != 0 ? uVar.f43755w : i14);
    }

    public final long c() {
        return f43730x.a(l(), this.f43743k, this.f43744l, this.f43745m, this.f43746n, this.f43751s, m(), this.f43739g, this.f43741i, this.f43740h, this.f43753u);
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
        if (Intrinsics.areEqual(this.f43733a, uVar.f43733a) && this.f43734b == uVar.f43734b && Intrinsics.areEqual(this.f43735c, uVar.f43735c) && Intrinsics.areEqual(this.f43736d, uVar.f43736d) && Intrinsics.areEqual(this.f43737e, uVar.f43737e) && Intrinsics.areEqual(this.f43738f, uVar.f43738f) && this.f43739g == uVar.f43739g && this.f43740h == uVar.f43740h && this.f43741i == uVar.f43741i && Intrinsics.areEqual(this.f43742j, uVar.f43742j) && this.f43743k == uVar.f43743k && this.f43744l == uVar.f43744l && this.f43745m == uVar.f43745m && this.f43746n == uVar.f43746n && this.f43747o == uVar.f43747o && this.f43748p == uVar.f43748p && this.f43749q == uVar.f43749q && this.f43750r == uVar.f43750r && this.f43751s == uVar.f43751s && this.f43752t == uVar.f43752t && this.f43753u == uVar.f43753u && this.f43754v == uVar.f43754v && this.f43755w == uVar.f43755w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f43752t;
    }

    public final long g() {
        return this.f43753u;
    }

    public final int h() {
        return this.f43754v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f43733a.hashCode() * 31) + this.f43734b.hashCode()) * 31) + this.f43735c.hashCode()) * 31) + this.f43736d.hashCode()) * 31) + this.f43737e.hashCode()) * 31) + this.f43738f.hashCode()) * 31) + Long.hashCode(this.f43739g)) * 31) + Long.hashCode(this.f43740h)) * 31) + Long.hashCode(this.f43741i)) * 31) + this.f43742j.hashCode()) * 31) + Integer.hashCode(this.f43743k)) * 31) + this.f43744l.hashCode()) * 31) + Long.hashCode(this.f43745m)) * 31) + Long.hashCode(this.f43746n)) * 31) + Long.hashCode(this.f43747o)) * 31) + Long.hashCode(this.f43748p)) * 31;
        boolean z10 = this.f43749q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f43750r.hashCode()) * 31) + Integer.hashCode(this.f43751s)) * 31) + Integer.hashCode(this.f43752t)) * 31) + Long.hashCode(this.f43753u)) * 31) + Integer.hashCode(this.f43754v)) * 31) + Integer.hashCode(this.f43755w);
    }

    public final int i() {
        return this.f43751s;
    }

    public final int j() {
        return this.f43755w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f31463j, this.f43742j);
    }

    public final boolean l() {
        if (this.f43734b == k4.x.ENQUEUED && this.f43743k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f43740h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f43733a + '}';
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
        this(newId, other.f43734b, other.f43735c, other.f43736d, new androidx.work.b(other.f43737e), new androidx.work.b(other.f43738f), other.f43739g, other.f43740h, other.f43741i, new k4.d(other.f43742j), other.f43743k, other.f43744l, other.f43745m, other.f43746n, other.f43747o, other.f43748p, other.f43749q, other.f43750r, other.f43751s, 0, other.f43753u, other.f43754v, other.f43755w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
