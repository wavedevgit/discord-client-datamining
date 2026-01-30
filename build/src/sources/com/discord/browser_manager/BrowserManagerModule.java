package com.discord.browser_manager;

import android.content.Context;
import com.discord.cache.Cache;
import com.discord.codegen.NativeBrowserManagerModuleSpec;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import ir.v;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u0000 \u00152\u00020\u0001:\u0001\u0015B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0014\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000b0\tH\u0014J\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fH\u0016J\u0018\u0010\u0010\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\n2\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\u0018\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\n2\u0006\u0010\u0012\u001a\u00020\u0013H\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0016"}, d2 = {"Lcom/discord/browser_manager/BrowserManagerModule;", "Lcom/discord/codegen/NativeBrowserManagerModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "getTypedExportedConstants", "", "", "", "selectBrowser", "", "browser", "", "openInChromeURL", "url", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "openInAppURL", "Companion", "browser_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BrowserManagerModule extends NativeBrowserManagerModuleSpec {
    @NotNull
    private static final String BROWSER_CACHE_KEY = "SELECTED_BROWSER";
    private static final int BROWSER_CHROME = 2;
    private static final int BROWSER_IN_APP = 1;
    private static final int BROWSER_SAFARI = 0;
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private final ReactApplicationContext reactContext;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/browser_manager/BrowserManagerModule$Companion;", "", "<init>", "()V", "BROWSER_CACHE_KEY", "", "BROWSER_SAFARI", "", "BROWSER_IN_APP", "BROWSER_CHROME", "browser_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BrowserManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit openInAppURL$lambda$1(Promise promise, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(null, e10.getMessage(), e10, null);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit openInChromeURL$lambda$0(Promise promise, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(null, e10.getMessage(), e10, null);
        return Unit.f33298a;
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @Override // com.discord.codegen.NativeBrowserManagerModuleSpec
    @NotNull
    protected Map<String, Object> getTypedExportedConstants() {
        int i10;
        Integer intOrNull;
        String item = Cache.Companion.get().getItem(BROWSER_CACHE_KEY);
        if (item != null && (intOrNull = StringsKt.toIntOrNull(item)) != null) {
            i10 = intOrNull.intValue();
        } else {
            i10 = 1;
        }
        return o0.n(v.a("selectedBrowser", Integer.valueOf(i10)), v.a("isChromeInstalled", Boolean.TRUE));
    }

    @Override // com.discord.codegen.NativeBrowserManagerModuleSpec
    public void openInAppURL(@NotNull String url, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(promise, "promise");
        BrowserManager browserManager = BrowserManager.INSTANCE;
        Context currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity == null) {
            currentActivity = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(currentActivity, "getReactApplicationContext(...)");
        }
        browserManager.tryOpenUrlWithCustomTabs(currentActivity, url, new Function1() { // from class: com.discord.browser_manager.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit openInAppURL$lambda$1;
                openInAppURL$lambda$1 = BrowserManagerModule.openInAppURL$lambda$1(Promise.this, (Exception) obj);
                return openInAppURL$lambda$1;
            }
        });
    }

    @Override // com.discord.codegen.NativeBrowserManagerModuleSpec
    public void openInChromeURL(@NotNull String url, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(promise, "promise");
        BrowserManager browserManager = BrowserManager.INSTANCE;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        browserManager.tryOpenUrlExternally(reactApplicationContext, url, new Function1() { // from class: com.discord.browser_manager.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit openInChromeURL$lambda$0;
                openInChromeURL$lambda$0 = BrowserManagerModule.openInChromeURL$lambda$0(Promise.this, (Exception) obj);
                return openInChromeURL$lambda$0;
            }
        });
    }

    @Override // com.discord.codegen.NativeBrowserManagerModuleSpec
    public void selectBrowser(double d10) {
        int i10 = (int) d10;
        if (i10 != 0) {
            if (i10 != 1 && i10 != 2) {
                throw new IllegalArgumentException("Unknown browser id provided: " + d10);
            }
            Cache.Companion.get().setItem(BROWSER_CACHE_KEY, String.valueOf(d10));
            return;
        }
        Cache.Companion.get().setItem(BROWSER_CACHE_KEY, "1");
    }
}
