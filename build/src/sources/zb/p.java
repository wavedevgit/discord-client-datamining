package zb;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements xb.i {

    /* renamed from: a  reason: collision with root package name */
    private final Set f55492a;

    /* renamed from: b  reason: collision with root package name */
    private final o f55493b;

    /* renamed from: c  reason: collision with root package name */
    private final s f55494c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Set set, o oVar, s sVar) {
        this.f55492a = set;
        this.f55493b = oVar;
        this.f55494c = sVar;
    }

    @Override // xb.i
    public xb.h a(String str, Class cls, xb.c cVar, xb.g gVar) {
        if (this.f55492a.contains(cVar)) {
            return new r(this.f55493b, str, cVar, gVar, this.f55494c);
        }
        throw new IllegalArgumentException(String.format("%s is not supported byt this factory. Supported encodings are: %s.", cVar, this.f55492a));
    }
}
