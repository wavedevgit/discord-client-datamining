package s5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f49516a;

    public e(List list) {
        this.f49516a = list;
    }

    @Override // s5.o
    public o5.a a() {
        if (((z5.a) this.f49516a.get(0)).i()) {
            return new o5.k(this.f49516a);
        }
        return new o5.j(this.f49516a);
    }

    @Override // s5.o
    public List b() {
        return this.f49516a;
    }

    @Override // s5.o
    public boolean isStatic() {
        if (this.f49516a.size() != 1 || !((z5.a) this.f49516a.get(0)).i()) {
            return false;
        }
        return true;
    }
}
