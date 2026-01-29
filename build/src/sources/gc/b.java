package gc;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final jc.a f26580a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f26581b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(jc.a aVar, Map map) {
        if (aVar != null) {
            this.f26580a = aVar;
            if (map != null) {
                this.f26581b = map;
                return;
            }
            throw new NullPointerException("Null values");
        }
        throw new NullPointerException("Null clock");
    }

    @Override // gc.f
    jc.a e() {
        return this.f26580a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f26580a.equals(fVar.e()) && this.f26581b.equals(fVar.h())) {
                return true;
            }
        }
        return false;
    }

    @Override // gc.f
    Map h() {
        return this.f26581b;
    }

    public int hashCode() {
        return ((this.f26580a.hashCode() ^ 1000003) * 1000003) ^ this.f26581b.hashCode();
    }

    public String toString() {
        return "SchedulerConfig{clock=" + this.f26580a + ", values=" + this.f26581b + "}";
    }
}
