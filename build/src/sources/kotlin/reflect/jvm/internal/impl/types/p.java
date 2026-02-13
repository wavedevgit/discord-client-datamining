package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinTypeRefiner f35302d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyWrappedType f35303e;

    public p(KotlinTypeRefiner kotlinTypeRefiner, LazyWrappedType lazyWrappedType) {
        this.f35302d = kotlinTypeRefiner;
        this.f35303e = lazyWrappedType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType d10;
        d10 = LazyWrappedType.d(this.f35302d, this.f35303e);
        return d10;
    }
}
