package com.discord.notifications.client;

import android.content.Context;
import android.content.SharedPreferences;
import com.discord.notifications.renderer.NotificationRenderer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0011\n\u0002\u0010\t\n\u0002\b\u0003\b\u0000\u0018\u0000 $2\u00020\u0001:\u0001$B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\rJ\u000e\u0010\f\u001a\u00020\r2\u0006\u0010\u000b\u001a\u00020\u0006J\u0018\u0010\u000e\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00062\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010J\u0018\u0010\u0011\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00062\b\u0010\u0012\u001a\u0004\u0018\u00010\u0010J\u0010\u0010\u0013\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u000b\u001a\u00020\u0006J\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u000b\u001a\u00020\u0006J\u0016\u0010\u0015\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\rJ\u000e\u0010\u0017\u001a\u00020\r2\u0006\u0010\u000b\u001a\u00020\u0006J\u0016\u0010\u0018\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\rJ\u000e\u0010\u001a\u001a\u00020\r2\u0006\u0010\u000b\u001a\u00020\u0006J\u0016\u0010\u001b\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\u001c\u001a\u00020\rJ\u000e\u0010\u001d\u001a\u00020\r2\u0006\u0010\u000b\u001a\u00020\u0006J\u0016\u0010\u001e\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00062\u0006\u0010\u001f\u001a\u00020\rJ\u000e\u0010 \u001a\u00020\r2\u0006\u0010\u000b\u001a\u00020\u0006J\u000e\u0010!\u001a\u00020\"2\u0006\u0010\u000b\u001a\u00020\u0006J\u000e\u0010#\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u0006R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082.¢\u0006\u0002\n\u0000R\u0018\u0010\u0004\u001a\u00020\u0005*\u00020\u00068BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\b¨\u0006%"}, d2 = {"Lcom/discord/notifications/client/NotificationCache;", "", "<init>", "()V", "cache", "Landroid/content/SharedPreferences;", "Landroid/content/Context;", "getCache", "(Landroid/content/Context;)Landroid/content/SharedPreferences;", "setIsAuthed", "", "context", "isAuthed", "", "setCurrentUsername", NotificationRenderer.USERNAME, "", "setCurrentUserId", "userId", "getCurrentUsername", "getCurrentUserId", "setSoundsEnabled", "soundsEnabled", "isSoundsEnabled", "setVibrationsEnabled", "vibrationsEnabled", "isVibrationsEnabled", "setLightsEnabled", "lightsEnabled", "isLightsEnabled", "setNotifyEveryTime", "notifyEveryTime", "shouldNotifyEveryTime", "getBackgroundSyncRan", "", "setBackgroundSyncRan", "Companion", "notification_client_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNotificationCache.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationCache.kt\ncom/discord/notifications/client/NotificationCache\n+ 2 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n*L\n1#1,88:1\n40#2,13:89\n40#2,13:102\n40#2,13:115\n40#2,13:128\n40#2,13:141\n40#2,13:154\n40#2,13:167\n40#2,13:180\n*S KotlinDebug\n*F\n+ 1 NotificationCache.kt\ncom/discord/notifications/client/NotificationCache\n*L\n20#1:89,13\n27#1:102,13\n31#1:115,13\n41#1:128,13\n47#1:141,13\n56#1:154,13\n65#1:167,13\n72#1:180,13\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationCache {
    @NotNull
    private static final String CACHE_KEY = "DiscordNotificationClient";
    @NotNull
    private static final String CACHE_KEY_AUTHED = "CACHE_KEY_AUTHED";
    @NotNull
    private static final String CACHE_KEY_CURRENT_USERNAME = "CACHE_KEY_CURRENT_USERNAME";
    @NotNull
    private static final String CACHE_KEY_CURRENT_USER_ID = "CACHE_KEY_CURRENT_USER_ID";
    @NotNull
    private static final String CACHE_KEY_LAST_BACKGROUND_SYNC_RAN = "CACHE_KEY_LAST_BACKGROUND_SYNC_RAN";
    @NotNull
    private static final String CACHE_KEY_LIGHTS_ENABLED = "CACHE_KEY_LIGHTS_ENABLED";
    @NotNull
    private static final String CACHE_KEY_NOTIFY_EVERY_TIME = "CACHE_KEY_NOTIFY_EVERY_TIME";
    @NotNull
    private static final String CACHE_KEY_SOUNDS_ENABLED = "CACHE_KEY_SOUNDS_ENABLED";
    @NotNull
    private static final String CACHE_KEY_VIBRATIONS_ENABLED = "CACHE_KEY_VIBRATIONS_ENABLED";
    @NotNull
    public static final Companion Companion = new Companion(null);
    private SharedPreferences cache;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\t\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/discord/notifications/client/NotificationCache$Companion;", "", "<init>", "()V", "CACHE_KEY", "", NotificationCache.CACHE_KEY_AUTHED, NotificationCache.CACHE_KEY_SOUNDS_ENABLED, NotificationCache.CACHE_KEY_VIBRATIONS_ENABLED, NotificationCache.CACHE_KEY_LIGHTS_ENABLED, NotificationCache.CACHE_KEY_CURRENT_USERNAME, NotificationCache.CACHE_KEY_CURRENT_USER_ID, NotificationCache.CACHE_KEY_NOTIFY_EVERY_TIME, NotificationCache.CACHE_KEY_LAST_BACKGROUND_SYNC_RAN, "notification_client_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    private final SharedPreferences getCache(Context context) {
        if (this.cache == null) {
            this.cache = context.getSharedPreferences(CACHE_KEY, 0);
        }
        SharedPreferences sharedPreferences = this.cache;
        if (sharedPreferences == null) {
            Intrinsics.throwUninitializedPropertyAccessException("cache");
            return null;
        }
        return sharedPreferences;
    }

    public final long getBackgroundSyncRan(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getLong(CACHE_KEY_LAST_BACKGROUND_SYNC_RAN, 0L);
    }

    public final String getCurrentUserId(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getString(CACHE_KEY_CURRENT_USER_ID, null);
    }

    public final String getCurrentUsername(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getString(CACHE_KEY_CURRENT_USERNAME, null);
    }

    public final boolean isAuthed(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getBoolean(CACHE_KEY_AUTHED, false);
    }

    public final boolean isLightsEnabled(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getBoolean(CACHE_KEY_LIGHTS_ENABLED, true);
    }

    public final boolean isSoundsEnabled(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getBoolean(CACHE_KEY_SOUNDS_ENABLED, true);
    }

    public final boolean isVibrationsEnabled(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getBoolean(CACHE_KEY_VIBRATIONS_ENABLED, true);
    }

    public final void setBackgroundSyncRan(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putLong(CACHE_KEY_LAST_BACKGROUND_SYNC_RAN, System.currentTimeMillis());
        edit.apply();
    }

    public final void setCurrentUserId(@NotNull Context context, String str) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putString(CACHE_KEY_CURRENT_USER_ID, str);
        edit.apply();
    }

    public final void setCurrentUsername(@NotNull Context context, String str) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putString(CACHE_KEY_CURRENT_USERNAME, str);
        edit.apply();
    }

    public final void setIsAuthed(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putBoolean(CACHE_KEY_AUTHED, z10);
        edit.apply();
    }

    public final void setLightsEnabled(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putBoolean(CACHE_KEY_LIGHTS_ENABLED, z10);
        edit.apply();
    }

    public final void setNotifyEveryTime(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putBoolean(CACHE_KEY_NOTIFY_EVERY_TIME, z10);
        edit.apply();
    }

    public final void setSoundsEnabled(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putBoolean(CACHE_KEY_SOUNDS_ENABLED, z10);
        edit.apply();
    }

    public final void setVibrationsEnabled(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.putBoolean(CACHE_KEY_VIBRATIONS_ENABLED, z10);
        edit.apply();
    }

    public final boolean shouldNotifyEveryTime(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getBoolean(CACHE_KEY_NOTIFY_EVERY_TIME, false);
    }
}
