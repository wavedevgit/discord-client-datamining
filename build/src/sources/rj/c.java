package rj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f48820a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f48821a;

        /* renamed from: b  reason: collision with root package name */
        private final ej.b f48822b;

        public a(Class cls, ej.b bVar) {
            this.f48821a = cls;
            this.f48822b = bVar;
        }

        final ej.b a() {
            return this.f48822b;
        }

        final Class b() {
            return this.f48821a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f48820a.put(aVar.b(), aVar.a());
        }
    }
}
