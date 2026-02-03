package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements m {

    /* renamed from: b  reason: collision with root package name */
    private tc.b0 f21611b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21612c;

    /* renamed from: e  reason: collision with root package name */
    private int f21614e;

    /* renamed from: f  reason: collision with root package name */
    private int f21615f;

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f21610a = new ne.h0(10);

    /* renamed from: d  reason: collision with root package name */
    private long f21613d = -9223372036854775807L;

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f21611b);
        if (!this.f21612c) {
            return;
        }
        int a10 = h0Var.a();
        int i10 = this.f21615f;
        if (i10 < 10) {
            int min = Math.min(a10, 10 - i10);
            System.arraycopy(h0Var.e(), h0Var.f(), this.f21610a.e(), this.f21615f, min);
            if (this.f21615f + min == 10) {
                this.f21610a.U(0);
                if (73 == this.f21610a.H() && 68 == this.f21610a.H() && 51 == this.f21610a.H()) {
                    this.f21610a.V(3);
                    this.f21614e = this.f21610a.G() + 10;
                } else {
                    ne.y.i("Id3Reader", "Discarding invalid ID3 tag");
                    this.f21612c = false;
                    return;
                }
            }
        }
        int min2 = Math.min(a10, this.f21614e - this.f21615f);
        this.f21611b.f(h0Var, min2);
        this.f21615f += min2;
    }

    @Override // dd.m
    public void c() {
        this.f21612c = false;
        this.f21613d = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
        int i10;
        ne.a.i(this.f21611b);
        if (this.f21612c && (i10 = this.f21614e) != 0 && this.f21615f == i10) {
            long j10 = this.f21613d;
            if (j10 != -9223372036854775807L) {
                this.f21611b.d(j10, 1, i10, 0, null);
            }
            this.f21612c = false;
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f21612c = true;
        if (j10 != -9223372036854775807L) {
            this.f21613d = j10;
        }
        this.f21614e = 0;
        this.f21615f = 0;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        tc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f21611b = c10;
        c10.b(new Format.b().U(dVar.b()).g0("application/id3").G());
    }
}
