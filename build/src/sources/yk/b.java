package yk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final xk.b f55589a;

    /* renamed from: b  reason: collision with root package name */
    private final xk.b f55590b;

    /* renamed from: c  reason: collision with root package name */
    private final xk.c f55591c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(xk.b bVar, xk.b bVar2, xk.c cVar) {
        this.f55589a = bVar;
        this.f55590b = bVar2;
        this.f55591c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.c a() {
        return this.f55591c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.b b() {
        return this.f55589a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.b c() {
        return this.f55590b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f55590b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f55589a, bVar.f55589a) || !Objects.equals(this.f55590b, bVar.f55590b) || !Objects.equals(this.f55591c, bVar.f55591c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f55589a) ^ Objects.hashCode(this.f55590b)) ^ Objects.hashCode(this.f55591c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f55589a);
        sb2.append(" , ");
        sb2.append(this.f55590b);
        sb2.append(" : ");
        xk.c cVar = this.f55591c;
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
