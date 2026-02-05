package tk;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f50766a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50767b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(List list, int i10) {
        this.f50766a = new ArrayList(list);
        this.f50767b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a() {
        return this.f50766a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f50767b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(List list) {
        return this.f50766a.equals(list);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f50766a.equals(((c) obj).f50766a);
    }

    public int hashCode() {
        return this.f50766a.hashCode();
    }

    public String toString() {
        return "{ " + this.f50766a + " }";
    }
}
