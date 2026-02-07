package v5;

import android.graphics.Path;
import java.util.Collections;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class i0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52245a = c.a.a("nm", "c", "o", "fillEnabled", "r", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.p a(w5.c cVar, l5.i iVar) {
        Path.FillType fillType;
        r5.d dVar = null;
        String str = null;
        r5.a aVar = null;
        boolean z10 = false;
        boolean z11 = false;
        int i10 = 1;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52245a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            if (p10 != 4) {
                                if (p10 != 5) {
                                    cVar.s();
                                    cVar.S();
                                } else {
                                    z11 = cVar.g();
                                }
                            } else {
                                i10 = cVar.nextInt();
                            }
                        } else {
                            z10 = cVar.g();
                        }
                    } else {
                        dVar = d.h(cVar, iVar);
                    }
                } else {
                    aVar = d.c(cVar, iVar);
                }
            } else {
                str = cVar.e1();
            }
        }
        if (dVar == null) {
            dVar = new r5.d(Collections.singletonList(new y5.a(100)));
        }
        r5.d dVar2 = dVar;
        if (i10 == 1) {
            fillType = Path.FillType.WINDING;
        } else {
            fillType = Path.FillType.EVEN_ODD;
        }
        return new s5.p(str, z10, fillType, aVar, dVar2, z11);
    }
}
