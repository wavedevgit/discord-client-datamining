package v5;

import android.graphics.Path;
import java.util.Collections;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52220a = c.a.a("nm", "g", "o", "t", "s", "e", "r", "hd");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52221b = c.a.a("p", "k");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.e a(w5.c cVar, l5.i iVar) {
        s5.g gVar;
        Path.FillType fillType;
        r5.d dVar = null;
        Path.FillType fillType2 = Path.FillType.WINDING;
        String str = null;
        s5.g gVar2 = null;
        r5.c cVar2 = null;
        r5.f fVar = null;
        r5.f fVar2 = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            switch (cVar.p(f52220a)) {
                case 0:
                    str = cVar.e1();
                    break;
                case 1:
                    cVar.u();
                    int i10 = -1;
                    while (cVar.hasNext()) {
                        int p10 = cVar.p(f52221b);
                        if (p10 != 0) {
                            if (p10 != 1) {
                                cVar.s();
                                cVar.S();
                            } else {
                                cVar2 = d.g(cVar, iVar, i10);
                            }
                        } else {
                            i10 = cVar.nextInt();
                        }
                    }
                    cVar.D();
                    break;
                case 2:
                    dVar = d.h(cVar, iVar);
                    break;
                case 3:
                    if (cVar.nextInt() == 1) {
                        gVar = s5.g.LINEAR;
                    } else {
                        gVar = s5.g.RADIAL;
                    }
                    gVar2 = gVar;
                    break;
                case 4:
                    fVar = d.i(cVar, iVar);
                    break;
                case 5:
                    fVar2 = d.i(cVar, iVar);
                    break;
                case 6:
                    if (cVar.nextInt() == 1) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    fillType2 = fillType;
                    break;
                case 7:
                    z10 = cVar.g();
                    break;
                default:
                    cVar.s();
                    cVar.S();
                    break;
            }
        }
        if (dVar == null) {
            dVar = new r5.d(Collections.singletonList(new y5.a(100)));
        }
        return new s5.e(str, gVar2, fillType2, cVar2, dVar, fVar, fVar2, null, null, z10);
    }
}
