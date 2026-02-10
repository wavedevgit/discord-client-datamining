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
    private final yh.k0 f16071d = new yh.k0("ExtractionForegroundServiceConnection");

    /* renamed from: e  reason: collision with root package name */
    private final List f16072e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private final Context f16073i;

    /* renamed from: o  reason: collision with root package name */
    private ExtractionForegroundService f16074o;

    /* renamed from: p  reason: collision with root package name */
    private Notification f16075p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p1(Context context) {
        this.f16073i = context;
    }

    private final void d() {
        ArrayList arrayList;
        synchronized (this.f16072e) {
            arrayList = new ArrayList(this.f16072e);
            this.f16072e.clear();
        }
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((yh.g0) arrayList.get(i10)).M0(new Bundle(), new Bundle());
            } catch (RemoteException unused) {
                this.f16071d.b("Could not resolve Play Store service state update callback.", new Object[0]);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(Notification notification) {
        this.f16075p = notification;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b() {
        this.f16071d.a("Stopping foreground installation service.", new Object[0]);
        this.f16073i.unbindService(this);
        ExtractionForegroundService extractionForegroundService = this.f16074o;
        if (extractionForegroundService != null) {
            extractionForegroundService.a();
        }
        d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(yh.g0 g0Var) {
        synchronized (this.f16072e) {
            this.f16072e.add(g0Var);
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        this.f16071d.a("Starting foreground installation service.", new Object[0]);
        ExtractionForegroundService extractionForegroundService = ((o1) iBinder).f16060c;
        this.f16074o = extractionForegroundService;
        extractionForegroundService.startForeground(-1883842196, this.f16075p);
        d();
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
    }
}
