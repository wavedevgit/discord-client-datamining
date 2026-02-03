package v5;

import s5.k;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class c0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50804a = c.a.a("nm", "sy", "pt", "p", "r", "or", "os", "ir", "is", "hd", "d");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.k a(w5.c cVar, l5.i iVar, int i10) {
        boolean z10;
        if (i10 == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean z11 = false;
        boolean z12 = z10;
        String str = null;
        k.a aVar = null;
        r5.b bVar = null;
        r5.m mVar = null;
        r5.b bVar2 = null;
        r5.b bVar3 = null;
        r5.b bVar4 = null;
        r5.b bVar5 = null;
        r5.b bVar6 = null;
        while (cVar.hasNext()) {
            switch (cVar.B(f50804a)) {
                case 0:
                    str = cVar.f1();
                    break;
                case 1:
                    aVar = k.a.d(cVar.nextInt());
                    break;
                case 2:
                    bVar = d.f(cVar, iVar, false);
                    break;
                case 3:
                    mVar = a.b(cVar, iVar);
                    break;
                case 4:
                    bVar2 = d.f(cVar, iVar, false);
                    break;
                case 5:
                    bVar4 = d.e(cVar, iVar);
                    break;
                case 6:
                    bVar6 = d.f(cVar, iVar, false);
                    break;
                case 7:
                    bVar3 = d.e(cVar, iVar);
                    break;
                case 8:
                    bVar5 = d.f(cVar, iVar, false);
                    break;
                case 9:
                    z11 = cVar.h();
                    break;
                case 10:
                    if (cVar.nextInt() == 3) {
                        z12 = true;
                        break;
                    } else {
                        z12 = false;
                        break;
                    }
                default:
                    cVar.E();
                    cVar.P();
                    break;
            }
        }
        return new s5.k(str, aVar, bVar, mVar, bVar2, bVar3, bVar4, bVar5, bVar6, z11, z12);
    }
}
