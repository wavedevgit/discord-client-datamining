package zb;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends j {

    /* renamed from: a  reason: collision with root package name */
    private final List f56823a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list) {
        if (list != null) {
            this.f56823a = list;
            return;
        }
        throw new NullPointerException("Null logRequests");
    }

    @Override // zb.j
    public List c() {
        return this.f56823a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof j) {
            return this.f56823a.equals(((j) obj).c());
        }
        return false;
    }

    public int hashCode() {
        return this.f56823a.hashCode() ^ 1000003;
    }

    public String toString() {
        return "BatchedLogRequest{logRequests=" + this.f56823a + "}";
    }
}
