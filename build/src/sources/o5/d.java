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
        if (aVar.f54980b != null && aVar.f54981c != null) {
            y5.c cVar = this.f41482e;
            if (cVar != null) {
                f11 = f10;
                Float f12 = (Float) cVar.b(aVar.f54985g, aVar.f54986h.floatValue(), (Float) aVar.f54980b, (Float) aVar.f54981c, f11, e(), f());
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
