package em;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final Function0 f22923a;

    public a(Function0 controllerProvider) {
        Intrinsics.checkNotNullParameter(controllerProvider, "controllerProvider");
        this.f22923a = controllerProvider;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final dm.b a() {
        return (dm.b) this.f22923a.invoke();
    }
}
