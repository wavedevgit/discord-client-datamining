package cd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import lc.l0;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    public int f7365a;

    /* renamed from: b  reason: collision with root package name */
    public int f7366b;

    /* renamed from: c  reason: collision with root package name */
    public long f7367c;

    /* renamed from: d  reason: collision with root package name */
    public long f7368d;

    /* renamed from: e  reason: collision with root package name */
    public long f7369e;

    /* renamed from: f  reason: collision with root package name */
    public long f7370f;

    /* renamed from: g  reason: collision with root package name */
    public int f7371g;

    /* renamed from: h  reason: collision with root package name */
    public int f7372h;

    /* renamed from: i  reason: collision with root package name */
    public int f7373i;

    /* renamed from: j  reason: collision with root package name */
    public final int[] f7374j = new int[SetSpanOperation.SPAN_MAX_PRIORITY];

    /* renamed from: k  reason: collision with root package name */
    private final h0 f7375k = new h0((int) SetSpanOperation.SPAN_MAX_PRIORITY);

    public boolean a(l lVar, boolean z10) {
        b();
        this.f7375k.Q(27);
        if (!n.b(lVar, this.f7375k.e(), 0, 27, z10) || this.f7375k.J() != 1332176723) {
            return false;
        }
        int H = this.f7375k.H();
        this.f7365a = H;
        if (H != 0) {
            if (z10) {
                return false;
            }
            throw l0.d("unsupported bit stream revision");
        }
        this.f7366b = this.f7375k.H();
        this.f7367c = this.f7375k.v();
        this.f7368d = this.f7375k.x();
        this.f7369e = this.f7375k.x();
        this.f7370f = this.f7375k.x();
        int H2 = this.f7375k.H();
        this.f7371g = H2;
        this.f7372h = H2 + 27;
        this.f7375k.Q(H2);
        if (!n.b(lVar, this.f7375k.e(), 0, this.f7371g, z10)) {
            return false;
        }
        for (int i10 = 0; i10 < this.f7371g; i10++) {
            this.f7374j[i10] = this.f7375k.H();
            this.f7373i += this.f7374j[i10];
        }
        return true;
    }

    public void b() {
        this.f7365a = 0;
        this.f7366b = 0;
        this.f7367c = 0L;
        this.f7368d = 0L;
        this.f7369e = 0L;
        this.f7370f = 0L;
        this.f7371g = 0;
        this.f7372h = 0;
        this.f7373i = 0;
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
        this.f7375k.Q(4);
        while (true) {
            i10 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
            if ((i10 == 0 || lVar.getPosition() + 4 < j10) && n.b(lVar, this.f7375k.e(), 0, 4, true)) {
                this.f7375k.U(0);
                if (this.f7375k.J() == 1332176723) {
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
