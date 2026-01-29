package com.facebook.react.uimanager;

import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.ViewGroupManager;
import java.util.ArrayList;
import java.util.Comparator;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0015\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rJ\u0010\u0010\u000e\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rJ\u0006\u0010\u000f\u001a\u00020\u0010J\u0016\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u0012\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u0007J\u0006\u0010\u0014\u001a\u00020\u000bR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/uimanager/ViewGroupDrawingOrderHelper;", "", "viewGroup", "Landroid/view/ViewGroup;", "<init>", "(Landroid/view/ViewGroup;)V", "numberOfChildrenWithZIndex", "", "drawingOrderIndices", "", "handleAddView", "", "view", "Landroid/view/View;", "handleRemoveView", "shouldEnableCustomDrawingOrder", "", "getChildDrawingOrder", "childCount", "index", "update", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ViewGroupDrawingOrderHelper {
    private int[] drawingOrderIndices;
    private int numberOfChildrenWithZIndex;
    @NotNull
    private final ViewGroup viewGroup;

    public ViewGroupDrawingOrderHelper(@NotNull ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(viewGroup, "viewGroup");
        this.viewGroup = viewGroup;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int getChildDrawingOrder$lambda$0(View view, View view2) {
        int i10;
        ViewGroupManager.Companion companion = ViewGroupManager.Companion;
        Integer viewZIndex = companion.getViewZIndex(view);
        int i11 = 0;
        if (viewZIndex != null) {
            i10 = viewZIndex.intValue();
        } else {
            i10 = 0;
        }
        Integer viewZIndex2 = companion.getViewZIndex(view2);
        if (viewZIndex2 != null) {
            i11 = viewZIndex2.intValue();
        }
        return i10 - i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int getChildDrawingOrder$lambda$1(Function2 function2, Object obj, Object obj2) {
        return ((Number) function2.invoke(obj, obj2)).intValue();
    }

    public final int getChildDrawingOrder(int i10, int i11) {
        int[] iArr = this.drawingOrderIndices;
        if (iArr != null && (i11 >= iArr.length || iArr[i11] >= i10)) {
            p8.a.L(ReactConstants.TAG, "getChildDrawingOrder index out of bounds! Please check any custom view manipulations you may have done. childCount = %d, index = %d", Integer.valueOf(i10), Integer.valueOf(i11));
            update();
        }
        if (iArr == null) {
            ArrayList arrayList = new ArrayList();
            for (int i12 = 0; i12 < i10; i12++) {
                arrayList.add(this.viewGroup.getChildAt(i12));
            }
            final Function2 function2 = new Function2() { // from class: com.facebook.react.uimanager.a0
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    int childDrawingOrder$lambda$0;
                    childDrawingOrder$lambda$0 = ViewGroupDrawingOrderHelper.getChildDrawingOrder$lambda$0((View) obj, (View) obj2);
                    return Integer.valueOf(childDrawingOrder$lambda$0);
                }
            };
            CollectionsKt.A(arrayList, new Comparator() { // from class: com.facebook.react.uimanager.b0
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int childDrawingOrder$lambda$1;
                    childDrawingOrder$lambda$1 = ViewGroupDrawingOrderHelper.getChildDrawingOrder$lambda$1(Function2.this, obj, obj2);
                    return childDrawingOrder$lambda$1;
                }
            });
            int[] iArr2 = new int[i10];
            for (int i13 = 0; i13 < i10; i13++) {
                Object obj = arrayList.get(i13);
                Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
                iArr2[i13] = this.viewGroup.indexOfChild((View) obj);
            }
            this.drawingOrderIndices = iArr2;
            iArr = iArr2;
        }
        return iArr[i11];
    }

    public final void handleAddView(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ViewGroupManager.Companion.getViewZIndex(view) != null) {
            this.numberOfChildrenWithZIndex++;
        }
        this.drawingOrderIndices = null;
    }

    public final void handleRemoveView(View view) {
        if (ViewGroupManager.Companion.getViewZIndex(view) != null) {
            this.numberOfChildrenWithZIndex--;
        }
        this.drawingOrderIndices = null;
    }

    public final boolean shouldEnableCustomDrawingOrder() {
        if (this.numberOfChildrenWithZIndex > 0) {
            return true;
        }
        return false;
    }

    public final void update() {
        this.numberOfChildrenWithZIndex = 0;
        int childCount = this.viewGroup.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            if (ViewGroupManager.Companion.getViewZIndex(this.viewGroup.getChildAt(i10)) != null) {
                this.numberOfChildrenWithZIndex++;
            }
        }
        this.drawingOrderIndices = null;
    }
}
