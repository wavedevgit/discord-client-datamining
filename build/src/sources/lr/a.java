package lr;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class a implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Map f36564a;

    /* renamed from: lr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0498a {

        /* renamed from: a  reason: collision with root package name */
        final LinkedHashMap f36565a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public AbstractC0498a(int i10) {
            this.f36565a = b.c(i10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public AbstractC0498a a(Object obj, h hVar) {
            this.f36565a.put(g.c(obj, "key"), (h) g.c(hVar, "provider"));
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Map map) {
        this.f36564a = Collections.unmodifiableMap(map);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map a() {
        return this.f36564a;
    }
}
