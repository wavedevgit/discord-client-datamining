package hc;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final kc.a f27602a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f27603b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(kc.a aVar, Map map) {
        if (aVar != null) {
            this.f27602a = aVar;
            if (map != null) {
                this.f27603b = map;
                return;
            }
            throw new NullPointerException("Null values");
        }
        throw new NullPointerException("Null clock");
    }

    @Override // hc.f
    kc.a e() {
        return this.f27602a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f27602a.equals(fVar.e()) && this.f27603b.equals(fVar.h())) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.f
    Map h() {
        return this.f27603b;
    }

    public int hashCode() {
        return ((this.f27602a.hashCode() ^ 1000003) * 1000003) ^ this.f27603b.hashCode();
    }

    public String toString() {
        return "SchedulerConfig{clock=" + this.f27602a + ", values=" + this.f27603b + "}";
    }
}
