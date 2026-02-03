package com.google.android.play.core.assetpacks;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AssetPackExtractionService extends Service {

    /* renamed from: d  reason: collision with root package name */
    a0 f15268d;

    @Override // android.app.Service
    public final IBinder onBind(Intent intent) {
        return this.f15268d;
    }

    @Override // android.app.Service
    public final void onCreate() {
        super.onCreate();
        x1.a(getApplicationContext()).b(this);
    }
}
