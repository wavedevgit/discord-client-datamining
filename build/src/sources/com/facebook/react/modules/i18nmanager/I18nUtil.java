package com.facebook.react.modules.i18nmanager;

import a2.g;
import android.content.Context;
import android.content.SharedPreferences;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import or.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u000e\n\u0002\b\u0005\u0018\u0000 \u00192\u00020\u0001:\u0001\u0019B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007J\u0010\u0010\b\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0010\u0010\t\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u0005J\u000e\u0010\f\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007J\u0016\u0010\r\u001a\u00020\u000b2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u000e\u001a\u00020\u0005J\u0010\u0010\u000f\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0016\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0010\u001a\u00020\u0005J \u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0005H\u0002J \u0010\u0017\u001a\u00020\u000b2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0005H\u0002R\u0014\u0010\u0011\u001a\u00020\u00058BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0011\u0010\u0012¨\u0006\u001a"}, d2 = {"Lcom/facebook/react/modules/i18nmanager/I18nUtil;", "", "<init>", "()V", "isRTL", "", "context", "Landroid/content/Context;", "applicationHasRtlSupport", "isRTLAllowed", "allowRTL", "", "doLeftAndRightSwapInRTL", "swapLeftAndRightInRTL", "flip", "isRTLForced", "forceRTL", "isDevicePreferredLanguageRTL", "()Z", "isPrefSet", "key", "", "defaultValue", "setPref", "value", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class I18nUtil {
    @NotNull
    private static final String KEY_FOR_PERFS_MAKE_RTL_FLIP_LEFT_AND_RIGHT_STYLES = "RCTI18nUtil_makeRTLFlipLeftAndRightStyles";
    @NotNull
    private static final String KEY_FOR_PREFS_ALLOWRTL = "RCTI18nUtil_allowRTL";
    @NotNull
    private static final String KEY_FOR_PREFS_FORCERTL = "RCTI18nUtil_forceRTL";
    @NotNull
    private static final String SHARED_PREFS_NAME = "com.facebook.react.modules.i18nmanager.I18nUtil";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final I18nUtil instance = new I18nUtil();

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0006\u001a\u00020\u0005H\u0007¢\u0006\u0002\b\rR\u0013\u0010\u0004\u001a\u00020\u00058G¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/facebook/react/modules/i18nmanager/I18nUtil$Companion;", "", "<init>", "()V", "instance", "Lcom/facebook/react/modules/i18nmanager/I18nUtil;", "getInstance", "()Lcom/facebook/react/modules/i18nmanager/I18nUtil;", "SHARED_PREFS_NAME", "", "KEY_FOR_PREFS_ALLOWRTL", "KEY_FOR_PREFS_FORCERTL", "KEY_FOR_PERFS_MAKE_RTL_FLIP_LEFT_AND_RIGHT_STYLES", "DEPRECATED$getInstance", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @c
        @NotNull
        public final I18nUtil DEPRECATED$getInstance() {
            return getInstance();
        }

        @NotNull
        public final I18nUtil getInstance() {
            return I18nUtil.instance;
        }

        private Companion() {
        }
    }

    private I18nUtil() {
    }

    private final boolean applicationHasRtlSupport(Context context) {
        if ((context.getApplicationInfo().flags & 4194304) != 0) {
            return true;
        }
        return false;
    }

    @NotNull
    public static final I18nUtil getInstance() {
        return Companion.getInstance();
    }

    private final boolean isDevicePreferredLanguageRTL() {
        if (g.a(Locale.getDefault()) == 1) {
            return true;
        }
        return false;
    }

    private final boolean isPrefSet(Context context, String str, boolean z10) {
        return context.getSharedPreferences(SHARED_PREFS_NAME, 0).getBoolean(str, z10);
    }

    private final boolean isRTLAllowed(Context context) {
        return isPrefSet(context, KEY_FOR_PREFS_ALLOWRTL, true);
    }

    private final boolean isRTLForced(Context context) {
        if (!isPrefSet(context, KEY_FOR_PREFS_FORCERTL, false) && !StringsKt.A(System.getProperty("FORCE_RTL_FOR_TESTING", "false"), "true", true)) {
            return false;
        }
        return true;
    }

    private final void setPref(Context context, String str, boolean z10) {
        SharedPreferences.Editor edit = context.getSharedPreferences(SHARED_PREFS_NAME, 0).edit();
        edit.putBoolean(str, z10);
        edit.apply();
    }

    public final void allowRTL(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        setPref(context, KEY_FOR_PREFS_ALLOWRTL, z10);
    }

    public final boolean doLeftAndRightSwapInRTL(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return isPrefSet(context, KEY_FOR_PERFS_MAKE_RTL_FLIP_LEFT_AND_RIGHT_STYLES, true);
    }

    public final void forceRTL(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        setPref(context, KEY_FOR_PREFS_FORCERTL, z10);
    }

    public final boolean isRTL(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (applicationHasRtlSupport(context)) {
            if (!isRTLForced(context)) {
                if (isRTLAllowed(context) && isDevicePreferredLanguageRTL()) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final void swapLeftAndRightInRTL(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        setPref(context, KEY_FOR_PERFS_MAKE_RTL_FLIP_LEFT_AND_RIGHT_STYLES, z10);
    }
}
