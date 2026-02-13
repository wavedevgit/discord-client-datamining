package hf;

import android.app.Activity;
import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f27770d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Activity f27771e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f27772i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Intent intent, Activity activity, int i10) {
        this.f27770d = intent;
        this.f27771e = activity;
        this.f27772i = i10;
    }

    @Override // hf.e0
    public final void a() {
        Intent intent = this.f27770d;
        if (intent != null) {
            this.f27771e.startActivityForResult(intent, this.f27772i);
        }
    }
}
