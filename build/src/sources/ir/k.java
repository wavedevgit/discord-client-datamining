package ir;

import ir.j;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Map f29314a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f29315a = new HashMap(3);

        @Override // ir.j.a
        public j.a a(Class cls, s sVar) {
            if (sVar == null) {
                this.f29315a.remove(cls);
                return this;
            }
            this.f29315a.put(cls, sVar);
            return this;
        }

        @Override // ir.j.a
        public j build() {
            return new k(Collections.unmodifiableMap(this.f29315a));
        }
    }

    k(Map map) {
        this.f29314a = map;
    }

    @Override // ir.j
    public s a(Class cls) {
        return (s) this.f29314a.get(cls);
    }
}
