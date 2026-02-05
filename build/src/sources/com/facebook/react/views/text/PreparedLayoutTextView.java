package com.facebook.react.views.text;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.os.Build;
import android.text.Layout;
import android.text.Spanned;
import android.text.TextPaint;
import android.text.style.ClickableSpan;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.ViewGroup;
import androidx.core.view.h0;
import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.uimanager.ReactCompoundView;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.style.Overflow;
import com.facebook.react.views.text.internal.span.ReactTagSpan;
import com.facebook.react.views.text.internal.span.StrokeStyleSpan;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0084\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\r\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0005\b\u0001\u0018\u0000 O2\u00020\u00012\u00020\u0002:\u0003MNOB\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\b\u0010$\u001a\u00020%H\u0002J\u0006\u0010&\u001a\u00020%J\u0010\u0010'\u001a\u00020%2\u0006\u0010(\u001a\u00020)H\u0014J0\u0010*\u001a\u00020%2\u0006\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020\u001a2\u0006\u0010.\u001a\u00020\u001a2\u0006\u0010/\u001a\u00020\u001a2\u0006\u00100\u001a\u00020\u001aH\u0014J\u0016\u00101\u001a\u00020%2\u0006\u00102\u001a\u00020\u001a2\u0006\u00103\u001a\u00020\u001aJ\u0006\u00104\u001a\u00020%J\u0010\u00105\u001a\u00020,2\u0006\u00106\u001a\u000207H\u0016J3\u00108\u001a\u0004\u0018\u0001H9\"\u0004\b\u0000\u001092\u0006\u0010:\u001a\u00020\u001a2\u0006\u0010;\u001a\u00020\u001a2\f\u0010<\u001a\b\u0012\u0004\u0012\u0002H90=H\u0002¢\u0006\u0002\u0010>J\u0018\u0010?\u001a\u00020\u001a2\u0006\u0010:\u001a\u00020\u001a2\u0006\u0010;\u001a\u00020\u001aH\u0002J\u0010\u0010@\u001a\u00020,2\u0006\u00106\u001a\u000207H\u0016J\"\u0010A\u001a\u00020%2\u0006\u0010B\u001a\u00020,2\u0006\u0010C\u001a\u00020\u001a2\b\u0010D\u001a\u0004\u0018\u00010EH\u0016J\u0010\u0010F\u001a\u00020,2\u0006\u00106\u001a\u00020GH\u0016J\b\u0010H\u001a\u00020,H\u0016J\u0018\u0010I\u001a\u00020\u001a2\u0006\u0010J\u001a\u00020K2\u0006\u0010L\u001a\u00020KH\u0016R\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R(\u0010\u000e\u001a\u0004\u0018\u00010\r2\b\u0010\f\u001a\u0004\u0018\u00010\r@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012R$\u0010\u0014\u001a\u00020\u00132\u0006\u0010\f\u001a\u00020\u0013@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0015\u0010\u0016\"\u0004\b\u0017\u0010\u0018R\"\u0010\u0019\u001a\u0004\u0018\u00010\u001a8\u0006@\u0006X\u0087\u000e¢\u0006\u0010\n\u0002\u0010\u001f\u001a\u0004\b\u001b\u0010\u001c\"\u0004\b\u001d\u0010\u001eR\u0013\u0010 \u001a\u0004\u0018\u00010!8G¢\u0006\u0006\u001a\u0004\b\"\u0010#¨\u0006P"}, d2 = {"Lcom/facebook/react/views/text/PreparedLayoutTextView;", "Landroid/view/ViewGroup;", "Lcom/facebook/react/uimanager/ReactCompoundView;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "clickableSpans", "", "Landroid/text/style/ClickableSpan;", "selection", "Lcom/facebook/react/views/text/PreparedLayoutTextView$TextSelection;", "value", "Lcom/facebook/react/views/text/PreparedLayout;", "preparedLayout", "getPreparedLayout", "()Lcom/facebook/react/views/text/PreparedLayout;", "setPreparedLayout", "(Lcom/facebook/react/views/text/PreparedLayout;)V", "Lcom/facebook/react/uimanager/style/Overflow;", ViewProps.OVERFLOW, "getOverflow", "()Lcom/facebook/react/uimanager/style/Overflow;", "setOverflow", "(Lcom/facebook/react/uimanager/style/Overflow;)V", "selectionColor", "", "getSelectionColor", "()Ljava/lang/Integer;", "setSelectionColor", "(Ljava/lang/Integer;)V", "Ljava/lang/Integer;", "text", "", "getText", "()Ljava/lang/CharSequence;", "initView", "", "recycleView", "onDraw", "canvas", "Landroid/graphics/Canvas;", "onLayout", "changed", "", "l", "t", "r", "b", "setSelection", ViewProps.START, ViewProps.END, "clearSelection", "onTouchEvent", "event", "Landroid/view/MotionEvent;", "getSpanInCoords", "T", "x", "y", "clazz", "Ljava/lang/Class;", "(IILjava/lang/Class;)Ljava/lang/Object;", "getTextOffsetAt", "dispatchHoverEvent", "onFocusChanged", "gainFocus", "direction", "previouslyFocusedRect", "Landroid/graphics/Rect;", "dispatchKeyEvent", "Landroid/view/KeyEvent;", "hasOverlappingRendering", "reactTagForTouch", "touchX", "", "touchY", "Api34Utils", "TextSelection", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
@SourceDebugExtension({"SMAP\nPreparedLayoutTextView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PreparedLayoutTextView.kt\ncom/facebook/react/views/text/PreparedLayoutTextView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,374:1\n1#2:375\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PreparedLayoutTextView extends ViewGroup implements ReactCompoundView {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final Paint selectionPaint = new Paint();
    @NotNull
    private List<? extends ClickableSpan> clickableSpans;
    @NotNull
    private Overflow overflow;
    private PreparedLayout preparedLayout;
    private TextSelection selection;
    private Integer selectionColor;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bÃ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J,\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00062\b\u0010\u0010\u001a\u0004\u0018\u00010\bH\u0007R\u0016\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/facebook/react/views/text/PreparedLayoutTextView$Api34Utils;", "", "<init>", "()V", "highlightPaths", "", "Landroid/graphics/Path;", "highlightPaints", "Landroid/graphics/Paint;", "draw", "", "layout", "Landroid/text/Layout;", "canvas", "Landroid/graphics/Canvas;", "selectionPath", "selectionPaint", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Api34Utils {
        @NotNull
        public static final Api34Utils INSTANCE = new Api34Utils();
        private static List<? extends Paint> highlightPaints;
        private static List<? extends Path> highlightPaths;

        private Api34Utils() {
        }

        public final void draw(@NotNull Layout layout, @NotNull Canvas canvas, Path path, Paint paint) {
            Intrinsics.checkNotNullParameter(layout, "layout");
            Intrinsics.checkNotNullParameter(canvas, "canvas");
            if (path != null) {
                if (highlightPaths == null) {
                    highlightPaths = new ArrayList();
                }
                if (highlightPaints == null) {
                    highlightPaints = new ArrayList();
                }
            }
            layout.draw(canvas, highlightPaths, highlightPaints, path, paint, 0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\r\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\u0006\u0010\t\u001a\u00020\nH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/facebook/react/views/text/PreparedLayoutTextView$Companion;", "", "<init>", "()V", "selectionPaint", "Landroid/graphics/Paint;", "filterClickableSpans", "", "Landroid/text/style/ClickableSpan;", "text", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final List<ClickableSpan> filterClickableSpans(CharSequence charSequence) {
            if (!(charSequence instanceof Spanned)) {
                return CollectionsKt.l();
            }
            ArrayList arrayList = new ArrayList();
            int i10 = 0;
            while (i10 < charSequence.length()) {
                Spanned spanned = (Spanned) charSequence;
                int nextSpanTransition = spanned.nextSpanTransition(i10, charSequence.length(), ClickableSpan.class);
                Object[] spans = spanned.getSpans(i10, nextSpanTransition, ClickableSpan.class);
                Intrinsics.checkNotNullExpressionValue(spans, "getSpans(...)");
                CollectionsKt.D(arrayList, spans);
                i10 = nextSpanTransition;
            }
            return arrayList;
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\b\u0002\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006¢\u0006\u0004\b\u0007\u0010\bR\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\t\u0010\n\"\u0004\b\u000b\u0010\fR\u001a\u0010\u0004\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\r\u0010\n\"\u0004\b\u000e\u0010\fR\u001a\u0010\u0005\u001a\u00020\u0006X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012¨\u0006\u0013"}, d2 = {"Lcom/facebook/react/views/text/PreparedLayoutTextView$TextSelection;", "", ViewProps.START, "", ViewProps.END, "path", "Landroid/graphics/Path;", "<init>", "(IILandroid/graphics/Path;)V", "getStart", "()I", "setStart", "(I)V", "getEnd", "setEnd", "getPath", "()Landroid/graphics/Path;", "setPath", "(Landroid/graphics/Path;)V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class TextSelection {
        private int end;
        @NotNull
        private Path path;
        private int start;

        public TextSelection(int i10, int i11, @NotNull Path path) {
            Intrinsics.checkNotNullParameter(path, "path");
            this.start = i10;
            this.end = i11;
            this.path = path;
        }

        public final int getEnd() {
            return this.end;
        }

        @NotNull
        public final Path getPath() {
            return this.path;
        }

        public final int getStart() {
            return this.start;
        }

        public final void setEnd(int i10) {
            this.end = i10;
        }

        public final void setPath(@NotNull Path path) {
            Intrinsics.checkNotNullParameter(path, "<set-?>");
            this.path = path;
        }

        public final void setStart(int i10) {
            this.start = i10;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PreparedLayoutTextView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.clickableSpans = CollectionsKt.l();
        this.overflow = Overflow.HIDDEN;
        initView();
        setWillNotDraw(false);
    }

    private final <T> T getSpanInCoords(int i10, int i11, Class<T> cls) {
        Spanned spanned;
        int spanStart;
        int spanEnd;
        int textOffsetAt = getTextOffsetAt(i10, i11);
        if (textOffsetAt < 0) {
            return null;
        }
        CharSequence text = getText();
        if (text instanceof Spanned) {
            spanned = (Spanned) text;
        } else {
            spanned = null;
        }
        if (spanned == null) {
            return null;
        }
        Object[] spans = spanned.getSpans(textOffsetAt, textOffsetAt, cls);
        Intrinsics.checkNotNull(spans);
        if (spans.length == 0) {
            return null;
        }
        if (spans.length <= 2) {
            Iterator it = ArrayIteratorKt.iterator(spans);
            while (it.hasNext()) {
                T t10 = (T) it.next();
                int spanFlags = spanned.getSpanFlags(t10);
                int i12 = spanFlags & 18;
                if (i12 == 0 && (spanFlags & 17) == 0) {
                    spanStart = spanned.getSpanStart(t10) + 1;
                } else {
                    spanStart = spanned.getSpanStart(t10);
                }
                if (i12 == 0 && (spanFlags & 34) == 0) {
                    spanEnd = spanned.getSpanEnd(t10) - 1;
                } else {
                    spanEnd = spanned.getSpanEnd(t10);
                }
                if (textOffsetAt >= spanStart && textOffsetAt <= spanEnd) {
                    return t10;
                }
            }
            return null;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final int getTextOffsetAt(int i10, int i11) {
        int i12;
        Layout layout;
        float paragraphLeft;
        float lineMax;
        float f10;
        float f11;
        int paddingLeft = i10 - getPaddingLeft();
        int paddingTop = getPaddingTop();
        PreparedLayout preparedLayout = this.preparedLayout;
        boolean z10 = false;
        if (preparedLayout != null) {
            i12 = ds.a.c(preparedLayout.getVerticalOffset());
        } else {
            i12 = 0;
        }
        int i13 = i11 - (paddingTop + i12);
        PreparedLayout preparedLayout2 = this.preparedLayout;
        if (preparedLayout2 != null && (layout = preparedLayout2.getLayout()) != null) {
            int lineForVertical = layout.getLineForVertical(i13);
            if (layout.getAlignment() == Layout.Alignment.ALIGN_CENTER) {
                f11 = layout.getLineLeft(lineForVertical);
                f10 = layout.getLineRight(lineForVertical);
            } else {
                if (layout.getParagraphDirection(lineForVertical) == -1) {
                    z10 = true;
                }
                if (z10) {
                    paragraphLeft = layout.getWidth() - layout.getLineMax(lineForVertical);
                } else {
                    paragraphLeft = layout.getParagraphLeft(lineForVertical);
                }
                if (z10) {
                    lineMax = layout.getParagraphRight(lineForVertical);
                } else {
                    lineMax = layout.getLineMax(lineForVertical);
                }
                float f12 = paragraphLeft;
                f10 = lineMax;
                f11 = f12;
            }
            float f13 = paddingLeft;
            if (f13 >= f11 && f13 <= f10) {
                try {
                    return layout.getOffsetForHorizontal(lineForVertical, f13);
                } catch (ArrayIndexOutOfBoundsException unused) {
                }
            }
        }
        return -1;
    }

    private final void initView() {
        this.clickableSpans = CollectionsKt.l();
        this.selection = null;
        setPreparedLayout(null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onDraw$lambda$1(Layout layout, Canvas canvas, PreparedLayoutTextView preparedLayoutTextView) {
        Path path = null;
        if (Build.VERSION.SDK_INT >= 34) {
            Api34Utils api34Utils = Api34Utils.INSTANCE;
            TextSelection textSelection = preparedLayoutTextView.selection;
            if (textSelection != null) {
                path = textSelection.getPath();
            }
            api34Utils.draw(layout, canvas, path, selectionPaint);
            return;
        }
        TextSelection textSelection2 = preparedLayoutTextView.selection;
        if (textSelection2 != null) {
            path = textSelection2.getPath();
        }
        layout.draw(canvas, path, selectionPaint, 0);
    }

    public final void clearSelection() {
        this.selection = null;
        invalidate();
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchHoverEvent(@NotNull MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return super.dispatchHoverEvent(event);
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchKeyEvent(@NotNull KeyEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        androidx.core.view.a l10 = h0.l(this);
        if (((l10 instanceof ReactTextViewAccessibilityDelegate) && ((ReactTextViewAccessibilityDelegate) l10).dispatchKeyEvent(event)) || super.dispatchKeyEvent(event)) {
            return true;
        }
        return false;
    }

    @NotNull
    public final Overflow getOverflow() {
        return this.overflow;
    }

    public final PreparedLayout getPreparedLayout() {
        return this.preparedLayout;
    }

    public final Integer getSelectionColor() {
        return this.selectionColor;
    }

    @fb.a
    public final CharSequence getText() {
        Layout layout;
        PreparedLayout preparedLayout = this.preparedLayout;
        if (preparedLayout != null && (layout = preparedLayout.getLayout()) != null) {
            return layout.getText();
        }
        return null;
    }

    @Override // android.view.View
    public boolean hasOverlappingRendering() {
        return false;
    }

    @Override // android.view.View
    protected void onDraw(@NotNull final Canvas canvas) {
        final Layout layout;
        float f10;
        int defaultTextColorHighlight;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        PreparedLayout preparedLayout = this.preparedLayout;
        Spanned spanned = null;
        if (preparedLayout != null) {
            layout = preparedLayout.getLayout();
        } else {
            layout = null;
        }
        if (this.overflow != Overflow.VISIBLE) {
            BackgroundStyleApplicator.clipToPaddingBox(this, canvas);
        }
        super.onDraw(canvas);
        float paddingLeft = getPaddingLeft();
        float paddingTop = getPaddingTop();
        PreparedLayout preparedLayout2 = this.preparedLayout;
        if (preparedLayout2 != null) {
            f10 = preparedLayout2.getVerticalOffset();
        } else {
            f10 = 0.0f;
        }
        canvas.translate(paddingLeft, paddingTop + f10);
        if (layout != null) {
            if (this.selection != null) {
                Paint paint = selectionPaint;
                Integer num = this.selectionColor;
                if (num != null) {
                    defaultTextColorHighlight = num.intValue();
                } else {
                    Context context = getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    defaultTextColorHighlight = DefaultStyleValuesUtil.getDefaultTextColorHighlight(context);
                }
                paint.setColor(defaultTextColorHighlight);
            }
            Runnable runnable = new Runnable() { // from class: com.facebook.react.views.text.a
                @Override // java.lang.Runnable
                public final void run() {
                    PreparedLayoutTextView.onDraw$lambda$1(layout, canvas, this);
                }
            };
            StrokeStyleSpan.Companion companion = StrokeStyleSpan.Companion;
            CharSequence text = layout.getText();
            if (text instanceof Spanned) {
                spanned = (Spanned) text;
            }
            StrokeStyleSpan strokeSpan = companion.getStrokeSpan(spanned);
            if (strokeSpan != null) {
                TextPaint paint2 = layout.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint2, "getPaint(...)");
                if (strokeSpan.draw(paint2, runnable)) {
                    return;
                }
            }
            runnable.run();
        }
    }

    @Override // android.view.View
    public void onFocusChanged(boolean z10, int i10, Rect rect) {
        if (!this.clickableSpans.isEmpty() && !z10) {
            clearSelection();
        }
        super.onFocusChanged(z10, i10, rect);
        androidx.core.view.a l10 = h0.l(this);
        if (l10 != null && (l10 instanceof ReactTextViewAccessibilityDelegate)) {
            ((ReactTextViewAccessibilityDelegate) l10).onFocusChanged(z10, i10, rect);
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }

    @Override // android.view.View
    public boolean onTouchEvent(@NotNull MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (isEnabled() && !this.clickableSpans.isEmpty()) {
            int actionMasked = event.getActionMasked();
            if (actionMasked == 3) {
                clearSelection();
                return false;
            }
            ClickableSpan clickableSpan = (ClickableSpan) getSpanInCoords((int) event.getX(), (int) event.getY(), ClickableSpan.class);
            if (clickableSpan == null) {
                clearSelection();
                return super.onTouchEvent(event);
            }
            if (actionMasked != 0) {
                if (actionMasked == 1) {
                    clearSelection();
                    clickableSpan.onClick(this);
                }
            } else {
                PreparedLayout preparedLayout = this.preparedLayout;
                if (preparedLayout != null) {
                    Layout layout = preparedLayout.getLayout();
                    CharSequence text = layout.getText();
                    Intrinsics.checkNotNull(text, "null cannot be cast to non-null type android.text.Spanned");
                    int spanStart = ((Spanned) text).getSpanStart(clickableSpan);
                    CharSequence text2 = layout.getText();
                    Intrinsics.checkNotNull(text2, "null cannot be cast to non-null type android.text.Spanned");
                    setSelection(spanStart, ((Spanned) text2).getSpanEnd(clickableSpan));
                } else {
                    throw new IllegalStateException("Required value was null.");
                }
            }
            return true;
        }
        return super.onTouchEvent(event);
    }

    @Override // com.facebook.react.uimanager.ReactCompoundView
    public int reactTagForTouch(float f10, float f11) {
        ReactTagSpan reactTagSpan = (ReactTagSpan) getSpanInCoords(ds.a.c(f10), ds.a.c(f11), ReactTagSpan.class);
        if (reactTagSpan != null) {
            return reactTagSpan.getReactTag();
        }
        return getId();
    }

    public final void recycleView() {
        initView();
        BackgroundStyleApplicator.reset(this);
        setOverflow(Overflow.HIDDEN);
    }

    public final void setOverflow(@NotNull Overflow value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (this.overflow != value) {
            this.overflow = value;
            invalidate();
        }
    }

    public final void setPreparedLayout(PreparedLayout preparedLayout) {
        List<? extends ClickableSpan> l10;
        Layout layout;
        CharSequence text;
        CharSequence charSequence;
        Layout layout2;
        if (!Intrinsics.areEqual(this.preparedLayout, preparedLayout)) {
            TextSelection textSelection = this.selection;
            if (textSelection != null) {
                if (preparedLayout != null) {
                    PreparedLayout preparedLayout2 = this.preparedLayout;
                    if (preparedLayout2 != null && (layout2 = preparedLayout2.getLayout()) != null) {
                        charSequence = layout2.getText();
                    } else {
                        charSequence = null;
                    }
                    if (Intrinsics.areEqual(String.valueOf(charSequence), preparedLayout.getLayout().getText().toString())) {
                        preparedLayout.getLayout().getSelectionPath(textSelection.getStart(), textSelection.getEnd(), textSelection.getPath());
                    }
                }
                clearSelection();
            }
            if (preparedLayout == null || (layout = preparedLayout.getLayout()) == null || (text = layout.getText()) == null || (l10 = Companion.filterClickableSpans(text)) == null) {
                l10 = CollectionsKt.l();
            }
            this.clickableSpans = l10;
            this.preparedLayout = preparedLayout;
            invalidate();
        }
    }

    public final void setSelection(int i10, int i11) {
        PreparedLayout preparedLayout = this.preparedLayout;
        if (preparedLayout != null) {
            Layout layout = preparedLayout.getLayout();
            if (i10 >= 0 && i11 <= layout.getText().length() && i10 < i11) {
                TextSelection textSelection = this.selection;
                if (textSelection == null) {
                    Path path = new Path();
                    layout.getSelectionPath(i10, i11, path);
                    this.selection = new TextSelection(i10, i11, path);
                } else {
                    textSelection.setStart(i10);
                    textSelection.setEnd(i11);
                    layout.getSelectionPath(i10, i11, textSelection.getPath());
                }
                invalidate();
                return;
            }
            int length = layout.getText().length();
            throw new IllegalArgumentException("setSelection start and end are not in valid range. start: " + i10 + ", end: " + i11 + ", text length: " + length);
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final void setSelectionColor(Integer num) {
        this.selectionColor = num;
    }
}
