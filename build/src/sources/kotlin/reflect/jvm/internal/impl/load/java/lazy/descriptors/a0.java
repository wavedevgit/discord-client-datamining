package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Ref;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaField;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f33519d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaField f33520e;

    /* renamed from: i  reason: collision with root package name */
    private final Ref.ObjectRef f33521i;

    public a0(LazyJavaScope lazyJavaScope, JavaField javaField, Ref.ObjectRef objectRef) {
        this.f33519d = lazyJavaScope;
        this.f33520e = javaField;
        this.f33521i = objectRef;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ConstantValue S;
        S = LazyJavaScope.S(this.f33519d, this.f33520e, this.f33521i);
        return S;
    }
}
