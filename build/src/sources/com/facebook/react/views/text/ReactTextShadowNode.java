package com.facebook.react.views.text;

import android.os.Build;
import android.text.BoringLayout;
import android.text.Layout;
import android.text.Spannable;
import android.text.StaticLayout;
import android.text.TextPaint;
import com.facebook.react.uimanager.NativeViewHierarchyOptimizer;
import com.facebook.react.uimanager.ReactShadowNode;
import com.facebook.react.uimanager.UIViewOperationQueue;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.text.internal.span.TextInlineViewPlaceholderSpan;
import com.facebook.yoga.YogaBaselineFunction;
import com.facebook.yoga.YogaDirection;
import com.facebook.yoga.YogaMeasureFunction;
import com.facebook.yoga.YogaMeasureMode;
import com.facebook.yoga.YogaNode;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u001c\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 (2\u00020\u0001:\u0001(B\u0015\b\u0007\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u000e\u001a\u00020\u000fH\u0002J \u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0002J\u0010\u0010\u001b\u001a\u00020\u000f2\u0006\u0010\u001c\u001a\u00020\u001dH\u0016J\b\u0010\u001e\u001a\u00020\tH\u0016J\b\u0010\u001f\u001a\u00020\tH\u0016J\b\u0010 \u001a\u00020\u000fH\u0016J\u0010\u0010!\u001a\u00020\u000f2\u0006\u0010\"\u001a\u00020#H\u0016J\u0010\u0010$\u001a\u00020\u000f2\u0006\u0010\b\u001a\u00020\tH\u0007J\u0016\u0010%\u001a\u0010\u0012\n\u0012\b\u0012\u0002\b\u0003\u0018\u00010'\u0018\u00010&H\u0016R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0017\u001a\u00020\u00188BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u001a¨\u0006)"}, d2 = {"Lcom/facebook/react/views/text/ReactTextShadowNode;", "Lcom/facebook/react/views/text/ReactBaseTextShadowNode;", "reactTextViewManagerCallback", "Lcom/facebook/react/views/text/ReactTextViewManagerCallback;", "<init>", "(Lcom/facebook/react/views/text/ReactTextViewManagerCallback;)V", "preparedSpannableText", "Landroid/text/Spannable;", "shouldNotifyOnTextLayout", "", "textMeasureFunction", "Lcom/facebook/yoga/YogaMeasureFunction;", "mTextBaselineFunction", "Lcom/facebook/yoga/YogaBaselineFunction;", "initMeasureFunction", "", "measureSpannedText", "Landroid/text/Layout;", "text", "width", "", "widthMode", "Lcom/facebook/yoga/YogaMeasureMode;", ViewProps.TEXT_ALIGN, "", "getTextAlign", "()I", "onBeforeLayout", "nativeViewHierarchyOptimizer", "Lcom/facebook/react/uimanager/NativeViewHierarchyOptimizer;", "isVirtualAnchor", "hoistNativeChildren", "markUpdated", "onCollectExtraUpdates", "uiViewOperationQueue", "Lcom/facebook/react/uimanager/UIViewOperationQueue;", "setShouldNotifyOnTextLayout", "calculateLayoutOnChildren", "", "Lcom/facebook/react/uimanager/ReactShadowNode;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactTextShadowNode.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactTextShadowNode.kt\ncom/facebook/react/views/text/ReactTextShadowNode\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,350:1\n1#2:351\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactTextShadowNode extends ReactBaseTextShadowNode {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final TextPaint textPaintInstance = new TextPaint(1);
    @NotNull
    private final YogaBaselineFunction mTextBaselineFunction;
    private Spannable preparedSpannableText;
    private boolean shouldNotifyOnTextLayout;
    @NotNull
    private final YogaMeasureFunction textMeasureFunction;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/views/text/ReactTextShadowNode$Companion;", "", "<init>", "()V", "textPaintInstance", "Landroid/text/TextPaint;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ReactTextShadowNode() {
        this(null, 1, null);
    }

    private final int getTextAlign() {
        int i10 = this.mTextAlign;
        if (getLayoutDirection() == YogaDirection.RTL) {
            if (i10 == 3) {
                return 5;
            }
            if (i10 == 5) {
                return 3;
            }
        }
        return i10;
    }

    private final void initMeasureFunction() {
        if (!isVirtual()) {
            setMeasureFunction(this.textMeasureFunction);
            setBaselineFunction(this.mTextBaselineFunction);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final float mTextBaselineFunction$lambda$4(ReactTextShadowNode reactTextShadowNode, YogaNode yogaNode, float f10, float f11) {
        Spannable spannable = reactTextShadowNode.preparedSpannableText;
        if (spannable != null) {
            Layout measureSpannedText = reactTextShadowNode.measureSpannedText(spannable, f10, YogaMeasureMode.EXACTLY);
            return measureSpannedText.getLineBaseline(measureSpannedText.getLineCount() - 1);
        }
        throw new IllegalStateException("Spannable element has not been prepared in onBeforeLayout");
    }

    private final Layout measureSpannedText(Spannable spannable, float f10, YogaMeasureMode yogaMeasureMode) {
        float f11;
        boolean z10;
        Layout.Alignment alignment;
        float f12 = f10;
        TextPaint textPaint = textPaintInstance;
        textPaint.setTextSize(this.mTextAttributes.getEffectiveFontSize());
        BoringLayout.Metrics isBoring = BoringLayout.isBoring(spannable, textPaint);
        if (isBoring == null) {
            f11 = Layout.getDesiredWidth(spannable, textPaint);
        } else {
            f11 = Float.NaN;
        }
        if (yogaMeasureMode != YogaMeasureMode.UNDEFINED && f12 >= 0.0f) {
            z10 = false;
        } else {
            z10 = true;
        }
        int textAlign = getTextAlign();
        if (textAlign != 1) {
            if (textAlign != 3) {
                if (textAlign != 5) {
                    alignment = Layout.Alignment.ALIGN_NORMAL;
                } else {
                    alignment = Layout.Alignment.ALIGN_OPPOSITE;
                }
            } else {
                alignment = Layout.Alignment.ALIGN_NORMAL;
            }
        } else {
            alignment = Layout.Alignment.ALIGN_CENTER;
        }
        if (isBoring == null && (z10 || (!com.facebook.yoga.d.a(f11) && f11 <= f12))) {
            StaticLayout.Builder hyphenationFrequency = StaticLayout.Builder.obtain(spannable, 0, spannable.length(), textPaint, (int) Math.ceil(f11)).setAlignment(alignment).setLineSpacing(0.0f, 1.0f).setIncludePad(this.mIncludeFontPadding).setBreakStrategy(this.mTextBreakStrategy).setHyphenationFrequency(this.mHyphenationFrequency);
            Intrinsics.checkNotNullExpressionValue(hyphenationFrequency, "setHyphenationFrequency(...)");
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 26) {
                hyphenationFrequency.setJustificationMode(this.mJustificationMode);
            }
            if (i10 >= 28) {
                hyphenationFrequency.setUseLineSpacingFromFallbacks(true);
            }
            StaticLayout build = hyphenationFrequency.build();
            Intrinsics.checkNotNullExpressionValue(build, "build(...)");
            return build;
        } else if (isBoring == null || (!z10 && isBoring.width > f12)) {
            Layout.Alignment alignment2 = alignment;
            int i11 = Build.VERSION.SDK_INT;
            if (i11 > 29) {
                f12 = (float) Math.ceil(f12);
            }
            StaticLayout.Builder hyphenationFrequency2 = StaticLayout.Builder.obtain(spannable, 0, spannable.length(), textPaint, (int) f12).setAlignment(alignment2).setLineSpacing(0.0f, 1.0f).setIncludePad(this.mIncludeFontPadding).setBreakStrategy(this.mTextBreakStrategy).setHyphenationFrequency(this.mHyphenationFrequency);
            Intrinsics.checkNotNullExpressionValue(hyphenationFrequency2, "setHyphenationFrequency(...)");
            if (i11 >= 26) {
                hyphenationFrequency2.setJustificationMode(this.mJustificationMode);
            }
            if (i11 >= 28) {
                hyphenationFrequency2.setUseLineSpacingFromFallbacks(true);
            }
            StaticLayout build2 = hyphenationFrequency2.build();
            Intrinsics.checkNotNullExpressionValue(build2, "build(...)");
            return build2;
        } else {
            BoringLayout make = BoringLayout.make(spannable, textPaint, (int) Math.max(isBoring.width, 0.0d), alignment, 1.0f, 0.0f, isBoring, this.mIncludeFontPadding);
            Intrinsics.checkNotNullExpressionValue(make, "make(...)");
            return make;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x0161, code lost:
        if (r0 > r21) goto L67;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final long textMeasureFunction$lambda$2(com.facebook.react.views.text.ReactTextShadowNode r17, com.facebook.yoga.YogaNode r18, float r19, com.facebook.yoga.YogaMeasureMode r20, float r21, com.facebook.yoga.YogaMeasureMode r22) {
        /*
            Method dump skipped, instructions count: 370
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.ReactTextShadowNode.textMeasureFunction$lambda$2(com.facebook.react.views.text.ReactTextShadowNode, com.facebook.yoga.YogaNode, float, com.facebook.yoga.YogaMeasureMode, float, com.facebook.yoga.YogaMeasureMode):long");
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public Iterable<ReactShadowNode<?>> calculateLayoutOnChildren() {
        ReactShadowNode reactShadowNode;
        Map<Integer, ReactShadowNode> map = this.mInlineViews;
        if (map == null || map.isEmpty()) {
            return null;
        }
        Spannable spannable = this.preparedSpannableText;
        if (spannable != null) {
            ArrayList arrayList = new ArrayList();
            Iterator it = ArrayIteratorKt.iterator((TextInlineViewPlaceholderSpan[]) spannable.getSpans(0, spannable.length(), TextInlineViewPlaceholderSpan.class));
            while (it.hasNext()) {
                TextInlineViewPlaceholderSpan textInlineViewPlaceholderSpan = (TextInlineViewPlaceholderSpan) it.next();
                Map<Integer, ReactShadowNode> map2 = this.mInlineViews;
                if (map2 != null) {
                    reactShadowNode = map2.get(Integer.valueOf(textInlineViewPlaceholderSpan.getReactTag()));
                } else {
                    reactShadowNode = null;
                }
                if (reactShadowNode != null) {
                    reactShadowNode.calculateLayout();
                    arrayList.add(reactShadowNode);
                } else {
                    throw new IllegalStateException("Child is null");
                }
            }
            return arrayList;
        }
        throw new IllegalStateException("Spannable element has not been prepared in onBeforeLayout");
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public boolean hoistNativeChildren() {
        return true;
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public boolean isVirtualAnchor() {
        return false;
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void markUpdated() {
        super.markUpdated();
        super.dirty();
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void onBeforeLayout(@NotNull NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer) {
        Intrinsics.checkNotNullParameter(nativeViewHierarchyOptimizer, "nativeViewHierarchyOptimizer");
        this.preparedSpannableText = spannedFromShadowNode(this, null, true, nativeViewHierarchyOptimizer);
        markUpdated();
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void onCollectExtraUpdates(@NotNull UIViewOperationQueue uiViewOperationQueue) {
        Intrinsics.checkNotNullParameter(uiViewOperationQueue, "uiViewOperationQueue");
        super.onCollectExtraUpdates(uiViewOperationQueue);
        Spannable spannable = this.preparedSpannableText;
        if (spannable == null) {
            return;
        }
        uiViewOperationQueue.enqueueUpdateExtraData(getReactTag(), new ReactTextUpdate(spannable, -1, this.mContainsImages, getPadding(4), getPadding(1), getPadding(5), getPadding(3), getTextAlign(), this.mTextBreakStrategy, this.mJustificationMode));
    }

    @ReactProp(name = "onTextLayout")
    public final void setShouldNotifyOnTextLayout(boolean z10) {
        this.shouldNotifyOnTextLayout = z10;
    }

    public /* synthetic */ ReactTextShadowNode(ReactTextViewManagerCallback reactTextViewManagerCallback, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : reactTextViewManagerCallback);
    }

    public ReactTextShadowNode(ReactTextViewManagerCallback reactTextViewManagerCallback) {
        super(reactTextViewManagerCallback);
        this.textMeasureFunction = new YogaMeasureFunction() { // from class: com.facebook.react.views.text.b
            @Override // com.facebook.yoga.YogaMeasureFunction
            public final long measure(YogaNode yogaNode, float f10, YogaMeasureMode yogaMeasureMode, float f11, YogaMeasureMode yogaMeasureMode2) {
                long textMeasureFunction$lambda$2;
                textMeasureFunction$lambda$2 = ReactTextShadowNode.textMeasureFunction$lambda$2(ReactTextShadowNode.this, yogaNode, f10, yogaMeasureMode, f11, yogaMeasureMode2);
                return textMeasureFunction$lambda$2;
            }
        };
        this.mTextBaselineFunction = new YogaBaselineFunction() { // from class: com.facebook.react.views.text.c
            @Override // com.facebook.yoga.YogaBaselineFunction
            public final float a(YogaNode yogaNode, float f10, float f11) {
                float mTextBaselineFunction$lambda$4;
                mTextBaselineFunction$lambda$4 = ReactTextShadowNode.mTextBaselineFunction$lambda$4(ReactTextShadowNode.this, yogaNode, f10, f11);
                return mTextBaselineFunction$lambda$4;
            }
        };
        initMeasureFunction();
    }
}
