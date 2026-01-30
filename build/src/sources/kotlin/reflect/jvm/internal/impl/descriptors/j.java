package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final j f33888d = new j();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean g10;
        g10 = TypeParameterUtilsKt.g((DeclarationDescriptor) obj);
        return Boolean.valueOf(g10);
    }
}
