package wk;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final vk.b f53766a;

    /* renamed from: b  reason: collision with root package name */
    private final vk.b f53767b;

    /* renamed from: c  reason: collision with root package name */
    private final vk.c f53768c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(vk.b bVar, vk.b bVar2, vk.c cVar) {
        this.f53766a = bVar;
        this.f53767b = bVar2;
        this.f53768c = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public vk.c a() {
        return this.f53768c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public vk.b b() {
        return this.f53766a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public vk.b c() {
        return this.f53767b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f53767b == null) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!Objects.equals(this.f53766a, bVar.f53766a) || !Objects.equals(this.f53767b, bVar.f53767b) || !Objects.equals(this.f53768c, bVar.f53768c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return (Objects.hashCode(this.f53766a) ^ Objects.hashCode(this.f53767b)) ^ Objects.hashCode(this.f53768c);
    }

    public String toString() {
        Object valueOf;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[ ");
        sb2.append(this.f53766a);
        sb2.append(" , ");
        sb2.append(this.f53767b);
        sb2.append(" : ");
        vk.c cVar = this.f53768c;
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
