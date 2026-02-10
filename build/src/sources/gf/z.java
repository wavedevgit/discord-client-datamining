package gf;

import android.os.Handler;
import gf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements c.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ e f24388a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(e eVar) {
        this.f24388a = eVar;
    }

    @Override // gf.c.a
    public final void a(boolean z10) {
        Handler handler;
        Handler handler2;
        e eVar = this.f24388a;
        handler = eVar.f24296y;
        handler2 = eVar.f24296y;
        handler.sendMessage(handler2.obtainMessage(1, Boolean.valueOf(z10)));
    }
}
