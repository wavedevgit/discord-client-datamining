package com.discord.portals.from_native;

import android.view.View;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import java.lang.ref.WeakReference;
import java.util.LinkedHashMap;
import java.util.Map;
import js.l0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001#B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003Jl\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00062\u0006\u0010\u0012\u001a\u00020\u00132\u0012\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00100\u00152\u0014\b\u0002\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00100\u00152\u0014\b\u0002\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00100\u00152\u0012\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00100\u0015H\u0007J(\u0010\u0019\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\u001b2\u0010\b\u0002\u0010\u001c\u001a\n\u0012\u0004\u0012\u00020\u0010\u0018\u00010\u001dJ\u000e\u0010\u001e\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0006J\u0010\u0010\u001f\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0011\u001a\u00020\u0006J\u0017\u0010 \u001a\u0004\u0018\u00010!2\b\u0010\u0011\u001a\u0004\u0018\u00010\u0006¢\u0006\u0002\u0010\"R\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u0010\b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\n0\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0019\u0010\u000b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\n0\f¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000e¨\u0006$"}, d2 = {"Lcom/discord/portals/from_native/PortalFromNativeContextManager;", "", "<init>", "()V", "portalContextMap", "", "", "Lcom/discord/portals/from_native/PortalFromNativeContext;", "_portalContextIdsFlow", "Lkotlinx/coroutines/flow/MutableStateFlow;", "Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event;", "portalContextIdsFlow", "Lkotlinx/coroutines/flow/Flow;", "getPortalContextIdsFlow", "()Lkotlinx/coroutines/flow/Flow;", "addPortal", "", "portal", "view", "Landroid/view/View;", "removeViewFromParent", "Lkotlin/Function1;", "onViewAddedToPortal", "onViewRemovedFromPortal", "returnViewToParent", "registerView", "portalView", "Lcom/discord/portals/from_native/PortalHolderViewGroup;", "onViewRegistered", "Lkotlin/Function0;", "unregisterView", "getView", "isMediaViewBeingPortaled", "", "(Ljava/lang/Double;)Ljava/lang/Boolean;", "Event", "portals_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PortalFromNativeContextManager {
    @NotNull
    private static MutableStateFlow _portalContextIdsFlow;
    @NotNull
    private static final Flow portalContextIdsFlow;
    @NotNull
    public static final PortalFromNativeContextManager INSTANCE = new PortalFromNativeContextManager();
    @NotNull
    private static Map<Double, PortalFromNativeContext> portalContextMap = new LinkedHashMap();

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0001\u0004B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0001\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event;", "", "<init>", "()V", "PortalRegistered", "Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event$PortalRegistered;", "portals_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class Event {

        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event$PortalRegistered;", "Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event;", "<init>", "()V", "portals_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class PortalRegistered extends Event {
            @NotNull
            public static final PortalRegistered INSTANCE = new PortalRegistered();

            private PortalRegistered() {
                super(null);
            }
        }

        public /* synthetic */ Event(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Event() {
        }
    }

    static {
        MutableStateFlow a10 = l0.a(null);
        _portalContextIdsFlow = a10;
        portalContextIdsFlow = a10;
    }

    private PortalFromNativeContextManager() {
    }

    public static /* synthetic */ void addPortal$default(PortalFromNativeContextManager portalFromNativeContextManager, double d10, View view, Function1 function1, Function1 function12, Function1 function13, Function1 function14, int i10, Object obj) {
        Function1 function15 = function12;
        if ((i10 & 8) != 0) {
            function15 = new Function1() { // from class: com.discord.portals.from_native.a
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit addPortal$lambda$0;
                    addPortal$lambda$0 = PortalFromNativeContextManager.addPortal$lambda$0((View) obj2);
                    return addPortal$lambda$0;
                }
            };
        }
        Function1 function16 = function15;
        Function1 function17 = function13;
        if ((i10 & 16) != 0) {
            function17 = new Function1() { // from class: com.discord.portals.from_native.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit addPortal$lambda$1;
                    addPortal$lambda$1 = PortalFromNativeContextManager.addPortal$lambda$1((View) obj2);
                    return addPortal$lambda$1;
                }
            };
        }
        portalFromNativeContextManager.addPortal(d10, view, function1, function16, function17, function14);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit addPortal$lambda$0(View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit addPortal$lambda$1(View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33298a;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ void registerView$default(PortalFromNativeContextManager portalFromNativeContextManager, double d10, PortalHolderViewGroup portalHolderViewGroup, Function0 function0, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            function0 = null;
        }
        portalFromNativeContextManager.registerView(d10, portalHolderViewGroup, function0);
    }

    public final void addPortal(double d10, @NotNull View view, @NotNull Function1<? super View, Unit> removeViewFromParent, @NotNull Function1<? super View, Unit> onViewAddedToPortal, @NotNull Function1<? super View, Unit> onViewRemovedFromPortal, @NotNull Function1<? super View, Unit> returnViewToParent) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(removeViewFromParent, "removeViewFromParent");
        Intrinsics.checkNotNullParameter(onViewAddedToPortal, "onViewAddedToPortal");
        Intrinsics.checkNotNullParameter(onViewRemovedFromPortal, "onViewRemovedFromPortal");
        Intrinsics.checkNotNullParameter(returnViewToParent, "returnViewToParent");
        if (portalContextMap.get(Double.valueOf(d10)) != null) {
            return;
        }
        portalContextMap.put(Double.valueOf(d10), new PortalFromNativeContext(new WeakReference(view), removeViewFromParent, onViewAddedToPortal, onViewRemovedFromPortal, returnViewToParent));
    }

    @NotNull
    public final Flow getPortalContextIdsFlow() {
        return portalContextIdsFlow;
    }

    public final View getView(double d10) {
        WeakReference<View> view;
        PortalFromNativeContext portalFromNativeContext = portalContextMap.get(Double.valueOf(d10));
        if (portalFromNativeContext != null && (view = portalFromNativeContext.getView()) != null) {
            return view.get();
        }
        return null;
    }

    public final Boolean isMediaViewBeingPortaled(Double d10) {
        if (portalContextMap.isEmpty()) {
            return null;
        }
        return Boolean.valueOf(portalContextMap.containsKey(d10));
    }

    public final void registerView(double d10, @NotNull PortalHolderViewGroup portalView, Function0<Unit> function0) {
        View view;
        Intrinsics.checkNotNullParameter(portalView, "portalView");
        PortalFromNativeContext portalFromNativeContext = portalContextMap.get(Double.valueOf(d10));
        if (portalFromNativeContext != null && (view = portalFromNativeContext.getView().get()) != null && !Intrinsics.areEqual(view.getParent(), portalView)) {
            portalFromNativeContext.getRemoveViewFromParent().invoke(view);
            portalView.addView(view);
            ViewMeasureExtensionsKt.measureAndLayout(portalView);
            if (function0 != null) {
                function0.invoke();
            }
            portalFromNativeContext.getOnViewAddedToPortal().invoke(view);
            _portalContextIdsFlow.setValue(Event.PortalRegistered.INSTANCE);
        }
    }

    public final void unregisterView(double d10) {
        PortalFromNativeContext remove = portalContextMap.remove(Double.valueOf(d10));
        if (remove != null) {
            _portalContextIdsFlow.setValue(null);
            View view = remove.getView().get();
            if (view != null) {
                remove.getRemoveViewFromParent().invoke(view);
                remove.getOnViewRemovedFromPortal().invoke(view);
                remove.getReturnViewToParent().invoke(view);
            }
        }
    }
}
