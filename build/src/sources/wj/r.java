package wj;

import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.util.Set;
import wj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r extends PhantomReference implements a.InterfaceC0737a {

    /* renamed from: a  reason: collision with root package name */
    private final Set f52832a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f52833b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r(Object obj, ReferenceQueue referenceQueue, Set set, Runnable runnable, q qVar) {
        super(obj, referenceQueue);
        this.f52832a = set;
        this.f52833b = runnable;
    }

    @Override // wj.a.InterfaceC0737a
    public final void a() {
        if (!this.f52832a.remove(this)) {
            return;
        }
        clear();
        this.f52833b.run();
    }
}
