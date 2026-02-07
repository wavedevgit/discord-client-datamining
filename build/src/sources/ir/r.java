package ir;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Map f29377a = new HashMap(3);

    @Override // ir.q
    public Object a(o oVar) {
        return this.f29377a.get(oVar);
    }

    @Override // ir.q
    public void b(o oVar, Object obj) {
        if (obj == null) {
            this.f29377a.remove(oVar);
        } else {
            this.f29377a.put(oVar, obj);
        }
    }
}
