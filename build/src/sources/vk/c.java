package vk;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f52742a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52743b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(List list, int i10) {
        this.f52742a = new ArrayList(list);
        this.f52743b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a() {
        return this.f52742a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f52743b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(List list) {
        return this.f52742a.equals(list);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f52742a.equals(((c) obj).f52742a);
    }

    public int hashCode() {
        return this.f52742a.hashCode();
    }

    public String toString() {
        return "{ " + this.f52742a + " }";
    }
}
