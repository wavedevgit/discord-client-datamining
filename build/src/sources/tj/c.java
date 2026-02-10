package tj;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f50858a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f50859a;

        /* renamed from: b  reason: collision with root package name */
        private final gj.b f50860b;

        public a(Class cls, gj.b bVar) {
            this.f50859a = cls;
            this.f50860b = bVar;
        }

        final gj.b a() {
            return this.f50860b;
        }

        final Class b() {
            return this.f50859a;
        }
    }

    public c(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            this.f50858a.put(aVar.b(), aVar.a());
        }
    }
}
