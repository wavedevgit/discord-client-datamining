package ff;

import android.os.Handler;
import gf.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 implements c.e {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ e0 f24277a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var) {
        this.f24277a = e0Var;
    }

    @Override // gf.c.e
    public final void a() {
        Handler handler;
        handler = this.f24277a.f24307o.f24293y;
        handler.post(new c0(this));
    }
}
