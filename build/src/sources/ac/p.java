package ac;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements yb.i {

    /* renamed from: a  reason: collision with root package name */
    private final Set f611a;

    /* renamed from: b  reason: collision with root package name */
    private final o f612b;

    /* renamed from: c  reason: collision with root package name */
    private final s f613c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Set set, o oVar, s sVar) {
        this.f611a = set;
        this.f612b = oVar;
        this.f613c = sVar;
    }

    @Override // yb.i
    public yb.h a(String str, Class cls, yb.c cVar, yb.g gVar) {
        if (this.f611a.contains(cVar)) {
            return new r(this.f612b, str, cVar, gVar, this.f613c);
        }
        throw new IllegalArgumentException(String.format("%s is not supported byt this factory. Supported encodings are: %s.", cVar, this.f611a));
    }
}
