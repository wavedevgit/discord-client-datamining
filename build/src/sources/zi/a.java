package zi;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final String f55983a;

    /* renamed from: b  reason: collision with root package name */
    private final List f55984b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, List list) {
        if (str != null) {
            this.f55983a = str;
            if (list != null) {
                this.f55984b = list;
                return;
            }
            throw new NullPointerException("Null usedDates");
        }
        throw new NullPointerException("Null userAgent");
    }

    @Override // zi.l
    public List b() {
        return this.f55984b;
    }

    @Override // zi.l
    public String c() {
        return this.f55983a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f55983a.equals(lVar.c()) && this.f55984b.equals(lVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55983a.hashCode() ^ 1000003) * 1000003) ^ this.f55984b.hashCode();
    }

    public String toString() {
        return "HeartBeatResult{userAgent=" + this.f55983a + ", usedDates=" + this.f55984b + "}";
    }
}
