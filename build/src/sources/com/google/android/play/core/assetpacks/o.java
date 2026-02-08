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
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // xh.d0
    public final void H(Bundle bundle, Bundle bundle2) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onRemoveModule()", new Object[0]);
    }

    @Override // xh.d0
    public void O(Bundle bundle, Bundle bundle2) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // xh.d0
    public void P0(Bundle bundle, Bundle bundle2) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // xh.d0
    public final void c(Bundle bundle) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onCancelDownloads()", new Object[0]);
    }

    @Override // xh.d0
    public final void e0(int i10, Bundle bundle) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // xh.d0
    public void g(Bundle bundle) {
        this.f15917d.f16066d.u(this.f15916c);
        int i10 = bundle.getInt("error_code");
        x.f16061g.b("onError(%d)", Integer.valueOf(i10));
        this.f15916c.d(new a(i10));
    }

    @Override // xh.d0
    public void k0(Bundle bundle, Bundle bundle2) {
        xh.v0 v0Var;
        v0Var = this.f15917d.f16067e;
        v0Var.u(this.f15916c);
        x.f16061g.d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // xh.d0
    public void q(int i10, Bundle bundle) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // xh.d0
    public final void q0(Bundle bundle, Bundle bundle2) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // xh.d0
    public void r(List list) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onGetSessionStates", new Object[0]);
    }

    @Override // xh.d0
    public final void u0(Bundle bundle, Bundle bundle2) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // xh.d0
    public final void y0(int i10, Bundle bundle) {
        this.f15917d.f16066d.u(this.f15916c);
        x.f16061g.d("onCancelDownload(%d)", Integer.valueOf(i10));
    }
}
