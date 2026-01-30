package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class z0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final z0 f34451d = new z0();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType m10;
        m10 = SignatureEnhancement.m((CallableMemberDescriptor) obj);
        return m10;
    }
}
