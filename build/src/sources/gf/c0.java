package gf;

import android.app.Activity;
import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 extends e0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Intent f25072d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Activity f25073e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f25074i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Intent intent, Activity activity, int i10) {
        this.f25072d = intent;
        this.f25073e = activity;
        this.f25074i = i10;
    }

    @Override // gf.e0
    public final void a() {
        Intent intent = this.f25072d;
        if (intent != null) {
            this.f25073e.startActivityForResult(intent, this.f25074i);
        }
    }
}
