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

    public int r(y5.a aVar, float f10) {
        float f11;
        Float f12;
        if (aVar.f54010b != null && aVar.f54011c != null) {
            y5.c cVar = this.f42425e;
            if (cVar != null && (f12 = aVar.f54016h) != null) {
                f11 = f10;
                Integer num = (Integer) cVar.b(aVar.f54015g, f12.floatValue(), (Integer) aVar.f54010b, (Integer) aVar.f54011c, f11, e(), f());
                if (num != null) {
                    return num.intValue();
                }
            } else {
                f11 = f10;
            }
            return x5.b.c(x5.i.b(f11, 0.0f, 1.0f), ((Integer) aVar.f54010b).intValue(), ((Integer) aVar.f54011c).intValue());
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
