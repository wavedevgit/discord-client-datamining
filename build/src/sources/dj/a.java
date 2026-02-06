package dj;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final String f20786a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20787b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, List list) {
        if (str != null) {
            this.f20786a = str;
            if (list != null) {
                this.f20787b = list;
                return;
            }
            throw new NullPointerException("Null usedDates");
        }
        throw new NullPointerException("Null userAgent");
    }

    @Override // dj.l
    public List b() {
        return this.f20787b;
    }

    @Override // dj.l
    public String c() {
        return this.f20786a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f20786a.equals(lVar.c()) && this.f20787b.equals(lVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f20786a.hashCode() ^ 1000003) * 1000003) ^ this.f20787b.hashCode();
    }

    public String toString() {
        return "HeartBeatResult{userAgent=" + this.f20786a + ", usedDates=" + this.f20787b + "}";
    }
}
