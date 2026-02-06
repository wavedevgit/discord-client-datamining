package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinTypeRefiner f34754d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyWrappedType f34755e;

    public p(KotlinTypeRefiner kotlinTypeRefiner, LazyWrappedType lazyWrappedType) {
        this.f34754d = kotlinTypeRefiner;
        this.f34755e = lazyWrappedType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType d10;
        d10 = LazyWrappedType.d(this.f34754d, this.f34755e);
        return d10;
    }
}
