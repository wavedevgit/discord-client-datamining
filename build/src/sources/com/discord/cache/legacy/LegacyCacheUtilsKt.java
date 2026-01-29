package com.discord.cache.legacy;

import android.content.Context;
import android.content.SharedPreferences;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0012\n\u0000\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\f\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002\u001a\f\u0010\u0003\u001a\u00020\u0004*\u00020\u0002H\u0002¨\u0006\u0005"}, d2 = {"getLegacyAuthToken", "", "Landroid/content/Context;", "getLegacySharedPrefs", "Landroid/content/SharedPreferences;", "cache_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LegacyCacheUtilsKt {
    public static final String getLegacyAuthToken(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        return getLegacySharedPrefs(context).getString("STORE_AUTHED_TOKEN", null);
    }

    private static final SharedPreferences getLegacySharedPrefs(Context context) {
        String packageName = context.getPackageName();
        SharedPreferences sharedPreferences = context.getSharedPreferences(packageName + "_preferences", 0);
        Intrinsics.checkNotNullExpressionValue(sharedPreferences, "getSharedPreferences(...)");
        return sharedPreferences;
    }
}
