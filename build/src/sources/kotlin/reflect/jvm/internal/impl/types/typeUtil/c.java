package kotlin.reflect.jvm.internal.impl.types.typeUtil;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f36038d = new c();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean i10;
        i10 = TypeUtilsKt.i((UnwrappedType) obj);
        return Boolean.valueOf(i10);
    }
}
