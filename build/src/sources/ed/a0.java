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
    public static final uc.p f21236l = new uc.p() { // from class: ed.z
        @Override // uc.p
        public final uc.k[] b() {
            return a0.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final s0 f21237a;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f21238b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f21239c;

    /* renamed from: d  reason: collision with root package name */
    private final y f21240d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21241e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21242f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f21243g;

    /* renamed from: h  reason: collision with root package name */
    private long f21244h;

    /* renamed from: i  reason: collision with root package name */
    private x f21245i;

    /* renamed from: j  reason: collision with root package name */
    private uc.m f21246j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21247k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final m f21248a;

        /* renamed from: b  reason: collision with root package name */
        private final s0 f21249b;

        /* renamed from: c  reason: collision with root package name */
        private final oe.g0 f21250c = new oe.g0(new byte[64]);

        /* renamed from: d  reason: collision with root package name */
        private boolean f21251d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21252e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f21253f;

        /* renamed from: g  reason: collision with root package name */
        private int f21254g;

        /* renamed from: h  reason: collision with root package name */
        private long f21255h;

        public a(m mVar, s0 s0Var) {
            this.f21248a = mVar;
            this.f21249b = s0Var;
        }

        private void b() {
            this.f21250c.r(8);
            this.f21251d = this.f21250c.g();
            this.f21252e = this.f21250c.g();
            this.f21250c.r(6);
            this.f21254g = this.f21250c.h(8);
        }

        private void c() {
            this.f21255h = 0L;
            if (this.f21251d) {
                this.f21250c.r(4);
                this.f21250c.r(1);
                this.f21250c.r(1);
                long h10 = (this.f21250c.h(3) << 30) | (this.f21250c.h(15) << 15) | this.f21250c.h(15);
                this.f21250c.r(1);
                if (!this.f21253f && this.f21252e) {
                    this.f21250c.r(4);
                    this.f21250c.r(1);
                    this.f21250c.r(1);
                    this.f21250c.r(1);
                    this.f21249b.b((this.f21250c.h(3) << 30) | (this.f21250c.h(15) << 15) | this.f21250c.h(15));
                    this.f21253f = true;
                }
                this.f21255h = this.f21249b.b(h10);
            }
        }

        public void a(oe.h0 h0Var) {
            h0Var.l(this.f21250c.f40620a, 0, 3);
            this.f21250c.p(0);
            b();
            h0Var.l(this.f21250c.f40620a, 0, this.f21254g);
            this.f21250c.p(0);
            c();
            this.f21248a.e(this.f21255h, 4);
            this.f21248a.a(h0Var);
            this.f21248a.d();
        }

        public void d() {
            this.f21253f = false;
            this.f21248a.b();
        }
    }

    public a0() {
        this(new s0(0L));
    }

    public static /* synthetic */ uc.k[] b() {
        return new uc.k[]{new a0()};
    }

    private void e(long j10) {
        if (!this.f21247k) {
            this.f21247k = true;
            if (this.f21240d.c() != -9223372036854775807L) {
                x xVar = new x(this.f21240d.d(), this.f21240d.c(), j10);
                this.f21245i = xVar;
                this.f21246j.j(xVar.b());
                return;
            }
            this.f21246j.j(new z.b(this.f21240d.c()));
        }
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        boolean z10;
        boolean z11 = true;
        if (this.f21237a.e() == -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            long c10 = this.f21237a.c();
            z10 = (c10 == -9223372036854775807L || c10 == 0 || c10 == j11) ? false : false;
        }
        if (z10) {
            this.f21237a.h(j11);
        }
        x xVar = this.f21245i;
        if (xVar != null) {
            xVar.h(j11);
        }
        for (int i10 = 0; i10 < this.f21238b.size(); i10++) {
            ((a) this.f21238b.valueAt(i10)).d();
        }
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f21246j = mVar;
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
        oe.a.i(this.f21246j);
        long length = lVar.getLength();
        int i10 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
        if (i10 != 0 && !this.f21240d.e()) {
            return this.f21240d.g(lVar, yVar);
        }
        e(length);
        x xVar = this.f21245i;
        if (xVar != null && xVar.d()) {
            return this.f21245i.c(lVar, yVar);
        }
        lVar.e();
        if (i10 != 0) {
            j10 = length - lVar.g();
        } else {
            j10 = -1;
        }
        if ((j10 != -1 && j10 < 4) || !lVar.c(this.f21239c.e(), 0, 4, true)) {
            return -1;
        }
        this.f21239c.U(0);
        int q10 = this.f21239c.q();
        if (q10 == 441) {
            return -1;
        }
        if (q10 == 442) {
            lVar.n(this.f21239c.e(), 0, 10);
            this.f21239c.U(9);
            lVar.k((this.f21239c.H() & 7) + 14);
            return 0;
        } else if (q10 == 443) {
            lVar.n(this.f21239c.e(), 0, 2);
            this.f21239c.U(0);
            lVar.k(this.f21239c.N() + 6);
            return 0;
        } else if (((q10 & (-256)) >> 8) != 1) {
            lVar.k(1);
            return 0;
        } else {
            int i11 = q10 & SetSpanOperation.SPAN_MAX_PRIORITY;
            a aVar = (a) this.f21238b.get(i11);
            if (!this.f21241e) {
                if (aVar == null) {
                    if (i11 == 189) {
                        mVar = new c();
                        this.f21242f = true;
                        this.f21244h = lVar.getPosition();
                    } else if ((q10 & 224) == 192) {
                        mVar = new t();
                        this.f21242f = true;
                        this.f21244h = lVar.getPosition();
                    } else if ((q10 & 240) == 224) {
                        mVar = new n();
                        this.f21243g = true;
                        this.f21244h = lVar.getPosition();
                    } else {
                        mVar = null;
                    }
                    if (mVar != null) {
                        mVar.c(this.f21246j, new i0.d(i11, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER));
                        aVar = new a(mVar, this.f21237a);
                        this.f21238b.put(i11, aVar);
                    }
                }
                if (this.f21242f && this.f21243g) {
                    j11 = this.f21244h + 8192;
                } else {
                    j11 = 1048576;
                }
                if (lVar.getPosition() > j11) {
                    this.f21241e = true;
                    this.f21246j.q();
                }
            }
            lVar.n(this.f21239c.e(), 0, 2);
            this.f21239c.U(0);
            int N = this.f21239c.N() + 6;
            if (aVar == null) {
                lVar.k(N);
            } else {
                this.f21239c.Q(N);
                lVar.readFully(this.f21239c.e(), 0, N);
                this.f21239c.U(6);
                aVar.a(this.f21239c);
                oe.h0 h0Var = this.f21239c;
                h0Var.T(h0Var.b());
            }
            return 0;
        }
    }

    public a0(s0 s0Var) {
        this.f21237a = s0Var;
        this.f21239c = new oe.h0((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        this.f21238b = new SparseArray();
        this.f21240d = new y();
    }

    @Override // uc.k
    public void release() {
    }
}
