package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final IntersectionTypeConstructor f35195d;

    public m(IntersectionTypeConstructor intersectionTypeConstructor) {
        this.f35195d = intersectionTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType d10;
        d10 = IntersectionTypeConstructor.d(this.f35195d, (KotlinTypeRefiner) obj);
        return d10;
    }
}
