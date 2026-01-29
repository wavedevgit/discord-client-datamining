package pk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f46064a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46065b;

    public b(int i10, int i11) {
        this.f46064a = i10;
        this.f46065b = i11;
    }

    public final int a() {
        return this.f46065b;
    }

    public final int b() {
        return this.f46064a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f46064a != bVar.f46064a || this.f46065b != bVar.f46065b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f46064a ^ this.f46065b;
    }

    public final String toString() {
        return this.f46064a + "(" + this.f46065b + ')';
    }
}
