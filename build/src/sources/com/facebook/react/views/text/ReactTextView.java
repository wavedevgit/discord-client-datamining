package com.facebook.react.views.text;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.text.Layout;
import android.text.Spannable;
import android.text.Spanned;
import android.text.TextUtils;
import android.text.method.LinkMovementMethod;
import android.text.util.Linkify;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.ViewGroup;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.appcompat.widget.s0;
import androidx.core.view.h0;
import androidx.customview.widget.ExploreByTouchHelper;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.internal.SystraceSection;
import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ReactCompoundView;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.uimanager.style.Overflow;
import com.facebook.react.views.text.internal.span.ReactTagSpan;
import com.facebook.react.views.text.internal.span.TextInlineImageSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReactTextView extends AppCompatTextView implements ReactCompoundView {
    private static final int DEFAULT_GRAVITY = 8388659;
    private static final ViewGroup.LayoutParams EMPTY_LAYOUT_PARAMS = new ViewGroup.LayoutParams(0, 0);
    private boolean mAdjustsFontSizeToFit;
    private boolean mContainsImages;
    private TextUtils.TruncateAt mEllipsizeLocation;
    private float mFontSize;
    private float mLetterSpacing;
    private int mLinkifyMaskType;
    private float mMinimumFontSize;
    private int mNumberOfLines;
    private Overflow mOverflow;
    private boolean mShouldAdjustSpannableFontSize;
    private Spannable mSpanned;
    private boolean mTextIsSelectable;

    public ReactTextView(Context context) {
        super(context);
        this.mOverflow = Overflow.VISIBLE;
        initView();
    }

    private void applyTextAttributes() {
        if (!Float.isNaN(this.mFontSize)) {
            setTextSize(0, this.mFontSize);
        }
        if (!Float.isNaN(this.mLetterSpacing)) {
            super.setLetterSpacing(this.mLetterSpacing);
        }
    }

    private ReactContext getReactContext() {
        Context context = getContext();
        if (context instanceof s0) {
            return (ReactContext) ((s0) context).getBaseContext();
        }
        return (ReactContext) context;
    }

    private void initView() {
        this.mNumberOfLines = Integer.MAX_VALUE;
        this.mAdjustsFontSizeToFit = false;
        this.mLinkifyMaskType = 0;
        this.mTextIsSelectable = false;
        this.mShouldAdjustSpannableFontSize = false;
        this.mEllipsizeLocation = TextUtils.TruncateAt.END;
        this.mFontSize = Float.NaN;
        this.mMinimumFontSize = Float.NaN;
        this.mLetterSpacing = 0.0f;
        this.mOverflow = Overflow.VISIBLE;
        this.mSpanned = null;
    }

    private static WritableMap inlineViewJson(int i10, int i11, int i12, int i13, int i14, int i15) {
        WritableMap createMap = Arguments.createMap();
        if (i10 == 8) {
            createMap.putString("visibility", "gone");
            createMap.putInt("index", i11);
            return createMap;
        } else if (i10 == 0) {
            createMap.putString("visibility", ViewProps.VISIBLE);
            createMap.putInt("index", i11);
            createMap.putDouble(ViewProps.LEFT, PixelUtil.toDIPFromPixel(i12));
            createMap.putDouble(ViewProps.TOP, PixelUtil.toDIPFromPixel(i13));
            createMap.putDouble(ViewProps.RIGHT, PixelUtil.toDIPFromPixel(i14));
            createMap.putDouble(ViewProps.BOTTOM, PixelUtil.toDIPFromPixel(i15));
            return createMap;
        } else {
            createMap.putString("visibility", "unknown");
            createMap.putInt("index", i11);
            return createMap;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$onDraw$0(Canvas canvas) {
        super.onDraw(canvas);
    }

    @Override // android.view.View
    protected boolean dispatchHoverEvent(MotionEvent motionEvent) {
        if (h0.N(this)) {
            androidx.core.view.a l10 = h0.l(this);
            if (l10 instanceof ExploreByTouchHelper) {
                if (!((ExploreByTouchHelper) l10).dispatchHoverEvent(motionEvent) && !super.dispatchHoverEvent(motionEvent)) {
                    return false;
                }
                return true;
            }
        }
        return super.dispatchHoverEvent(motionEvent);
    }

    @Override // android.view.View
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        androidx.core.view.a l10 = h0.l(this);
        if ((l10 != null && getMovementMethod() == null && (l10 instanceof ReactTextViewAccessibilityDelegate) && ((ReactTextViewAccessibilityDelegate) l10).dispatchKeyEvent(keyEvent)) || super.dispatchKeyEvent(keyEvent)) {
            return true;
        }
        return false;
    }

    int getGravityHorizontal() {
        return getGravity() & 8388615;
    }

    public Spannable getSpanned() {
        return this.mSpanned;
    }

    @Override // android.widget.TextView, android.view.View
    public boolean hasOverlappingRendering() {
        return false;
    }

    @Override // android.widget.TextView, android.view.View, android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        if (this.mContainsImages && (getText() instanceof Spanned)) {
            Spanned spanned = (Spanned) getText();
            for (TextInlineImageSpan textInlineImageSpan : (TextInlineImageSpan[]) spanned.getSpans(0, spanned.length(), TextInlineImageSpan.class)) {
                if (textInlineImageSpan.getDrawable() == drawable) {
                    invalidate();
                }
            }
        }
        super.invalidateDrawable(drawable);
    }

    @Override // android.widget.TextView, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (this.mTextIsSelectable) {
            setTextIsSelectable(false);
            setTextIsSelectable(true);
        } else {
            setTextIsSelectable(false);
        }
        if (this.mContainsImages && (getText() instanceof Spanned)) {
            Spanned spanned = (Spanned) getText();
            for (TextInlineImageSpan textInlineImageSpan : (TextInlineImageSpan[]) spanned.getSpans(0, spanned.length(), TextInlineImageSpan.class)) {
                textInlineImageSpan.onAttachedToWindow();
            }
        }
    }

    @Override // androidx.appcompat.widget.AppCompatTextView, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        if (this.mContainsImages && (getText() instanceof Spanned)) {
            Spanned spanned = (Spanned) getText();
            for (TextInlineImageSpan textInlineImageSpan : (TextInlineImageSpan[]) spanned.getSpans(0, spanned.length(), TextInlineImageSpan.class)) {
                textInlineImageSpan.onDetachedFromWindow();
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:31:0x008e A[Catch: all -> 0x0052, TRY_LEAVE, TryCatch #0 {all -> 0x0052, blocks: (B:3:0x0009, B:6:0x0013, B:8:0x0017, B:13:0x0046, B:12:0x0041, B:16:0x0055, B:18:0x005b, B:19:0x0061, B:21:0x0069, B:24:0x0073, B:28:0x0087, B:29:0x008a, B:31:0x008e), top: B:39:0x0009 }] */
    @Override // android.widget.TextView, android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void onDraw(android.graphics.Canvas r17) {
        /*
            r16 = this;
            r1 = r16
            com.facebook.react.internal.SystraceSection r2 = new com.facebook.react.internal.SystraceSection
            java.lang.String r0 = "ReactTextView.onDraw"
            r2.<init>(r0)
            android.text.Spannable r3 = r1.getSpanned()     // Catch: java.lang.Throwable -> L52
            boolean r0 = r1.mAdjustsFontSizeToFit     // Catch: java.lang.Throwable -> L52
            if (r0 == 0) goto L55
            if (r3 == 0) goto L55
            boolean r0 = r1.mShouldAdjustSpannableFontSize     // Catch: java.lang.Throwable -> L52
            if (r0 == 0) goto L55
            r0 = 0
            r1.mShouldAdjustSpannableFontSize = r0     // Catch: java.lang.Throwable -> L52
            int r0 = r1.getWidth()     // Catch: java.lang.Throwable -> L52
            float r4 = (float) r0     // Catch: java.lang.Throwable -> L52
            com.facebook.yoga.YogaMeasureMode r5 = com.facebook.yoga.YogaMeasureMode.EXACTLY     // Catch: java.lang.Throwable -> L52
            int r0 = r1.getHeight()     // Catch: java.lang.Throwable -> L52
            float r6 = (float) r0     // Catch: java.lang.Throwable -> L52
            float r8 = r1.mMinimumFontSize     // Catch: java.lang.Throwable -> L52
            int r9 = r1.mNumberOfLines     // Catch: java.lang.Throwable -> L52
            boolean r10 = r1.getIncludeFontPadding()     // Catch: java.lang.Throwable -> L52
            int r11 = r1.getBreakStrategy()     // Catch: java.lang.Throwable -> L52
            int r12 = r1.getHyphenationFrequency()     // Catch: java.lang.Throwable -> L52
            android.text.Layout$Alignment r13 = android.text.Layout.Alignment.ALIGN_NORMAL     // Catch: java.lang.Throwable -> L52
            int r0 = android.os.Build.VERSION.SDK_INT     // Catch: java.lang.Throwable -> L52
            r7 = 26
            if (r0 >= r7) goto L41
            r0 = -1
        L3f:
            r14 = r0
            goto L46
        L41:
            int r0 = r1.getJustificationMode()     // Catch: java.lang.Throwable -> L52
            goto L3f
        L46:
            android.text.TextPaint r15 = r1.getPaint()     // Catch: java.lang.Throwable -> L52
            r7 = r5
            com.facebook.react.views.text.TextLayoutManager.adjustSpannableFontToFit(r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15)     // Catch: java.lang.Throwable -> L52
            r1.setText(r3)     // Catch: java.lang.Throwable -> L52
            goto L55
        L52:
            r0 = move-exception
            r3 = r0
            goto L95
        L55:
            com.facebook.react.uimanager.style.Overflow r0 = r1.mOverflow     // Catch: java.lang.Throwable -> L52
            com.facebook.react.uimanager.style.Overflow r3 = com.facebook.react.uimanager.style.Overflow.VISIBLE     // Catch: java.lang.Throwable -> L52
            if (r0 == r3) goto L61
            r17.save()     // Catch: java.lang.Throwable -> L52
            com.facebook.react.uimanager.BackgroundStyleApplicator.clipToPaddingBox(r16, r17)     // Catch: java.lang.Throwable -> L52
        L61:
            java.lang.CharSequence r0 = r1.getText()     // Catch: java.lang.Throwable -> L52
            boolean r4 = r0 instanceof android.text.Spanned     // Catch: java.lang.Throwable -> L52
            if (r4 == 0) goto L70
            android.text.Spanned r0 = (android.text.Spanned) r0     // Catch: java.lang.Throwable -> L52
            com.facebook.react.views.text.internal.span.StrokeStyleSpan r0 = com.facebook.react.views.text.internal.span.StrokeStyleSpan.getStrokeSpan(r0)     // Catch: java.lang.Throwable -> L52
            goto L71
        L70:
            r0 = 0
        L71:
            if (r0 == 0) goto L85
            android.text.TextPaint r4 = r1.getPaint()     // Catch: java.lang.Throwable -> L52
            com.facebook.react.views.text.d r5 = new com.facebook.react.views.text.d     // Catch: java.lang.Throwable -> L52
            r6 = r17
            r5.<init>()     // Catch: java.lang.Throwable -> L52
            boolean r0 = r0.draw(r4, r5)     // Catch: java.lang.Throwable -> L52
            if (r0 != 0) goto L8a
            goto L87
        L85:
            r6 = r17
        L87:
            super.onDraw(r17)     // Catch: java.lang.Throwable -> L52
        L8a:
            com.facebook.react.uimanager.style.Overflow r0 = r1.mOverflow     // Catch: java.lang.Throwable -> L52
            if (r0 == r3) goto L91
            r6.restore()     // Catch: java.lang.Throwable -> L52
        L91:
            r2.close()
            return
        L95:
            r2.close()     // Catch: java.lang.Throwable -> L99
            goto L9d
        L99:
            r0 = move-exception
            r3.addSuppressed(r0)
        L9d:
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.ReactTextView.onDraw(android.graphics.Canvas):void");
    }

    @Override // android.view.View
    public void onFinishTemporaryDetach() {
        super.onFinishTemporaryDetach();
        if (this.mContainsImages && (getText() instanceof Spanned)) {
            Spanned spanned = (Spanned) getText();
            for (TextInlineImageSpan textInlineImageSpan : (TextInlineImageSpan[]) spanned.getSpans(0, spanned.length(), TextInlineImageSpan.class)) {
                textInlineImageSpan.onFinishTemporaryDetach();
            }
        }
    }

    @Override // android.widget.TextView, android.view.View
    public final void onFocusChanged(boolean z10, int i10, Rect rect) {
        super.onFocusChanged(z10, i10, rect);
        androidx.core.view.a l10 = h0.l(this);
        if (l10 != null && (l10 instanceof ReactTextViewAccessibilityDelegate) && getMovementMethod() == null) {
            ((ReactTextViewAccessibilityDelegate) l10).onFocusChanged(z10, i10, rect);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:48:0x00ed, code lost:
        if (r5 != false) goto L49;
     */
    /* JADX WARN: Removed duplicated region for block: B:51:0x00f2  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x00f8  */
    @Override // androidx.appcompat.widget.AppCompatTextView, android.widget.TextView, android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void onLayout(boolean r19, int r20, int r21, int r22, int r23) {
        /*
            Method dump skipped, instructions count: 296
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.ReactTextView.onLayout(boolean, int, int, int, int):void");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.AppCompatTextView, android.widget.TextView, android.view.View
    public void onMeasure(int i10, int i11) {
        SystraceSection systraceSection = new SystraceSection("ReactTextView.onMeasure");
        try {
            super.onMeasure(i10, i11);
            systraceSection.close();
        } catch (Throwable th2) {
            try {
                systraceSection.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    @Override // android.view.View
    public void onStartTemporaryDetach() {
        super.onStartTemporaryDetach();
        if (this.mContainsImages && (getText() instanceof Spanned)) {
            Spanned spanned = (Spanned) getText();
            for (TextInlineImageSpan textInlineImageSpan : (TextInlineImageSpan[]) spanned.getSpans(0, spanned.length(), TextInlineImageSpan.class)) {
                textInlineImageSpan.onStartTemporaryDetach();
            }
        }
    }

    @Override // com.facebook.react.uimanager.ReactCompoundView
    public int reactTagForTouch(float f10, float f11) {
        int i10;
        CharSequence text = getText();
        int id2 = getId();
        int i11 = (int) f10;
        int i12 = (int) f11;
        Layout layout = getLayout();
        if (layout != null) {
            int lineForVertical = layout.getLineForVertical(i12);
            int lineLeft = (int) layout.getLineLeft(lineForVertical);
            int lineRight = (int) layout.getLineRight(lineForVertical);
            if ((text instanceof Spanned) && i11 >= lineLeft && i11 <= lineRight) {
                Spanned spanned = (Spanned) text;
                try {
                    int offsetForHorizontal = layout.getOffsetForHorizontal(lineForVertical, i11);
                    ReactTagSpan[] reactTagSpanArr = (ReactTagSpan[]) spanned.getSpans(offsetForHorizontal, offsetForHorizontal, ReactTagSpan.class);
                    if (reactTagSpanArr != null) {
                        int length = text.length();
                        for (int i13 = 0; i13 < reactTagSpanArr.length; i13++) {
                            int spanStart = spanned.getSpanStart(reactTagSpanArr[i13]);
                            int spanEnd = spanned.getSpanEnd(reactTagSpanArr[i13]);
                            if (spanEnd >= offsetForHorizontal && (i10 = spanEnd - spanStart) <= length) {
                                id2 = reactTagSpanArr[i13].getReactTag();
                                length = i10;
                            }
                        }
                        return id2;
                    }
                } catch (ArrayIndexOutOfBoundsException e10) {
                    p8.a.m(ReactConstants.TAG, "Crash in HorizontalMeasurementProvider: " + e10.getMessage());
                }
            }
        }
        return id2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void recycleView() {
        initView();
        if (getParent() != null) {
            ((ViewGroup) getParent()).removeView(this);
        }
        BackgroundStyleApplicator.reset(this);
        setBreakStrategy(0);
        setMovementMethod(getDefaultMovementMethod());
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 26) {
            setJustificationMode(0);
        }
        setLayoutParams(EMPTY_LAYOUT_PARAMS);
        super.setText((CharSequence) null);
        applyTextAttributes();
        setGravity(DEFAULT_GRAVITY);
        setNumberOfLines(this.mNumberOfLines);
        setAdjustFontSizeToFit(this.mAdjustsFontSizeToFit);
        setLinkifyMask(this.mLinkifyMaskType);
        setTextIsSelectable(this.mTextIsSelectable);
        setIncludeFontPadding(true);
        setEnabled(true);
        setLinkifyMask(0);
        setEllipsizeLocation(this.mEllipsizeLocation);
        setEnabled(true);
        if (i10 >= 26) {
            setFocusable(16);
        }
        setHyphenationFrequency(0);
        updateView();
    }

    public void setAdjustFontSizeToFit(boolean z10) {
        this.mAdjustsFontSizeToFit = z10;
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        BackgroundStyleApplicator.setBackgroundColor(this, Integer.valueOf(i10));
    }

    public void setBorderColor(int i10, Integer num) {
        BackgroundStyleApplicator.setBorderColor(this, LogicalEdge.values()[i10], num);
    }

    public void setBorderRadius(float f10) {
        setBorderRadius(f10, BorderRadiusProp.BORDER_RADIUS.ordinal());
    }

    public void setBorderStyle(String str) {
        BorderStyle fromString;
        if (str == null) {
            fromString = null;
        } else {
            fromString = BorderStyle.fromString(str);
        }
        BackgroundStyleApplicator.setBorderStyle(this, fromString);
    }

    public void setBorderWidth(int i10, float f10) {
        BackgroundStyleApplicator.setBorderWidth(this, LogicalEdge.values()[i10], Float.valueOf(PixelUtil.toDIPFromPixel(f10)));
    }

    @Override // android.widget.TextView
    public void setBreakStrategy(int i10) {
        super.setBreakStrategy(i10);
        this.mShouldAdjustSpannableFontSize = true;
    }

    public void setEllipsizeLocation(TextUtils.TruncateAt truncateAt) {
        this.mEllipsizeLocation = truncateAt;
    }

    public void setFontSize(float f10) {
        double ceil;
        if (this.mAdjustsFontSizeToFit) {
            ceil = Math.ceil(PixelUtil.toPixelFromSP(f10));
        } else {
            ceil = Math.ceil(PixelUtil.toPixelFromDIP(f10));
        }
        this.mFontSize = (float) ceil;
        applyTextAttributes();
    }

    void setGravityHorizontal(int i10) {
        if (i10 == 0) {
            i10 = 8388611;
        }
        setGravity(i10 | (getGravity() & (-8388616)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setGravityVertical(int i10) {
        if (i10 == 0) {
            i10 = 48;
        }
        setGravity(i10 | (getGravity() & (-113)));
    }

    @Override // android.widget.TextView
    public void setHyphenationFrequency(int i10) {
        super.setHyphenationFrequency(i10);
        this.mShouldAdjustSpannableFontSize = true;
    }

    @Override // android.widget.TextView
    public void setIncludeFontPadding(boolean z10) {
        super.setIncludeFontPadding(z10);
        this.mShouldAdjustSpannableFontSize = true;
    }

    @Override // android.widget.TextView
    public void setLetterSpacing(float f10) {
        if (Float.isNaN(f10)) {
            return;
        }
        this.mLetterSpacing = PixelUtil.toPixelFromDIP(f10) / this.mFontSize;
        applyTextAttributes();
    }

    public void setLinkifyMask(int i10) {
        this.mLinkifyMaskType = i10;
    }

    public void setMinimumFontSize(float f10) {
        this.mMinimumFontSize = f10;
        this.mShouldAdjustSpannableFontSize = true;
    }

    public void setNumberOfLines(int i10) {
        if (i10 == 0) {
            i10 = Integer.MAX_VALUE;
        }
        this.mNumberOfLines = i10;
        setMaxLines(i10);
        this.mShouldAdjustSpannableFontSize = true;
    }

    public void setOverflow(String str) {
        if (str == null) {
            this.mOverflow = Overflow.VISIBLE;
        } else {
            Overflow fromString = Overflow.fromString(str);
            if (fromString == null) {
                fromString = Overflow.VISIBLE;
            }
            this.mOverflow = fromString;
        }
        invalidate();
    }

    public void setSpanned(Spannable spannable) {
        this.mSpanned = spannable;
        this.mShouldAdjustSpannableFontSize = true;
    }

    public void setText(ReactTextUpdate reactTextUpdate) {
        SystraceSection systraceSection = new SystraceSection("ReactTextView.setText(ReactTextUpdate)");
        try {
            this.mContainsImages = reactTextUpdate.containsImages();
            if (getLayoutParams() == null) {
                setLayoutParams(EMPTY_LAYOUT_PARAMS);
            }
            Spannable text = reactTextUpdate.getText();
            int i10 = this.mLinkifyMaskType;
            if (i10 > 0) {
                Linkify.addLinks(text, i10);
                setMovementMethod(LinkMovementMethod.getInstance());
            }
            setText(text);
            float paddingLeft = reactTextUpdate.getPaddingLeft();
            float paddingTop = reactTextUpdate.getPaddingTop();
            float paddingRight = reactTextUpdate.getPaddingRight();
            float paddingBottom = reactTextUpdate.getPaddingBottom();
            if (paddingLeft != -1.0f && paddingTop != -1.0f && paddingRight != -1.0f && paddingBottom != -1.0f) {
                setPadding((int) Math.floor(paddingLeft), (int) Math.floor(paddingTop), (int) Math.floor(paddingRight), (int) Math.floor(paddingBottom));
            }
            int textAlign = reactTextUpdate.getTextAlign();
            if (textAlign != getGravityHorizontal()) {
                setGravityHorizontal(textAlign);
            }
            if (getBreakStrategy() != reactTextUpdate.getTextBreakStrategy()) {
                setBreakStrategy(reactTextUpdate.getTextBreakStrategy());
            }
            if (Build.VERSION.SDK_INT >= 26 && getJustificationMode() != reactTextUpdate.getJustificationMode()) {
                setJustificationMode(reactTextUpdate.getJustificationMode());
            }
            requestLayout();
            systraceSection.close();
        } catch (Throwable th2) {
            try {
                systraceSection.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    @Override // android.widget.TextView
    public void setTextIsSelectable(boolean z10) {
        this.mTextIsSelectable = z10;
        super.setTextIsSelectable(z10);
    }

    public void updateView() {
        TextUtils.TruncateAt truncateAt;
        if (this.mNumberOfLines != Integer.MAX_VALUE && !this.mAdjustsFontSizeToFit) {
            truncateAt = this.mEllipsizeLocation;
        } else {
            truncateAt = null;
        }
        setEllipsize(truncateAt);
    }

    @Override // android.widget.TextView, android.view.View
    protected boolean verifyDrawable(Drawable drawable) {
        if (this.mContainsImages && (getText() instanceof Spanned)) {
            Spanned spanned = (Spanned) getText();
            for (TextInlineImageSpan textInlineImageSpan : (TextInlineImageSpan[]) spanned.getSpans(0, spanned.length(), TextInlineImageSpan.class)) {
                if (textInlineImageSpan.getDrawable() == drawable) {
                    return true;
                }
            }
        }
        return super.verifyDrawable(drawable);
    }

    public void setBorderRadius(float f10, int i10) {
        BackgroundStyleApplicator.setBorderRadius(this, BorderRadiusProp.values()[i10], Float.isNaN(f10) ? null : new LengthPercentage(PixelUtil.toDIPFromPixel(f10), LengthPercentageType.POINT));
    }
}
