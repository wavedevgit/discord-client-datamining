package ar;

import ar.j;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Map f6733a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f6734a = new HashMap(3);

        @Override // ar.j.a
        public j.a a(Class cls, s sVar) {
            if (sVar == null) {
                this.f6734a.remove(cls);
                return this;
            }
            this.f6734a.put(cls, sVar);
            return this;
        }

        @Override // ar.j.a
        public j build() {
            return new k(Collections.unmodifiableMap(this.f6734a));
        }
    }

    k(Map map) {
        this.f6733a = map;
    }

    @Override // ar.j
    public s a(Class cls) {
        return (s) this.f6733a.get(cls);
    }
}
