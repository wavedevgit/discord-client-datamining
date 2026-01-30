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
    public static final tc.p f21741l = new tc.p() { // from class: dd.z
        @Override // tc.p
        public final tc.k[] b() {
            return a0.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final s0 f21742a;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f21743b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f21744c;

    /* renamed from: d  reason: collision with root package name */
    private final y f21745d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21746e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21747f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f21748g;

    /* renamed from: h  reason: collision with root package name */
    private long f21749h;

    /* renamed from: i  reason: collision with root package name */
    private x f21750i;

    /* renamed from: j  reason: collision with root package name */
    private tc.m f21751j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21752k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final m f21753a;

        /* renamed from: b  reason: collision with root package name */
        private final s0 f21754b;

        /* renamed from: c  reason: collision with root package name */
        private final ne.g0 f21755c = new ne.g0(new byte[64]);

        /* renamed from: d  reason: collision with root package name */
        private boolean f21756d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21757e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f21758f;

        /* renamed from: g  reason: collision with root package name */
        private int f21759g;

        /* renamed from: h  reason: collision with root package name */
        private long f21760h;

        public a(m mVar, s0 s0Var) {
            this.f21753a = mVar;
            this.f21754b = s0Var;
        }

        private void b() {
            this.f21755c.r(8);
            this.f21756d = this.f21755c.g();
            this.f21757e = this.f21755c.g();
            this.f21755c.r(6);
            this.f21759g = this.f21755c.h(8);
        }

        private void c() {
            this.f21760h = 0L;
            if (this.f21756d) {
                this.f21755c.r(4);
                this.f21755c.r(1);
                this.f21755c.r(1);
                long h10 = (this.f21755c.h(3) << 30) | (this.f21755c.h(15) << 15) | this.f21755c.h(15);
                this.f21755c.r(1);
                if (!this.f21758f && this.f21757e) {
                    this.f21755c.r(4);
                    this.f21755c.r(1);
                    this.f21755c.r(1);
                    this.f21755c.r(1);
                    this.f21754b.b((this.f21755c.h(3) << 30) | (this.f21755c.h(15) << 15) | this.f21755c.h(15));
                    this.f21758f = true;
                }
                this.f21760h = this.f21754b.b(h10);
            }
        }

        public void a(ne.h0 h0Var) {
            h0Var.l(this.f21755c.f40204a, 0, 3);
            this.f21755c.p(0);
            b();
            h0Var.l(this.f21755c.f40204a, 0, this.f21759g);
            this.f21755c.p(0);
            c();
            this.f21753a.e(this.f21760h, 4);
            this.f21753a.b(h0Var);
            this.f21753a.d();
        }

        public void d() {
            this.f21758f = false;
            this.f21753a.c();
        }
    }

    public a0() {
        this(new s0(0L));
    }

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new a0()};
    }

    private void e(long j10) {
        if (!this.f21752k) {
            this.f21752k = true;
            if (this.f21745d.c() != -9223372036854775807L) {
                x xVar = new x(this.f21745d.d(), this.f21745d.c(), j10);
                this.f21750i = xVar;
                this.f21751j.q(xVar.b());
                return;
            }
            this.f21751j.q(new z.b(this.f21745d.c()));
        }
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        boolean z10;
        boolean z11 = true;
        if (this.f21742a.e() == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            long c10 = this.f21742a.c();
            z10 = (c10 == -9223372036854775807L || c10 == 0 || c10 == j11) ? false : false;
        }
        if (z10) {
            this.f21742a.h(j11);
        }
        x xVar = this.f21750i;
        if (xVar != null) {
            xVar.h(j11);
        }
        for (int i10 = 0; i10 < this.f21743b.size(); i10++) {
            ((a) this.f21743b.valueAt(i10)).d();
        }
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f21751j = mVar;
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        long j10;
        long j11;
        m mVar;
        ne.a.i(this.f21751j);
        long length = lVar.getLength();
        int i10 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
        if (i10 != 0 && !this.f21745d.e()) {
            return this.f21745d.g(lVar, yVar);
        }
        e(length);
        x xVar = this.f21750i;
        if (xVar != null && xVar.d()) {
            return this.f21750i.c(lVar, yVar);
        }
        lVar.e();
        if (i10 != 0) {
            j10 = length - lVar.g();
        } else {
            j10 = -1;
        }
        if ((j10 != -1 && j10 < 4) || !lVar.c(this.f21744c.e(), 0, 4, true)) {
            return -1;
        }
        this.f21744c.U(0);
        int q10 = this.f21744c.q();
        if (q10 == 441) {
            return -1;
        }
        if (q10 == 442) {
            lVar.n(this.f21744c.e(), 0, 10);
            this.f21744c.U(9);
            lVar.k((this.f21744c.H() & 7) + 14);
            return 0;
        } else if (q10 == 443) {
            lVar.n(this.f21744c.e(), 0, 2);
            this.f21744c.U(0);
            lVar.k(this.f21744c.N() + 6);
            return 0;
        } else if (((q10 & (-256)) >> 8) != 1) {
            lVar.k(1);
            return 0;
        } else {
            int i11 = q10 & SetSpanOperation.SPAN_MAX_PRIORITY;
            a aVar = (a) this.f21743b.get(i11);
            if (!this.f21746e) {
                if (aVar == null) {
                    if (i11 == 189) {
                        mVar = new c();
                        this.f21747f = true;
                        this.f21749h = lVar.getPosition();
                    } else if ((q10 & 224) == 192) {
                        mVar = new t();
                        this.f21747f = true;
                        this.f21749h = lVar.getPosition();
                    } else if ((q10 & 240) == 224) {
                        mVar = new n();
                        this.f21748g = true;
                        this.f21749h = lVar.getPosition();
                    } else {
                        mVar = null;
                    }
                    if (mVar != null) {
                        mVar.f(this.f21751j, new i0.d(i11, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER));
                        aVar = new a(mVar, this.f21742a);
                        this.f21743b.put(i11, aVar);
                    }
                }
                if (this.f21747f && this.f21748g) {
                    j11 = this.f21749h + 8192;
                } else {
                    j11 = 1048576;
                }
                if (lVar.getPosition() > j11) {
                    this.f21746e = true;
                    this.f21751j.s();
                }
            }
            lVar.n(this.f21744c.e(), 0, 2);
            this.f21744c.U(0);
            int N = this.f21744c.N() + 6;
            if (aVar == null) {
                lVar.k(N);
            } else {
                this.f21744c.Q(N);
                lVar.readFully(this.f21744c.e(), 0, N);
                this.f21744c.U(6);
                aVar.a(this.f21744c);
                ne.h0 h0Var = this.f21744c;
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
        this.f21742a = s0Var;
        this.f21744c = new ne.h0((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        this.f21743b = new SparseArray();
        this.f21745d = new y();
    }

    @Override // tc.k
    public void release() {
    }
}
