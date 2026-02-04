package wl;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final Function0 f52481a;

    public a(Function0 controllerProvider) {
        Intrinsics.checkNotNullParameter(controllerProvider, "controllerProvider");
        this.f52481a = controllerProvider;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final vl.b a() {
        return (vl.b) this.f52481a.invoke();
    }
}
