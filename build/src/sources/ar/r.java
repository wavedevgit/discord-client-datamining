package ar;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Map f6748a = new HashMap(3);

    @Override // ar.q
    public void a(o oVar, Object obj) {
        if (obj == null) {
            this.f6748a.remove(oVar);
        } else {
            this.f6748a.put(oVar, obj);
        }
    }

    @Override // ar.q
    public Object b(o oVar) {
        return this.f6748a.get(oVar);
    }
}
