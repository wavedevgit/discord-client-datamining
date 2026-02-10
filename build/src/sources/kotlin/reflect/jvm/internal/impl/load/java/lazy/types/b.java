package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDescriptor f32801d;

    /* renamed from: e  reason: collision with root package name */
    private final RawSubstitution f32802e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f32803i;

    /* renamed from: o  reason: collision with root package name */
    private final JavaTypeAttributes f32804o;

    public b(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes) {
        this.f32801d = classDescriptor;
        this.f32802e = rawSubstitution;
        this.f32803i = simpleType;
        this.f32804o = javaTypeAttributes;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType c10;
        c10 = RawSubstitution.c(this.f32801d, this.f32802e, this.f32803i, this.f32804o, (KotlinTypeRefiner) obj);
        return c10;
    }
}
