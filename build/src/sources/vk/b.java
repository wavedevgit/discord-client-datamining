package vk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final uk.b f52691a;

    /* renamed from: b  reason: collision with root package name */
    private final uk.b f52692b;

    /* renamed from: c  reason: collision with root package name */
    private final uk.c f52693c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(uk.b bVar, uk.b bVar2, uk.c cVar) {
        this.f52691a = bVar;
        this.f52692b = bVar2;
        this.f52693c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public uk.c a() {
        return this.f52693c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public uk.b b() {
        return this.f52691a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public uk.b c() {
        return this.f52692b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f52692b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f52691a, bVar.f52691a) || !Objects.equals(this.f52692b, bVar.f52692b) || !Objects.equals(this.f52693c, bVar.f52693c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f52691a) ^ Objects.hashCode(this.f52692b)) ^ Objects.hashCode(this.f52693c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f52691a);
        sb2.append(" , ");
        sb2.append(this.f52692b);
        sb2.append(" : ");
        uk.c cVar = this.f52693c;
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
