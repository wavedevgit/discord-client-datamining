package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements m {

    /* renamed from: b  reason: collision with root package name */
    private tc.b0 f22035b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22036c;

    /* renamed from: e  reason: collision with root package name */
    private int f22038e;

    /* renamed from: f  reason: collision with root package name */
    private int f22039f;

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f22034a = new ne.h0(10);

    /* renamed from: d  reason: collision with root package name */
    private long f22037d = -9223372036854775807L;

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f22035b);
        if (!this.f22036c) {
            return;
        }
        int a10 = h0Var.a();
        int i10 = this.f22039f;
        if (i10 < 10) {
            int min = Math.min(a10, 10 - i10);
            System.arraycopy(h0Var.e(), h0Var.f(), this.f22034a.e(), this.f22039f, min);
            if (this.f22039f + min == 10) {
                this.f22034a.U(0);
                if (73 == this.f22034a.H() && 68 == this.f22034a.H() && 51 == this.f22034a.H()) {
                    this.f22034a.V(3);
                    this.f22038e = this.f22034a.G() + 10;
                } else {
                    ne.y.i("Id3Reader", "Discarding invalid ID3 tag");
                    this.f22036c = false;
                    return;
                }
            }
        }
        int min2 = Math.min(a10, this.f22038e - this.f22039f);
        this.f22035b.f(h0Var, min2);
        this.f22039f += min2;
    }

    @Override // dd.m
    public void c() {
        this.f22036c = false;
        this.f22037d = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
        int i10;
        ne.a.i(this.f22035b);
        if (this.f22036c && (i10 = this.f22038e) != 0 && this.f22039f == i10) {
            long j10 = this.f22037d;
            if (j10 != -9223372036854775807L) {
                this.f22035b.d(j10, 1, i10, 0, null);
            }
            this.f22036c = false;
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f22036c = true;
        if (j10 != -9223372036854775807L) {
            this.f22037d = j10;
        }
        this.f22038e = 0;
        this.f22039f = 0;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        tc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f22035b = c10;
        c10.b(new Format.b().U(dVar.b()).g0("application/id3").G());
    }
}
