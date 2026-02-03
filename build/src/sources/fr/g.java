package fr;

import dr.q;
import dr.s;
import er.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements s {
    @Override // dr.s
    public Object a(dr.g gVar, q qVar) {
        if (b.a.BULLET == er.b.f22583a.c(qVar)) {
            return new gr.b(gVar.e(), ((Integer) er.b.f22584b.c(qVar)).intValue());
        }
        return new gr.i(gVar.e(), String.valueOf(er.b.f22585c.c(qVar)) + ". ");
    }
}
