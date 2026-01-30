package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final d f34117d = new d();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean e10;
        e10 = BuiltinMethodsWithSpecialGenericSignature.e((CallableMemberDescriptor) obj);
        return Boolean.valueOf(e10);
    }
}
