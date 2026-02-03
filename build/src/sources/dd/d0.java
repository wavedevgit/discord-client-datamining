package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f21359a;

    /* renamed from: b  reason: collision with root package name */
    private final tc.b0[] f21360b;

    public d0(List list) {
        this.f21359a = list;
        this.f21360b = new tc.b0[list.size()];
    }

    public void a(long j10, ne.h0 h0Var) {
        tc.b.a(j10, h0Var, this.f21360b);
    }

    public void b(tc.m mVar, i0.d dVar) {
        boolean z10;
        for (int i10 = 0; i10 < this.f21360b.length; i10++) {
            dVar.a();
            tc.b0 c10 = mVar.c(dVar.c(), 3);
            Format format = (Format) this.f21359a.get(i10);
            String str = format.f12335w;
            if (!"application/cea-608".equals(str) && !"application/cea-708".equals(str)) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.b(z10, "Invalid closed caption MIME type provided: " + str);
            String str2 = format.f12324d;
            if (str2 == null) {
                str2 = dVar.b();
            }
            c10.b(new Format.b().U(str2).g0(str).i0(format.f12327o).X(format.f12326i).H(format.O).V(format.f12337y).G());
            this.f21360b[i10] = c10;
        }
    }
}
