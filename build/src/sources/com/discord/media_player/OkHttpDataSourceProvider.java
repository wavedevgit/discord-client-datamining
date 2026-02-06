package com.discord.media_player;

import com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.OkHttpClient;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\n\u001a\u0004\u0018\u00010\u0007R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/discord/media_player/OkHttpDataSourceProvider;", "", "<init>", "()V", "okHttpClient", "Lokhttp3/OkHttpClient;", "factory", "Lcom/google/android/exoplayer2/ext/okhttp/OkHttpDataSource$Factory;", "initAttempted", "", "getFactory", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OkHttpDataSourceProvider {
    @NotNull
    public static final OkHttpDataSourceProvider INSTANCE = new OkHttpDataSourceProvider();
    private static OkHttpDataSource.Factory factory;
    private static boolean initAttempted;
    private static OkHttpClient okHttpClient;

    private OkHttpDataSourceProvider() {
    }

    public final synchronized OkHttpDataSource.Factory getFactory() {
        if (!initAttempted) {
            initAttempted = true;
            try {
                OkHttpClient.Builder builder = new OkHttpClient.Builder();
                TimeUnit timeUnit = TimeUnit.SECONDS;
                OkHttpClient c10 = builder.f(30L, timeUnit).Q(30L, timeUnit).c();
                okHttpClient = c10;
                Intrinsics.checkNotNull(c10);
                factory = new OkHttpDataSource.Factory(c10);
            } catch (Exception unused) {
            }
        }
        return factory;
    }
}
