package cd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import lc.l0;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f7520a;

    /* renamed from: b  reason: collision with root package name */
    public int f7521b;

    /* renamed from: c  reason: collision with root package name */
    public long f7522c;

    /* renamed from: d  reason: collision with root package name */
    public long f7523d;

    /* renamed from: e  reason: collision with root package name */
    public long f7524e;

    /* renamed from: f  reason: collision with root package name */
    public long f7525f;

    /* renamed from: g  reason: collision with root package name */
    public int f7526g;

    /* renamed from: h  reason: collision with root package name */
    public int f7527h;

    /* renamed from: i  reason: collision with root package name */
    public int f7528i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f7529j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f7530k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f7530k.Q(27);
        if (!n.b(lVar, this.f7530k.e(), 0, 27, z10) || this.f7530k.J() != 1332176723) {
            return false;
        }
        int H = this.f7530k.H();
        this.f7520a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f7521b = this.f7530k.H();
        this.f7522c = this.f7530k.v();
        this.f7523d = this.f7530k.x();
        this.f7524e = this.f7530k.x();
        this.f7525f = this.f7530k.x();
        int H2 = this.f7530k.H();
        this.f7526g = H2;
        this.f7527h = H2 + 27;
        this.f7530k.Q(H2);
        if (!n.b(lVar, this.f7530k.e(), 0, this.f7526g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f7526g; i10++) {
            this.f7529j[i10] = this.f7530k.H();
            this.f7528i += this.f7529j[i10];
        }
        return true;
    }

    public void b() {
        this.f7520a = 0;
        this.f7521b = 0;
        this.f7522c = 0L;
        this.f7523d = 0L;
        this.f7524e = 0L;
        this.f7525f = 0L;
        this.f7526g = 0;
        this.f7527h = 0;
        this.f7528i = 0;
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
        this.f7530k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f7530k.e(), 0, 4, true)) {
                this.f7530k.U(0);
                if (this.f7530k.J() == 1332176723) {
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
