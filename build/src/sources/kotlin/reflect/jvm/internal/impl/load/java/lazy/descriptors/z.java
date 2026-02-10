package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Ref;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaField;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class z implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f32775d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaField f32776e;

    /* renamed from: i  reason: collision with root package name */
    private final Ref.ObjectRef f32777i;

    public z(LazyJavaScope lazyJavaScope, JavaField javaField, Ref.ObjectRef objectRef) {
        this.f32775d = lazyJavaScope;
        this.f32776e = javaField;
        this.f32777i = objectRef;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        NullableLazyValue R;
        R = LazyJavaScope.R(this.f32775d, this.f32776e, this.f32777i);
        return R;
    }
}
