package com.discord.media_player;

import android.app.Application;
import android.content.Context;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.cache.SimpleCache;
import com.google.android.exoplayer2.upstream.d;
import java.io.File;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import le.s;
import org.jetbrains.annotations.NotNull;
import qr.p;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \t2\u00020\u0001:\u0001\tB\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0007\u001a\u00020\bH\u0016R\u000e\u0010\u0006\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/media_player/CacheDataSourceFactory;", "Lcom/google/android/exoplayer2/upstream/DataSource$Factory;", "httpEngine", "Lcom/discord/media_player/HttpEngine;", "<init>", "(Lcom/discord/media_player/HttpEngine;)V", "upstreamFactory", "createDataSource", "Lcom/google/android/exoplayer2/upstream/DataSource;", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CacheDataSourceFactory implements DataSource.Factory {
    @NotNull
    private static final String CACHE_DIR_NAME = "app_media_player";
    private static final long CACHE_MAX_SIZE = 104857600;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static Application applicationContext;
    private static SimpleCache cache;
    private static CacheDataSourceFactory cronetFactory;
    private static CacheDataSourceFactory defaultFactory;
    private static CacheDataSourceFactory okHttpFactory;
    @NotNull
    private final DataSource.Factory upstreamFactory;

    @Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013J\u0010\u0010\u0014\u001a\u00020\t2\b\b\u0002\u0010\u0015\u001a\u00020\u0016J\u0010\u0010\u0017\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u0013H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082.¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000b\u001a\u0004\u0018\u00010\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/discord/media_player/CacheDataSourceFactory$Companion;", "", "<init>", "()V", "cache", "Lcom/google/android/exoplayer2/upstream/cache/SimpleCache;", "applicationContext", "Landroid/app/Application;", "defaultFactory", "Lcom/discord/media_player/CacheDataSourceFactory;", "okHttpFactory", "cronetFactory", "CACHE_MAX_SIZE", "", "CACHE_DIR_NAME", "", "init", "", "context", "Landroid/content/Context;", "getInstance", "httpEngine", "Lcom/discord/media_player/HttpEngine;", "getSimpleCache", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nCacheDataSourceFactory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CacheDataSourceFactory.kt\ncom/discord/media_player/CacheDataSourceFactory$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,103:1\n1#2:104\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[HttpEngine.values().length];
                try {
                    iArr[HttpEngine.OKHTTP.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[HttpEngine.CRONET.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[HttpEngine.DEFAULT.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ CacheDataSourceFactory getInstance$default(Companion companion, HttpEngine httpEngine, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                httpEngine = HttpEngine.DEFAULT;
            }
            return companion.getInstance(httpEngine);
        }

        private final SimpleCache getSimpleCache(Context context) {
            return new SimpleCache(new File(context.getCacheDir(), CacheDataSourceFactory.CACHE_DIR_NAME), new me.h(CacheDataSourceFactory.CACHE_MAX_SIZE), new pc.c(context));
        }

        @NotNull
        public final synchronized CacheDataSourceFactory getInstance(@NotNull HttpEngine httpEngine) {
            CacheDataSourceFactory cacheDataSourceFactory;
            CacheDataSourceFactory cacheDataSourceFactory2;
            try {
                Intrinsics.checkNotNullParameter(httpEngine, "httpEngine");
                int i10 = WhenMappings.$EnumSwitchMapping$0[httpEngine.ordinal()];
                cacheDataSourceFactory = null;
                if (i10 == 1) {
                    cacheDataSourceFactory2 = CacheDataSourceFactory.okHttpFactory;
                    if (cacheDataSourceFactory2 == null) {
                        cacheDataSourceFactory2 = new CacheDataSourceFactory(HttpEngine.OKHTTP, null);
                        CacheDataSourceFactory.okHttpFactory = cacheDataSourceFactory2;
                    }
                } else if (i10 == 2) {
                    cacheDataSourceFactory2 = CacheDataSourceFactory.cronetFactory;
                    if (cacheDataSourceFactory2 == null) {
                        cacheDataSourceFactory2 = new CacheDataSourceFactory(HttpEngine.CRONET, null);
                        CacheDataSourceFactory.cronetFactory = cacheDataSourceFactory2;
                    }
                } else if (i10 == 3) {
                    cacheDataSourceFactory2 = CacheDataSourceFactory.defaultFactory;
                    if (cacheDataSourceFactory2 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("defaultFactory");
                    }
                } else {
                    throw new p();
                }
                cacheDataSourceFactory = cacheDataSourceFactory2;
            } finally {
            }
            return cacheDataSourceFactory;
        }

        public final void init(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNull(applicationContext, "null cannot be cast to non-null type android.app.Application");
            CacheDataSourceFactory.applicationContext = (Application) applicationContext;
            CacheDataSourceFactory.cache = getSimpleCache(context);
            CacheDataSourceFactory cacheDataSourceFactory = null;
            CacheDataSourceFactory.defaultFactory = new CacheDataSourceFactory(HttpEngine.DEFAULT, null);
            CacheDataSourceFactory cacheDataSourceFactory2 = CacheDataSourceFactory.defaultFactory;
            if (cacheDataSourceFactory2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("defaultFactory");
            } else {
                cacheDataSourceFactory = cacheDataSourceFactory2;
            }
            com.brentvatne.exoplayer.b.e(cacheDataSourceFactory);
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[HttpEngine.values().length];
            try {
                iArr[HttpEngine.OKHTTP.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[HttpEngine.CRONET.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[HttpEngine.DEFAULT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public /* synthetic */ CacheDataSourceFactory(HttpEngine httpEngine, DefaultConstructorMarker defaultConstructorMarker) {
        this(httpEngine);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
    @NotNull
    public DataSource createDataSource() {
        SimpleCache simpleCache = cache;
        if (simpleCache == null) {
            Intrinsics.throwUninitializedPropertyAccessException("cache");
            simpleCache = null;
        }
        DataSource createDataSource = this.upstreamFactory.createDataSource();
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

    private CacheDataSourceFactory(HttpEngine httpEngine) {
        DataSource.Factory factory;
        int i10 = WhenMappings.$EnumSwitchMapping$0[httpEngine.ordinal()];
        if (i10 == 1) {
            factory = OkHttpDataSourceProvider.INSTANCE.getFactory();
            if (factory == null) {
                factory = new d.b();
            }
        } else if (i10 == 2) {
            CronetDataSourceProvider cronetDataSourceProvider = CronetDataSourceProvider.INSTANCE;
            Application application = applicationContext;
            if (application == null) {
                Intrinsics.throwUninitializedPropertyAccessException("applicationContext");
                application = null;
            }
            factory = cronetDataSourceProvider.getFactory(application);
            if (factory == null) {
                factory = new d.b();
            }
        } else if (i10 == 3) {
            factory = new d.b();
        } else {
            throw new p();
        }
        this.upstreamFactory = factory;
    }
}
