package uk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f51574a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51575b;

    public b(int i10, int i11) {
        this.f51574a = i10;
        this.f51575b = i11;
    }

    public final int a() {
        return this.f51575b;
    }

    public final int b() {
        return this.f51574a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51574a != bVar.f51574a || this.f51575b != bVar.f51575b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f51574a ^ this.f51575b;
    }

    public final String toString() {
        return this.f51574a + "(" + this.f51575b + ')';
    }
}
