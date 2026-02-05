package com.discord.browser_manager;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import com.discord.chrome_custom_tabs.CustomTabs;
import com.discord.misc.utilities.activity.ActivityUtilities;
import com.discord.theme.R;
import com.discord.theme.utils.ColorUtilsKt;
import java.util.List;
import java.util.function.Function;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.sequences.k;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0005\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J7\u0010\r\u001a\u00020\u000b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u00062\u0016\u0010\f\u001a\u0012\u0012\b\u0012\u00060\tj\u0002`\n\u0012\u0004\u0012\u00020\u000b0\bH\u0002¢\u0006\u0004\b\r\u0010\u000eJA\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u00062\u0016\u0010\f\u001a\u0012\u0012\b\u0012\u00060\tj\u0002`\n\u0012\u0004\u0012\u00020\u000b0\b2\b\b\u0002\u0010\u0010\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J5\u0010\u0015\u001a\u00020\u000b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0014\u001a\u00020\u00132\u0016\u0010\f\u001a\u0012\u0012\b\u0012\u00060\tj\u0002`\n\u0012\u0004\u0012\u00020\u000b0\b¢\u0006\u0004\b\u0015\u0010\u0016J5\u0010\u0017\u001a\u00020\u000b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0014\u001a\u00020\u00132\u0016\u0010\f\u001a\u0012\u0012\b\u0012\u00060\tj\u0002`\n\u0012\u0004\u0012\u00020\u000b0\b¢\u0006\u0004\b\u0017\u0010\u0016¨\u0006\u0018"}, d2 = {"Lcom/discord/browser_manager/BrowserManager;", "", "<init>", "()V", "Landroid/content/Context;", "context", "Landroid/net/Uri;", "uri", "Lkotlin/Function1;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "", "onFailure", "openUrlWithCustomTabs", "(Landroid/content/Context;Landroid/net/Uri;Lkotlin/jvm/functions/Function1;)V", "", "forceExternal", "openUrlExternally", "(Landroid/content/Context;Landroid/net/Uri;Lkotlin/jvm/functions/Function1;Z)V", "", "url", "tryOpenUrlWithCustomTabs", "(Landroid/content/Context;Ljava/lang/String;Lkotlin/jvm/functions/Function1;)V", "tryOpenUrlExternally", "browser_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBrowserManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BrowserManager.kt\ncom/discord/browser_manager/BrowserManager\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,88:1\n29#2:89\n29#2:90\n*S KotlinDebug\n*F\n+ 1 BrowserManager.kt\ncom/discord/browser_manager/BrowserManager\n*L\n22#1:89\n41#1:90\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BrowserManager {
    @NotNull
    public static final BrowserManager INSTANCE = new BrowserManager();

    private BrowserManager() {
    }

    private final void openUrlExternally(final Context context, Uri uri, final Function1<? super Exception, Unit> function1, boolean z10) {
        Intent addFlags = new Intent("android.intent.action.VIEW", uri).addFlags(268435456);
        Intrinsics.checkNotNullExpressionValue(addFlags, "addFlags(...)");
        if (z10) {
            List<ResolveInfo> queryIntentActivities = context.getPackageManager().queryIntentActivities(addFlags, 0);
            Intrinsics.checkNotNullExpressionValue(queryIntentActivities, "queryIntentActivities(...)");
            addFlags.setPackage((String) k.K(k.F(k.S(CollectionsKt.b0(queryIntentActivities), new Function1() { // from class: com.discord.browser_manager.a
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    String openUrlExternally$lambda$1;
                    openUrlExternally$lambda$1 = BrowserManager.openUrlExternally$lambda$1((ResolveInfo) obj);
                    return openUrlExternally$lambda$1;
                }
            }), new Function1() { // from class: com.discord.browser_manager.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    boolean openUrlExternally$lambda$2;
                    openUrlExternally$lambda$2 = BrowserManager.openUrlExternally$lambda$2(context, (String) obj);
                    return Boolean.valueOf(openUrlExternally$lambda$2);
                }
            })));
        }
        ActivityUtilities.startActivityAsyncWithFuture$default(ActivityUtilities.INSTANCE, context, addFlags, null, 4, null).exceptionally(new Function() { // from class: com.discord.browser_manager.c
            @Override // java.util.function.Function
            public final Object apply(Object obj) {
                Unit openUrlExternally$lambda$3;
                openUrlExternally$lambda$3 = BrowserManager.openUrlExternally$lambda$3(Function1.this, (Throwable) obj);
                return openUrlExternally$lambda$3;
            }
        });
    }

    static /* synthetic */ void openUrlExternally$default(BrowserManager browserManager, Context context, Uri uri, Function1 function1, boolean z10, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            z10 = true;
        }
        browserManager.openUrlExternally(context, uri, function1, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String openUrlExternally$lambda$1(ResolveInfo resolveInfo) {
        return resolveInfo.activityInfo.packageName;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean openUrlExternally$lambda$2(Context context, String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return !Intrinsics.areEqual(it, context.getPackageName());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit openUrlExternally$lambda$3(Function1 function1, Throwable th2) {
        if (!(th2 instanceof Error)) {
            function1.invoke(new Exception(th2));
            return Unit.f31988a;
        }
        throw th2;
    }

    private final void openUrlWithCustomTabs(Context context, Uri uri, Function1<? super Exception, Unit> function1) {
        CustomTabs.openUrlWithCustomTabs$default(CustomTabs.INSTANCE, context, uri, false, ColorUtilsKt.getThemeColor(context, R.color.white, R.color.primary_600), null, null, null, null, function1, 244, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit tryOpenUrlWithCustomTabs$lambda$0(Context context, String str, Function1 function1, Exception it) {
        Intrinsics.checkNotNullParameter(it, "it");
        INSTANCE.tryOpenUrlExternally(context, str, function1);
        return Unit.f31988a;
    }

    public final void tryOpenUrlExternally(@NotNull Context context, @NotNull String url, @NotNull Function1<? super Exception, Unit> onFailure) {
        Function1<? super Exception, Unit> function1;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(onFailure, "onFailure");
        try {
            function1 = onFailure;
            try {
                openUrlExternally$default(this, context, Uri.parse(url), function1, false, 8, null);
            } catch (Exception e10) {
                e = e10;
                function1.invoke(e);
            }
        } catch (Exception e11) {
            e = e11;
            function1 = onFailure;
        }
    }

    public final void tryOpenUrlWithCustomTabs(@NotNull final Context context, @NotNull final String url, @NotNull final Function1<? super Exception, Unit> onFailure) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(onFailure, "onFailure");
        try {
            openUrlWithCustomTabs(context, Uri.parse(url), new Function1() { // from class: com.discord.browser_manager.d
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit tryOpenUrlWithCustomTabs$lambda$0;
                    tryOpenUrlWithCustomTabs$lambda$0 = BrowserManager.tryOpenUrlWithCustomTabs$lambda$0(context, url, onFailure, (Exception) obj);
                    return tryOpenUrlWithCustomTabs$lambda$0;
                }
            });
        } catch (Exception unused) {
            tryOpenUrlExternally(context, url, onFailure);
        }
    }
}
