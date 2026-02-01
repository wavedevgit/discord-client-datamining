package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends th.c0 {

    /* renamed from: c  reason: collision with root package name */
    final wg.k f16945c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ x f16946d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(x xVar, wg.k kVar) {
        this.f16946d = xVar;
        this.f16945c = kVar;
    }

    @Override // th.d0
    public final void E(Bundle bundle, Bundle bundle2) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void F(Bundle bundle, Bundle bundle2) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onRemoveModule()", new Object[0]);
    }

    @Override // th.d0
    public void J0(Bundle bundle, Bundle bundle2) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // th.d0
    public void K(Bundle bundle, Bundle bundle2) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // th.d0
    public final void U(int i10, Bundle bundle) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void b0(Bundle bundle, Bundle bundle2) {
        th.v0 v0Var;
        th.k0 k0Var;
        v0Var = this.f16946d.f17096e;
        v0Var.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // th.d0
    public final void c(Bundle bundle) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onCancelDownloads()", new Object[0]);
    }

    @Override // th.d0
    public void g(Bundle bundle) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f17090g;
        k0Var.b("onError(%d)", Integer.valueOf(i10));
        this.f16945c.d(new a(i10));
    }

    @Override // th.d0
    public final void h0(Bundle bundle, Bundle bundle2) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void k0(Bundle bundle, Bundle bundle2) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void p0(int i10, Bundle bundle) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onCancelDownload(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void q(int i10, Bundle bundle) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void t(List list) {
        th.k0 k0Var;
        this.f16946d.f17095d.u(this.f16945c);
        k0Var = x.f17090g;
        k0Var.d("onGetSessionStates", new Object[0]);
    }
}
