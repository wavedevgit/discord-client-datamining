package com.facebook.react.uimanager;

import com.facebook.react.common.ClearableSynchronizedPool;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.yoga.YogaNode;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H\u0007R!\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00058BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\t\u0010\n\u001a\u0004\b\u0007\u0010\b¨\u0006\f"}, d2 = {"Lcom/facebook/react/uimanager/YogaNodePool;", "", "<init>", "()V", "pool", "Lcom/facebook/react/common/ClearableSynchronizedPool;", "Lcom/facebook/yoga/YogaNode;", "getPool", "()Lcom/facebook/react/common/ClearableSynchronizedPool;", "pool$delegate", "Lkotlin/Lazy;", "get", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class YogaNodePool {
    @NotNull
    public static final YogaNodePool INSTANCE = new YogaNodePool();
    @NotNull
    private static final Lazy pool$delegate;

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("YogaNodePool", LegacyArchitectureLogLevel.ERROR);
        pool$delegate = ir.l.a(ir.o.f31118d, new Function0() { // from class: com.facebook.react.uimanager.j0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ClearableSynchronizedPool pool_delegate$lambda$0;
                pool_delegate$lambda$0 = YogaNodePool.pool_delegate$lambda$0();
                return pool_delegate$lambda$0;
            }
        });
    }

    private YogaNodePool() {
    }

    @NotNull
    public static final ClearableSynchronizedPool<YogaNode> get() {
        return INSTANCE.getPool();
    }

    private final ClearableSynchronizedPool<YogaNode> getPool() {
        return (ClearableSynchronizedPool) pool$delegate.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClearableSynchronizedPool pool_delegate$lambda$0() {
        return new ClearableSynchronizedPool(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
    }
}
