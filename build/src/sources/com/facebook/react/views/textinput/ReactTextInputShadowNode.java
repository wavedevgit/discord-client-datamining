package com.facebook.react.views.textinput;

import android.text.Spannable;
import android.view.ViewGroup;
import android.widget.EditText;
import androidx.appcompat.view.ContextThemeWrapper;
import androidx.core.view.h0;
import com.facebook.react.R;
import com.facebook.react.common.annotations.LegacyArchitectureShadowNodeWithCxxImpl;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIViewOperationQueue;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.text.ReactBaseTextShadowNode;
import com.facebook.react.views.text.ReactTextUpdate;
import com.facebook.react.views.text.ReactTextViewManagerCallback;
import com.facebook.react.views.view.MeasureUtil;
import com.facebook.yoga.YogaMeasureFunction;
import com.facebook.yoga.YogaMeasureMode;
import com.facebook.yoga.YogaNode;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@LegacyArchitectureShadowNodeWithCxxImpl
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0001\u0018\u0000 52\u00020\u00012\u00020\u0002:\u00015B\u0015\b\u0007\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0010\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0016J0\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020 2\u0006\u0010$\u001a\u00020\"H\u0016J\b\u0010%\u001a\u00020&H\u0016J\b\u0010'\u001a\u00020&H\u0016J\u0010\u0010(\u001a\u00020\u00182\u0006\u0010)\u001a\u00020*H\u0016J\u0010\u0010+\u001a\u00020\u00182\u0006\u0010\u0007\u001a\u00020\bH\u0007J\u0012\u0010,\u001a\u00020\u00182\b\u0010-\u001a\u0004\u0018\u00010\u000eH\u0016J\u0010\u0010.\u001a\u00020\u00182\u0006\u0010/\u001a\u000200H\u0016J\u0018\u00101\u001a\u00020\u00182\u0006\u00102\u001a\u00020\b2\u0006\u00103\u001a\u00020 H\u0016J\b\u00104\u001a\u00020\nH\u0002R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0082\u000e¢\u0006\u0002\n\u0000R(\u0010\u000f\u001a\u0004\u0018\u00010\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u000e@GX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0011\"\u0004\b\u0012\u0010\u0013R(\u0010\u0014\u001a\u0004\u0018\u00010\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u000e@GX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0015\u0010\u0011\"\u0004\b\u0016\u0010\u0013¨\u00066"}, d2 = {"Lcom/facebook/react/views/textinput/ReactTextInputShadowNode;", "Lcom/facebook/react/views/text/ReactBaseTextShadowNode;", "Lcom/facebook/yoga/YogaMeasureFunction;", "reactTextViewManagerCallback", "Lcom/facebook/react/views/text/ReactTextViewManagerCallback;", "<init>", "(Lcom/facebook/react/views/text/ReactTextViewManagerCallback;)V", "mostRecentEventCount", "", "internalEditText", "Landroid/widget/EditText;", "localData", "Lcom/facebook/react/views/textinput/ReactTextInputLocalData;", "value", "", "text", "getText", "()Ljava/lang/String;", "setText", "(Ljava/lang/String;)V", ReactTextInputShadowNode.PROP_PLACEHOLDER, "getPlaceholder", "setPlaceholder", "setThemedContext", "", "themedContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "measure", "", "node", "Lcom/facebook/yoga/YogaNode;", "width", "", "widthMode", "Lcom/facebook/yoga/YogaMeasureMode;", "height", "heightMode", "isVirtualAnchor", "", "isYogaLeafNode", "setLocalData", "data", "", "setMostRecentEventCount", "setTextBreakStrategy", ViewProps.TEXT_BREAK_STRATEGY, "onCollectExtraUpdates", "uiViewOperationQueue", "Lcom/facebook/react/uimanager/UIViewOperationQueue;", "setPadding", "spacingType", ViewProps.PADDING, "createInternalEditText", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactTextInputShadowNode extends ReactBaseTextShadowNode implements YogaMeasureFunction {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String PROP_PLACEHOLDER = "placeholder";
    @NotNull
    public static final String PROP_TEXT = "text";
    private EditText internalEditText;
    private ReactTextInputLocalData localData;
    private int mostRecentEventCount;
    private String placeholder;
    private String text;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/facebook/react/views/textinput/ReactTextInputShadowNode$Companion;", "", "<init>", "()V", "PROP_TEXT", "", "PROP_PLACEHOLDER", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("ReactTextInputShadowNode", LegacyArchitectureLogLevel.ERROR);
    }

    public ReactTextInputShadowNode() {
        this(null, 1, null);
    }

    private final EditText createInternalEditText() {
        return new EditText(new ContextThemeWrapper(getThemedContext(), R.style.Theme_ReactNative_TextInput_DefaultBackground));
    }

    public final String getPlaceholder() {
        return this.placeholder;
    }

    public final String getText() {
        return this.text;
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public boolean isVirtualAnchor() {
        return true;
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public boolean isYogaLeafNode() {
        return true;
    }

    @Override // com.facebook.yoga.YogaMeasureFunction
    public long measure(@NotNull YogaNode node, float f10, @NotNull YogaMeasureMode widthMode, float f11, @NotNull YogaMeasureMode heightMode) {
        Intrinsics.checkNotNullParameter(node, "node");
        Intrinsics.checkNotNullParameter(widthMode, "widthMode");
        Intrinsics.checkNotNullParameter(heightMode, "heightMode");
        EditText editText = this.internalEditText;
        if (editText != null) {
            ReactTextInputLocalData reactTextInputLocalData = this.localData;
            if (reactTextInputLocalData != null) {
                if (reactTextInputLocalData != null) {
                    reactTextInputLocalData.apply(editText);
                }
            } else {
                editText.setTextSize(0, this.mTextAttributes.getEffectiveFontSize());
                int i10 = this.mNumberOfLines;
                if (i10 != -1) {
                    editText.setLines(i10);
                }
                int breakStrategy = editText.getBreakStrategy();
                int i11 = this.mTextBreakStrategy;
                if (breakStrategy != i11) {
                    editText.setBreakStrategy(i11);
                }
            }
            editText.setHint(this.placeholder);
            editText.measure(MeasureUtil.getMeasureSpec(f10, widthMode), MeasureUtil.getMeasureSpec(f11, heightMode));
            return com.facebook.yoga.h.b(editText.getMeasuredWidth(), editText.getMeasuredHeight());
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void onCollectExtraUpdates(@NotNull UIViewOperationQueue uiViewOperationQueue) {
        Intrinsics.checkNotNullParameter(uiViewOperationQueue, "uiViewOperationQueue");
        super.onCollectExtraUpdates(uiViewOperationQueue);
        if (this.mostRecentEventCount != -1) {
            Spannable spannedFromShadowNode = spannedFromShadowNode(this, this.text, false, null);
            Intrinsics.checkNotNullExpressionValue(spannedFromShadowNode, "spannedFromShadowNode(...)");
            uiViewOperationQueue.enqueueUpdateExtraData(getReactTag(), new ReactTextUpdate(spannedFromShadowNode, this.mostRecentEventCount, this.mContainsImages, getPadding(0), getPadding(1), getPadding(2), getPadding(3), this.mTextAlign, this.mTextBreakStrategy, this.mJustificationMode));
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setLocalData(@NotNull Object data) {
        Intrinsics.checkNotNullParameter(data, "data");
        db.a.a(data instanceof ReactTextInputLocalData);
        this.localData = (ReactTextInputLocalData) data;
        dirty();
    }

    @ReactProp(name = "mostRecentEventCount")
    public final void setMostRecentEventCount(int i10) {
        this.mostRecentEventCount = i10;
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setPadding(int i10, float f10) {
        super.setPadding(i10, f10);
        markUpdated();
    }

    @ReactProp(name = PROP_PLACEHOLDER)
    public final void setPlaceholder(String str) {
        this.placeholder = str;
        markUpdated();
    }

    @ReactProp(name = "text")
    public final void setText(String str) {
        this.text = str;
        markUpdated();
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x002a, code lost:
        if (r4.equals("simple") == false) goto L14;
     */
    @Override // com.facebook.react.views.text.ReactBaseTextShadowNode
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void setTextBreakStrategy(java.lang.String r4) {
        /*
            r3 = this;
            r0 = 0
            if (r4 == 0) goto L52
            int r1 = r4.hashCode()
            r2 = -1924829944(0xffffffff8d456d08, float:-6.0836553E-31)
            if (r1 == r2) goto L2d
            r2 = -902286926(0xffffffffca3831b2, float:-3017836.5)
            if (r1 == r2) goto L24
            r2 = 336871677(0x141440fd, float:7.484907E-27)
            if (r1 == r2) goto L17
            goto L35
        L17:
            java.lang.String r1 = "highQuality"
            boolean r1 = r4.equals(r1)
            if (r1 != 0) goto L20
            goto L35
        L20:
            r4 = 1
            r3.mTextBreakStrategy = r4
            return
        L24:
            java.lang.String r1 = "simple"
            boolean r1 = r4.equals(r1)
            if (r1 != 0) goto L52
            goto L35
        L2d:
            java.lang.String r1 = "balanced"
            boolean r1 = r4.equals(r1)
            if (r1 != 0) goto L4e
        L35:
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Invalid textBreakStrategy: "
            r1.append(r2)
            r1.append(r4)
            java.lang.String r4 = r1.toString()
            java.lang.String r1 = "ReactNative"
            p8.a.J(r1, r4)
            r3.mTextBreakStrategy = r0
            return
        L4e:
            r4 = 2
            r3.mTextBreakStrategy = r4
            return
        L52:
            r3.mTextBreakStrategy = r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.textinput.ReactTextInputShadowNode.setTextBreakStrategy(java.lang.String):void");
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setThemedContext(@NotNull ThemedReactContext themedContext) {
        Intrinsics.checkNotNullParameter(themedContext, "themedContext");
        super.setThemedContext(themedContext);
        EditText createInternalEditText = createInternalEditText();
        setDefaultPadding(4, h0.E(createInternalEditText));
        setDefaultPadding(1, createInternalEditText.getPaddingTop());
        setDefaultPadding(5, h0.D(createInternalEditText));
        setDefaultPadding(3, createInternalEditText.getPaddingBottom());
        this.internalEditText = createInternalEditText;
        createInternalEditText.setPadding(0, 0, 0, 0);
        EditText editText = this.internalEditText;
        if (editText != null) {
            editText.setLayoutParams(new ViewGroup.LayoutParams(-2, -2));
        }
    }

    public /* synthetic */ ReactTextInputShadowNode(ReactTextViewManagerCallback reactTextViewManagerCallback, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : reactTextViewManagerCallback);
    }

    public ReactTextInputShadowNode(ReactTextViewManagerCallback reactTextViewManagerCallback) {
        super(reactTextViewManagerCallback);
        this.mostRecentEventCount = -1;
        this.mTextBreakStrategy = 1;
        setMeasureFunction(this);
    }
}
