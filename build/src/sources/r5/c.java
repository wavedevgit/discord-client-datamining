package r5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends n {
    public c(List list) {
        super(d(list));
    }

    private static y5.a c(y5.a aVar) {
        s5.d dVar = (s5.d) aVar.f53740b;
        s5.d dVar2 = (s5.d) aVar.f53741c;
        if (dVar != null && dVar2 != null && dVar.e().length != dVar2.e().length) {
            float[] e10 = e(dVar.e(), dVar2.e());
            return aVar.b(dVar.b(e10), dVar2.b(e10));
        }
        return aVar;
    }

    private static List d(List list) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            list.set(i10, c((y5.a) list.get(i10)));
        }
        return list;
    }

    static float[] e(float[] fArr, float[] fArr2) {
        int length = fArr.length + fArr2.length;
        float[] fArr3 = new float[length];
        System.arraycopy(fArr, 0, fArr3, 0, fArr.length);
        System.arraycopy(fArr2, 0, fArr3, fArr.length, fArr2.length);
        Arrays.sort(fArr3);
        float f10 = Float.NaN;
        int i10 = 0;
        for (int i11 = 0; i11 < length; i11++) {
            float f11 = fArr3[i11];
            if (f11 != f10) {
                fArr3[i10] = f11;
                i10++;
                f10 = fArr3[i11];
            }
        }
        return Arrays.copyOfRange(fArr3, 0, i10);
    }

    @Override // r5.m
    public o5.a a() {
        return new o5.e(this.f48573a);
    }

    @Override // r5.n, r5.m
    public /* bridge */ /* synthetic */ List b() {
        return super.b();
    }

    @Override // r5.n, r5.m
    public /* bridge */ /* synthetic */ boolean isStatic() {
        return super.isStatic();
    }

    @Override // r5.n
    public /* bridge */ /* synthetic */ String toString() {
        return super.toString();
    }
}
