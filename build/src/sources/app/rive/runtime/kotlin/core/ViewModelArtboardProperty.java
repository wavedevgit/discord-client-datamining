package app.rive.runtime.kotlin.core;

import app.rive.runtime.kotlin.core.errors.RiveException;
import java.util.ArrayList;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\r\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0007\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\r\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0002\u0010\u0005J!\u0010\u0006\u001a\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u00042\u0006\u0010\b\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u0004H\u0082 J\u0019\u0010\n\u001a\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u00042\u0006\u0010\u000b\u001a\u00020\u0004H\u0082 J\b\u0010\f\u001a\u00020\u0002H\u0014J\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\u000e\u001a\u00020\u0002H\u0014¢\u0006\u0002\u0010\u000fJ\u0010\u0010\u0010\u001a\u00020\u00022\u0006\u0010\u0011\u001a\u00020\u0012H\u0007J\u0010\u0010\u0010\u001a\u00020\u00022\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¨\u0006\u0015"}, d2 = {"Lapp/rive/runtime/kotlin/core/ViewModelArtboardProperty;", "Lapp/rive/runtime/kotlin/core/ViewModelProperty;", "", "unsafeCppPointer", "", "(J)V", "cppSetArtboard", "cppPointer", "fileCppPointer", "artboardCppPointer", "cppSetBindableArtboard", "bindableArtboardCppPointer", "nativeGetValue", "nativeSetValue", "value", "(Lkotlin/Unit;)V", "set", "artboard", "Lapp/rive/runtime/kotlin/core/Artboard;", "bindableArtboard", "Lapp/rive/runtime/kotlin/core/BindableArtboard;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nViewModelInstance.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewModelInstance.kt\napp/rive/runtime/kotlin/core/ViewModelArtboardProperty\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,750:1\n808#2,11:751\n1863#2,2:762\n*S KotlinDebug\n*F\n+ 1 ViewModelInstance.kt\napp/rive/runtime/kotlin/core/ViewModelArtboardProperty\n*L\n732#1:751,11\n732#1:762,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ViewModelArtboardProperty extends ViewModelProperty<Unit> {
    public static final int $stable = 0;

    public ViewModelArtboardProperty(long j10) {
        super(j10);
    }

    private final native void cppSetArtboard(long j10, long j11, long j12);

    private final native void cppSetBindableArtboard(long j10, long j11);

    /* renamed from: nativeGetValue  reason: avoid collision after fix types in other method */
    protected void nativeGetValue2() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // app.rive.runtime.kotlin.core.ViewModelProperty
    public void nativeSetValue(@NotNull Unit value) {
        Intrinsics.checkNotNullParameter(value, "value");
    }

    @c
    public final void set(@NotNull Artboard artboard) {
        Intrinsics.checkNotNullParameter(artboard, "artboard");
        if (artboard.getHasCppObject()) {
            if (artboard.getFile$kotlin_release() != null) {
                File file$kotlin_release = artboard.getFile$kotlin_release();
                Intrinsics.checkNotNull(file$kotlin_release);
                if (file$kotlin_release.getHasCppObject()) {
                    long cppPointer = getCppPointer();
                    File file$kotlin_release2 = artboard.getFile$kotlin_release();
                    Intrinsics.checkNotNull(file$kotlin_release2);
                    cppSetArtboard(cppPointer, file$kotlin_release2.getCppPointer(), artboard.getCppPointer());
                    return;
                }
                throw new RiveException("Cannot set an Artboard whose File has been disposed to a ViewModelArtboardProperty.");
            }
            throw new RiveException("Cannot set an Artboard with no File reference to a ViewModelArtboardProperty.");
        }
        throw new RiveException("Cannot set a disposed Artboard to a ViewModelArtboardProperty.");
    }

    @Override // app.rive.runtime.kotlin.core.ViewModelProperty
    public /* bridge */ /* synthetic */ Unit nativeGetValue() {
        nativeGetValue2();
        return Unit.f31988a;
    }

    public final void set(BindableArtboard bindableArtboard) {
        cppSetBindableArtboard(getCppPointer(), bindableArtboard != null ? bindableArtboard.getCppPointer() : 0L);
        ArrayList<BindableArtboard> arrayList = new ArrayList();
        for (Object obj : getDependencies()) {
            if (obj instanceof BindableArtboard) {
                arrayList.add(obj);
            }
        }
        for (BindableArtboard bindableArtboard2 : arrayList) {
            bindableArtboard2.release();
            getDependencies().remove(bindableArtboard2);
        }
        if (bindableArtboard != null) {
            bindableArtboard.acquire();
            getDependencies().add(bindableArtboard);
        }
    }
}
