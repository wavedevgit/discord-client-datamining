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
    private final JavaTypeResolver f33018d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeParameterDescriptor f33019e;

    /* renamed from: i  reason: collision with root package name */
    private final JavaTypeAttributes f33020i;

    /* renamed from: o  reason: collision with root package name */
    private final TypeConstructor f33021o;

    /* renamed from: p  reason: collision with root package name */
    private final JavaClassifierType f33022p;

    public a(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        this.f33018d = javaTypeResolver;
        this.f33019e = typeParameterDescriptor;
        this.f33020i = javaTypeAttributes;
        this.f33021o = typeConstructor;
        this.f33022p = javaClassifierType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType e10;
        e10 = JavaTypeResolver.e(this.f33018d, this.f33019e, this.f33020i, this.f33021o, this.f33022p);
        return e10;
    }
}
