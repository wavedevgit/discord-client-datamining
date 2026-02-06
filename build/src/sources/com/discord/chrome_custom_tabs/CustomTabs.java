package com.discord.chrome_custom_tabs;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.net.Uri;
import androidx.browser.customtabs.a;
import androidx.browser.customtabs.b;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003Jy\u0010\u0015\u001a\u00020\u00132\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u00062\b\b\u0002\u0010\t\u001a\u00020\b2\b\b\u0001\u0010\u000b\u001a\u00020\n2\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\n2\n\b\u0003\u0010\r\u001a\u0004\u0018\u00010\n2\n\b\u0003\u0010\u000e\u001a\u0004\u0018\u00010\n2\n\b\u0003\u0010\u000f\u001a\u0004\u0018\u00010\n2\u0016\u0010\u0014\u001a\u0012\u0012\b\u0012\u00060\u0011j\u0002`\u0012\u0012\u0004\u0012\u00020\u00130\u0010¢\u0006\u0004\b\u0015\u0010\u0016¨\u0006\u0017"}, d2 = {"Lcom/discord/chrome_custom_tabs/CustomTabs;", "", "<init>", "()V", "Landroid/content/Context;", "context", "Landroid/net/Uri;", "uri", "", "showTitle", "", "toolbarColor", "animShowEnterResId", "animShowExitResId", "animHideEnterResId", "animHideExitResId", "Lkotlin/Function1;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "", "onFailure", "openUrlWithCustomTabs", "(Landroid/content/Context;Landroid/net/Uri;ZILjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Lkotlin/jvm/functions/Function1;)V", "chrome_custom_tabs_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CustomTabs {
    @NotNull
    public static final CustomTabs INSTANCE = new CustomTabs();

    private CustomTabs() {
    }

    public static /* synthetic */ void openUrlWithCustomTabs$default(CustomTabs customTabs, Context context, Uri uri, boolean z10, int i10, Integer num, Integer num2, Integer num3, Integer num4, Function1 function1, int i11, Object obj) {
        Integer num5;
        Integer num6;
        Integer num7;
        Integer num8;
        CustomTabs customTabs2;
        Context context2;
        Uri uri2;
        int i12;
        Function1 function12;
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        boolean z11 = z10;
        if ((i11 & 16) != 0) {
            num5 = null;
        } else {
            num5 = num;
        }
        if ((i11 & 32) != 0) {
            num6 = null;
        } else {
            num6 = num2;
        }
        if ((i11 & 64) != 0) {
            num7 = null;
        } else {
            num7 = num3;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            num8 = null;
            customTabs2 = customTabs;
            uri2 = uri;
            i12 = i10;
            function12 = function1;
            context2 = context;
        } else {
            num8 = num4;
            customTabs2 = customTabs;
            context2 = context;
            uri2 = uri;
            i12 = i10;
            function12 = function1;
        }
        customTabs2.openUrlWithCustomTabs(context2, uri2, z11, i12, num5, num6, num7, num8, function12);
    }

    public final void openUrlWithCustomTabs(@NotNull Context context, @NotNull Uri uri, boolean z10, int i10, Integer num, Integer num2, Integer num3, Integer num4, @NotNull Function1<? super Exception, Unit> onFailure) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(onFailure, "onFailure");
        if (CustomTabsPackages.INSTANCE.getCustomTabsDefaultPackage(context) != null) {
            a a10 = new a.C0021a().b(i10).d(i10).c(i10).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            b.d g10 = new b.d().c(a10).g(z10);
            if (num != null && num2 != null) {
                g10.h(context, num.intValue(), num2.intValue());
            }
            if (num3 != null && num4 != null) {
                g10.d(context, num3.intValue(), num4.intValue());
            }
            b a11 = g10.a();
            Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
            try {
                a11.f2335a.setData(uri);
                a11.a(context, uri);
                return;
            } catch (ActivityNotFoundException e10) {
                onFailure.invoke(e10);
                return;
            }
        }
        onFailure.invoke(new IllegalStateException("Unable to find custom tabs package."));
    }
}
