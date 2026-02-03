package net.time4j.calendar.service;

import mt.o;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g extends e {
    private static final long serialVersionUID = -84764920511581480L;

    /* renamed from: s  reason: collision with root package name */
    private final transient a1 f40463s;

    public g(Class cls, a1 a1Var) {
        super("DAY_OF_WEEK", cls, y0.class, 'E');
        this.f40463s = a1Var;
    }

    @Override // mt.p
    /* renamed from: R */
    public y0 f() {
        return this.f40463s.f().f(6);
    }

    @Override // mt.p
    /* renamed from: S */
    public y0 A() {
        return this.f40463s.f();
    }

    @Override // net.time4j.calendar.service.e
    /* renamed from: T */
    public int O(y0 y0Var) {
        return y0Var.e(this.f40463s);
    }

    @Override // mt.e, java.util.Comparator
    /* renamed from: b */
    public int compare(o oVar, o oVar2) {
        int e10 = ((y0) oVar.o(this)).e(this.f40463s);
        int e11 = ((y0) oVar2.o(this)).e(this.f40463s);
        if (e10 < e11) {
            return -1;
        }
        if (e10 == e11) {
            return 0;
        }
        return 1;
    }
}
