package wk;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f53769a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53770b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(List list, int i10) {
        this.f53769a = new ArrayList(list);
        this.f53770b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a() {
        return this.f53769a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f53770b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(List list) {
        return this.f53769a.equals(list);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f53769a.equals(((c) obj).f53769a);
    }

    public int hashCode() {
        return this.f53769a.hashCode();
    }

    public String toString() {
        return "{ " + this.f53769a + " }";
    }
}
