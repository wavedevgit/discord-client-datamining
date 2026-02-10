package ej;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final String f21707a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21708b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, List list) {
        if (str != null) {
            this.f21707a = str;
            if (list != null) {
                this.f21708b = list;
                return;
            }
            throw new NullPointerException("Null usedDates");
        }
        throw new NullPointerException("Null userAgent");
    }

    @Override // ej.l
    public List b() {
        return this.f21708b;
    }

    @Override // ej.l
    public String c() {
        return this.f21707a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f21707a.equals(lVar.c()) && this.f21708b.equals(lVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f21707a.hashCode() ^ 1000003) * 1000003) ^ this.f21708b.hashCode();
    }

    public String toString() {
        return "HeartBeatResult{userAgent=" + this.f21707a + ", usedDates=" + this.f21708b + "}";
    }
}
