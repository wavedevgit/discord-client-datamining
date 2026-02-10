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

    int r(z5.a aVar, float f10) {
        int e10;
        float f11;
        if (aVar.f56053b != null) {
            if (aVar.f56054c == null) {
                e10 = aVar.h();
            } else {
                e10 = aVar.e();
            }
            z5.c cVar = this.f40260e;
            if (cVar != null) {
                f11 = f10;
                Integer num = (Integer) cVar.b(aVar.f56058g, aVar.f56059h.floatValue(), (Integer) aVar.f56053b, Integer.valueOf(e10), f11, e(), f());
                if (num != null) {
                    return num.intValue();
                }
            } else {
                f11 = f10;
            }
            return y5.i.j(aVar.h(), e10, f11);
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
