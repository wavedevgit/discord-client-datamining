package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f34717d;

    public k(Function1 function1) {
        this.f34717d = function1;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CharSequence f10;
        f10 = IntersectionTypeConstructor.f(this.f34717d, (KotlinType) obj);
        return f10;
    }
}
