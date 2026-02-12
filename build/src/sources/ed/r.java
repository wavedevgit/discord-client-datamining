package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements m {

    /* renamed from: b  reason: collision with root package name */
    private uc.b0 f22698b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22699c;

    /* renamed from: e  reason: collision with root package name */
    private int f22701e;

    /* renamed from: f  reason: collision with root package name */
    private int f22702f;

    /* renamed from: a  reason: collision with root package name */
    private final oe.h0 f22697a = new oe.h0(10);

    /* renamed from: d  reason: collision with root package name */
    private long f22700d = -9223372036854775807L;

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22698b);
        if (!this.f22699c) {
            return;
        }
        int a10 = h0Var.a();
        int i10 = this.f22702f;
        if (i10 < 10) {
            int min = Math.min(a10, 10 - i10);
            System.arraycopy(h0Var.e(), h0Var.f(), this.f22697a.e(), this.f22702f, min);
            if (this.f22702f + min == 10) {
                this.f22697a.U(0);
                if (73 == this.f22697a.H() && 68 == this.f22697a.H() && 51 == this.f22697a.H()) {
                    this.f22697a.V(3);
                    this.f22701e = this.f22697a.G() + 10;
                } else {
                    oe.y.i("Id3Reader", "Discarding invalid ID3 tag");
                    this.f22699c = false;
                    return;
                }
            }
        }
        int min2 = Math.min(a10, this.f22701e - this.f22702f);
        this.f22698b.e(h0Var, min2);
        this.f22702f += min2;
    }

    @Override // ed.m
    public void b() {
        this.f22699c = false;
        this.f22700d = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        uc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f22698b = c10;
        c10.c(new Format.b().U(dVar.b()).g0("application/id3").G());
    }

    @Override // ed.m
    public void d() {
        int i10;
        oe.a.i(this.f22698b);
        if (this.f22699c && (i10 = this.f22701e) != 0 && this.f22702f == i10) {
            long j10 = this.f22700d;
            if (j10 != -9223372036854775807L) {
                this.f22698b.a(j10, 1, i10, 0, null);
            }
            this.f22699c = false;
        }
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f22699c = true;
        if (j10 != -9223372036854775807L) {
            this.f22700d = j10;
        }
        this.f22701e = 0;
        this.f22702f = 0;
    }
}
