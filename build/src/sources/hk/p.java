package hk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    private final float f26128a;

    /* renamed from: b  reason: collision with root package name */
    private final float f26129b;

    public p(float f10, float f11) {
        this.f26128a = f10;
        this.f26129b = f11;
    }

    private static float a(p pVar, p pVar2, p pVar3) {
        float f10 = pVar2.f26128a;
        float f11 = pVar2.f26129b;
        return ((pVar3.f26128a - f10) * (pVar.f26129b - f11)) - ((pVar3.f26129b - f11) * (pVar.f26128a - f10));
    }

    public static float b(p pVar, p pVar2) {
        return mk.a.a(pVar.f26128a, pVar.f26129b, pVar2.f26128a, pVar2.f26129b);
    }

    public static void e(p[] pVarArr) {
        p pVar;
        p pVar2;
        p pVar3;
        float b10 = b(pVarArr[0], pVarArr[1]);
        float b11 = b(pVarArr[1], pVarArr[2]);
        float b12 = b(pVarArr[0], pVarArr[2]);
        if (b11 >= b10 && b11 >= b12) {
            pVar = pVarArr[0];
            pVar2 = pVarArr[1];
            pVar3 = pVarArr[2];
        } else if (b12 >= b11 && b12 >= b10) {
            pVar = pVarArr[1];
            pVar2 = pVarArr[0];
            pVar3 = pVarArr[2];
        } else {
            pVar = pVarArr[2];
            pVar2 = pVarArr[0];
            pVar3 = pVarArr[1];
        }
        if (a(pVar2, pVar, pVar3) < 0.0f) {
            p pVar4 = pVar3;
            pVar3 = pVar2;
            pVar2 = pVar4;
        }
        pVarArr[0] = pVar2;
        pVarArr[1] = pVar;
        pVarArr[2] = pVar3;
    }

    public final float c() {
        return this.f26128a;
    }

    public final float d() {
        return this.f26129b;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f26128a == pVar.f26128a && this.f26129b == pVar.f26129b) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (Float.floatToIntBits(this.f26128a) * 31) + Float.floatToIntBits(this.f26129b);
    }

    public final String toString() {
        return "(" + this.f26128a + ',' + this.f26129b + ')';
    }
}
