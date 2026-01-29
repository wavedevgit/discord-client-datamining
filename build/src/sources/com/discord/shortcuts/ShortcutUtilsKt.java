package com.discord.shortcuts;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Build;
import androidx.core.app.NotificationCompat;
import androidx.core.app.Person;
import androidx.core.content.c;
import androidx.core.content.pm.ShortcutInfoCompat;
import androidx.core.content.pm.b;
import androidx.core.graphics.drawable.IconCompat;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\r\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\"\n\u0000\u001a\u001a\u0010\u0000\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005\u001aL\u0010\u0006\u001a\u00020\u0005*\u00020\u00032\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\n2\b\u0010\f\u001a\u0004\u0018\u00010\r2\f\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00100\u000f2\u0006\u0010\u0011\u001a\u00020\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u0014\u001a\u000e\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\b0\u0016H\u0002¨\u0006\u0017"}, d2 = {"addShortcut", "Landroidx/core/app/NotificationCompat$Builder;", "context", "Landroid/content/Context;", "shortcutInfo", "Landroidx/core/content/pm/ShortcutInfoCompat;", "createShortcut", StackTraceHelper.ID_KEY, "", "label", "", "longLabel", "icon", "Landroid/graphics/Bitmap;", "persons", "", "Landroidx/core/app/Person;", "intent", "Landroid/content/Intent;", "rank", "", "getShareCategories", "", "shortcuts_androidRelease"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nShortcutUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ShortcutUtils.kt\ncom/discord/shortcuts/ShortcutUtilsKt\n+ 2 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,67:1\n37#2:68\n36#2,3:69\n*S KotlinDebug\n*F\n+ 1 ShortcutUtils.kt\ncom/discord/shortcuts/ShortcutUtilsKt\n*L\n53#1:68\n53#1:69,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ShortcutUtilsKt {
    @NotNull
    public static final NotificationCompat.Builder addShortcut(@NotNull NotificationCompat.Builder builder, @NotNull Context context, @NotNull ShortcutInfoCompat shortcutInfo) {
        Intrinsics.checkNotNullParameter(builder, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(shortcutInfo, "shortcutInfo");
        builder.R(shortcutInfo.g());
        builder.I(new c(shortcutInfo.g()));
        b.g(context, shortcutInfo);
        return builder;
    }

    @NotNull
    public static final ShortcutInfoCompat createShortcut(@NotNull Context context, @NotNull String id2, @NotNull CharSequence label, @NotNull CharSequence longLabel, Bitmap bitmap, @NotNull List<? extends Person> persons, @NotNull Intent intent, int i10) {
        IconCompat iconCompat;
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(longLabel, "longLabel");
        Intrinsics.checkNotNullParameter(persons, "persons");
        Intrinsics.checkNotNullParameter(intent, "intent");
        ShortcutInfoCompat.b i11 = new ShortcutInfoCompat.b(context, id2).h(new c(id2)).m(label).i(longLabel);
        if (bitmap != null) {
            iconCompat = IconCompat.h(bitmap);
        } else {
            iconCompat = null;
        }
        ShortcutInfoCompat a10 = i11.e(iconCompat).f(intent).l(i10).j(true).c(getShareCategories()).k((Person[]) persons.toArray(new Person[0])).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        return a10;
    }

    public static /* synthetic */ ShortcutInfoCompat createShortcut$default(Context context, String str, CharSequence charSequence, CharSequence charSequence2, Bitmap bitmap, List list, Intent intent, int i10, int i11, Object obj) {
        int i12;
        if ((i11 & 64) != 0) {
            i12 = 0;
        } else {
            i12 = i10;
        }
        return createShortcut(context, str, charSequence, charSequence2, bitmap, list, intent, i12);
    }

    private static final Set<String> getShareCategories() {
        if (Build.VERSION.SDK_INT < 25) {
            return x0.c(BuildConfig.SHARE_CATEGORY);
        }
        return x0.i(BuildConfig.SHARE_CATEGORY, "android.shortcut.conversation");
    }
}
