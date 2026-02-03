package com.discord.cache;

import android.content.Context;
import android.content.SharedPreferences;
import com.discord.app_database.AppDatabase;
import com.discord.cache.Cache;
import com.discord.tti_manager.TTIMetrics;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.ViewProps;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import lr.l;
import org.jetbrains.annotations.NotNull;
import pr.a;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\n\u0018\u0000 #2\u00020\u0001:\u0001#B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015J\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u0018\u001a\u00020\u0017J\u0016\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u001b\u001a\u00020\u0017J\u000e\u0010\u001c\u001a\u00020\u001a2\u0006\u0010\u0018\u001a\u00020\u0017J\u0006\u0010\u001d\u001a\u00020\u001aJ\u0012\u0010\u001e\u001a\u0004\u0018\u00010\u00172\b\b\u0002\u0010\u001f\u001a\u00020\u0007J\u0006\u0010 \u001a\u00020\u0007J\u000e\u0010!\u001a\u00020\u001a2\u0006\u0010\"\u001a\u00020\u0007R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R#\u0010\b\u001a\n \n*\u0004\u0018\u00010\t0\t8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\r\u0010\u000e\u001a\u0004\b\u000b\u0010\fR#\u0010\u000f\u001a\n \n*\u0004\u0018\u00010\t0\t8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0011\u0010\u000e\u001a\u0004\b\u0010\u0010\f¨\u0006$"}, d2 = {"Lcom/discord/cache/Cache;", "", "reactContext", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "sharedPrefsLoaded", "", "sharedPrefs", "Landroid/content/SharedPreferences;", "kotlin.jvm.PlatformType", "getSharedPrefs", "()Landroid/content/SharedPreferences;", "sharedPrefs$delegate", "Lkotlin/Lazy;", "fastCacheSharedPrefs", "getFastCacheSharedPrefs", "fastCacheSharedPrefs$delegate", "refresh", "Lcom/facebook/react/bridge/WritableMap;", "exclude", "Lcom/facebook/react/bridge/ReadableArray;", "getItem", "", "key", "setItem", "", "value", "removeItem", "clear", "getToken", "sanitized", "getUseChannelObfuscation", "setUseChannelObfuscation", ViewProps.ENABLED, "Companion", "cache_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCache.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Cache.kt\ncom/discord/cache/Cache\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n+ 3 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,147:1\n216#2,2:148\n40#3,7:150\n47#3,6:159\n40#3,13:165\n40#3,13:178\n40#3,13:191\n40#3,13:204\n40#3,13:217\n40#3,13:230\n1869#4,2:157\n*S KotlinDebug\n*F\n+ 1 Cache.kt\ncom/discord/cache/Cache\n*L\n56#1:148,2\n71#1:150,7\n71#1:159,6\n88#1:165,13\n93#1:178,13\n100#1:191,13\n105#1:204,13\n112#1:217,13\n115#1:230,13\n73#1:157,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Cache {
    @NotNull
    private static final String CACHE_STORE_NAME = "CacheStore";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final HashSet<String> FAST_CACHE_KEYS = x0.e("_clientStateKey", "_userIdKey", AppDatabase.LAST_DATABASE_USER_ID_PREFERENCES_KEY, "token", "_useZstd", "_useChannelObfuscation");
    private static Cache cacheInstance;
    @NotNull
    private final Lazy fastCacheSharedPrefs$delegate;
    @NotNull
    private final Lazy sharedPrefs$delegate;
    private boolean sharedPrefsLoaded;

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u000b\u001a\u00020\nJ\u000e\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u001e\u0010\u0006\u001a\u0012\u0012\u0004\u0012\u00020\u00050\u0007j\b\u0012\u0004\u0012\u00020\u0005`\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082.¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/cache/Cache$Companion;", "", "<init>", "()V", "CACHE_STORE_NAME", "", "FAST_CACHE_KEYS", "Ljava/util/HashSet;", "Lkotlin/collections/HashSet;", "cacheInstance", "Lcom/discord/cache/Cache;", "get", "quickInitCache", "", "applicationContext", "Landroid/content/Context;", "cache_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Cache get() {
            Cache cache = Cache.cacheInstance;
            if (cache == null) {
                Intrinsics.throwUninitializedPropertyAccessException("cacheInstance");
                return null;
            }
            return cache;
        }

        public final void quickInitCache(@NotNull Context applicationContext) {
            Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
            Cache.cacheInstance = new Cache(applicationContext);
        }

        private Companion() {
        }
    }

    public Cache(@NotNull final Context reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.sharedPrefs$delegate = l.a(new Function0() { // from class: i6.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SharedPreferences sharedPreferences;
                sharedPreferences = reactContext.getSharedPreferences(Cache.CACHE_STORE_NAME, 0);
                return sharedPreferences;
            }
        });
        this.fastCacheSharedPrefs$delegate = l.a(new Function0() { // from class: i6.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SharedPreferences sharedPreferences;
                sharedPreferences = reactContext.getSharedPreferences("FastCacheStore", 0);
                return sharedPreferences;
            }
        });
        a.b(false, false, null, null, 0, new Function0() { // from class: i6.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit _init_$lambda$2;
                _init_$lambda$2 = Cache._init_$lambda$2(Cache.this);
                return _init_$lambda$2;
            }
        }, 31, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$2(Cache cache) {
        TTIMetrics tTIMetrics = TTIMetrics.INSTANCE;
        TTIMetrics.record$default(tTIMetrics, "CacheStorage Init Start", 0L, null, false, 14, null);
        cache.getSharedPrefs().getString("hydrate", null);
        cache.sharedPrefsLoaded = true;
        TTIMetrics.record$default(tTIMetrics, "CacheStorage Init End", 0L, null, false, 14, null);
        return Unit.f32464a;
    }

    private final SharedPreferences getFastCacheSharedPrefs() {
        return (SharedPreferences) this.fastCacheSharedPrefs$delegate.getValue();
    }

    private final SharedPreferences getSharedPrefs() {
        return (SharedPreferences) this.sharedPrefs$delegate.getValue();
    }

    public static /* synthetic */ String getToken$default(Cache cache, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        return cache.getToken(z10);
    }

    public final void clear() {
        SharedPreferences sharedPrefs = getSharedPrefs();
        Intrinsics.checkNotNullExpressionValue(sharedPrefs, "<get-sharedPrefs>(...)");
        SharedPreferences.Editor edit = sharedPrefs.edit();
        edit.clear();
        edit.apply();
        SharedPreferences fastCacheSharedPrefs = getFastCacheSharedPrefs();
        Intrinsics.checkNotNullExpressionValue(fastCacheSharedPrefs, "<get-fastCacheSharedPrefs>(...)");
        SharedPreferences.Editor edit2 = fastCacheSharedPrefs.edit();
        edit2.clear();
        edit2.apply();
    }

    public final String getItem(@NotNull String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        HashSet<String> hashSet = FAST_CACHE_KEYS;
        if (hashSet.contains(key)) {
            if (!getFastCacheSharedPrefs().getBoolean("initialized", false)) {
                SharedPreferences fastCacheSharedPrefs = getFastCacheSharedPrefs();
                Intrinsics.checkNotNullExpressionValue(fastCacheSharedPrefs, "<get-fastCacheSharedPrefs>(...)");
                SharedPreferences.Editor edit = fastCacheSharedPrefs.edit();
                edit.putBoolean("initialized", true);
                for (String str : hashSet) {
                    edit.putString(str, getSharedPrefs().getString(str, null));
                }
                edit.apply();
            }
            return getFastCacheSharedPrefs().getString(key, null);
        }
        if (!this.sharedPrefsLoaded) {
            TTIMetrics tTIMetrics = TTIMetrics.INSTANCE;
            TTIMetrics.record$default(tTIMetrics, "WARNING: Cache accessed before parsed " + key, 0L, null, false, 14, null);
        }
        return getSharedPrefs().getString(key, null);
    }

    public final String getToken(boolean z10) {
        if (z10) {
            String item = getItem("token");
            if (item != null) {
                return StringsKt.E0(item, "\"");
            }
            return null;
        }
        return getItem("token");
    }

    public final boolean getUseChannelObfuscation() {
        String item = getItem("_useChannelObfuscation");
        if (item != null) {
            return Boolean.parseBoolean(item);
        }
        return false;
    }

    @NotNull
    public final WritableMap refresh(@NotNull ReadableArray exclude) {
        Intrinsics.checkNotNullParameter(exclude, "exclude");
        TTIMetrics.record$default(TTIMetrics.INSTANCE, "Storage.refresh() Start", 0L, null, false, 14, null);
        try {
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            Set l12 = CollectionsKt.l1(exclude.toArrayList());
            Map<String, ?> all = getSharedPrefs().getAll();
            Intrinsics.checkNotNullExpressionValue(all, "getAll(...)");
            for (Map.Entry<String, ?> entry : all.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();
                if (!l12.contains(key)) {
                    Intrinsics.checkNotNull(key);
                    Intrinsics.checkNotNull(value, "null cannot be cast to non-null type kotlin.String");
                    writableNativeMap.putString(key, (String) value);
                }
            }
            return writableNativeMap;
        } finally {
            TTIMetrics.record$default(TTIMetrics.INSTANCE, "Storage.refresh() End", 0L, null, false, 14, null);
        }
    }

    public final void removeItem(@NotNull String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        SharedPreferences sharedPrefs = getSharedPrefs();
        Intrinsics.checkNotNullExpressionValue(sharedPrefs, "<get-sharedPrefs>(...)");
        SharedPreferences.Editor edit = sharedPrefs.edit();
        edit.remove(key);
        edit.apply();
        if (FAST_CACHE_KEYS.contains(key)) {
            SharedPreferences fastCacheSharedPrefs = getFastCacheSharedPrefs();
            Intrinsics.checkNotNullExpressionValue(fastCacheSharedPrefs, "<get-fastCacheSharedPrefs>(...)");
            SharedPreferences.Editor edit2 = fastCacheSharedPrefs.edit();
            edit2.remove(key);
            edit2.apply();
        }
    }

    public final void setItem(@NotNull String key, @NotNull String value) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        SharedPreferences sharedPrefs = getSharedPrefs();
        Intrinsics.checkNotNullExpressionValue(sharedPrefs, "<get-sharedPrefs>(...)");
        SharedPreferences.Editor edit = sharedPrefs.edit();
        edit.putString(key, value);
        edit.apply();
        if (FAST_CACHE_KEYS.contains(key)) {
            SharedPreferences fastCacheSharedPrefs = getFastCacheSharedPrefs();
            Intrinsics.checkNotNullExpressionValue(fastCacheSharedPrefs, "<get-fastCacheSharedPrefs>(...)");
            SharedPreferences.Editor edit2 = fastCacheSharedPrefs.edit();
            edit2.putString(key, value);
            edit2.apply();
        }
    }

    public final void setUseChannelObfuscation(boolean z10) {
        setItem("_useChannelObfuscation", String.valueOf(z10));
    }
}
