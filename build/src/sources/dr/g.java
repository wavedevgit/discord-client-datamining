package dr;

import br.q;
import br.s;
import cr.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements s {
    @Override // br.s
    public Object a(br.g gVar, q qVar) {
        if (b.a.BULLET == cr.b.f20737a.c(qVar)) {
            return new er.b(gVar.e(), ((Integer) cr.b.f20738b.c(qVar)).intValue());
        }
        return new er.i(gVar.e(), String.valueOf(cr.b.f20739c.c(qVar)) + ". ");
    }
}
