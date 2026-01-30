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
    public static final a f44923x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f44924y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f44925z;

    /* renamed from: a  reason: collision with root package name */
    public final String f44926a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f44927b;

    /* renamed from: c  reason: collision with root package name */
    public String f44928c;

    /* renamed from: d  reason: collision with root package name */
    public String f44929d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f44930e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f44931f;

    /* renamed from: g  reason: collision with root package name */
    public long f44932g;

    /* renamed from: h  reason: collision with root package name */
    public long f44933h;

    /* renamed from: i  reason: collision with root package name */
    public long f44934i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f44935j;

    /* renamed from: k  reason: collision with root package name */
    public int f44936k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f44937l;

    /* renamed from: m  reason: collision with root package name */
    public long f44938m;

    /* renamed from: n  reason: collision with root package name */
    public long f44939n;

    /* renamed from: o  reason: collision with root package name */
    public long f44940o;

    /* renamed from: p  reason: collision with root package name */
    public long f44941p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f44942q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f44943r;

    /* renamed from: s  reason: collision with root package name */
    private int f44944s;

    /* renamed from: t  reason: collision with root package name */
    private final int f44945t;

    /* renamed from: u  reason: collision with root package name */
    private long f44946u;

    /* renamed from: v  reason: collision with root package name */
    private int f44947v;

    /* renamed from: w  reason: collision with root package name */
    private final int f44948w;

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
        public String f44949a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f44950b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f44949a = id2;
            this.f44950b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f44949a, bVar.f44949a) && this.f44950b == bVar.f44950b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44949a.hashCode() * 31) + this.f44950b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f44949a + ", state=" + this.f44950b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f44924y = i10;
        f44925z = new Function() { // from class: p4.t
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
        this.f44926a = id2;
        this.f44927b = state;
        this.f44928c = workerClassName;
        this.f44929d = inputMergerClassName;
        this.f44930e = input;
        this.f44931f = output;
        this.f44932g = j10;
        this.f44933h = j11;
        this.f44934i = j12;
        this.f44935j = constraints;
        this.f44936k = i10;
        this.f44937l = backoffPolicy;
        this.f44938m = j13;
        this.f44939n = j14;
        this.f44940o = j15;
        this.f44941p = j16;
        this.f44942q = z10;
        this.f44943r = outOfQuotaPolicy;
        this.f44944s = i11;
        this.f44945t = i12;
        this.f44946u = j17;
        this.f44947v = i13;
        this.f44948w = i14;
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
        String str4 = (i15 & 1) != 0 ? uVar.f44926a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f44927b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f44928c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f44929d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f44930e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f44931f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f44932g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f44933h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f44934i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f44935j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f44936k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f44937l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f44938m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f44939n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f44940o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f44941p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f44942q : z10, (i15 & 131072) != 0 ? uVar.f44943r : rVar, (i15 & 262144) != 0 ? uVar.f44944s : i11, (i15 & 524288) != 0 ? uVar.f44945t : i12, (i15 & 1048576) != 0 ? uVar.f44946u : j17, (i15 & 2097152) != 0 ? uVar.f44947v : i13, (i15 & 4194304) != 0 ? uVar.f44948w : i14);
    }

    public final long c() {
        return f44923x.a(l(), this.f44936k, this.f44937l, this.f44938m, this.f44939n, this.f44944s, m(), this.f44932g, this.f44934i, this.f44933h, this.f44946u);
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
        if (Intrinsics.areEqual(this.f44926a, uVar.f44926a) && this.f44927b == uVar.f44927b && Intrinsics.areEqual(this.f44928c, uVar.f44928c) && Intrinsics.areEqual(this.f44929d, uVar.f44929d) && Intrinsics.areEqual(this.f44930e, uVar.f44930e) && Intrinsics.areEqual(this.f44931f, uVar.f44931f) && this.f44932g == uVar.f44932g && this.f44933h == uVar.f44933h && this.f44934i == uVar.f44934i && Intrinsics.areEqual(this.f44935j, uVar.f44935j) && this.f44936k == uVar.f44936k && this.f44937l == uVar.f44937l && this.f44938m == uVar.f44938m && this.f44939n == uVar.f44939n && this.f44940o == uVar.f44940o && this.f44941p == uVar.f44941p && this.f44942q == uVar.f44942q && this.f44943r == uVar.f44943r && this.f44944s == uVar.f44944s && this.f44945t == uVar.f44945t && this.f44946u == uVar.f44946u && this.f44947v == uVar.f44947v && this.f44948w == uVar.f44948w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f44945t;
    }

    public final long g() {
        return this.f44946u;
    }

    public final int h() {
        return this.f44947v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f44926a.hashCode() * 31) + this.f44927b.hashCode()) * 31) + this.f44928c.hashCode()) * 31) + this.f44929d.hashCode()) * 31) + this.f44930e.hashCode()) * 31) + this.f44931f.hashCode()) * 31) + Long.hashCode(this.f44932g)) * 31) + Long.hashCode(this.f44933h)) * 31) + Long.hashCode(this.f44934i)) * 31) + this.f44935j.hashCode()) * 31) + Integer.hashCode(this.f44936k)) * 31) + this.f44937l.hashCode()) * 31) + Long.hashCode(this.f44938m)) * 31) + Long.hashCode(this.f44939n)) * 31) + Long.hashCode(this.f44940o)) * 31) + Long.hashCode(this.f44941p)) * 31;
        boolean z10 = this.f44942q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f44943r.hashCode()) * 31) + Integer.hashCode(this.f44944s)) * 31) + Integer.hashCode(this.f44945t)) * 31) + Long.hashCode(this.f44946u)) * 31) + Integer.hashCode(this.f44947v)) * 31) + Integer.hashCode(this.f44948w);
    }

    public final int i() {
        return this.f44944s;
    }

    public final int j() {
        return this.f44948w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f32964j, this.f44935j);
    }

    public final boolean l() {
        if (this.f44927b == k4.x.ENQUEUED && this.f44936k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f44933h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f44926a + '}';
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
        this(newId, other.f44927b, other.f44928c, other.f44929d, new androidx.work.b(other.f44930e), new androidx.work.b(other.f44931f), other.f44932g, other.f44933h, other.f44934i, new k4.d(other.f44935j), other.f44936k, other.f44937l, other.f44938m, other.f44939n, other.f44940o, other.f44941p, other.f44942q, other.f44943r, other.f44944s, 0, other.f44946u, other.f44947v, other.f44948w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
