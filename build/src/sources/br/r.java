package br;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Map f7562a = new HashMap(3);

    @Override // br.q
    public void a(o oVar, Object obj) {
        if (obj == null) {
            this.f7562a.remove(oVar);
        } else {
            this.f7562a.put(oVar, obj);
        }
    }

    @Override // br.q
    public Object b(o oVar) {
        return this.f7562a.get(oVar);
    }
}
