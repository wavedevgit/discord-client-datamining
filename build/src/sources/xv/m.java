package xv;

import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements bw.b {

    /* renamed from: a  reason: collision with root package name */
    private final List f55222a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f55223b;

    public m(List list, Map map) {
        this.f55222a = list;
        this.f55223b = map;
    }

    @Override // bw.b
    public aw.o a(String str) {
        return (aw.o) this.f55223b.get(str);
    }

    @Override // bw.b
    public List b() {
        return this.f55222a;
    }
}
