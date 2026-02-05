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
    private final wh.k0 f15951d = new wh.k0("ExtractionForegroundServiceConnection");

    /* renamed from: e  reason: collision with root package name */
    private final List f15952e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private final Context f15953i;

    /* renamed from: o  reason: collision with root package name */
    private ExtractionForegroundService f15954o;

    /* renamed from: p  reason: collision with root package name */
    private Notification f15955p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p1(Context context) {
        this.f15953i = context;
    }

    private final void d() {
        ArrayList arrayList;
        synchronized (this.f15952e) {
            arrayList = new ArrayList(this.f15952e);
            this.f15952e.clear();
        }
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ((wh.g0) arrayList.get(i10)).O0(new Bundle(), new Bundle());
            } catch (RemoteException unused) {
                this.f15951d.b("Could not resolve Play Store service state update callback.", new Object[0]);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(Notification notification) {
        this.f15955p = notification;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b() {
        this.f15951d.a("Stopping foreground installation service.", new Object[0]);
        this.f15953i.unbindService(this);
        ExtractionForegroundService extractionForegroundService = this.f15954o;
        if (extractionForegroundService != null) {
            extractionForegroundService.a();
        }
        d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(wh.g0 g0Var) {
        synchronized (this.f15952e) {
            this.f15952e.add(g0Var);
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        this.f15951d.a("Starting foreground installation service.", new Object[0]);
        ExtractionForegroundService extractionForegroundService = ((o1) iBinder).f15940c;
        this.f15954o = extractionForegroundService;
        extractionForegroundService.startForeground(-1883842196, this.f15955p);
        d();
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
    }
}
