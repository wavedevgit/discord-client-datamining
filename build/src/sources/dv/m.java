package dv;

import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements hv.b {

    /* renamed from: a  reason: collision with root package name */
    private final List f21141a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f21142b;

    public m(List list, Map map) {
        this.f21141a = list;
        this.f21142b = map;
    }

    @Override // hv.b
    public gv.o a(String str) {
        return (gv.o) this.f21142b.get(str);
    }

    @Override // hv.b
    public List b() {
        return this.f21141a;
    }
}
