package io.sentry.config;

import io.sentry.p8;
import java.util.ArrayList;
import java.util.Properties;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    public static f a() {
        Properties a10;
        Properties a11;
        p8 p8Var = new p8();
        ArrayList arrayList = new ArrayList();
        arrayList.add(new i());
        arrayList.add(new d());
        String property = System.getProperty("sentry.properties.file");
        if (property != null && (a11 = new e(property, p8Var).a()) != null) {
            arrayList.add(new h(a11));
        }
        String str = System.getenv("SENTRY_PROPERTIES_FILE");
        if (str != null && (a10 = new e(str, p8Var).a()) != null) {
            arrayList.add(new h(a10));
        }
        Properties a12 = new b(p8Var).a();
        if (a12 != null) {
            arrayList.add(new h(a12));
        }
        Properties a13 = new e("sentry.properties", p8Var).a();
        if (a13 != null) {
            arrayList.add(new h(a13));
        }
        return new c(arrayList);
    }
}
