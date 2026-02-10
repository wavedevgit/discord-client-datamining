package uj;

import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.util.Set;
import uj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r extends PhantomReference implements a.InterfaceC0716a {

    /* renamed from: a  reason: collision with root package name */
    private final Set f51619a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f51620b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r(Object obj, ReferenceQueue referenceQueue, Set set, Runnable runnable, q qVar) {
        super(obj, referenceQueue);
        this.f51619a = set;
        this.f51620b = runnable;
    }

    @Override // uj.a.InterfaceC0716a
    public final void a() {
        if (!this.f51619a.remove(this)) {
            return;
        }
        clear();
        this.f51620b.run();
    }
}
