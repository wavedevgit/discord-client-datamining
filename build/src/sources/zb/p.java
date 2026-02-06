package zb;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements xb.i {

    /* renamed from: a  reason: collision with root package name */
    private final Set f56095a;

    /* renamed from: b  reason: collision with root package name */
    private final o f56096b;

    /* renamed from: c  reason: collision with root package name */
    private final s f56097c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Set set, o oVar, s sVar) {
        this.f56095a = set;
        this.f56096b = oVar;
        this.f56097c = sVar;
    }

    @Override // xb.i
    public xb.h a(String str, Class cls, xb.c cVar, xb.g gVar) {
        if (this.f56095a.contains(cVar)) {
            return new r(this.f56096b, str, cVar, gVar, this.f56097c);
        }
        throw new IllegalArgumentException(String.format("%s is not supported byt this factory. Supported encodings are: %s.", cVar, this.f56095a));
    }
}
