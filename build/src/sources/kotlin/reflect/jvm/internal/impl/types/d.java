package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final d f34672d = new d();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        AbstractTypeConstructor.b u10;
        u10 = AbstractTypeConstructor.u(((Boolean) obj).booleanValue());
        return u10;
    }
}
