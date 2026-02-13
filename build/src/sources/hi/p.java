package hi;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f27926e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ s f27927i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(s sVar, IBinder iBinder) {
        this.f27927i = sVar;
        this.f27926e = iBinder;
    }

    @Override // hi.j
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f27927i.f27929d.f27943m = e.f(this.f27926e);
        t.n(this.f27927i.f27929d);
        this.f27927i.f27929d.f27937g = false;
        list = this.f27927i.f27929d.f27934d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f27927i.f27929d.f27934d;
        list2.clear();
    }
}
