package yk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final xk.b f55588a;

    /* renamed from: b  reason: collision with root package name */
    private final xk.b f55589b;

    /* renamed from: c  reason: collision with root package name */
    private final xk.c f55590c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(xk.b bVar, xk.b bVar2, xk.c cVar) {
        this.f55588a = bVar;
        this.f55589b = bVar2;
        this.f55590c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.c a() {
        return this.f55590c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.b b() {
        return this.f55588a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.b c() {
        return this.f55589b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f55589b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f55588a, bVar.f55588a) || !Objects.equals(this.f55589b, bVar.f55589b) || !Objects.equals(this.f55590c, bVar.f55590c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f55588a) ^ Objects.hashCode(this.f55589b)) ^ Objects.hashCode(this.f55590c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f55588a);
        sb2.append(" , ");
        sb2.append(this.f55589b);
        sb2.append(" : ");
        xk.c cVar = this.f55590c;
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
