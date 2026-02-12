package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final j f32820d = new j();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean f10;
        f10 = SpecialBuiltinMembers.f((CallableMemberDescriptor) obj);
        return Boolean.valueOf(f10);
    }
}
