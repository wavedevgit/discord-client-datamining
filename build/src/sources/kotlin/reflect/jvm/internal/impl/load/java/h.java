package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final NullabilityAnnotationStatesImpl f34112d;

    public h(NullabilityAnnotationStatesImpl nullabilityAnnotationStatesImpl) {
        this.f34112d = nullabilityAnnotationStatesImpl;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Object b10;
        b10 = NullabilityAnnotationStatesImpl.b(this.f34112d, (FqName) obj);
        return b10;
    }
}
