package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMember;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final k0 f34268d = new k0();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean c02;
        c02 = LazyJavaStaticClassScope.c0((JavaMember) obj);
        return Boolean.valueOf(c02);
    }
}
