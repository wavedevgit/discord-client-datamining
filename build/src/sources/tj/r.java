package tj;

import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.util.Set;
import tj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r extends PhantomReference implements a.InterfaceC0668a {

    /* renamed from: a  reason: collision with root package name */
    private final Set f50666a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f50667b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r(Object obj, ReferenceQueue referenceQueue, Set set, Runnable runnable, q qVar) {
        super(obj, referenceQueue);
        this.f50666a = set;
        this.f50667b = runnable;
    }

    @Override // tj.a.InterfaceC0668a
    public final void a() {
        if (!this.f50666a.remove(this)) {
            return;
        }
        clear();
        this.f50667b.run();
    }
}
