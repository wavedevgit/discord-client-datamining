package com.discord.media_player;

import android.content.Context;
import com.google.android.exoplayer2.ext.cronet.CronetDataSource;
import java.util.concurrent.Executors;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.chromium.net.CronetEngine;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\n\u001a\u0004\u0018\u00010\u00072\u0006\u0010\u000b\u001a\u00020\fR\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/media_player/CronetDataSourceProvider;", "", "<init>", "()V", "cronetEngine", "Lorg/chromium/net/CronetEngine;", "factory", "Lcom/google/android/exoplayer2/ext/cronet/CronetDataSource$Factory;", "initAttempted", "", "getFactory", "context", "Landroid/content/Context;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CronetDataSourceProvider {
    @NotNull
    public static final CronetDataSourceProvider INSTANCE = new CronetDataSourceProvider();
    private static CronetEngine cronetEngine;
    private static CronetDataSource.Factory factory;
    private static boolean initAttempted;

    private CronetDataSourceProvider() {
    }

    public final synchronized CronetDataSource.Factory getFactory(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (!initAttempted) {
            initAttempted = true;
            try {
                CronetEngine build = new CronetEngine.Builder(context).enableQuic(true).enableHttp2(true).build();
                cronetEngine = build;
                Intrinsics.checkNotNull(build);
                factory = new CronetDataSource.Factory(build, Executors.newCachedThreadPool());
            } catch (Exception unused) {
            }
        }
        return factory;
    }
}
