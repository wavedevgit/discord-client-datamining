package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends g {

    /* renamed from: i  reason: collision with root package name */
    private final z5.d f39191i;

    public l(List list) {
        super(list);
        this.f39191i = new z5.d();
    }

    @Override // o5.a
    /* renamed from: q */
    public z5.d i(z5.a aVar, float f10) {
        Object obj;
        float f11;
        Object obj2 = aVar.f56661b;
        if (obj2 != null && (obj = aVar.f56662c) != null) {
            z5.d dVar = (z5.d) obj2;
            z5.d dVar2 = (z5.d) obj;
            z5.c cVar = this.f39155e;
            if (cVar != null) {
                f11 = f10;
                z5.d dVar3 = (z5.d) cVar.b(aVar.f56666g, aVar.f56667h.floatValue(), dVar, dVar2, f11, e(), f());
                if (dVar3 != null) {
                    return dVar3;
                }
            } else {
                f11 = f10;
            }
            this.f39191i.d(y5.i.i(dVar.b(), dVar2.b(), f11), y5.i.i(dVar.c(), dVar2.c(), f11));
            return this.f39191i;
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }
}
