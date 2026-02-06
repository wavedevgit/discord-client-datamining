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
    private final xh.k0 f15931d = new xh.k0("ExtractionForegroundServiceConnection");

    /* renamed from: e  reason: collision with root package name */
    private final List f15932e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private final Context f15933i;

    /* renamed from: o  reason: collision with root package name */
    private ExtractionForegroundService f15934o;

    /* renamed from: p  reason: collision with root package name */
    private Notification f15935p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p1(Context context) {
        this.f15933i = context;
    }

    private final void d() {
        ArrayList arrayList;
        synchronized (this.f15932e) {
            arrayList = new ArrayList(this.f15932e);
            this.f15932e.clear();
        }
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((xh.g0) arrayList.get(i10)).P0(new Bundle(), new Bundle());
            } catch (RemoteException unused) {
                this.f15931d.b("Could not resolve Play Store service state update callback.", new Object[0]);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(Notification notification) {
        this.f15935p = notification;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b() {
        this.f15931d.a("Stopping foreground installation service.", new Object[0]);
        this.f15933i.unbindService(this);
        ExtractionForegroundService extractionForegroundService = this.f15934o;
        if (extractionForegroundService != null) {
            extractionForegroundService.a();
        }
        d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(xh.g0 g0Var) {
        synchronized (this.f15932e) {
            this.f15932e.add(g0Var);
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        this.f15931d.a("Starting foreground installation service.", new Object[0]);
        ExtractionForegroundService extractionForegroundService = ((o1) iBinder).f15920c;
        this.f15934o = extractionForegroundService;
        extractionForegroundService.startForeground(-1883842196, this.f15935p);
        d();
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
    }
}
