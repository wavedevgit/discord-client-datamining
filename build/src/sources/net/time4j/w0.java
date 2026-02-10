package net.time4j;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 implements bu.s {
    @Override // bu.s
    public Set a(Locale locale, bu.d dVar) {
        if (locale.getCountry().isEmpty()) {
            return Collections.EMPTY_SET;
        }
        return a1.j(locale).d();
    }

    @Override // bu.s
    public boolean b(bu.p pVar) {
        return false;
    }

    @Override // bu.s
    public boolean d(Class cls) {
        return false;
    }

    @Override // bu.s
    public bu.q c(bu.q qVar, Locale locale, bu.d dVar) {
        return qVar;
    }
}
