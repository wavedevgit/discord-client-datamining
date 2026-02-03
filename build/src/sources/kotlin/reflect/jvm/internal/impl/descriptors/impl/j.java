package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ValueParameterDescriptorImpl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ValueParameterDescriptorImpl.WithDestructuringDeclaration f33663d;

    public j(ValueParameterDescriptorImpl.WithDestructuringDeclaration withDestructuringDeclaration) {
        this.f33663d = withDestructuringDeclaration;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List c10;
        c10 = ValueParameterDescriptorImpl.WithDestructuringDeclaration.c(this.f33663d);
        return c10;
    }
}
