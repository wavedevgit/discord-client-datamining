package is;

import is.c1;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d1 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f30183d;

    public d1(c1 c1Var) {
        this.f30183d = c1Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        RuntimeModuleData c10;
        c10 = c1.b.c(this.f30183d);
        return c10;
    }
}
