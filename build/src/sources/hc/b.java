package hc;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final kc.a f25815a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f25816b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(kc.a aVar, Map map) {
        if (aVar != null) {
            this.f25815a = aVar;
            if (map != null) {
                this.f25816b = map;
                return;
            }
            throw new NullPointerException("Null values");
        }
        throw new NullPointerException("Null clock");
    }

    @Override // hc.f
    kc.a e() {
        return this.f25815a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f25815a.equals(fVar.e()) && this.f25816b.equals(fVar.h())) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.f
    Map h() {
        return this.f25816b;
    }

    public int hashCode() {
        return ((this.f25815a.hashCode() ^ 1000003) * 1000003) ^ this.f25816b.hashCode();
    }

    public String toString() {
        return "SchedulerConfig{clock=" + this.f25815a + ", values=" + this.f25816b + "}";
    }
}
