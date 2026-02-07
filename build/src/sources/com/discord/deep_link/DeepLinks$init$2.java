package com.discord.deep_link;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import com.appsflyer.deeplink.DeepLink;
import com.appsflyer.deeplink.DeepLinkListener;
import com.appsflyer.deeplink.DeepLinkResult;
import com.discord.crash_reporting.CrashReporting;
import com.discord.misc.utilities.activity.ActivityUtilities;
import java.util.function.Function;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
@Metadata(d1 = {"\u0000\u0017\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016¨\u0006\u0006"}, d2 = {"com/discord/deep_link/DeepLinks$init$2", "Lcom/appsflyer/deeplink/DeepLinkListener;", "onDeepLinking", "", "deepLinkResult", "Lcom/appsflyer/deeplink/DeepLinkResult;", "deep_link_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDeepLinks.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeepLinks.kt\ncom/discord/deep_link/DeepLinks$init$2\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,131:1\n29#2:132\n*S KotlinDebug\n*F\n+ 1 DeepLinks.kt\ncom/discord/deep_link/DeepLinks$init$2\n*L\n112#1:132\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeepLinks$init$2 implements DeepLinkListener {
    final /* synthetic */ Context $context;

    /* JADX INFO: Access modifiers changed from: package-private */
    public DeepLinks$init$2(Context context) {
        this.$context = context;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onDeepLinking$lambda$1(Throwable th2) {
        CrashReporting crashReporting = CrashReporting.INSTANCE;
        Intrinsics.checkNotNull(th2);
        CrashReporting.captureException$default(crashReporting, th2, false, 2, null);
        return Unit.f32056a;
    }

    @Override // com.appsflyer.deeplink.DeepLinkListener
    public void onDeepLinking(DeepLinkResult deepLinkResult) {
        DeepLink deepLink;
        boolean z10;
        boolean z11;
        String deepLinkDestinationWithAppsFlyerParam;
        Pair pair;
        Intrinsics.checkNotNullParameter(deepLinkResult, "deepLinkResult");
        if (deepLinkResult.getStatus() == DeepLinkResult.Status.FOUND && (deepLink = deepLinkResult.getDeepLink()) != null) {
            String deepLinkValue = deepLink.getDeepLinkValue();
            boolean z12 = true;
            if (deepLinkValue != null) {
                z10 = Intrinsics.areEqual(deepLink.isDeferred(), Boolean.TRUE);
                z11 = true;
            } else {
                String stringValue = deepLink.getStringValue("link");
                deepLinkValue = null;
                if (stringValue == null) {
                    stringValue = null;
                }
                if (stringValue != null) {
                    deepLinkValue = stringValue;
                }
                z10 = false;
                z11 = false;
            }
            if (deepLinkValue != null) {
                deepLinkDestinationWithAppsFlyerParam = DeepLinks.INSTANCE.getDeepLinkDestinationWithAppsFlyerParam(deepLinkValue, z11);
                pair = DeepLinks.initialUrl;
                if (pair == null) {
                    if (!z10) {
                        z12 = false;
                    }
                    DeepLinks.initialUrl = new Pair(deepLinkDestinationWithAppsFlyerParam, Boolean.valueOf(z12));
                }
                Intent intent = new Intent("android.intent.action.VIEW", Uri.parse(deepLinkDestinationWithAppsFlyerParam));
                Context context = this.$context;
                intent.addFlags(268435456);
                intent.setPackage(context.getPackageName());
                ActivityUtilities.startActivityAsyncWithFuture$default(ActivityUtilities.INSTANCE, this.$context, intent, null, 4, null).exceptionally(new Function() { // from class: com.discord.deep_link.b
                    @Override // java.util.function.Function
                    public final Object apply(Object obj) {
                        Unit onDeepLinking$lambda$1;
                        onDeepLinking$lambda$1 = DeepLinks$init$2.onDeepLinking$lambda$1((Throwable) obj);
                        return onDeepLinking$lambda$1;
                    }
                });
            }
        }
    }
}
