package qk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final pk.b f47896a;

    /* renamed from: b  reason: collision with root package name */
    private final pk.b f47897b;

    /* renamed from: c  reason: collision with root package name */
    private final pk.c f47898c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(pk.b bVar, pk.b bVar2, pk.c cVar) {
        this.f47896a = bVar;
        this.f47897b = bVar2;
        this.f47898c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.c a() {
        return this.f47898c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.b b() {
        return this.f47896a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pk.b c() {
        return this.f47897b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f47897b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f47896a, bVar.f47896a) || !Objects.equals(this.f47897b, bVar.f47897b) || !Objects.equals(this.f47898c, bVar.f47898c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f47896a) ^ Objects.hashCode(this.f47897b)) ^ Objects.hashCode(this.f47898c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f47896a);
        sb2.append(" , ");
        sb2.append(this.f47897b);
        sb2.append(" : ");
        pk.c cVar = this.f47898c;
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
