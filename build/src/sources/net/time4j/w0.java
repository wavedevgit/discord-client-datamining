package net.time4j;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 implements mt.s {
    @Override // mt.s
    public boolean a(mt.p pVar) {
        return false;
    }

    @Override // mt.s
    public Set b(Locale locale, mt.d dVar) {
        if (locale.getCountry().isEmpty()) {
            return Collections.EMPTY_SET;
        }
        return a1.j(locale).d();
    }

    @Override // mt.s
    public boolean d(Class cls) {
        return false;
    }

    @Override // mt.s
    public mt.q c(mt.q qVar, Locale locale, mt.d dVar) {
        return qVar;
    }
}
