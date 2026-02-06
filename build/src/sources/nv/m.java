package nv;

import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements rv.b {

    /* renamed from: a  reason: collision with root package name */
    private final List f41224a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f41225b;

    public m(List list, Map map) {
        this.f41224a = list;
        this.f41225b = map;
    }

    @Override // rv.b
    public qv.o a(String str) {
        return (qv.o) this.f41225b.get(str);
    }

    @Override // rv.b
    public List b() {
        return this.f41224a;
    }
}
