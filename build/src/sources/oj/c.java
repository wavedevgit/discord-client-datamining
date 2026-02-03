package oj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f44078a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f44079a;

        /* renamed from: b  reason: collision with root package name */
        private final bj.b f44080b;

        public a(Class cls, bj.b bVar) {
            this.f44079a = cls;
            this.f44080b = bVar;
        }

        final bj.b a() {
            return this.f44080b;
        }

        final Class b() {
            return this.f44079a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f44078a.put(aVar.b(), aVar.a());
        }
    }
}
