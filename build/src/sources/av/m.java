package av;

import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements ev.b {

    /* renamed from: a  reason: collision with root package name */
    private final List f7011a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f7012b;

    public m(List list, Map map) {
        this.f7011a = list;
        this.f7012b = map;
    }

    @Override // ev.b
    public dv.o a(String str) {
        return (dv.o) this.f7012b.get(str);
    }

    @Override // ev.b
    public List b() {
        return this.f7011a;
    }
}
