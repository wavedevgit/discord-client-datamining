package sr;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import sr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Map f48894a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f48895a = new HashMap(3);

        @Override // sr.j.a
        public j.a a(Class cls, s sVar) {
            if (sVar == null) {
                this.f48895a.remove(cls);
                return this;
            }
            this.f48895a.put(cls, sVar);
            return this;
        }

        @Override // sr.j.a
        public j build() {
            return new k(Collections.unmodifiableMap(this.f48895a));
        }
    }

    k(Map map) {
        this.f48894a = map;
    }

    @Override // sr.j
    public s a(Class cls) {
        return (s) this.f48894a.get(cls);
    }
}
