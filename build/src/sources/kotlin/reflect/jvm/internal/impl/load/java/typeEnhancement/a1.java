package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a1 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final a1 f34163d = new a1();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean p10;
        p10 = SignatureEnhancement.p((UnwrappedType) obj);
        return Boolean.valueOf(p10);
    }
}
