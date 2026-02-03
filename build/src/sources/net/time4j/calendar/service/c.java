package net.time4j.calendar.service;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
import kt.p;
import kt.q;
import kt.s;
import net.time4j.calendar.KoreanCalendar;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements s {
    @Override // kt.s
    public q a(q qVar, Locale locale, kt.d dVar) {
        p pVar = KoreanCalendar.f40287u;
        if (qVar.s(pVar)) {
            return qVar.C(f0.A, qVar.t(pVar) - 2333);
        }
        return qVar;
    }

    @Override // kt.s
    public boolean b(p pVar) {
        if (pVar == KoreanCalendar.f40287u) {
            return true;
        }
        return false;
    }

    @Override // kt.s
    public Set c(Locale locale, kt.d dVar) {
        return Collections.EMPTY_SET;
    }

    @Override // kt.s
    public boolean d(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }
}
