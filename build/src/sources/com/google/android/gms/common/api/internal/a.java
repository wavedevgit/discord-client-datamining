package com.google.android.gms.common.api.internal;

import android.app.PendingIntent;
import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
import ff.a;
import ff.e;
import ff.k;
import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends BasePendingResult {

    /* renamed from: a  reason: collision with root package name */
    private final a.c f14462a;

    /* renamed from: b  reason: collision with root package name */
    private final ff.a f14463b;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(ff.a aVar, e eVar) {
        super((e) q.m(eVar, "GoogleApiClient must not be null"));
        q.m(aVar, "Api must not be null");
        this.f14462a = aVar.b();
        this.f14463b = aVar;
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
