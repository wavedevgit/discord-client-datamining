package yk;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f56160a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56161b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(List list, int i10) {
        this.f56160a = new ArrayList(list);
        this.f56161b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a() {
        return this.f56160a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f56161b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(List list) {
        return this.f56160a.equals(list);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        return this.f56160a.equals(((c) obj).f56160a);
    }

    public int hashCode() {
        return this.f56160a.hashCode();
    }

    public String toString() {
        return "{ " + this.f56160a + " }";
    }
}
