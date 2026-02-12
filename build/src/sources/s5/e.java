package s5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f47833a;

    public e(List list) {
        this.f47833a = list;
    }

    @Override // s5.o
    public o5.a a() {
        if (((z5.a) this.f47833a.get(0)).i()) {
            return new o5.k(this.f47833a);
        }
        return new o5.j(this.f47833a);
    }

    @Override // s5.o
    public List b() {
        return this.f47833a;
    }

    @Override // s5.o
    public boolean isStatic() {
        if (this.f47833a.size() != 1 || !((z5.a) this.f47833a.get(0)).i()) {
            return false;
        }
        return true;
    }
}
