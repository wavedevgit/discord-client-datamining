package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f32840d = new c();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean d10;
        d10 = BuiltinMethodsWithSpecialGenericSignature.d((CallableMemberDescriptor) obj);
        return Boolean.valueOf(d10);
    }
}
