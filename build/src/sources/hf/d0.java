package hf;

import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f27220d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ gf.h f27221e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Intent intent, gf.h hVar, int i10) {
        this.f27220d = intent;
        this.f27221e = hVar;
    }

    @Override // hf.e0
    public final void a() {
        Intent intent = this.f27220d;
        if (intent != null) {
            this.f27221e.startActivityForResult(intent, 2);
        }
    }
}
