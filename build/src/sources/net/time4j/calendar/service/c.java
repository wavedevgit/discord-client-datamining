package net.time4j.calendar.service;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
import jt.p;
import jt.q;
import jt.s;
import net.time4j.calendar.KoreanCalendar;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements s {
    @Override // jt.s
    public boolean a(p pVar) {
        if (pVar == KoreanCalendar.f40408u) {
            return true;
        }
        return false;
    }

    @Override // jt.s
    public boolean b(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // jt.s
    public Set c(Locale locale, jt.d dVar) {
        return Collections.EMPTY_SET;
    }

    @Override // jt.s
    public q d(q qVar, Locale locale, jt.d dVar) {
        p pVar = KoreanCalendar.f40408u;
        if (qVar.o(pVar)) {
            return qVar.C(f0.A, qVar.q(pVar) - 2333);
        }
        return qVar;
    }
}
