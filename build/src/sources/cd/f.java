package cd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import lc.l0;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f8115a;

    /* renamed from: b  reason: collision with root package name */
    public int f8116b;

    /* renamed from: c  reason: collision with root package name */
    public long f8117c;

    /* renamed from: d  reason: collision with root package name */
    public long f8118d;

    /* renamed from: e  reason: collision with root package name */
    public long f8119e;

    /* renamed from: f  reason: collision with root package name */
    public long f8120f;

    /* renamed from: g  reason: collision with root package name */
    public int f8121g;

    /* renamed from: h  reason: collision with root package name */
    public int f8122h;

    /* renamed from: i  reason: collision with root package name */
    public int f8123i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f8124j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f8125k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f8125k.Q(27);
        if (!n.b(lVar, this.f8125k.e(), 0, 27, z10) || this.f8125k.J() != 1332176723) {
            return false;
        }
        int H = this.f8125k.H();
        this.f8115a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f8116b = this.f8125k.H();
        this.f8117c = this.f8125k.v();
        this.f8118d = this.f8125k.x();
        this.f8119e = this.f8125k.x();
        this.f8120f = this.f8125k.x();
        int H2 = this.f8125k.H();
        this.f8121g = H2;
        this.f8122h = H2 + 27;
        this.f8125k.Q(H2);
        if (!n.b(lVar, this.f8125k.e(), 0, this.f8121g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f8121g; i10++) {
            this.f8124j[i10] = this.f8125k.H();
            this.f8123i += this.f8124j[i10];
        }
        return true;
    }

    public void b() {
        this.f8115a = 0;
        this.f8116b = 0;
        this.f8117c = 0L;
        this.f8118d = 0L;
        this.f8119e = 0L;
        this.f8120f = 0L;
        this.f8121g = 0;
        this.f8122h = 0;
        this.f8123i = 0;
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
        this.f8125k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f8125k.e(), 0, 4, true)) {
                this.f8125k.U(0);
                if (this.f8125k.J() == 1332176723) {
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
