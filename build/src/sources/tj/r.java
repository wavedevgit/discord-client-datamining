package tj;

import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.util.Set;
import tj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r extends PhantomReference implements a.InterfaceC0668a {

    /* renamed from: a  reason: collision with root package name */
    private final Set f50714a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f50715b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r(Object obj, ReferenceQueue referenceQueue, Set set, Runnable runnable, q qVar) {
        super(obj, referenceQueue);
        this.f50714a = set;
        this.f50715b = runnable;
    }

    @Override // tj.a.InterfaceC0668a
    public final void a() {
        if (!this.f50714a.remove(this)) {
            return;
        }
        clear();
        this.f50715b.run();
    }
}
