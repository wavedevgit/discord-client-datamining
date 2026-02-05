package gf;

import android.app.Activity;
import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f24771d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Activity f24772e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f24773i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Intent intent, Activity activity, int i10) {
        this.f24771d = intent;
        this.f24772e = activity;
        this.f24773i = i10;
    }

    @Override // gf.e0
    public final void a() {
        Intent intent = this.f24771d;
        if (intent != null) {
            this.f24772e.startActivityForResult(intent, this.f24773i);
        }
    }
}
