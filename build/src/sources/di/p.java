package di;

import android.os.IBinder;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ IBinder f20822e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ s f20823i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(s sVar, IBinder iBinder) {
        this.f20823i = sVar;
        this.f20822e = iBinder;
    }

    @Override // di.j
    public final void a() {
        List<Runnable> list;
        List list2;
        this.f20823i.f20825d.f20839m = e.f(this.f20822e);
        t.n(this.f20823i.f20825d);
        this.f20823i.f20825d.f20833g = false;
        list = this.f20823i.f20825d.f20830d;
        for (Runnable runnable : list) {
            runnable.run();
        }
        list2 = this.f20823i.f20825d.f20830d;
        list2.clear();
    }
}
