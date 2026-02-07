package vk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final uk.b f52739a;

    /* renamed from: b  reason: collision with root package name */
    private final uk.b f52740b;

    /* renamed from: c  reason: collision with root package name */
    private final uk.c f52741c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(uk.b bVar, uk.b bVar2, uk.c cVar) {
        this.f52739a = bVar;
        this.f52740b = bVar2;
        this.f52741c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public uk.c a() {
        return this.f52741c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public uk.b b() {
        return this.f52739a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public uk.b c() {
        return this.f52740b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f52740b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f52739a, bVar.f52739a) || !Objects.equals(this.f52740b, bVar.f52740b) || !Objects.equals(this.f52741c, bVar.f52741c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f52739a) ^ Objects.hashCode(this.f52740b)) ^ Objects.hashCode(this.f52741c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f52739a);
        sb2.append(" , ");
        sb2.append(this.f52740b);
        sb2.append(" : ");
        uk.c cVar = this.f52741c;
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
