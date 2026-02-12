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
    public static final a f41444x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f41445y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f41446z;

    /* renamed from: a  reason: collision with root package name */
    public final String f41447a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f41448b;

    /* renamed from: c  reason: collision with root package name */
    public String f41449c;

    /* renamed from: d  reason: collision with root package name */
    public String f41450d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f41451e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f41452f;

    /* renamed from: g  reason: collision with root package name */
    public long f41453g;

    /* renamed from: h  reason: collision with root package name */
    public long f41454h;

    /* renamed from: i  reason: collision with root package name */
    public long f41455i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f41456j;

    /* renamed from: k  reason: collision with root package name */
    public int f41457k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f41458l;

    /* renamed from: m  reason: collision with root package name */
    public long f41459m;

    /* renamed from: n  reason: collision with root package name */
    public long f41460n;

    /* renamed from: o  reason: collision with root package name */
    public long f41461o;

    /* renamed from: p  reason: collision with root package name */
    public long f41462p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f41463q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f41464r;

    /* renamed from: s  reason: collision with root package name */
    private int f41465s;

    /* renamed from: t  reason: collision with root package name */
    private final int f41466t;

    /* renamed from: u  reason: collision with root package name */
    private long f41467u;

    /* renamed from: v  reason: collision with root package name */
    private int f41468v;

    /* renamed from: w  reason: collision with root package name */
    private final int f41469w;

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
        public String f41470a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f41471b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f41470a = id2;
            this.f41471b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f41470a, bVar.f41470a) && this.f41471b == bVar.f41471b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f41470a.hashCode() * 31) + this.f41471b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f41470a + ", state=" + this.f41471b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f41445y = i10;
        f41446z = new Function() { // from class: p4.t
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
        this.f41447a = id2;
        this.f41448b = state;
        this.f41449c = workerClassName;
        this.f41450d = inputMergerClassName;
        this.f41451e = input;
        this.f41452f = output;
        this.f41453g = j10;
        this.f41454h = j11;
        this.f41455i = j12;
        this.f41456j = constraints;
        this.f41457k = i10;
        this.f41458l = backoffPolicy;
        this.f41459m = j13;
        this.f41460n = j14;
        this.f41461o = j15;
        this.f41462p = j16;
        this.f41463q = z10;
        this.f41464r = outOfQuotaPolicy;
        this.f41465s = i11;
        this.f41466t = i12;
        this.f41467u = j17;
        this.f41468v = i13;
        this.f41469w = i14;
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
        String str4 = (i15 & 1) != 0 ? uVar.f41447a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f41448b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f41449c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f41450d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f41451e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f41452f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f41453g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f41454h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f41455i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f41456j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f41457k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f41458l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f41459m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f41460n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f41461o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f41462p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f41463q : z10, (i15 & 131072) != 0 ? uVar.f41464r : rVar, (i15 & 262144) != 0 ? uVar.f41465s : i11, (i15 & 524288) != 0 ? uVar.f41466t : i12, (i15 & 1048576) != 0 ? uVar.f41467u : j17, (i15 & 2097152) != 0 ? uVar.f41468v : i13, (i15 & 4194304) != 0 ? uVar.f41469w : i14);
    }

    public final long c() {
        return f41444x.a(l(), this.f41457k, this.f41458l, this.f41459m, this.f41460n, this.f41465s, m(), this.f41453g, this.f41455i, this.f41454h, this.f41467u);
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
        if (Intrinsics.areEqual(this.f41447a, uVar.f41447a) && this.f41448b == uVar.f41448b && Intrinsics.areEqual(this.f41449c, uVar.f41449c) && Intrinsics.areEqual(this.f41450d, uVar.f41450d) && Intrinsics.areEqual(this.f41451e, uVar.f41451e) && Intrinsics.areEqual(this.f41452f, uVar.f41452f) && this.f41453g == uVar.f41453g && this.f41454h == uVar.f41454h && this.f41455i == uVar.f41455i && Intrinsics.areEqual(this.f41456j, uVar.f41456j) && this.f41457k == uVar.f41457k && this.f41458l == uVar.f41458l && this.f41459m == uVar.f41459m && this.f41460n == uVar.f41460n && this.f41461o == uVar.f41461o && this.f41462p == uVar.f41462p && this.f41463q == uVar.f41463q && this.f41464r == uVar.f41464r && this.f41465s == uVar.f41465s && this.f41466t == uVar.f41466t && this.f41467u == uVar.f41467u && this.f41468v == uVar.f41468v && this.f41469w == uVar.f41469w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f41466t;
    }

    public final long g() {
        return this.f41467u;
    }

    public final int h() {
        return this.f41468v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f41447a.hashCode() * 31) + this.f41448b.hashCode()) * 31) + this.f41449c.hashCode()) * 31) + this.f41450d.hashCode()) * 31) + this.f41451e.hashCode()) * 31) + this.f41452f.hashCode()) * 31) + Long.hashCode(this.f41453g)) * 31) + Long.hashCode(this.f41454h)) * 31) + Long.hashCode(this.f41455i)) * 31) + this.f41456j.hashCode()) * 31) + Integer.hashCode(this.f41457k)) * 31) + this.f41458l.hashCode()) * 31) + Long.hashCode(this.f41459m)) * 31) + Long.hashCode(this.f41460n)) * 31) + Long.hashCode(this.f41461o)) * 31) + Long.hashCode(this.f41462p)) * 31;
        boolean z10 = this.f41463q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f41464r.hashCode()) * 31) + Integer.hashCode(this.f41465s)) * 31) + Integer.hashCode(this.f41466t)) * 31) + Long.hashCode(this.f41467u)) * 31) + Integer.hashCode(this.f41468v)) * 31) + Integer.hashCode(this.f41469w);
    }

    public final int i() {
        return this.f41465s;
    }

    public final int j() {
        return this.f41469w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f31490j, this.f41456j);
    }

    public final boolean l() {
        if (this.f41448b == k4.x.ENQUEUED && this.f41457k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f41454h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f41447a + '}';
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
        this(newId, other.f41448b, other.f41449c, other.f41450d, new androidx.work.b(other.f41451e), new androidx.work.b(other.f41452f), other.f41453g, other.f41454h, other.f41455i, new k4.d(other.f41456j), other.f41457k, other.f41458l, other.f41459m, other.f41460n, other.f41461o, other.f41462p, other.f41463q, other.f41464r, other.f41465s, 0, other.f41467u, other.f41468v, other.f41469w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
