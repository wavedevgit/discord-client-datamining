package com.discord.react_resource_cache;

import android.content.Context;
import android.content.SharedPreferences;
import java.lang.Enum;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0010\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\b\u0004\b&\u0018\u0000*\f\b\u0000\u0010\u0001*\u0006\u0012\u0002\b\u00030\u00022\u00020\u0003B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\"\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\f2\u0012\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u00070\u0015J\u001b\u0010\u0016\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\f2\u0006\u0010\u0017\u001a\u00028\u0000¢\u0006\u0002\u0010\u0018R\u0012\u0010\u0006\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\b\u0010\tR\u0018\u0010\n\u001a\u00020\u000b*\u00020\f8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\u000eR\u001a\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u00070\u0010X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0019"}, d2 = {"Lcom/discord/react_resource_cache/ReactResourceCache;", "T", "", "", "<init>", "()V", "cacheKey", "", "getCacheKey", "()Ljava/lang/String;", "cache", "Landroid/content/SharedPreferences;", "Landroid/content/Context;", "getCache", "(Landroid/content/Context;)Landroid/content/SharedPreferences;", "reactResources", "", "set", "", "context", "newReactResources", "", "get", "reactResource", "(Landroid/content/Context;Ljava/lang/Enum;)Ljava/lang/String;", "react_resource_cache_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactResourceCache.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactResourceCache.kt\ncom/discord/react_resource_cache/ReactResourceCache\n+ 2 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n+ 3 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,34:1\n40#2,7:35\n47#2,6:44\n216#3,2:42\n*S KotlinDebug\n*F\n+ 1 ReactResourceCache.kt\ncom/discord/react_resource_cache/ReactResourceCache\n*L\n20#1:35,7\n20#1:44,6\n23#1:42,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ReactResourceCache<T extends Enum<?>> {
    @NotNull
    private Map<String, String> reactResources = new LinkedHashMap();

    private final SharedPreferences getCache(Context context) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(getCacheKey(), 0);
        Intrinsics.checkNotNullExpressionValue(sharedPreferences, "getSharedPreferences(...)");
        return sharedPreferences;
    }

    @NotNull
    public final String get(@NotNull Context context, @NotNull T reactResource) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(reactResource, "reactResource");
        String str = this.reactResources.get(reactResource.name());
        if (str == null) {
            String str2 = null;
            String string = getCache(context).getString(reactResource.name(), null);
            if (string != null) {
                this.reactResources.put(reactResource.name(), string);
                str2 = string;
            }
            if (str2 != null) {
                return str2;
            }
            String name = reactResource.name();
            throw new IllegalAccessException("Unable to access " + name + " as it has not yet been provided.");
        }
        return str;
    }

    @NotNull
    public abstract String getCacheKey();

    public final void set(@NotNull Context context, @NotNull Map<String, String> newReactResources) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(newReactResources, "newReactResources");
        SharedPreferences.Editor edit = getCache(context).edit();
        edit.clear();
        for (Map.Entry<String, String> entry : newReactResources.entrySet()) {
            edit.putString(entry.getKey(), entry.getValue());
        }
        this.reactResources = new HashMap(newReactResources);
        edit.apply();
    }
}
