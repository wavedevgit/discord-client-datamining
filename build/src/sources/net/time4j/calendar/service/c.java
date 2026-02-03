package net.time4j.calendar.service;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
import mt.p;
import mt.q;
import mt.s;
import net.time4j.calendar.KoreanCalendar;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements s {
    @Override // mt.s
    public boolean a(p pVar) {
        if (pVar == KoreanCalendar.f40326u) {
            return true;
        }
        return false;
    }

    @Override // mt.s
    public Set b(Locale locale, mt.d dVar) {
        return Collections.EMPTY_SET;
    }

    @Override // mt.s
    public q c(q qVar, Locale locale, mt.d dVar) {
        p pVar = KoreanCalendar.f40326u;
        if (qVar.q(pVar)) {
            return qVar.C(f0.A, qVar.j(pVar) - 2333);
        }
        return qVar;
    }

    @Override // mt.s
    public boolean d(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }
}
