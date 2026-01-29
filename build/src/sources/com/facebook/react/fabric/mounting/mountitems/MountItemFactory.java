package com.facebook.react.fabric.mounting.mountitems;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.StateWrapper;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0015\n\u0000\n\u0002\u0010\u0011\n\u0002\b\u0003\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J(\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000bH\u0007J(\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\u000bH\u0007J \u0010\r\u001a\u00020\u000e2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\u000f\u001a\u00020\u0007H\u0007J<\u0010\u0010\u001a\u00020\u000e2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\u0011\u001a\u00020\f2\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u00152\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\u0018\u0010\u0018\u001a\u00020\u000e2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0007H\u0007J5\u0010\u0019\u001a\u00020\u000e2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u001a\u001a\u00020\u001b2\u000e\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00010\u001d2\u0006\u0010\u001e\u001a\u00020\u0007H\u0007¢\u0006\u0002\u0010\u001f¨\u0006 "}, d2 = {"Lcom/facebook/react/fabric/mounting/mountitems/MountItemFactory;", "", "<init>", "()V", "createDispatchCommandMountItem", "Lcom/facebook/react/fabric/mounting/mountitems/DispatchCommandMountItem;", "surfaceId", "", "reactTag", "commandId", "commandArgs", "Lcom/facebook/react/bridge/ReadableArray;", "", "createSendAccessibilityEventMountItem", "Lcom/facebook/react/fabric/mounting/mountitems/MountItem;", "eventType", "createPreAllocateViewMountItem", "component", "props", "Lcom/facebook/react/bridge/ReadableMap;", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "isLayoutable", "", "createDestroyViewMountItem", "createIntBufferBatchMountItem", "intBuf", "", "objBuf", "", "commitNumber", "(I[I[Ljava/lang/Object;I)Lcom/facebook/react/fabric/mounting/mountitems/MountItem;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MountItemFactory {
    @NotNull
    public static final MountItemFactory INSTANCE = new MountItemFactory();

    private MountItemFactory() {
    }

    @NotNull
    public static final MountItem createDestroyViewMountItem(int i10, int i11) {
        return new DestroyUnmountedViewMountItem(i10, i11);
    }

    @NotNull
    public static final DispatchCommandMountItem createDispatchCommandMountItem(int i10, int i11, int i12, @NotNull ReadableArray commandArgs) {
        Intrinsics.checkNotNullParameter(commandArgs, "commandArgs");
        return new DispatchIntCommandMountItem(i10, i11, i12, commandArgs);
    }

    @NotNull
    public static final MountItem createIntBufferBatchMountItem(int i10, @NotNull int[] intBuf, @NotNull Object[] objBuf, int i11) {
        Intrinsics.checkNotNullParameter(intBuf, "intBuf");
        Intrinsics.checkNotNullParameter(objBuf, "objBuf");
        return new IntBufferBatchMountItem(i10, intBuf, objBuf, i11);
    }

    @NotNull
    public static final MountItem createPreAllocateViewMountItem(int i10, int i11, @NotNull String component, ReadableMap readableMap, StateWrapper stateWrapper, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        return new PreAllocateViewMountItem(i10, i11, component, readableMap, stateWrapper, z10);
    }

    @NotNull
    public static final MountItem createSendAccessibilityEventMountItem(int i10, int i11, int i12) {
        return new SendAccessibilityEventMountItem(i10, i11, i12);
    }

    @NotNull
    public static final DispatchCommandMountItem createDispatchCommandMountItem(int i10, int i11, @NotNull String commandId, @NotNull ReadableArray commandArgs) {
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        Intrinsics.checkNotNullParameter(commandArgs, "commandArgs");
        return new DispatchStringCommandMountItem(i10, i11, commandId, commandArgs);
    }
}
