package oj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f43934a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f43935a;

        /* renamed from: b  reason: collision with root package name */
        private final bj.b f43936b;

        public a(Class cls, bj.b bVar) {
            this.f43935a = cls;
            this.f43936b = bVar;
        }

        final bj.b a() {
            return this.f43936b;
        }

        final Class b() {
            return this.f43935a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f43934a.put(aVar.b(), aVar.a());
        }
    }
}
