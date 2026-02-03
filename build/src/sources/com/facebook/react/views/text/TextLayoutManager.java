package com.facebook.react.views.text;

import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.graphics.Typeface;
import android.os.Build;
import android.text.BoringLayout;
import android.text.Layout;
import android.text.Spannable;
import android.text.SpannableString;
import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.StaticLayout;
import android.text.TextDirectionHeuristics;
import android.text.TextPaint;
import android.text.TextUtils;
import android.text.style.LeadingMarginSpan;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.common.mapbuffer.MapBuffer;
import com.facebook.react.common.mapbuffer.ReadableMapBuffer;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ReactAccessibilityDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.CustomLetterSpacingSpan;
import com.facebook.react.views.text.internal.span.CustomLineHeightSpan;
import com.facebook.react.views.text.internal.span.CustomStyleSpan;
import com.facebook.react.views.text.internal.span.LinearGradientSpan;
import com.facebook.react.views.text.internal.span.ReactAbsoluteSizeSpan;
import com.facebook.react.views.text.internal.span.ReactBackgroundColorSpan;
import com.facebook.react.views.text.internal.span.ReactClickableSpan;
import com.facebook.react.views.text.internal.span.ReactForegroundColorSpan;
import com.facebook.react.views.text.internal.span.ReactOpacitySpan;
import com.facebook.react.views.text.internal.span.ReactStrikethroughSpan;
import com.facebook.react.views.text.internal.span.ReactTagSpan;
import com.facebook.react.views.text.internal.span.ReactTextPaintHolderSpan;
import com.facebook.react.views.text.internal.span.ReactUnderlineSpan;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.facebook.react.views.text.internal.span.ShadowStyleSpan;
import com.facebook.react.views.text.internal.span.StrokeStyleSpan;
import com.facebook.react.views.text.internal.span.TextInlineViewPlaceholderSpan;
import com.facebook.yoga.YogaMeasureMode;
import com.facebook.yoga.h;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import jr.p;
import kotlin.Metadata;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Ì\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0014\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u0014\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\bÀ\u0002\u0018\u00002\u00020\u0001:\u0002{|B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u00052\u0006\u0010'\u001a\u00020#J\u000e\u0010(\u001a\u00020%2\u0006\u0010&\u001a\u00020\u0005J\u000e\u0010)\u001a\u00020\u001f2\u0006\u0010*\u001a\u00020+J\u0012\u0010,\u001a\u0004\u0018\u00010\u001a2\u0006\u0010*\u001a\u00020+H\u0002J\u0012\u0010-\u001a\u00020\u00052\b\u0010.\u001a\u0004\u0018\u00010\u001aH\u0002J\"\u0010/\u001a\u0002002\u0006\u0010*\u001a\u00020+2\u0006\u00101\u001a\u00020#2\b\u0010.\u001a\u0004\u0018\u00010\u001aH\u0002J\u0018\u00102\u001a\u00020\u00052\u0006\u0010*\u001a\u00020+2\u0006\u00101\u001a\u00020#H\u0007J.\u00103\u001a\u00020%2\u0006\u00104\u001a\u0002052\u0006\u00106\u001a\u00020+2\u0006\u00107\u001a\u0002082\f\u00109\u001a\b\u0012\u0004\u0012\u00020;0:H\u0002J\u0018\u0010<\u001a\u00020#2\u0006\u00104\u001a\u0002052\u0006\u00106\u001a\u00020+H\u0002J\u0010\u0010=\u001a\u00020%2\u0006\u0010>\u001a\u00020#H\u0002J \u0010?\u001a\u00020#2\u0006\u00104\u001a\u0002052\u0006\u0010*\u001a\u00020+2\b\u0010@\u001a\u0004\u0018\u00010AJ\"\u0010B\u001a\u00020#2\u0006\u00104\u001a\u0002052\u0006\u0010*\u001a\u00020+2\b\u0010@\u001a\u0004\u0018\u00010AH\u0002Jl\u0010C\u001a\u00020D2\u0006\u0010E\u001a\u00020#2\b\u0010F\u001a\u0004\u0018\u00010G2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010L\u001a\u00020\u001f2\u0006\u0010M\u001a\u00020\u00052\u0006\u0010N\u001a\u00020\u00052\u0006\u0010O\u001a\u0002002\u0006\u0010P\u001a\u00020\u00052\b\u0010Q\u001a\u0004\u0018\u00010R2\u0006\u0010S\u001a\u00020\u00052\u0006\u0010T\u001a\u00020\u001dH\u0002J \u0010U\u001a\u00020%2\u0006\u0010T\u001a\u00020\u001d2\u0006\u0010V\u001a\u00020W2\u0006\u00104\u001a\u000205H\u0002J\u0018\u0010X\u001a\u00020\u001d2\u0006\u0010V\u001a\u00020W2\u0006\u00104\u001a\u000205H\u0002J\u0018\u0010Y\u001a\u00020\u001d2\u0006\u0010V\u001a\u00020W2\u0006\u00104\u001a\u000205H\u0002JJ\u0010Z\u001a\u00020D2\u0006\u00104\u001a\u0002052\u0006\u0010*\u001a\u00020+2\u0006\u0010[\u001a\u00020+2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010\\\u001a\u00020I2\u0006\u0010]\u001a\u00020K2\b\u0010@\u001a\u0004\u0018\u00010AH\u0002JH\u0010C\u001a\u00020D2\u0006\u0010E\u001a\u00020#2\u0006\u0010T\u001a\u00020\u001d2\u0006\u0010*\u001a\u00020+2\u0006\u0010[\u001a\u00020+2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010\\\u001a\u00020I2\u0006\u0010]\u001a\u00020KH\u0002JJ\u0010^\u001a\u00020_2\u0006\u00104\u001a\u0002052\u0006\u0010*\u001a\u00020`2\u0006\u0010[\u001a\u00020`2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010\\\u001a\u00020I2\u0006\u0010]\u001a\u00020K2\b\u0010@\u001a\u0004\u0018\u00010AH\u0007Jp\u0010a\u001a\u00020%2\u0006\u0010E\u001a\u00020#2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010\\\u001a\u00020I2\u0006\u0010]\u001a\u00020K2\u0006\u0010b\u001a\u00020I2\u0006\u0010c\u001a\u00020\u00052\u0006\u0010L\u001a\u00020\u001f2\u0006\u0010M\u001a\u00020\u00052\u0006\u0010N\u001a\u00020\u00052\u0006\u0010O\u001a\u0002002\u0006\u0010P\u001a\u00020\u00052\u0006\u0010T\u001a\u00020\u001dH\u0007JT\u0010d\u001a\u00020e2\u0006\u00104\u001a\u0002052\u0006\u0010*\u001a\u00020+2\u0006\u0010[\u001a\u00020+2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010\\\u001a\u00020I2\u0006\u0010]\u001a\u00020K2\b\u0010@\u001a\u0004\u0018\u00010A2\b\u0010f\u001a\u0004\u0018\u00010gH\u0007J0\u0010h\u001a\u00020g2\u0006\u0010i\u001a\u00020_2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010\\\u001a\u00020I2\u0006\u0010]\u001a\u00020KH\u0007J0\u0010j\u001a\u00020I2\u0006\u0010k\u001a\u00020D2\u0006\u0010[\u001a\u00020`2\u0006\u0010\\\u001a\u00020I2\u0006\u0010l\u001a\u00020K2\u0006\u0010c\u001a\u00020\u0005H\u0002J\u0018\u0010m\u001a\u00020\u00052\u0006\u0010k\u001a\u00020D2\u0006\u0010c\u001a\u00020\u0005H\u0002J0\u0010n\u001a\u00020I2\u0006\u0010k\u001a\u00020D2\u0006\u0010E\u001a\u00020o2\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020K2\u0006\u0010p\u001a\u00020\u0005H\u0002J(\u0010q\u001a\u00020I2\u0006\u0010k\u001a\u00020D2\u0006\u0010\\\u001a\u00020I2\u0006\u0010]\u001a\u00020K2\u0006\u0010p\u001a\u00020\u0005H\u0002J@\u0010r\u001a\u00020\u00052\u0006\u0010k\u001a\u00020D2\u0006\u0010E\u001a\u00020o2\u0006\u0010s\u001a\u00020I2\u0006\u0010p\u001a\u00020\u00052\u0006\u0010t\u001a\u00020\u00052\u0006\u0010u\u001a\u00020I2\u0006\u0010v\u001a\u00020wH\u0002J:\u0010x\u001a\u00020y2\u0006\u00104\u001a\u0002052\u0006\u0010*\u001a\u00020+2\u0006\u0010[\u001a\u00020+2\u0006\u0010H\u001a\u00020I2\u0006\u0010\\\u001a\u00020I2\b\u0010@\u001a\u0004\u0018\u00010AH\u0007J\u001a\u0010z\u001a\u0004\u0018\u00010G2\u0006\u0010E\u001a\u00020#2\u0006\u0010T\u001a\u00020\u001dH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u001aX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001d0\u001cX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u001e\u001a\u00020\u001fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010 \u001a\u00020\u001fX\u0082T¢\u0006\u0002\n\u0000R\u001a\u0010!\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020#0\"X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006}"}, d2 = {"Lcom/facebook/react/views/text/TextLayoutManager;", "", "<init>", "()V", "AS_KEY_HASH", "", "AS_KEY_STRING", "AS_KEY_FRAGMENTS", "AS_KEY_CACHE_ID", "AS_KEY_BASE_ATTRIBUTES", "FR_KEY_STRING", "FR_KEY_REACT_TAG", "FR_KEY_IS_ATTACHMENT", "FR_KEY_WIDTH", "FR_KEY_HEIGHT", "FR_KEY_TEXT_ATTRIBUTES", "PA_KEY_MAX_NUMBER_OF_LINES", "PA_KEY_ELLIPSIZE_MODE", "PA_KEY_TEXT_BREAK_STRATEGY", "PA_KEY_ADJUST_FONT_SIZE_TO_FIT", "PA_KEY_INCLUDE_FONT_PADDING", "PA_KEY_HYPHENATION_FREQUENCY", "PA_KEY_MINIMUM_FONT_SIZE", "PA_KEY_MAXIMUM_FONT_SIZE", "PA_KEY_TEXT_ALIGN_VERTICAL", "TAG", "", "textPaintInstance", "Ljava/lang/ThreadLocal;", "Landroid/text/TextPaint;", "DEFAULT_INCLUDE_FONT_PADDING", "", "DEFAULT_ADJUST_FONT_SIZE_TO_FIT", "tagToSpannableCache", "Ljava/util/concurrent/ConcurrentHashMap;", "Landroid/text/Spannable;", "setCachedSpannableForTag", "", "reactTag", "sp", "deleteCachedSpannableForTag", "isRTL", "attributedString", "Lcom/facebook/react/common/mapbuffer/MapBuffer;", "getTextAlignmentAttr", "getTextJustificationMode", "alignmentAttr", "getTextAlignment", "Landroid/text/Layout$Alignment;", "spanned", "getTextGravity", "buildSpannableFromFragments", "context", "Landroid/content/Context;", "fragments", "sb", "Landroid/text/SpannableStringBuilder;", "ops", "", "Lcom/facebook/react/views/text/internal/span/SetSpanOperation;", "buildSpannableFromFragmentsOptimized", "addLeadingMarginForTextEffects", "spannable", "getOrCreateSpannableForText", "reactTextViewManagerCallback", "Lcom/facebook/react/views/text/ReactTextViewManagerCallback;", "createSpannableFromAttributedString", "createLayout", "Landroid/text/Layout;", "text", "boring", "Landroid/text/BoringLayout$Metrics;", "width", "", "widthYogaMeasureMode", "Lcom/facebook/yoga/YogaMeasureMode;", ViewProps.INCLUDE_FONT_PADDING, ViewProps.TEXT_BREAK_STRATEGY, "hyphenationFrequency", "alignment", "justificationMode", ViewProps.ELLIPSIZE_MODE, "Landroid/text/TextUtils$TruncateAt;", "maxNumberOfLines", "paint", "updateTextPaint", "baseTextAttributes", "Lcom/facebook/react/views/text/TextAttributeProps;", "scratchPaintWithAttributes", "newPaintWithAttributes", "createLayoutForMeasurement", "paragraphAttributes", "height", "heightYogaMeasureMode", "createPreparedLayout", "Lcom/facebook/react/views/text/PreparedLayout;", "Lcom/facebook/react/common/mapbuffer/ReadableMapBuffer;", "adjustSpannableFontToFit", "minimumFontSizeAttr", "maximumNumberOfLines", "measureText", "", "attachmentsPositions", "", "measurePreparedLayout", "preparedLayout", "getVerticalOffset", "layout", "heightMeasureMode", "calculateLineCount", "calculateWidth", "Landroid/text/Spanned;", "calculatedLineCount", "calculateHeight", "nextAttachmentMetrics", "calculatedWidth", "i", "verticalOffset", "metrics", "Lcom/facebook/react/views/text/TextLayoutManager$AttachmentMetrics;", "measureLines", "Lcom/facebook/react/bridge/WritableArray;", "isBoring", "FragmentAttributes", "AttachmentMetrics", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TextLayoutManager {
    public static final int AS_KEY_BASE_ATTRIBUTES = 4;
    public static final int AS_KEY_CACHE_ID = 3;
    public static final int AS_KEY_FRAGMENTS = 2;
    public static final int AS_KEY_HASH = 0;
    public static final int AS_KEY_STRING = 1;
    private static final boolean DEFAULT_ADJUST_FONT_SIZE_TO_FIT = false;
    private static final boolean DEFAULT_INCLUDE_FONT_PADDING = true;
    public static final int FR_KEY_HEIGHT = 4;
    public static final int FR_KEY_IS_ATTACHMENT = 2;
    public static final int FR_KEY_REACT_TAG = 1;
    public static final int FR_KEY_STRING = 0;
    public static final int FR_KEY_TEXT_ATTRIBUTES = 5;
    public static final int FR_KEY_WIDTH = 3;
    @NotNull
    public static final TextLayoutManager INSTANCE = new TextLayoutManager();
    public static final int PA_KEY_ADJUST_FONT_SIZE_TO_FIT = 3;
    public static final int PA_KEY_ELLIPSIZE_MODE = 1;
    public static final int PA_KEY_HYPHENATION_FREQUENCY = 5;
    public static final int PA_KEY_INCLUDE_FONT_PADDING = 4;
    public static final int PA_KEY_MAXIMUM_FONT_SIZE = 7;
    public static final int PA_KEY_MAX_NUMBER_OF_LINES = 0;
    public static final int PA_KEY_MINIMUM_FONT_SIZE = 6;
    public static final int PA_KEY_TEXT_ALIGN_VERTICAL = 8;
    public static final int PA_KEY_TEXT_BREAK_STRATEGY = 2;
    @NotNull
    private static final String TAG;
    @NotNull
    private static final ConcurrentHashMap<Integer, Spannable> tagToSpannableCache;
    @NotNull
    private static final ThreadLocal<TextPaint> textPaintInstance;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0007\n\u0002\b\u000e\b\u0002\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003R\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0010\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\r\"\u0004\b\u0012\u0010\u000fR\u001a\u0010\u0013\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\r\"\u0004\b\u0015\u0010\u000fR\u001a\u0010\u0016\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\r\"\u0004\b\u0018\u0010\u000f¨\u0006\u0019"}, d2 = {"Lcom/facebook/react/views/text/TextLayoutManager$AttachmentMetrics;", "", "<init>", "()V", "wasFound", "", "getWasFound", "()Z", "setWasFound", "(Z)V", ViewProps.TOP, "", "getTop", "()F", "setTop", "(F)V", ViewProps.LEFT, "getLeft", "setLeft", "width", "getWidth", "setWidth", "height", "getHeight", "setHeight", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AttachmentMetrics {
        private float height;
        private float left;
        private float top;
        private boolean wasFound;
        private float width;

        public final float getHeight() {
            return this.height;
        }

        public final float getLeft() {
            return this.left;
        }

        public final float getTop() {
            return this.top;
        }

        public final boolean getWasFound() {
            return this.wasFound;
        }

        public final float getWidth() {
            return this.width;
        }

        public final void setHeight(float f10) {
            this.height = f10;
        }

        public final void setLeft(float f10) {
            this.left = f10;
        }

        public final void setTop(float f10) {
            this.top = f10;
        }

        public final void setWasFound(boolean z10) {
            this.wasFound = z10;
        }

        public final void setWidth(float f10) {
            this.width = f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0006\n\u0002\b\r\b\u0002\u0018\u00002\u00020\u0001B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b\f\u0010\rR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\u0013R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\u000b\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0015¨\u0006\u0017"}, d2 = {"Lcom/facebook/react/views/text/TextLayoutManager$FragmentAttributes;", "", "props", "Lcom/facebook/react/views/text/TextAttributeProps;", "length", "", "reactTag", "isAttachment", "", "width", "", "height", "<init>", "(Lcom/facebook/react/views/text/TextAttributeProps;IIZDD)V", "getProps", "()Lcom/facebook/react/views/text/TextAttributeProps;", "getLength", "()I", "getReactTag", "()Z", "getWidth", "()D", "getHeight", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class FragmentAttributes {
        private final double height;
        private final boolean isAttachment;
        private final int length;
        @NotNull
        private final TextAttributeProps props;
        private final int reactTag;
        private final double width;

        public FragmentAttributes(@NotNull TextAttributeProps props, int i10, int i11, boolean z10, double d10, double d11) {
            Intrinsics.checkNotNullParameter(props, "props");
            this.props = props;
            this.length = i10;
            this.reactTag = i11;
            this.isAttachment = z10;
            this.width = d10;
            this.height = d11;
        }

        public final double getHeight() {
            return this.height;
        }

        public final int getLength() {
            return this.length;
        }

        @NotNull
        public final TextAttributeProps getProps() {
            return this.props;
        }

        public final int getReactTag() {
            return this.reactTag;
        }

        public final double getWidth() {
            return this.width;
        }

        public final boolean isAttachment() {
            return this.isAttachment;
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[Layout.Alignment.values().length];
            try {
                iArr[Layout.Alignment.ALIGN_NORMAL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Layout.Alignment.ALIGN_OPPOSITE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Layout.Alignment.ALIGN_CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[YogaMeasureMode.values().length];
            try {
                iArr2[YogaMeasureMode.EXACTLY.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[YogaMeasureMode.AT_MOST.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    static {
        String simpleName = TextLayoutManager.class.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        TAG = simpleName;
        textPaintInstance = new ThreadLocal<TextPaint>() { // from class: com.facebook.react.views.text.TextLayoutManager$textPaintInstance$1
            /* JADX INFO: Access modifiers changed from: protected */
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // java.lang.ThreadLocal
            public TextPaint initialValue() {
                return new TextPaint(1);
            }
        };
        tagToSpannableCache = new ConcurrentHashMap<>();
    }

    private TextLayoutManager() {
    }

    private final void addLeadingMarginForTextEffects(Spannable spannable) {
        float f10;
        StrokeStyleSpan strokeSpan = StrokeStyleSpan.Companion.getStrokeSpan(spannable);
        ShadowStyleSpan shadowSpan = ShadowStyleSpan.Companion.getShadowSpan(spannable);
        float f11 = 0.0f;
        if (strokeSpan != null) {
            f10 = strokeSpan.getLeftOffset();
        } else {
            f10 = 0.0f;
        }
        if (shadowSpan != null) {
            f11 = shadowSpan.getLeftOffset();
        }
        int max = (int) Math.max(f10, f11);
        if (max > 0) {
            spannable.setSpan(new LeadingMarginSpan.Standard(max), 0, spannable.length(), 18);
        }
    }

    public static final void adjustSpannableFontToFit(@NotNull Spannable spannable, float f10, @NotNull YogaMeasureMode widthYogaMeasureMode, float f11, @NotNull YogaMeasureMode heightYogaMeasureMode, float f12, int i10, boolean z10, int i11, int i12, @NotNull Layout.Alignment alignment, int i13, @NotNull TextPaint textPaint) {
        float f13;
        Spannable text = spannable;
        TextPaint paint = textPaint;
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(widthYogaMeasureMode, "widthYogaMeasureMode");
        Intrinsics.checkNotNullParameter(heightYogaMeasureMode, "heightYogaMeasureMode");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        Intrinsics.checkNotNullParameter(paint, "paint");
        TextLayoutManager textLayoutManager = INSTANCE;
        BoringLayout.Metrics isBoring = textLayoutManager.isBoring(text, paint);
        Layout createLayout = textLayoutManager.createLayout(text, isBoring, f10, widthYogaMeasureMode, z10, i11, i12, alignment, i13, null, -1, paint);
        if (Float.isNaN(f12)) {
            f13 = PixelUtil.INSTANCE.dpToPx(4);
        } else {
            f13 = f12;
        }
        int i14 = (int) f13;
        int i15 = 0;
        Class<ReactAbsoluteSizeSpan> cls = ReactAbsoluteSizeSpan.class;
        Iterator it = ArrayIteratorKt.iterator((ReactAbsoluteSizeSpan[]) text.getSpans(0, text.length(), cls));
        int i16 = i14;
        while (it.hasNext()) {
            i16 = Math.max(i16, ((ReactAbsoluteSizeSpan) it.next()).getSize());
        }
        int i17 = i16;
        while (i17 > i14) {
            if ((i10 != -1 && i10 != 0 && createLayout.getLineCount() > i10) || ((heightYogaMeasureMode != YogaMeasureMode.UNDEFINED && createLayout.getHeight() > f11) || (text.length() == 1 && createLayout.getLineWidth(i15) > f10))) {
                int max = i17 - Math.max(1, (int) PixelUtil.INSTANCE.dpToPx(1));
                float f14 = max / i16;
                paint.setTextSize(Math.max((int) (paint.getTextSize() * f14), i14));
                Iterator it2 = ArrayIteratorKt.iterator((ReactAbsoluteSizeSpan[]) text.getSpans(i15, text.length(), cls));
                while (it2.hasNext()) {
                    ReactAbsoluteSizeSpan reactAbsoluteSizeSpan = (ReactAbsoluteSizeSpan) it2.next();
                    text.setSpan(new ReactAbsoluteSizeSpan(Math.max((int) (reactAbsoluteSizeSpan.getSize() * f14), i14)), text.getSpanStart(reactAbsoluteSizeSpan), text.getSpanEnd(reactAbsoluteSizeSpan), text.getSpanFlags(reactAbsoluteSizeSpan));
                    text.removeSpan(reactAbsoluteSizeSpan);
                }
                if (isBoring != null) {
                    isBoring = INSTANCE.isBoring(text, paint);
                }
                createLayout = INSTANCE.createLayout(text, isBoring, f10, widthYogaMeasureMode, z10, i11, i12, alignment, i13, null, -1, paint);
                text = spannable;
                paint = textPaint;
                i17 = max;
                i16 = i16;
                cls = cls;
                i15 = 0;
            } else {
                return;
            }
        }
    }

    private final void buildSpannableFromFragments(Context context, MapBuffer mapBuffer, SpannableStringBuilder spannableStringBuilder, List<SetSpanOperation> list) {
        int i10;
        float f10;
        int i11;
        float gradientAngle;
        int count = mapBuffer.getCount();
        int i12 = 0;
        int i13 = 0;
        while (i13 < count) {
            MapBuffer mapBuffer2 = mapBuffer.getMapBuffer(i13);
            int length = spannableStringBuilder.length();
            TextAttributeProps fromMapBuffer = TextAttributeProps.fromMapBuffer(mapBuffer2.getMapBuffer(5));
            Intrinsics.checkNotNullExpressionValue(fromMapBuffer, "fromMapBuffer(...)");
            spannableStringBuilder.append((CharSequence) TextTransform.Companion.apply(mapBuffer2.getString(i12), fromMapBuffer.mTextTransform));
            int length2 = spannableStringBuilder.length();
            if (mapBuffer2.contains(1)) {
                i10 = mapBuffer2.getInt(1);
            } else {
                i10 = -1;
            }
            if (mapBuffer2.contains(2) && mapBuffer2.getBoolean(2)) {
                list.add(new SetSpanOperation(spannableStringBuilder.length() - 1, spannableStringBuilder.length(), new TextInlineViewPlaceholderSpan(i10, (int) PixelUtil.toPixelFromSP(mapBuffer2.getDouble(3)), (int) PixelUtil.toPixelFromSP(mapBuffer2.getDouble(4)))));
            } else if (length2 >= length) {
                ReactAccessibilityDelegate.Role role = fromMapBuffer.mRole;
                if (role == null ? fromMapBuffer.mAccessibilityRole == ReactAccessibilityDelegate.AccessibilityRole.LINK : role == ReactAccessibilityDelegate.Role.LINK) {
                    list.add(new SetSpanOperation(length, length2, new ReactClickableSpan(i10)));
                }
                if (fromMapBuffer.mIsColorSet) {
                    list.add(new SetSpanOperation(length, length2, new ReactForegroundColorSpan(fromMapBuffer.mColor)));
                }
                if (fromMapBuffer.getGradientColors() != null) {
                    int[] gradientColors = fromMapBuffer.getGradientColors();
                    Intrinsics.checkNotNull(gradientColors);
                    if (gradientColors.length >= 2) {
                        int effectiveFontSize = fromMapBuffer.getEffectiveFontSize();
                        if (Float.isNaN(fromMapBuffer.getGradientAngle())) {
                            gradientAngle = 0.0f;
                        } else {
                            gradientAngle = fromMapBuffer.getGradientAngle();
                        }
                        float gradientWidth = fromMapBuffer.getGradientWidth();
                        String gradientMode = fromMapBuffer.getGradientMode();
                        int[] gradientColors2 = fromMapBuffer.getGradientColors();
                        Intrinsics.checkNotNull(gradientColors2);
                        list.add(new SetSpanOperation(length, length2, new LinearGradientSpan(length * effectiveFontSize, gradientColors2, gradientAngle, gradientWidth, gradientMode)));
                    }
                }
                if (fromMapBuffer.mIsBackgroundColorSet) {
                    list.add(new SetSpanOperation(length, length2, new ReactBackgroundColorSpan(fromMapBuffer.mBackgroundColor)));
                }
                if (!Float.isNaN(fromMapBuffer.getOpacity())) {
                    list.add(new SetSpanOperation(length, length2, new ReactOpacitySpan(fromMapBuffer.getOpacity())));
                }
                if (!Float.isNaN(fromMapBuffer.getLetterSpacing())) {
                    list.add(new SetSpanOperation(length, length2, new CustomLetterSpacingSpan(fromMapBuffer.getLetterSpacing())));
                }
                list.add(new SetSpanOperation(length, length2, new ReactAbsoluteSizeSpan(fromMapBuffer.mFontSize)));
                if (fromMapBuffer.mFontStyle == -1 && fromMapBuffer.mFontWeight == -1 && fromMapBuffer.mFontFamily == null) {
                    i11 = count;
                    f10 = 0.0f;
                } else {
                    int i14 = fromMapBuffer.mFontStyle;
                    int i15 = fromMapBuffer.mFontWeight;
                    String str = fromMapBuffer.mFontFeatureSettings;
                    String str2 = fromMapBuffer.mFontFamily;
                    f10 = 0.0f;
                    AssetManager assets = context.getAssets();
                    i11 = count;
                    Intrinsics.checkNotNullExpressionValue(assets, "getAssets(...)");
                    list.add(new SetSpanOperation(length, length2, new CustomStyleSpan(i14, i15, str, str2, assets)));
                }
                if (fromMapBuffer.mIsUnderlineTextDecorationSet) {
                    list.add(new SetSpanOperation(length, length2, new ReactUnderlineSpan()));
                }
                if (fromMapBuffer.mIsLineThroughTextDecorationSet) {
                    list.add(new SetSpanOperation(length, length2, new ReactStrikethroughSpan()));
                }
                if ((fromMapBuffer.mTextShadowOffsetDx != f10 || fromMapBuffer.mTextShadowOffsetDy != f10 || fromMapBuffer.mTextShadowRadius != f10) && Color.alpha(fromMapBuffer.mTextShadowColor) != 0) {
                    list.add(new SetSpanOperation(length, length2, new ShadowStyleSpan(fromMapBuffer.mTextShadowOffsetDx, fromMapBuffer.mTextShadowOffsetDy, fromMapBuffer.mTextShadowRadius, fromMapBuffer.mTextShadowColor)));
                }
                if (!Float.isNaN(fromMapBuffer.getTextStrokeWidth()) && fromMapBuffer.getTextStrokeWidth() > f10 && fromMapBuffer.isTextStrokeColorSet()) {
                    list.add(new SetSpanOperation(length, length2, new StrokeStyleSpan(fromMapBuffer.getTextStrokeWidth(), fromMapBuffer.getTextStrokeColor())));
                }
                if (!Float.isNaN(fromMapBuffer.getEffectiveLineHeight())) {
                    list.add(new SetSpanOperation(length, length2, new CustomLineHeightSpan(fromMapBuffer.getEffectiveLineHeight())));
                }
                list.add(new SetSpanOperation(length, length2, new ReactTagSpan(i10)));
                i13++;
                count = i11;
                i12 = 0;
            }
            i11 = count;
            i13++;
            count = i11;
            i12 = 0;
        }
    }

    private final Spannable buildSpannableFromFragmentsOptimized(Context context, MapBuffer mapBuffer) {
        int i10;
        float gradientAngle;
        boolean z10;
        double d10;
        StringBuilder sb2 = new StringBuilder();
        ArrayList arrayList = new ArrayList(mapBuffer.getCount());
        int count = mapBuffer.getCount();
        int i11 = 0;
        int i12 = 0;
        while (true) {
            int i13 = -1;
            if (i12 >= count) {
                break;
            }
            MapBuffer mapBuffer2 = mapBuffer.getMapBuffer(i12);
            TextAttributeProps fromMapBuffer = TextAttributeProps.fromMapBuffer(mapBuffer2.getMapBuffer(5));
            Intrinsics.checkNotNullExpressionValue(fromMapBuffer, "fromMapBuffer(...)");
            String apply = TextTransform.Companion.apply(mapBuffer2.getString(0), fromMapBuffer.getTextTransform());
            sb2.append(apply);
            int length = apply.length();
            if (mapBuffer2.contains(1)) {
                i13 = mapBuffer2.getInt(1);
            }
            int i14 = i13;
            if (mapBuffer2.contains(2) && mapBuffer2.getBoolean(2)) {
                z10 = true;
            } else {
                z10 = false;
            }
            double d11 = Double.NaN;
            if (mapBuffer2.contains(3)) {
                d10 = mapBuffer2.getDouble(3);
            } else {
                d10 = Double.NaN;
            }
            if (mapBuffer2.contains(4)) {
                d11 = mapBuffer2.getDouble(4);
            }
            arrayList.add(new FragmentAttributes(fromMapBuffer, length, i14, z10, d10, d11));
            i12++;
        }
        SpannableString spannableString = new SpannableString(sb2);
        Iterator it = arrayList.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "next(...)");
            FragmentAttributes fragmentAttributes = (FragmentAttributes) next;
            int length2 = fragmentAttributes.getLength() + i11;
            if (i11 == 0) {
                i10 = 18;
            } else {
                i10 = 34;
            }
            if (fragmentAttributes.isAttachment()) {
                spannableString.setSpan(new TextInlineViewPlaceholderSpan(fragmentAttributes.getReactTag(), (int) PixelUtil.toPixelFromSP(fragmentAttributes.getWidth()), (int) PixelUtil.toPixelFromSP(fragmentAttributes.getHeight())), i11, length2, i10);
            } else {
                if (fragmentAttributes.getProps().getRole() == null ? fragmentAttributes.getProps().getAccessibilityRole() == ReactAccessibilityDelegate.AccessibilityRole.LINK : fragmentAttributes.getProps().getRole() == ReactAccessibilityDelegate.Role.LINK) {
                    spannableString.setSpan(new ReactClickableSpan(fragmentAttributes.getReactTag()), i11, length2, i10);
                }
                if (fragmentAttributes.getProps().isColorSet()) {
                    spannableString.setSpan(new ReactForegroundColorSpan(fragmentAttributes.getProps().getColor()), i11, length2, i10);
                }
                if (fragmentAttributes.getProps().getGradientColors() != null) {
                    int[] gradientColors = fragmentAttributes.getProps().getGradientColors();
                    Intrinsics.checkNotNull(gradientColors);
                    if (gradientColors.length >= 2) {
                        int effectiveFontSize = fragmentAttributes.getProps().getEffectiveFontSize();
                        if (Float.isNaN(fragmentAttributes.getProps().getGradientAngle())) {
                            gradientAngle = 0.0f;
                        } else {
                            gradientAngle = fragmentAttributes.getProps().getGradientAngle();
                        }
                        float gradientWidth = fragmentAttributes.getProps().getGradientWidth();
                        String gradientMode = fragmentAttributes.getProps().getGradientMode();
                        int[] gradientColors2 = fragmentAttributes.getProps().getGradientColors();
                        Intrinsics.checkNotNull(gradientColors2);
                        spannableString.setSpan(new LinearGradientSpan(i11 * effectiveFontSize, gradientColors2, gradientAngle, gradientWidth, gradientMode), i11, length2, i10);
                    }
                }
                if (fragmentAttributes.getProps().isBackgroundColorSet()) {
                    spannableString.setSpan(new ReactBackgroundColorSpan(fragmentAttributes.getProps().getBackgroundColor()), i11, length2, i10);
                }
                if (!Float.isNaN(fragmentAttributes.getProps().getOpacity())) {
                    spannableString.setSpan(new ReactOpacitySpan(fragmentAttributes.getProps().getOpacity()), i11, length2, i10);
                }
                if (!Float.isNaN(fragmentAttributes.getProps().getLetterSpacing())) {
                    spannableString.setSpan(new CustomLetterSpacingSpan(fragmentAttributes.getProps().getLetterSpacing()), i11, length2, i10);
                }
                spannableString.setSpan(new ReactAbsoluteSizeSpan(fragmentAttributes.getProps().mFontSize), i11, length2, i10);
                if (fragmentAttributes.getProps().getFontStyle() != -1 || fragmentAttributes.getProps().getFontWeight() != -1 || fragmentAttributes.getProps().getFontFamily() != null) {
                    int fontStyle = fragmentAttributes.getProps().getFontStyle();
                    int fontWeight = fragmentAttributes.getProps().getFontWeight();
                    String fontFeatureSettings = fragmentAttributes.getProps().getFontFeatureSettings();
                    String fontFamily = fragmentAttributes.getProps().getFontFamily();
                    AssetManager assets = context.getAssets();
                    Intrinsics.checkNotNullExpressionValue(assets, "getAssets(...)");
                    spannableString.setSpan(new CustomStyleSpan(fontStyle, fontWeight, fontFeatureSettings, fontFamily, assets), i11, length2, i10);
                }
                if (fragmentAttributes.getProps().isUnderlineTextDecorationSet()) {
                    spannableString.setSpan(new ReactUnderlineSpan(), i11, length2, i10);
                }
                if (fragmentAttributes.getProps().isLineThroughTextDecorationSet()) {
                    spannableString.setSpan(new ReactStrikethroughSpan(), i11, length2, i10);
                }
                if ((fragmentAttributes.getProps().getTextShadowOffsetDx() != 0.0f || fragmentAttributes.getProps().getTextShadowOffsetDy() != 0.0f || fragmentAttributes.getProps().getTextShadowRadius() != 0.0f) && Color.alpha(fragmentAttributes.getProps().getTextShadowColor()) != 0) {
                    spannableString.setSpan(new ShadowStyleSpan(fragmentAttributes.getProps().getTextShadowOffsetDx(), fragmentAttributes.getProps().getTextShadowOffsetDy(), fragmentAttributes.getProps().getTextShadowRadius(), fragmentAttributes.getProps().getTextShadowColor()), i11, length2, i10);
                }
                if (!Float.isNaN(fragmentAttributes.getProps().getTextStrokeWidth()) && fragmentAttributes.getProps().getTextStrokeWidth() > 0.0f && fragmentAttributes.getProps().isTextStrokeColorSet()) {
                    spannableString.setSpan(new StrokeStyleSpan(fragmentAttributes.getProps().getTextStrokeWidth(), fragmentAttributes.getProps().getTextStrokeColor()), i11, length2, i10);
                }
                if (!Float.isNaN(fragmentAttributes.getProps().getEffectiveLineHeight())) {
                    spannableString.setSpan(new CustomLineHeightSpan(fragmentAttributes.getProps().getEffectiveLineHeight()), i11, length2, i10);
                }
                spannableString.setSpan(new ReactTagSpan(fragmentAttributes.getReactTag()), i11, length2, i10);
            }
            i11 = length2;
        }
        addLeadingMarginForTextEffects(spannableString);
        return spannableString;
    }

    private final float calculateHeight(Layout layout, float f10, YogaMeasureMode yogaMeasureMode, int i10) {
        if (yogaMeasureMode != YogaMeasureMode.EXACTLY) {
            float lineBottom = layout.getLineBottom(i10 - 1);
            if (yogaMeasureMode != YogaMeasureMode.AT_MOST || lineBottom <= f10) {
                return lineBottom;
            }
        }
        return f10;
    }

    private final int calculateLineCount(Layout layout, int i10) {
        if (i10 != -1 && i10 != 0) {
            return Math.min(i10, layout.getLineCount());
        }
        return layout.getLineCount();
    }

    private final float calculateWidth(Layout layout, Spanned spanned, float f10, YogaMeasureMode yogaMeasureMode, int i10) {
        if (yogaMeasureMode == YogaMeasureMode.EXACTLY) {
            return f10;
        }
        return layout.getWidth();
    }

    private final Layout createLayout(Spannable spannable, BoringLayout.Metrics metrics, float f10, YogaMeasureMode yogaMeasureMode, boolean z10, int i10, int i11, Layout.Alignment alignment, int i12, TextUtils.TruncateAt truncateAt, int i13, TextPaint textPaint) {
        if (metrics != null && (yogaMeasureMode == YogaMeasureMode.UNDEFINED || metrics.width <= ((float) Math.floor(f10)))) {
            BoringLayout make = BoringLayout.make(spannable, textPaint, yogaMeasureMode == YogaMeasureMode.EXACTLY ? (int) Math.floor(f10) : metrics.width, alignment, 1.0f, 0.0f, metrics, z10);
            Intrinsics.checkNotNullExpressionValue(make, "make(...)");
            return make;
        }
        int ceil = (int) Math.ceil(Layout.getDesiredWidth(spannable, textPaint));
        int i14 = WhenMappings.$EnumSwitchMapping$1[yogaMeasureMode.ordinal()];
        if (i14 == 1) {
            ceil = (int) Math.floor(f10);
        } else if (i14 == 2) {
            ceil = Math.min(ceil, (int) Math.floor(f10));
        }
        StaticLayout.Builder hyphenationFrequency = StaticLayout.Builder.obtain(spannable, 0, spannable.length(), textPaint, ceil).setAlignment(alignment).setLineSpacing(0.0f, 1.0f).setIncludePad(z10).setBreakStrategy(i10).setHyphenationFrequency(i11);
        Intrinsics.checkNotNullExpressionValue(hyphenationFrequency, "setHyphenationFrequency(...)");
        if (i13 != -1 && i13 != 0) {
            hyphenationFrequency.setEllipsize(truncateAt).setMaxLines(i13);
        }
        int i15 = Build.VERSION.SDK_INT;
        if (i15 >= 26) {
            hyphenationFrequency.setJustificationMode(i12);
        }
        if (i15 >= 28) {
            hyphenationFrequency.setUseLineSpacingFromFallbacks(true);
        }
        StaticLayout build = hyphenationFrequency.build();
        Intrinsics.checkNotNullExpressionValue(build, "build(...)");
        return build;
    }

    private final Layout createLayoutForMeasurement(Context context, MapBuffer mapBuffer, MapBuffer mapBuffer2, float f10, YogaMeasureMode yogaMeasureMode, float f11, YogaMeasureMode yogaMeasureMode2, ReactTextViewManagerCallback reactTextViewManagerCallback) {
        TextPaint scratchPaintWithAttributes;
        Spannable orCreateSpannableForText = getOrCreateSpannableForText(context, mapBuffer, reactTextViewManagerCallback);
        if (mapBuffer.contains(3)) {
            scratchPaintWithAttributes = ((ReactTextPaintHolderSpan[]) orCreateSpannableForText.getSpans(0, 0, ReactTextPaintHolderSpan.class))[0].getTextPaint();
        } else {
            TextAttributeProps fromMapBuffer = TextAttributeProps.fromMapBuffer(mapBuffer.getMapBuffer(4));
            Intrinsics.checkNotNullExpressionValue(fromMapBuffer, "fromMapBuffer(...)");
            scratchPaintWithAttributes = scratchPaintWithAttributes(fromMapBuffer, context);
        }
        return createLayout(orCreateSpannableForText, scratchPaintWithAttributes, mapBuffer, mapBuffer2, f10, yogaMeasureMode, f11, yogaMeasureMode2);
    }

    @NotNull
    public static final PreparedLayout createPreparedLayout(@NotNull Context context, @NotNull ReadableMapBuffer attributedString, @NotNull ReadableMapBuffer paragraphAttributes, float f10, @NotNull YogaMeasureMode widthYogaMeasureMode, float f11, @NotNull YogaMeasureMode heightYogaMeasureMode, ReactTextViewManagerCallback reactTextViewManagerCallback) {
        int i10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attributedString, "attributedString");
        Intrinsics.checkNotNullParameter(paragraphAttributes, "paragraphAttributes");
        Intrinsics.checkNotNullParameter(widthYogaMeasureMode, "widthYogaMeasureMode");
        Intrinsics.checkNotNullParameter(heightYogaMeasureMode, "heightYogaMeasureMode");
        TextLayoutManager textLayoutManager = INSTANCE;
        Spannable orCreateSpannableForText = textLayoutManager.getOrCreateSpannableForText(context, attributedString, reactTextViewManagerCallback);
        TextAttributeProps fromMapBuffer = TextAttributeProps.fromMapBuffer(attributedString.getMapBuffer(4));
        Intrinsics.checkNotNullExpressionValue(fromMapBuffer, "fromMapBuffer(...)");
        Layout createLayout = textLayoutManager.createLayout(orCreateSpannableForText, textLayoutManager.newPaintWithAttributes(fromMapBuffer, context), attributedString, paragraphAttributes, f10, widthYogaMeasureMode, f11, heightYogaMeasureMode);
        if (paragraphAttributes.contains(0)) {
            i10 = paragraphAttributes.getInt(0);
        } else {
            i10 = -1;
        }
        int i11 = i10;
        return new PreparedLayout(createLayout, i11, textLayoutManager.getVerticalOffset(createLayout, paragraphAttributes, f11, heightYogaMeasureMode, i11));
    }

    private final Spannable createSpannableFromAttributedString(Context context, MapBuffer mapBuffer, ReactTextViewManagerCallback reactTextViewManagerCallback) {
        if (ReactNativeFeatureFlags.enableAndroidTextMeasurementOptimizations()) {
            Spannable buildSpannableFromFragmentsOptimized = buildSpannableFromFragmentsOptimized(context, mapBuffer.getMapBuffer(2));
            if (reactTextViewManagerCallback != null) {
                reactTextViewManagerCallback.onPostProcessSpannable(buildSpannableFromFragmentsOptimized);
            }
            return buildSpannableFromFragmentsOptimized;
        }
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
        List<SetSpanOperation> arrayList = new ArrayList<>();
        buildSpannableFromFragments(context, mapBuffer.getMapBuffer(2), spannableStringBuilder, arrayList);
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            arrayList.get((arrayList.size() - i10) - 1).execute(spannableStringBuilder, i10);
        }
        addLeadingMarginForTextEffects(spannableStringBuilder);
        if (reactTextViewManagerCallback != null) {
            reactTextViewManagerCallback.onPostProcessSpannable(spannableStringBuilder);
        }
        return spannableStringBuilder;
    }

    private final Layout.Alignment getTextAlignment(MapBuffer mapBuffer, Spannable spannable, String str) {
        Layout.Alignment alignment;
        boolean z10 = false;
        if (isRTL(mapBuffer) != TextDirectionHeuristics.FIRSTSTRONG_LTR.isRtl(spannable, 0, spannable.length())) {
            z10 = true;
        }
        if (z10) {
            alignment = Layout.Alignment.ALIGN_OPPOSITE;
        } else {
            alignment = Layout.Alignment.ALIGN_NORMAL;
        }
        if (str != null) {
            if (Intrinsics.areEqual(str, "center")) {
                return Layout.Alignment.ALIGN_CENTER;
            }
            if (Intrinsics.areEqual(str, ViewProps.RIGHT)) {
                if (z10) {
                    return Layout.Alignment.ALIGN_NORMAL;
                }
                return Layout.Alignment.ALIGN_OPPOSITE;
            }
            return alignment;
        }
        return alignment;
    }

    private final String getTextAlignmentAttr(MapBuffer mapBuffer) {
        if (!mapBuffer.contains(2)) {
            return null;
        }
        MapBuffer mapBuffer2 = mapBuffer.getMapBuffer(2);
        if (mapBuffer2.getCount() != 0) {
            MapBuffer mapBuffer3 = mapBuffer2.getMapBuffer(0).getMapBuffer(5);
            if (mapBuffer3.contains(12)) {
                return mapBuffer3.getString(12);
            }
        }
        return null;
    }

    public static final int getTextGravity(@NotNull MapBuffer attributedString, @NotNull Spannable spanned) {
        Intrinsics.checkNotNullParameter(attributedString, "attributedString");
        Intrinsics.checkNotNullParameter(spanned, "spanned");
        TextLayoutManager textLayoutManager = INSTANCE;
        Layout.Alignment textAlignment = textLayoutManager.getTextAlignment(attributedString, spanned, textLayoutManager.getTextAlignmentAttr(attributedString));
        boolean isRtl = TextDirectionHeuristics.FIRSTSTRONG_LTR.isRtl(spanned, 0, spanned.length());
        int i10 = WhenMappings.$EnumSwitchMapping$0[textAlignment.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return 1;
                }
                throw new p();
            } else if (!isRtl) {
                return 5;
            } else {
                return 3;
            }
        } else if (isRtl) {
            return 5;
        } else {
            return 3;
        }
    }

    private final int getTextJustificationMode(String str) {
        if (Build.VERSION.SDK_INT < 26) {
            return -1;
        }
        if (str != null && Intrinsics.areEqual(str, "justified")) {
            return 1;
        }
        return 0;
    }

    /* JADX WARN: Code restructure failed: missing block: B:16:0x0032, code lost:
        if (r4.equals("auto") == false) goto L26;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x003b, code lost:
        if (r4.equals(com.facebook.react.uimanager.ViewProps.TOP) == false) goto L26;
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x003e, code lost:
        return 0.0f;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final float getVerticalOffset(android.text.Layout r3, com.facebook.react.common.mapbuffer.ReadableMapBuffer r4, float r5, com.facebook.yoga.YogaMeasureMode r6, int r7) {
        /*
            r2 = this;
            r0 = 8
            boolean r1 = r4.contains(r0)
            if (r1 == 0) goto Ld
            java.lang.String r4 = r4.getString(r0)
            goto Le
        Ld:
            r4 = 0
        Le:
            r0 = 0
            if (r4 != 0) goto L12
            return r0
        L12:
            int r1 = r3.getHeight()
            int r7 = r2.calculateLineCount(r3, r7)
            float r3 = r2.calculateHeight(r3, r5, r6, r7)
            float r5 = (float) r1
            int r6 = (r5 > r3 ? 1 : (r5 == r3 ? 0 : -1))
            if (r6 <= 0) goto L24
            return r0
        L24:
            int r6 = r4.hashCode()
            switch(r6) {
                case -1383228885: goto L4d;
                case -1364013995: goto L3f;
                case 115029: goto L35;
                case 3005871: goto L2c;
                default: goto L2b;
            }
        L2b:
            goto L55
        L2c:
            java.lang.String r3 = "auto"
            boolean r3 = r4.equals(r3)
            if (r3 != 0) goto L3e
            goto L55
        L35:
            java.lang.String r3 = "top"
            boolean r3 = r4.equals(r3)
            if (r3 != 0) goto L3e
            goto L55
        L3e:
            return r0
        L3f:
            java.lang.String r6 = "center"
            boolean r6 = r4.equals(r6)
            if (r6 != 0) goto L48
            goto L55
        L48:
            float r3 = r3 - r5
            r4 = 1073741824(0x40000000, float:2.0)
            float r3 = r3 / r4
            return r3
        L4d:
            java.lang.String r6 = "bottom"
            boolean r6 = r4.equals(r6)
            if (r6 != 0) goto L6c
        L55:
            java.lang.StringBuilder r3 = new java.lang.StringBuilder
            r3.<init>()
            java.lang.String r5 = "Invalid textAlignVertical: "
            r3.append(r5)
            r3.append(r4)
            java.lang.String r3 = r3.toString()
            java.lang.String r4 = "ReactNative"
            p8.a.J(r4, r3)
            return r0
        L6c:
            float r3 = r3 - r5
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.TextLayoutManager.getVerticalOffset(android.text.Layout, com.facebook.react.common.mapbuffer.ReadableMapBuffer, float, com.facebook.yoga.YogaMeasureMode, int):float");
    }

    private final BoringLayout.Metrics isBoring(Spannable spannable, TextPaint textPaint) {
        if (Build.VERSION.SDK_INT < 33) {
            return BoringLayout.isBoring(spannable, textPaint);
        }
        return BoringLayout.isBoring(spannable, textPaint, TextDirectionHeuristics.FIRSTSTRONG_LTR, true, null);
    }

    @NotNull
    public static final WritableArray measureLines(@NotNull Context context, @NotNull MapBuffer attributedString, @NotNull MapBuffer paragraphAttributes, float f10, float f11, ReactTextViewManagerCallback reactTextViewManagerCallback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attributedString, "attributedString");
        Intrinsics.checkNotNullParameter(paragraphAttributes, "paragraphAttributes");
        TextLayoutManager textLayoutManager = INSTANCE;
        YogaMeasureMode yogaMeasureMode = YogaMeasureMode.EXACTLY;
        Layout createLayoutForMeasurement = textLayoutManager.createLayoutForMeasurement(context, attributedString, paragraphAttributes, f10, yogaMeasureMode, f11, yogaMeasureMode, reactTextViewManagerCallback);
        CharSequence text = createLayoutForMeasurement.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        return FontMetricsUtil.getFontMetrics(text, createLayoutForMeasurement, context);
    }

    @NotNull
    public static final float[] measurePreparedLayout(@NotNull PreparedLayout preparedLayout, float f10, @NotNull YogaMeasureMode widthYogaMeasureMode, float f11, @NotNull YogaMeasureMode heightYogaMeasureMode) {
        Intrinsics.checkNotNullParameter(preparedLayout, "preparedLayout");
        Intrinsics.checkNotNullParameter(widthYogaMeasureMode, "widthYogaMeasureMode");
        Intrinsics.checkNotNullParameter(heightYogaMeasureMode, "heightYogaMeasureMode");
        Layout layout = preparedLayout.getLayout();
        CharSequence text = layout.getText();
        Intrinsics.checkNotNull(text, "null cannot be cast to non-null type android.text.Spanned");
        Spanned spanned = (Spanned) text;
        int maximumNumberOfLines = preparedLayout.getMaximumNumberOfLines();
        TextLayoutManager textLayoutManager = INSTANCE;
        int calculateLineCount = textLayoutManager.calculateLineCount(layout, maximumNumberOfLines);
        float calculateWidth = textLayoutManager.calculateWidth(layout, spanned, f10, widthYogaMeasureMode, calculateLineCount);
        float calculateHeight = textLayoutManager.calculateHeight(layout, f11, heightYogaMeasureMode, calculateLineCount);
        ArrayList arrayList = new ArrayList();
        PixelUtil pixelUtil = PixelUtil.INSTANCE;
        arrayList.add(Float.valueOf(pixelUtil.pxToDp(calculateWidth)));
        arrayList.add(Float.valueOf(pixelUtil.pxToDp(calculateHeight)));
        AttachmentMetrics attachmentMetrics = new AttachmentMetrics();
        int i10 = 0;
        while (i10 < spanned.length()) {
            i10 = textLayoutManager.nextAttachmentMetrics(layout, spanned, calculateWidth, calculateLineCount, i10, preparedLayout.getVerticalOffset(), attachmentMetrics);
            if (attachmentMetrics.getWasFound()) {
                PixelUtil pixelUtil2 = PixelUtil.INSTANCE;
                arrayList.add(Float.valueOf(pixelUtil2.pxToDp(attachmentMetrics.getTop())));
                arrayList.add(Float.valueOf(pixelUtil2.pxToDp(attachmentMetrics.getLeft())));
                arrayList.add(Float.valueOf(pixelUtil2.pxToDp(attachmentMetrics.getWidth())));
                arrayList.add(Float.valueOf(pixelUtil2.pxToDp(attachmentMetrics.getHeight())));
            }
        }
        float[] fArr = new float[arrayList.size()];
        int size = arrayList.size();
        for (int i11 = 0; i11 < size; i11++) {
            Object obj = arrayList.get(i11);
            Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
            fArr[i11] = ((Number) obj).floatValue();
        }
        return fArr;
    }

    public static final long measureText(@NotNull Context context, @NotNull MapBuffer attributedString, @NotNull MapBuffer paragraphAttributes, float f10, @NotNull YogaMeasureMode widthYogaMeasureMode, float f11, @NotNull YogaMeasureMode heightYogaMeasureMode, ReactTextViewManagerCallback reactTextViewManagerCallback, float[] fArr) {
        int i10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attributedString, "attributedString");
        Intrinsics.checkNotNullParameter(paragraphAttributes, "paragraphAttributes");
        Intrinsics.checkNotNullParameter(widthYogaMeasureMode, "widthYogaMeasureMode");
        Intrinsics.checkNotNullParameter(heightYogaMeasureMode, "heightYogaMeasureMode");
        TextLayoutManager textLayoutManager = INSTANCE;
        Layout createLayoutForMeasurement = textLayoutManager.createLayoutForMeasurement(context, attributedString, paragraphAttributes, f10, widthYogaMeasureMode, f11, heightYogaMeasureMode, reactTextViewManagerCallback);
        int i11 = 0;
        if (paragraphAttributes.contains(0)) {
            i10 = paragraphAttributes.getInt(0);
        } else {
            i10 = -1;
        }
        CharSequence text = createLayoutForMeasurement.getText();
        Intrinsics.checkNotNull(text, "null cannot be cast to non-null type android.text.Spanned");
        Spanned spanned = (Spanned) text;
        int calculateLineCount = textLayoutManager.calculateLineCount(createLayoutForMeasurement, i10);
        float calculateWidth = textLayoutManager.calculateWidth(createLayoutForMeasurement, spanned, f10, widthYogaMeasureMode, calculateLineCount);
        float calculateHeight = textLayoutManager.calculateHeight(createLayoutForMeasurement, f11, heightYogaMeasureMode, calculateLineCount);
        if (fArr != null) {
            AttachmentMetrics attachmentMetrics = new AttachmentMetrics();
            int i12 = 0;
            while (i11 < spanned.length()) {
                i11 = INSTANCE.nextAttachmentMetrics(createLayoutForMeasurement, spanned, calculateWidth, calculateLineCount, i11, 0.0f, attachmentMetrics);
                if (attachmentMetrics.getWasFound()) {
                    PixelUtil pixelUtil = PixelUtil.INSTANCE;
                    fArr[i12] = pixelUtil.pxToDp(attachmentMetrics.getTop());
                    fArr[i12 + 1] = pixelUtil.pxToDp(attachmentMetrics.getLeft());
                    i12 += 2;
                }
            }
        }
        PixelUtil pixelUtil2 = PixelUtil.INSTANCE;
        return h.a(pixelUtil2.pxToDp(calculateWidth), pixelUtil2.pxToDp(calculateHeight));
    }

    private final TextPaint newPaintWithAttributes(TextAttributeProps textAttributeProps, Context context) {
        TextPaint textPaint = new TextPaint(1);
        updateTextPaint(textPaint, textAttributeProps, context);
        return textPaint;
    }

    /* JADX WARN: Code restructure failed: missing block: B:40:0x00a6, code lost:
        if (r10 != false) goto L33;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final int nextAttachmentMetrics(android.text.Layout r14, android.text.Spanned r15, float r16, int r17, int r18, float r19, com.facebook.react.views.text.TextLayoutManager.AttachmentMetrics r20) {
        /*
            r13 = this;
            r1 = r18
            r2 = r20
            int r3 = r15.length()
            java.lang.Class<com.facebook.react.views.text.internal.span.TextInlineViewPlaceholderSpan> r4 = com.facebook.react.views.text.internal.span.TextInlineViewPlaceholderSpan.class
            int r3 = r15.nextSpanTransition(r1, r3, r4)
            java.lang.Object[] r1 = r15.getSpans(r1, r3, r4)
            com.facebook.react.views.text.internal.span.TextInlineViewPlaceholderSpan[] r1 = (com.facebook.react.views.text.internal.span.TextInlineViewPlaceholderSpan[]) r1
            int r4 = r1.length
            r5 = 0
            if (r4 != 0) goto L1c
            r2.setWasFound(r5)
            return r3
        L1c:
            int r4 = r1.length
            r6 = 1
            if (r4 != r6) goto L22
            r4 = r6
            goto L23
        L22:
            r4 = r5
        L23:
            db.a.a(r4)
            r1 = r1[r5]
            int r4 = r15.getSpanStart(r1)
            int r7 = r14.getLineForOffset(r4)
            int r8 = r14.getEllipsisCount(r7)
            if (r8 <= 0) goto L3a
            r9 = r6
        L37:
            r8 = r17
            goto L3c
        L3a:
            r9 = r5
            goto L37
        L3c:
            if (r7 > r8) goto Lb6
            if (r9 == 0) goto L4d
            int r8 = r14.getLineStart(r7)
            int r9 = r14.getEllipsisStart(r7)
            int r8 = r8 + r9
            if (r4 < r8) goto L4d
            goto Lb6
        L4d:
            int r8 = r1.getWidth()
            float r8 = (float) r8
            int r9 = r1.getHeight()
            float r9 = (float) r9
            boolean r10 = r14.isRtlCharAt(r4)
            int r11 = r14.getParagraphDirection(r7)
            r12 = -1
            if (r11 != r12) goto L63
            r5 = r6
        L63:
            int r11 = r15.length()
            int r11 = r11 - r6
            if (r4 != r11) goto L90
            int r4 = r15.length()
            if (r4 <= 0) goto L82
            int r4 = r14.getLineEnd(r7)
            int r4 = r4 - r6
            char r0 = r15.charAt(r4)
            r4 = 10
            if (r0 != r4) goto L82
            float r0 = r14.getLineMax(r7)
            goto L86
        L82:
            float r0 = r14.getLineWidth(r7)
        L86:
            if (r5 == 0) goto L8b
            float r0 = r16 - r0
            goto La9
        L8b:
            float r0 = r14.getLineRight(r7)
            goto La8
        L90:
            if (r5 != r10) goto L97
            float r0 = r14.getPrimaryHorizontal(r4)
            goto L9b
        L97:
            float r0 = r14.getSecondaryHorizontal(r4)
        L9b:
            if (r5 == 0) goto La6
            if (r10 != 0) goto La6
            float r4 = r14.getLineRight(r7)
            float r4 = r4 - r0
            float r0 = r16 - r4
        La6:
            if (r10 == 0) goto La9
        La8:
            float r0 = r0 - r8
        La9:
            int r14 = r14.getLineBaseline(r7)
            float r14 = (float) r14
            float r14 = r14 - r9
            r2.setTop(r14)
            r2.setLeft(r0)
            goto Lbe
        Lb6:
            r14 = 2143289344(0x7fc00000, float:NaN)
            r2.setTop(r14)
            r2.setLeft(r14)
        Lbe:
            float r14 = r2.getTop()
            float r14 = r14 + r19
            r2.setTop(r14)
            r2.setWasFound(r6)
            int r14 = r1.getWidth()
            float r14 = (float) r14
            r2.setWidth(r14)
            int r14 = r1.getHeight()
            float r14 = (float) r14
            r2.setHeight(r14)
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.TextLayoutManager.nextAttachmentMetrics(android.text.Layout, android.text.Spanned, float, int, int, float, com.facebook.react.views.text.TextLayoutManager$AttachmentMetrics):int");
    }

    private final TextPaint scratchPaintWithAttributes(TextAttributeProps textAttributeProps, Context context) {
        TextPaint textPaint = textPaintInstance.get();
        if (textPaint != null) {
            TextPaint textPaint2 = textPaint;
            textPaint2.setTypeface(null);
            textPaint2.setTextSize(12.0f);
            textPaint2.setFakeBoldText(false);
            textPaint2.setTextSkewX(0.0f);
            updateTextPaint(textPaint2, textAttributeProps, context);
            return textPaint2;
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final void updateTextPaint(TextPaint textPaint, TextAttributeProps textAttributeProps, Context context) {
        boolean z10;
        float f10;
        if (textAttributeProps.getEffectiveFontSize() != -1) {
            textPaint.setTextSize(textAttributeProps.getEffectiveFontSize());
        }
        if (textAttributeProps.getFontStyle() != -1 || textAttributeProps.getFontWeight() != -1 || textAttributeProps.getFontFamily() != null) {
            int fontStyle = textAttributeProps.getFontStyle();
            int fontWeight = textAttributeProps.getFontWeight();
            String fontFamily = textAttributeProps.getFontFamily();
            AssetManager assets = context.getAssets();
            Intrinsics.checkNotNullExpressionValue(assets, "getAssets(...)");
            Typeface applyStyles = ReactTypefaceUtils.applyStyles(null, fontStyle, fontWeight, fontFamily, assets);
            textPaint.setTypeface(applyStyles);
            if (textAttributeProps.getFontStyle() != -1 && textAttributeProps.getFontStyle() != applyStyles.getStyle()) {
                int fontStyle2 = textAttributeProps.getFontStyle() & (~applyStyles.getStyle());
                if ((fontStyle2 & 1) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                textPaint.setFakeBoldText(z10);
                if ((fontStyle2 & 2) != 0) {
                    f10 = -0.25f;
                } else {
                    f10 = 0.0f;
                }
                textPaint.setTextSkewX(f10);
            }
        }
    }

    public final void deleteCachedSpannableForTag(int i10) {
        tagToSpannableCache.remove(Integer.valueOf(i10));
    }

    @NotNull
    public final Spannable getOrCreateSpannableForText(@NotNull Context context, @NotNull MapBuffer attributedString, ReactTextViewManagerCallback reactTextViewManagerCallback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attributedString, "attributedString");
        if (attributedString.contains(3)) {
            Spannable spannable = tagToSpannableCache.get(Integer.valueOf(attributedString.getInt(3)));
            if (spannable != null) {
                return spannable;
            }
            throw new IllegalStateException("Required value was null.");
        }
        return createSpannableFromAttributedString(context, attributedString, reactTextViewManagerCallback);
    }

    public final boolean isRTL(@NotNull MapBuffer attributedString) {
        Intrinsics.checkNotNullParameter(attributedString, "attributedString");
        if (!attributedString.contains(2)) {
            return false;
        }
        MapBuffer mapBuffer = attributedString.getMapBuffer(2);
        if (mapBuffer.getCount() == 0) {
            return false;
        }
        MapBuffer mapBuffer2 = mapBuffer.getMapBuffer(0).getMapBuffer(5);
        if (!mapBuffer2.contains(23) || TextAttributeProps.getLayoutDirection(mapBuffer2.getString(23)) != 1) {
            return false;
        }
        return true;
    }

    public final void setCachedSpannableForTag(int i10, @NotNull Spannable sp2) {
        Intrinsics.checkNotNullParameter(sp2, "sp");
        tagToSpannableCache.put(Integer.valueOf(i10), sp2);
    }

    private final Layout createLayout(Spannable spannable, TextPaint textPaint, MapBuffer mapBuffer, MapBuffer mapBuffer2, float f10, YogaMeasureMode yogaMeasureMode, float f11, YogaMeasureMode yogaMeasureMode2) {
        BoringLayout.Metrics isBoring = isBoring(spannable, textPaint);
        int textBreakStrategy = TextAttributeProps.getTextBreakStrategy(mapBuffer2.getString(2));
        boolean z10 = mapBuffer2.contains(4) ? mapBuffer2.getBoolean(4) : true;
        int hyphenationFrequency = TextAttributeProps.getHyphenationFrequency(mapBuffer2.getString(5));
        boolean z11 = mapBuffer2.contains(3) ? mapBuffer2.getBoolean(3) : false;
        int i10 = mapBuffer2.contains(0) ? mapBuffer2.getInt(0) : -1;
        TextUtils.TruncateAt ellipsizeMode = mapBuffer2.contains(1) ? TextAttributeProps.getEllipsizeMode(mapBuffer2.getString(1)) : null;
        String textAlignmentAttr = getTextAlignmentAttr(mapBuffer);
        Layout.Alignment textAlignment = getTextAlignment(mapBuffer, spannable, textAlignmentAttr);
        int textJustificationMode = getTextJustificationMode(textAlignmentAttr);
        if (z11) {
            adjustSpannableFontToFit(spannable, f10, YogaMeasureMode.EXACTLY, f11, yogaMeasureMode2, mapBuffer2.contains(6) ? (float) mapBuffer2.getDouble(6) : Float.NaN, i10, z10, textBreakStrategy, hyphenationFrequency, textAlignment, textJustificationMode, textPaint);
            hyphenationFrequency = hyphenationFrequency;
            textAlignment = textAlignment;
            textJustificationMode = textJustificationMode;
        }
        return createLayout(spannable, isBoring, f10, yogaMeasureMode, z10, textBreakStrategy, hyphenationFrequency, textAlignment, textJustificationMode, ellipsizeMode, i10, textPaint);
    }
}
