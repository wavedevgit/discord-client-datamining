package jr;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import jr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Map f30441a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f30442a = new HashMap(3);

        @Override // jr.j.a
        public j.a a(Class cls, s sVar) {
            if (sVar == null) {
                this.f30442a.remove(cls);
                return this;
            }
            this.f30442a.put(cls, sVar);
            return this;
        }

        @Override // jr.j.a
        public j build() {
            return new k(Collections.unmodifiableMap(this.f30442a));
        }
    }

    k(Map map) {
        this.f30441a = map;
    }

    @Override // jr.j
    public s a(Class cls) {
        return (s) this.f30441a.get(cls);
    }
}
