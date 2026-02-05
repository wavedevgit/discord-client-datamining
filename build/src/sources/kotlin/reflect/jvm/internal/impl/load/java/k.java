package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final k f32821d = new k();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean g10;
        g10 = SpecialBuiltinMembers.g((CallableMemberDescriptor) obj);
        return Boolean.valueOf(g10);
    }
}
