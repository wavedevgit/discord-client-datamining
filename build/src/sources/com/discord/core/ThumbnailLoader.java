package com.discord.core;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.util.Size;
import hs.g0;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.i;
import kotlinx.coroutines.sync.Mutex;
import org.jetbrains.annotations.NotNull;
import qs.f;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001f\u0010\t\u001a\u00020\b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ*\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0086@¢\u0006\u0004\b\u000e\u0010\u000fR\u0014\u0010\u0010\u001a\u00020\b8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R(\u0010\u0014\u001a\u0016\u0012\u0004\u0012\u00020\b\u0012\f\u0012\n\u0012\u0006\u0012\u0004\u0018\u00010\r0\u00130\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0017\u001a\u00020\u00168\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018¨\u0006\u0019"}, d2 = {"Lcom/discord/core/ThumbnailLoader;", "", "<init>", "()V", "Landroid/net/Uri;", "uri", "Landroid/util/Size;", "size", "", "createRequestKey", "(Landroid/net/Uri;Landroid/util/Size;)Ljava/lang/String;", "Landroid/content/Context;", "context", "Landroid/graphics/Bitmap;", "loadThumbnail", "(Landroid/content/Context;Landroid/net/Uri;Landroid/util/Size;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "TAG", "Ljava/lang/String;", "Ljava/util/concurrent/ConcurrentHashMap;", "Lhs/g0;", "inFlightRequests", "Ljava/util/concurrent/ConcurrentHashMap;", "Lkotlinx/coroutines/sync/Mutex;", "mapMutex", "Lkotlinx/coroutines/sync/Mutex;", "core_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThumbnailLoader {
    @NotNull
    private static final String TAG = "ThumbnailLoader";
    @NotNull
    public static final ThumbnailLoader INSTANCE = new ThumbnailLoader();
    @NotNull
    private static final ConcurrentHashMap<String, g0> inFlightRequests = new ConcurrentHashMap<>();
    @NotNull
    private static final Mutex mapMutex = f.b(false, 1, null);

    private ThumbnailLoader() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String createRequestKey(Uri uri, Size size) {
        int width = size.getWidth();
        int height = size.getHeight();
        return uri + "_" + width + "_" + height;
    }

    public final Object loadThumbnail(@NotNull Context context, @NotNull Uri uri, @NotNull Size size, @NotNull Continuation<? super Bitmap> continuation) {
        return i.g(new ThumbnailLoader$loadThumbnail$2(uri, size, context, null), continuation);
    }
}
