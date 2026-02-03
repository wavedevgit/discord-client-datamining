package v5;

import java.util.ArrayList;
import java.util.List;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class u {

    /* renamed from: a  reason: collision with root package name */
    static c.a f50853a = c.a.a("k");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List a(w5.c cVar, l5.i iVar, float f10, n0 n0Var, boolean z10) {
        w5.c cVar2;
        l5.i iVar2;
        float f11;
        n0 n0Var2;
        boolean z11;
        ArrayList arrayList = new ArrayList();
        if (cVar.n() == c.b.STRING) {
            iVar.a("Lottie doesn't support expressions.");
            return arrayList;
        }
        cVar.r();
        while (cVar.hasNext()) {
            if (cVar.B(f50853a) != 0) {
                cVar.P();
            } else if (cVar.n() == c.b.BEGIN_ARRAY) {
                cVar.u();
                if (cVar.n() == c.b.NUMBER) {
                    w5.c cVar3 = cVar;
                    l5.i iVar3 = iVar;
                    float f12 = f10;
                    n0 n0Var3 = n0Var;
                    boolean z12 = z10;
                    y5.a c10 = t.c(cVar3, iVar3, f12, n0Var3, false, z12);
                    cVar2 = cVar3;
                    iVar2 = iVar3;
                    f11 = f12;
                    n0Var2 = n0Var3;
                    z11 = z12;
                    arrayList.add(c10);
                } else {
                    cVar2 = cVar;
                    iVar2 = iVar;
                    f11 = f10;
                    n0Var2 = n0Var;
                    z11 = z10;
                    while (cVar2.hasNext()) {
                        arrayList.add(t.c(cVar2, iVar2, f11, n0Var2, true, z11));
                    }
                }
                cVar2.s();
                cVar = cVar2;
                iVar = iVar2;
                f10 = f11;
                n0Var = n0Var2;
                z10 = z11;
            } else {
                w5.c cVar4 = cVar;
                arrayList.add(t.c(cVar4, iVar, f10, n0Var, false, z10));
                cVar = cVar4;
            }
        }
        cVar.y();
        b(arrayList);
        return arrayList;
    }

    public static void b(List list) {
        int i10;
        Object obj;
        int size = list.size();
        int i11 = 0;
        while (true) {
            i10 = size - 1;
            if (i11 >= i10) {
                break;
            }
            y5.a aVar = (y5.a) list.get(i11);
            i11++;
            y5.a aVar2 = (y5.a) list.get(i11);
            aVar.f53991h = Float.valueOf(aVar2.f53990g);
            if (aVar.f53986c == null && (obj = aVar2.f53985b) != null) {
                aVar.f53986c = obj;
                if (aVar instanceof o5.i) {
                    ((o5.i) aVar).j();
                }
            }
        }
        y5.a aVar3 = (y5.a) list.get(i10);
        if ((aVar3.f53985b == null || aVar3.f53986c == null) && list.size() > 1) {
            list.remove(aVar3);
        }
    }
}
