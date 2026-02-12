package hc;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final kc.a f27034a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f27035b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(kc.a aVar, Map map) {
        if (aVar != null) {
            this.f27034a = aVar;
            if (map != null) {
                this.f27035b = map;
                return;
            }
            throw new NullPointerException("Null values");
        }
        throw new NullPointerException("Null clock");
    }

    @Override // hc.f
    kc.a e() {
        return this.f27034a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f27034a.equals(fVar.e()) && this.f27035b.equals(fVar.h())) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.f
    Map h() {
        return this.f27035b;
    }

    public int hashCode() {
        return ((this.f27034a.hashCode() ^ 1000003) * 1000003) ^ this.f27035b.hashCode();
    }

    public String toString() {
        return "SchedulerConfig{clock=" + this.f27034a + ", values=" + this.f27035b + "}";
    }
}
