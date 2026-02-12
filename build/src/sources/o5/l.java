package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends g {

    /* renamed from: i  reason: collision with root package name */
    private final z5.d f38623i;

    public l(List list) {
        super(list);
        this.f38623i = new z5.d();
    }

    @Override // o5.a
    /* renamed from: q */
    public z5.d i(z5.a aVar, float f10) {
        Object obj;
        float f11;
        Object obj2 = aVar.f56093b;
        if (obj2 != null && (obj = aVar.f56094c) != null) {
            z5.d dVar = (z5.d) obj2;
            z5.d dVar2 = (z5.d) obj;
            z5.c cVar = this.f38587e;
            if (cVar != null) {
                f11 = f10;
                z5.d dVar3 = (z5.d) cVar.b(aVar.f56098g, aVar.f56099h.floatValue(), dVar, dVar2, f11, e(), f());
                if (dVar3 != null) {
                    return dVar3;
                }
            } else {
                f11 = f10;
            }
            this.f38623i.d(y5.i.i(dVar.b(), dVar2.b(), f11), y5.i.i(dVar.c(), dVar2.c(), f11));
            return this.f38623i;
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }
}
