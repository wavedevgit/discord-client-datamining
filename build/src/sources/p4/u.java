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
    public static final a f42012x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f42013y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f42014z;

    /* renamed from: a  reason: collision with root package name */
    public final String f42015a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f42016b;

    /* renamed from: c  reason: collision with root package name */
    public String f42017c;

    /* renamed from: d  reason: collision with root package name */
    public String f42018d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f42019e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f42020f;

    /* renamed from: g  reason: collision with root package name */
    public long f42021g;

    /* renamed from: h  reason: collision with root package name */
    public long f42022h;

    /* renamed from: i  reason: collision with root package name */
    public long f42023i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f42024j;

    /* renamed from: k  reason: collision with root package name */
    public int f42025k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f42026l;

    /* renamed from: m  reason: collision with root package name */
    public long f42027m;

    /* renamed from: n  reason: collision with root package name */
    public long f42028n;

    /* renamed from: o  reason: collision with root package name */
    public long f42029o;

    /* renamed from: p  reason: collision with root package name */
    public long f42030p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f42031q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f42032r;

    /* renamed from: s  reason: collision with root package name */
    private int f42033s;

    /* renamed from: t  reason: collision with root package name */
    private final int f42034t;

    /* renamed from: u  reason: collision with root package name */
    private long f42035u;

    /* renamed from: v  reason: collision with root package name */
    private int f42036v;

    /* renamed from: w  reason: collision with root package name */
    private final int f42037w;

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
        public String f42038a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f42039b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f42038a = id2;
            this.f42039b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f42038a, bVar.f42038a) && this.f42039b == bVar.f42039b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f42038a.hashCode() * 31) + this.f42039b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f42038a + ", state=" + this.f42039b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f42013y = i10;
        f42014z = new Function() { // from class: p4.t
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
        this.f42015a = id2;
        this.f42016b = state;
        this.f42017c = workerClassName;
        this.f42018d = inputMergerClassName;
        this.f42019e = input;
        this.f42020f = output;
        this.f42021g = j10;
        this.f42022h = j11;
        this.f42023i = j12;
        this.f42024j = constraints;
        this.f42025k = i10;
        this.f42026l = backoffPolicy;
        this.f42027m = j13;
        this.f42028n = j14;
        this.f42029o = j15;
        this.f42030p = j16;
        this.f42031q = z10;
        this.f42032r = outOfQuotaPolicy;
        this.f42033s = i11;
        this.f42034t = i12;
        this.f42035u = j17;
        this.f42036v = i13;
        this.f42037w = i14;
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
        String str4 = (i15 & 1) != 0 ? uVar.f42015a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f42016b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f42017c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f42018d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f42019e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f42020f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f42021g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f42022h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f42023i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f42024j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f42025k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f42026l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f42027m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f42028n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f42029o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f42030p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f42031q : z10, (i15 & 131072) != 0 ? uVar.f42032r : rVar, (i15 & 262144) != 0 ? uVar.f42033s : i11, (i15 & 524288) != 0 ? uVar.f42034t : i12, (i15 & 1048576) != 0 ? uVar.f42035u : j17, (i15 & 2097152) != 0 ? uVar.f42036v : i13, (i15 & 4194304) != 0 ? uVar.f42037w : i14);
    }

    public final long c() {
        return f42012x.a(l(), this.f42025k, this.f42026l, this.f42027m, this.f42028n, this.f42033s, m(), this.f42021g, this.f42023i, this.f42022h, this.f42035u);
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
        if (Intrinsics.areEqual(this.f42015a, uVar.f42015a) && this.f42016b == uVar.f42016b && Intrinsics.areEqual(this.f42017c, uVar.f42017c) && Intrinsics.areEqual(this.f42018d, uVar.f42018d) && Intrinsics.areEqual(this.f42019e, uVar.f42019e) && Intrinsics.areEqual(this.f42020f, uVar.f42020f) && this.f42021g == uVar.f42021g && this.f42022h == uVar.f42022h && this.f42023i == uVar.f42023i && Intrinsics.areEqual(this.f42024j, uVar.f42024j) && this.f42025k == uVar.f42025k && this.f42026l == uVar.f42026l && this.f42027m == uVar.f42027m && this.f42028n == uVar.f42028n && this.f42029o == uVar.f42029o && this.f42030p == uVar.f42030p && this.f42031q == uVar.f42031q && this.f42032r == uVar.f42032r && this.f42033s == uVar.f42033s && this.f42034t == uVar.f42034t && this.f42035u == uVar.f42035u && this.f42036v == uVar.f42036v && this.f42037w == uVar.f42037w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f42034t;
    }

    public final long g() {
        return this.f42035u;
    }

    public final int h() {
        return this.f42036v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f42015a.hashCode() * 31) + this.f42016b.hashCode()) * 31) + this.f42017c.hashCode()) * 31) + this.f42018d.hashCode()) * 31) + this.f42019e.hashCode()) * 31) + this.f42020f.hashCode()) * 31) + Long.hashCode(this.f42021g)) * 31) + Long.hashCode(this.f42022h)) * 31) + Long.hashCode(this.f42023i)) * 31) + this.f42024j.hashCode()) * 31) + Integer.hashCode(this.f42025k)) * 31) + this.f42026l.hashCode()) * 31) + Long.hashCode(this.f42027m)) * 31) + Long.hashCode(this.f42028n)) * 31) + Long.hashCode(this.f42029o)) * 31) + Long.hashCode(this.f42030p)) * 31;
        boolean z10 = this.f42031q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f42032r.hashCode()) * 31) + Integer.hashCode(this.f42033s)) * 31) + Integer.hashCode(this.f42034t)) * 31) + Long.hashCode(this.f42035u)) * 31) + Integer.hashCode(this.f42036v)) * 31) + Integer.hashCode(this.f42037w);
    }

    public final int i() {
        return this.f42033s;
    }

    public final int j() {
        return this.f42037w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f32058j, this.f42024j);
    }

    public final boolean l() {
        if (this.f42016b == k4.x.ENQUEUED && this.f42025k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f42022h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f42015a + '}';
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
        this(newId, other.f42016b, other.f42017c, other.f42018d, new androidx.work.b(other.f42019e), new androidx.work.b(other.f42020f), other.f42021g, other.f42022h, other.f42023i, new k4.d(other.f42024j), other.f42025k, other.f42026l, other.f42027m, other.f42028n, other.f42029o, other.f42030p, other.f42031q, other.f42032r, other.f42033s, 0, other.f42035u, other.f42036v, other.f42037w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
