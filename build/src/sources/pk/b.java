package pk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f46080a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46081b;

    public b(int i10, int i11) {
        this.f46080a = i10;
        this.f46081b = i11;
    }

    public final int a() {
        return this.f46081b;
    }

    public final int b() {
        return this.f46080a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f46080a != bVar.f46080a || this.f46081b != bVar.f46081b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f46080a ^ this.f46081b;
    }

    public final String toString() {
        return this.f46080a + "(" + this.f46081b + ')';
    }
}
