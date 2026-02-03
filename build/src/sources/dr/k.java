package dr;

import dr.j;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Map f20863a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f20864a = new HashMap(3);

        @Override // dr.j.a
        public j.a a(Class cls, s sVar) {
            if (sVar == null) {
                this.f20864a.remove(cls);
                return this;
            }
            this.f20864a.put(cls, sVar);
            return this;
        }

        @Override // dr.j.a
        public j build() {
            return new k(Collections.unmodifiableMap(this.f20864a));
        }
    }

    k(Map map) {
        this.f20863a = map;
    }

    @Override // dr.j
    public s a(Class cls) {
        return (s) this.f20863a.get(cls);
    }
}
