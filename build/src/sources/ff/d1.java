package ff;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f24278a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f24279b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f24279b = e1Var;
        this.f24278a = dialog;
    }

    @Override // ff.k0
    public final void a() {
        this.f24279b.f24309e.o();
        if (this.f24278a.isShowing()) {
            this.f24278a.dismiss();
        }
    }
}
