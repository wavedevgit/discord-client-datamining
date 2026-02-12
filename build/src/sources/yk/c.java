package yk;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f55592a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55593b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(List list, int i10) {
        this.f55592a = new ArrayList(list);
        this.f55593b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a() {
        return this.f55592a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f55593b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(List list) {
        return this.f55592a.equals(list);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f55592a.equals(((c) obj).f55592a);
    }

    public int hashCode() {
        return this.f55592a.hashCode();
    }

    public String toString() {
        return "{ " + this.f55592a + " }";
    }
}
