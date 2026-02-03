package gc;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final jc.a f25904a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f25905b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(jc.a aVar, Map map) {
        if (aVar != null) {
            this.f25904a = aVar;
            if (map != null) {
                this.f25905b = map;
                return;
            }
            throw new NullPointerException("Null values");
        }
        throw new NullPointerException("Null clock");
    }

    @Override // gc.f
    jc.a e() {
        return this.f25904a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f25904a.equals(fVar.e()) && this.f25905b.equals(fVar.h())) {
                return true;
            }
        }
        return false;
    }

    @Override // gc.f
    Map h() {
        return this.f25905b;
    }

    public int hashCode() {
        return ((this.f25904a.hashCode() ^ 1000003) * 1000003) ^ this.f25905b.hashCode();
    }

    public String toString() {
        return "SchedulerConfig{clock=" + this.f25904a + ", values=" + this.f25905b + "}";
    }
}
