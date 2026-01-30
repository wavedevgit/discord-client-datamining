package app.rive;

import app.rive.AudioAsset;
import app.rive.FontAsset;
import app.rive.Result;
import app.rive.core.CommandQueue;
import com.facebook.react.devsupport.StackTraceHelper;
import ir.q;
import kotlin.Metadata;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KFunction;
import org.jetbrains.annotations.NotNull;
import w0.a;
import w0.b0;
import w0.c;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\b\u001a%\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u00042\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\u0006\u0010\u0007\u001a-\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00050\u00042\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\n\u0010\u000b\u001a%\u0010\r\u001a\b\u0012\u0004\u0012\u00020\f0\u00042\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\r\u0010\u0007\u001a-\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\f0\u00042\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\u000e\u0010\u000b\u001a%\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000f0\u00042\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\u0010\u0010\u0007\u001a-\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u000f0\u00042\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0011\u001a\u00020\b2\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\u0012\u0010\u000b\u001aw\u0010\u001a\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\"\u000e\b\u0000\u0010\u0014*\b\u0012\u0004\u0012\u00028\u00010\u0013\"\u0004\b\u0001\u0010\u00152\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0003\u001a\u00020\u00022.\u0010\u0019\u001a*\b\u0001\u0012\u0004\u0012\u00020\u0000\u0012\u0004\u0012\u00020\u0002\u0012\u0010\u0012\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00028\u00000\u00040\u0017\u0012\u0006\u0012\u0004\u0018\u00010\u00180\u00162\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\bH\u0003¢\u0006\u0004\b\u001a\u0010\u001b\"\u0014\u0010\u001c\u001a\u00020\b8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u001c\u0010\u001d\"\u0014\u0010\u001e\u001a\u00020\b8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u001e\u0010\u001d\"\u0014\u0010\u001f\u001a\u00020\b8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u001f\u0010\u001d¨\u0006 "}, d2 = {"Lapp/rive/core/CommandQueue;", "commandQueue", "", "bytes", "Lapp/rive/Result;", "Lapp/rive/ImageAsset;", "rememberImage", "(Lapp/rive/core/CommandQueue;[BLw0/a;I)Lapp/rive/Result;", "", "key", "rememberRegisteredImage", "(Lapp/rive/core/CommandQueue;Ljava/lang/String;[BLw0/a;I)Lapp/rive/Result;", "Lapp/rive/AudioAsset;", "rememberAudio", "rememberRegisteredAudio", "Lapp/rive/FontAsset;", "rememberFont", StackTraceHelper.NAME_KEY, "rememberRegisteredFont", "Lapp/rive/Asset;", "T", "H", "Lkotlin/Function3;", "Lkotlin/coroutines/Continuation;", "", "constructFn", "rememberAsset", "(Lapp/rive/core/CommandQueue;[BLkotlin/jvm/functions/Function3;Ljava/lang/String;Lw0/a;II)Lapp/rive/Result;", "IMAGE_TAG", "Ljava/lang/String;", "AUDIO_TAG", "FONT_TAG", "kotlin_release"}, k = 2, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAssets.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Assets.kt\napp/rive/AssetsKt\n+ 2 Composer.kt\nandroidx/compose/runtime/ComposerKt\n*L\n1#1,443:1\n1282#2,6:444\n1282#2,6:450\n1282#2,6:456\n1282#2,6:462\n1282#2,6:468\n1282#2,6:474\n*S KotlinDebug\n*F\n+ 1 Assets.kt\napp/rive/AssetsKt\n*L\n278#1:444,6\n309#1:450,6\n332#1:456,6\n356#1:462,6\n378#1:468,6\n402#1:474,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AssetsKt {
    @NotNull
    private static final String AUDIO_TAG = "Rive/Audio";
    @NotNull
    private static final String FONT_TAG = "Rive/Font";
    @NotNull
    private static final String IMAGE_TAG = "Rive/Image";

    private static final <T extends Asset<H>, H> Result<T> rememberAsset(CommandQueue commandQueue, byte[] bArr, Function3 function3, String str, a aVar, int i10, int i11) {
        aVar.i(1948076516);
        if ((i11 & 8) != 0) {
            str = null;
        }
        String str2 = str;
        if (c.c()) {
            c.e(1948076516, i10, -1, "app.rive.rememberAsset (Assets.kt:424)");
        }
        Result<T> result = (Result) b0.d(Result.Loading.INSTANCE, commandQueue, bArr, str2, new AssetsKt$rememberAsset$1(function3, commandQueue, bArr, str2, null), aVar, (i10 & 7168) | 33350).getValue();
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return result;
    }

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Result<AudioAsset> rememberAudio(@NotNull CommandQueue commandQueue, @NotNull byte[] bytes, a aVar, int i10) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        aVar.i(-172942467);
        if (c.c()) {
            c.e(-172942467, i10, -1, "app.rive.rememberAudio (Assets.kt:331)");
        }
        AudioAsset.Companion companion = AudioAsset.Companion;
        aVar.i(627205411);
        Object d10 = aVar.d();
        if (d10 == a.f52001a.a()) {
            d10 = new AssetsKt$rememberAudio$1$1(companion);
            aVar.c(d10);
        }
        aVar.g();
        Result<AudioAsset> rememberAsset = rememberAsset(commandQueue, bytes, (Function3) ((KFunction) d10), null, aVar, 584, 8);
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return rememberAsset;
    }

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Result<FontAsset> rememberFont(@NotNull CommandQueue commandQueue, @NotNull byte[] bytes, a aVar, int i10) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        aVar.i(-1828927668);
        if (c.c()) {
            c.e(-1828927668, i10, -1, "app.rive.rememberFont (Assets.kt:377)");
        }
        FontAsset.Companion companion = FontAsset.Companion;
        aVar.i(574265323);
        Object d10 = aVar.d();
        if (d10 == a.f52001a.a()) {
            d10 = new AssetsKt$rememberFont$1$1(companion);
            aVar.c(d10);
        }
        aVar.g();
        Result<FontAsset> rememberAsset = rememberAsset(commandQueue, bytes, (Function3) ((KFunction) d10), null, aVar, 584, 8);
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return rememberAsset;
    }

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Result<ImageAsset> rememberImage(@NotNull CommandQueue commandQueue, @NotNull byte[] bytes, a aVar, int i10) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        aVar.i(230115522);
        if (c.c()) {
            c.e(230115522, i10, -1, "app.rive.rememberImage (Assets.kt:275)");
        }
        throw new q("An operation is not implemented: Image decoding is not yet functional in the Rive Compose library. It will be implemented in a future release.");
    }

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Result<AudioAsset> rememberRegisteredAudio(@NotNull CommandQueue commandQueue, @NotNull String key, @NotNull byte[] bytes, a aVar, int i10) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        aVar.i(-1549342040);
        if (c.c()) {
            c.e(-1549342040, i10, -1, "app.rive.rememberRegisteredAudio (Assets.kt:355)");
        }
        AudioAsset.Companion companion = AudioAsset.Companion;
        aVar.i(-2131438527);
        Object d10 = aVar.d();
        if (d10 == a.f52001a.a()) {
            d10 = new AssetsKt$rememberRegisteredAudio$1$1(companion);
            aVar.c(d10);
        }
        aVar.g();
        Result<AudioAsset> rememberAsset = rememberAsset(commandQueue, bytes, (Function3) ((KFunction) d10), key, aVar, ((i10 << 6) & 7168) | 584, 0);
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return rememberAsset;
    }

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Result<FontAsset> rememberRegisteredFont(@NotNull CommandQueue commandQueue, @NotNull String name, @NotNull byte[] bytes, a aVar, int i10) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        aVar.i(2020117749);
        if (c.c()) {
            c.e(2020117749, i10, -1, "app.rive.rememberRegisteredFont (Assets.kt:401)");
        }
        FontAsset.Companion companion = FontAsset.Companion;
        aVar.i(208216109);
        Object d10 = aVar.d();
        if (d10 == a.f52001a.a()) {
            d10 = new AssetsKt$rememberRegisteredFont$1$1(companion);
            aVar.c(d10);
        }
        aVar.g();
        Result<FontAsset> rememberAsset = rememberAsset(commandQueue, bytes, (Function3) ((KFunction) d10), name, aVar, ((i10 << 6) & 7168) | 584, 0);
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return rememberAsset;
    }

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Result<ImageAsset> rememberRegisteredImage(@NotNull CommandQueue commandQueue, @NotNull String key, @NotNull byte[] bytes, a aVar, int i10) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        aVar.i(762656195);
        if (c.c()) {
            c.e(762656195, i10, -1, "app.rive.rememberRegisteredImage (Assets.kt:306)");
        }
        throw new q("An operation is not implemented: Image decoding is not yet functional in the Rive Compose library. It will be implemented in a future release.");
    }
}
