package com.discord.share;

import android.app.Activity;
import android.content.Intent;
import com.discord.misc.utilities.activity.ActivityUtilities;
import com.discord.share.ShareBroadcastReceiver;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\r\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000bH\u0007J\u0010\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\u0011H\u0007J\u001a\u0010\u0012\u001a\u00020\r2\b\u0010\u0013\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0014\u001a\u00020\u000bH\u0007J\u001c\u0010\u0015\u001a\u00020\r2\b\u0010\u0016\u001a\u0004\u0018\u00010\u000b2\b\u0010\u0017\u001a\u0004\u0018\u00010\u000bH\u0007J0\u0010\u0018\u001a\u00020\r2\b\u0010\u0019\u001a\u0004\u0018\u00010\u000b2\b\u0010\u001a\u001a\u0004\u0018\u00010\u000b2\b\u0010\u001b\u001a\u0004\u0018\u00010\u000b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u000bH\u0007J\b\u0010\u001d\u001a\u00020\rH\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001e"}, d2 = {"Lcom/discord/share/ShareManagerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "shareBroadcastReceiver", "Lcom/discord/share/ShareBroadcastReceiver;", "getName", "", "addListener", "", "type", "removeListeners", "count", "", "setAuthenticationToken", "authenticationToken", "superProperties", "setSelectedChannel", "channelJSON", "guildJSON", "share", "text", "url", "chooserText", "location", "launchApp", "share_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ShareManagerModule extends ReactContextBaseJavaModule {
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ShareBroadcastReceiver shareBroadcastReceiver;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ShareManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.shareBroadcastReceiver = new ShareBroadcastReceiver(reactContext);
    }

    @ReactMethod
    public final void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
        ShareBroadcastReceiver.Companion companion = ShareBroadcastReceiver.Companion;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.register(reactApplicationContext, this.shareBroadcastReceiver);
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "ShareManager";
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @ReactMethod
    public final void launchApp() {
        Intent launchIntentForPackage = this.reactContext.getPackageManager().getLaunchIntentForPackage(this.reactContext.getPackageName());
        if (launchIntentForPackage == null) {
            return;
        }
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            currentActivity.finish();
        }
        ActivityUtilities.startActivityAsync$default(ActivityUtilities.INSTANCE, this.reactContext, launchIntentForPackage, null, 4, null);
    }

    @ReactMethod
    public final void removeListeners(int i10) {
        try {
            ShareBroadcastReceiver.Companion companion = ShareBroadcastReceiver.Companion;
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
            companion.unregister(reactApplicationContext, this.shareBroadcastReceiver);
        } catch (Exception unused) {
        }
    }

    @ReactMethod
    public final void setAuthenticationToken(String str, @NotNull String superProperties) {
        Intrinsics.checkNotNullParameter(superProperties, "superProperties");
    }

    @ReactMethod
    public final void setSelectedChannel(String str, String str2) {
    }

    @ReactMethod
    public final void share(String str, String str2, String str3, String str4) {
        if ((str != null && !StringsKt.k0(str)) || (str2 != null && !StringsKt.k0(str2))) {
            Intent intent = new Intent("android.intent.action.SEND");
            intent.setAction("android.intent.action.SEND");
            intent.setType("text/plain");
            intent.putExtra("android.intent.extra.TEXT", CollectionsKt.x0(CollectionsKt.q(str, str2), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, null, 62, null));
            Activity currentActivity = getReactApplicationContext().getCurrentActivity();
            if (currentActivity != null) {
                ActivityUtilities activityUtilities = ActivityUtilities.INSTANCE;
                if (str3 == null) {
                    str3 = "";
                }
                ShareBroadcastReceiver.Companion companion = ShareBroadcastReceiver.Companion;
                ReactApplicationContext reactApplicationContext = getReactApplicationContext();
                Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
                Intent createChooser = Intent.createChooser(intent, str3, companion.getPendingIntentSender(reactApplicationContext, str4));
                Intrinsics.checkNotNullExpressionValue(createChooser, "createChooser(...)");
                ActivityUtilities.startActivityAsync$default(activityUtilities, currentActivity, createChooser, null, 4, null);
                return;
            }
            return;
        }
        throw new IllegalArgumentException(("Text or url must not be null - text: " + str + " url " + str2).toString());
    }
}
