package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends th.c0 {

    /* renamed from: c  reason: collision with root package name */
    final wg.k f15542c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ x f15543d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(x xVar, wg.k kVar) {
        this.f15543d = xVar;
        this.f15542c = kVar;
    }

    @Override // th.d0
    public final void E(Bundle bundle, Bundle bundle2) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void F(Bundle bundle, Bundle bundle2) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onRemoveModule()", new Object[0]);
    }

    @Override // th.d0
    public void J0(Bundle bundle, Bundle bundle2) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // th.d0
    public void K(Bundle bundle, Bundle bundle2) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // th.d0
    public final void U(int i10, Bundle bundle) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void b0(Bundle bundle, Bundle bundle2) {
        this.f15543d.f15693e.u(this.f15542c);
        x.f15687g.d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // th.d0
    public final void c(Bundle bundle) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onCancelDownloads()", new Object[0]);
    }

    @Override // th.d0
    public void g(Bundle bundle) {
        this.f15543d.f15692d.u(this.f15542c);
        int i10 = bundle.getInt("error_code");
        x.f15687g.b("onError(%d)", Integer.valueOf(i10));
        this.f15542c.d(new a(i10));
    }

    @Override // th.d0
    public final void h0(Bundle bundle, Bundle bundle2) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void k0(Bundle bundle, Bundle bundle2) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void p0(int i10, Bundle bundle) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onCancelDownload(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void q(int i10, Bundle bundle) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void t(List list) {
        this.f15543d.f15692d.u(this.f15542c);
        x.f15687g.d("onGetSessionStates", new Object[0]);
    }
}
