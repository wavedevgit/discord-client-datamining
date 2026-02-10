package hf;

import android.app.Activity;
import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f27201d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Activity f27202e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f27203i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Intent intent, Activity activity, int i10) {
        this.f27201d = intent;
        this.f27202e = activity;
        this.f27203i = i10;
    }

    @Override // hf.e0
    public final void a() {
        Intent intent = this.f27201d;
        if (intent != null) {
            this.f27202e.startActivityForResult(intent, this.f27203i);
        }
    }
}
