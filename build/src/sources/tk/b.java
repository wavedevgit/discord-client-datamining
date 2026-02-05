package tk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final sk.b f50763a;

    /* renamed from: b  reason: collision with root package name */
    private final sk.b f50764b;

    /* renamed from: c  reason: collision with root package name */
    private final sk.c f50765c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(sk.b bVar, sk.b bVar2, sk.c cVar) {
        this.f50763a = bVar;
        this.f50764b = bVar2;
        this.f50765c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public sk.c a() {
        return this.f50765c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public sk.b b() {
        return this.f50763a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public sk.b c() {
        return this.f50764b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f50764b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f50763a, bVar.f50763a) || !Objects.equals(this.f50764b, bVar.f50764b) || !Objects.equals(this.f50765c, bVar.f50765c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f50763a) ^ Objects.hashCode(this.f50764b)) ^ Objects.hashCode(this.f50765c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f50763a);
        sb2.append(" , ");
        sb2.append(this.f50764b);
        sb2.append(" : ");
        sk.c cVar = this.f50765c;
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
