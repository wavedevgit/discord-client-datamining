package net.time4j.calendar.service;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
import net.time4j.calendar.KoreanCalendar;
import net.time4j.f0;
import rt.p;
import rt.q;
import rt.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements s {
    @Override // rt.s
    public boolean a(p pVar) {
        if (pVar == KoreanCalendar.f39189u) {
            return true;
        }
        return false;
    }

    @Override // rt.s
    public q b(q qVar, Locale locale, rt.d dVar) {
        p pVar = KoreanCalendar.f39189u;
        if (qVar.n(pVar)) {
            return qVar.C(f0.A, qVar.q(pVar) - 2333);
        }
        return qVar;
    }

    @Override // rt.s
    public boolean c(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // rt.s
    public Set d(Locale locale, rt.d dVar) {
        return Collections.EMPTY_SET;
    }
}
