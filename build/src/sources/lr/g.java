package lr;

import jr.q;
import jr.s;
import kr.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements s {
    @Override // jr.s
    public Object a(jr.g gVar, q qVar) {
        if (b.a.BULLET == kr.b.f35031a.c(qVar)) {
            return new mr.b(gVar.e(), ((Integer) kr.b.f35032b.c(qVar)).intValue());
        }
        return new mr.i(gVar.e(), String.valueOf(kr.b.f35033c.c(qVar)) + ". ");
    }
}
