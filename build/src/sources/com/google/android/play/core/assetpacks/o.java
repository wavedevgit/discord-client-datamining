package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends ai.c0 {

    /* renamed from: c  reason: collision with root package name */
    final zg.k f16806c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ x f16807d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(x xVar, zg.k kVar) {
        this.f16807d = xVar;
        this.f16806c = kVar;
    }

    @Override // ai.d0
    public final void C0(int i10, Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onCancelDownload(%d)", Integer.valueOf(i10));
    }

    @Override // ai.d0
    public final void I(Bundle bundle, Bundle bundle2) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // ai.d0
    public final void L(Bundle bundle, Bundle bundle2) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onRemoveModule()", new Object[0]);
    }

    @Override // ai.d0
    public void O0(Bundle bundle, Bundle bundle2) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // ai.d0
    public void T(Bundle bundle, Bundle bundle2) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // ai.d0
    public final void c(Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onCancelDownloads()", new Object[0]);
    }

    @Override // ai.d0
    public void g(Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16951g;
        k0Var.b("onError(%d)", Integer.valueOf(i10));
        this.f16806c.d(new a(i10));
    }

    @Override // ai.d0
    public final void g0(int i10, Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // ai.d0
    public void l0(Bundle bundle, Bundle bundle2) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16957e;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // ai.d0
    public final void p0(Bundle bundle, Bundle bundle2) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // ai.d0
    public void v(int i10, Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // ai.d0
    public final void v0(Bundle bundle, Bundle bundle2) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // ai.d0
    public void w(List list) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16807d.f16956d;
        v0Var.u(this.f16806c);
        k0Var = x.f16951g;
        k0Var.d("onGetSessionStates", new Object[0]);
    }
}
