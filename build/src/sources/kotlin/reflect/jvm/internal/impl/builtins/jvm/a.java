package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltInClassDescriptorFactory f32259d;

    /* renamed from: e  reason: collision with root package name */
    private final StorageManager f32260e;

    public a(JvmBuiltInClassDescriptorFactory jvmBuiltInClassDescriptorFactory, StorageManager storageManager) {
        this.f32259d = jvmBuiltInClassDescriptorFactory;
        this.f32260e = storageManager;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ClassDescriptorImpl d10;
        d10 = JvmBuiltInClassDescriptorFactory.d(this.f32259d, this.f32260e);
        return d10;
    }
}
