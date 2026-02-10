package gj;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final String f25721a;

    /* renamed from: b  reason: collision with root package name */
    private final List f25722b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, List list) {
        if (str != null) {
            this.f25721a = str;
            if (list != null) {
                this.f25722b = list;
                return;
            }
            throw new NullPointerException("Null usedDates");
        }
        throw new NullPointerException("Null userAgent");
    }

    @Override // gj.l
    public List b() {
        return this.f25722b;
    }

    @Override // gj.l
    public String c() {
        return this.f25721a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f25721a.equals(lVar.c()) && this.f25722b.equals(lVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f25721a.hashCode() ^ 1000003) * 1000003) ^ this.f25722b.hashCode();
    }

    public String toString() {
        return "HeartBeatResult{userAgent=" + this.f25721a + ", usedDates=" + this.f25722b + "}";
    }
}
