package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends wh.c0 {

    /* renamed from: c  reason: collision with root package name */
    final xg.k f15936c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ x f15937d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(x xVar, xg.k kVar) {
        this.f15937d = xVar;
        this.f15936c = kVar;
    }

    @Override // wh.d0
    public final void E(Bundle bundle, Bundle bundle2) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // wh.d0
    public final void G(Bundle bundle, Bundle bundle2) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onRemoveModule()", new Object[0]);
    }

    @Override // wh.d0
    public void M(Bundle bundle, Bundle bundle2) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // wh.d0
    public void O0(Bundle bundle, Bundle bundle2) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // wh.d0
    public final void b0(int i10, Bundle bundle) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // wh.d0
    public final void c(Bundle bundle) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onCancelDownloads()", new Object[0]);
    }

    @Override // wh.d0
    public void g(Bundle bundle) {
        x.t(this.f15937d).u(this.f15936c);
        int i10 = bundle.getInt("error_code");
        x.s().b("onError(%d)", Integer.valueOf(i10));
        this.f15936c.d(new a(i10));
    }

    @Override // wh.d0
    public void j0(Bundle bundle, Bundle bundle2) {
        x.u(this.f15937d).u(this.f15936c);
        x.s().d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // wh.d0
    public final void p0(Bundle bundle, Bundle bundle2) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // wh.d0
    public void r(int i10, Bundle bundle) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // wh.d0
    public void s(List list) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onGetSessionStates", new Object[0]);
    }

    @Override // wh.d0
    public final void t0(Bundle bundle, Bundle bundle2) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // wh.d0
    public final void x0(int i10, Bundle bundle) {
        x.t(this.f15937d).u(this.f15936c);
        x.s().d("onCancelDownload(%d)", Integer.valueOf(i10));
    }
}
