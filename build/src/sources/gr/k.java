package gr;

import gr.j;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Map f25187a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f25188a = new HashMap(3);

        @Override // gr.j.a
        public j.a a(Class cls, s sVar) {
            if (sVar == null) {
                this.f25188a.remove(cls);
                return this;
            }
            this.f25188a.put(cls, sVar);
            return this;
        }

        @Override // gr.j.a
        public j build() {
            return new k(Collections.unmodifiableMap(this.f25188a));
        }
    }

    k(Map map) {
        this.f25187a = map;
    }

    @Override // gr.j
    public s a(Class cls) {
        return (s) this.f25187a.get(cls);
    }
}
