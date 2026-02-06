package r5;

import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class n implements m {

    /* renamed from: a  reason: collision with root package name */
    final List f48667a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(List list) {
        this.f48667a = list;
    }

    @Override // r5.m
    public List b() {
        return this.f48667a;
    }

    @Override // r5.m
    public boolean isStatic() {
        if (this.f48667a.isEmpty() || (this.f48667a.size() == 1 && ((y5.a) this.f48667a.get(0)).i())) {
            return true;
        }
        return false;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (!this.f48667a.isEmpty()) {
            sb2.append("values=");
            sb2.append(Arrays.toString(this.f48667a.toArray()));
        }
        return sb2.toString();
    }
}
