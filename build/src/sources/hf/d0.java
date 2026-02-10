package hf;

import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f26002d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ gf.h f26003e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Intent intent, gf.h hVar, int i10) {
        this.f26002d = intent;
        this.f26003e = hVar;
    }

    @Override // hf.e0
    public final void a() {
        Intent intent = this.f26002d;
        if (intent != null) {
            this.f26003e.startActivityForResult(intent, 2);
        }
    }
}
