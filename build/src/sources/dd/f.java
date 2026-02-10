package dd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import mc.l0;
import oe.h0;
import uc.l;
import uc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f21591a;

    /* renamed from: b  reason: collision with root package name */
    public int f21592b;

    /* renamed from: c  reason: collision with root package name */
    public long f21593c;

    /* renamed from: d  reason: collision with root package name */
    public long f21594d;

    /* renamed from: e  reason: collision with root package name */
    public long f21595e;

    /* renamed from: f  reason: collision with root package name */
    public long f21596f;

    /* renamed from: g  reason: collision with root package name */
    public int f21597g;

    /* renamed from: h  reason: collision with root package name */
    public int f21598h;

    /* renamed from: i  reason: collision with root package name */
    public int f21599i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f21600j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f21601k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f21601k.Q(27);
        if (!n.b(lVar, this.f21601k.e(), 0, 27, z10) || this.f21601k.J() != 1332176723) {
            return false;
        }
        int H = this.f21601k.H();
        this.f21591a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f21592b = this.f21601k.H();
        this.f21593c = this.f21601k.v();
        this.f21594d = this.f21601k.x();
        this.f21595e = this.f21601k.x();
        this.f21596f = this.f21601k.x();
        int H2 = this.f21601k.H();
        this.f21597g = H2;
        this.f21598h = H2 + 27;
        this.f21601k.Q(H2);
        if (!n.b(lVar, this.f21601k.e(), 0, this.f21597g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f21597g; i10++) {
            this.f21600j[i10] = this.f21601k.H();
            this.f21599i += this.f21600j[i10];
        }
        return true;
    }

    public void b() {
        this.f21591a = 0;
        this.f21592b = 0;
        this.f21593c = 0L;
        this.f21594d = 0L;
        this.f21595e = 0L;
        this.f21596f = 0L;
        this.f21597g = 0;
        this.f21598h = 0;
        this.f21599i = 0;
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
        this.f21601k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f21601k.e(), 0, 4, true)) {
                this.f21601k.U(0);
                if (this.f21601k.J() == 1332176723) {
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
