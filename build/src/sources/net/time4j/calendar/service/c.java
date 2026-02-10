package net.time4j.calendar.service;

import bu.p;
import bu.q;
import bu.s;
import java.util.Collections;
import java.util.Locale;
import java.util.Set;
import net.time4j.calendar.KoreanCalendar;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements s {
    @Override // bu.s
    public Set a(Locale locale, bu.d dVar) {
        return Collections.EMPTY_SET;
    }

    @Override // bu.s
    public boolean b(p pVar) {
        if (pVar == KoreanCalendar.f37285u) {
            return true;
        }
        return false;
    }

    @Override // bu.s
    public q c(q qVar, Locale locale, bu.d dVar) {
        p pVar = KoreanCalendar.f37285u;
        if (qVar.n(pVar)) {
            return qVar.C(f0.A, qVar.m(pVar) - 2333);
        }
        return qVar;
    }

    @Override // bu.s
    public boolean d(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }
}
