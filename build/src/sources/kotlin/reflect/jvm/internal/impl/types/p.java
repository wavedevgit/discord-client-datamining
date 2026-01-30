package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinTypeRefiner f36044d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyWrappedType f36045e;

    public p(KotlinTypeRefiner kotlinTypeRefiner, LazyWrappedType lazyWrappedType) {
        this.f36044d = kotlinTypeRefiner;
        this.f36045e = lazyWrappedType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType d10;
        d10 = LazyWrappedType.d(this.f36044d, this.f36045e);
        return d10;
    }
}
