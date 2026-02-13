package s5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class p implements o {

    /* renamed from: a  reason: collision with root package name */
    final List f48425a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list) {
        this.f48425a = list;
    }

    @Override // s5.o
    public List b() {
        return this.f48425a;
    }

    @Override // s5.o
    public boolean isStatic() {
        if (this.f48425a.isEmpty() || (this.f48425a.size() == 1 && ((z5.a) this.f48425a.get(0)).i())) {
            return true;
        }
        return false;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (!this.f48425a.isEmpty()) {
            sb2.append("values=");
            sb2.append(Arrays.toString(this.f48425a.toArray()));
        }
        return sb2.toString();
    }
}
