package com.discord.blur;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.RecordingCanvas;
import android.graphics.RenderEffect;
import android.graphics.RenderNode;
import android.graphics.Shader;
import com.discord.blur.BlurView;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0015\n\u0000\n\u0002\u0010%\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0001\u0018\u00002\u00020\u0001:\u0001+B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\t2\u0006\u0010\u001a\u001a\u00020\u0011H\u0016J0\u0010\u001b\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\t2\u0006\u0010\u001c\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\t2\u0006\u0010\u001e\u001a\u00020\t2\u0006\u0010\u001f\u001a\u00020\tH\u0016J\u0010\u0010 \u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\tH\u0016J0\u0010!\u001a\u00020\u00182\u0006\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\t2\u0006\u0010%\u001a\u00020\t2\u0006\u0010&\u001a\u00020\t2\u0006\u0010'\u001a\u00020\tH\u0014J\u0010\u0010(\u001a\u00020\u00182\u0006\u0010)\u001a\u00020*H\u0014R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u000eX\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00110\u0010X\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\u0012\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00130\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00150\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0015X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006,"}, d2 = {"Lcom/discord/blur/BlurViewTargetHardwareAccelerated;", "Lcom/discord/blur/BlurViewTargetBase;", "context", "Landroid/content/Context;", "blurTargetNativeId", "", "<init>", "(Landroid/content/Context;Ljava/lang/String;)V", "blurViewTargetWidth", "", "blurViewTargetHeight", "blurViewTargetWindowOffsetX", "blurViewTargetWindowOffsetY", "blurViewTargetLocation", "", "blurAmounts", "", "", "blurRects", "Lcom/discord/blur/BlurViewTargetHardwareAccelerated$BlurRect;", "blurRectRenderNodes", "Landroid/graphics/RenderNode;", "blurContentRenderNode", "setBlurAmount", "", "rectId", "blurAmount", "addBlurRect", "windowX", "windowY", "width", "height", "removeBlurRect", "onLayout", "changed", "", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "dispatchDraw", "canvas", "Landroid/graphics/Canvas;", "BlurRect", "blur_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
@SourceDebugExtension({"SMAP\nBlurViewTargetHardwareAccelerated.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BlurViewTargetHardwareAccelerated.kt\ncom/discord/blur/BlurViewTargetHardwareAccelerated\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 3 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,131:1\n538#2:132\n523#2,6:133\n216#3,2:139\n*S KotlinDebug\n*F\n+ 1 BlurViewTargetHardwareAccelerated.kt\ncom/discord/blur/BlurViewTargetHardwareAccelerated\n*L\n85#1:132\n85#1:133,6\n103#1:139,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BlurViewTargetHardwareAccelerated extends BlurViewTargetBase {
    @NotNull
    private Map<Integer, Float> blurAmounts;
    @NotNull
    private final RenderNode blurContentRenderNode;
    @NotNull
    private final Map<Integer, RenderNode> blurRectRenderNodes;
    @NotNull
    private final Map<Integer, BlurRect> blurRects;
    private int blurViewTargetHeight;
    @NotNull
    private int[] blurViewTargetLocation;
    private int blurViewTargetWidth;
    private int blurViewTargetWindowOffsetX;
    private int blurViewTargetWindowOffsetY;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J1\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006\u0019"}, d2 = {"Lcom/discord/blur/BlurViewTargetHardwareAccelerated$BlurRect;", "", "windowX", "", "windowY", "width", "height", "<init>", "(IIII)V", "getWindowX", "()I", "getWindowY", "getWidth", "getHeight", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "", "blur_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class BlurRect {
        private final int height;
        private final int width;
        private final int windowX;
        private final int windowY;

        public BlurRect(int i10, int i11, int i12, int i13) {
            this.windowX = i10;
            this.windowY = i11;
            this.width = i12;
            this.height = i13;
        }

        public static /* synthetic */ BlurRect copy$default(BlurRect blurRect, int i10, int i11, int i12, int i13, int i14, Object obj) {
            if ((i14 & 1) != 0) {
                i10 = blurRect.windowX;
            }
            if ((i14 & 2) != 0) {
                i11 = blurRect.windowY;
            }
            if ((i14 & 4) != 0) {
                i12 = blurRect.width;
            }
            if ((i14 & 8) != 0) {
                i13 = blurRect.height;
            }
            return blurRect.copy(i10, i11, i12, i13);
        }

        public final int component1() {
            return this.windowX;
        }

        public final int component2() {
            return this.windowY;
        }

        public final int component3() {
            return this.width;
        }

        public final int component4() {
            return this.height;
        }

        @NotNull
        public final BlurRect copy(int i10, int i11, int i12, int i13) {
            return new BlurRect(i10, i11, i12, i13);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BlurRect) {
                BlurRect blurRect = (BlurRect) obj;
                return this.windowX == blurRect.windowX && this.windowY == blurRect.windowY && this.width == blurRect.width && this.height == blurRect.height;
            }
            return false;
        }

        public final int getHeight() {
            return this.height;
        }

        public final int getWidth() {
            return this.width;
        }

        public final int getWindowX() {
            return this.windowX;
        }

        public final int getWindowY() {
            return this.windowY;
        }

        public int hashCode() {
            return (((((Integer.hashCode(this.windowX) * 31) + Integer.hashCode(this.windowY)) * 31) + Integer.hashCode(this.width)) * 31) + Integer.hashCode(this.height);
        }

        @NotNull
        public String toString() {
            int i10 = this.windowX;
            int i11 = this.windowY;
            int i12 = this.width;
            int i13 = this.height;
            return "BlurRect(windowX=" + i10 + ", windowY=" + i11 + ", width=" + i12 + ", height=" + i13 + ")";
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BlurViewTargetHardwareAccelerated(@NotNull Context context, @NotNull String blurTargetNativeId) {
        super(context, blurTargetNativeId);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(blurTargetNativeId, "blurTargetNativeId");
        this.blurViewTargetWidth = -1;
        this.blurViewTargetHeight = -1;
        this.blurViewTargetWindowOffsetX = -1;
        this.blurViewTargetWindowOffsetY = -1;
        this.blurViewTargetLocation = new int[2];
        this.blurAmounts = new HashMap();
        this.blurRects = new HashMap();
        this.blurRectRenderNodes = new HashMap();
        this.blurContentRenderNode = i.a("content");
    }

    /* JADX WARN: Code restructure failed: missing block: B:16:0x002f, code lost:
        if (r3 != false) goto L15;
     */
    @Override // com.discord.blur.BlurViewAPI.Target
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void addBlurRect(int r7, int r8, int r9, int r10, int r11) {
        /*
            r6 = this;
            java.util.Map<java.lang.Integer, com.discord.blur.BlurViewTargetHardwareAccelerated$BlurRect> r0 = r6.blurRects
            java.lang.Integer r1 = java.lang.Integer.valueOf(r7)
            java.lang.Object r0 = r0.get(r1)
            com.discord.blur.BlurViewTargetHardwareAccelerated$BlurRect r0 = (com.discord.blur.BlurViewTargetHardwareAccelerated.BlurRect) r0
            r1 = 0
            if (r0 == 0) goto L32
            int r2 = r0.getWindowX()
            r3 = 0
            r4 = 1
            if (r2 != r8) goto L1f
            int r2 = r0.getWindowY()
            if (r2 != r9) goto L1f
            r2 = r4
            goto L20
        L1f:
            r2 = r3
        L20:
            int r5 = r0.getWidth()
            if (r5 != r10) goto L2d
            int r5 = r0.getHeight()
            if (r5 != r11) goto L2d
            r3 = r4
        L2d:
            if (r2 == 0) goto L32
            if (r3 == 0) goto L32
            goto L33
        L32:
            r0 = r1
        L33:
            if (r0 == 0) goto L36
            return
        L36:
            java.util.Map<java.lang.Integer, android.graphics.RenderNode> r0 = r6.blurRectRenderNodes
            java.lang.Integer r1 = java.lang.Integer.valueOf(r7)
            com.discord.blur.j.a()
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            java.lang.String r3 = "blur-"
            r2.append(r3)
            r2.append(r7)
            java.lang.String r2 = r2.toString()
            android.graphics.RenderNode r2 = com.discord.blur.i.a(r2)
            r0.putIfAbsent(r1, r2)
            java.lang.Integer r7 = java.lang.Integer.valueOf(r7)
            java.util.Map<java.lang.Integer, com.discord.blur.BlurViewTargetHardwareAccelerated$BlurRect> r0 = r6.blurRects
            com.discord.blur.BlurViewTargetHardwareAccelerated$BlurRect r1 = new com.discord.blur.BlurViewTargetHardwareAccelerated$BlurRect
            r1.<init>(r8, r9, r10, r11)
            r0.put(r7, r1)
            r6.invalidate()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.blur.BlurViewTargetHardwareAccelerated.addBlurRect(int, int, int, int, int):void");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void dispatchDraw(@NotNull Canvas canvas) {
        boolean z10;
        Float valueOf = Float.valueOf(-1.0f);
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Map<Integer, BlurRect> map = this.blurRects;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        Iterator<Map.Entry<Integer, BlurRect>> it = map.entrySet().iterator();
        while (true) {
            boolean z11 = false;
            if (!it.hasNext()) {
                break;
            }
            Map.Entry<Integer, BlurRect> next = it.next();
            int intValue = next.getKey().intValue();
            BlurRect value = next.getValue();
            if (value.getWidth() != 0 && value.getHeight() != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (this.blurAmounts.getOrDefault(Integer.valueOf(intValue), valueOf).floatValue() > 0.0f) {
                z11 = true;
            }
            if (z10 && z11) {
                linkedHashMap.put(next.getKey(), next.getValue());
            }
        }
        if (linkedHashMap.isEmpty()) {
            super.dispatchDraw(canvas);
            return;
        }
        this.blurContentRenderNode.setPosition(0, 0, this.blurViewTargetWidth, this.blurViewTargetHeight);
        RecordingCanvas beginRecording = this.blurContentRenderNode.beginRecording();
        Intrinsics.checkNotNull(beginRecording);
        super.dispatchDraw(beginRecording);
        this.blurContentRenderNode.endRecording();
        canvas.drawRenderNode(this.blurContentRenderNode);
        for (Map.Entry<Integer, RenderNode> entry : this.blurRectRenderNodes.entrySet()) {
            int intValue2 = entry.getKey().intValue();
            RenderNode a10 = k.a(entry.getValue());
            BlurRect blurRect = (BlurRect) linkedHashMap.get(Integer.valueOf(intValue2));
            if (blurRect != null) {
                float floatValue = this.blurAmounts.getOrDefault(Integer.valueOf(intValue2), valueOf).floatValue();
                a10.setRenderEffect(RenderEffect.createBlurEffect(Math.abs(floatValue), Math.abs(floatValue), Shader.TileMode.CLAMP));
                a10.setPosition(0, 0, blurRect.getWidth(), blurRect.getHeight());
                a10.setTranslationX(blurRect.getWindowX() - this.blurViewTargetWindowOffsetX);
                a10.setTranslationY(blurRect.getWindowY() - this.blurViewTargetWindowOffsetY);
                RecordingCanvas beginRecording2 = a10.beginRecording();
                beginRecording2.translate(-(blurRect.getWindowX() - this.blurViewTargetWindowOffsetX), -(blurRect.getWindowY() - this.blurViewTargetWindowOffsetY));
                beginRecording2.drawRenderNode(this.blurContentRenderNode);
                a10.endRecording();
                canvas.drawRenderNode(a10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        getLocationInWindow(this.blurViewTargetLocation);
        this.blurViewTargetWidth = getWidth();
        this.blurViewTargetHeight = getHeight();
        int[] iArr = this.blurViewTargetLocation;
        this.blurViewTargetWindowOffsetX = iArr[0];
        this.blurViewTargetWindowOffsetY = iArr[1];
    }

    @Override // com.discord.blur.BlurViewAPI.Target
    public void removeBlurRect(int i10) {
        boolean z10;
        boolean z11;
        boolean z12 = false;
        if (this.blurRects.remove(Integer.valueOf(i10)) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.blurRectRenderNodes.remove(Integer.valueOf(i10)) != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (this.blurAmounts.remove(Integer.valueOf(i10)) != null) {
            z12 = true;
        }
        if (!z10 && !z11 && !z12) {
            return;
        }
        invalidate();
    }

    @Override // com.discord.blur.BlurViewAPIBase
    public void setBlurAmount(int i10, float f10) {
        float dpToPx = SizeUtilsKt.getDpToPx(BlurView.Companion.mapRadius$blur_release$default(BlurView.Companion, f10, 36.0f, 0.0f, 4, null));
        if (!Intrinsics.areEqual(this.blurAmounts.get(Integer.valueOf(i10)), dpToPx)) {
            this.blurAmounts.put(Integer.valueOf(i10), Float.valueOf(dpToPx));
            invalidate();
        }
    }
}
