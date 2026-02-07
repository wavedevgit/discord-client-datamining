package uk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f51622a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51623b;

    public b(int i10, int i11) {
        this.f51622a = i10;
        this.f51623b = i11;
    }

    public final int a() {
        return this.f51623b;
    }

    public final int b() {
        return this.f51622a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51622a != bVar.f51622a || this.f51623b != bVar.f51623b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f51622a ^ this.f51623b;
    }

    public final String toString() {
        return this.f51622a + "(" + this.f51623b + ')';
    }
}
