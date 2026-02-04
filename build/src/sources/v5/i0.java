package v5;

import android.graphics.Path;
import java.util.Collections;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class i0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51143a = c.a.a("nm", "c", "o", "fillEnabled", "r", "hd");

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
            int B = cVar.B(f51143a);
            if (B != 0) {
                if (B != 1) {
                    if (B != 2) {
                        if (B != 3) {
                            if (B != 4) {
                                if (B != 5) {
                                    cVar.E();
                                    cVar.P();
                                } else {
                                    z11 = cVar.h();
                                }
                            } else {
                                i10 = cVar.nextInt();
                            }
                        } else {
                            z10 = cVar.h();
                        }
                    } else {
                        dVar = d.h(cVar, iVar);
                    }
                } else {
                    aVar = d.c(cVar, iVar);
                }
            } else {
                str = cVar.f1();
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
