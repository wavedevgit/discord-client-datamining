package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements m {

    /* renamed from: b  reason: collision with root package name */
    private uc.b0 f22697b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22698c;

    /* renamed from: e  reason: collision with root package name */
    private int f22700e;

    /* renamed from: f  reason: collision with root package name */
    private int f22701f;

    /* renamed from: a  reason: collision with root package name */
    private final oe.h0 f22696a = new oe.h0(10);

    /* renamed from: d  reason: collision with root package name */
    private long f22699d = -9223372036854775807L;

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22697b);
        if (!this.f22698c) {
            return;
        }
        int a10 = h0Var.a();
        int i10 = this.f22701f;
        if (i10 < 10) {
            int min = Math.min(a10, 10 - i10);
            System.arraycopy(h0Var.e(), h0Var.f(), this.f22696a.e(), this.f22701f, min);
            if (this.f22701f + min == 10) {
                this.f22696a.U(0);
                if (73 == this.f22696a.H() && 68 == this.f22696a.H() && 51 == this.f22696a.H()) {
                    this.f22696a.V(3);
                    this.f22700e = this.f22696a.G() + 10;
                } else {
                    oe.y.i("Id3Reader", "Discarding invalid ID3 tag");
                    this.f22698c = false;
                    return;
                }
            }
        }
        int min2 = Math.min(a10, this.f22700e - this.f22701f);
        this.f22697b.e(h0Var, min2);
        this.f22701f += min2;
    }

    @Override // ed.m
    public void b() {
        this.f22698c = false;
        this.f22699d = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        uc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f22697b = c10;
        c10.c(new Format.b().U(dVar.b()).g0("application/id3").G());
    }

    @Override // ed.m
    public void d() {
        int i10;
        oe.a.i(this.f22697b);
        if (this.f22698c && (i10 = this.f22700e) != 0 && this.f22701f == i10) {
            long j10 = this.f22699d;
            if (j10 != -9223372036854775807L) {
                this.f22697b.a(j10, 1, i10, 0, null);
            }
            this.f22698c = false;
        }
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f22698c = true;
        if (j10 != -9223372036854775807L) {
            this.f22699d = j10;
        }
        this.f22700e = 0;
        this.f22701f = 0;
    }
}
