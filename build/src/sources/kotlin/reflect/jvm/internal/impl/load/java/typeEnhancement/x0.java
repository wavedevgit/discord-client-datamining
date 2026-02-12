package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class x0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final x0 f33135d = new x0();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType n10;
        n10 = SignatureEnhancement.n((CallableMemberDescriptor) obj);
        return n10;
    }
}
