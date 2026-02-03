package kotlin.reflect.jvm.internal.impl.resolve.jvm;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nSyntheticJavaPartsProvider.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SyntheticJavaPartsProvider.kt\norg/jetbrains/kotlin/resolve/jvm/CompositeSyntheticJavaPartsProvider\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,108:1\n1374#2:109\n1460#2,5:110\n1869#2,2:115\n1374#2:117\n1460#2,5:118\n1869#2,2:123\n1869#2,2:125\n1374#2:127\n1460#2,5:128\n1869#2,2:133\n1803#2,3:135\n*S KotlinDebug\n*F\n+ 1 SyntheticJavaPartsProvider.kt\norg/jetbrains/kotlin/resolve/jvm/CompositeSyntheticJavaPartsProvider\n*L\n55#1:109\n55#1:110,5\n64#1:115,2\n68#1:117\n68#1:118,5\n76#1:123,2\n84#1:125,2\n88#1:127\n88#1:128,5\n97#1:133,2\n105#1:135,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CompositeSyntheticJavaPartsProvider implements SyntheticJavaPartsProvider {

    /* renamed from: a  reason: collision with root package name */
    private final List f34632a;

    public CompositeSyntheticJavaPartsProvider(@NotNull List<? extends SyntheticJavaPartsProvider> inner) {
        Intrinsics.checkNotNullParameter(inner, "inner");
        this.f34632a = inner;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    public void generateConstructors(@NotNull ClassDescriptor thisDescriptor, @NotNull List<ClassConstructorDescriptor> result, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(c10, "c");
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            syntheticJavaPartsProvider.generateConstructors(thisDescriptor, result, c10);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    public void generateMethods(@NotNull ClassDescriptor thisDescriptor, @NotNull Name name, @NotNull Collection<SimpleFunctionDescriptor> result, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(c10, "c");
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            syntheticJavaPartsProvider.generateMethods(thisDescriptor, name, result, c10);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    public void generateNestedClass(@NotNull ClassDescriptor thisDescriptor, @NotNull Name name, @NotNull List<ClassDescriptor> result, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(c10, "c");
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            syntheticJavaPartsProvider.generateNestedClass(thisDescriptor, name, result, c10);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    public void generateStaticFunctions(@NotNull ClassDescriptor thisDescriptor, @NotNull Name name, @NotNull Collection<SimpleFunctionDescriptor> result, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(c10, "c");
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            syntheticJavaPartsProvider.generateStaticFunctions(thisDescriptor, name, result, c10);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    @NotNull
    public List<Name> getMethodNames(@NotNull ClassDescriptor thisDescriptor, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(c10, "c");
        ArrayList arrayList = new ArrayList();
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            CollectionsKt.B(arrayList, syntheticJavaPartsProvider.getMethodNames(thisDescriptor, c10));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    @NotNull
    public List<Name> getNestedClassNames(@NotNull ClassDescriptor thisDescriptor, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(c10, "c");
        ArrayList arrayList = new ArrayList();
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            CollectionsKt.B(arrayList, syntheticJavaPartsProvider.getNestedClassNames(thisDescriptor, c10));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    @NotNull
    public List<Name> getStaticFunctionNames(@NotNull ClassDescriptor thisDescriptor, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(c10, "c");
        ArrayList arrayList = new ArrayList();
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            CollectionsKt.B(arrayList, syntheticJavaPartsProvider.getStaticFunctionNames(thisDescriptor, c10));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider
    @NotNull
    public PropertyDescriptorImpl modifyField(@NotNull ClassDescriptor thisDescriptor, @NotNull PropertyDescriptorImpl propertyDescriptor, @NotNull LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(thisDescriptor, "thisDescriptor");
        Intrinsics.checkNotNullParameter(propertyDescriptor, "propertyDescriptor");
        Intrinsics.checkNotNullParameter(c10, "c");
        for (SyntheticJavaPartsProvider syntheticJavaPartsProvider : this.f34632a) {
            propertyDescriptor = syntheticJavaPartsProvider.modifyField(thisDescriptor, propertyDescriptor, c10);
        }
        return propertyDescriptor;
    }
}
