package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f20218a;

    /* renamed from: b  reason: collision with root package name */
    private final tc.b0[] f20219b;

    public d0(List list) {
        this.f20218a = list;
        this.f20219b = new tc.b0[list.size()];
    }

    public void a(long j10, ne.h0 h0Var) {
        tc.b.a(j10, h0Var, this.f20219b);
    }

    public void b(tc.m mVar, i0.d dVar) {
        boolean z10;
        for (int i10 = 0; i10 < this.f20219b.length; i10++) {
            dVar.a();
            tc.b0 c10 = mVar.c(dVar.c(), 3);
            Format format = (Format) this.f20218a.get(i10);
            String str = format.f11303w;
            if (!"application/cea-608".equals(str) && !"application/cea-708".equals(str)) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.b(z10, "Invalid closed caption MIME type provided: " + str);
            String str2 = format.f11292d;
            if (str2 == null) {
                str2 = dVar.b();
            }
            c10.b(new Format.b().U(str2).g0(str).i0(format.f11295o).X(format.f11294i).H(format.O).V(format.f11305y).G());
            this.f20219b[i10] = c10;
        }
    }
}
