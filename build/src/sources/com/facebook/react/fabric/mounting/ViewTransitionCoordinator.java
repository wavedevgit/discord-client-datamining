package com.facebook.react.fabric.mounting;

import android.view.View;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.build.ReactBuildConfig;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010#\n\u0002\u0010\b\n\u0000\n\u0002\u0010%\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\b\b\u0001\u0018\u0000 (2\u00020\u0001:\u0001(B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J(\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0014\u001a\u00020\u0015J\u000e\u0010\u0016\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0006J\"\u0010\u0017\u001a\u00020\u00112\u0006\u0010\u0018\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\u00062\b\b\u0002\u0010\u001a\u001a\u00020\u0011H\u0007J\u000e\u0010\u001b\u001a\u00020\u000e2\u0006\u0010\u001c\u001a\u00020\nJ\u0016\u0010\u001f\u001a\u00020\u000e2\u0006\u0010\u0018\u001a\u00020\u00062\u0006\u0010 \u001a\u00020!J&\u0010#\u001a\u00020\u00112\u0006\u0010\u0019\u001a\u00020\u00062\f\u0010$\u001a\b\u0012\u0004\u0012\u00020\n0\t2\u0006\u0010 \u001a\u00020!H\u0002J\u0016\u0010%\u001a\u00020\u00112\u0006\u0010\u0018\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\u0006J\u0006\u0010&\u001a\u00020\u000eJ\b\u0010'\u001a\u00020\u0011H\u0007R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R \u0010\u0007\u001a\u0014\u0012\u0004\u0012\u00020\u0006\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000R \u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\u0006\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00060\f0\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u001d\u001a\u0004\u0018\u00010\u0006X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u001eR \u0010\"\u001a\u0014\u0012\u0004\u0012\u00020\u0006\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00060\u00050\bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006)"}, d2 = {"Lcom/facebook/react/fabric/mounting/ViewTransitionCoordinator;", "", "<init>", "()V", "viewsInTransition", "", "", "parentQueues", "", "", "Lcom/facebook/react/fabric/mounting/ViewOperation;", "childToParentOrder", "Ljava/util/LinkedList;", "markViewInTransition", "", "tag", "transitioning", "", "view", "Landroid/view/View;", "onDetach", "Ljava/lang/Runnable;", "notifyViewCreated", "shouldEnqueueOperation", "childTag", "parentTag", "checkTransitionStatus", "enqueueOperation", "operation", "drainingParentTag", "Ljava/lang/Integer;", "drainOperationsForChild", "manager", "Lcom/facebook/react/fabric/mounting/SurfaceMountingManager;", "executedChildIdsForParent", "drainQueue", "queue", "isFirstInLineForChild", "clearAllPending", "isEmpty", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nViewTransitionCoordinator.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewTransitionCoordinator.kt\ncom/facebook/react/fabric/mounting/ViewTransitionCoordinator\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,277:1\n360#2,7:278\n384#3,7:285\n384#3,7:292\n384#3,7:299\n*S KotlinDebug\n*F\n+ 1 ViewTransitionCoordinator.kt\ncom/facebook/react/fabric/mounting/ViewTransitionCoordinator\n*L\n96#1:278,7\n148#1:285,7\n152#1:292,7\n234#1:299,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ViewTransitionCoordinator {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "ViewTransitionCoordinator";
    private Integer drainingParentTag;
    @NotNull
    private final Set<Integer> viewsInTransition = new LinkedHashSet();
    @NotNull
    private final Map<Integer, List<ViewOperation>> parentQueues = new LinkedHashMap();
    @NotNull
    private final Map<Integer, LinkedList<Integer>> childToParentOrder = new LinkedHashMap();
    @NotNull
    private final Map<Integer, Set<Integer>> executedChildIdsForParent = new LinkedHashMap();

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/fabric/mounting/ViewTransitionCoordinator$Companion;", "", "<init>", "()V", "TAG", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    private final boolean drainQueue(int i10, List<ViewOperation> list, SurfaceMountingManager surfaceMountingManager) {
        Integer first;
        Iterator<ViewOperation> it = list.iterator();
        boolean z10 = false;
        while (it.hasNext()) {
            ViewOperation next = it.next();
            if (!next.isReadyToExecute(this) || this.viewsInTransition.contains(Integer.valueOf(next.getChildTag()))) {
                break;
            }
            if (ReactBuildConfig.DEBUG) {
                p8.a.b(TAG, "Executing " + next);
            }
            it.remove();
            Map<Integer, Set<Integer>> map = this.executedChildIdsForParent;
            Integer valueOf = Integer.valueOf(i10);
            Set<Integer> set = map.get(valueOf);
            if (set == null) {
                set = new LinkedHashSet<>();
                map.put(valueOf, set);
            }
            set.add(Integer.valueOf(next.getChildTag()));
            next.execute(surfaceMountingManager);
            z10 = true;
        }
        Set<Integer> set2 = this.executedChildIdsForParent.get(Integer.valueOf(i10));
        if (list.isEmpty() && set2 != null) {
            for (Integer num : set2) {
                int intValue = num.intValue();
                LinkedList<Integer> linkedList = this.childToParentOrder.get(Integer.valueOf(intValue));
                if (linkedList != null && (first = linkedList.getFirst()) != null && first.intValue() == i10) {
                    linkedList.removeFirst();
                    if (linkedList.isEmpty()) {
                        this.childToParentOrder.remove(Integer.valueOf(intValue));
                    }
                } else {
                    Map<Integer, LinkedList<Integer>> map2 = this.childToParentOrder;
                    throw new IllegalStateException(("Internal error: operation parentTag " + i10 + " is not first in childToParentOrder for childTag " + intValue + ": " + map2).toString());
                }
            }
            this.executedChildIdsForParent.remove(Integer.valueOf(i10));
        }
        return z10;
    }

    public static /* synthetic */ boolean shouldEnqueueOperation$default(ViewTransitionCoordinator viewTransitionCoordinator, int i10, int i11, boolean z10, int i12, Object obj) {
        if ((i12 & 4) != 0) {
            z10 = true;
        }
        return viewTransitionCoordinator.shouldEnqueueOperation(i10, i11, z10);
    }

    public final void clearAllPending() {
        this.parentQueues.clear();
        this.childToParentOrder.clear();
        this.viewsInTransition.clear();
    }

    public final void drainOperationsForChild(int i10, @NotNull SurfaceMountingManager manager) {
        boolean drainQueue;
        Intrinsics.checkNotNullParameter(manager, "manager");
        UiThreadUtil.assertOnUiThread();
        do {
            LinkedList<Integer> linkedList = this.childToParentOrder.get(Integer.valueOf(i10));
            if (linkedList == null || linkedList.isEmpty()) {
                break;
            }
            Integer first = linkedList.getFirst();
            List<ViewOperation> list = this.parentQueues.get(first);
            if (list != null) {
                if (Intrinsics.areEqual(this.drainingParentTag, first)) {
                    break;
                }
                this.drainingParentTag = first;
                Intrinsics.checkNotNull(first);
                drainQueue = drainQueue(first.intValue(), list, manager);
                if (list.isEmpty()) {
                    this.parentQueues.remove(first);
                    continue;
                }
            } else {
                Map<Integer, LinkedList<Integer>> map = this.childToParentOrder;
                throw new IllegalStateException(("No queue for parentTag=" + first + ". This should not happen as childToParentOrder indicates there are pending operations. childToParentOrder=" + map).toString());
            }
        } while (drainQueue);
        this.drainingParentTag = null;
    }

    public final void enqueueOperation(@NotNull ViewOperation operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        UiThreadUtil.assertOnUiThread();
        int parentTag = operation.getParentTag();
        int childTag = operation.getChildTag();
        Map<Integer, List<ViewOperation>> map = this.parentQueues;
        Integer valueOf = Integer.valueOf(parentTag);
        List<ViewOperation> list = map.get(valueOf);
        if (list == null) {
            list = new ArrayList<>();
            map.put(valueOf, list);
        }
        list.add(operation);
        Map<Integer, LinkedList<Integer>> map2 = this.childToParentOrder;
        Integer valueOf2 = Integer.valueOf(childTag);
        LinkedList<Integer> linkedList = map2.get(valueOf2);
        if (linkedList == null) {
            linkedList = new LinkedList<>();
            map2.put(valueOf2, linkedList);
        }
        LinkedList<Integer> linkedList2 = linkedList;
        Integer num = (Integer) CollectionsKt.B0(linkedList2);
        if (num == null || num.intValue() != parentTag) {
            linkedList2.add(Integer.valueOf(parentTag));
        }
        if (ReactBuildConfig.DEBUG) {
            p8.a.b(TAG, "Enqueued operation: " + operation);
        }
    }

    public final boolean isEmpty() {
        if (this.parentQueues.isEmpty() && this.childToParentOrder.isEmpty() && this.viewsInTransition.isEmpty()) {
            return true;
        }
        return false;
    }

    public final boolean isFirstInLineForChild(int i10, int i11) {
        LinkedList<Integer> linkedList = this.childToParentOrder.get(Integer.valueOf(i10));
        if (linkedList != null && !linkedList.isEmpty()) {
            Integer first = linkedList.getFirst();
            if (first == null || first.intValue() != i11) {
                return false;
            }
            return true;
        }
        return true;
    }

    public final void markViewInTransition(int i10, boolean z10, View view, @NotNull Runnable onDetach) {
        Intrinsics.checkNotNullParameter(onDetach, "onDetach");
        UiThreadUtil.assertOnUiThread();
        if (z10) {
            if (!this.viewsInTransition.contains(Integer.valueOf(i10))) {
                this.viewsInTransition.add(Integer.valueOf(i10));
                if (view != null) {
                    view.addOnAttachStateChangeListener(new ViewTransitionCoordinator$markViewInTransition$listener$1(view, this, i10, onDetach));
                    return;
                }
                return;
            }
            return;
        }
        this.viewsInTransition.remove(Integer.valueOf(i10));
    }

    public final void notifyViewCreated(int i10) {
        Map<Integer, List<ViewOperation>> map = this.parentQueues;
        Integer valueOf = Integer.valueOf((int) ViewOperationsKt.DELETE_VIEW_PARENT_TAG);
        List<ViewOperation> list = map.get(valueOf);
        if (list != null) {
            Iterator<ViewOperation> it = list.iterator();
            int i11 = 0;
            while (true) {
                if (it.hasNext()) {
                    if (it.next().getChildTag() == i10) {
                        break;
                    }
                    i11++;
                } else {
                    i11 = -1;
                    break;
                }
            }
            if (i11 != -1) {
                list.remove(i11);
                if (list.isEmpty()) {
                    this.parentQueues.remove(valueOf);
                }
                LinkedList<Integer> linkedList = this.childToParentOrder.get(Integer.valueOf(i10));
                if (linkedList != null) {
                    linkedList.remove(valueOf);
                }
                if (linkedList != null && linkedList.isEmpty()) {
                    this.childToParentOrder.remove(Integer.valueOf(i10));
                }
                if (ReactBuildConfig.DEBUG) {
                    p8.a.b(TAG, "Dropping queued delete operation for tag " + i10 + " as the view was re-created");
                }
            }
        }
    }

    public final boolean shouldEnqueueOperation(int i10, int i11) {
        return shouldEnqueueOperation$default(this, i10, i11, false, 4, null);
    }

    public final boolean shouldEnqueueOperation(int i10, int i11, boolean z10) {
        if (this.childToParentOrder.containsKey(Integer.valueOf(i10))) {
            return true;
        }
        if (!this.parentQueues.containsKey(Integer.valueOf(i11)) || i11 == -1337) {
            return z10 && this.viewsInTransition.contains(Integer.valueOf(i10));
        }
        return true;
    }
}
