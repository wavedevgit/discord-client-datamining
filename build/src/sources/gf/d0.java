package gf;

import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f25043d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ff.h f25044e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Intent intent, ff.h hVar, int i10) {
        this.f25043d = intent;
        this.f25044e = hVar;
    }

    @Override // gf.e0
    public final void a() {
        Intent intent = this.f25043d;
        if (intent != null) {
            this.f25044e.startActivityForResult(intent, 2);
        }
    }
}
