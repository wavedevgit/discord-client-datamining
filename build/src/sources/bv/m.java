package bv;

import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements fv.b {

    /* renamed from: a  reason: collision with root package name */
    private final List f7825a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f7826b;

    public m(List list, Map map) {
        this.f7825a = list;
        this.f7826b = map;
    }

    @Override // fv.b
    public ev.o a(String str) {
        return (ev.o) this.f7826b.get(str);
    }

    @Override // fv.b
    public List b() {
        return this.f7825a;
    }
}
