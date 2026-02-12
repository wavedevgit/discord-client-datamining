package dd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import mc.l0;
import oe.h0;
import uc.l;
import uc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f21592a;

    /* renamed from: b  reason: collision with root package name */
    public int f21593b;

    /* renamed from: c  reason: collision with root package name */
    public long f21594c;

    /* renamed from: d  reason: collision with root package name */
    public long f21595d;

    /* renamed from: e  reason: collision with root package name */
    public long f21596e;

    /* renamed from: f  reason: collision with root package name */
    public long f21597f;

    /* renamed from: g  reason: collision with root package name */
    public int f21598g;

    /* renamed from: h  reason: collision with root package name */
    public int f21599h;

    /* renamed from: i  reason: collision with root package name */
    public int f21600i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f21601j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f21602k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f21602k.Q(27);
        if (!n.b(lVar, this.f21602k.e(), 0, 27, z10) || this.f21602k.J() != 1332176723) {
            return false;
        }
        int H = this.f21602k.H();
        this.f21592a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f21593b = this.f21602k.H();
        this.f21594c = this.f21602k.v();
        this.f21595d = this.f21602k.x();
        this.f21596e = this.f21602k.x();
        this.f21597f = this.f21602k.x();
        int H2 = this.f21602k.H();
        this.f21598g = H2;
        this.f21599h = H2 + 27;
        this.f21602k.Q(H2);
        if (!n.b(lVar, this.f21602k.e(), 0, this.f21598g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f21598g; i10++) {
            this.f21601j[i10] = this.f21602k.H();
            this.f21600i += this.f21601j[i10];
        }
        return true;
    }

    public void b() {
        this.f21592a = 0;
        this.f21593b = 0;
        this.f21594c = 0L;
        this.f21595d = 0L;
        this.f21596e = 0L;
        this.f21597f = 0L;
        this.f21598g = 0;
        this.f21599h = 0;
        this.f21600i = 0;
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
        oe.a.a(z10);
        this.f21602k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f21602k.e(), 0, 4, true)) {
                this.f21602k.U(0);
                if (this.f21602k.J() == 1332176723) {
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
