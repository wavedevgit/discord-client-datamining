package zb;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements xb.i {

    /* renamed from: a  reason: collision with root package name */
    private final Set f56143a;

    /* renamed from: b  reason: collision with root package name */
    private final o f56144b;

    /* renamed from: c  reason: collision with root package name */
    private final s f56145c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Set set, o oVar, s sVar) {
        this.f56143a = set;
        this.f56144b = oVar;
        this.f56145c = sVar;
    }

    @Override // xb.i
    public xb.h a(String str, Class cls, xb.c cVar, xb.g gVar) {
        if (this.f56143a.contains(cVar)) {
            return new r(this.f56144b, str, cVar, gVar, this.f56145c);
        }
        throw new IllegalArgumentException(String.format("%s is not supported byt this factory. Supported encodings are: %s.", cVar, this.f56143a));
    }
}
