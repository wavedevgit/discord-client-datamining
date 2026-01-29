package io.sentry.util;

import io.sentry.SentryEvent;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {
    public static boolean a(List list, SentryEvent sentryEvent) {
        if (sentryEvent != null && list != null && !list.isEmpty()) {
            HashSet<String> hashSet = new HashSet();
            io.sentry.protocol.m u02 = sentryEvent.u0();
            if (u02 != null) {
                String e10 = u02.e();
                if (e10 != null) {
                    hashSet.add(e10);
                }
                String d10 = u02.d();
                if (d10 != null) {
                    hashSet.add(d10);
                }
            }
            Throwable O = sentryEvent.O();
            if (O != null) {
                hashSet.add(O.toString());
            }
            Iterator it = list.iterator();
            while (it.hasNext()) {
                if (hashSet.contains(((io.sentry.e0) it.next()).a())) {
                    return true;
                }
            }
            Iterator it2 = list.iterator();
            while (it2.hasNext()) {
                io.sentry.e0 e0Var = (io.sentry.e0) it2.next();
                for (String str : hashSet) {
                    if (e0Var.b(str)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
