package yk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final xk.b f56157a;

    /* renamed from: b  reason: collision with root package name */
    private final xk.b f56158b;

    /* renamed from: c  reason: collision with root package name */
    private final xk.c f56159c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(xk.b bVar, xk.b bVar2, xk.c cVar) {
        this.f56157a = bVar;
        this.f56158b = bVar2;
        this.f56159c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.c a() {
        return this.f56159c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.b b() {
        return this.f56157a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xk.b c() {
        return this.f56158b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f56158b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f56157a, bVar.f56157a) || !Objects.equals(this.f56158b, bVar.f56158b) || !Objects.equals(this.f56159c, bVar.f56159c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f56157a) ^ Objects.hashCode(this.f56158b)) ^ Objects.hashCode(this.f56159c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f56157a);
        sb2.append(" , ");
        sb2.append(this.f56158b);
        sb2.append(" : ");
        xk.c cVar = this.f56159c;
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
