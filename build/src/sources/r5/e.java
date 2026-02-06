package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements m {

    /* renamed from: a  reason: collision with root package name */
    private final List f48650a;

    public e(List list) {
        this.f48650a = list;
    }

    @Override // r5.m
    public o5.a a() {
        if (((y5.a) this.f48650a.get(0)).i()) {
            return new o5.k(this.f48650a);
        }
        return new o5.j(this.f48650a);
    }

    @Override // r5.m
    public List b() {
        return this.f48650a;
    }

    @Override // r5.m
    public boolean isStatic() {
        if (this.f48650a.size() != 1 || !((y5.a) this.f48650a.get(0)).i()) {
            return false;
        }
        return true;
    }
}
