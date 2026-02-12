package gf;

import android.os.Handler;
import gf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements c.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ e f25689a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(e eVar) {
        this.f25689a = eVar;
    }

    @Override // gf.c.a
    public final void a(boolean z10) {
        Handler handler;
        Handler handler2;
        e eVar = this.f25689a;
        handler = eVar.f25597y;
        handler2 = eVar.f25597y;
        handler.sendMessage(handler2.obtainMessage(1, Boolean.valueOf(z10)));
    }
}
