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
    private final JavaTypeResolver f33495d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeParameterDescriptor f33496e;

    /* renamed from: i  reason: collision with root package name */
    private final JavaTypeAttributes f33497i;

    /* renamed from: o  reason: collision with root package name */
    private final TypeConstructor f33498o;

    /* renamed from: p  reason: collision with root package name */
    private final JavaClassifierType f33499p;

    public a(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        this.f33495d = javaTypeResolver;
        this.f33496e = typeParameterDescriptor;
        this.f33497i = javaTypeAttributes;
        this.f33498o = typeConstructor;
        this.f33499p = javaClassifierType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType e10;
        e10 = JavaTypeResolver.e(this.f33495d, this.f33496e, this.f33497i, this.f33498o, this.f33499p);
        return e10;
    }
}
