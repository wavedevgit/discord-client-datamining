package app.rive.runtime.kotlin.renderers;

import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
@Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class RiveArtboardRenderer$1$1 extends FunctionReferenceImpl implements Function0<Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public RiveArtboardRenderer$1$1(Object obj) {
        super(0, obj, RiveArtboardRenderer.class, ViewProps.START, "start()V", 0);
    }

    @Override // kotlin.jvm.functions.Function0
    public /* bridge */ /* synthetic */ Object invoke() {
        m206invoke();
        return Unit.f33282a;
    }

    /* renamed from: invoke  reason: collision with other method in class */
    public final void m206invoke() {
        ((RiveArtboardRenderer) this.receiver).start();
    }
}
