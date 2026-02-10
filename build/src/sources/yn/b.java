package yn;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.NativeViewHierarchyOptimizer;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends LayoutShadowNode {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f55672a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f55673b;

    public b() {
        int[] iArr = ViewProps.PADDING_MARGIN_SPACING_TYPES;
        this.f55672a = new float[iArr.length];
        int length = iArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            this.f55672a[i10] = Float.NaN;
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void onBeforeLayout(NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer) {
        Intrinsics.checkNotNullParameter(nativeViewHierarchyOptimizer, "nativeViewHierarchyOptimizer");
        if (this.f55673b) {
            this.f55673b = false;
            a();
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setLocalData(Object data) {
        Intrinsics.checkNotNullParameter(data, "data");
    }

    @Override // com.facebook.react.uimanager.LayoutShadowNode
    @ReactPropGroup(names = {ViewProps.MARGIN, ViewProps.MARGIN_VERTICAL, ViewProps.MARGIN_HORIZONTAL, ViewProps.MARGIN_START, ViewProps.MARGIN_END, ViewProps.MARGIN_TOP, ViewProps.MARGIN_BOTTOM, ViewProps.MARGIN_LEFT, ViewProps.MARGIN_RIGHT})
    public void setMargins(int i10, @NotNull Dynamic margin) {
        float f10;
        Intrinsics.checkNotNullParameter(margin, "margin");
        int i11 = ViewProps.PADDING_MARGIN_SPACING_TYPES[i10];
        float[] fArr = this.f55672a;
        if (margin.getType() == ReadableType.Number) {
            f10 = (float) margin.asDouble();
        } else {
            f10 = Float.NaN;
        }
        fArr[i11] = f10;
        super.setMargins(i10, margin);
        this.f55673b = true;
    }

    private final void a() {
    }
}
