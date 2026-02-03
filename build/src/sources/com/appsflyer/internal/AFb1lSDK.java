package com.appsflyer.internal;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import com.appsflyer.AFLogger;
import com.appsflyer.internal.AFb1aSDK;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFb1lSDK implements Application.ActivityLifecycleCallbacks {
    private volatile boolean AFAdRevenueData;
    @NotNull
    private final Runnable component1;
    private ScheduledFuture<?> component4;
    @NotNull
    private final AFa1rSDK getCurrencyIso4217Code;
    @NotNull
    private final ScheduledExecutorService getMediationNetwork;
    @NotNull
    private final AFi1kSDK getMonetizationNetwork;
    @NotNull
    final AFb1aSDK.AFa1ySDK getRevenue;

    public AFb1lSDK(@NotNull ScheduledExecutorService scheduledExecutorService, @NotNull AFa1rSDK aFa1rSDK, @NotNull AFi1kSDK aFi1kSDK, @NotNull AFb1aSDK.AFa1ySDK aFa1ySDK) {
        Intrinsics.checkNotNullParameter(scheduledExecutorService, "");
        Intrinsics.checkNotNullParameter(aFa1rSDK, "");
        Intrinsics.checkNotNullParameter(aFi1kSDK, "");
        Intrinsics.checkNotNullParameter(aFa1ySDK, "");
        this.getMediationNetwork = scheduledExecutorService;
        this.getCurrencyIso4217Code = aFa1rSDK;
        this.getMonetizationNetwork = aFi1kSDK;
        this.getRevenue = aFa1ySDK;
        this.component1 = new Runnable() { // from class: com.appsflyer.internal.k
            @Override // java.lang.Runnable
            public final void run() {
                AFb1lSDK.getRevenue(AFb1lSDK.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getMediationNetwork(AFb1lSDK aFb1lSDK, Activity activity) {
        Object b10;
        Intrinsics.checkNotNullParameter(aFb1lSDK, "");
        Intrinsics.checkNotNullParameter(activity, "");
        try {
            Result.a aVar = Result.f32461e;
            aFb1lSDK.getRevenue.getMonetizationNetwork(new AFh1rSDK(activity, aFb1lSDK.getMonetizationNetwork));
            b10 = Result.b(Unit.f32464a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32461e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        Throwable e10 = Result.e(b10);
        if (e10 != null) {
            AFLogger.afErrorLog("Listener thrown an exception: ", e10, true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getRevenue(AFb1lSDK aFb1lSDK) {
        Object b10;
        Intrinsics.checkNotNullParameter(aFb1lSDK, "");
        aFb1lSDK.AFAdRevenueData = false;
        try {
            Result.a aVar = Result.f32461e;
            aFb1lSDK.getRevenue.getMediationNetwork();
            b10 = Result.b(Unit.f32464a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32461e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        Throwable e10 = Result.e(b10);
        if (e10 != null) {
            AFLogger.afErrorLog("Background task failed with a throwable: ", e10);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityCreated(@NotNull Activity activity, Bundle bundle) {
        Uri uri;
        Intrinsics.checkNotNullParameter(activity, "");
        AFa1rSDK aFa1rSDK = this.getCurrencyIso4217Code;
        Intent intent = activity.getIntent();
        if (intent != null && "android.intent.action.VIEW".equals(intent.getAction())) {
            uri = intent.getData();
        } else {
            uri = null;
        }
        if (uri != null && intent != aFa1rSDK.getCurrencyIso4217Code) {
            aFa1rSDK.getCurrencyIso4217Code = intent;
        }
        this.getMonetizationNetwork.getMonetizationNetwork(activity);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityDestroyed(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "");
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityPaused(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "");
        if (this.AFAdRevenueData) {
            ScheduledExecutorService scheduledExecutorService = this.getMediationNetwork;
            Runnable runnable = this.component1;
            AFb1aSDK.AFa1uSDK aFa1uSDK = AFb1aSDK.AFa1uSDK;
            this.component4 = scheduledExecutorService.schedule(runnable, AFb1aSDK.AFa1uSDK.getRevenue(), TimeUnit.MILLISECONDS);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityResumed(@NotNull final Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "");
        if (!this.AFAdRevenueData) {
            this.AFAdRevenueData = true;
            this.getMediationNetwork.execute(new Runnable() { // from class: com.appsflyer.internal.l
                @Override // java.lang.Runnable
                public final void run() {
                    AFb1lSDK.getMediationNetwork(AFb1lSDK.this, activity);
                }
            });
            return;
        }
        ScheduledFuture<?> scheduledFuture = this.component4;
        if (scheduledFuture != null) {
            scheduledFuture.cancel(true);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivitySaveInstanceState(@NotNull Activity activity, @NotNull Bundle bundle) {
        Intrinsics.checkNotNullParameter(activity, "");
        Intrinsics.checkNotNullParameter(bundle, "");
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityStarted(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "");
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityStopped(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "");
    }
}
