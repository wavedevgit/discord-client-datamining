package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends g {
    public d(List list) {
        super(list);
    }

    public float q() {
        return r(b(), d());
    }

    float r(y5.a aVar, float f10) {
        float f11;
        if (aVar.f53740b != null && aVar.f53741c != null) {
            y5.c cVar = this.f42353e;
            if (cVar != null) {
                f11 = f10;
                Float f12 = (Float) cVar.b(aVar.f53745g, aVar.f53746h.floatValue(), (Float) aVar.f53740b, (Float) aVar.f53741c, f11, e(), f());
                if (f12 != null) {
                    return f12.floatValue();
                }
            } else {
                f11 = f10;
            }
            return x5.i.i(aVar.g(), aVar.d(), f11);
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: s */
    public Float i(y5.a aVar, float f10) {
        return Float.valueOf(r(aVar, f10));
    }
}
