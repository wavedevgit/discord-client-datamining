package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends xh.c0 {

    /* renamed from: c  reason: collision with root package name */
    final yg.k f15916c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ x f15917d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(x xVar, yg.k kVar) {
        this.f15917d = xVar;
        this.f15916c = kVar;
    }

    @Override // xh.d0
    public final void C(Bundle bundle, Bundle bundle2) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // xh.d0
    public final void H(Bundle bundle, Bundle bundle2) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onRemoveModule()", new Object[0]);
    }

    @Override // xh.d0
    public void O(Bundle bundle, Bundle bundle2) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // xh.d0
    public void P0(Bundle bundle, Bundle bundle2) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // xh.d0
    public final void c(Bundle bundle) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onCancelDownloads()", new Object[0]);
    }

    @Override // xh.d0
    public final void e0(int i10, Bundle bundle) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // xh.d0
    public void g(Bundle bundle) {
        x.t(this.f15917d).u(this.f15916c);
        int i10 = bundle.getInt("error_code");
        x.s().b("onError(%d)", Integer.valueOf(i10));
        this.f15916c.d(new a(i10));
    }

    @Override // xh.d0
    public void k0(Bundle bundle, Bundle bundle2) {
        x.u(this.f15917d).u(this.f15916c);
        x.s().d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // xh.d0
    public void q(int i10, Bundle bundle) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // xh.d0
    public final void q0(Bundle bundle, Bundle bundle2) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // xh.d0
    public void r(List list) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onGetSessionStates", new Object[0]);
    }

    @Override // xh.d0
    public final void u0(Bundle bundle, Bundle bundle2) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // xh.d0
    public final void y0(int i10, Bundle bundle) {
        x.t(this.f15917d).u(this.f15916c);
        x.s().d("onCancelDownload(%d)", Integer.valueOf(i10));
    }
}
