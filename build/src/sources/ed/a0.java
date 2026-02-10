package ed;

import android.util.SparseArray;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import ed.i0;
import oe.s0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements uc.k {

    /* renamed from: l  reason: collision with root package name */
    public static final uc.p f22403l = new uc.p() { // from class: ed.z
        @Override // uc.p
        public final uc.k[] b() {
            return a0.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final s0 f22404a;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f22405b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f22406c;

    /* renamed from: d  reason: collision with root package name */
    private final y f22407d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22408e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22409f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f22410g;

    /* renamed from: h  reason: collision with root package name */
    private long f22411h;

    /* renamed from: i  reason: collision with root package name */
    private x f22412i;

    /* renamed from: j  reason: collision with root package name */
    private uc.m f22413j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f22414k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final m f22415a;

        /* renamed from: b  reason: collision with root package name */
        private final s0 f22416b;

        /* renamed from: c  reason: collision with root package name */
        private final oe.g0 f22417c = new oe.g0(new byte[64]);

        /* renamed from: d  reason: collision with root package name */
        private boolean f22418d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f22419e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f22420f;

        /* renamed from: g  reason: collision with root package name */
        private int f22421g;

        /* renamed from: h  reason: collision with root package name */
        private long f22422h;

        public a(m mVar, s0 s0Var) {
            this.f22415a = mVar;
            this.f22416b = s0Var;
        }

        private void b() {
            this.f22417c.r(8);
            this.f22418d = this.f22417c.g();
            this.f22419e = this.f22417c.g();
            this.f22417c.r(6);
            this.f22421g = this.f22417c.h(8);
        }

        private void c() {
            this.f22422h = 0L;
            if (this.f22418d) {
                this.f22417c.r(4);
                this.f22417c.r(1);
                this.f22417c.r(1);
                long h10 = (this.f22417c.h(3) << 30) | (this.f22417c.h(15) << 15) | this.f22417c.h(15);
                this.f22417c.r(1);
                if (!this.f22420f && this.f22419e) {
                    this.f22417c.r(4);
                    this.f22417c.r(1);
                    this.f22417c.r(1);
                    this.f22417c.r(1);
                    this.f22416b.b((this.f22417c.h(3) << 30) | (this.f22417c.h(15) << 15) | this.f22417c.h(15));
                    this.f22420f = true;
                }
                this.f22422h = this.f22416b.b(h10);
            }
        }

        public void a(oe.h0 h0Var) {
            h0Var.l(this.f22417c.f38946a, 0, 3);
            this.f22417c.p(0);
            b();
            h0Var.l(this.f22417c.f38946a, 0, this.f22421g);
            this.f22417c.p(0);
            c();
            this.f22415a.e(this.f22422h, 4);
            this.f22415a.a(h0Var);
            this.f22415a.d();
        }

        public void d() {
            this.f22420f = false;
            this.f22415a.b();
        }
    }

    public a0() {
        this(new s0(0L));
    }

    public static /* synthetic */ uc.k[] b() {
        return new uc.k[]{new a0()};
    }

    private void e(long j10) {
        if (!this.f22414k) {
            this.f22414k = true;
            if (this.f22407d.c() != -9223372036854775807L) {
                x xVar = new x(this.f22407d.d(), this.f22407d.c(), j10);
                this.f22412i = xVar;
                this.f22413j.j(xVar.b());
                return;
            }
            this.f22413j.j(new z.b(this.f22407d.c()));
        }
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        boolean z10;
        boolean z11 = true;
        if (this.f22404a.e() == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            long c10 = this.f22404a.c();
            z10 = (c10 == -9223372036854775807L || c10 == 0 || c10 == j11) ? false : false;
        }
        if (z10) {
            this.f22404a.h(j11);
        }
        x xVar = this.f22412i;
        if (xVar != null) {
            xVar.h(j11);
        }
        for (int i10 = 0; i10 < this.f22405b.size(); i10++) {
            ((a) this.f22405b.valueAt(i10)).d();
        }
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f22413j = mVar;
    }

    @Override // uc.k
    public boolean d(uc.l lVar) {
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

    @Override // uc.k
    public int h(uc.l lVar, uc.y yVar) {
        long j10;
        long j11;
        m mVar;
        oe.a.i(this.f22413j);
        long length = lVar.getLength();
        int i10 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
        if (i10 != 0 && !this.f22407d.e()) {
            return this.f22407d.g(lVar, yVar);
        }
        e(length);
        x xVar = this.f22412i;
        if (xVar != null && xVar.d()) {
            return this.f22412i.c(lVar, yVar);
        }
        lVar.e();
        if (i10 != 0) {
            j10 = length - lVar.g();
        } else {
            j10 = -1;
        }
        if ((j10 != -1 && j10 < 4) || !lVar.c(this.f22406c.e(), 0, 4, true)) {
            return -1;
        }
        this.f22406c.U(0);
        int q10 = this.f22406c.q();
        if (q10 == 441) {
            return -1;
        }
        if (q10 == 442) {
            lVar.n(this.f22406c.e(), 0, 10);
            this.f22406c.U(9);
            lVar.k((this.f22406c.H() & 7) + 14);
            return 0;
        } else if (q10 == 443) {
            lVar.n(this.f22406c.e(), 0, 2);
            this.f22406c.U(0);
            lVar.k(this.f22406c.N() + 6);
            return 0;
        } else if (((q10 & (-256)) >> 8) != 1) {
            lVar.k(1);
            return 0;
        } else {
            int i11 = q10 & SetSpanOperation.SPAN_MAX_PRIORITY;
            a aVar = (a) this.f22405b.get(i11);
            if (!this.f22408e) {
                if (aVar == null) {
                    if (i11 == 189) {
                        mVar = new c();
                        this.f22409f = true;
                        this.f22411h = lVar.getPosition();
                    } else if ((q10 & 224) == 192) {
                        mVar = new t();
                        this.f22409f = true;
                        this.f22411h = lVar.getPosition();
                    } else if ((q10 & 240) == 224) {
                        mVar = new n();
                        this.f22410g = true;
                        this.f22411h = lVar.getPosition();
                    } else {
                        mVar = null;
                    }
                    if (mVar != null) {
                        mVar.c(this.f22413j, new i0.d(i11, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER));
                        aVar = new a(mVar, this.f22404a);
                        this.f22405b.put(i11, aVar);
                    }
                }
                if (this.f22409f && this.f22410g) {
                    j11 = this.f22411h + 8192;
                } else {
                    j11 = 1048576;
                }
                if (lVar.getPosition() > j11) {
                    this.f22408e = true;
                    this.f22413j.q();
                }
            }
            lVar.n(this.f22406c.e(), 0, 2);
            this.f22406c.U(0);
            int N = this.f22406c.N() + 6;
            if (aVar == null) {
                lVar.k(N);
            } else {
                this.f22406c.Q(N);
                lVar.readFully(this.f22406c.e(), 0, N);
                this.f22406c.U(6);
                aVar.a(this.f22406c);
                oe.h0 h0Var = this.f22406c;
                h0Var.T(h0Var.b());
            }
            return 0;
        }
    }

    public a0(s0 s0Var) {
        this.f22404a = s0Var;
        this.f22406c = new oe.h0((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        this.f22405b = new SparseArray();
        this.f22407d = new y();
    }

    @Override // uc.k
    public void release() {
    }
}
