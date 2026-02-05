package gv;

import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements kv.b {

    /* renamed from: a  reason: collision with root package name */
    private final List f25465a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f25466b;

    public m(List list, Map map) {
        this.f25465a = list;
        this.f25466b = map;
    }

    @Override // kv.b
    public jv.o a(String str) {
        return (jv.o) this.f25466b.get(str);
    }

    @Override // kv.b
    public List b() {
        return this.f25465a;
    }
}
