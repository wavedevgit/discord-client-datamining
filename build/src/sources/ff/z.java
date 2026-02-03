package ff;

import android.os.Handler;
import ff.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements c.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ e f24385a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(e eVar) {
        this.f24385a = eVar;
    }

    @Override // ff.c.a
    public final void a(boolean z10) {
        Handler handler;
        Handler handler2;
        e eVar = this.f24385a;
        handler = eVar.f24293y;
        handler2 = eVar.f24293y;
        handler.sendMessage(handler2.obtainMessage(1, Boolean.valueOf(z10)));
    }
}
