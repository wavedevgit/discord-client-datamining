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
    private final JavaTypeResolver f32796d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeParameterDescriptor f32797e;

    /* renamed from: i  reason: collision with root package name */
    private final JavaTypeAttributes f32798i;

    /* renamed from: o  reason: collision with root package name */
    private final TypeConstructor f32799o;

    /* renamed from: p  reason: collision with root package name */
    private final JavaClassifierType f32800p;

    public a(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        this.f32796d = javaTypeResolver;
        this.f32797e = typeParameterDescriptor;
        this.f32798i = javaTypeAttributes;
        this.f32799o = typeConstructor;
        this.f32800p = javaClassifierType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType e10;
        e10 = JavaTypeResolver.e(this.f32796d, this.f32797e, this.f32798i, this.f32799o, this.f32800p);
        return e10;
    }
}
