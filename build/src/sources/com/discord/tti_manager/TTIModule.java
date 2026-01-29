package com.discord.tti_manager;

import android.content.Intent;
import com.discord.codegen.NativeTTIModuleSpec;
import com.discord.lifecycle.BackgroundStartSignals;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.renderer.IncomingCallActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import java.lang.reflect.Field;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0002\u0018\u0000 \u00102\u00020\u0001:\u0001\u0010B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0002\u0010\bJ\b\u0010\t\u001a\u00020\nH\u0016J\b\u0010\u000b\u001a\u00020\nH\u0016J\b\u0010\f\u001a\u00020\nH\u0016J\b\u0010\r\u001a\u00020\nH\u0016J\b\u0010\u000e\u001a\u00020\u000fH\u0016¨\u0006\u0011"}, d2 = {"Lcom/discord/tti_manager/TTIModule;", "Lcom/discord/codegen/NativeTTIModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getMainActivityCreationTime", "", "()Ljava/lang/Double;", "getWasServiceStartedBefore", "", "getWasBroadcastReceiverStartedBefore", "wasInitializeCompleteWhenActivityOpened", "wasLaunchedViaShortcut", "getLaunchScenario", "", "Companion", "tti_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TTIModule extends NativeTTIModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String EXTRA_CONTENT_ACTION_TAG = "com.discord.notifications.actions.intents.ContentAction.tag";
    @NotNull
    private static final String EXTRA_CONTENT_ACTION_TYPE = "com.discord.notifications.actions.intents.ContentAction.type";
    @NotNull
    private static final String KEY_SHORTCUT = "discord_shortcut";
    @NotNull
    private static final Set<String> activitiesBeforeMain;
    private static volatile boolean activityInstantiationBegan;
    private static volatile boolean broadcastReceiverInstantiationBeforeActivity;
    private static volatile boolean isInitializeComplete;
    private static volatile Long mainActivityCreationTime;
    private static volatile Intent mainActivityIntent;
    private static volatile boolean serviceInstantiationBeforeActivity;
    private static volatile boolean wasInitializeCompleteWhenActivityOpened;
    private static volatile boolean wasLaunchedViaShortcut;

    @Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010#\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u000e\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0016\u001a\u00020\u0017J\u0006\u0010\u0018\u001a\u00020\u0017J\u000e\u0010\u0019\u001a\u00020\u00172\u0006\u0010\u001a\u001a\u00020\u000fJ\u0006\u0010\u001b\u001a\u00020\u0017J\u0006\u0010\u001c\u001a\u00020\u0017J\u0012\u0010\u001d\u001a\u00020\u00172\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u0011J\u0006\u0010\u001f\u001a\u00020\u0017J\u0006\u0010 \u001a\u00020\u000fJ\u0006\u0010!\u001a\u00020\u0005J\u0006\u0010\"\u001a\u00020\u0005J\u0006\u0010#\u001a\u00020\u0005J\u0006\u0010$\u001a\u00020\u0005J\u0006\u0010%\u001a\u00020&J\b\u0010'\u001a\u00020\u0017H\u0002J\b\u0010(\u001a\u00020\u0005H\u0002J\b\u0010)\u001a\u00020\u0005H\u0002J\"\u0010*\u001a\u0014\u0012\u0006\u0012\u0004\u0018\u00010\u000f\u0012\u0006\u0012\u0004\u0018\u00010\u000f\u0018\u00010+2\u0006\u0010\u001e\u001a\u00020\u0011H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\fR\u0014\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u000f0\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000¨\u0006,"}, d2 = {"Lcom/discord/tti_manager/TTIModule$Companion;", "", "<init>", "()V", "activityInstantiationBegan", "", "serviceInstantiationBeforeActivity", "broadcastReceiverInstantiationBeforeActivity", "wasInitializeCompleteWhenActivityOpened", "isInitializeComplete", "mainActivityCreationTime", "", "Ljava/lang/Long;", "activitiesBeforeMain", "", "", "mainActivityIntent", "Landroid/content/Intent;", "wasLaunchedViaShortcut", "KEY_SHORTCUT", "EXTRA_CONTENT_ACTION_TAG", "EXTRA_CONTENT_ACTION_TYPE", "markServiceInstantiation", "", "markBroadcastReceiverInstantiation", "markActivityBeforeMain", "className", "markApplicationInitializeComplete", "markMainActivityCreation", "setMainActivityIntent", "intent", "clearMainActivityCreation", "getLaunchScenario", "getWasServiceStartedBeforeActivity", "getWasBroadcastReceiverStartedBeforeActivity", "getWasInitializeCompleteWhenActivityOpened", "getWasLaunchedViaShortcut", "getActivitiesBeforeMainCount", "", "maybeEmitBackgroundStart", "checkNotificationLaunch", "checkIncomingCallActivity", "extractContentActionData", "Lkotlin/Pair;", "tti_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nTTIModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TTIModule.kt\ncom/discord/tti_manager/TTIModule$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,201:1\n1761#2,3:202\n1761#2,3:205\n*S KotlinDebug\n*F\n+ 1 TTIModule.kt\ncom/discord/tti_manager/TTIModule$Companion\n*L\n116#1:202,3\n163#1:205,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final boolean checkIncomingCallActivity() {
            Field declaredField;
            Pair<String, String> extractContentActionData;
            boolean z10;
            Set<String> set = TTIModule.activitiesBeforeMain;
            if (!(set instanceof Collection) || !set.isEmpty()) {
                for (String str : set) {
                    if (StringsKt.V(str, "IncomingCallActivity", false, 2, null)) {
                        return true;
                    }
                }
            }
            Intent intent = TTIModule.mainActivityIntent;
            if (intent != null && (extractContentActionData = TTIModule.Companion.extractContentActionData(intent)) != null) {
                String str2 = (String) extractContentActionData.b();
                boolean d02 = CollectionsKt.d0(CollectionsKt.o(NotificationData.TYPE_CALL_CONNECT, NotificationData.TYPE_CALL_RING, NotificationData.TYPE_CALL_RING_END), (String) extractContentActionData.a());
                if (str2 != null && StringsKt.V(str2, NotificationData.TYPE_CALL_RING, false, 2, null)) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (d02 || z10) {
                    return true;
                }
            }
            try {
                IncomingCallActivity.Companion companion = IncomingCallActivity.Companion;
                declaredField = IncomingCallActivity.class.getDeclaredField("selfIntent");
                declaredField.setAccessible(true);
            } catch (Exception unused) {
            }
            if (declaredField.get(null) != null) {
                return true;
            }
            return false;
        }

        private final boolean checkNotificationLaunch() {
            Pair<String, String> extractContentActionData;
            Intent intent = TTIModule.mainActivityIntent;
            if (intent != null && (extractContentActionData = TTIModule.Companion.extractContentActionData(intent)) != null) {
                String str = (String) extractContentActionData.b();
                if (Intrinsics.areEqual((String) extractContentActionData.a(), NotificationData.TYPE_MESSAGE_CREATE) || (str != null && StringsKt.P(str, NotificationData.TYPE_MESSAGE_CREATE, false, 2, null))) {
                    return true;
                }
            }
            return false;
        }

        private final Pair<String, String> extractContentActionData(Intent intent) {
            String stringExtra = intent.getStringExtra("com.discord.notifications.actions.intents.ContentAction.tag");
            String stringExtra2 = intent.getStringExtra("com.discord.notifications.actions.intents.ContentAction.type");
            if (stringExtra == null && stringExtra2 == null) {
                return null;
            }
            return new Pair<>(stringExtra2, stringExtra);
        }

        private final void maybeEmitBackgroundStart() {
            if (!TTIModule.activityInstantiationBegan && TTIModule.activitiesBeforeMain.isEmpty()) {
                BackgroundStartSignals.INSTANCE.emitIfNotEmitted();
            }
        }

        public static /* synthetic */ void setMainActivityIntent$default(Companion companion, Intent intent, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                intent = null;
            }
            companion.setMainActivityIntent(intent);
        }

        public final void clearMainActivityCreation() {
            TTIModule.mainActivityCreationTime = null;
            TTIModule.activitiesBeforeMain.clear();
            TTIModule.mainActivityIntent = null;
            TTIModule.wasLaunchedViaShortcut = false;
            BackgroundStartSignals.INSTANCE.reset();
        }

        public final int getActivitiesBeforeMainCount() {
            return TTIModule.activitiesBeforeMain.size();
        }

        @NotNull
        public final String getLaunchScenario() {
            boolean z10;
            boolean checkIncomingCallActivity = checkIncomingCallActivity();
            Set<String> set = TTIModule.activitiesBeforeMain;
            boolean z11 = true;
            if (!(set instanceof Collection) || !set.isEmpty()) {
                for (String str : set) {
                    if (StringsKt.z(str, ".ShareActivity", false, 2, null)) {
                        z10 = true;
                        break;
                    }
                }
            }
            z10 = false;
            if (!TTIModule.serviceInstantiationBeforeActivity && !TTIModule.broadcastReceiverInstantiationBeforeActivity) {
                z11 = false;
            }
            boolean checkNotificationLaunch = checkNotificationLaunch();
            if (checkIncomingCallActivity) {
                return "incoming_call";
            }
            if (TTIModule.wasLaunchedViaShortcut) {
                return "launcher_shortcut";
            }
            if (z10) {
                return "share_activity";
            }
            if (checkNotificationLaunch) {
                return "notification";
            }
            if (z11) {
                return "other_background_task";
            }
            if (!TTIModule.activitiesBeforeMain.isEmpty()) {
                return "other_activity_launch";
            }
            return "normal";
        }

        public final boolean getWasBroadcastReceiverStartedBeforeActivity() {
            return TTIModule.broadcastReceiverInstantiationBeforeActivity;
        }

        public final boolean getWasInitializeCompleteWhenActivityOpened() {
            return TTIModule.wasInitializeCompleteWhenActivityOpened;
        }

        public final boolean getWasLaunchedViaShortcut() {
            return TTIModule.wasLaunchedViaShortcut;
        }

        public final boolean getWasServiceStartedBeforeActivity() {
            return TTIModule.serviceInstantiationBeforeActivity;
        }

        public final void markActivityBeforeMain(@NotNull String className) {
            Intrinsics.checkNotNullParameter(className, "className");
            if (!TTIModule.activityInstantiationBegan) {
                TTIModule.activitiesBeforeMain.add(className);
            }
        }

        public final void markApplicationInitializeComplete() {
            TTIModule.isInitializeComplete = true;
        }

        public final void markBroadcastReceiverInstantiation() {
            if (!TTIModule.activityInstantiationBegan) {
                TTIModule.broadcastReceiverInstantiationBeforeActivity = true;
            }
            maybeEmitBackgroundStart();
        }

        public final void markMainActivityCreation() {
            TTIModule.activityInstantiationBegan = true;
            TTIModule.wasInitializeCompleteWhenActivityOpened = TTIModule.isInitializeComplete;
            if (TTIModule.mainActivityCreationTime == null) {
                TTIModule.mainActivityCreationTime = Long.valueOf(System.currentTimeMillis());
            }
        }

        public final void markServiceInstantiation() {
            if (!TTIModule.activityInstantiationBegan) {
                TTIModule.serviceInstantiationBeforeActivity = true;
            }
            maybeEmitBackgroundStart();
        }

        public final void setMainActivityIntent(Intent intent) {
            if (intent != null) {
                TTIModule.mainActivityIntent = intent;
                Intent intent2 = TTIModule.mainActivityIntent;
                if (intent2 != null && intent2.hasExtra(TTIModule.KEY_SHORTCUT)) {
                    TTIModule.wasLaunchedViaShortcut = true;
                }
            }
        }

        private Companion() {
        }
    }

    static {
        Set<String> synchronizedSet = Collections.synchronizedSet(new LinkedHashSet());
        Intrinsics.checkNotNullExpressionValue(synchronizedSet, "synchronizedSet(...)");
        activitiesBeforeMain = synchronizedSet;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TTIModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    @Override // com.discord.codegen.NativeTTIModuleSpec
    @NotNull
    public String getLaunchScenario() {
        return Companion.getLaunchScenario();
    }

    @Override // com.discord.codegen.NativeTTIModuleSpec
    public Double getMainActivityCreationTime() {
        Long l10 = mainActivityCreationTime;
        if (l10 != null) {
            return Double.valueOf(l10.longValue());
        }
        return null;
    }

    @Override // com.discord.codegen.NativeTTIModuleSpec
    public boolean getWasBroadcastReceiverStartedBefore() {
        return broadcastReceiverInstantiationBeforeActivity;
    }

    @Override // com.discord.codegen.NativeTTIModuleSpec
    public boolean getWasServiceStartedBefore() {
        return serviceInstantiationBeforeActivity;
    }

    @Override // com.discord.codegen.NativeTTIModuleSpec
    public boolean wasInitializeCompleteWhenActivityOpened() {
        return wasInitializeCompleteWhenActivityOpened;
    }

    @Override // com.discord.codegen.NativeTTIModuleSpec
    public boolean wasLaunchedViaShortcut() {
        return wasLaunchedViaShortcut;
    }
}
