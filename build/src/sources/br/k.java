package br;

import br.j;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Map f7547a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f7548a = new HashMap(3);

        @Override // br.j.a
        public j.a a(Class cls, s sVar) {
            if (sVar == null) {
                this.f7548a.remove(cls);
                return this;
            }
            this.f7548a.put(cls, sVar);
            return this;
        }

        @Override // br.j.a
        public j build() {
            return new k(Collections.unmodifiableMap(this.f7548a));
        }
    }

    k(Map map) {
        this.f7547a = map;
    }

    @Override // br.j
    public s a(Class cls) {
        return (s) this.f7547a.get(cls);
    }
}
