package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.AnnotationValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ArrayValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.EnumValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.StringValue;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import lr.v;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AnnotationUtilKt {

    /* renamed from: a */
    private static final Name f32804a;

    /* renamed from: b */
    private static final Name f32805b;

    /* renamed from: c */
    private static final Name f32806c;

    /* renamed from: d */
    private static final Name f32807d;

    /* renamed from: e */
    private static final Name f32808e;

    static {
        Name identifier = Name.identifier("message");
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        f32804a = identifier;
        Name identifier2 = Name.identifier("replaceWith");
        Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
        f32805b = identifier2;
        Name identifier3 = Name.identifier("level");
        Intrinsics.checkNotNullExpressionValue(identifier3, "identifier(...)");
        f32806c = identifier3;
        Name identifier4 = Name.identifier("expression");
        Intrinsics.checkNotNullExpressionValue(identifier4, "identifier(...)");
        f32807d = identifier4;
        Name identifier5 = Name.identifier("imports");
        Intrinsics.checkNotNullExpressionValue(identifier5, "identifier(...)");
        f32808e = identifier5;
    }

    public static final KotlinType b(KotlinBuiltIns kotlinBuiltIns, ModuleDescriptor module) {
        Intrinsics.checkNotNullParameter(module, "module");
        SimpleType arrayType = module.getBuiltIns().getArrayType(Variance.INVARIANT, kotlinBuiltIns.getStringType());
        Intrinsics.checkNotNullExpressionValue(arrayType, "getArrayType(...)");
        return arrayType;
    }

    @NotNull
    public static final AnnotationDescriptor createDeprecatedAnnotation(@NotNull KotlinBuiltIns kotlinBuiltIns, @NotNull String message, @NotNull String replaceWith, @NotNull String level, boolean z10) {
        Intrinsics.checkNotNullParameter(kotlinBuiltIns, "<this>");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(replaceWith, "replaceWith");
        Intrinsics.checkNotNullParameter(level, "level");
        BuiltInAnnotationDescriptor builtInAnnotationDescriptor = new BuiltInAnnotationDescriptor(kotlinBuiltIns, StandardNames.FqNames.replaceWith, o0.m(v.a(f32807d, new StringValue(replaceWith)), v.a(f32808e, new ArrayValue(CollectionsKt.l(), new a(kotlinBuiltIns)))), false, 8, null);
        FqName fqName = StandardNames.FqNames.deprecated;
        Pair a10 = v.a(f32804a, new StringValue(message));
        Pair a11 = v.a(f32805b, new AnnotationValue(builtInAnnotationDescriptor));
        Name name = f32806c;
        ClassId classId = ClassId.Companion.topLevel(StandardNames.FqNames.deprecationLevel);
        Name identifier = Name.identifier(level);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new BuiltInAnnotationDescriptor(kotlinBuiltIns, fqName, o0.m(a10, a11, v.a(name, new EnumValue(classId, identifier))), z10);
    }

    public static /* synthetic */ AnnotationDescriptor createDeprecatedAnnotation$default(KotlinBuiltIns kotlinBuiltIns, String str, String str2, String str3, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = "";
        }
        if ((i10 & 4) != 0) {
            str3 = "WARNING";
        }
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        return createDeprecatedAnnotation(kotlinBuiltIns, str, str2, str3, z10);
    }
}
