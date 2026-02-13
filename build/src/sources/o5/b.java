package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b extends g {
    public b(List list) {
        super(list);
    }

    public int q() {
        return r(b(), d());
    }

    public int r(z5.a aVar, float f10) {
        float f11;
        Float f12;
        if (aVar.f56661b != null && aVar.f56662c != null) {
            z5.c cVar = this.f39155e;
            if (cVar != null && (f12 = aVar.f56667h) != null) {
                f11 = f10;
                Integer num = (Integer) cVar.b(aVar.f56666g, f12.floatValue(), (Integer) aVar.f56661b, (Integer) aVar.f56662c, f11, e(), f());
                if (num != null) {
                    return num.intValue();
                }
            } else {
                f11 = f10;
            }
            return y5.b.c(y5.i.b(f11, 0.0f, 1.0f), ((Integer) aVar.f56661b).intValue(), ((Integer) aVar.f56662c).intValue());
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: s */
    public Integer i(z5.a aVar, float f10) {
        return Integer.valueOf(r(aVar, f10));
    }
}
