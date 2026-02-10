package ov;

import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements sv.b {

    /* renamed from: a  reason: collision with root package name */
    private final List f42800a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42801b;

    public m(List list, Map map) {
        this.f42800a = list;
        this.f42801b = map;
    }

    @Override // sv.b
    public rv.o a(String str) {
        return (rv.o) this.f42801b.get(str);
    }

    @Override // sv.b
    public List b() {
        return this.f42800a;
    }
}
