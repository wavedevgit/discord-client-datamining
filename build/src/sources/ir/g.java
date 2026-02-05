package ir;

import gr.q;
import gr.s;
import hr.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements s {
    @Override // gr.s
    public Object a(gr.g gVar, q qVar) {
        if (b.a.BULLET == hr.b.f26895a.c(qVar)) {
            return new jr.b(gVar.e(), ((Integer) hr.b.f26896b.c(qVar)).intValue());
        }
        return new jr.i(gVar.e(), String.valueOf(hr.b.f26897c.c(qVar)) + ". ");
    }
}
