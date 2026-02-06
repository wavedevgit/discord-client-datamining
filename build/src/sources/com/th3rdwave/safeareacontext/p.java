package com.th3rdwave.safeareacontext;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.NativeViewHierarchyOptimizer;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends LayoutShadowNode {

    /* renamed from: a  reason: collision with root package name */
    private n f18454a;

    /* renamed from: b  reason: collision with root package name */
    private final float[] f18455b;

    /* renamed from: c  reason: collision with root package name */
    private final float[] f18456c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f18457d;

    public p() {
        int[] iArr = ViewProps.PADDING_MARGIN_SPACING_TYPES;
        this.f18455b = new float[iArr.length];
        this.f18456c = new float[iArr.length];
        int length = iArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            this.f18455b[i10] = Float.NaN;
            this.f18456c[i10] = Float.NaN;
        }
    }

    private final float a(l lVar, float f10, float f11) {
        if (lVar == l.f18438d) {
            return f11;
        }
        if (lVar == l.f18440i) {
            return Math.max(f10, f11);
        }
        return f10 + f11;
    }

    private final void b(o oVar) {
        if (oVar == o.f18450d) {
            super.setPadding(1, this.f18455b[1]);
            super.setPadding(2, this.f18455b[2]);
            super.setPadding(3, this.f18455b[3]);
            super.setPadding(0, this.f18455b[0]);
        } else {
            super.setMargin(1, this.f18456c[1]);
            super.setMargin(2, this.f18456c[2]);
            super.setMargin(3, this.f18456c[3]);
            super.setMargin(0, this.f18456c[0]);
        }
        markUpdated();
    }

    private final void c() {
        float[] fArr;
        n nVar = this.f18454a;
        if (nVar == null) {
            return;
        }
        o c10 = nVar.c();
        o oVar = o.f18450d;
        if (c10 == oVar) {
            fArr = this.f18455b;
        } else {
            fArr = this.f18456c;
        }
        float f10 = fArr[8];
        if (Float.isNaN(f10)) {
            f10 = 0.0f;
        }
        float f11 = f10;
        float f12 = f11;
        float f13 = f12;
        float f14 = fArr[7];
        if (!Float.isNaN(f14)) {
            f10 = f14;
            f12 = f10;
        }
        float f15 = fArr[6];
        if (!Float.isNaN(f15)) {
            f11 = f15;
            f13 = f11;
        }
        float f16 = fArr[1];
        if (!Float.isNaN(f16)) {
            f10 = f16;
        }
        float f17 = fArr[2];
        if (!Float.isNaN(f17)) {
            f11 = f17;
        }
        float f18 = fArr[3];
        if (!Float.isNaN(f18)) {
            f12 = f18;
        }
        float f19 = fArr[0];
        if (!Float.isNaN(f19)) {
            f13 = f19;
        }
        float pixelFromDIP = PixelUtil.toPixelFromDIP(f10);
        float pixelFromDIP2 = PixelUtil.toPixelFromDIP(f11);
        float pixelFromDIP3 = PixelUtil.toPixelFromDIP(f12);
        float pixelFromDIP4 = PixelUtil.toPixelFromDIP(f13);
        m a10 = nVar.a();
        a b10 = nVar.b();
        if (nVar.c() == oVar) {
            super.setPadding(1, a(a10.d(), b10.d(), pixelFromDIP));
            super.setPadding(2, a(a10.c(), b10.c(), pixelFromDIP2));
            super.setPadding(3, a(a10.a(), b10.a(), pixelFromDIP3));
            super.setPadding(0, a(a10.b(), b10.b(), pixelFromDIP4));
            return;
        }
        super.setMargin(1, a(a10.d(), b10.d(), pixelFromDIP));
        super.setMargin(2, a(a10.c(), b10.c(), pixelFromDIP2));
        super.setMargin(3, a(a10.a(), b10.a(), pixelFromDIP3));
        super.setMargin(0, a(a10.b(), b10.b(), pixelFromDIP4));
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void onBeforeLayout(NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer) {
        Intrinsics.checkNotNullParameter(nativeViewHierarchyOptimizer, "nativeViewHierarchyOptimizer");
        if (this.f18457d) {
            this.f18457d = false;
            c();
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setLocalData(Object data) {
        Intrinsics.checkNotNullParameter(data, "data");
        if (!(data instanceof n)) {
            return;
        }
        n nVar = this.f18454a;
        if (nVar != null && nVar.c() != ((n) data).c()) {
            b(nVar.c());
        }
        this.f18454a = (n) data;
        this.f18457d = false;
        c();
    }

    @Override // com.facebook.react.uimanager.LayoutShadowNode
    @ReactPropGroup(names = {ViewProps.MARGIN, ViewProps.MARGIN_VERTICAL, ViewProps.MARGIN_HORIZONTAL, ViewProps.MARGIN_START, ViewProps.MARGIN_END, ViewProps.MARGIN_TOP, ViewProps.MARGIN_BOTTOM, ViewProps.MARGIN_LEFT, ViewProps.MARGIN_RIGHT})
    public void setMargins(int i10, @NotNull Dynamic margin) {
        float f10;
        Intrinsics.checkNotNullParameter(margin, "margin");
        int i11 = ViewProps.PADDING_MARGIN_SPACING_TYPES[i10];
        float[] fArr = this.f18456c;
        if (margin.getType() == ReadableType.Number) {
            f10 = (float) margin.asDouble();
        } else {
            f10 = Float.NaN;
        }
        fArr[i11] = f10;
        super.setMargins(i10, margin);
        this.f18457d = true;
    }

    @Override // com.facebook.react.uimanager.LayoutShadowNode
    @ReactPropGroup(names = {ViewProps.PADDING, ViewProps.PADDING_VERTICAL, ViewProps.PADDING_HORIZONTAL, ViewProps.PADDING_START, ViewProps.PADDING_END, ViewProps.PADDING_TOP, ViewProps.PADDING_BOTTOM, ViewProps.PADDING_LEFT, ViewProps.PADDING_RIGHT})
    public void setPaddings(int i10, @NotNull Dynamic padding) {
        float f10;
        Intrinsics.checkNotNullParameter(padding, "padding");
        int i11 = ViewProps.PADDING_MARGIN_SPACING_TYPES[i10];
        float[] fArr = this.f18455b;
        if (padding.getType() == ReadableType.Number) {
            f10 = (float) padding.asDouble();
        } else {
            f10 = Float.NaN;
        }
        fArr[i11] = f10;
        super.setPaddings(i10, padding);
        this.f18457d = true;
    }
}
