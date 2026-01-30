package tq;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class a implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Map f49827a;

    /* renamed from: tq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0651a {

        /* renamed from: a  reason: collision with root package name */
        final LinkedHashMap f49828a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public AbstractC0651a(int i10) {
            this.f49828a = b.c(i10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public AbstractC0651a a(Object obj, h hVar) {
            this.f49828a.put(g.c(obj, "key"), (h) g.c(hVar, "provider"));
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Map map) {
        this.f49827a = Collections.unmodifiableMap(map);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map a() {
        return this.f49827a;
    }
}
