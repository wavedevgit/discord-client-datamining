package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f22564a;

    /* renamed from: b  reason: collision with root package name */
    private final uc.b0[] f22565b;

    public k0(List list) {
        this.f22564a = list;
        this.f22565b = new uc.b0[list.size()];
    }

    public void a(long j10, oe.h0 h0Var) {
        if (h0Var.a() >= 9) {
            int q10 = h0Var.q();
            int q11 = h0Var.q();
            int H = h0Var.H();
            if (q10 == 434 && q11 == 1195456820 && H == 3) {
                uc.b.b(j10, h0Var, this.f22565b);
            }
        }
    }

    public void b(uc.m mVar, i0.d dVar) {
        boolean z10;
        for (int i10 = 0; i10 < this.f22565b.length; i10++) {
            dVar.a();
            uc.b0 c10 = mVar.c(dVar.c(), 3);
            Format format = (Format) this.f22564a.get(i10);
            String str = format.f12304w;
            if (!"application/cea-608".equals(str) && !"application/cea-708".equals(str)) {
                z10 = false;
            } else {
                z10 = true;
            }
            oe.a.b(z10, "Invalid closed caption MIME type provided: " + str);
            c10.c(new Format.b().U(dVar.b()).g0(str).i0(format.f12296o).X(format.f12295i).H(format.O).V(format.f12306y).G());
            this.f22565b[i10] = c10;
        }
    }
}
