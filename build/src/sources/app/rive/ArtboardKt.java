package app.rive;

import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w0.a;
import w0.c;
import w0.g;
import w0.h;
import w0.i;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\u001a#\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0001\u001a\u00020\u00002\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002H\u0007¢\u0006\u0004\b\u0005\u0010\u0006\"\u0014\u0010\u0007\u001a\u00020\u00028\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0007\u0010\b¨\u0006\t"}, d2 = {"Lapp/rive/RiveFile;", "file", "", "artboardName", "Lapp/rive/Artboard;", "rememberArtboard", "(Lapp/rive/RiveFile;Ljava/lang/String;Lw0/a;II)Lapp/rive/Artboard;", "ARTBOARD_TAG", "Ljava/lang/String;", "kotlin_release"}, k = 2, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nArtboard.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Artboard.kt\napp/rive/ArtboardKt\n+ 2 Composer.kt\nandroidx/compose/runtime/ComposerKt\n*L\n1#1,92:1\n1282#2,6:93\n*S KotlinDebug\n*F\n+ 1 Artboard.kt\napp/rive/ArtboardKt\n*L\n82#1:93,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ArtboardKt {
    @NotNull
    private static final String ARTBOARD_TAG = "Rive/Artboard";

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Artboard rememberArtboard(@NotNull RiveFile file, String str, a aVar, int i10, int i11) {
        boolean z10;
        Intrinsics.checkNotNullParameter(file, "file");
        aVar.i(976856554);
        if ((i11 & 2) != 0) {
            str = null;
        }
        if (c.c()) {
            c.e(976856554, i10, -1, "app.rive.rememberArtboard (Artboard.kt:80)");
        }
        aVar.i(-829698115);
        boolean z11 = false;
        if ((((i10 & 14) ^ 6) > 4 && aVar.h(file)) || (i10 & 6) == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((((i10 & 112) ^ 48) > 32 && aVar.h(str)) || (i10 & 48) == 32) {
            z11 = true;
        }
        boolean z12 = z10 | z11;
        Object d10 = aVar.d();
        if (z12 || d10 == a.f53271a.a()) {
            d10 = Artboard.Companion.fromFile(file, str);
            aVar.c(d10);
        }
        final Artboard artboard = (Artboard) d10;
        aVar.g();
        i.a(artboard, new Function1<h, g>() { // from class: app.rive.ArtboardKt$rememberArtboard$1
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            @NotNull
            public final g invoke(@NotNull h DisposableEffect) {
                Intrinsics.checkNotNullParameter(DisposableEffect, "$this$DisposableEffect");
                final Artboard artboard2 = Artboard.this;
                return new g() { // from class: app.rive.ArtboardKt$rememberArtboard$1$invoke$$inlined$onDispose$1
                    public void dispose() {
                        Artboard.this.close();
                    }
                };
            }
        }, aVar, 8);
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return artboard;
    }
}
