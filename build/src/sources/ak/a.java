package ak;

import pg.ak;
import pg.he;
import pg.ie;
import pg.je;
import pg.ke;
import pg.lj;
import pg.mh;
import pg.uh;
import pg.wj;
import pg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static uh a(int i10) {
        switch (i10) {
            case 1:
                return uh.LATIN;
            case 2:
                return uh.LATIN_AND_CHINESE;
            case 3:
                return uh.LATIN_AND_DEVANAGARI;
            case 4:
                return uh.LATIN_AND_JAPANESE;
            case 5:
                return uh.LATIN_AND_KOREAN;
            case 6:
                return uh.CREDIT_CARD;
            case 7:
                return uh.DOCUMENT;
            case 8:
                return uh.PIXEL_AI;
            default:
                return uh.TYPE_UNKNOWN;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b(xj xjVar, final boolean z10, final ie ieVar) {
        xjVar.f(new wj() { // from class: ak.n
            @Override // pg.wj
            public final lj zza() {
                he heVar;
                ke keVar = new ke();
                if (z10) {
                    heVar = he.TYPE_THICK;
                } else {
                    heVar = he.TYPE_THIN;
                }
                ie ieVar2 = ieVar;
                keVar.e(heVar);
                mh mhVar = new mh();
                mhVar.b(ieVar2);
                keVar.g(mhVar.c());
                return ak.e(keVar);
            }
        }, je.ON_DEVICE_TEXT_LOAD);
    }
}
