package net.time4j.calendar.service;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
import net.time4j.calendar.KoreanCalendar;
import net.time4j.f0;
import st.p;
import st.q;
import st.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements s {
    @Override // st.s
    public q a(q qVar, Locale locale, st.d dVar) {
        p pVar = KoreanCalendar.f38281u;
        if (qVar.s(pVar)) {
            return qVar.C(f0.A, qVar.v(pVar) - 2333);
        }
        return qVar;
    }

    @Override // st.s
    public Set b(Locale locale, st.d dVar) {
        return Collections.EMPTY_SET;
    }

    @Override // st.s
    public boolean c(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // st.s
    public boolean d(p pVar) {
        if (pVar == KoreanCalendar.f38281u) {
            return true;
        }
        return false;
    }
}
