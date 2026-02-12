package vj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f51620a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f51621a;

        /* renamed from: b  reason: collision with root package name */
        private final ij.b f51622b;

        public a(Class cls, ij.b bVar) {
            this.f51621a = cls;
            this.f51622b = bVar;
        }

        final ij.b a() {
            return this.f51622b;
        }

        final Class b() {
            return this.f51621a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f51620a.put(aVar.b(), aVar.a());
        }
    }
}
