package com.facebook.react.views.textinput;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.BlendMode;
import android.graphics.BlendModeColorFilter;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.text.Editable;
import android.text.InputFilter;
import android.text.SpannableStringBuilder;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.common.mapbuffer.MapBuffer;
import com.facebook.react.common.mapbuffer.ReadableMapBuffer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewDefaults;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.uimanager.events.BlurEvent;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.FocusEvent;
import com.facebook.react.uimanager.p;
import com.facebook.react.uimanager.q;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.views.imagehelper.ResourceDrawableIdHelper;
import com.facebook.react.views.scroll.ScrollEventType;
import com.facebook.react.views.text.DefaultStyleValuesUtil;
import com.facebook.react.views.text.ReactBaseTextShadowNode;
import com.facebook.react.views.text.ReactTextUpdate;
import com.facebook.react.views.text.ReactTextViewManagerCallback;
import com.facebook.react.views.text.ReactTypefaceUtils;
import com.facebook.react.views.text.TextAttributeProps;
import com.facebook.react.views.text.TextLayoutManager;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.facebook.react.views.text.internal.span.TextInlineImageSpan;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import lr.v;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000\u0092\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0007\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0011\n\u0002\b9\n\u0002\u0018\u0002\n\u0002\b&\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0017\u0018\u0000 ¥\u00012\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001:\u0002¥\u0001B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u000e\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\b\u0010\u0011\u001a\u00020\u0012H\u0016J\u0010\u0010\u0011\u001a\u00020\u00122\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007J\u0010\u0010\u0013\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00030\u0014H\u0016J\u0014\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00170\u0016H\u0016J\u0014\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00170\u0016H\u0016J\u0014\u0010\u0019\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u001a0\u0016H\u0016J\"\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u001a2\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J\"\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\r2\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0016J\u001a\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010\r2\u0006\u0010$\u001a\u00020\u001aH\u0002J\u0018\u0010%\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010'\u001a\u00020\u0017H\u0016J\u0018\u0010(\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010)\u001a\u00020\u001aH\u0007J\u0018\u0010*\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010+\u001a\u00020,H\u0007J\u001a\u0010-\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010.\u001a\u0004\u0018\u00010\rH\u0007J\u0018\u0010/\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u00100\u001a\u00020,H\u0007J\u001a\u00101\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u00102\u001a\u0004\u0018\u00010\rH\u0007J\u001a\u00103\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u00104\u001a\u0004\u0018\u00010\rH\u0007J\u001a\u00105\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u00106\u001a\u0004\u0018\u00010 H\u0007J\u0018\u00107\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u00108\u001a\u000209H\u0007J\u001a\u0010:\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010;\u001a\u0004\u0018\u00010\rH\u0007J\u0018\u0010:\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010<\u001a\u00020\u001aH\u0002J)\u0010=\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0012\u0010>\u001a\n\u0012\u0006\b\u0001\u0012\u00020\r0?\"\u00020\rH\u0002¢\u0006\u0002\u0010@J\u0018\u0010A\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010B\u001a\u000209H\u0007J\u001a\u0010C\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010D\u001a\u0004\u0018\u00010\rH\u0007J\u0018\u0010E\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010F\u001a\u000209H\u0007J\u0018\u0010G\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010H\u001a\u000209H\u0007J\u0018\u0010I\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010J\u001a\u000209H\u0007J\u0018\u0010K\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010L\u001a\u00020,H\u0007J\u0018\u0010M\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010N\u001a\u000209H\u0007J\u001a\u0010O\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010P\u001a\u0004\u0018\u00010\rH\u0007J\u001f\u0010Q\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010R\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0002\u0010SJ\u001f\u0010T\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010R\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0002\u0010SJ\u001f\u0010U\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010R\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0002\u0010SJ\u001f\u0010V\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010R\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0002\u0010SJ\u0018\u0010W\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010X\u001a\u000209H\u0007J\u0018\u0010Y\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010Z\u001a\u000209H\u0007J\u0018\u0010[\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010\\\u001a\u000209H\u0007J\u001f\u0010]\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010R\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0002\u0010SJ\u001f\u0010^\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010_\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0002\u0010SJ\u001a\u0010`\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010a\u001a\u0004\u0018\u00010\rH\u0007J\u001a\u0010b\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010c\u001a\u0004\u0018\u00010\rH\u0007J\u001a\u0010d\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010e\u001a\u0004\u0018\u00010\rH\u0007J\u0018\u0010f\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010g\u001a\u00020\u001aH\u0007J\u0018\u0010h\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010i\u001a\u000209H\u0007J\u0018\u0010j\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010k\u001a\u00020\u001aH\u0007J\u001f\u0010l\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010m\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0002\u0010SJ\u001a\u0010n\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010o\u001a\u0004\u0018\u00010\rH\u0007J\u001f\u0010p\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010q\u001a\u0004\u0018\u000109H\u0007¢\u0006\u0002\u0010rJ\u0018\u0010s\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010t\u001a\u000209H\u0007J\u0018\u0010u\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010v\u001a\u000209H\u0007J\u0018\u0010w\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0006\u0010x\u001a\u00020yH\u0007J\u001a\u0010z\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010{\u001a\u0004\u0018\u00010\rH\u0007J\u001a\u0010|\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010}\u001a\u0004\u0018\u00010\rH\u0007J\u001a\u0010~\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\b\u0010\u007f\u001a\u0004\u0018\u00010 H\u0007J\u001a\u0010\u0080\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0007\u0010\u0081\u0001\u001a\u000209H\u0007J\u001c\u0010\u0082\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\t\u0010\u0083\u0001\u001a\u0004\u0018\u00010\rH\u0007J#\u0010\u0084\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0007\u0010\u0085\u0001\u001a\u00020\u001a2\u0007\u0010\u0086\u0001\u001a\u00020,H\u0007J\u001c\u0010\u0087\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\t\u0010\u0088\u0001\u001a\u0004\u0018\u00010\rH\u0007J\u001a\u0010\u0089\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0007\u0010\u0089\u0001\u001a\u000209H\u0007J\u001a\u0010\u008a\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0007\u0010\u008b\u0001\u001a\u000209H\u0007J\u001c\u0010\u008c\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\t\u0010\u008d\u0001\u001a\u0004\u0018\u00010\rH\u0007J#\u0010\u008e\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0007\u0010\u0085\u0001\u001a\u00020\u001a2\u0007\u0010\u008f\u0001\u001a\u00020,H\u0007J*\u0010\u0090\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0007\u0010\u0085\u0001\u001a\u00020\u001a2\b\u0010R\u001a\u0004\u0018\u00010\u001aH\u0007¢\u0006\u0003\u0010\u0091\u0001J\u001c\u0010\u0092\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\t\u0010\u0093\u0001\u001a\u0004\u0018\u00010\rH\u0007J\u0011\u0010\u0094\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u0002H\u0014J\u001b\u0010\u0095\u0001\u001a\u00020\u001c2\u0007\u0010\u0096\u0001\u001a\u00020\u00102\u0007\u0010\u0097\u0001\u001a\u00020\u0002H\u0014J\u0015\u0010\u0098\u0001\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00170\u0016H\u0016J5\u0010\u0099\u0001\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u00022\u0007\u0010\u009a\u0001\u001a\u00020\u001a2\u0007\u0010\u009b\u0001\u001a\u00020\u001a2\u0007\u0010\u009c\u0001\u001a\u00020\u001a2\u0007\u0010\u009d\u0001\u001a\u00020\u001aH\u0016J'\u0010\u009e\u0001\u001a\u0004\u0018\u00010\u00172\u0006\u0010&\u001a\u00020\u00022\b\u0010\u009f\u0001\u001a\u00030 \u00012\b\u0010¡\u0001\u001a\u00030¢\u0001H\u0016J$\u0010!\u001a\u0004\u0018\u00010\u00172\u0006\u0010&\u001a\u00020\u00022\b\u0010\u009f\u0001\u001a\u00030 \u00012\b\u0010£\u0001\u001a\u00030¤\u0001R\u001c\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0084\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\b\u0010\t\"\u0004\b\n\u0010\u000b¨\u0006¦\u0001"}, d2 = {"Lcom/facebook/react/views/textinput/ReactTextInputManager;", "Lcom/facebook/react/uimanager/BaseViewManager;", "Lcom/facebook/react/views/textinput/ReactEditText;", "Lcom/facebook/react/uimanager/LayoutShadowNode;", "<init>", "()V", "reactTextViewManagerCallback", "Lcom/facebook/react/views/text/ReactTextViewManagerCallback;", "getReactTextViewManagerCallback", "()Lcom/facebook/react/views/text/ReactTextViewManagerCallback;", "setReactTextViewManagerCallback", "(Lcom/facebook/react/views/text/ReactTextViewManagerCallback;)V", "getName", "", "createViewInstance", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "createShadowNodeInstance", "Lcom/facebook/react/views/text/ReactBaseTextShadowNode;", "getShadowNodeClass", "Ljava/lang/Class;", "getExportedCustomBubblingEventTypeConstants", "", "", "getExportedCustomDirectEventTypeConstants", "getCommandsMap", "", "receiveCommand", "", "reactEditText", "commandId", "args", "Lcom/facebook/react/bridge/ReadableArray;", "getReactTextUpdate", "Lcom/facebook/react/views/text/ReactTextUpdate;", "text", "mostRecentEventCount", "updateExtraData", "view", "extraData", "setLineHeight", ViewProps.LINE_HEIGHT, "setFontSize", ViewProps.FONT_SIZE, "", "setFontFamily", ViewProps.FONT_FAMILY, "setMaxFontSizeMultiplier", ViewProps.MAX_FONT_SIZE_MULTIPLIER, "setFontWeight", ViewProps.FONT_WEIGHT, "setFontStyle", ViewProps.FONT_STYLE, "setFontVariant", ViewProps.FONT_VARIANT, "setIncludeFontPadding", "includepad", "", "setImportantForAutofill", "value", "mode", "setAutofillHints", "hints", "", "(Lcom/facebook/react/views/textinput/ReactEditText;[Ljava/lang/String;)V", "setOnSelectionChange", "onSelectionChange", "setSubmitBehavior", "submitBehavior", "setOnContentSizeChange", "onContentSizeChange", "setOnScroll", "onScroll", "setOnKeyPress", "onKeyPress", "setLetterSpacing", ViewProps.LETTER_SPACING, "setAllowFontScaling", ViewProps.ALLOW_FONT_SCALING, "setPlaceholder", ReactTextInputShadowNode.PROP_PLACEHOLDER, "setPlaceholderTextColor", ViewProps.COLOR, "(Lcom/facebook/react/views/textinput/ReactEditText;Ljava/lang/Integer;)V", "setSelectionColor", "setSelectionHandleColor", "setCursorColor", "setCaretHidden", "caretHidden", "setContextMenuHidden", "contextMenuHidden", "setSelectTextOnFocus", "selectTextOnFocus", "setColor", "setUnderlineColor", "underlineColor", "setTextAlign", ViewProps.TEXT_ALIGN, "setTextAlignVertical", ViewProps.TEXT_ALIGN_VERTICAL, "setInlineImageLeft", "resource", "setInlineImagePadding", ViewProps.PADDING, "setEditable", "editable", "setNumLines", "numLines", "setMaxLength", "maxLength", "setTextContentType", "autoComplete", "setAutoCorrect", "autoCorrect", "(Lcom/facebook/react/views/textinput/ReactEditText;Ljava/lang/Boolean;)V", "setMultiline", "multiline", "setSecureTextEntry", "password", "setAutoCapitalize", "autoCapitalize", "Lcom/facebook/react/bridge/Dynamic;", "setKeyboardType", "keyboardType", "setReturnKeyType", "returnKeyType", "setAcceptDragAndDropTypes", "acceptDragAndDropTypes", "setDisableFullscreenUI", "disableFullscreenUI", "setReturnKeyLabel", "returnKeyLabel", "setBorderRadius", "index", "borderRadius", "setBorderStyle", "borderStyle", "showKeyboardOnFocus", "setAutoFocus", "autoFocus", "setTextDecorationLine", "textDecorationLineString", "setBorderWidth", "width", "setBorderColor", "(Lcom/facebook/react/views/textinput/ReactEditText;ILjava/lang/Integer;)V", "setOverflow", ViewProps.OVERFLOW, "onAfterUpdateTransaction", "addEventEmitters", "reactContext", "editText", "getExportedViewConstants", "setPadding", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "updateState", "props", "Lcom/facebook/react/uimanager/ReactStylesDiffMap;", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "state", "Lcom/facebook/react/common/mapbuffer/MapBuffer;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = ReactTextInputManager.REACT_CLASS)
@SourceDebugExtension({"SMAP\nReactTextInputManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactTextInputManager.kt\ncom/facebook/react/views/textinput/ReactTextInputManager\n+ 2 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,1133:1\n37#2:1134\n36#2,3:1135\n37#2:1148\n36#2,3:1149\n1#3:1138\n739#4,9:1139\n*S KotlinDebug\n*F\n+ 1 ReactTextInputManager.kt\ncom/facebook/react/views/textinput/ReactTextInputManager\n*L\n626#1:1134\n626#1:1135,3\n838#1:1148\n838#1:1149,3\n837#1:1139,9\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReactTextInputManager extends BaseViewManager<ReactEditText, LayoutShadowNode> {
    private static final int AUTOCAPITALIZE_FLAGS = 28672;
    private static final int BLUR_TEXT_INPUT = 2;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String[] DRAWABLE_HANDLE_FIELDS;
    @NotNull
    private static final String[] DRAWABLE_HANDLE_RESOURCES;
    @NotNull
    private static final InputFilter[] EMPTY_FILTERS;
    private static final int FOCUS_TEXT_INPUT = 1;
    private static final int IME_ACTION_ID = 1648;
    private static final int INPUT_TYPE_KEYBOARD_DECIMAL_PAD = 8194;
    private static final int INPUT_TYPE_KEYBOARD_NUMBERED = 12290;
    private static final int INPUT_TYPE_KEYBOARD_NUMBER_PAD = 2;
    @NotNull
    private static final String KEYBOARD_TYPE_DECIMAL_PAD = "decimal-pad";
    @NotNull
    private static final String KEYBOARD_TYPE_EMAIL_ADDRESS = "email-address";
    @NotNull
    private static final String KEYBOARD_TYPE_NUMBER_PAD = "number-pad";
    @NotNull
    private static final String KEYBOARD_TYPE_NUMERIC = "numeric";
    @NotNull
    private static final String KEYBOARD_TYPE_PHONE_PAD = "phone-pad";
    @NotNull
    private static final String KEYBOARD_TYPE_URI = "url";
    @NotNull
    private static final String KEYBOARD_TYPE_VISIBLE_PASSWORD = "visible-password";
    @NotNull
    public static final String REACT_CLASS = "AndroidTextInput";
    @NotNull
    private static final Map<String, String> REACT_PROPS_AUTOFILL_HINTS_MAP;
    private static final int SET_MOST_RECENT_EVENT_COUNT = 3;
    private static final int SET_TEXT_AND_SELECTION = 4;
    @NotNull
    private static final String TAG;
    private static final short TX_STATE_KEY_ATTRIBUTED_STRING = 0;
    private static final short TX_STATE_KEY_MOST_RECENT_EVENT_COUNT = 3;
    private static final short TX_STATE_KEY_PARAGRAPH_ATTRIBUTES = 1;
    private static final int UNSET = -1;
    private ReactTextViewManagerCallback reactTextViewManagerCallback;

    @Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\n\n\u0002\b\u0003\n\u0002\u0010$\n\u0000\n\u0002\u0010\b\n\u0002\b\u000f\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010'\u001a\u00020(H\u0002J\u0010\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-H\u0002J \u0010.\u001a\u00020+2\u0006\u0010,\u001a\u00020-2\u0006\u0010/\u001a\u00020\u00102\u0006\u00100\u001a\u00020\u0010H\u0002J\u001a\u00101\u001a\u0004\u0018\u0001022\u0006\u00103\u001a\u0002042\u0006\u00105\u001a\u00020-H\u0002R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\nX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\nX\u0082T¢\u0006\u0002\n\u0000R\u001a\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u001b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u001c\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u001e\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u0018\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010!0 X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\"R\u000e\u0010#\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000R\u0016\u0010$\u001a\b\u0012\u0004\u0012\u00020\u00050 X\u0082\u0004¢\u0006\u0004\n\u0002\u0010%R\u0016\u0010&\u001a\b\u0012\u0004\u0012\u00020\u00050 X\u0082\u0004¢\u0006\u0004\n\u0002\u0010%R\u000e\u0010)\u001a\u00020\u0010X\u0082T¢\u0006\u0002\n\u0000¨\u00066"}, d2 = {"Lcom/facebook/react/views/textinput/ReactTextInputManager$Companion;", "", "<init>", "()V", "TAG", "", "getTAG", "()Ljava/lang/String;", "REACT_CLASS", "TX_STATE_KEY_ATTRIBUTED_STRING", "", "TX_STATE_KEY_PARAGRAPH_ATTRIBUTES", "TX_STATE_KEY_MOST_RECENT_EVENT_COUNT", "REACT_PROPS_AUTOFILL_HINTS_MAP", "", "FOCUS_TEXT_INPUT", "", "BLUR_TEXT_INPUT", "SET_MOST_RECENT_EVENT_COUNT", "SET_TEXT_AND_SELECTION", "INPUT_TYPE_KEYBOARD_NUMBER_PAD", "INPUT_TYPE_KEYBOARD_DECIMAL_PAD", "INPUT_TYPE_KEYBOARD_NUMBERED", "AUTOCAPITALIZE_FLAGS", "KEYBOARD_TYPE_EMAIL_ADDRESS", "KEYBOARD_TYPE_NUMERIC", "KEYBOARD_TYPE_DECIMAL_PAD", "KEYBOARD_TYPE_NUMBER_PAD", "KEYBOARD_TYPE_PHONE_PAD", "KEYBOARD_TYPE_VISIBLE_PASSWORD", "KEYBOARD_TYPE_URI", "EMPTY_FILTERS", "", "Landroid/text/InputFilter;", "[Landroid/text/InputFilter;", "UNSET", "DRAWABLE_HANDLE_RESOURCES", "[Ljava/lang/String;", "DRAWABLE_HANDLE_FIELDS", "shouldHideCursorForEmailTextInput", "", "IME_ACTION_ID", "checkPasswordType", "", "view", "Lcom/facebook/react/views/textinput/ReactEditText;", "updateStagedInputTypeFlag", "flagsToUnset", "flagsToSet", "getEventDispatcher", "Lcom/facebook/react/uimanager/events/EventDispatcher;", "reactContext", "Lcom/facebook/react/bridge/ReactContext;", "editText", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void checkPasswordType(ReactEditText reactEditText) {
            if ((reactEditText.getStagedInputType() & ReactTextInputManager.INPUT_TYPE_KEYBOARD_NUMBERED) != 0 && (reactEditText.getStagedInputType() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                updateStagedInputTypeFlag(reactEditText, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 16);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final EventDispatcher getEventDispatcher(ReactContext reactContext, ReactEditText reactEditText) {
            return UIManagerHelper.getEventDispatcherForReactTag(reactContext, reactEditText.getId());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean shouldHideCursorForEmailTextInput() {
            String MANUFACTURER = Build.MANUFACTURER;
            Intrinsics.checkNotNullExpressionValue(MANUFACTURER, "MANUFACTURER");
            String lowerCase = MANUFACTURER.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            if (Build.VERSION.SDK_INT != 29 || !StringsKt.V(lowerCase, "xiaomi", false, 2, null)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void updateStagedInputTypeFlag(ReactEditText reactEditText, int i10, int i11) {
            reactEditText.setStagedInputType(((~i10) & reactEditText.getStagedInputType()) | i11);
        }

        @NotNull
        public final String getTAG() {
            return ReactTextInputManager.TAG;
        }

        private Companion() {
        }
    }

    static {
        String simpleName = ReactTextInputManager.class.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        TAG = simpleName;
        REACT_PROPS_AUTOFILL_HINTS_MAP = o0.m(v.a("birthdate-day", "birthDateDay"), v.a("birthdate-full", "birthDateFull"), v.a("birthdate-month", "birthDateMonth"), v.a("birthdate-year", "birthDateYear"), v.a("cc-csc", "creditCardSecurityCode"), v.a("cc-exp", "creditCardExpirationDate"), v.a("cc-exp-day", "creditCardExpirationDay"), v.a("cc-exp-month", "creditCardExpirationMonth"), v.a("cc-exp-year", "creditCardExpirationYear"), v.a("cc-number", "creditCardNumber"), v.a("email", "emailAddress"), v.a("gender", "gender"), v.a(StackTraceHelper.NAME_KEY, "personName"), v.a("name-family", "personFamilyName"), v.a("name-given", "personGivenName"), v.a("name-middle", "personMiddleName"), v.a("name-middle-initial", "personMiddleInitial"), v.a("name-prefix", "personNamePrefix"), v.a("name-suffix", "personNameSuffix"), v.a("password", "password"), v.a("password-new", "newPassword"), v.a("postal-address", "postalAddress"), v.a("postal-address-country", "addressCountry"), v.a("postal-address-extended", "extendedAddress"), v.a("postal-address-extended-postal-code", "extendedPostalCode"), v.a("postal-address-locality", "addressLocality"), v.a("postal-address-region", "addressRegion"), v.a("postal-code", "postalCode"), v.a("street-address", "streetAddress"), v.a("sms-otp", "smsOTPCode"), v.a("tel", "phoneNumber"), v.a("tel-country-code", "phoneCountryCode"), v.a("tel-national", "phoneNational"), v.a("tel-device", "phoneNumberDevice"), v.a(NotificationRenderer.USERNAME, NotificationRenderer.USERNAME), v.a("username-new", "newUsername"));
        EMPTY_FILTERS = new InputFilter[0];
        DRAWABLE_HANDLE_RESOURCES = new String[]{"mTextSelectHandleLeftRes", "mTextSelectHandleRightRes", "mTextSelectHandleRes"};
        DRAWABLE_HANDLE_FIELDS = new String[]{"mSelectHandleLeft", "mSelectHandleRight", "mSelectHandleCenter"};
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void addEventEmitters$lambda$2(ThemedReactContext themedReactContext, ReactEditText reactEditText, View view, boolean z10) {
        int surfaceId = themedReactContext.getSurfaceId();
        EventDispatcher eventDispatcher = Companion.getEventDispatcher(themedReactContext, reactEditText);
        if (z10) {
            if (eventDispatcher != null) {
                eventDispatcher.dispatchEvent(new FocusEvent(surfaceId, reactEditText.getId()));
                return;
            }
            return;
        }
        if (eventDispatcher != null) {
            eventDispatcher.dispatchEvent(new BlurEvent(surfaceId, reactEditText.getId()));
        }
        if (eventDispatcher != null) {
            eventDispatcher.dispatchEvent(new ReactTextInputEndEditingEvent(surfaceId, reactEditText.getId(), String.valueOf(reactEditText.getText())));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean addEventEmitters$lambda$3(ReactEditText reactEditText, ThemedReactContext themedReactContext, TextView textView, int i10, KeyEvent keyEvent) {
        EventDispatcher eventDispatcher;
        if ((i10 & SetSpanOperation.SPAN_MAX_PRIORITY) == 0 && i10 != 0) {
            return true;
        }
        boolean isMultiline$ReactAndroid_release = reactEditText.isMultiline$ReactAndroid_release();
        boolean shouldSubmitOnReturn = reactEditText.shouldSubmitOnReturn();
        boolean shouldBlurOnReturn = reactEditText.shouldBlurOnReturn();
        if (shouldSubmitOnReturn && (eventDispatcher = Companion.getEventDispatcher(themedReactContext, reactEditText)) != null) {
            eventDispatcher.dispatchEvent(new ReactTextInputSubmitEditingEvent(themedReactContext.getSurfaceId(), reactEditText.getId(), String.valueOf(reactEditText.getText())));
        }
        if (shouldBlurOnReturn) {
            reactEditText.clearFocusAndMaybeRefocus$ReactAndroid_release();
        }
        if (shouldBlurOnReturn || shouldSubmitOnReturn || !isMultiline$ReactAndroid_release || i10 == 5 || i10 == 7) {
            return true;
        }
        return false;
    }

    private final ReactTextUpdate getReactTextUpdate(String str, int i10) {
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
        spannableStringBuilder.append((CharSequence) str);
        return new ReactTextUpdate(spannableStringBuilder, i10, false, 0.0f, 0.0f, 0.0f, 0.0f, 0, 0, 0);
    }

    private final void setAutofillHints(ReactEditText reactEditText, String... strArr) {
        if (Build.VERSION.SDK_INT < 26) {
            return;
        }
        reactEditText.setAutofillHints((String[]) Arrays.copyOf(strArr, strArr.length));
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Integer> getCommandsMap() {
        return o0.m(v.a("focusTextInput", 1), v.a("blurTextInput", 2));
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        Map<String, Object> exportedCustomBubblingEventTypeConstants = super.getExportedCustomBubblingEventTypeConstants();
        if (exportedCustomBubblingEventTypeConstants == null) {
            exportedCustomBubblingEventTypeConstants = new LinkedHashMap<>();
        }
        exportedCustomBubblingEventTypeConstants.putAll(o0.m(v.a("topSubmitEditing", o0.f(v.a("phasedRegistrationNames", o0.m(v.a("bubbled", "onSubmitEditing"), v.a("captured", "onSubmitEditingCapture"))))), v.a("topEndEditing", o0.f(v.a("phasedRegistrationNames", o0.m(v.a("bubbled", "onEndEditing"), v.a("captured", "onEndEditingCapture"))))), v.a(ReactTextInputKeyPressEvent.EVENT_NAME, o0.f(v.a("phasedRegistrationNames", o0.m(v.a("bubbled", "onKeyPress"), v.a("captured", "onKeyPressCapture")))))));
        return exportedCustomBubblingEventTypeConstants;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        Map<String, Object> exportedCustomDirectEventTypeConstants = super.getExportedCustomDirectEventTypeConstants();
        if (exportedCustomDirectEventTypeConstants == null) {
            exportedCustomDirectEventTypeConstants = new LinkedHashMap<>();
        }
        exportedCustomDirectEventTypeConstants.putAll(o0.f(v.a(ScrollEventType.Companion.getJSEventName(ScrollEventType.SCROLL), o0.f(v.a("registrationName", "onScroll")))));
        return exportedCustomDirectEventTypeConstants;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedViewConstants() {
        return o0.f(v.a("AutoCapitalizationType", o0.m(v.a(ViewProps.NONE, 0), v.a("characters", Integer.valueOf((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT)), v.a("words", 8192), v.a("sentences", 16384))));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    protected final ReactTextViewManagerCallback getReactTextViewManagerCallback() {
        return this.reactTextViewManagerCallback;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public Class<? extends LayoutShadowNode> getShadowNodeClass() {
        return ReactTextInputShadowNode.class;
    }

    @ReactProp(name = "acceptDragAndDropTypes")
    public final void setAcceptDragAndDropTypes(@NotNull ReactEditText view, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableArray == null) {
            view.setDragAndDropFilter(null);
            return;
        }
        ArrayList arrayList = new ArrayList();
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            String string = readableArray.getString(i10);
            if (string != null) {
                arrayList.add(string);
            }
        }
        view.setDragAndDropFilter(arrayList);
    }

    @ReactProp(defaultBoolean = true, name = ViewProps.ALLOW_FONT_SCALING)
    public final void setAllowFontScaling(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setAllowFontScaling(z10);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    @ReactProp(name = "autoCapitalize")
    public final void setAutoCapitalize(@NotNull ReactEditText view, @NotNull Dynamic autoCapitalize) {
        int i10;
        String asString;
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(autoCapitalize, "autoCapitalize");
        if (autoCapitalize.getType() == ReadableType.Number) {
            i10 = autoCapitalize.asInt();
        } else {
            if (autoCapitalize.getType() == ReadableType.String && (asString = autoCapitalize.asString()) != null) {
                switch (asString.hashCode()) {
                    case 3387192:
                        if (asString.equals(ViewProps.NONE)) {
                            i10 = 0;
                            break;
                        }
                        break;
                    case 113318569:
                        if (asString.equals("words")) {
                            i10 = 8192;
                            break;
                        }
                        break;
                    case 490141296:
                        asString.equals("sentences");
                        break;
                    case 1245424234:
                        if (asString.equals("characters")) {
                            i10 = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                            break;
                        }
                        break;
                }
            }
            i10 = 16384;
        }
        Companion.updateStagedInputTypeFlag(view, AUTOCAPITALIZE_FLAGS, i10);
    }

    @ReactProp(name = "autoCorrect")
    public final void setAutoCorrect(@NotNull ReactEditText view, Boolean bool) {
        int i10;
        Intrinsics.checkNotNullParameter(view, "view");
        Companion companion = Companion;
        if (Intrinsics.areEqual(bool, Boolean.TRUE)) {
            i10 = PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
        } else if (Intrinsics.areEqual(bool, Boolean.FALSE)) {
            i10 = 524288;
        } else {
            i10 = 0;
        }
        companion.updateStagedInputTypeFlag(view, 557056, i10);
    }

    @ReactProp(defaultBoolean = false, name = "autoFocus")
    public final void setAutoFocus(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setAutoFocus(z10);
    }

    @ReactPropGroup(customType = "Color", names = {ViewProps.BORDER_COLOR, ViewProps.BORDER_LEFT_COLOR, ViewProps.BORDER_RIGHT_COLOR, ViewProps.BORDER_TOP_COLOR, ViewProps.BORDER_BOTTOM_COLOR})
    public final void setBorderColor(@NotNull ReactEditText view, int i10, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        BackgroundStyleApplicator.setBorderColor(view, LogicalEdge.ALL, num);
    }

    @ReactPropGroup(defaultFloat = FloatCompanionObject.NaN, names = {"borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"})
    public final void setBorderRadius(@NotNull ReactEditText view, int i10, float f10) {
        LengthPercentage lengthPercentage;
        Intrinsics.checkNotNullParameter(view, "view");
        if (Float.isNaN(f10)) {
            lengthPercentage = null;
        } else {
            lengthPercentage = new LengthPercentage(f10, LengthPercentageType.POINT);
        }
        BackgroundStyleApplicator.setBorderRadius(view, (BorderRadiusProp) BorderRadiusProp.getEntries().get(i10), lengthPercentage);
    }

    @ReactProp(name = "borderStyle")
    public final void setBorderStyle(@NotNull ReactEditText view, String str) {
        BorderStyle borderStyle;
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            borderStyle = BorderStyle.Companion.fromString(str);
        } else {
            borderStyle = null;
        }
        BackgroundStyleApplicator.setBorderStyle(view, borderStyle);
    }

    @ReactPropGroup(defaultFloat = FloatCompanionObject.NaN, names = {ViewProps.BORDER_WIDTH, ViewProps.BORDER_LEFT_WIDTH, ViewProps.BORDER_RIGHT_WIDTH, ViewProps.BORDER_TOP_WIDTH, ViewProps.BORDER_BOTTOM_WIDTH})
    public final void setBorderWidth(@NotNull ReactEditText view, int i10, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        BackgroundStyleApplicator.setBorderWidth(view, (LogicalEdge) LogicalEdge.getEntries().get(i10), Float.valueOf(f10));
    }

    @ReactProp(defaultBoolean = false, name = "caretHidden")
    public final void setCaretHidden(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (view.getStagedInputType() == 32 && Companion.shouldHideCursorForEmailTextInput()) {
            return;
        }
        view.setCursorVisible(!z10);
    }

    @ReactProp(customType = "Color", name = ViewProps.COLOR)
    public final void setColor(@NotNull ReactEditText view, Integer num) {
        String str;
        Intrinsics.checkNotNullParameter(view, "view");
        if (num == null) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            ColorStateList defaultTextColor = DefaultStyleValuesUtil.getDefaultTextColor(context);
            if (defaultTextColor != null) {
                view.setTextColor(defaultTextColor);
                return;
            }
            Context context2 = view.getContext();
            String str2 = TAG;
            if (context2 != null) {
                str = context2.getClass().getCanonicalName();
            } else {
                str = "null";
            }
            ReactSoftExceptionLogger.logSoftException(str2, new IllegalStateException("Could not get default text color from View Context: " + str));
            return;
        }
        view.setTextColor(num.intValue());
    }

    @ReactProp(defaultBoolean = false, name = "contextMenuHidden")
    public final void setContextMenuHidden(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setContextMenuHidden(z10);
    }

    @ReactProp(customType = "Color", name = "cursorColor")
    public final void setCursorColor(@NotNull ReactEditText view, Integer num) {
        Drawable drawable;
        BlendMode blendMode;
        Intrinsics.checkNotNullParameter(view, "view");
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 29) {
            Drawable textCursorDrawable = view.getTextCursorDrawable();
            if (textCursorDrawable != null) {
                if (num != null) {
                    q.a();
                    int intValue = num.intValue();
                    blendMode = BlendMode.SRC_IN;
                    textCursorDrawable.setColorFilter(p.a(intValue, blendMode));
                } else {
                    textCursorDrawable.clearColorFilter();
                }
                view.setTextCursorDrawable(textCursorDrawable);
                return;
            }
        }
        if (i10 != 28) {
            try {
                Field declaredField = view.getClass().getDeclaredField("mCursorDrawableRes");
                declaredField.setAccessible(true);
                int i11 = declaredField.getInt(view);
                if (i11 != 0) {
                    Drawable e10 = androidx.core.content.a.e(view.getContext(), i11);
                    if (e10 != null) {
                        drawable = e10.mutate();
                    } else {
                        drawable = null;
                    }
                    if (drawable != null) {
                        if (num != null) {
                            drawable.setColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN);
                        } else {
                            drawable.clearColorFilter();
                        }
                        Field declaredField2 = TextView.class.getDeclaredField("mEditor");
                        declaredField2.setAccessible(true);
                        Object obj = declaredField2.get(view);
                        if (obj != null) {
                            Field declaredField3 = obj.getClass().getDeclaredField("mCursorDrawable");
                            declaredField3.setAccessible(true);
                            declaredField3.set(obj, new Drawable[]{drawable, drawable});
                            return;
                        }
                        throw new IllegalStateException("Required value was null.");
                    }
                    throw new IllegalStateException("Required value was null.");
                }
            } catch (IllegalAccessException | NoSuchFieldException unused) {
            }
        }
    }

    @ReactProp(defaultBoolean = false, name = "disableFullscreenUI")
    public final void setDisableFullscreenUI(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setDisableFullscreenUI(z10);
    }

    @ReactProp(defaultBoolean = true, name = "editable")
    public final void setEditable(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEnabled(z10);
    }

    @ReactProp(name = ViewProps.FONT_FAMILY)
    public final void setFontFamily(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setFontFamily(str);
    }

    @ReactProp(defaultFloat = ViewDefaults.FONT_SIZE_SP, name = ViewProps.FONT_SIZE)
    public final void setFontSize(@NotNull ReactEditText view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setFontSize(f10);
    }

    @ReactProp(name = ViewProps.FONT_STYLE)
    public final void setFontStyle(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setFontStyle(str);
    }

    @ReactProp(name = ViewProps.FONT_VARIANT)
    public final void setFontVariant(@NotNull ReactEditText view, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setFontFeatureSettings(ReactTypefaceUtils.parseFontVariant(readableArray));
    }

    @ReactProp(name = ViewProps.FONT_WEIGHT)
    public final void setFontWeight(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setFontWeight(str);
    }

    @ReactProp(name = "importantForAutofill")
    public final void setImportantForAutofill(@NotNull ReactEditText view, String str) {
        int i10;
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            int hashCode = str.hashCode();
            if (hashCode != 3521) {
                if (hashCode != 119527) {
                    if (hashCode != 1723649149) {
                        if (hashCode == 1828836387 && str.equals("yesExcludeDescendants")) {
                            i10 = 4;
                        }
                    } else if (str.equals("noExcludeDescendants")) {
                        i10 = 8;
                    }
                } else if (str.equals("yes")) {
                    i10 = 1;
                }
            } else if (str.equals("no")) {
                i10 = 2;
            }
            setImportantForAutofill(view, i10);
        }
        i10 = 0;
        setImportantForAutofill(view, i10);
    }

    @ReactProp(defaultBoolean = true, name = ViewProps.INCLUDE_FONT_PADDING)
    public final void setIncludeFontPadding(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setIncludeFontPadding(z10);
    }

    @ReactProp(name = "inlineImageLeft")
    public final void setInlineImageLeft(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        view.setCompoundDrawablesWithIntrinsicBounds(ResourceDrawableIdHelper.getResourceDrawableId(context, str), 0, 0, 0);
    }

    @ReactProp(name = "inlineImagePadding")
    public final void setInlineImagePadding(@NotNull ReactEditText view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setCompoundDrawablePadding(i10);
    }

    @ReactProp(name = "keyboardType")
    public final void setKeyboardType(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        int i10 = 1;
        if (StringsKt.A(KEYBOARD_TYPE_NUMERIC, str, true)) {
            i10 = INPUT_TYPE_KEYBOARD_NUMBERED;
        } else if (StringsKt.A(KEYBOARD_TYPE_NUMBER_PAD, str, true)) {
            i10 = 2;
        } else if (StringsKt.A(KEYBOARD_TYPE_DECIMAL_PAD, str, true)) {
            i10 = INPUT_TYPE_KEYBOARD_DECIMAL_PAD;
        } else if (StringsKt.A(KEYBOARD_TYPE_EMAIL_ADDRESS, str, true)) {
            if (Companion.shouldHideCursorForEmailTextInput()) {
                view.setCursorVisible(false);
            }
            i10 = 33;
        } else if (StringsKt.A(KEYBOARD_TYPE_PHONE_PAD, str, true)) {
            i10 = 3;
        } else if (StringsKt.A(KEYBOARD_TYPE_VISIBLE_PASSWORD, str, true)) {
            i10 = 144;
        } else if (StringsKt.A(KEYBOARD_TYPE_URI, str, true)) {
            i10 = 16;
        }
        Companion companion = Companion;
        companion.updateStagedInputTypeFlag(view, 15, i10);
        companion.checkPasswordType(view);
    }

    @ReactProp(defaultFloat = 0.0f, name = ViewProps.LETTER_SPACING)
    public final void setLetterSpacing(@NotNull ReactEditText view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setLetterSpacingPt(f10);
    }

    @ReactProp(defaultFloat = 0.0f, name = ViewProps.LINE_HEIGHT)
    public final void setLineHeight(@NotNull ReactEditText view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setLineHeight(i10);
    }

    @ReactProp(defaultFloat = FloatCompanionObject.NaN, name = ViewProps.MAX_FONT_SIZE_MULTIPLIER)
    public final void setMaxFontSizeMultiplier(@NotNull ReactEditText view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setMaxFontSizeMultiplier(f10);
    }

    @ReactProp(name = "maxLength")
    public final void setMaxLength(@NotNull ReactEditText view, Integer num) {
        boolean z10;
        Intrinsics.checkNotNullParameter(view, "view");
        InputFilter[] filters = view.getFilters();
        InputFilter[] inputFilterArr = EMPTY_FILTERS;
        boolean z11 = true;
        if (num == null) {
            Intrinsics.checkNotNull(filters);
            if (filters.length != 0) {
                z11 = false;
            }
            if (!z11) {
                LinkedList linkedList = new LinkedList();
                Iterator it = ArrayIteratorKt.iterator(filters);
                while (it.hasNext()) {
                    InputFilter inputFilter = (InputFilter) it.next();
                    if (!(inputFilter instanceof InputFilter.LengthFilter)) {
                        linkedList.add(inputFilter);
                    }
                }
                if (!linkedList.isEmpty()) {
                    filters = (InputFilter[]) linkedList.toArray(new InputFilter[0]);
                }
            }
            filters = inputFilterArr;
        } else {
            Intrinsics.checkNotNull(filters);
            if (filters.length == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                filters = new InputFilter[]{new InputFilter.LengthFilter(num.intValue())};
            } else {
                int length = filters.length;
                boolean z12 = false;
                for (int i10 = 0; i10 < length; i10++) {
                    if (filters[i10] instanceof InputFilter.LengthFilter) {
                        filters[i10] = new InputFilter.LengthFilter(num.intValue());
                        z12 = true;
                    }
                }
                if (!z12) {
                    inputFilterArr = new InputFilter[filters.length + 1];
                    System.arraycopy(filters, 0, inputFilterArr, 0, filters.length);
                    filters[filters.length] = new InputFilter.LengthFilter(num.intValue());
                    filters = inputFilterArr;
                }
            }
        }
        view.setFilters(filters);
    }

    @ReactProp(defaultBoolean = false, name = "multiline")
    public final void setMultiline(@NotNull ReactEditText view, boolean z10) {
        int i10;
        Intrinsics.checkNotNullParameter(view, "view");
        Companion companion = Companion;
        int i11 = 131072;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 131072;
        }
        if (!z10) {
            i11 = 0;
        }
        companion.updateStagedInputTypeFlag(view, i10, i11);
    }

    @ReactProp(defaultInt = 1, name = ViewProps.NUMBER_OF_LINES)
    public final void setNumLines(@NotNull ReactEditText view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setLines(i10);
    }

    @ReactProp(defaultBoolean = false, name = "onContentSizeChange")
    public final void setOnContentSizeChange(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (z10) {
            view.setContentSizeWatcher(new ReactTextContentSizeWatcher(view));
        } else {
            view.setContentSizeWatcher(null);
        }
    }

    @ReactProp(defaultBoolean = false, name = "onKeyPress")
    public final void setOnKeyPress(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setOnKeyPress(z10);
    }

    @ReactProp(defaultBoolean = false, name = "onScroll")
    public final void setOnScroll(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (z10) {
            view.setScrollWatcher(new ReactTextScrollWatcher(view));
        } else {
            view.setScrollWatcher(null);
        }
    }

    @ReactProp(defaultBoolean = false, name = "onSelectionChange")
    public final void setOnSelectionChange(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (z10) {
            view.setSelectionWatcher$ReactAndroid_release(new ReactTextSelectionWatcher(view));
        } else {
            view.setSelectionWatcher$ReactAndroid_release(null);
        }
    }

    @ReactProp(name = ViewProps.OVERFLOW)
    public final void setOverflow(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setOverflow(str);
    }

    @ReactProp(name = ReactTextInputShadowNode.PROP_PLACEHOLDER)
    public final void setPlaceholder(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPlaceholder(str);
    }

    @ReactProp(customType = "Color", name = "placeholderTextColor")
    public final void setPlaceholderTextColor(@NotNull ReactEditText view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (num == null) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            view.setHintTextColor(DefaultStyleValuesUtil.getDefaultTextColorHint(context));
            return;
        }
        view.setHintTextColor(num.intValue());
    }

    protected final void setReactTextViewManagerCallback(ReactTextViewManagerCallback reactTextViewManagerCallback) {
        this.reactTextViewManagerCallback = reactTextViewManagerCallback;
    }

    @ReactProp(name = "returnKeyLabel")
    public final void setReturnKeyLabel(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setImeActionLabel(str, IME_ACTION_ID);
    }

    @ReactProp(name = "returnKeyType")
    public final void setReturnKeyType(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setReturnKeyType(str);
    }

    @ReactProp(defaultBoolean = false, name = "secureTextEntry")
    public final void setSecureTextEntry(@NotNull ReactEditText view, boolean z10) {
        int i10;
        Intrinsics.checkNotNullParameter(view, "view");
        Companion companion = Companion;
        if (z10) {
            i10 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } else {
            i10 = 0;
        }
        companion.updateStagedInputTypeFlag(view, 144, i10);
        companion.checkPasswordType(view);
    }

    @ReactProp(defaultBoolean = false, name = "selectTextOnFocus")
    public final void setSelectTextOnFocus(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSelectTextOnFocus(z10);
    }

    @ReactProp(customType = "Color", name = "selectionColor")
    public final void setSelectionColor(@NotNull ReactEditText view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (num == null) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            view.setHighlightColor(DefaultStyleValuesUtil.getDefaultTextColorHighlight(context));
            return;
        }
        view.setHighlightColor(num.intValue());
    }

    @ReactProp(customType = "Color", name = "selectionHandleColor")
    public final void setSelectionHandleColor(@NotNull ReactEditText view, Integer num) {
        int i10;
        Drawable drawable;
        Drawable drawable2;
        Drawable drawable3;
        BlendMode blendMode;
        Intrinsics.checkNotNullParameter(view, "view");
        int i11 = Build.VERSION.SDK_INT;
        Drawable drawable4 = null;
        if (i11 >= 29) {
            Drawable textSelectHandle = view.getTextSelectHandle();
            if (textSelectHandle != null) {
                drawable2 = textSelectHandle.mutate();
            } else {
                drawable2 = null;
            }
            if (drawable2 != null) {
                Drawable textSelectHandleLeft = view.getTextSelectHandleLeft();
                if (textSelectHandleLeft != null) {
                    drawable3 = textSelectHandleLeft.mutate();
                } else {
                    drawable3 = null;
                }
                if (drawable3 != null) {
                    Drawable textSelectHandleRight = view.getTextSelectHandleRight();
                    if (textSelectHandleRight != null) {
                        drawable4 = textSelectHandleRight.mutate();
                    }
                    if (drawable4 != null) {
                        if (num != null) {
                            q.a();
                            int intValue = num.intValue();
                            blendMode = BlendMode.SRC_IN;
                            BlendModeColorFilter a10 = p.a(intValue, blendMode);
                            drawable2.setColorFilter(a10);
                            drawable3.setColorFilter(a10);
                            drawable4.setColorFilter(a10);
                        } else {
                            drawable2.clearColorFilter();
                            drawable3.clearColorFilter();
                            drawable4.clearColorFilter();
                        }
                        view.setTextSelectHandle(drawable2);
                        view.setTextSelectHandleLeft(drawable3);
                        view.setTextSelectHandleRight(drawable4);
                        return;
                    }
                    throw new IllegalStateException("Required value was null.");
                }
                throw new IllegalStateException("Required value was null.");
            }
            throw new IllegalStateException("Required value was null.");
        } else if (i11 != 28) {
            int length = DRAWABLE_HANDLE_RESOURCES.length;
            for (int i12 = 0; i12 < length; i12++) {
                try {
                    Field declaredField = view.getClass().getDeclaredField(DRAWABLE_HANDLE_RESOURCES[i12]);
                    declaredField.setAccessible(true);
                    i10 = declaredField.getInt(view);
                } catch (IllegalAccessException | NoSuchFieldException unused) {
                }
                if (i10 != 0) {
                    Drawable e10 = androidx.core.content.a.e(view.getContext(), i10);
                    if (e10 != null) {
                        drawable = e10.mutate();
                    } else {
                        drawable = null;
                    }
                    if (drawable != null) {
                        if (num != null) {
                            drawable.setColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN);
                        } else {
                            drawable.clearColorFilter();
                        }
                        Field declaredField2 = TextView.class.getDeclaredField("mEditor");
                        declaredField2.setAccessible(true);
                        Object obj = declaredField2.get(view);
                        if (obj != null) {
                            Field declaredField3 = obj.getClass().getDeclaredField(DRAWABLE_HANDLE_FIELDS[i12]);
                            declaredField3.setAccessible(true);
                            declaredField3.set(obj, drawable);
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } else {
                        throw new IllegalStateException("Required value was null.");
                    }
                } else {
                    return;
                }
            }
        }
    }

    @ReactProp(name = "submitBehavior")
    public final void setSubmitBehavior(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSubmitBehavior(str);
    }

    /* JADX WARN: Code restructure failed: missing block: B:27:0x004f, code lost:
        if (r7.equals("auto") == false) goto L29;
     */
    @com.facebook.react.uimanager.annotations.ReactProp(name = com.facebook.react.uimanager.ViewProps.TEXT_ALIGN)
    @android.annotation.SuppressLint({"WrongConstant"})
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setTextAlign(@org.jetbrains.annotations.NotNull com.facebook.react.views.textinput.ReactEditText r6, java.lang.String r7) {
        /*
            r5 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            java.lang.String r0 = "justify"
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r7)
            r1 = 3
            r2 = 1
            r3 = 26
            if (r0 == 0) goto L1c
            int r7 = android.os.Build.VERSION.SDK_INT
            if (r7 < r3) goto L18
            r6.setJustificationMode(r2)
        L18:
            r6.setGravityHorizontal$ReactAndroid_release(r1)
            return
        L1c:
            int r0 = android.os.Build.VERSION.SDK_INT
            r4 = 0
            if (r0 < r3) goto L24
            r6.setJustificationMode(r4)
        L24:
            if (r7 == 0) goto L78
            int r0 = r7.hashCode()
            switch(r0) {
                case -1364013995: goto L52;
                case 3005871: goto L49;
                case 3317767: goto L3c;
                case 108511772: goto L2e;
                default: goto L2d;
            }
        L2d:
            goto L5a
        L2e:
            java.lang.String r0 = "right"
            boolean r0 = r7.equals(r0)
            if (r0 != 0) goto L37
            goto L5a
        L37:
            r7 = 5
            r6.setGravityHorizontal$ReactAndroid_release(r7)
            return
        L3c:
            java.lang.String r0 = "left"
            boolean r0 = r7.equals(r0)
            if (r0 != 0) goto L45
            goto L5a
        L45:
            r6.setGravityHorizontal$ReactAndroid_release(r1)
            return
        L49:
            java.lang.String r0 = "auto"
            boolean r0 = r7.equals(r0)
            if (r0 != 0) goto L78
            goto L5a
        L52:
            java.lang.String r0 = "center"
            boolean r0 = r7.equals(r0)
            if (r0 != 0) goto L74
        L5a:
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "Invalid textAlign: "
            r0.append(r1)
            r0.append(r7)
            java.lang.String r7 = r0.toString()
            java.lang.String r0 = "ReactNative"
            p8.a.J(r0, r7)
            r6.setGravityHorizontal$ReactAndroid_release(r4)
            return
        L74:
            r6.setGravityHorizontal$ReactAndroid_release(r2)
            return
        L78:
            r6.setGravityHorizontal$ReactAndroid_release(r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.textinput.ReactTextInputManager.setTextAlign(com.facebook.react.views.textinput.ReactEditText, java.lang.String):void");
    }

    /* JADX WARN: Code restructure failed: missing block: B:8:0x0016, code lost:
        if (r5.equals("auto") == false) goto L20;
     */
    @com.facebook.react.uimanager.annotations.ReactProp(name = com.facebook.react.uimanager.ViewProps.TEXT_ALIGN_VERTICAL)
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setTextAlignVertical(@org.jetbrains.annotations.NotNull com.facebook.react.views.textinput.ReactEditText r4, java.lang.String r5) {
        /*
            r3 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            r0 = 0
            if (r5 == 0) goto L5f
            int r1 = r5.hashCode()
            switch(r1) {
                case -1383228885: goto L37;
                case -1364013995: goto L28;
                case 115029: goto L19;
                case 3005871: goto L10;
                default: goto Lf;
            }
        Lf:
            goto L3f
        L10:
            java.lang.String r1 = "auto"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L5f
            goto L3f
        L19:
            java.lang.String r1 = "top"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L22
            goto L3f
        L22:
            r5 = 48
            r4.setGravityVertical$ReactAndroid_release(r5)
            return
        L28:
            java.lang.String r1 = "center"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L31
            goto L3f
        L31:
            r5 = 16
            r4.setGravityVertical$ReactAndroid_release(r5)
            return
        L37:
            java.lang.String r1 = "bottom"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L59
        L3f:
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Invalid textAlignVertical: "
            r1.append(r2)
            r1.append(r5)
            java.lang.String r5 = r1.toString()
            java.lang.String r1 = "ReactNative"
            p8.a.J(r1, r5)
            r4.setGravityVertical$ReactAndroid_release(r0)
            return
        L59:
            r5 = 80
            r4.setGravityVertical$ReactAndroid_release(r5)
            return
        L5f:
            r4.setGravityVertical$ReactAndroid_release(r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.textinput.ReactTextInputManager.setTextAlignVertical(com.facebook.react.views.textinput.ReactEditText, java.lang.String):void");
    }

    @ReactProp(name = "autoComplete")
    public final void setTextContentType(@NotNull ReactEditText view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str == null) {
            setImportantForAutofill(view, 2);
        } else if (Intrinsics.areEqual("off", str)) {
            setImportantForAutofill(view, 2);
        } else {
            Map<String, String> map = REACT_PROPS_AUTOFILL_HINTS_MAP;
            if (map.containsKey(str)) {
                String[] strArr = new String[1];
                String str2 = map.get(str);
                if (str2 != null) {
                    strArr[0] = str2;
                    setAutofillHints(view, strArr);
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            }
            p8.a.J(ReactConstants.TAG, "Invalid autoComplete: " + str);
            setImportantForAutofill(view, 2);
        }
    }

    @ReactProp(name = ViewProps.TEXT_DECORATION_LINE)
    public final void setTextDecorationLine(@NotNull ReactEditText view, String str) {
        List l10;
        String[] strArr;
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPaintFlags(view.getPaintFlags() & (-25));
        if (str != null) {
            List k10 = new Regex(" ").k(str, 0);
            if (!k10.isEmpty()) {
                ListIterator listIterator = k10.listIterator(k10.size());
                while (listIterator.hasPrevious()) {
                    if (((String) listIterator.previous()).length() != 0) {
                        l10 = CollectionsKt.a1(k10, listIterator.nextIndex() + 1);
                        break;
                    }
                }
            }
            l10 = CollectionsKt.l();
            for (String str2 : (String[]) l10.toArray(new String[0])) {
                if (Intrinsics.areEqual(str2, "underline")) {
                    view.setPaintFlags(view.getPaintFlags() | 8);
                } else if (Intrinsics.areEqual(str2, "line-through")) {
                    view.setPaintFlags(view.getPaintFlags() | 16);
                }
            }
        }
    }

    @ReactProp(customType = "Color", name = "underlineColorAndroid")
    public final void setUnderlineColor(@NotNull ReactEditText view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        Drawable background = view.getBackground();
        if (background != null) {
            if (background.getConstantState() != null) {
                try {
                    Drawable mutate = background.mutate();
                    if (mutate != null) {
                        background = mutate;
                    } else {
                        throw new IllegalStateException("Required value was null.");
                    }
                } catch (NullPointerException e10) {
                    p8.a.n(TAG, "NullPointerException when setting underlineColorAndroid for TextInput", e10);
                }
            }
            if (num == null) {
                background.clearColorFilter();
            } else {
                background.setColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN);
            }
        }
    }

    @ReactProp(defaultBoolean = true, name = "showSoftInputOnFocus")
    public final void showKeyboardOnFocus(@NotNull ReactEditText view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setShowSoftInputOnFocus(z10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void addEventEmitters(@NotNull final ThemedReactContext reactContext, @NotNull final ReactEditText editText) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(editText, "editText");
        editText.setEventDispatcher(Companion.getEventDispatcher(reactContext, editText));
        editText.addTextChangedListener(new ReactTextInputTextWatcher(reactContext, editText));
        editText.setOnFocusChangeListener(new View.OnFocusChangeListener() { // from class: com.facebook.react.views.textinput.h
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                ReactTextInputManager.addEventEmitters$lambda$2(ThemedReactContext.this, editText, view, z10);
            }
        });
        editText.setOnEditorActionListener(new TextView.OnEditorActionListener() { // from class: com.facebook.react.views.textinput.i
            @Override // android.widget.TextView.OnEditorActionListener
            public final boolean onEditorAction(TextView textView, int i10, KeyEvent keyEvent) {
                boolean addEventEmitters$lambda$3;
                addEventEmitters$lambda$3 = ReactTextInputManager.addEventEmitters$lambda$3(ReactEditText.this, reactContext, textView, i10, keyEvent);
                return addEventEmitters$lambda$3;
            }
        });
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactBaseTextShadowNode createShadowNodeInstance() {
        return new ReactTextInputShadowNode(null, 1, null);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactEditText createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        ReactEditText reactEditText = new ReactEditText(context);
        reactEditText.setInputType(reactEditText.getInputType() & (-131073));
        reactEditText.setReturnKeyType("done");
        reactEditText.setLayoutParams(new ViewGroup.LayoutParams(-2, -2));
        return reactEditText;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull ReactEditText view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((ReactTextInputManager) view);
        view.maybeUpdateTypeface();
        view.commitStagedInputType$ReactAndroid_release();
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void setPadding(@NotNull ReactEditText view, int i10, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPadding(i10, i11, i12, i13);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void updateExtraData(@NotNull ReactEditText view, @NotNull Object extraData) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(extraData, "extraData");
        if (extraData instanceof ReactTextUpdate) {
            ReactTextUpdate reactTextUpdate = (ReactTextUpdate) extraData;
            int paddingLeft = (int) reactTextUpdate.getPaddingLeft();
            int paddingTop = (int) reactTextUpdate.getPaddingTop();
            int paddingRight = (int) reactTextUpdate.getPaddingRight();
            int paddingBottom = (int) reactTextUpdate.getPaddingBottom();
            int i10 = -1;
            if (paddingLeft != -1 || paddingTop != -1 || paddingRight != -1 || paddingBottom != -1) {
                if (paddingLeft == -1) {
                    paddingLeft = view.getPaddingLeft();
                }
                if (paddingTop == -1) {
                    paddingTop = view.getPaddingTop();
                }
                if (paddingRight == -1) {
                    paddingRight = view.getPaddingRight();
                }
                if (paddingBottom == -1) {
                    paddingBottom = view.getPaddingBottom();
                }
                view.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
            }
            if (reactTextUpdate.containsImages()) {
                TextInlineImageSpan.Companion.possiblyUpdateInlineImageSpans(reactTextUpdate.getText(), view);
            }
            if (view.getSelectionStart() == view.getSelectionEnd()) {
                Editable text = view.getText();
                i10 = reactTextUpdate.getText().length() - ((text != null ? text.length() : 0) - view.getSelectionStart());
            }
            view.maybeSetTextFromState(reactTextUpdate);
            view.maybeSetSelection(reactTextUpdate.getJsEventCounter(), i10, i10);
        }
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public Object updateState(@NotNull ReactEditText view, @NotNull ReactStylesDiffMap props, @NotNull StateWrapper stateWrapper) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(stateWrapper, "stateWrapper");
        if (ReactEditText.Companion.getDEBUG_MODE()) {
            String str = TAG;
            int id2 = view.getId();
            p8.a.m(str, "updateState: [" + id2 + "]");
        }
        if (view.getStateWrapper() == null) {
            view.setPadding(0, 0, 0, 0);
        }
        view.setStateWrapper(stateWrapper);
        ReadableMapBuffer stateDataMapBuffer = stateWrapper.getStateDataMapBuffer();
        if (stateDataMapBuffer != null) {
            return getReactTextUpdate(view, props, stateDataMapBuffer);
        }
        return null;
    }

    private final void setImportantForAutofill(ReactEditText reactEditText, int i10) {
        if (Build.VERSION.SDK_INT < 26) {
            return;
        }
        reactEditText.setImportantForAutofill(i10);
    }

    @NotNull
    public final ReactBaseTextShadowNode createShadowNodeInstance(ReactTextViewManagerCallback reactTextViewManagerCallback) {
        return new ReactTextInputShadowNode(reactTextViewManagerCallback);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @lr.c
    public void receiveCommand(@NotNull ReactEditText reactEditText, int i10, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(reactEditText, "reactEditText");
        if (i10 == 1) {
            receiveCommand(reactEditText, "focus", readableArray);
        } else if (i10 == 2) {
            receiveCommand(reactEditText, "blur", readableArray);
        } else if (i10 != 4) {
        } else {
            receiveCommand(reactEditText, "setTextAndSelection", readableArray);
        }
    }

    public final Object getReactTextUpdate(@NotNull ReactEditText view, @NotNull ReactStylesDiffMap props, @NotNull MapBuffer state) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(state, "state");
        if (state.getCount() == 0) {
            return null;
        }
        MapBuffer mapBuffer = state.getMapBuffer(0);
        MapBuffer mapBuffer2 = state.getMapBuffer(1);
        TextLayoutManager textLayoutManager = TextLayoutManager.INSTANCE;
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return ReactTextUpdate.Companion.buildReactTextUpdateFromState(textLayoutManager.getOrCreateSpannableForText(context, mapBuffer, this.reactTextViewManagerCallback), state.getInt(3), TextAttributeProps.getTextAlignment(props, textLayoutManager.isRTL(mapBuffer), view.getGravityHorizontal$ReactAndroid_release()), TextAttributeProps.getTextBreakStrategy(mapBuffer2.getString(2)), TextAttributeProps.getJustificationMode(props, Build.VERSION.SDK_INT >= 26 ? view.getJustificationMode() : 0));
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void receiveCommand(@NotNull ReactEditText reactEditText, @NotNull String commandId, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(reactEditText, "reactEditText");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        switch (commandId.hashCode()) {
            case -1699362314:
                if (!commandId.equals("blurTextInput")) {
                    return;
                }
                reactEditText.clearFocusFromJS$ReactAndroid_release();
                return;
            case 3027047:
                if (!commandId.equals("blur")) {
                    return;
                }
                reactEditText.clearFocusFromJS$ReactAndroid_release();
                return;
            case 97604824:
                if (!commandId.equals("focus")) {
                    return;
                }
                reactEditText.requestFocusFromJS();
                return;
            case 1427010500:
                if (commandId.equals("setTextAndSelection")) {
                    if (readableArray != null) {
                        int i10 = readableArray.getInt(0);
                        if (i10 == -1) {
                            return;
                        }
                        int i11 = readableArray.getInt(2);
                        int i12 = readableArray.getInt(3);
                        if (i12 == -1) {
                            i12 = i11;
                        }
                        if (!readableArray.isNull(1)) {
                            reactEditText.maybeSetTextFromJS(getReactTextUpdate(readableArray.getString(1), i10));
                        }
                        reactEditText.maybeSetSelection(i10, i11, i12);
                        return;
                    }
                    throw new IllegalStateException("Required value was null.");
                }
                return;
            case 1690703013:
                if (!commandId.equals("focusTextInput")) {
                    return;
                }
                reactEditText.requestFocusFromJS();
                return;
            default:
                return;
        }
    }
}
