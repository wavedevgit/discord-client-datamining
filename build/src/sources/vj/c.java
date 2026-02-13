package vj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f52188a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f52189a;

        /* renamed from: b  reason: collision with root package name */
        private final ij.b f52190b;

        public a(Class cls, ij.b bVar) {
            this.f52189a = cls;
            this.f52190b = bVar;
        }

        final ij.b a() {
            return this.f52190b;
        }

        final Class b() {
            return this.f52189a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f52188a.put(aVar.b(), aVar.a());
        }
    }
}
