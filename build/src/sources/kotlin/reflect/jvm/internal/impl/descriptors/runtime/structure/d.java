package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.Name;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final d f33737d = new d();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Name b10;
        b10 = ReflectJavaClass.b((Class) obj);
        return b10;
    }
}
