package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMember;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final o f34069d = new o();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean n02;
        n02 = LazyJavaClassMemberScope.n0((JavaMember) obj);
        return Boolean.valueOf(n02);
    }
}
