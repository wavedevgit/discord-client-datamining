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
    public static final a f44997x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f44998y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f44999z;

    /* renamed from: a  reason: collision with root package name */
    public final String f45000a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f45001b;

    /* renamed from: c  reason: collision with root package name */
    public String f45002c;

    /* renamed from: d  reason: collision with root package name */
    public String f45003d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f45004e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f45005f;

    /* renamed from: g  reason: collision with root package name */
    public long f45006g;

    /* renamed from: h  reason: collision with root package name */
    public long f45007h;

    /* renamed from: i  reason: collision with root package name */
    public long f45008i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f45009j;

    /* renamed from: k  reason: collision with root package name */
    public int f45010k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f45011l;

    /* renamed from: m  reason: collision with root package name */
    public long f45012m;

    /* renamed from: n  reason: collision with root package name */
    public long f45013n;

    /* renamed from: o  reason: collision with root package name */
    public long f45014o;

    /* renamed from: p  reason: collision with root package name */
    public long f45015p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f45016q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f45017r;

    /* renamed from: s  reason: collision with root package name */
    private int f45018s;

    /* renamed from: t  reason: collision with root package name */
    private final int f45019t;

    /* renamed from: u  reason: collision with root package name */
    private long f45020u;

    /* renamed from: v  reason: collision with root package name */
    private int f45021v;

    /* renamed from: w  reason: collision with root package name */
    private final int f45022w;

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
        public String f45023a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f45024b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f45023a = id2;
            this.f45024b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f45023a, bVar.f45023a) && this.f45024b == bVar.f45024b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f45023a.hashCode() * 31) + this.f45024b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f45023a + ", state=" + this.f45024b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f44998y = i10;
        f44999z = new Function() { // from class: p4.t
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
        this.f45000a = id2;
        this.f45001b = state;
        this.f45002c = workerClassName;
        this.f45003d = inputMergerClassName;
        this.f45004e = input;
        this.f45005f = output;
        this.f45006g = j10;
        this.f45007h = j11;
        this.f45008i = j12;
        this.f45009j = constraints;
        this.f45010k = i10;
        this.f45011l = backoffPolicy;
        this.f45012m = j13;
        this.f45013n = j14;
        this.f45014o = j15;
        this.f45015p = j16;
        this.f45016q = z10;
        this.f45017r = outOfQuotaPolicy;
        this.f45018s = i11;
        this.f45019t = i12;
        this.f45020u = j17;
        this.f45021v = i13;
        this.f45022w = i14;
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
        String str4 = (i15 & 1) != 0 ? uVar.f45000a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f45001b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f45002c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f45003d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f45004e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f45005f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f45006g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f45007h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f45008i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f45009j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f45010k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f45011l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f45012m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f45013n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f45014o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f45015p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f45016q : z10, (i15 & 131072) != 0 ? uVar.f45017r : rVar, (i15 & 262144) != 0 ? uVar.f45018s : i11, (i15 & 524288) != 0 ? uVar.f45019t : i12, (i15 & 1048576) != 0 ? uVar.f45020u : j17, (i15 & 2097152) != 0 ? uVar.f45021v : i13, (i15 & 4194304) != 0 ? uVar.f45022w : i14);
    }

    public final long c() {
        return f44997x.a(l(), this.f45010k, this.f45011l, this.f45012m, this.f45013n, this.f45018s, m(), this.f45006g, this.f45008i, this.f45007h, this.f45020u);
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
        if (Intrinsics.areEqual(this.f45000a, uVar.f45000a) && this.f45001b == uVar.f45001b && Intrinsics.areEqual(this.f45002c, uVar.f45002c) && Intrinsics.areEqual(this.f45003d, uVar.f45003d) && Intrinsics.areEqual(this.f45004e, uVar.f45004e) && Intrinsics.areEqual(this.f45005f, uVar.f45005f) && this.f45006g == uVar.f45006g && this.f45007h == uVar.f45007h && this.f45008i == uVar.f45008i && Intrinsics.areEqual(this.f45009j, uVar.f45009j) && this.f45010k == uVar.f45010k && this.f45011l == uVar.f45011l && this.f45012m == uVar.f45012m && this.f45013n == uVar.f45013n && this.f45014o == uVar.f45014o && this.f45015p == uVar.f45015p && this.f45016q == uVar.f45016q && this.f45017r == uVar.f45017r && this.f45018s == uVar.f45018s && this.f45019t == uVar.f45019t && this.f45020u == uVar.f45020u && this.f45021v == uVar.f45021v && this.f45022w == uVar.f45022w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f45019t;
    }

    public final long g() {
        return this.f45020u;
    }

    public final int h() {
        return this.f45021v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f45000a.hashCode() * 31) + this.f45001b.hashCode()) * 31) + this.f45002c.hashCode()) * 31) + this.f45003d.hashCode()) * 31) + this.f45004e.hashCode()) * 31) + this.f45005f.hashCode()) * 31) + Long.hashCode(this.f45006g)) * 31) + Long.hashCode(this.f45007h)) * 31) + Long.hashCode(this.f45008i)) * 31) + this.f45009j.hashCode()) * 31) + Integer.hashCode(this.f45010k)) * 31) + this.f45011l.hashCode()) * 31) + Long.hashCode(this.f45012m)) * 31) + Long.hashCode(this.f45013n)) * 31) + Long.hashCode(this.f45014o)) * 31) + Long.hashCode(this.f45015p)) * 31;
        boolean z10 = this.f45016q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f45017r.hashCode()) * 31) + Integer.hashCode(this.f45018s)) * 31) + Integer.hashCode(this.f45019t)) * 31) + Long.hashCode(this.f45020u)) * 31) + Integer.hashCode(this.f45021v)) * 31) + Integer.hashCode(this.f45022w);
    }

    public final int i() {
        return this.f45018s;
    }

    public final int j() {
        return this.f45022w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f32710j, this.f45009j);
    }

    public final boolean l() {
        if (this.f45001b == k4.x.ENQUEUED && this.f45010k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f45007h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f45000a + '}';
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
        this(newId, other.f45001b, other.f45002c, other.f45003d, new androidx.work.b(other.f45004e), new androidx.work.b(other.f45005f), other.f45006g, other.f45007h, other.f45008i, new k4.d(other.f45009j), other.f45010k, other.f45011l, other.f45012m, other.f45013n, other.f45014o, other.f45015p, other.f45016q, other.f45017r, other.f45018s, 0, other.f45020u, other.f45021v, other.f45022w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
