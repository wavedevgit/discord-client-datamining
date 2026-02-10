package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements m {

    /* renamed from: b  reason: collision with root package name */
    private uc.b0 f21530b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21531c;

    /* renamed from: e  reason: collision with root package name */
    private int f21533e;

    /* renamed from: f  reason: collision with root package name */
    private int f21534f;

    /* renamed from: a  reason: collision with root package name */
    private final oe.h0 f21529a = new oe.h0(10);

    /* renamed from: d  reason: collision with root package name */
    private long f21532d = -9223372036854775807L;

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f21530b);
        if (!this.f21531c) {
            return;
        }
        int a10 = h0Var.a();
        int i10 = this.f21534f;
        if (i10 < 10) {
            int min = Math.min(a10, 10 - i10);
            System.arraycopy(h0Var.e(), h0Var.f(), this.f21529a.e(), this.f21534f, min);
            if (this.f21534f + min == 10) {
                this.f21529a.U(0);
                if (73 == this.f21529a.H() && 68 == this.f21529a.H() && 51 == this.f21529a.H()) {
                    this.f21529a.V(3);
                    this.f21533e = this.f21529a.G() + 10;
                } else {
                    oe.y.i("Id3Reader", "Discarding invalid ID3 tag");
                    this.f21531c = false;
                    return;
                }
            }
        }
        int min2 = Math.min(a10, this.f21533e - this.f21534f);
        this.f21530b.e(h0Var, min2);
        this.f21534f += min2;
    }

    @Override // ed.m
    public void b() {
        this.f21531c = false;
        this.f21532d = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        uc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f21530b = c10;
        c10.c(new Format.b().U(dVar.b()).g0("application/id3").G());
    }

    @Override // ed.m
    public void d() {
        int i10;
        oe.a.i(this.f21530b);
        if (this.f21531c && (i10 = this.f21533e) != 0 && this.f21534f == i10) {
            long j10 = this.f21532d;
            if (j10 != -9223372036854775807L) {
                this.f21530b.a(j10, 1, i10, 0, null);
            }
            this.f21531c = false;
        }
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f21531c = true;
        if (j10 != -9223372036854775807L) {
            this.f21532d = j10;
        }
        this.f21533e = 0;
        this.f21534f = 0;
    }
}
