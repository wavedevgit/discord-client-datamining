package net.time4j;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 implements jt.s {
    @Override // jt.s
    public boolean a(jt.p pVar) {
        return false;
    }

    @Override // jt.s
    public boolean b(Class cls) {
        return false;
    }

    @Override // jt.s
    public Set c(Locale locale, jt.d dVar) {
        if (locale.getCountry().isEmpty()) {
            return Collections.EMPTY_SET;
        }
        return a1.j(locale).d();
    }

    @Override // jt.s
    public jt.q d(jt.q qVar, Locale locale, jt.d dVar) {
        return qVar;
    }
}
