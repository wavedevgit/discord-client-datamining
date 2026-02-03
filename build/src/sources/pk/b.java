package pk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f46154a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46155b;

    public b(int i10, int i11) {
        this.f46154a = i10;
        this.f46155b = i11;
    }

    public final int a() {
        return this.f46155b;
    }

    public final int b() {
        return this.f46154a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f46154a != bVar.f46154a || this.f46155b != bVar.f46155b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f46154a ^ this.f46155b;
    }

    public final String toString() {
        return this.f46154a + "(" + this.f46155b + ')';
    }
}
