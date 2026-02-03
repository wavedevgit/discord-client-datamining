package oj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f43878a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f43879a;

        /* renamed from: b  reason: collision with root package name */
        private final bj.b f43880b;

        public a(Class cls, bj.b bVar) {
            this.f43879a = cls;
            this.f43880b = bVar;
        }

        final bj.b a() {
            return this.f43880b;
        }

        final Class b() {
            return this.f43879a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f43878a.put(aVar.b(), aVar.a());
        }
    }
}
