package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final e f34109d = new e();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean b10;
        b10 = ClassicBuiltinSpecialProperties.b((CallableMemberDescriptor) obj);
        return Boolean.valueOf(b10);
    }
}
