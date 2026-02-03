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
    public static final tc.p f20176l = new tc.p() { // from class: dd.z
        @Override // tc.p
        public final tc.k[] b() {
            return a0.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final s0 f20177a;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f20178b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f20179c;

    /* renamed from: d  reason: collision with root package name */
    private final y f20180d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20181e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f20182f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f20183g;

    /* renamed from: h  reason: collision with root package name */
    private long f20184h;

    /* renamed from: i  reason: collision with root package name */
    private x f20185i;

    /* renamed from: j  reason: collision with root package name */
    private tc.m f20186j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f20187k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final m f20188a;

        /* renamed from: b  reason: collision with root package name */
        private final s0 f20189b;

        /* renamed from: c  reason: collision with root package name */
        private final ne.g0 f20190c = new ne.g0(new byte[64]);

        /* renamed from: d  reason: collision with root package name */
        private boolean f20191d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f20192e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f20193f;

        /* renamed from: g  reason: collision with root package name */
        private int f20194g;

        /* renamed from: h  reason: collision with root package name */
        private long f20195h;

        public a(m mVar, s0 s0Var) {
            this.f20188a = mVar;
            this.f20189b = s0Var;
        }

        private void b() {
            this.f20190c.r(8);
            this.f20191d = this.f20190c.g();
            this.f20192e = this.f20190c.g();
            this.f20190c.r(6);
            this.f20194g = this.f20190c.h(8);
        }

        private void c() {
            this.f20195h = 0L;
            if (this.f20191d) {
                this.f20190c.r(4);
                this.f20190c.r(1);
                this.f20190c.r(1);
                long h10 = (this.f20190c.h(3) << 30) | (this.f20190c.h(15) << 15) | this.f20190c.h(15);
                this.f20190c.r(1);
                if (!this.f20193f && this.f20192e) {
                    this.f20190c.r(4);
                    this.f20190c.r(1);
                    this.f20190c.r(1);
                    this.f20190c.r(1);
                    this.f20189b.b((this.f20190c.h(3) << 30) | (this.f20190c.h(15) << 15) | this.f20190c.h(15));
                    this.f20193f = true;
                }
                this.f20195h = this.f20189b.b(h10);
            }
        }

        public void a(ne.h0 h0Var) {
            h0Var.l(this.f20190c.f40106a, 0, 3);
            this.f20190c.p(0);
            b();
            h0Var.l(this.f20190c.f40106a, 0, this.f20194g);
            this.f20190c.p(0);
            c();
            this.f20188a.e(this.f20195h, 4);
            this.f20188a.b(h0Var);
            this.f20188a.d();
        }

        public void d() {
            this.f20193f = false;
            this.f20188a.c();
        }
    }

    public a0() {
        this(new s0(0L));
    }

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new a0()};
    }

    private void e(long j10) {
        if (!this.f20187k) {
            this.f20187k = true;
            if (this.f20180d.c() != -9223372036854775807L) {
                x xVar = new x(this.f20180d.d(), this.f20180d.c(), j10);
                this.f20185i = xVar;
                this.f20186j.q(xVar.b());
                return;
            }
            this.f20186j.q(new z.b(this.f20180d.c()));
        }
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        boolean z10;
        boolean z11 = true;
        if (this.f20177a.e() == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            long c10 = this.f20177a.c();
            z10 = (c10 == -9223372036854775807L || c10 == 0 || c10 == j11) ? false : false;
        }
        if (z10) {
            this.f20177a.h(j11);
        }
        x xVar = this.f20185i;
        if (xVar != null) {
            xVar.h(j11);
        }
        for (int i10 = 0; i10 < this.f20178b.size(); i10++) {
            ((a) this.f20178b.valueAt(i10)).d();
        }
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f20186j = mVar;
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        long j10;
        long j11;
        m mVar;
        ne.a.i(this.f20186j);
        long length = lVar.getLength();
        int i10 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
        if (i10 != 0 && !this.f20180d.e()) {
            return this.f20180d.g(lVar, yVar);
        }
        e(length);
        x xVar = this.f20185i;
        if (xVar != null && xVar.d()) {
            return this.f20185i.c(lVar, yVar);
        }
        lVar.e();
        if (i10 != 0) {
            j10 = length - lVar.g();
        } else {
            j10 = -1;
        }
        if ((j10 != -1 && j10 < 4) || !lVar.c(this.f20179c.e(), 0, 4, true)) {
            return -1;
        }
        this.f20179c.U(0);
        int q10 = this.f20179c.q();
        if (q10 == 441) {
            return -1;
        }
        if (q10 == 442) {
            lVar.n(this.f20179c.e(), 0, 10);
            this.f20179c.U(9);
            lVar.k((this.f20179c.H() & 7) + 14);
            return 0;
        } else if (q10 == 443) {
            lVar.n(this.f20179c.e(), 0, 2);
            this.f20179c.U(0);
            lVar.k(this.f20179c.N() + 6);
            return 0;
        } else if (((q10 & (-256)) >> 8) != 1) {
            lVar.k(1);
            return 0;
        } else {
            int i11 = q10 & SetSpanOperation.SPAN_MAX_PRIORITY;
            a aVar = (a) this.f20178b.get(i11);
            if (!this.f20181e) {
                if (aVar == null) {
                    if (i11 == 189) {
                        mVar = new c();
                        this.f20182f = true;
                        this.f20184h = lVar.getPosition();
                    } else if ((q10 & 224) == 192) {
                        mVar = new t();
                        this.f20182f = true;
                        this.f20184h = lVar.getPosition();
                    } else if ((q10 & 240) == 224) {
                        mVar = new n();
                        this.f20183g = true;
                        this.f20184h = lVar.getPosition();
                    } else {
                        mVar = null;
                    }
                    if (mVar != null) {
                        mVar.f(this.f20186j, new i0.d(i11, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER));
                        aVar = new a(mVar, this.f20177a);
                        this.f20178b.put(i11, aVar);
                    }
                }
                if (this.f20182f && this.f20183g) {
                    j11 = this.f20184h + 8192;
                } else {
                    j11 = 1048576;
                }
                if (lVar.getPosition() > j11) {
                    this.f20181e = true;
                    this.f20186j.s();
                }
            }
            lVar.n(this.f20179c.e(), 0, 2);
            this.f20179c.U(0);
            int N = this.f20179c.N() + 6;
            if (aVar == null) {
                lVar.k(N);
            } else {
                this.f20179c.Q(N);
                lVar.readFully(this.f20179c.e(), 0, N);
                this.f20179c.U(6);
                aVar.a(this.f20179c);
                ne.h0 h0Var = this.f20179c;
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
        this.f20177a = s0Var;
        this.f20179c = new ne.h0((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        this.f20178b = new SparseArray();
        this.f20180d = new y();
    }

    @Override // tc.k
    public void release() {
    }
}
