package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f34334d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f34335e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f34336i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f34337o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f34334d = classDescriptor;
        this.f34335e = rawSubstitution;
        this.f34336i = simpleType;
        this.f34337o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f34334d, this.f34335e, this.f34336i, this.f34337o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
