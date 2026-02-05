package ff;

import android.os.Handler;
import gf.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 implements c.e {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ e0 f22894a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var) {
        this.f22894a = e0Var;
    }

    @Override // gf.c.e
    public final void a() {
        Handler handler;
        handler = this.f22894a.f22924o.f22910y;
        handler.post(new c0(this));
    }
}
