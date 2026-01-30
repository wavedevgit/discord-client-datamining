package com.discord.theme;

import android.app.Activity;
import com.discord.codegen.NativeThemeModuleSpec;
import com.discord.theme.utils.ActivityThemeUtils;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0012\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0016J\u0010\u0010\f\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\u000eH\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/discord/theme/ThemeModule;", "Lcom/discord/codegen/NativeThemeModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "updateTheme", "", "theme", "", "updateSaturation", "saturationFactor", "", "theme_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ThemeModule extends NativeThemeModuleSpec {
    @NotNull
    private final ReactApplicationContext reactContext;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ThemeModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void updateTheme$lambda$0(ThemeModule themeModule) {
        Activity currentActivity = themeModule.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            ActivityThemeUtils.INSTANCE.updateActivityTheming$theme_release(currentActivity);
        }
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @Override // com.discord.codegen.NativeThemeModuleSpec
    public void updateSaturation(double d10) {
        ThemeManager.INSTANCE.setSaturationFactor(d10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:16:0x003a, code lost:
        if (r4.equals("amoled") != false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x0043, code lost:
        if (r4.equals("midnight") != false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x0045, code lost:
        com.discord.theme.ThemeManager.INSTANCE.setMidnightTheme();
     */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0052  */
    /* JADX WARN: Removed duplicated region for block: B:27:? A[RETURN, SYNTHETIC] */
    @Override // com.discord.codegen.NativeThemeModuleSpec
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void updateTheme(java.lang.String r4) {
        /*
            r3 = this;
            if (r4 == 0) goto L5b
            int r0 = r4.hashCode()
            switch(r0) {
                case -1640863024: goto L3d;
                case -1413862040: goto L34;
                case -1338968413: goto L26;
                case 3075958: goto L18;
                case 102970646: goto La;
                default: goto L9;
            }
        L9:
            goto L5b
        La:
            java.lang.String r0 = "light"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L5b
            com.discord.theme.ThemeManager r4 = com.discord.theme.ThemeManager.INSTANCE
            r4.setLightTheme()
            goto L4a
        L18:
            java.lang.String r0 = "dark"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L5b
            com.discord.theme.ThemeManager r4 = com.discord.theme.ThemeManager.INSTANCE
            r4.setDarkLegacyTheme()
            goto L4a
        L26:
            java.lang.String r0 = "darker"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L5b
            com.discord.theme.ThemeManager r4 = com.discord.theme.ThemeManager.INSTANCE
            r4.setDarkTheme()
            goto L4a
        L34:
            java.lang.String r0 = "amoled"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L5b
            goto L45
        L3d:
            java.lang.String r0 = "midnight"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L5b
        L45:
            com.discord.theme.ThemeManager r4 = com.discord.theme.ThemeManager.INSTANCE
            r4.setMidnightTheme()
        L4a:
            com.facebook.react.bridge.ReactApplicationContext r4 = r3.reactContext
            android.app.Activity r4 = r4.getCurrentActivity()
            if (r4 == 0) goto L5a
            g8.wc r0 = new g8.wc
            r0.<init>()
            r4.runOnUiThread(r0)
        L5a:
            return
        L5b:
            java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Invalid theme: "
            r1.append(r2)
            r1.append(r4)
            java.lang.String r4 = r1.toString()
            r0.<init>(r4)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.theme.ThemeModule.updateTheme(java.lang.String):void");
    }
}
