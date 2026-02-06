package net.time4j;

import java.util.Collections;
import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 implements rt.s {
    @Override // rt.s
    public boolean a(rt.p pVar) {
        return false;
    }

    @Override // rt.s
    public boolean c(Class cls) {
        return false;
    }

    @Override // rt.s
    public Set d(Locale locale, rt.d dVar) {
        if (locale.getCountry().isEmpty()) {
            return Collections.EMPTY_SET;
        }
        return a1.j(locale).d();
    }

    @Override // rt.s
    public rt.q b(rt.q qVar, Locale locale, rt.d dVar) {
        return qVar;
    }
}
