package dd;

import android.util.SparseArray;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import dd.i0;
import ne.s0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements tc.k {

    /* renamed from: l  reason: collision with root package name */
    public static final tc.p f20392l = new tc.p() { // from class: dd.z
        @Override // tc.p
        public final tc.k[] b() {
            return a0.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final s0 f20393a;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f20394b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f20395c;

    /* renamed from: d  reason: collision with root package name */
    private final y f20396d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20397e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f20398f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f20399g;

    /* renamed from: h  reason: collision with root package name */
    private long f20400h;

    /* renamed from: i  reason: collision with root package name */
    private x f20401i;

    /* renamed from: j  reason: collision with root package name */
    private tc.m f20402j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f20403k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final m f20404a;

        /* renamed from: b  reason: collision with root package name */
        private final s0 f20405b;

        /* renamed from: c  reason: collision with root package name */
        private final ne.g0 f20406c = new ne.g0(new byte[64]);

        /* renamed from: d  reason: collision with root package name */
        private boolean f20407d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f20408e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f20409f;

        /* renamed from: g  reason: collision with root package name */
        private int f20410g;

        /* renamed from: h  reason: collision with root package name */
        private long f20411h;

        public a(m mVar, s0 s0Var) {
            this.f20404a = mVar;
            this.f20405b = s0Var;
        }

        private void b() {
            this.f20406c.r(8);
            this.f20407d = this.f20406c.g();
            this.f20408e = this.f20406c.g();
            this.f20406c.r(6);
            this.f20410g = this.f20406c.h(8);
        }

        private void c() {
            this.f20411h = 0L;
            if (this.f20407d) {
                this.f20406c.r(4);
                this.f20406c.r(1);
                this.f20406c.r(1);
                long h10 = (this.f20406c.h(3) << 30) | (this.f20406c.h(15) << 15) | this.f20406c.h(15);
                this.f20406c.r(1);
                if (!this.f20409f && this.f20408e) {
                    this.f20406c.r(4);
                    this.f20406c.r(1);
                    this.f20406c.r(1);
                    this.f20406c.r(1);
                    this.f20405b.b((this.f20406c.h(3) << 30) | (this.f20406c.h(15) << 15) | this.f20406c.h(15));
                    this.f20409f = true;
                }
                this.f20411h = this.f20405b.b(h10);
            }
        }

        public void a(ne.h0 h0Var) {
            h0Var.l(this.f20406c.f39566a, 0, 3);
            this.f20406c.p(0);
            b();
            h0Var.l(this.f20406c.f39566a, 0, this.f20410g);
            this.f20406c.p(0);
            c();
            this.f20404a.e(this.f20411h, 4);
            this.f20404a.b(h0Var);
            this.f20404a.d();
        }

        public void d() {
            this.f20409f = false;
            this.f20404a.c();
        }
    }

    public a0() {
        this(new s0(0L));
    }

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new a0()};
    }

    private void e(long j10) {
        if (!this.f20403k) {
            this.f20403k = true;
            if (this.f20396d.c() != -9223372036854775807L) {
                x xVar = new x(this.f20396d.d(), this.f20396d.c(), j10);
                this.f20401i = xVar;
                this.f20402j.q(xVar.b());
                return;
            }
            this.f20402j.q(new z.b(this.f20396d.c()));
        }
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        boolean z10;
        boolean z11 = true;
        if (this.f20393a.e() == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            long c10 = this.f20393a.c();
            z10 = (c10 == -9223372036854775807L || c10 == 0 || c10 == j11) ? false : false;
        }
        if (z10) {
            this.f20393a.h(j11);
        }
        x xVar = this.f20401i;
        if (xVar != null) {
            xVar.h(j11);
        }
        for (int i10 = 0; i10 < this.f20394b.size(); i10++) {
            ((a) this.f20394b.valueAt(i10)).d();
        }
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f20402j = mVar;
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        long j10;
        long j11;
        m mVar;
        ne.a.i(this.f20402j);
        long length = lVar.getLength();
        int i10 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
        if (i10 != 0 && !this.f20396d.e()) {
            return this.f20396d.g(lVar, yVar);
        }
        e(length);
        x xVar = this.f20401i;
        if (xVar != null && xVar.d()) {
            return this.f20401i.c(lVar, yVar);
        }
        lVar.e();
        if (i10 != 0) {
            j10 = length - lVar.g();
        } else {
            j10 = -1;
        }
        if ((j10 != -1 && j10 < 4) || !lVar.c(this.f20395c.e(), 0, 4, true)) {
            return -1;
        }
        this.f20395c.U(0);
        int q10 = this.f20395c.q();
        if (q10 == 441) {
            return -1;
        }
        if (q10 == 442) {
            lVar.n(this.f20395c.e(), 0, 10);
            this.f20395c.U(9);
            lVar.k((this.f20395c.H() & 7) + 14);
            return 0;
        } else if (q10 == 443) {
            lVar.n(this.f20395c.e(), 0, 2);
            this.f20395c.U(0);
            lVar.k(this.f20395c.N() + 6);
            return 0;
        } else if (((q10 & (-256)) >> 8) != 1) {
            lVar.k(1);
            return 0;
        } else {
            int i11 = q10 & SetSpanOperation.SPAN_MAX_PRIORITY;
            a aVar = (a) this.f20394b.get(i11);
            if (!this.f20397e) {
                if (aVar == null) {
                    if (i11 == 189) {
                        mVar = new c();
                        this.f20398f = true;
                        this.f20400h = lVar.getPosition();
                    } else if ((q10 & 224) == 192) {
                        mVar = new t();
                        this.f20398f = true;
                        this.f20400h = lVar.getPosition();
                    } else if ((q10 & 240) == 224) {
                        mVar = new n();
                        this.f20399g = true;
                        this.f20400h = lVar.getPosition();
                    } else {
                        mVar = null;
                    }
                    if (mVar != null) {
                        mVar.f(this.f20402j, new i0.d(i11, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER));
                        aVar = new a(mVar, this.f20393a);
                        this.f20394b.put(i11, aVar);
                    }
                }
                if (this.f20398f && this.f20399g) {
                    j11 = this.f20400h + 8192;
                } else {
                    j11 = 1048576;
                }
                if (lVar.getPosition() > j11) {
                    this.f20397e = true;
                    this.f20402j.s();
                }
            }
            lVar.n(this.f20395c.e(), 0, 2);
            this.f20395c.U(0);
            int N = this.f20395c.N() + 6;
            if (aVar == null) {
                lVar.k(N);
            } else {
                this.f20395c.Q(N);
                lVar.readFully(this.f20395c.e(), 0, N);
                this.f20395c.U(6);
                aVar.a(this.f20395c);
                ne.h0 h0Var = this.f20395c;
                h0Var.T(h0Var.b());
            }
            return 0;
        }
    }

    @Override // tc.k
    public boolean f(tc.l lVar) {
        byte[] bArr = new byte[14];
        lVar.n(bArr, 0, 14);
        if (442 != (((bArr[0] & 255) << 24) | ((bArr[1] & 255) << 16) | ((bArr[2] & 255) << 8) | (bArr[3] & 255)) || (bArr[4] & 196) != 68 || (bArr[6] & 4) != 4 || (bArr[8] & 4) != 4 || (bArr[9] & 1) != 1 || (bArr[12] & 3) != 3) {
            return false;
        }
        lVar.h(bArr[13] & 7);
        lVar.n(bArr, 0, 3);
        if (1 != (((bArr[0] & 255) << 16) | ((bArr[1] & 255) << 8) | (bArr[2] & 255))) {
            return false;
        }
        return true;
    }

    public a0(s0 s0Var) {
        this.f20393a = s0Var;
        this.f20395c = new ne.h0((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        this.f20394b = new SparseArray();
        this.f20396d = new y();
    }

    @Override // tc.k
    public void release() {
    }
}
