package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class u implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final StarProjectionImpl f34820d;

    public u(StarProjectionImpl starProjectionImpl) {
        this.f34820d = starProjectionImpl;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType a10;
        a10 = StarProjectionImpl.a(this.f34820d);
        return a10;
    }
}
