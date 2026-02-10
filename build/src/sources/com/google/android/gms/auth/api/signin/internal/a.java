package com.google.android.gms.auth.api.signin.internal;

import af.g;
import af.x;
import android.os.Bundle;
import androidx.loader.app.LoaderManager;
import ff.e;
import n3.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a implements LoaderManager.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ SignInHubActivity f14419a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a(SignInHubActivity signInHubActivity, x xVar) {
        this.f14419a = signInHubActivity;
    }

    @Override // androidx.loader.app.LoaderManager.a
    public final /* bridge */ /* synthetic */ void b(b bVar, Object obj) {
        Void r32 = (Void) obj;
        SignInHubActivity signInHubActivity = this.f14419a;
        signInHubActivity.setResult(SignInHubActivity.x(signInHubActivity), SignInHubActivity.y(signInHubActivity));
        this.f14419a.finish();
    }

    @Override // androidx.loader.app.LoaderManager.a
    public final b c(int i10, Bundle bundle) {
        return new g(this.f14419a, e.b());
    }

    @Override // androidx.loader.app.LoaderManager.a
    public final void a(b bVar) {
    }
}
