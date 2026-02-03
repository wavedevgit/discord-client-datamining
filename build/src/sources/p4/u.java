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
    public static final a f44955x = new a(null);

    /* renamed from: y  reason: collision with root package name */
    private static final String f44956y;

    /* renamed from: z  reason: collision with root package name */
    public static final Function f44957z;

    /* renamed from: a  reason: collision with root package name */
    public final String f44958a;

    /* renamed from: b  reason: collision with root package name */
    public k4.x f44959b;

    /* renamed from: c  reason: collision with root package name */
    public String f44960c;

    /* renamed from: d  reason: collision with root package name */
    public String f44961d;

    /* renamed from: e  reason: collision with root package name */
    public androidx.work.b f44962e;

    /* renamed from: f  reason: collision with root package name */
    public androidx.work.b f44963f;

    /* renamed from: g  reason: collision with root package name */
    public long f44964g;

    /* renamed from: h  reason: collision with root package name */
    public long f44965h;

    /* renamed from: i  reason: collision with root package name */
    public long f44966i;

    /* renamed from: j  reason: collision with root package name */
    public k4.d f44967j;

    /* renamed from: k  reason: collision with root package name */
    public int f44968k;

    /* renamed from: l  reason: collision with root package name */
    public k4.a f44969l;

    /* renamed from: m  reason: collision with root package name */
    public long f44970m;

    /* renamed from: n  reason: collision with root package name */
    public long f44971n;

    /* renamed from: o  reason: collision with root package name */
    public long f44972o;

    /* renamed from: p  reason: collision with root package name */
    public long f44973p;

    /* renamed from: q  reason: collision with root package name */
    public boolean f44974q;

    /* renamed from: r  reason: collision with root package name */
    public k4.r f44975r;

    /* renamed from: s  reason: collision with root package name */
    private int f44976s;

    /* renamed from: t  reason: collision with root package name */
    private final int f44977t;

    /* renamed from: u  reason: collision with root package name */
    private long f44978u;

    /* renamed from: v  reason: collision with root package name */
    private int f44979v;

    /* renamed from: w  reason: collision with root package name */
    private final int f44980w;

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
        public String f44981a;

        /* renamed from: b  reason: collision with root package name */
        public k4.x f44982b;

        public b(String id2, k4.x state) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(state, "state");
            this.f44981a = id2;
            this.f44982b = state;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f44981a, bVar.f44981a) && this.f44982b == bVar.f44982b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44981a.hashCode() * 31) + this.f44982b.hashCode();
        }

        public String toString() {
            return "IdAndState(id=" + this.f44981a + ", state=" + this.f44982b + ')';
        }
    }

    static {
        String i10 = k4.m.i("WorkSpec");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WorkSpec\")");
        f44956y = i10;
        f44957z = new Function() { // from class: p4.t
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
        this.f44958a = id2;
        this.f44959b = state;
        this.f44960c = workerClassName;
        this.f44961d = inputMergerClassName;
        this.f44962e = input;
        this.f44963f = output;
        this.f44964g = j10;
        this.f44965h = j11;
        this.f44966i = j12;
        this.f44967j = constraints;
        this.f44968k = i10;
        this.f44969l = backoffPolicy;
        this.f44970m = j13;
        this.f44971n = j14;
        this.f44972o = j15;
        this.f44973p = j16;
        this.f44974q = z10;
        this.f44975r = outOfQuotaPolicy;
        this.f44976s = i11;
        this.f44977t = i12;
        this.f44978u = j17;
        this.f44979v = i13;
        this.f44980w = i14;
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
        String str4 = (i15 & 1) != 0 ? uVar.f44958a : str;
        k4.x xVar2 = (i15 & 2) != 0 ? uVar.f44959b : xVar;
        String str5 = (i15 & 4) != 0 ? uVar.f44960c : str2;
        String str6 = (i15 & 8) != 0 ? uVar.f44961d : str3;
        androidx.work.b bVar3 = (i15 & 16) != 0 ? uVar.f44962e : bVar;
        androidx.work.b bVar4 = (i15 & 32) != 0 ? uVar.f44963f : bVar2;
        long j18 = (i15 & 64) != 0 ? uVar.f44964g : j10;
        long j19 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? uVar.f44965h : j11;
        long j20 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? uVar.f44966i : j12;
        k4.d dVar2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? uVar.f44967j : dVar;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? uVar.f44968k : i10;
        String str7 = str4;
        k4.a aVar2 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? uVar.f44969l : aVar;
        k4.x xVar3 = xVar2;
        long j21 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? uVar.f44970m : j13;
        long j22 = (i15 & 8192) != 0 ? uVar.f44971n : j14;
        long j23 = (i15 & 16384) != 0 ? uVar.f44972o : j15;
        long j24 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? uVar.f44973p : j16;
        return uVar.d(str7, xVar3, str5, str6, bVar3, bVar4, j18, j19, j20, dVar2, i16, aVar2, j21, j22, j23, j24, (i15 & 65536) != 0 ? uVar.f44974q : z10, (i15 & 131072) != 0 ? uVar.f44975r : rVar, (i15 & 262144) != 0 ? uVar.f44976s : i11, (i15 & 524288) != 0 ? uVar.f44977t : i12, (i15 & 1048576) != 0 ? uVar.f44978u : j17, (i15 & 2097152) != 0 ? uVar.f44979v : i13, (i15 & 4194304) != 0 ? uVar.f44980w : i14);
    }

    public final long c() {
        return f44955x.a(l(), this.f44968k, this.f44969l, this.f44970m, this.f44971n, this.f44976s, m(), this.f44964g, this.f44966i, this.f44965h, this.f44978u);
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
        if (Intrinsics.areEqual(this.f44958a, uVar.f44958a) && this.f44959b == uVar.f44959b && Intrinsics.areEqual(this.f44960c, uVar.f44960c) && Intrinsics.areEqual(this.f44961d, uVar.f44961d) && Intrinsics.areEqual(this.f44962e, uVar.f44962e) && Intrinsics.areEqual(this.f44963f, uVar.f44963f) && this.f44964g == uVar.f44964g && this.f44965h == uVar.f44965h && this.f44966i == uVar.f44966i && Intrinsics.areEqual(this.f44967j, uVar.f44967j) && this.f44968k == uVar.f44968k && this.f44969l == uVar.f44969l && this.f44970m == uVar.f44970m && this.f44971n == uVar.f44971n && this.f44972o == uVar.f44972o && this.f44973p == uVar.f44973p && this.f44974q == uVar.f44974q && this.f44975r == uVar.f44975r && this.f44976s == uVar.f44976s && this.f44977t == uVar.f44977t && this.f44978u == uVar.f44978u && this.f44979v == uVar.f44979v && this.f44980w == uVar.f44980w) {
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f44977t;
    }

    public final long g() {
        return this.f44978u;
    }

    public final int h() {
        return this.f44979v;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((this.f44958a.hashCode() * 31) + this.f44959b.hashCode()) * 31) + this.f44960c.hashCode()) * 31) + this.f44961d.hashCode()) * 31) + this.f44962e.hashCode()) * 31) + this.f44963f.hashCode()) * 31) + Long.hashCode(this.f44964g)) * 31) + Long.hashCode(this.f44965h)) * 31) + Long.hashCode(this.f44966i)) * 31) + this.f44967j.hashCode()) * 31) + Integer.hashCode(this.f44968k)) * 31) + this.f44969l.hashCode()) * 31) + Long.hashCode(this.f44970m)) * 31) + Long.hashCode(this.f44971n)) * 31) + Long.hashCode(this.f44972o)) * 31) + Long.hashCode(this.f44973p)) * 31;
        boolean z10 = this.f44974q;
        int i10 = z10;
        if (z10 != 0) {
            i10 = 1;
        }
        return ((((((((((((hashCode + i10) * 31) + this.f44975r.hashCode()) * 31) + Integer.hashCode(this.f44976s)) * 31) + Integer.hashCode(this.f44977t)) * 31) + Long.hashCode(this.f44978u)) * 31) + Integer.hashCode(this.f44979v)) * 31) + Integer.hashCode(this.f44980w);
    }

    public final int i() {
        return this.f44976s;
    }

    public final int j() {
        return this.f44980w;
    }

    public final boolean k() {
        return !Intrinsics.areEqual(k4.d.f32108j, this.f44967j);
    }

    public final boolean l() {
        if (this.f44959b == k4.x.ENQUEUED && this.f44968k > 0) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        if (this.f44965h != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "{WorkSpec: " + this.f44958a + '}';
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
        this(newId, other.f44959b, other.f44960c, other.f44961d, new androidx.work.b(other.f44962e), new androidx.work.b(other.f44963f), other.f44964g, other.f44965h, other.f44966i, new k4.d(other.f44967j), other.f44968k, other.f44969l, other.f44970m, other.f44971n, other.f44972o, other.f44973p, other.f44974q, other.f44975r, other.f44976s, 0, other.f44978u, other.f44979v, other.f44980w, 524288, null);
        Intrinsics.checkNotNullParameter(newId, "newId");
        Intrinsics.checkNotNullParameter(other, "other");
    }
}
