package dd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import mc.l0;
import oe.h0;
import uc.l;
import uc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f20644a;

    /* renamed from: b  reason: collision with root package name */
    public int f20645b;

    /* renamed from: c  reason: collision with root package name */
    public long f20646c;

    /* renamed from: d  reason: collision with root package name */
    public long f20647d;

    /* renamed from: e  reason: collision with root package name */
    public long f20648e;

    /* renamed from: f  reason: collision with root package name */
    public long f20649f;

    /* renamed from: g  reason: collision with root package name */
    public int f20650g;

    /* renamed from: h  reason: collision with root package name */
    public int f20651h;

    /* renamed from: i  reason: collision with root package name */
    public int f20652i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f20653j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f20654k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f20654k.Q(27);
        if (!n.b(lVar, this.f20654k.e(), 0, 27, z10) || this.f20654k.J() != 1332176723) {
            return false;
        }
        int H = this.f20654k.H();
        this.f20644a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f20645b = this.f20654k.H();
        this.f20646c = this.f20654k.v();
        this.f20647d = this.f20654k.x();
        this.f20648e = this.f20654k.x();
        this.f20649f = this.f20654k.x();
        int H2 = this.f20654k.H();
        this.f20650g = H2;
        this.f20651h = H2 + 27;
        this.f20654k.Q(H2);
        if (!n.b(lVar, this.f20654k.e(), 0, this.f20650g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f20650g; i10++) {
            this.f20653j[i10] = this.f20654k.H();
            this.f20652i += this.f20653j[i10];
        }
        return true;
    }

    public void b() {
        this.f20644a = 0;
        this.f20645b = 0;
        this.f20646c = 0L;
        this.f20647d = 0L;
        this.f20648e = 0L;
        this.f20649f = 0L;
        this.f20650g = 0;
        this.f20651h = 0;
        this.f20652i = 0;
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
        this.f20654k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f20654k.e(), 0, 4, true)) {
                this.f20654k.U(0);
                if (this.f20654k.J() == 1332176723) {
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
