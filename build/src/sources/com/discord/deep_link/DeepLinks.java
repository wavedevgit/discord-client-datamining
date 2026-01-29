package com.discord.deep_link;

import android.content.Context;
import android.net.Uri;
import com.appsflyer.AppsFlyerLib;
import com.discord.crash_reporting.CrashReporting;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\b\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0005J\u0018\u0010\t\u001a\u00020\u00062\u0006\u0010\n\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\u0007H\u0002J\u000e\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fR\u001c\u0010\u0004\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/deep_link/DeepLinks;", "", "<init>", "()V", "initialUrl", "Lkotlin/Pair;", "", "", "getInitialUrl", "getDeepLinkDestinationWithAppsFlyerParam", "deepLinkDestination", DeepLinksKt.FROM_APPSFLYER_PARAM, "init", "", "context", "Landroid/content/Context;", "deep_link_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDeepLinks.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeepLinks.kt\ncom/discord/deep_link/DeepLinks\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,131:1\n29#2:132\n*S KotlinDebug\n*F\n+ 1 DeepLinks.kt\ncom/discord/deep_link/DeepLinks\n*L\n29#1:132\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeepLinks {
    @NotNull
    public static final DeepLinks INSTANCE = new DeepLinks();
    private static Pair<String, Boolean> initialUrl;

    private DeepLinks() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String getDeepLinkDestinationWithAppsFlyerParam(String str, boolean z10) {
        String str2;
        Uri.Builder buildUpon = Uri.parse(str).buildUpon();
        Uri build = buildUpon.build();
        buildUpon.clearQuery();
        for (String str3 : build.getQueryParameterNames()) {
            if (!Intrinsics.areEqual(str3, DeepLinksKt.FROM_APPSFLYER_PARAM)) {
                for (String str4 : build.getQueryParameters(str3)) {
                    buildUpon.appendQueryParameter(str3, str4);
                }
            }
        }
        if (z10) {
            str2 = "true";
        } else {
            str2 = "false";
        }
        buildUpon.appendQueryParameter(DeepLinksKt.FROM_APPSFLYER_PARAM, str2);
        String builder = buildUpon.toString();
        Intrinsics.checkNotNullExpressionValue(builder, "toString(...)");
        return builder;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void init$lambda$1(ScheduledExecutorService scheduledExecutorService) {
        try {
            if (AppsFlyerLib.getInstance() == null) {
                CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "Retry: Unable to get AppsFlyer instance", null, null, null, false, 30, null);
            } else {
                CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "Retry: AppsFlyer instance found", null, null, null, false, 30, null);
            }
            CrashReporting.captureMessage$default(CrashReporting.INSTANCE, DeepLinksKt.LOG_TAG, "AppsFlyer instance not found when calling init", null, 4, null);
            scheduledExecutorService.shutdown();
        } catch (Throwable th2) {
            scheduledExecutorService.shutdown();
            throw th2;
        }
    }

    public final Pair<String, Boolean> getInitialUrl() {
        return initialUrl;
    }

    public final void init(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        AppsFlyerLib appsFlyerLib = AppsFlyerLib.getInstance();
        if (appsFlyerLib == null) {
            CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "Initial attempt: Unable to get AppsFlyer instance", null, null, null, false, 30, null);
            final ScheduledExecutorService newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor();
            newSingleThreadScheduledExecutor.schedule(new Runnable() { // from class: com.discord.deep_link.a
                @Override // java.lang.Runnable
                public final void run() {
                    DeepLinks.init$lambda$1(newSingleThreadScheduledExecutor);
                }
            }, 2L, TimeUnit.SECONDS);
            return;
        }
        appsFlyerLib.subscribeForDeepLink(new DeepLinks$init$2(context));
        appsFlyerLib.init(BuildConfig.APPSFLYER_KEY, null, context);
        appsFlyerLib.start(context);
    }
}
