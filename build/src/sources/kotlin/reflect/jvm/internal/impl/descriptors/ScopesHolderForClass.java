package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ScopesHolderForClass<T extends MemberScope> {

    /* renamed from: a  reason: collision with root package name */
    private final ClassDescriptor f32786a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f32787b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinTypeRefiner f32788c;

    /* renamed from: d  reason: collision with root package name */
    private final NotNullLazyValue f32789d;

    /* renamed from: e  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32785e = {Reflection.property1(new PropertyReference1Impl(ScopesHolderForClass.class, "scopeForOwnerModule", "getScopeForOwnerModule()Lorg/jetbrains/kotlin/resolve/scopes/MemberScope;", 0))};
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final <T extends MemberScope> ScopesHolderForClass<T> create(@NotNull ClassDescriptor classDescriptor, @NotNull StorageManager storageManager, @NotNull KotlinTypeRefiner kotlinTypeRefinerForOwnerModule, @NotNull Function1<? super KotlinTypeRefiner, ? extends T> scopeFactory) {
            Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
            Intrinsics.checkNotNullParameter(storageManager, "storageManager");
            Intrinsics.checkNotNullParameter(kotlinTypeRefinerForOwnerModule, "kotlinTypeRefinerForOwnerModule");
            Intrinsics.checkNotNullParameter(scopeFactory, "scopeFactory");
            return new ScopesHolderForClass<>(classDescriptor, storageManager, scopeFactory, kotlinTypeRefinerForOwnerModule, null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ ScopesHolderForClass(ClassDescriptor classDescriptor, StorageManager storageManager, Function1 function1, KotlinTypeRefiner kotlinTypeRefiner, DefaultConstructorMarker defaultConstructorMarker) {
        this(classDescriptor, storageManager, function1, kotlinTypeRefiner);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MemberScope c(ScopesHolderForClass scopesHolderForClass, KotlinTypeRefiner kotlinTypeRefiner) {
        return (MemberScope) scopesHolderForClass.f32787b.invoke(kotlinTypeRefiner);
    }

    private final MemberScope d() {
        return (MemberScope) StorageKt.getValue(this.f32789d, this, f32785e[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MemberScope e(ScopesHolderForClass scopesHolderForClass) {
        return (MemberScope) scopesHolderForClass.f32787b.invoke(scopesHolderForClass.f32788c);
    }

    @NotNull
    public final T getScope(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        if (!kotlinTypeRefiner.isRefinementNeededForModule(DescriptorUtilsKt.getModule(this.f32786a))) {
            return (T) d();
        }
        TypeConstructor typeConstructor = this.f32786a.getTypeConstructor();
        Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
        if (!kotlinTypeRefiner.isRefinementNeededForTypeConstructor(typeConstructor)) {
            return (T) d();
        }
        return (T) kotlinTypeRefiner.getOrPutScopeForClass(this.f32786a, new h(this, kotlinTypeRefiner));
    }

    private ScopesHolderForClass(ClassDescriptor classDescriptor, StorageManager storageManager, Function1 function1, KotlinTypeRefiner kotlinTypeRefiner) {
        this.f32786a = classDescriptor;
        this.f32787b = function1;
        this.f32788c = kotlinTypeRefiner;
        this.f32789d = storageManager.createLazyValue(new g(this));
    }
}
