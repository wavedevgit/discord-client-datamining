package ed;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import ed.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements m {

    /* renamed from: b  reason: collision with root package name */
    private final String f22555b;

    /* renamed from: c  reason: collision with root package name */
    private String f22556c;

    /* renamed from: d  reason: collision with root package name */
    private uc.b0 f22557d;

    /* renamed from: f  reason: collision with root package name */
    private int f22559f;

    /* renamed from: g  reason: collision with root package name */
    private int f22560g;

    /* renamed from: h  reason: collision with root package name */
    private long f22561h;

    /* renamed from: i  reason: collision with root package name */
    private Format f22562i;

    /* renamed from: j  reason: collision with root package name */
    private int f22563j;

    /* renamed from: a  reason: collision with root package name */
    private final oe.h0 f22554a = new oe.h0(new byte[18]);

    /* renamed from: e  reason: collision with root package name */
    private int f22558e = 0;

    /* renamed from: k  reason: collision with root package name */
    private long f22564k = -9223372036854775807L;

    public k(String str) {
        this.f22555b = str;
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22559f);
        h0Var.l(bArr, this.f22559f, min);
        int i11 = this.f22559f + min;
        this.f22559f = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        byte[] e10 = this.f22554a.e();
        if (this.f22562i == null) {
            Format g10 = oc.t.g(e10, this.f22556c, this.f22555b, null);
            this.f22562i = g10;
            this.f22557d.c(g10);
        }
        this.f22563j = oc.t.a(e10);
        this.f22561h = (int) ((oc.t.f(e10) * 1000000) / this.f22562i.K);
    }

    private boolean h(oe.h0 h0Var) {
        while (h0Var.a() > 0) {
            int i10 = this.f22560g << 8;
            this.f22560g = i10;
            int H = i10 | h0Var.H();
            this.f22560g = H;
            if (oc.t.d(H)) {
                byte[] e10 = this.f22554a.e();
                int i11 = this.f22560g;
                e10[0] = (byte) ((i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[1] = (byte) ((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[2] = (byte) ((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[3] = (byte) (i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f22559f = 4;
                this.f22560g = 0;
                return true;
            }
        }
        return false;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22557d);
        while (h0Var.a() > 0) {
            int i10 = this.f22558e;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f22563j - this.f22559f);
                        this.f22557d.e(h0Var, min);
                        int i11 = this.f22559f + min;
                        this.f22559f = i11;
                        int i12 = this.f22563j;
                        if (i11 == i12) {
                            long j10 = this.f22564k;
                            if (j10 != -9223372036854775807L) {
                                this.f22557d.a(j10, 1, i12, 0, null);
                                this.f22564k += this.f22561h;
                            }
                            this.f22558e = 0;
                        }
                    } else {
                        throw new IllegalStateException();
                    }
                } else if (f(h0Var, this.f22554a.e(), 18)) {
                    g();
                    this.f22554a.U(0);
                    this.f22557d.e(this.f22554a, 18);
                    this.f22558e = 2;
                }
            } else if (h(h0Var)) {
                this.f22558e = 1;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22558e = 0;
        this.f22559f = 0;
        this.f22560g = 0;
        this.f22564k = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22556c = dVar.b();
        this.f22557d = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22564k = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}
