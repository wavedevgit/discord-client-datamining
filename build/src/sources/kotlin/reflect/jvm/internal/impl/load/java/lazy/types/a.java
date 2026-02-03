package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassifierType;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JavaTypeResolver f34105d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeParameterDescriptor f34106e;

    /* renamed from: i  reason: collision with root package name */
    private final JavaTypeAttributes f34107i;

    /* renamed from: o  reason: collision with root package name */
    private final TypeConstructor f34108o;

    /* renamed from: p  reason: collision with root package name */
    private final JavaClassifierType f34109p;

    public a(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        this.f34105d = javaTypeResolver;
        this.f34106e = typeParameterDescriptor;
        this.f34107i = javaTypeAttributes;
        this.f34108o = typeConstructor;
        this.f34109p = javaClassifierType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType e10;
        e10 = JavaTypeResolver.e(this.f34105d, this.f34106e, this.f34107i, this.f34108o, this.f34109p);
        return e10;
    }
}
