package bm;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final Function0 f6839a;

    public a(Function0 controllerProvider) {
        Intrinsics.checkNotNullParameter(controllerProvider, "controllerProvider");
        this.f6839a = controllerProvider;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final am.b a() {
        return (am.b) this.f6839a.invoke();
    }
}
