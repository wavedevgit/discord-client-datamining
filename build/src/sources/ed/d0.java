package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f22446a;

    /* renamed from: b  reason: collision with root package name */
    private final uc.b0[] f22447b;

    public d0(List list) {
        this.f22446a = list;
        this.f22447b = new uc.b0[list.size()];
    }

    public void a(long j10, oe.h0 h0Var) {
        uc.b.a(j10, h0Var, this.f22447b);
    }

    public void b(uc.m mVar, i0.d dVar) {
        boolean z10;
        for (int i10 = 0; i10 < this.f22447b.length; i10++) {
            dVar.a();
            uc.b0 c10 = mVar.c(dVar.c(), 3);
            Format format = (Format) this.f22446a.get(i10);
            String str = format.f12305w;
            if (!"application/cea-608".equals(str) && !"application/cea-708".equals(str)) {
                z10 = false;
            } else {
                z10 = true;
            }
            oe.a.b(z10, "Invalid closed caption MIME type provided: " + str);
            String str2 = format.f12294d;
            if (str2 == null) {
                str2 = dVar.b();
            }
            c10.c(new Format.b().U(str2).g0(str).i0(format.f12297o).X(format.f12296i).H(format.O).V(format.f12307y).G());
            this.f22447b[i10] = c10;
        }
    }
}
