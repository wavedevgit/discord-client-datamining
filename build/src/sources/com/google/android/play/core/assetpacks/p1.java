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
    private final th.k0 f15557d = new th.k0("ExtractionForegroundServiceConnection");

    /* renamed from: e  reason: collision with root package name */
    private final List f15558e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private final Context f15559i;

    /* renamed from: o  reason: collision with root package name */
    private ExtractionForegroundService f15560o;

    /* renamed from: p  reason: collision with root package name */
    private Notification f15561p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p1(Context context) {
        this.f15559i = context;
    }

    private final void d() {
        ArrayList arrayList;
        synchronized (this.f15558e) {
            arrayList = new ArrayList(this.f15558e);
            this.f15558e.clear();
        }
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((th.g0) arrayList.get(i10)).J0(new Bundle(), new Bundle());
            } catch (RemoteException unused) {
                this.f15557d.b("Could not resolve Play Store service state update callback.", new Object[0]);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(Notification notification) {
        this.f15561p = notification;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b() {
        this.f15557d.a("Stopping foreground installation service.", new Object[0]);
        this.f15559i.unbindService(this);
        ExtractionForegroundService extractionForegroundService = this.f15560o;
        if (extractionForegroundService != null) {
            extractionForegroundService.a();
        }
        d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(th.g0 g0Var) {
        synchronized (this.f15558e) {
            this.f15558e.add(g0Var);
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        this.f15557d.a("Starting foreground installation service.", new Object[0]);
        ExtractionForegroundService extractionForegroundService = ((o1) iBinder).f15546c;
        this.f15560o = extractionForegroundService;
        extractionForegroundService.startForeground(-1883842196, this.f15561p);
        d();
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
    }
}
