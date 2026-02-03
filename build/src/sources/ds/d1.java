package ds;

import ds.c1;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d1 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f22178d;

    public d1(c1 c1Var) {
        this.f22178d = c1Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        RuntimeModuleData c10;
        c10 = c1.b.c(this.f22178d);
        return c10;
    }
}
