package oj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f43950a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f43951a;

        /* renamed from: b  reason: collision with root package name */
        private final bj.b f43952b;

        public a(Class cls, bj.b bVar) {
            this.f43951a = cls;
            this.f43952b = bVar;
        }

        final bj.b a() {
            return this.f43952b;
        }

        final Class b() {
            return this.f43951a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f43950a.put(aVar.b(), aVar.a());
        }
    }
}
