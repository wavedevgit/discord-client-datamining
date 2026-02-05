package net.time4j;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 implements pt.s {
    @Override // pt.s
    public Set a(Locale locale, pt.d dVar) {
        if (locale.getCountry().isEmpty()) {
            return Collections.EMPTY_SET;
        }
        return a1.j(locale).d();
    }

    @Override // pt.s
    public boolean b(pt.p pVar) {
        return false;
    }

    @Override // pt.s
    public boolean c(Class cls) {
        return false;
    }

    @Override // pt.s
    public pt.q d(pt.q qVar, Locale locale, pt.d dVar) {
        return qVar;
    }
}
