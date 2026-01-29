package com.discord.media_player;

import android.content.Context;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
import com.google.android.exoplayer2.upstream.cache.SimpleCache;
import java.io.File;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import le.s;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \b2\u00020\u0001:\u0001\bB\u0013\b\u0002\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/media_player/CacheDataSourceFactory;", "Lcom/google/android/exoplayer2/upstream/DataSource$Factory;", "defaultDatasourceFactory", "Lcom/google/android/exoplayer2/upstream/DefaultHttpDataSource$Factory;", "<init>", "(Lcom/google/android/exoplayer2/upstream/DefaultHttpDataSource$Factory;)V", "createDataSource", "Lcom/google/android/exoplayer2/upstream/DataSource;", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CacheDataSourceFactory implements DataSource.Factory {
    @NotNull
    private static final String CACHE_DIR_NAME = "app_media_player";
    private static final long CACHE_MAX_SIZE = 104857600;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static SimpleCache cache;
    private static CacheDataSourceFactory factory;
    @NotNull
    private final DefaultHttpDataSource.Factory defaultDatasourceFactory;

    @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fJ\u0006\u0010\u0010\u001a\u00020\u0007J\u0010\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u000e\u001a\u00020\u000fH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/media_player/CacheDataSourceFactory$Companion;", "", "<init>", "()V", "cache", "Lcom/google/android/exoplayer2/upstream/cache/SimpleCache;", "factory", "Lcom/discord/media_player/CacheDataSourceFactory;", "CACHE_MAX_SIZE", "", "CACHE_DIR_NAME", "", "init", "", "context", "Landroid/content/Context;", "getInstance", "getSimpleCache", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final SimpleCache getSimpleCache(Context context) {
            return new SimpleCache(new File(context.getCacheDir(), CacheDataSourceFactory.CACHE_DIR_NAME), new me.h(CacheDataSourceFactory.CACHE_MAX_SIZE), new pc.c(context));
        }

        @NotNull
        public final CacheDataSourceFactory getInstance() {
            CacheDataSourceFactory cacheDataSourceFactory = CacheDataSourceFactory.factory;
            if (cacheDataSourceFactory == null) {
                Intrinsics.throwUninitializedPropertyAccessException("factory");
                return null;
            }
            return cacheDataSourceFactory;
        }

        public final void init(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            CacheDataSourceFactory.cache = getSimpleCache(context);
            CacheDataSourceFactory cacheDataSourceFactory = null;
            CacheDataSourceFactory.factory = new CacheDataSourceFactory(null, 1, null);
            CacheDataSourceFactory cacheDataSourceFactory2 = CacheDataSourceFactory.factory;
            if (cacheDataSourceFactory2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("factory");
            } else {
                cacheDataSourceFactory = cacheDataSourceFactory2;
            }
            com.brentvatne.exoplayer.b.e(cacheDataSourceFactory);
        }

        private Companion() {
        }
    }

    private CacheDataSourceFactory(DefaultHttpDataSource.Factory factory2) {
        this.defaultDatasourceFactory = factory2;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
    @NotNull
    public DataSource createDataSource() {
        SimpleCache simpleCache = cache;
        if (simpleCache == null) {
            Intrinsics.throwUninitializedPropertyAccessException("cache");
            simpleCache = null;
        }
        DefaultHttpDataSource createDataSource = this.defaultDatasourceFactory.createDataSource();
        s sVar = new s();
        SimpleCache simpleCache2 = null;
        SimpleCache simpleCache3 = cache;
        if (simpleCache3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("cache");
        } else {
            simpleCache2 = simpleCache3;
        }
        return new com.google.android.exoplayer2.upstream.cache.c(simpleCache, createDataSource, sVar, new com.google.android.exoplayer2.upstream.cache.b(simpleCache2, CACHE_MAX_SIZE), 3, null);
    }

    /* synthetic */ CacheDataSourceFactory(DefaultHttpDataSource.Factory factory2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new DefaultHttpDataSource.Factory() : factory2);
    }
}
