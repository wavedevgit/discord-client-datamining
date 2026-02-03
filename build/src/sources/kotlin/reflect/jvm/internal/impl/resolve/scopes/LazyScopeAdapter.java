package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyScopeAdapter extends AbstractScopeAdapter {

    /* renamed from: a  reason: collision with root package name */
    private final NotNullLazyValue f34677a;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public LazyScopeAdapter(@NotNull Function0<? extends MemberScope> getScope) {
        this(null, getScope, 1, null);
        Intrinsics.checkNotNullParameter(getScope, "getScope");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MemberScope c(Function0 function0) {
        MemberScope memberScope = (MemberScope) function0.invoke();
        if (memberScope instanceof AbstractScopeAdapter) {
            return ((AbstractScopeAdapter) memberScope).getActualScope();
        }
        return memberScope;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.AbstractScopeAdapter
    protected MemberScope a() {
        return (MemberScope) this.f34677a.invoke();
    }

    public /* synthetic */ LazyScopeAdapter(StorageManager storageManager, Function0 function0, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? LockBasedStorageManager.NO_LOCKS : storageManager, function0);
    }

    public LazyScopeAdapter(@NotNull StorageManager storageManager, @NotNull Function0<? extends MemberScope> getScope) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(getScope, "getScope");
        this.f34677a = storageManager.createLazyValue(new b(getScope));
    }
}
