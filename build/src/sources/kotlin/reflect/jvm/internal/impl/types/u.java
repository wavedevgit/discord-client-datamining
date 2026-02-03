package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class u implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final StarProjectionImpl f35228d;

    public u(StarProjectionImpl starProjectionImpl) {
        this.f35228d = starProjectionImpl;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType a10;
        a10 = StarProjectionImpl.a(this.f35228d);
        return a10;
    }
}
