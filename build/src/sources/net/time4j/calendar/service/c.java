package net.time4j.calendar.service;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
import net.time4j.calendar.KoreanCalendar;
import net.time4j.f0;
import pt.p;
import pt.q;
import pt.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements s {
    @Override // pt.s
    public Set a(Locale locale, pt.d dVar) {
        return Collections.EMPTY_SET;
    }

    @Override // pt.s
    public boolean b(p pVar) {
        if (pVar == KoreanCalendar.f39786u) {
            return true;
        }
        return false;
    }

    @Override // pt.s
    public boolean c(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // pt.s
    public q d(q qVar, Locale locale, pt.d dVar) {
        p pVar = KoreanCalendar.f39786u;
        if (qVar.m(pVar)) {
            return qVar.C(f0.A, qVar.r(pVar) - 2333);
        }
        return qVar;
    }
}
