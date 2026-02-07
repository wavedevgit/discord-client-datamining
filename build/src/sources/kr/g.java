package kr;

import ir.q;
import ir.s;
import jr.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements s {
    @Override // ir.s
    public Object a(ir.g gVar, q qVar) {
        if (b.a.BULLET == jr.b.f30939a.c(qVar)) {
            return new lr.b(gVar.e(), ((Integer) jr.b.f30940b.c(qVar)).intValue());
        }
        return new lr.i(gVar.e(), String.valueOf(jr.b.f30941c.c(qVar)) + ". ");
    }
}
