package net.time4j;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 implements kt.s {
    @Override // kt.s
    public boolean b(kt.p pVar) {
        return false;
    }

    @Override // kt.s
    public Set c(Locale locale, kt.d dVar) {
        if (locale.getCountry().isEmpty()) {
            return Collections.EMPTY_SET;
        }
        return a1.j(locale).d();
    }

    @Override // kt.s
    public boolean d(Class cls) {
        return false;
    }

    @Override // kt.s
    public kt.q a(kt.q qVar, Locale locale, kt.d dVar) {
        return qVar;
    }
}
