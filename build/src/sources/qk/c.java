package qk;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f47478a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47479b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(List list, int i10) {
        this.f47478a = new ArrayList(list);
        this.f47479b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a() {
        return this.f47478a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f47479b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(List list) {
        return this.f47478a.equals(list);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f47478a.equals(((c) obj).f47478a);
    }

    public int hashCode() {
        return this.f47478a.hashCode();
    }

    public String toString() {
        return "{ " + this.f47478a + " }";
    }
}
