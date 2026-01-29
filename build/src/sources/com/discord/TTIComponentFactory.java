package com.discord;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AppComponentFactory;
import android.app.Application;
import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.Intent;
import com.discord.logging.Log;
import com.discord.react_activities.ReactActivitySharedData;
import com.discord.tti_manager.TTIModule;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u0000 \u00142\u00020\u0001:\u0001\u0014B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0002J\"\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rH\u0016J\"\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rH\u0016J\"\u0010\u0010\u001a\u00020\u00112\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rH\u0016J\u0018\u0010\u0012\u001a\u00020\u00132\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016¨\u0006\u0015"}, d2 = {"Lcom/discord/TTIComponentFactory;", "Landroid/app/AppComponentFactory;", "<init>", "()V", "awaitApplicationInitialization", "", "instantiateActivity", "Landroid/app/Activity;", "cl", "Ljava/lang/ClassLoader;", "className", "", "intent", "Landroid/content/Intent;", "instantiateService", "Landroid/app/Service;", "instantiateReceiver", "Landroid/content/BroadcastReceiver;", "instantiateApplication", "Landroid/app/Application;", "Companion", "app_canaryRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"NewApi"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TTIComponentFactory extends AppComponentFactory {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final long INITIALIZATION_TIMEOUT_SECONDS = 30;
    @NotNull
    public static final String LOG_TAG = "TTIFactory";

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/discord/TTIComponentFactory$Companion;", "", "<init>", "()V", "LOG_TAG", "", "INITIALIZATION_TIMEOUT_SECONDS", "", "app_canaryRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    private final void awaitApplicationInitialization() {
        if (!ReactActivitySharedData.INSTANCE.getPrepareEverythingForActivity().await(INITIALIZATION_TIMEOUT_SECONDS, TimeUnit.SECONDS)) {
            Log.e$default(Log.INSTANCE, LOG_TAG, "Timeout waiting for application initialization after 30s - proceeding anyway", (Throwable) null, 4, (Object) null);
        }
    }

    @NotNull
    public Activity instantiateActivity(@NotNull ClassLoader cl2, @NotNull String className, Intent intent) {
        Intrinsics.checkNotNullParameter(cl2, "cl");
        Intrinsics.checkNotNullParameter(className, "className");
        if (StringsKt.z(className, ".MainActivity", false, 2, null)) {
            TTIModule.Companion.markMainActivityCreation();
        } else {
            TTIModule.Companion.markActivityBeforeMain(className);
        }
        awaitApplicationInitialization();
        Activity instantiateActivity = super.instantiateActivity(cl2, className, intent);
        Intrinsics.checkNotNullExpressionValue(instantiateActivity, "instantiateActivity(...)");
        return instantiateActivity;
    }

    @NotNull
    public Application instantiateApplication(@NotNull ClassLoader cl2, @NotNull String className) {
        Intrinsics.checkNotNullParameter(cl2, "cl");
        Intrinsics.checkNotNullParameter(className, "className");
        Log log = Log.INSTANCE;
        Log.i$default(log, LOG_TAG, "Application: " + className, (Throwable) null, 4, (Object) null);
        Application instantiateApplication = super.instantiateApplication(cl2, className);
        Intrinsics.checkNotNullExpressionValue(instantiateApplication, "instantiateApplication(...)");
        return instantiateApplication;
    }

    @NotNull
    public BroadcastReceiver instantiateReceiver(@NotNull ClassLoader cl2, @NotNull String className, Intent intent) {
        Intrinsics.checkNotNullParameter(cl2, "cl");
        Intrinsics.checkNotNullParameter(className, "className");
        Log log = Log.INSTANCE;
        Log.i$default(log, LOG_TAG, "Receiver: " + className + ", intent=" + intent, (Throwable) null, 4, (Object) null);
        TTIModule.Companion.markBroadcastReceiverInstantiation();
        awaitApplicationInitialization();
        BroadcastReceiver instantiateReceiver = super.instantiateReceiver(cl2, className, intent);
        Intrinsics.checkNotNullExpressionValue(instantiateReceiver, "instantiateReceiver(...)");
        return instantiateReceiver;
    }

    @NotNull
    public Service instantiateService(@NotNull ClassLoader cl2, @NotNull String className, Intent intent) {
        Intrinsics.checkNotNullParameter(cl2, "cl");
        Intrinsics.checkNotNullParameter(className, "className");
        Log log = Log.INSTANCE;
        Log.i$default(log, LOG_TAG, "Service: " + className + ", intent=" + intent, (Throwable) null, 4, (Object) null);
        TTIModule.Companion.markServiceInstantiation();
        awaitApplicationInitialization();
        Service instantiateService = super.instantiateService(cl2, className, intent);
        Intrinsics.checkNotNullExpressionValue(instantiateService, "instantiateService(...)");
        return instantiateService;
    }
}
