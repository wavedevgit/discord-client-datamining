package net.time4j;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 implements st.s {
    @Override // st.s
    public Set b(Locale locale, st.d dVar) {
        if (locale.getCountry().isEmpty()) {
            return Collections.EMPTY_SET;
        }
        return a1.j(locale).d();
    }

    @Override // st.s
    public boolean c(Class cls) {
        return false;
    }

    @Override // st.s
    public boolean d(st.p pVar) {
        return false;
    }

    @Override // st.s
    public st.q a(st.q qVar, Locale locale, st.d dVar) {
        return qVar;
    }
}
