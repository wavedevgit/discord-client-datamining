package com.google.android.play.core.assetpacks;

import android.app.Notification;
import android.content.ComponentName;
import android.content.Context;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p1 implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    private final th.k0 f16589d = new th.k0("ExtractionForegroundServiceConnection");

    /* renamed from: e  reason: collision with root package name */
    private final List f16590e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private final Context f16591i;

    /* renamed from: o  reason: collision with root package name */
    private ExtractionForegroundService f16592o;

    /* renamed from: p  reason: collision with root package name */
    private Notification f16593p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p1(Context context) {
        this.f16591i = context;
    }

    private final void d() {
        ArrayList arrayList;
        synchronized (this.f16590e) {
            arrayList = new ArrayList(this.f16590e);
            this.f16590e.clear();
        }
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((th.g0) arrayList.get(i10)).J0(new Bundle(), new Bundle());
            } catch (RemoteException unused) {
                this.f16589d.b("Could not resolve Play Store service state update callback.", new Object[0]);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(Notification notification) {
        this.f16593p = notification;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b() {
        this.f16589d.a("Stopping foreground installation service.", new Object[0]);
        this.f16591i.unbindService(this);
        ExtractionForegroundService extractionForegroundService = this.f16592o;
        if (extractionForegroundService != null) {
            extractionForegroundService.a();
        }
        d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(th.g0 g0Var) {
        synchronized (this.f16590e) {
            this.f16590e.add(g0Var);
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        this.f16589d.a("Starting foreground installation service.", new Object[0]);
        ExtractionForegroundService extractionForegroundService = ((o1) iBinder).f16578c;
        this.f16592o = extractionForegroundService;
        extractionForegroundService.startForeground(-1883842196, this.f16593p);
        d();
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
    }
}
