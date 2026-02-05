package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f20553a;

    /* renamed from: b  reason: collision with root package name */
    private final tc.b0[] f20554b;

    public k0(List list) {
        this.f20553a = list;
        this.f20554b = new tc.b0[list.size()];
    }

    public void a(long j10, ne.h0 h0Var) {
        if (h0Var.a() >= 9) {
            int q10 = h0Var.q();
            int q11 = h0Var.q();
            int H = h0Var.H();
            if (q10 == 434 && q11 == 1195456820 && H == 3) {
                tc.b.b(j10, h0Var, this.f20554b);
            }
        }
    }

    public void b(tc.m mVar, i0.d dVar) {
        boolean z10;
        for (int i10 = 0; i10 < this.f20554b.length; i10++) {
            dVar.a();
            tc.b0 c10 = mVar.c(dVar.c(), 3);
            Format format = (Format) this.f20553a.get(i10);
            String str = format.f11688w;
            if (!"application/cea-608".equals(str) && !"application/cea-708".equals(str)) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.b(z10, "Invalid closed caption MIME type provided: " + str);
            c10.b(new Format.b().U(dVar.b()).g0(str).i0(format.f11680o).X(format.f11679i).H(format.O).V(format.f11690y).G());
            this.f20554b[i10] = c10;
        }
    }
}
