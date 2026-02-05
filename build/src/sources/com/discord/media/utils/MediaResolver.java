package com.discord.media.utils;

import android.annotation.SuppressLint;
import android.content.ContentResolver;
import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import com.discord.crash_reporting.CrashReporting;
import id.zelory.compressor.constraint.Compression;
import java.io.File;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import ms.g;
import ms.m0;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0010\u0002\n\u0002\b\u0007\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\r\n\u0002\u0010$\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u0000 ?2\u00020\u0001:\u0001?B)\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0018\u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0004¢\u0006\u0004\b\t\u0010\nJ\u0010\u0010\u000b\u001a\u00020\u0007H\u0083@¢\u0006\u0004\b\u000b\u0010\fJ)\u0010\u0011\u001a\u0004\u0018\u00010\u00052\u0006\u0010\r\u001a\u00020\u00052\u0006\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0010\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J*\u0010\u0017\u001a\u00020\u00052\u0006\u0010\r\u001a\u00020\u00052\u0006\u0010\u0014\u001a\u00020\u00132\b\u0010\u0016\u001a\u0004\u0018\u00010\u0015H\u0082@¢\u0006\u0004\b\u0017\u0010\u0018J0\u0010\u001c\u001a\u00020\u00052\u0006\u0010\r\u001a\u00020\u00052\u0006\u0010\u0019\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\u00132\u0006\u0010\u001b\u001a\u00020\u0013H\u0082@¢\u0006\u0004\b\u001c\u0010\u001dJ$\u0010!\u001a\u00020\u00052\u0006\u0010\u001e\u001a\u00020\u00052\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u001fH\u0082@¢\u0006\u0004\b!\u0010\"J/\u0010'\u001a\u00020\u00072\u0006\u0010$\u001a\u00020#2\u0006\u0010%\u001a\u00020#2\u0006\u0010\r\u001a\u00020\u00052\u0006\u0010&\u001a\u00020\u0005H\u0002¢\u0006\u0004\b'\u0010(J\u0017\u0010)\u001a\u0004\u0018\u00010#2\u0006\u0010\u001e\u001a\u00020\u0005¢\u0006\u0004\b)\u0010*J\u0015\u0010+\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\u0005¢\u0006\u0004\b+\u0010,JD\u00100\u001a\u00020\u00052\u0006\u0010\r\u001a\u00020\u00052\b\b\u0001\u0010-\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u001b\u001a\u00020\u00132\b\u0010\u0016\u001a\u0004\u0018\u00010\u0015H\u0080@¢\u0006\u0004\b.\u0010/J!\u00102\u001a\u000e\u0012\u0004\u0012\u00020#\u0012\u0004\u0012\u00020\u0001012\u0006\u0010\r\u001a\u00020\u0005¢\u0006\u0004\b2\u00103R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u00104R&\u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\b\u00105R\u001c\u00107\u001a\n 6*\u0004\u0018\u00010\u001f0\u001f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00108R\u0014\u0010<\u001a\u0002098BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b:\u0010;R\u0018\u0010>\u001a\u00020#*\u00020\u00058BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b=\u0010*¨\u0006@"}, d2 = {"Lcom/discord/media/utils/MediaResolver;", "", "Landroid/content/Context;", "context", "Lkotlin/Function2;", "Landroid/net/Uri;", "", "", "onProgress", "<init>", "(Landroid/content/Context;Lkotlin/jvm/functions/Function2;)V", "checkFreeSpace", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "inputUri", "compressedUri", "", "mediaSourceSize", "createMP4FastStartUri", "(Landroid/net/Uri;Landroid/net/Uri;J)Landroid/net/Uri;", "", "skipVideoTranscode", "Lcom/discord/media/utils/EncodingConfig;", "encodingConfig", "handleVideo", "(Landroid/net/Uri;ZLcom/discord/media/utils/EncodingConfig;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "compressionQuality", "isLowQuality", "useOriginalIfSmaller", "handleImage", "(Landroid/net/Uri;IZZLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "uri", "Ljava/io/File;", "targetFile", "copyToFile", "(Landroid/net/Uri;Ljava/io/File;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "", "tag", "message", "outputUri", "logMediaError", "(Ljava/lang/String;Ljava/lang/String;Landroid/net/Uri;Landroid/net/Uri;)V", "getMimeType", "(Landroid/net/Uri;)Ljava/lang/String;", "cancel", "(Landroid/net/Uri;)V", "imageCompressionQuality", "resolveToUri$media_release", "(Landroid/net/Uri;IZZZLcom/discord/media/utils/EncodingConfig;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "resolveToUri", "", "handleVideoMetadata", "(Landroid/net/Uri;)Ljava/util/Map;", "Landroid/content/Context;", "Lkotlin/jvm/functions/Function2;", "kotlin.jvm.PlatformType", "cacheDir", "Ljava/io/File;", "Landroid/content/ContentResolver;", "getResolver", "()Landroid/content/ContentResolver;", "resolver", "getRequestId", "requestId", "Companion", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaResolver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaResolver.kt\ncom/discord/media/utils/MediaResolver\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,260:1\n36#2:261\n36#2:262\n36#2:264\n36#2:265\n36#2:266\n1#3:263\n*S KotlinDebug\n*F\n+ 1 MediaResolver.kt\ncom/discord/media/utils/MediaResolver\n*L\n111#1:261\n135#1:262\n207#1:264\n216#1:265\n219#1:266\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaResolver {
    @Deprecated
    public static final double FREE_SPACE_PERCENT = 0.2d;
    private final File cacheDir;
    @NotNull
    private final Context context;
    @NotNull
    private final Function2<Uri, Integer, Unit> onProgress;
    @NotNull
    private static final Companion Companion = new Companion(null);
    private static final long HALF_DAY_MILLIS = TimeUnit.HOURS.toMillis(12);

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lcom/discord/media/utils/MediaResolver$Companion;", "", "<init>", "()V", "FREE_SPACE_PERCENT", "", "HALF_DAY_MILLIS", "", "getHALF_DAY_MILLIS", "()J", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final long getHALF_DAY_MILLIS() {
            return MediaResolver.HALF_DAY_MILLIS;
        }

        private Companion() {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public MediaResolver(@NotNull Context context, @NotNull Function2<? super Uri, ? super Integer, Unit> onProgress) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(onProgress, "onProgress");
        this.context = context;
        this.onProgress = onProgress;
        this.cacheDir = context.getCacheDir();
    }

    /* JADX INFO: Access modifiers changed from: private */
    @SuppressLint({"UsableSpace"})
    public final Object checkFreeSpace(Continuation<? super Unit> continuation) {
        Object g10 = g.g(m0.b(), new MediaResolver$checkFreeSpace$2(this, null), continuation);
        if (g10 == ur.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object copyToFile(Uri uri, File file, Continuation<? super Uri> continuation) {
        return g.g(m0.b(), new MediaResolver$copyToFile$2(file, this, uri, null), continuation);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object copyToFile$default(MediaResolver mediaResolver, Uri uri, File file, Continuation continuation, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            file = null;
        }
        return mediaResolver.copyToFile(uri, file, continuation);
    }

    private final Uri createMP4FastStartUri(Uri uri, Uri uri2, long j10) {
        Uri uri3;
        Uri uri4;
        String path = uri2.getPath();
        if (path == null) {
            return null;
        }
        if (new File(path).length() > j10) {
            uri3 = uri;
        } else {
            uri3 = uri2;
        }
        ParcelFileDescriptor openFileDescriptor = getResolver().openFileDescriptor(uri3, "r");
        if (openFileDescriptor == null) {
            return null;
        }
        File createTempFile$default = ContentResolverUtils.createTempFile$default(ContentResolverUtils.INSTANCE, getResolver(), uri3, null, "mp4", 2, null);
        boolean z10 = false;
        try {
            z10 = yt.a.a(openFileDescriptor.getFileDescriptor(), createTempFile$default);
            if (z10) {
                uri4 = Uri.fromFile(createTempFile$default);
            } else {
                uri4 = uri3;
            }
            openFileDescriptor.close();
            if (z10) {
                new File(path).delete();
                return uri4;
            }
            createTempFile$default.delete();
            if (!Intrinsics.areEqual(uri3, uri2)) {
                new File(path).delete();
            }
            return uri4;
        } catch (Throwable th2) {
            openFileDescriptor.close();
            if (!z10) {
                createTempFile$default.delete();
                if (!Intrinsics.areEqual(uri3, uri2)) {
                    new File(path).delete();
                }
            } else {
                new File(path).delete();
            }
            throw th2;
        }
    }

    private final String getRequestId(Uri uri) {
        String uri2 = uri.toString();
        Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
        return uri2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ContentResolver getResolver() {
        ContentResolver contentResolver = this.context.getContentResolver();
        Intrinsics.checkNotNullExpressionValue(contentResolver, "getContentResolver(...)");
        return contentResolver;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x00d4, code lost:
        if (r2 == r9) goto L34;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x002b  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0052  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x00b1  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object handleImage(final android.net.Uri r19, final int r20, boolean r21, boolean r22, kotlin.coroutines.Continuation<? super android.net.Uri> r23) {
        /*
            Method dump skipped, instructions count: 277
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.media.utils.MediaResolver.handleImage(android.net.Uri, int, boolean, boolean, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit handleImage$lambda$7(int i10, boolean z10, MediaResolver mediaResolver, Uri uri, Compression compress) {
        Intrinsics.checkNotNullParameter(compress, "$this$compress");
        compress.a(new QualityAndResolutionConstraint(i10, z10));
        fr.g.a(compress, Bitmap.CompressFormat.JPEG);
        fr.e.a(compress, ContentResolverUtils.createTempFile$default(ContentResolverUtils.INSTANCE, mediaResolver.getResolver(), uri, null, "jpeg", 2, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Can't wrap try/catch for region: R(10:1|(2:3|(8:5|6|7|(1:(1:(1:(2:12|13)(2:15|16))(4:17|18|19|20))(4:21|22|23|24))(10:46|47|48|49|(1:51)|52|(1:54)|55|(1:(3:58|27|(1:31)(2:29|30))(6:(4:67|68|69|(1:71))(4:60|61|62|63)|66|35|(2:37|(1:39)(1:42))|19|20))(2:75|(0)(1:77))|41)|25|26|27|(0)(0)))|81|6|7|(0)(0)|25|26|27|(0)(0)) */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x0103, code lost:
        r0 = th;
     */
    /* JADX WARN: Code restructure failed: missing block: B:52:0x0104, code lost:
        r6 = r3;
        r3 = r1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:67:0x0158, code lost:
        if (r0 == r10) goto L41;
     */
    /* JADX WARN: Removed duplicated region for block: B:11:0x002a  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0060  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0101  */
    /* JADX WARN: Removed duplicated region for block: B:87:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object handleVideo(final android.net.Uri r14, boolean r15, com.discord.media.utils.EncodingConfig r16, kotlin.coroutines.Continuation<? super android.net.Uri> r17) {
        /*
            Method dump skipped, instructions count: 369
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.media.utils.MediaResolver.handleVideo(android.net.Uri, boolean, com.discord.media.utils.EncodingConfig, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit handleVideo$lambda$4$lambda$3(MediaResolver mediaResolver, Uri uri, float f10) {
        mediaResolver.onProgress.invoke(uri, Integer.valueOf((int) (f10 * 100)));
        return Unit.f31988a;
    }

    private final void logMediaError(String str, String str2, Uri uri, Uri uri2) {
        CrashReporting crashReporting = CrashReporting.INSTANCE;
        CrashReporting.addBreadcrumb$default(crashReporting, str2, o0.m(v.a("inputUri", uri.toString()), v.a("outputUri", uri2.toString())), null, null, false, 28, null);
        crashReporting.captureMessage(str, str2, CrashReporting.ErrorLevel.WARNING);
    }

    public final void cancel(@NotNull Uri inputUri) {
        Intrinsics.checkNotNullParameter(inputUri, "inputUri");
        Transcoder.INSTANCE.cancel(getRequestId(inputUri));
    }

    public final String getMimeType(@NotNull Uri uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        return getResolver().getType(uri);
    }

    @NotNull
    public final Map<String, Object> handleVideoMetadata(@NotNull Uri inputUri) {
        Intrinsics.checkNotNullParameter(inputUri, "inputUri");
        return new DiscordVideoMediaSource(this.context, inputUri).getMetadata();
    }

    public final Object resolveToUri$media_release(@NotNull Uri uri, int i10, boolean z10, boolean z11, boolean z12, EncodingConfig encodingConfig, @NotNull Continuation<? super Uri> continuation) {
        return g.g(m0.b(), new MediaResolver$resolveToUri$2(this, uri, z11, encodingConfig, i10, z10, z12, null), continuation);
    }
}
