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
@Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\u001a\u001f\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\u0005\u0010\u0006\"\u0014\u0010\b\u001a\u00020\u00078\u0000X\u0080T¢\u0006\u0006\n\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lapp/rive/RiveFile;", "file", "Lapp/rive/ViewModelInstanceSource;", "source", "Lapp/rive/ViewModelInstance;", "rememberViewModelInstance", "(Lapp/rive/RiveFile;Lapp/rive/ViewModelInstanceSource;Lw0/a;I)Lapp/rive/ViewModelInstance;", "", "VM_INSTANCE_TAG", "Ljava/lang/String;", "kotlin_release"}, k = 2, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nViewModelInstance.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewModelInstance.kt\napp/rive/ViewModelInstanceKt\n+ 2 Composer.kt\nandroidx/compose/runtime/ComposerKt\n*L\n1#1,364:1\n1282#2,6:365\n*S KotlinDebug\n*F\n+ 1 ViewModelInstance.kt\napp/rive/ViewModelInstanceKt\n*L\n354#1:365,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ViewModelInstanceKt {
    @NotNull
    public static final String VM_INSTANCE_TAG = "RiveUI/VMI";

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final ViewModelInstance rememberViewModelInstance(@NotNull RiveFile file, @NotNull ViewModelInstanceSource source, a aVar, int i10) {
        boolean z10;
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(source, "source");
        aVar.i(-2097877121);
        if (c.c()) {
            c.e(-2097877121, i10, -1, "app.rive.rememberViewModelInstance (ViewModelInstance.kt:352)");
        }
        aVar.i(-1220604000);
        boolean z11 = false;
        if ((((i10 & 14) ^ 6) > 4 && aVar.h(file)) || (i10 & 6) == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((((i10 & 112) ^ 48) > 32 && aVar.h(source)) || (i10 & 48) == 32) {
            z11 = true;
        }
        boolean z12 = z10 | z11;
        Object d10 = aVar.d();
        if (z12 || d10 == a.f53223a.a()) {
            d10 = ViewModelInstance.Companion.fromFile(file, source);
            aVar.c(d10);
        }
        final ViewModelInstance viewModelInstance = (ViewModelInstance) d10;
        aVar.g();
        i.a(viewModelInstance, new Function1<h, g>() { // from class: app.rive.ViewModelInstanceKt$rememberViewModelInstance$1
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            @NotNull
            public final g invoke(@NotNull h DisposableEffect) {
                Intrinsics.checkNotNullParameter(DisposableEffect, "$this$DisposableEffect");
                final ViewModelInstance viewModelInstance2 = ViewModelInstance.this;
                return new g() { // from class: app.rive.ViewModelInstanceKt$rememberViewModelInstance$1$invoke$$inlined$onDispose$1
                    public void dispose() {
                        ViewModelInstance.this.close();
                    }
                };
            }
        }, aVar, 8);
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return viewModelInstance;
    }
}
