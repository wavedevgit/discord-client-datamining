package cd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import lc.l0;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f8259a;

    /* renamed from: b  reason: collision with root package name */
    public int f8260b;

    /* renamed from: c  reason: collision with root package name */
    public long f8261c;

    /* renamed from: d  reason: collision with root package name */
    public long f8262d;

    /* renamed from: e  reason: collision with root package name */
    public long f8263e;

    /* renamed from: f  reason: collision with root package name */
    public long f8264f;

    /* renamed from: g  reason: collision with root package name */
    public int f8265g;

    /* renamed from: h  reason: collision with root package name */
    public int f8266h;

    /* renamed from: i  reason: collision with root package name */
    public int f8267i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f8268j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f8269k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f8269k.Q(27);
        if (!n.b(lVar, this.f8269k.e(), 0, 27, z10) || this.f8269k.J() != 1332176723) {
            return false;
        }
        int H = this.f8269k.H();
        this.f8259a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f8260b = this.f8269k.H();
        this.f8261c = this.f8269k.v();
        this.f8262d = this.f8269k.x();
        this.f8263e = this.f8269k.x();
        this.f8264f = this.f8269k.x();
        int H2 = this.f8269k.H();
        this.f8265g = H2;
        this.f8266h = H2 + 27;
        this.f8269k.Q(H2);
        if (!n.b(lVar, this.f8269k.e(), 0, this.f8265g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f8265g; i10++) {
            this.f8268j[i10] = this.f8269k.H();
            this.f8267i += this.f8268j[i10];
        }
        return true;
    }

    public void b() {
        this.f8259a = 0;
        this.f8260b = 0;
        this.f8261c = 0L;
        this.f8262d = 0L;
        this.f8263e = 0L;
        this.f8264f = 0L;
        this.f8265g = 0;
        this.f8266h = 0;
        this.f8267i = 0;
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
        this.f8269k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f8269k.e(), 0, 4, true)) {
                this.f8269k.U(0);
                if (this.f8269k.J() == 1332176723) {
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
