package app.rive;

import android.support.v4.media.session.b;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Fit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import w0.a;
import w0.x;
@Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$10 extends Lambda implements Function2<a, Integer, Unit> {
    final /* synthetic */ int $$changed;
    final /* synthetic */ int $$default;
    final /* synthetic */ Alignment $alignment;
    final /* synthetic */ Artboard $artboard;
    final /* synthetic */ int $clearColor;
    final /* synthetic */ RiveFile $file;
    final /* synthetic */ Fit $fit;
    final /* synthetic */ a1.a $modifier;
    final /* synthetic */ String $stateMachineName;
    final /* synthetic */ ViewModelInstance $viewModelInstance;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$10(RiveFile riveFile, a1.a aVar, Artboard artboard, String str, ViewModelInstance viewModelInstance, Fit fit, Alignment alignment, int i10, int i11, int i12) {
        super(2);
        this.$file = riveFile;
        this.$modifier = aVar;
        this.$artboard = artboard;
        this.$stateMachineName = str;
        this.$viewModelInstance = viewModelInstance;
        this.$fit = fit;
        this.$alignment = alignment;
        this.$clearColor = i10;
        this.$$changed = i11;
        this.$$default = i12;
    }

    @Override // kotlin.jvm.functions.Function2
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
        b.a(obj);
        invoke((a) null, ((Number) obj2).intValue());
        return Unit.f31988a;
    }

    public final void invoke(a aVar, int i10) {
        RiveUIKt.RiveUI(this.$file, this.$modifier, this.$artboard, this.$stateMachineName, this.$viewModelInstance, this.$fit, this.$alignment, this.$clearColor, aVar, x.a(this.$$changed | 1), this.$$default);
    }
}
