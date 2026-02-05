package app.rive;

import a1.a;
import app.rive.core.RiveSurface;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Fit;
import c1.b;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w0.c;
import w0.q;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\u001ac\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0001\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00022\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\u000b\u001a\u00020\n2\b\b\u0002\u0010\r\u001a\u00020\f2\b\b\u0002\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b\u0011\u0010\u0012\"\u0014\u0010\u0013\u001a\u00020\u00068\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014\"\u0014\u0010\u0015\u001a\u00020\u00068\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0015\u0010\u0014\"\u0014\u0010\u0016\u001a\u00020\u00068\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0016\u0010\u0014¨\u0006\u001d²\u0006\u000e\u0010\u0018\u001a\u00020\u00178\n@\nX\u008a\u008e\u0002²\u0006\u0010\u0010\u001a\u001a\u0004\u0018\u00010\u00198\n@\nX\u008a\u008e\u0002²\u0006\u000e\u0010\u001b\u001a\u00020\u000e8\n@\nX\u008a\u008e\u0002²\u0006\u000e\u0010\u001c\u001a\u00020\u000e8\n@\nX\u008a\u008e\u0002"}, d2 = {"Lapp/rive/RiveFile;", "file", "La1/a;", "modifier", "Lapp/rive/Artboard;", "artboard", "", "stateMachineName", "Lapp/rive/ViewModelInstance;", "viewModelInstance", "Lapp/rive/runtime/kotlin/core/Fit;", "fit", "Lapp/rive/runtime/kotlin/core/Alignment;", "alignment", "", "clearColor", "", RiveUIKt.GENERAL_TAG, "(Lapp/rive/RiveFile;La1/a;Lapp/rive/Artboard;Ljava/lang/String;Lapp/rive/ViewModelInstance;Lapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;ILw0/a;II)V", "GENERAL_TAG", "Ljava/lang/String;", "STATE_MACHINE_TAG", "DRAW_TAG", "", "isSettled", "Lapp/rive/core/RiveSurface;", "surface", "surfaceWidth", "surfaceHeight", "kotlin_release"}, k = 2, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt\n+ 2 RiveLog.kt\napp/rive/RiveLog\n+ 3 CompositionLocal.kt\nandroidx/compose/runtime/CompositionLocal\n+ 4 Composer.kt\nandroidx/compose/runtime/ComposerKt\n+ 5 SnapshotState.kt\nandroidx/compose/runtime/SnapshotStateKt__SnapshotStateKt\n+ 6 SnapshotIntState.kt\nandroidx/compose/runtime/SnapshotIntStateKt__SnapshotIntStateKt\n*L\n1#1,310:1\n53#2:311\n57#2:322\n75#3:312\n1282#4,6:313\n1282#4,3:319\n1285#4,3:323\n1282#4,6:326\n1282#4,6:332\n1282#4,6:338\n1282#4,6:344\n1282#4,6:350\n1282#4,6:356\n1282#4,6:362\n1282#4,6:368\n85#5:374\n117#5,2:375\n85#5:377\n117#5,2:378\n78#6:380\n111#6,2:381\n78#6:383\n111#6,2:384\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt\n*L\n99#1:311\n113#1:322\n100#1:312\n104#1:313,6\n107#1:319,3\n107#1:323,3\n117#1:326,6\n119#1:332,6\n120#1:338,6\n121#1:344,6\n122#1:350,6\n196#1:356,6\n216#1:362,6\n263#1:368,6\n117#1:374\n117#1:375,2\n119#1:377\n119#1:378,2\n120#1:380\n120#1:381,2\n121#1:383\n121#1:384,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveUIKt {
    @NotNull
    private static final String DRAW_TAG = "RiveUI/Draw";
    @NotNull
    private static final String GENERAL_TAG = "RiveUI";
    @NotNull
    private static final String STATE_MACHINE_TAG = "RiveUI/SM";

    @ExperimentalRiveComposeAPI
    public static final void RiveUI(@NotNull RiveFile file, a aVar, Artboard artboard, String str, ViewModelInstance viewModelInstance, Fit fit, Alignment alignment, int i10, w0.a aVar2, int i11, int i12) {
        int i13;
        Intrinsics.checkNotNullParameter(file, "file");
        aVar2.a(-902710966);
        if ((i12 & 1) != 0) {
            i13 = i11 | 6;
        } else if ((i11 & 14) != 0) {
            i13 = i11;
        } else {
            throw null;
        }
        int i14 = i12 & 2;
        if (i14 != 0) {
            i13 |= 48;
        } else if ((i11 & 112) == 0) {
            throw null;
        }
        if ((i12 & 4) != 0) {
            i13 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        if ((i12 & 8) != 0) {
            i13 |= 3072;
        } else if ((i11 & 7168) == 0) {
            throw null;
        }
        if ((i12 & 16) != 0) {
            i13 |= 8192;
        }
        int i15 = i12 & 32;
        if (i15 != 0) {
            i13 |= 196608;
        } else if ((458752 & i11) == 0) {
            throw null;
        }
        int i16 = i12 & 64;
        if (i16 != 0) {
            i13 |= 1572864;
        } else if ((3670016 & i11) == 0) {
            throw null;
        }
        int i17 = i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i17 != 0) {
            i13 |= 12582912;
        } else if ((29360128 & i11) == 0) {
            throw null;
        }
        if ((i12 & 20) == 20 && (23967451 & i13) == 4793490) {
            throw null;
        }
        if (i14 != 0) {
            a.C0000a c0000a = a.f343a;
        }
        if (i15 != 0) {
            Fit.Companion companion = Fit.Companion;
        }
        if (i16 != 0) {
            Alignment.Companion companion2 = Alignment.Companion;
        }
        if (i17 != 0) {
            b.d(c1.a.f7340a.a());
        }
        if (c.c()) {
            c.e(-902710966, i13, -1, "app.rive.RiveUI (RiveUI.kt:97)");
        }
        RiveLog.INSTANCE.getLogger().v(GENERAL_TAG, new Function0<String>() { // from class: app.rive.RiveUIKt$RiveUI$1
            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                return "RiveUI Recomposing";
            }
        });
        i3.b.c();
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean RiveUI$lambda$3(q qVar) {
        return ((Boolean) qVar.getValue()).booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void RiveUI$lambda$4(q qVar, boolean z10) {
        qVar.setValue(Boolean.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final RiveSurface RiveUI$lambda$6(q qVar) {
        return (RiveSurface) qVar.getValue();
    }
}
