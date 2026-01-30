package kotlin.reflect.jvm.internal.impl.types.typeUtil;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final d f36055d = new d();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean j10;
        j10 = TypeUtilsKt.j((UnwrappedType) obj);
        return Boolean.valueOf(j10);
    }
}
