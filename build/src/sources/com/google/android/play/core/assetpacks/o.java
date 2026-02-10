package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends yh.c0 {

    /* renamed from: c  reason: collision with root package name */
    final zg.k f16056c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ x f16057d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(x xVar, zg.k kVar) {
        this.f16057d = xVar;
        this.f16056c = kVar;
    }

    @Override // yh.d0
    public final void B0(int i10, Bundle bundle) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onCancelDownload(%d)", Integer.valueOf(i10));
    }

    @Override // yh.d0
    public final void I(Bundle bundle, Bundle bundle2) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // yh.d0
    public final void M(Bundle bundle, Bundle bundle2) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onRemoveModule()", new Object[0]);
    }

    @Override // yh.d0
    public void M0(Bundle bundle, Bundle bundle2) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // yh.d0
    public void T(Bundle bundle, Bundle bundle2) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // yh.d0
    public final void c(Bundle bundle) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onCancelDownloads()", new Object[0]);
    }

    @Override // yh.d0
    public final void e0(int i10, Bundle bundle) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // yh.d0
    public void g(Bundle bundle) {
        x.t(this.f16057d).u(this.f16056c);
        int i10 = bundle.getInt("error_code");
        x.s().b("onError(%d)", Integer.valueOf(i10));
        this.f16056c.d(new a(i10));
    }

    @Override // yh.d0
    public void l0(Bundle bundle, Bundle bundle2) {
        x.u(this.f16057d).u(this.f16056c);
        x.s().d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // yh.d0
    public final void p0(Bundle bundle, Bundle bundle2) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // yh.d0
    public void s(int i10, Bundle bundle) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // yh.d0
    public void v(List list) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onGetSessionStates", new Object[0]);
    }

    @Override // yh.d0
    public final void w0(Bundle bundle, Bundle bundle2) {
        x.t(this.f16057d).u(this.f16056c);
        x.s().d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }
}
