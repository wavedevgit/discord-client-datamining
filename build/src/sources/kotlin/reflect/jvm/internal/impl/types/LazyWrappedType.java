package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyWrappedType extends WrappedType {

    /* renamed from: e  reason: collision with root package name */
    private final StorageManager f34633e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f34634i;

    /* renamed from: o  reason: collision with root package name */
    private final NotNullLazyValue f34635o;

    public LazyWrappedType(@NotNull StorageManager storageManager, @NotNull Function0<? extends KotlinType> computation) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(computation, "computation");
        this.f34633e = storageManager;
        this.f34634i = computation;
        this.f34635o = storageManager.createLazyValue(computation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType d(KotlinTypeRefiner kotlinTypeRefiner, LazyWrappedType lazyWrappedType) {
        return kotlinTypeRefiner.refineType((KotlinTypeMarker) lazyWrappedType.f34634i.invoke());
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.WrappedType
    protected KotlinType b() {
        return (KotlinType) this.f34635o.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.WrappedType
    public boolean isComputed() {
        return this.f34635o.isComputed();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public LazyWrappedType refine(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        return new LazyWrappedType(this.f34633e, new p(kotlinTypeRefiner, this));
    }
}
