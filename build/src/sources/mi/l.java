package mi;

import java.io.Serializable;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Comparator f38636d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(Comparator comparator) {
        this.f38636d = (Comparator) li.m.j(comparator);
    }

    @Override // mi.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f38636d.compare(obj, obj2);
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            return this.f38636d.equals(((l) obj).f38636d);
        }
        return false;
    }

    public int hashCode() {
        return this.f38636d.hashCode();
    }

    public String toString() {
        return this.f38636d.toString();
    }
}
