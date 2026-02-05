package com.discord.theme;

import android.app.Activity;
import android.content.Context;
import android.content.res.Resources;
import android.view.View;
import com.discord.theme.utils.ActivityThemeUtils;
import com.discord.theme.utils.UpdateSystemUiKt;
import com.facebook.react.bridge.ReactContext;
import java.util.EnumMap;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0012\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u0006H\u0002J\u0006\u0010\u0014\u001a\u00020\u0007J\u0006\u0010\u0015\u001a\u00020\rJ\u000e\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u0019J\b\u0010\u001a\u001a\u0004\u0018\u00010\u0006J\u0006\u0010\u001b\u001a\u00020\u000bJ\u0006\u0010\u001c\u001a\u00020\u000bJ\u0006\u0010\u001d\u001a\u00020\u0017J\u0010\u0010\u001e\u001a\u00020\u00172\b\u0010\b\u001a\u0004\u0018\u00010\u0006J\u0006\u0010\u001f\u001a\u00020\u0017J\u000e\u0010 \u001a\u00020\u00172\u0006\u0010!\u001a\u00020\"J\u0006\u0010#\u001a\u00020\u000bJ\u0010\u0010$\u001a\u00020\u00172\u0006\u0010\b\u001a\u00020\u0006H\u0002J\u0006\u0010%\u001a\u00020\u0017J\u0006\u0010&\u001a\u00020\u0017J\u0006\u0010'\u001a\u00020\u0017J\u0006\u0010(\u001a\u00020\u0017J\u000e\u0010)\u001a\u00020\u00172\u0006\u0010*\u001a\u00020+J\u000e\u0010)\u001a\u00020\u00172\u0006\u0010,\u001a\u00020-J\u0016\u0010.\u001a\u00020\u00172\u0006\u0010!\u001a\u00020\"2\u0006\u0010\n\u001a\u00020\u000bJ\r\u0010/\u001a\u00020\u000bH\u0000¢\u0006\u0002\b0R\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0006X\u0082.¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\u0006X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082.¢\u0006\u0002\n\u0000R\u0012\u0010\u0010\u001a\u00060\u0011R\u00020\u000fX\u0082.¢\u0006\u0002\n\u0000¨\u00061"}, d2 = {"Lcom/discord/theme/ThemeManager;", "", "<init>", "()V", "themes", "Ljava/util/EnumMap;", "Lcom/discord/theme/DiscordTheme;", "Lcom/discord/theme/DiscordThemeObject;", "theme", "themeOverride", "showSplashImage", "", "saturationFactor", "", "resources", "Landroid/content/res/Resources;", "resourceTheme", "Landroid/content/res/Resources$Theme;", "initThemeObject", "themeType", "getTheme", "getSaturationFactor", "setSaturationFactor", "", "value", "", "getThemeOverride", "isThemeLight", "isThemeDark", "setDarkThemeOverride", "setThemeOverride", "clearThemeOverride", "init", "context", "Landroid/content/Context;", "isInitialized", "setTheme", "setLightTheme", "setDarkTheme", "setMidnightTheme", "setDarkLegacyTheme", "updateSystemUi", "view", "Landroid/view/View;", "activity", "Landroid/app/Activity;", "updateWindowBackground", "shouldShowSplashImage", "shouldShowSplashImage$theme_release", "theme_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nThemeManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ThemeManager.kt\ncom/discord/theme/ThemeManager\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,131:1\n384#2,7:132\n*S KotlinDebug\n*F\n+ 1 ThemeManager.kt\ncom/discord/theme/ThemeManager\n*L\n38#1:132,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ThemeManager {
    private static Resources.Theme resourceTheme;
    private static Resources resources;
    private static DiscordTheme theme;
    private static DiscordTheme themeOverride;
    @NotNull
    public static final ThemeManager INSTANCE = new ThemeManager();
    @NotNull
    private static EnumMap<DiscordTheme, DiscordThemeObject> themes = new EnumMap<>(DiscordTheme.class);
    private static boolean showSplashImage = true;
    private static float saturationFactor = 1.0f;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[DiscordTheme.values().length];
            try {
                iArr[DiscordTheme.DARK_LEGACY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[DiscordTheme.LIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[DiscordTheme.DARK.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[DiscordTheme.MIDNIGHT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    private ThemeManager() {
    }

    private final DiscordThemeObject initThemeObject(DiscordTheme discordTheme) {
        int i10 = WhenMappings.$EnumSwitchMapping$0[discordTheme.ordinal()];
        Resources.Theme theme2 = null;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        Resources resources2 = resources;
                        if (resources2 == null) {
                            Intrinsics.throwUninitializedPropertyAccessException("resources");
                            resources2 = null;
                        }
                        Resources.Theme theme3 = resourceTheme;
                        if (theme3 == null) {
                            Intrinsics.throwUninitializedPropertyAccessException("resourceTheme");
                        } else {
                            theme2 = theme3;
                        }
                        return new MidnightTheme(resources2, theme2);
                    }
                    throw new p();
                }
                Resources resources3 = resources;
                if (resources3 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("resources");
                    resources3 = null;
                }
                Resources.Theme theme4 = resourceTheme;
                if (theme4 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("resourceTheme");
                } else {
                    theme2 = theme4;
                }
                return new DarkerTheme(resources3, theme2);
            }
            Resources resources4 = resources;
            if (resources4 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("resources");
                resources4 = null;
            }
            Resources.Theme theme5 = resourceTheme;
            if (theme5 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("resourceTheme");
            } else {
                theme2 = theme5;
            }
            return new LightTheme(resources4, theme2);
        }
        Resources resources5 = resources;
        if (resources5 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("resources");
            resources5 = null;
        }
        Resources.Theme theme6 = resourceTheme;
        if (theme6 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("resourceTheme");
        } else {
            theme2 = theme6;
        }
        return new DarkTheme(resources5, theme2);
    }

    private final void setTheme(DiscordTheme discordTheme) {
        theme = discordTheme;
    }

    public final void clearThemeOverride() {
        themeOverride = null;
    }

    public final float getSaturationFactor() {
        return saturationFactor;
    }

    @NotNull
    public final DiscordThemeObject getTheme() {
        DiscordTheme discordTheme = theme;
        if (discordTheme != null) {
            if (discordTheme == null) {
                Intrinsics.throwUninitializedPropertyAccessException("theme");
                discordTheme = null;
            }
        } else {
            discordTheme = DiscordTheme.DARK;
        }
        EnumMap<DiscordTheme, DiscordThemeObject> enumMap = themes;
        DiscordThemeObject discordThemeObject = enumMap.get(discordTheme);
        if (discordThemeObject == null) {
            discordThemeObject = INSTANCE.initThemeObject(discordTheme);
            enumMap.put((EnumMap<DiscordTheme, DiscordThemeObject>) discordTheme, (DiscordTheme) discordThemeObject);
        }
        Intrinsics.checkNotNullExpressionValue(discordThemeObject, "getOrPut(...)");
        return discordThemeObject;
    }

    public final DiscordTheme getThemeOverride() {
        return themeOverride;
    }

    public final void init(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        resources = context.getResources();
        resourceTheme = context.getTheme();
        setTheme(DiscordTheme.DARK);
    }

    public final boolean isInitialized() {
        if (theme != null) {
            return true;
        }
        return false;
    }

    public final boolean isThemeDark() {
        DiscordTheme discordTheme = theme;
        if (discordTheme == null) {
            Intrinsics.throwUninitializedPropertyAccessException("theme");
            discordTheme = null;
        }
        if (discordTheme != DiscordTheme.LIGHT) {
            return true;
        }
        return false;
    }

    public final boolean isThemeLight() {
        DiscordTheme discordTheme = theme;
        if (discordTheme == null) {
            Intrinsics.throwUninitializedPropertyAccessException("theme");
            discordTheme = null;
        }
        if (discordTheme == DiscordTheme.LIGHT) {
            return true;
        }
        return false;
    }

    public final void setDarkLegacyTheme() {
        setTheme(DiscordTheme.DARK_LEGACY);
    }

    public final void setDarkTheme() {
        setTheme(DiscordTheme.DARK);
    }

    public final void setDarkThemeOverride() {
        setThemeOverride(DiscordTheme.DARK);
    }

    public final void setLightTheme() {
        setTheme(DiscordTheme.LIGHT);
    }

    public final void setMidnightTheme() {
        setTheme(DiscordTheme.MIDNIGHT);
    }

    public final void setSaturationFactor(double d10) {
        saturationFactor = (float) d10;
        themes.clear();
    }

    public final void setThemeOverride(DiscordTheme discordTheme) {
        themeOverride = discordTheme;
    }

    public final boolean shouldShowSplashImage$theme_release() {
        return showSplashImage;
    }

    public final void updateSystemUi(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        UpdateSystemUiKt.updateSystemUi(view);
    }

    public final void updateWindowBackground(@NotNull Context context, boolean z10) {
        Activity activity;
        ReactContext reactContext;
        Intrinsics.checkNotNullParameter(context, "context");
        showSplashImage = z10;
        Activity activity2 = null;
        if (context instanceof Activity) {
            activity = (Activity) context;
        } else {
            activity = null;
        }
        if (activity == null) {
            if (context instanceof ReactContext) {
                reactContext = (ReactContext) context;
            } else {
                reactContext = null;
            }
            if (reactContext != null) {
                activity2 = reactContext.getCurrentActivity();
            }
        } else {
            activity2 = activity;
        }
        if (activity2 != null) {
            ActivityThemeUtils.INSTANCE.updateWindowBackground$theme_release(activity2);
        }
    }

    public final void updateSystemUi(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        UpdateSystemUiKt.updateSystemUi(activity);
    }
}
