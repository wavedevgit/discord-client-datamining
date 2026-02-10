package s5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f47832a;

    public e(List list) {
        this.f47832a = list;
    }

    @Override // s5.o
    public o5.a a() {
        if (((z5.a) this.f47832a.get(0)).i()) {
            return new o5.k(this.f47832a);
        }
        return new o5.j(this.f47832a);
    }

    @Override // s5.o
    public List b() {
        return this.f47832a;
    }

    @Override // s5.o
    public boolean isStatic() {
        if (this.f47832a.size() != 1 || !((z5.a) this.f47832a.get(0)).i()) {
            return false;
        }
        return true;
    }
}
