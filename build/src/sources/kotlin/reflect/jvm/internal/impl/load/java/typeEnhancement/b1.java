package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b1 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final b1 f34167d = new b1();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Boolean g10;
        g10 = SignatureEnhancement.g((UnwrappedType) obj);
        return g10;
    }
}
