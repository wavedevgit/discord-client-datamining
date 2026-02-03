package cd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import lc.l0;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f7102a;

    /* renamed from: b  reason: collision with root package name */
    public int f7103b;

    /* renamed from: c  reason: collision with root package name */
    public long f7104c;

    /* renamed from: d  reason: collision with root package name */
    public long f7105d;

    /* renamed from: e  reason: collision with root package name */
    public long f7106e;

    /* renamed from: f  reason: collision with root package name */
    public long f7107f;

    /* renamed from: g  reason: collision with root package name */
    public int f7108g;

    /* renamed from: h  reason: collision with root package name */
    public int f7109h;

    /* renamed from: i  reason: collision with root package name */
    public int f7110i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f7111j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f7112k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f7112k.Q(27);
        if (!n.b(lVar, this.f7112k.e(), 0, 27, z10) || this.f7112k.J() != 1332176723) {
            return false;
        }
        int H = this.f7112k.H();
        this.f7102a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f7103b = this.f7112k.H();
        this.f7104c = this.f7112k.v();
        this.f7105d = this.f7112k.x();
        this.f7106e = this.f7112k.x();
        this.f7107f = this.f7112k.x();
        int H2 = this.f7112k.H();
        this.f7108g = H2;
        this.f7109h = H2 + 27;
        this.f7112k.Q(H2);
        if (!n.b(lVar, this.f7112k.e(), 0, this.f7108g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f7108g; i10++) {
            this.f7111j[i10] = this.f7112k.H();
            this.f7110i += this.f7111j[i10];
        }
        return true;
    }

    public void b() {
        this.f7102a = 0;
        this.f7103b = 0;
        this.f7104c = 0L;
        this.f7105d = 0L;
        this.f7106e = 0L;
        this.f7107f = 0L;
        this.f7108g = 0;
        this.f7109h = 0;
        this.f7110i = 0;
    }

    public boolean c(l lVar) {
        return d(lVar, -1L);
    }

    public boolean d(l lVar, long j10) {
        boolean z10;
        int i10;
        if (lVar.getPosition() == lVar.g()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f7112k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f7112k.e(), 0, 4, true)) {
                this.f7112k.U(0);
                if (this.f7112k.J() == 1332176723) {
                    lVar.e();
                    return true;
                }
                lVar.k(1);
            }
        }
        do {
            if (i10 != 0 && lVar.getPosition() >= j10) {
                break;
            }
        } while (lVar.a(1) != -1);
        return false;
    }
}
