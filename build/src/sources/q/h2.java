package q;

import a0.i2;
import a0.p0;
import a0.r0;
import a0.y2;
import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h2 implements a0.y2 {

    /* renamed from: b  reason: collision with root package name */
    final e3 f46646b;

    public h2(Context context) {
        this.f46646b = e3.c(context);
    }

    @Override // a0.y2
    public a0.r0 a(y2.b bVar, int i10) {
        Object obj;
        a0.r1 Z = a0.r1.Z();
        i2.b bVar2 = new i2.b();
        bVar2.x(s4.b(bVar, i10));
        Z.V(a0.x2.f317t, bVar2.o());
        Z.V(a0.x2.f319v, g2.f46629a);
        p0.a aVar = new p0.a();
        aVar.t(s4.a(bVar, i10));
        Z.V(a0.x2.f318u, aVar.h());
        r0.a aVar2 = a0.x2.f320w;
        if (bVar == y2.b.IMAGE_CAPTURE) {
            obj = x3.f46958c;
        } else {
            obj = u0.f46890a;
        }
        Z.V(aVar2, obj);
        if (bVar == y2.b.PREVIEW) {
            Z.V(a0.i1.f90p, this.f46646b.f());
        }
        Z.V(a0.i1.f85k, Integer.valueOf(this.f46646b.d(true).getRotation()));
        if (bVar == y2.b.VIDEO_CAPTURE || bVar == y2.b.STREAM_SHARING) {
            Z.V(a0.x2.f323z, Boolean.TRUE);
        }
        return a0.w1.Y(Z);
    }
}
