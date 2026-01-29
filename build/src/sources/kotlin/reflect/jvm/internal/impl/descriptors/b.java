package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f33660d = new b();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        int b10;
        b10 = FindClassInModuleKt.b((ClassId) obj);
        return Integer.valueOf(b10);
    }
}
