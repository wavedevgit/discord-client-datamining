package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends g {

    /* renamed from: i  reason: collision with root package name */
    private final y5.d f42384i;

    public l(List list) {
        super(list);
        this.f42384i = new y5.d();
    }

    @Override // o5.a
    /* renamed from: q */
    public y5.d i(y5.a aVar, float f10) {
        Object obj;
        float f11;
        Object obj2 = aVar.f53740b;
        if (obj2 != null && (obj = aVar.f53741c) != null) {
            y5.d dVar = (y5.d) obj2;
            y5.d dVar2 = (y5.d) obj;
            y5.c cVar = this.f42353e;
            if (cVar != null) {
                f11 = f10;
                y5.d dVar3 = (y5.d) cVar.b(aVar.f53745g, aVar.f53746h.floatValue(), dVar, dVar2, f11, e(), f());
                if (dVar3 != null) {
                    return dVar3;
                }
            } else {
                f11 = f10;
            }
            this.f42384i.d(x5.i.i(dVar.b(), dVar2.b(), f11), x5.i.i(dVar.c(), dVar2.c(), f11));
            return this.f42384i;
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }
}
