package gf;

import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f26093d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ff.h f26094e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Intent intent, ff.h hVar, int i10) {
        this.f26093d = intent;
        this.f26094e = hVar;
    }

    @Override // gf.e0
    public final void a() {
        Intent intent = this.f26093d;
        if (intent != null) {
            this.f26094e.startActivityForResult(intent, 2);
        }
    }
}
