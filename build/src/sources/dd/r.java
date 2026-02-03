package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements m {

    /* renamed from: b  reason: collision with root package name */
    private tc.b0 f20470b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20471c;

    /* renamed from: e  reason: collision with root package name */
    private int f20473e;

    /* renamed from: f  reason: collision with root package name */
    private int f20474f;

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f20469a = new ne.h0(10);

    /* renamed from: d  reason: collision with root package name */
    private long f20472d = -9223372036854775807L;

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20470b);
        if (!this.f20471c) {
            return;
        }
        int a10 = h0Var.a();
        int i10 = this.f20474f;
        if (i10 < 10) {
            int min = Math.min(a10, 10 - i10);
            System.arraycopy(h0Var.e(), h0Var.f(), this.f20469a.e(), this.f20474f, min);
            if (this.f20474f + min == 10) {
                this.f20469a.U(0);
                if (73 == this.f20469a.H() && 68 == this.f20469a.H() && 51 == this.f20469a.H()) {
                    this.f20469a.V(3);
                    this.f20473e = this.f20469a.G() + 10;
                } else {
                    ne.y.i("Id3Reader", "Discarding invalid ID3 tag");
                    this.f20471c = false;
                    return;
                }
            }
        }
        int min2 = Math.min(a10, this.f20473e - this.f20474f);
        this.f20470b.f(h0Var, min2);
        this.f20474f += min2;
    }

    @Override // dd.m
    public void c() {
        this.f20471c = false;
        this.f20472d = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
        int i10;
        ne.a.i(this.f20470b);
        if (this.f20471c && (i10 = this.f20473e) != 0 && this.f20474f == i10) {
            long j10 = this.f20472d;
            if (j10 != -9223372036854775807L) {
                this.f20470b.d(j10, 1, i10, 0, null);
            }
            this.f20471c = false;
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f20471c = true;
        if (j10 != -9223372036854775807L) {
            this.f20472d = j10;
        }
        this.f20473e = 0;
        this.f20474f = 0;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        tc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f20470b = c10;
        c10.b(new Format.b().U(dVar.b()).g0("application/id3").G());
    }
}
