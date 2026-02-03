package com.discord.main;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import com.discord.bundle_updater.BundleUpdater;
import com.discord.external_pip.ExternalPipModule;
import com.discord.foreground_service.ForegroundServiceManager;
import com.discord.notifications.client.NotificationClient;
import com.discord.react_activities.ReactActivity;
import com.discord.react_startup_flags.StartupFlagsModule;
import com.facebook.react.bridge.ReactContext;
import jr.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0016J\f\u0010\u0006\u001a\u00060\u0007R\u00020\u0001H\u0016J\b\u0010\b\u001a\u00020\tH\u0016J\u0018\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eH\u0017J\u0010\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\fH\u0017J\n\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0003¨\u0006\u0011"}, d2 = {"Lcom/discord/main/MainActivity;", "Lcom/discord/react_activities/ReactActivity;", "<init>", "()V", "getNameOfComponent", "", "getActivityDelegate", "Lcom/discord/react_activities/ReactActivity$ActivityDelegate;", "onUserLeaveHint", "", "onPictureInPictureModeChanged", "isInPictureInPictureMode", "", "newConfig", "Landroid/content/res/Configuration;", "currentReactContext", "Lcom/facebook/react/bridge/ReactContext;", "main_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MainActivity extends ReactActivity {

    /* renamed from: d  reason: collision with root package name */
    public static final /* synthetic */ int f10096d = 0;

    @SuppressLint({"VisibleForTests"})
    private final ReactContext currentReactContext() {
        return getReactActivityDelegate().getCurrentReactContext();
    }

    @Override // com.discord.react_activities.ReactActivity
    @NotNull
    public ReactActivity.ActivityDelegate getActivityDelegate() {
        return new ReactActivity.ActivityDelegate() { // from class: com.discord.main.MainActivity$getActivityDelegate$1
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(MainActivity.this, MainActivity.this);
            }

            private final void parseIntent(Intent intent) {
                NotificationClient companion = NotificationClient.Companion.getInstance();
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                companion.handleIntent(context, intent);
                ForegroundServiceManager foregroundServiceManager = ForegroundServiceManager.INSTANCE;
                Context context2 = getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                foregroundServiceManager.handleIntent(context2, intent);
                StartupFlagsModule.Companion.handleIntent(intent);
                BundleUpdater instance = BundleUpdater.Companion.instance();
                Context context3 = getContext();
                Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
                instance.handleIntent(context3, intent);
            }

            @Override // com.facebook.react.ReactActivityDelegate
            public void onCreate(Bundle bundle) {
                super.onCreate(bundle);
                Intent intent = MainActivity.this.getIntent();
                Intrinsics.checkNotNullExpressionValue(intent, "getIntent(...)");
                parseIntent(intent);
            }

            @Override // com.facebook.react.ReactActivityDelegate
            public boolean onNewIntent(Intent intent) {
                if (intent != null) {
                    MainActivity mainActivity = MainActivity.this;
                    parseIntent(intent);
                    mainActivity.setIntent(intent);
                }
                return super.onNewIntent(intent);
            }
        };
    }

    @Override // com.discord.react_activities.ReactActivity
    @NotNull
    public String getNameOfComponent() {
        return BuildConfig.MAIN_COMPONENT;
    }

    @Override // androidx.activity.ComponentActivity, android.app.Activity
    public void onPictureInPictureModeChanged(boolean z10, @NotNull Configuration newConfig) {
        Intrinsics.checkNotNullParameter(newConfig, "newConfig");
        super.onPictureInPictureModeChanged(z10, newConfig);
        ExternalPipModule.Companion.onPipModeChanged(currentReactContext(), z10);
    }

    @Override // com.facebook.react.ReactActivity, androidx.activity.ComponentActivity, android.app.Activity
    public void onUserLeaveHint() {
        super.onUserLeaveHint();
        ExternalPipModule.Companion.onUserLeaveHint(currentReactContext());
    }

    @Override // androidx.activity.ComponentActivity, android.app.Activity
    @c
    public void onPictureInPictureModeChanged(boolean z10) {
        super.onPictureInPictureModeChanged(z10);
        ExternalPipModule.Companion.onPipModeChanged(currentReactContext(), z10);
    }
}
