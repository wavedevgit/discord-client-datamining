package gc;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final jc.a f24856a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f24857b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(jc.a aVar, Map map) {
        if (aVar != null) {
            this.f24856a = aVar;
            if (map != null) {
                this.f24857b = map;
                return;
            }
            throw new NullPointerException("Null values");
        }
        throw new NullPointerException("Null clock");
    }

    @Override // gc.f
    jc.a e() {
        return this.f24856a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f24856a.equals(fVar.e()) && this.f24857b.equals(fVar.h())) {
                return true;
            }
        }
        return false;
    }

    @Override // gc.f
    Map h() {
        return this.f24857b;
    }

    public int hashCode() {
        return ((this.f24856a.hashCode() ^ 1000003) * 1000003) ^ this.f24857b.hashCode();
    }

    public String toString() {
        return "SchedulerConfig{clock=" + this.f24856a + ", values=" + this.f24857b + "}";
    }
}
