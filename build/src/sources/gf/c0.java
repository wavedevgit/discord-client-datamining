package gf;

import android.app.Activity;
import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f26749d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Activity f26750e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f26751i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Intent intent, Activity activity, int i10) {
        this.f26749d = intent;
        this.f26750e = activity;
        this.f26751i = i10;
    }

    @Override // gf.e0
    public final void a() {
        Intent intent = this.f26749d;
        if (intent != null) {
            this.f26750e.startActivityForResult(intent, this.f26751i);
        }
    }
}
