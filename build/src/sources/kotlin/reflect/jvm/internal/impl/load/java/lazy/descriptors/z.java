package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Ref;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaField;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class z implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f33474d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaField f33475e;

    /* renamed from: i  reason: collision with root package name */
    private final Ref.ObjectRef f33476i;

    public z(LazyJavaScope lazyJavaScope, JavaField javaField, Ref.ObjectRef objectRef) {
        this.f33474d = lazyJavaScope;
        this.f33475e = javaField;
        this.f33476i = objectRef;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        NullableLazyValue R;
        R = LazyJavaScope.R(this.f33474d, this.f33475e, this.f33476i);
        return R;
    }
}
