package ds;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final m f22392d = new m();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean e10;
        e10 = n.e((ClassDescriptor) obj);
        return Boolean.valueOf(e10);
    }
}
