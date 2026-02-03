package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNamesUtilKt;
import kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class NullabilityAnnotationStatesImpl<T> implements NullabilityAnnotationStates<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Map f33215a;

    /* renamed from: b  reason: collision with root package name */
    private final LockBasedStorageManager f33216b;

    /* renamed from: c  reason: collision with root package name */
    private final MemoizedFunctionToNullable f33217c;

    public NullabilityAnnotationStatesImpl(@NotNull Map<FqName, ? extends T> states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f33215a = states;
        LockBasedStorageManager lockBasedStorageManager = new LockBasedStorageManager("Java nullability annotation states");
        this.f33216b = lockBasedStorageManager;
        MemoizedFunctionToNullable createMemoizedFunctionWithNullableValues = lockBasedStorageManager.createMemoizedFunctionWithNullableValues(new h(this));
        Intrinsics.checkNotNullExpressionValue(createMemoizedFunctionWithNullableValues, "createMemoizedFunctionWithNullableValues(...)");
        this.f33217c = createMemoizedFunctionWithNullableValues;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object b(NullabilityAnnotationStatesImpl nullabilityAnnotationStatesImpl, FqName fqName) {
        Intrinsics.checkNotNull(fqName);
        return FqNamesUtilKt.findValueForMostSpecificFqname(fqName, nullabilityAnnotationStatesImpl.f33215a);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.NullabilityAnnotationStates
    public T get(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return (T) this.f33217c.invoke(fqName);
    }
}
