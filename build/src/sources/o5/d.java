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

    float r(z5.a aVar, float f10) {
        float f11;
        if (aVar.f56053b != null && aVar.f56054c != null) {
            z5.c cVar = this.f40260e;
            if (cVar != null) {
                f11 = f10;
                Float f12 = (Float) cVar.b(aVar.f56058g, aVar.f56059h.floatValue(), (Float) aVar.f56053b, (Float) aVar.f56054c, f11, e(), f());
                if (f12 != null) {
                    return f12.floatValue();
                }
            } else {
                f11 = f10;
            }
            return y5.i.i(aVar.g(), aVar.d(), f11);
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: s */
    public Float i(z5.a aVar, float f10) {
        return Float.valueOf(r(aVar, f10));
    }
}
