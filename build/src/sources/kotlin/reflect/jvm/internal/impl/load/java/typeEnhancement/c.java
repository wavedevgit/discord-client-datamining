package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractSignatureParts f33082d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f33083e;

    public c(AbstractSignatureParts abstractSignatureParts, TypeSystemContext typeSystemContext) {
        this.f33082d = abstractSignatureParts;
        this.f33083e = typeSystemContext;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Iterable p10;
        p10 = AbstractSignatureParts.p(this.f33082d, this.f33083e, (AbstractSignatureParts.a) obj);
        return p10;
    }
}
