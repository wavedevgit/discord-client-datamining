package com.discord.react_startup_flags;

import android.content.Intent;
import android.content.SharedPreferences;
import com.discord.codegen.NativeStartupFlagsModuleSpec;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\u0018\u0000 \u000f2\u00020\u0001:\u0001\u000fB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000bH\u0016R\u0014\u0010\u0006\u001a\u00020\u00078BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\b\u0010\t¨\u0006\u0010"}, d2 = {"Lcom/discord/react_startup_flags/StartupFlagsModule;", "Lcom/discord/codegen/NativeStartupFlagsModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "sharedPreferences", "Landroid/content/SharedPreferences;", "getSharedPreferences", "()Landroid/content/SharedPreferences;", StartupFlagsModule.PROPERTY_NAME, "", "setReactProfilingEnabled", "", "value", "Companion", "react_startup_flags_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nStartupFlagsModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StartupFlagsModule.kt\ncom/discord/react_startup_flags/StartupFlagsModule\n+ 2 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n*L\n1#1,44:1\n40#2,13:45\n*S KotlinDebug\n*F\n+ 1 StartupFlagsModule.kt\ncom/discord/react_startup_flags/StartupFlagsModule\n*L\n26#1:45,13\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class StartupFlagsModule extends NativeStartupFlagsModuleSpec {
    @NotNull
    private static final String CACHE_KEY = "StartupFlagsModule";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String PROPERTY_NAME = "reactProfilingEnabled";
    private static Boolean initialReactProfilingEnabledSetting;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u0012\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/discord/react_startup_flags/StartupFlagsModule$Companion;", "", "<init>", "()V", "CACHE_KEY", "", "PROPERTY_NAME", "handleIntent", "", "intent", "Landroid/content/Intent;", "initialReactProfilingEnabledSetting", "", "Ljava/lang/Boolean;", "react_startup_flags_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void handleIntent(@NotNull Intent intent) {
            Intrinsics.checkNotNullParameter(intent, "intent");
            if (intent.hasExtra(StartupFlagsModule.PROPERTY_NAME)) {
                StartupFlagsModule.initialReactProfilingEnabledSetting = Boolean.valueOf(intent.getBooleanExtra(StartupFlagsModule.PROPERTY_NAME, false));
            }
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public StartupFlagsModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    private final SharedPreferences getSharedPreferences() {
        SharedPreferences sharedPreferences = getReactApplicationContext().getSharedPreferences(CACHE_KEY, 0);
        Intrinsics.checkNotNullExpressionValue(sharedPreferences, "getSharedPreferences(...)");
        return sharedPreferences;
    }

    @Override // com.discord.codegen.NativeStartupFlagsModuleSpec
    public boolean reactProfilingEnabled() {
        Boolean bool = initialReactProfilingEnabledSetting;
        if (bool != null) {
            setReactProfilingEnabled(bool.booleanValue());
            initialReactProfilingEnabledSetting = null;
        }
        return getSharedPreferences().getBoolean(PROPERTY_NAME, false);
    }

    @Override // com.discord.codegen.NativeStartupFlagsModuleSpec
    public void setReactProfilingEnabled(boolean z10) {
        SharedPreferences.Editor edit = getSharedPreferences().edit();
        edit.putBoolean(PROPERTY_NAME, z10);
        edit.apply();
    }
}
