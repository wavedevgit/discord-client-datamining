package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f extends g {
    public f(List list) {
        super(list);
    }

    public int q() {
        return r(b(), d());
    }

    int r(y5.a aVar, float f10) {
        float f11;
        if (aVar.f54980b != null && aVar.f54981c != null) {
            y5.c cVar = this.f41482e;
            if (cVar != null) {
                f11 = f10;
                Integer num = (Integer) cVar.b(aVar.f54985g, aVar.f54986h.floatValue(), (Integer) aVar.f54980b, (Integer) aVar.f54981c, f11, e(), f());
                if (num != null) {
                    return num.intValue();
                }
            } else {
                f11 = f10;
            }
            return x5.i.j(aVar.h(), aVar.e(), f11);
        }
        throw new IllegalStateException("Missing values for keyframe.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: s */
    public Integer i(y5.a aVar, float f10) {
        return Integer.valueOf(r(aVar, f10));
    }
}
