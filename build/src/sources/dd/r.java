package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements m {

    /* renamed from: b  reason: collision with root package name */
    private tc.b0 f20686b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20687c;

    /* renamed from: e  reason: collision with root package name */
    private int f20689e;

    /* renamed from: f  reason: collision with root package name */
    private int f20690f;

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f20685a = new ne.h0(10);

    /* renamed from: d  reason: collision with root package name */
    private long f20688d = -9223372036854775807L;

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20686b);
        if (!this.f20687c) {
            return;
        }
        int a10 = h0Var.a();
        int i10 = this.f20690f;
        if (i10 < 10) {
            int min = Math.min(a10, 10 - i10);
            System.arraycopy(h0Var.e(), h0Var.f(), this.f20685a.e(), this.f20690f, min);
            if (this.f20690f + min == 10) {
                this.f20685a.U(0);
                if (73 == this.f20685a.H() && 68 == this.f20685a.H() && 51 == this.f20685a.H()) {
                    this.f20685a.V(3);
                    this.f20689e = this.f20685a.G() + 10;
                } else {
                    ne.y.i("Id3Reader", "Discarding invalid ID3 tag");
                    this.f20687c = false;
                    return;
                }
            }
        }
        int min2 = Math.min(a10, this.f20689e - this.f20690f);
        this.f20686b.f(h0Var, min2);
        this.f20690f += min2;
    }

    @Override // dd.m
    public void c() {
        this.f20687c = false;
        this.f20688d = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
        int i10;
        ne.a.i(this.f20686b);
        if (this.f20687c && (i10 = this.f20689e) != 0 && this.f20690f == i10) {
            long j10 = this.f20688d;
            if (j10 != -9223372036854775807L) {
                this.f20686b.d(j10, 1, i10, 0, null);
            }
            this.f20687c = false;
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f20687c = true;
        if (j10 != -9223372036854775807L) {
            this.f20688d = j10;
        }
        this.f20689e = 0;
        this.f20690f = 0;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        tc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f20686b = c10;
        c10.b(new Format.b().U(dVar.b()).g0("application/id3").G());
    }
}
