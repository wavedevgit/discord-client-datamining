package ni;

import java.io.Serializable;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Comparator f40847d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(Comparator comparator) {
        this.f40847d = (Comparator) mi.m.j(comparator);
    }

    @Override // ni.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f40847d.compare(obj, obj2);
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            return this.f40847d.equals(((l) obj).f40847d);
        }
        return false;
    }

    public int hashCode() {
        return this.f40847d.hashCode();
    }

    public String toString() {
        return this.f40847d.toString();
    }
}
