package ff;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f23870a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f23871b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f23871b = e1Var;
        this.f23870a = dialog;
    }

    @Override // ff.k0
    public final void a() {
        this.f23871b.f23901e.o();
        if (this.f23870a.isShowing()) {
            this.f23870a.dismiss();
        }
    }
}
