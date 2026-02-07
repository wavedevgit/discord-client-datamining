package yb;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends j {

    /* renamed from: a  reason: collision with root package name */
    private final List f55190a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list) {
        if (list != null) {
            this.f55190a = list;
            return;
        }
        throw new NullPointerException("Null logRequests");
    }

    @Override // yb.j
    public List c() {
        return this.f55190a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof j) {
            return this.f55190a.equals(((j) obj).c());
        }
        return false;
    }

    public int hashCode() {
        return this.f55190a.hashCode() ^ 1000003;
    }

    public String toString() {
        return "BatchedLogRequest{logRequests=" + this.f55190a + "}";
    }
}
