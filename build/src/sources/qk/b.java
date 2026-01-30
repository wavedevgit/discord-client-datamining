package qk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final pk.b f47491a;

    /* renamed from: b  reason: collision with root package name */
    private final pk.b f47492b;

    /* renamed from: c  reason: collision with root package name */
    private final pk.c f47493c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(pk.b bVar, pk.b bVar2, pk.c cVar) {
        this.f47491a = bVar;
        this.f47492b = bVar2;
        this.f47493c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.c a() {
        return this.f47493c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.b b() {
        return this.f47491a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.b c() {
        return this.f47492b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f47492b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f47491a, bVar.f47491a) || !Objects.equals(this.f47492b, bVar.f47492b) || !Objects.equals(this.f47493c, bVar.f47493c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f47491a) ^ Objects.hashCode(this.f47492b)) ^ Objects.hashCode(this.f47493c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f47491a);
        sb2.append(" , ");
        sb2.append(this.f47492b);
        sb2.append(" : ");
        pk.c cVar = this.f47493c;
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
