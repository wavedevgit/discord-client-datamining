package pk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f46112a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46113b;

    public b(int i10, int i11) {
        this.f46112a = i10;
        this.f46113b = i11;
    }

    public final int a() {
        return this.f46113b;
    }

    public final int b() {
        return this.f46112a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f46112a != bVar.f46112a || this.f46113b != bVar.f46113b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f46112a ^ this.f46113b;
    }

    public final String toString() {
        return this.f46112a + "(" + this.f46113b + ')';
    }
}
