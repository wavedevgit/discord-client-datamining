package ff;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f23196a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f23197b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f23197b = e1Var;
        this.f23196a = dialog;
    }

    @Override // ff.k0
    public final void a() {
        this.f23197b.f23227e.o();
        if (this.f23196a.isShowing()) {
            this.f23196a.dismiss();
        }
    }
}
