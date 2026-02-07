package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends g {

    /* renamed from: i  reason: collision with root package name */
    private final y5.d f41561i;

    public l(List list) {
        super(list);
        this.f41561i = new y5.d();
    }

    @Override // o5.a
    /* renamed from: q */
    public y5.d i(y5.a aVar, float f10) {
        Object obj;
        float f11;
        Object obj2 = aVar.f55028b;
        if (obj2 != null && (obj = aVar.f55029c) != null) {
            y5.d dVar = (y5.d) obj2;
            y5.d dVar2 = (y5.d) obj;
            y5.c cVar = this.f41530e;
            if (cVar != null) {
                f11 = f10;
                y5.d dVar3 = (y5.d) cVar.b(aVar.f55033g, aVar.f55034h.floatValue(), dVar, dVar2, f11, e(), f());
                if (dVar3 != null) {
                    return dVar3;
                }
            } else {
                f11 = f10;
            }
            this.f41561i.d(x5.i.i(dVar.b(), dVar2.b(), f11), x5.i.i(dVar.c(), dVar2.c(), f11));
            return this.f41561i;
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }
}
