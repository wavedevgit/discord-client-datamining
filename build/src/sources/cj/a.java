package cj;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final String f7639a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7640b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, List list) {
        if (str != null) {
            this.f7639a = str;
            if (list != null) {
                this.f7640b = list;
                return;
            }
            throw new NullPointerException("Null usedDates");
        }
        throw new NullPointerException("Null userAgent");
    }

    @Override // cj.l
    public List b() {
        return this.f7640b;
    }

    @Override // cj.l
    public String c() {
        return this.f7639a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f7639a.equals(lVar.c()) && this.f7640b.equals(lVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f7639a.hashCode() ^ 1000003) * 1000003) ^ this.f7640b.hashCode();
    }

    public String toString() {
        return "HeartBeatResult{userAgent=" + this.f7639a + ", usedDates=" + this.f7640b + "}";
    }
}
