package gf;

import android.os.Handler;
import hf.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 implements c.e {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ e0 f24280a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var) {
        this.f24280a = e0Var;
    }

    @Override // hf.c.e
    public final void a() {
        Handler handler;
        handler = this.f24280a.f24310o.f24296y;
        handler.post(new c0(this));
    }
}
