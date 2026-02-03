package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMethod;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDeclaredMemberIndex f33426d;

    public a(ClassDeclaredMemberIndex classDeclaredMemberIndex) {
        this.f33426d = classDeclaredMemberIndex;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean b10;
        b10 = ClassDeclaredMemberIndex.b(this.f33426d, (JavaMethod) obj);
        return Boolean.valueOf(b10);
    }
}
