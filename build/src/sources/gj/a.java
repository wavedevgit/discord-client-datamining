package gj;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final String f25722a;

    /* renamed from: b  reason: collision with root package name */
    private final List f25723b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, List list) {
        if (str != null) {
            this.f25722a = str;
            if (list != null) {
                this.f25723b = list;
                return;
            }
            throw new NullPointerException("Null usedDates");
        }
        throw new NullPointerException("Null userAgent");
    }

    @Override // gj.l
    public List b() {
        return this.f25723b;
    }

    @Override // gj.l
    public String c() {
        return this.f25722a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f25722a.equals(lVar.c()) && this.f25723b.equals(lVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f25722a.hashCode() ^ 1000003) * 1000003) ^ this.f25723b.hashCode();
    }

    public String toString() {
        return "HeartBeatResult{userAgent=" + this.f25722a + ", usedDates=" + this.f25723b + "}";
    }
}
