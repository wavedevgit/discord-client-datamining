package com.google.android.gms.common.api.internal;

import android.app.PendingIntent;
import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
import ef.a;
import ef.e;
import ef.k;
import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends BasePendingResult {

    /* renamed from: a  reason: collision with root package name */
    private final a.c f14429a;

    /* renamed from: b  reason: collision with root package name */
    private final ef.a f14430b;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(ef.a aVar, e eVar) {
        super((e) q.m(eVar, "GoogleApiClient must not be null"));
        q.m(aVar, "Api must not be null");
        this.f14429a = aVar.b();
        this.f14430b = aVar;
    }

    private void g(RemoteException remoteException) {
        h(new Status(8, remoteException.getLocalizedMessage(), (PendingIntent) null));
    }

    protected abstract void d(a.b bVar);

    public final void f(a.b bVar) {
        try {
            d(bVar);
        } catch (DeadObjectException e10) {
            g(e10);
            throw e10;
        } catch (RemoteException e11) {
            g(e11);
        }
    }

    public final void h(Status status) {
        q.b(!status.g(), "Failed result must not be success");
        k a10 = a(status);
        setResult(a10);
        e(a10);
    }

    protected void e(k kVar) {
    }
}
