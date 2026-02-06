package sj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f49966a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f49967a;

        /* renamed from: b  reason: collision with root package name */
        private final fj.b f49968b;

        public a(Class cls, fj.b bVar) {
            this.f49967a = cls;
            this.f49968b = bVar;
        }

        final fj.b a() {
            return this.f49968b;
        }

        final Class b() {
            return this.f49967a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f49966a.put(aVar.b(), aVar.a());
        }
    }
}
