package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final NullabilityAnnotationStatesImpl f33904d;

    public h(NullabilityAnnotationStatesImpl nullabilityAnnotationStatesImpl) {
        this.f33904d = nullabilityAnnotationStatesImpl;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Object b10;
        b10 = NullabilityAnnotationStatesImpl.b(this.f33904d, (FqName) obj);
        return b10;
    }
}
