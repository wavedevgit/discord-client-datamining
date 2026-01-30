package kotlin.reflect.jvm.internal.impl.descriptors.runtime.components;

import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinder;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.builtins.BuiltInSerializerProtocol;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.builtins.BuiltInsResourceLoader;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nReflectKotlinClassFinder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReflectKotlinClassFinder.kt\norg/jetbrains/kotlin/descriptors/runtime/components/ReflectKotlinClassFinder\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,65:1\n1#2:66\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectKotlinClassFinder implements KotlinClassFinder {

    /* renamed from: a  reason: collision with root package name */
    private final ClassLoader f33897a;

    /* renamed from: b  reason: collision with root package name */
    private final BuiltInsResourceLoader f33898b;

    public ReflectKotlinClassFinder(@NotNull ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f33897a = classLoader;
        this.f33898b = new BuiltInsResourceLoader();
    }

    private final KotlinClassFinder.Result a(String str) {
        ReflectKotlinClass create;
        Class<?> tryLoadClass = ReflectJavaClassFinderKt.tryLoadClass(this.f33897a, str);
        if (tryLoadClass == null || (create = ReflectKotlinClass.Factory.create(tryLoadClass)) == null) {
            return null;
        }
        return new KotlinClassFinder.Result.KotlinClass(create, null, 2, null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.KotlinMetadataFinder
    public InputStream findBuiltInsData(@NotNull FqName packageFqName) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        if (!packageFqName.startsWith(StandardNames.BUILT_INS_PACKAGE_NAME)) {
            return null;
        }
        return this.f33898b.loadResource(BuiltInSerializerProtocol.INSTANCE.getBuiltInsFilePath(packageFqName));
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinder
    public KotlinClassFinder.Result findKotlinClassOrContent(@NotNull ClassId classId, @NotNull MetadataVersion metadataVersion) {
        String a10;
        Intrinsics.checkNotNullParameter(classId, "classId");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        a10 = ReflectKotlinClassFinderKt.a(classId);
        return a(a10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinder
    public KotlinClassFinder.Result findKotlinClassOrContent(@NotNull JavaClass javaClass, @NotNull MetadataVersion metadataVersion) {
        String asString;
        Intrinsics.checkNotNullParameter(javaClass, "javaClass");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        FqName fqName = javaClass.getFqName();
        if (fqName == null || (asString = fqName.asString()) == null) {
            return null;
        }
        return a(asString);
    }
}
