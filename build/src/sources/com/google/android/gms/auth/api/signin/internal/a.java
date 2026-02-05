package com.google.android.gms.auth.api.signin.internal;

import android.os.Bundle;
import androidx.loader.app.LoaderManager;
import ef.e;
import n3.b;
import ze.g;
import ze.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a implements LoaderManager.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ SignInHubActivity f13741a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a(SignInHubActivity signInHubActivity, x xVar) {
        this.f13741a = signInHubActivity;
    }

    @Override // androidx.loader.app.LoaderManager.a
    public final /* bridge */ /* synthetic */ void b(b bVar, Object obj) {
        Void r32 = (Void) obj;
        SignInHubActivity signInHubActivity = this.f13741a;
        signInHubActivity.setResult(SignInHubActivity.x(signInHubActivity), SignInHubActivity.y(signInHubActivity));
        this.f13741a.finish();
    }

    @Override // androidx.loader.app.LoaderManager.a
    public final b c(int i10, Bundle bundle) {
        return new g(this.f13741a, e.b());
    }

    @Override // androidx.loader.app.LoaderManager.a
    public final void a(b bVar) {
    }
}
