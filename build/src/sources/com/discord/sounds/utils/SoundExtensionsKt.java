package com.discord.sounds.utils;

import android.content.Context;
import android.net.Uri;
import com.discord.sounds.SoundManager;
import java.io.File;
import java.util.Comparator;
import js.i;
import js.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.a;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u001a\u0013\u0010\u0002\u001a\u00020\u0001*\u00020\u0000H\u0000¢\u0006\u0004\b\u0002\u0010\u0003\u001a\u0013\u0010\u0005\u001a\u00020\u0004*\u00020\u0000H\u0000¢\u0006\u0004\b\u0005\u0010\u0006\u001a\u0017\u0010\t\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0007H\u0000¢\u0006\u0004\b\t\u0010\n\u001aG\u0010\u0012\u001a\u00020\u0004*\u00020\u00002\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\r2\u0012\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00040\u0010H\u0000¢\u0006\u0004\b\u0012\u0010\u0013¨\u0006\u0014"}, d2 = {"Landroid/content/Context;", "Ljava/io/File;", "getSoundsCacheDirectory", "(Landroid/content/Context;)Ljava/io/File;", "", "tryPruneSoundsCache", "(Landroid/content/Context;)V", "", "url", "getRemoteSoundFilename", "(Ljava/lang/String;)Ljava/lang/String;", "Lcom/discord/sounds/SoundManager;", "soundManager", "", "key", "usage", "Lkotlin/Function1;", "soundResIdPrepared", "fetchSound", "(Landroid/content/Context;Ljava/lang/String;Lcom/discord/sounds/SoundManager;IILkotlin/jvm/functions/Function1;)V", "sounds_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSoundExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SoundExtensions.kt\ncom/discord/sounds/utils/SoundExtensionsKt\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,76:1\n29#2:77\n*S KotlinDebug\n*F\n+ 1 SoundExtensions.kt\ncom/discord/sounds/utils/SoundExtensionsKt\n*L\n26#1:77\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SoundExtensionsKt {
    public static final void fetchSound(@NotNull Context context, @NotNull String url, @NotNull SoundManager soundManager, int i10, int i11, @NotNull Function1<? super Integer, Unit> soundResIdPrepared) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(soundManager, "soundManager");
        Intrinsics.checkNotNullParameter(soundResIdPrepared, "soundResIdPrepared");
        tryPruneSoundsCache(context);
        i.d(kotlinx.coroutines.i.b(), m0.b(), null, new SoundExtensionsKt$fetchSound$1(context, url, getRemoteSoundFilename(url), getSoundsCacheDirectory(context), soundManager, i10, i11, soundResIdPrepared, null), 2, null);
    }

    @NotNull
    public static final String getRemoteSoundFilename(@NotNull String url) {
        Intrinsics.checkNotNullParameter(url, "url");
        String lastPathSegment = Uri.parse(url).getLastPathSegment();
        return lastPathSegment + ".mp3";
    }

    @NotNull
    public static final File getSoundsCacheDirectory(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        return new File(context.getCacheDir(), "sounds");
    }

    public static final void tryPruneSoundsCache(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        File[] listFiles = getSoundsCacheDirectory(context).listFiles();
        if (listFiles != null && listFiles.length >= 20) {
            kotlin.collections.i.F(listFiles, new Comparator() { // from class: com.discord.sounds.utils.SoundExtensionsKt$tryPruneSoundsCache$$inlined$compareByDescending$1
                @Override // java.util.Comparator
                public final int compare(T t10, T t11) {
                    return a.d(Long.valueOf(((File) t11).lastModified()), Long.valueOf(((File) t10).lastModified()));
                }
            });
            File file = (File) kotlin.collections.i.w0(listFiles);
            if (file != null) {
                file.delete();
            }
        }
    }
}
