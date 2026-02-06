package dq;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Map f21107a;

    public i(Map componentNameToComponentView) {
        Intrinsics.checkNotNullParameter(componentNameToComponentView, "componentNameToComponentView");
        this.f21107a = componentNameToComponentView;
    }

    public final Map a() {
        return this.f21107a;
    }
}
