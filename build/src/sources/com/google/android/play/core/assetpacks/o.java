package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends th.c0 {

    /* renamed from: c  reason: collision with root package name */
    final wg.k f16574c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ x f16575d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(x xVar, wg.k kVar) {
        this.f16575d = xVar;
        this.f16574c = kVar;
    }

    @Override // th.d0
    public final void E(Bundle bundle, Bundle bundle2) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onNotifySessionFailed(%d)", Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void F(Bundle bundle, Bundle bundle2) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onRemoveModule()", new Object[0]);
    }

    @Override // th.d0
    public void J0(Bundle bundle, Bundle bundle2) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onGetChunkFileDescriptor", new Object[0]);
    }

    @Override // th.d0
    public void K(Bundle bundle, Bundle bundle2) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onRequestDownloadInfo()", new Object[0]);
    }

    @Override // th.d0
    public final void U(int i10, Bundle bundle) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onGetSession(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void b0(Bundle bundle, Bundle bundle2) {
        this.f16575d.f16725e.u(this.f16574c);
        x.f16719g.d("onKeepAlive(%b)", Boolean.valueOf(bundle.getBoolean("keep_alive")));
    }

    @Override // th.d0
    public final void c(Bundle bundle) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onCancelDownloads()", new Object[0]);
    }

    @Override // th.d0
    public void g(Bundle bundle) {
        this.f16575d.f16724d.u(this.f16574c);
        int i10 = bundle.getInt("error_code");
        x.f16719g.b("onError(%d)", Integer.valueOf(i10));
        this.f16574c.d(new a(i10));
    }

    @Override // th.d0
    public final void h0(Bundle bundle, Bundle bundle2) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onNotifyChunkTransferred(%s, %s, %d, session=%d)", bundle.getString("module_name"), bundle.getString("slice_id"), Integer.valueOf(bundle.getInt("chunk_number")), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void k0(Bundle bundle, Bundle bundle2) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onNotifyModuleCompleted(%s, sessionId=%d)", bundle.getString("module_name"), Integer.valueOf(bundle.getInt(SharedPreferencesKey.SESSION_ID)));
    }

    @Override // th.d0
    public final void p0(int i10, Bundle bundle) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onCancelDownload(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void q(int i10, Bundle bundle) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onStartDownload(%d)", Integer.valueOf(i10));
    }

    @Override // th.d0
    public void t(List list) {
        this.f16575d.f16724d.u(this.f16574c);
        x.f16719g.d("onGetSessionStates", new Object[0]);
    }
}
