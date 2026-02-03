package qk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final pk.b f47746a;

    /* renamed from: b  reason: collision with root package name */
    private final pk.b f47747b;

    /* renamed from: c  reason: collision with root package name */
    private final pk.c f47748c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(pk.b bVar, pk.b bVar2, pk.c cVar) {
        this.f47746a = bVar;
        this.f47747b = bVar2;
        this.f47748c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.c a() {
        return this.f47748c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.b b() {
        return this.f47746a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.b c() {
        return this.f47747b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f47747b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f47746a, bVar.f47746a) || !Objects.equals(this.f47747b, bVar.f47747b) || !Objects.equals(this.f47748c, bVar.f47748c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f47746a) ^ Objects.hashCode(this.f47747b)) ^ Objects.hashCode(this.f47748c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f47746a);
        sb2.append(" , ");
        sb2.append(this.f47747b);
        sb2.append(" : ");
        pk.c cVar = this.f47748c;
        if (cVar == null) {
            valueOf = "null";
        } else {
            valueOf = Integer.valueOf(cVar.c());
        }
        sb2.append(valueOf);
        sb2.append(" ]");
        return sb2.toString();
    }
}
