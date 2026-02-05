package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final i f32375d = new i();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean f10;
        f10 = TypeParameterUtilsKt.f((DeclarationDescriptor) obj);
        return Boolean.valueOf(f10);
    }
}
