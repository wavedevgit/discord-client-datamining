package s5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f48401a;

    public e(List list) {
        this.f48401a = list;
    }

    @Override // s5.o
    public o5.a a() {
        if (((z5.a) this.f48401a.get(0)).i()) {
            return new o5.k(this.f48401a);
        }
        return new o5.j(this.f48401a);
    }

    @Override // s5.o
    public List b() {
        return this.f48401a;
    }

    @Override // s5.o
    public boolean isStatic() {
        if (this.f48401a.size() != 1 || !((z5.a) this.f48401a.get(0)).i()) {
            return false;
        }
        return true;
    }
}
