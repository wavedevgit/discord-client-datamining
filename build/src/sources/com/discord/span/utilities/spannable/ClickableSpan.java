package com.discord.span.utilities.spannable;

import android.graphics.LinearGradient;
import android.graphics.Shader;
import android.text.TextPaint;
import android.view.View;
import android.widget.TextView;
import com.discord.react_gesture_handler.nested_touch.NestedClickableSpan;
import com.discord.span.utilities.spannable.ClickableSpan;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import r1.c;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\u0000\n\u0002\b\u0011\b\u0086\b\u0018\u00002\u00020\u00012\u00020\u0002Bu\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0003\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010\b\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\n\u001a\u00020\t\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\u0014\b\u0002\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000b0\r\u0012\u0012\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00100\r¢\u0006\u0004\b\u0012\u0010\u0013J\u0012\u0010\u0014\u001a\u0004\u0018\u00010\u0005HÂ\u0003¢\u0006\u0004\b\u0014\u0010\u0015J\u0012\u0010\u0016\u001a\u0004\u0018\u00010\u0005HÂ\u0003¢\u0006\u0004\b\u0016\u0010\u0015J\u0012\u0010\u0017\u001a\u0004\u0018\u00010\u0005HÂ\u0003¢\u0006\u0004\b\u0017\u0010\u0015J\u0010\u0010\u0018\u001a\u00020\tHÂ\u0003¢\u0006\u0004\b\u0018\u0010\u0019J\u0012\u0010\u001a\u001a\u0004\u0018\u00010\u000bHÂ\u0003¢\u0006\u0004\b\u001a\u0010\u001bJ\u001c\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000b0\rHÂ\u0003¢\u0006\u0004\b\u001c\u0010\u001dJ\u001c\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00100\rHÂ\u0003¢\u0006\u0004\b\u001e\u0010\u001dJ\u0017\u0010!\u001a\u00020\u00102\u0006\u0010 \u001a\u00020\u001fH\u0016¢\u0006\u0004\b!\u0010\"J\u0017\u0010$\u001a\u00020\u00102\u0006\u0010#\u001a\u00020\u000eH\u0016¢\u0006\u0004\b$\u0010%J\u0017\u0010&\u001a\u00020\u000b2\u0006\u0010#\u001a\u00020\u000eH\u0016¢\u0006\u0004\b&\u0010'J\u0017\u0010*\u001a\u00020\u00102\u0006\u0010)\u001a\u00020(H\u0016¢\u0006\u0004\b*\u0010+J\u0010\u0010,\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b,\u0010-J\u0080\u0001\u0010.\u001a\u00020\u00002\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0003\u0010\u0006\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010\u0007\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010\b\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\n\u001a\u00020\t2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b2\u0014\b\u0002\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000b0\r2\u0014\b\u0002\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00100\rHÆ\u0001¢\u0006\u0004\b.\u0010/J\u0010\u00101\u001a\u000200HÖ\u0001¢\u0006\u0004\b1\u00102J\u0010\u00103\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b3\u00104J\u001a\u00107\u001a\u00020\u000b2\b\u00106\u001a\u0004\u0018\u000105HÖ\u0003¢\u0006\u0004\b7\u00108R\u001a\u0010\u0004\u001a\u00020\u00038\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0004\u00109\u001a\u0004\b:\u0010-R\u0016\u0010\u0006\u001a\u0004\u0018\u00010\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0006\u0010;R\u0016\u0010\u0007\u001a\u0004\u0018\u00010\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0007\u0010;R\u0016\u0010\b\u001a\u0004\u0018\u00010\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\b\u0010;R\u0014\u0010\n\u001a\u00020\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\n\u0010<R\u0016\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010=R \u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000b0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000f\u0010>R \u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00100\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0011\u0010>R(\u0010@\u001a\u0004\u0018\u00010\u001f2\b\u0010?\u001a\u0004\u0018\u00010\u001f8\u0002@BX\u0082\u000e¢\u0006\f\n\u0004\b@\u0010A\"\u0004\bB\u0010\"R\u0019\u0010E\u001a\u00020\u0005*\u00020\u00058Ã\u0002X\u0082\u0004¢\u0006\u0006\u001a\u0004\bC\u0010D¨\u0006F"}, d2 = {"Lcom/discord/span/utilities/spannable/ClickableSpan;", "Landroid/text/style/ClickableSpan;", "Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan;", "Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;", "touchPriority", "", "primaryColor", "secondaryColor", "tertiaryColor", "", "gradientPatternWidth", "", "underlineText", "Lkotlin/Function1;", "Landroid/view/View;", "onLongClickListener", "", "onClickListener", "<init>", "(Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;FLjava/lang/Boolean;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "component2", "()Ljava/lang/Integer;", "component3", "component4", "component5", "()F", "component6", "()Ljava/lang/Boolean;", "component7", "()Lkotlin/jvm/functions/Function1;", "component8", "Landroid/widget/TextView;", "textView", "enableHighlight", "(Landroid/widget/TextView;)V", "view", ViewProps.ON_CLICK, "(Landroid/view/View;)V", "onLongClick", "(Landroid/view/View;)Z", "Landroid/text/TextPaint;", "textPaint", "updateDrawState", "(Landroid/text/TextPaint;)V", "component1", "()Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;", "copy", "(Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;FLjava/lang/Boolean;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)Lcom/discord/span/utilities/spannable/ClickableSpan;", "", "toString", "()Ljava/lang/String;", "hashCode", "()I", "", "other", "equals", "(Ljava/lang/Object;)Z", "Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;", "getTouchPriority", "Ljava/lang/Integer;", "F", "Ljava/lang/Boolean;", "Lkotlin/jvm/functions/Function1;", "value", "spanView", "Landroid/widget/TextView;", "setSpanView", "getDarken", "(I)I", "darken", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nClickableSpan.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClickableSpan.kt\ncom/discord/span/utilities/spannable/ClickableSpan\n*L\n1#1,95:1\n42#1:96\n*S KotlinDebug\n*F\n+ 1 ClickableSpan.kt\ncom/discord/span/utilities/spannable/ClickableSpan\n*L\n80#1:96\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ClickableSpan extends android.text.style.ClickableSpan implements NestedClickableSpan {
    private final float gradientPatternWidth;
    @NotNull
    private final Function1<View, Unit> onClickListener;
    @NotNull
    private final Function1<View, Boolean> onLongClickListener;
    private final Integer primaryColor;
    private final Integer secondaryColor;
    private TextView spanView;
    private final Integer tertiaryColor;
    @NotNull
    private final NestedClickableSpan.TouchPriority touchPriority;
    private final Boolean underlineText;

    public /* synthetic */ ClickableSpan(NestedClickableSpan.TouchPriority touchPriority, Integer num, Integer num2, Integer num3, float f10, Boolean bool, Function1 function1, Function1 function12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? NestedClickableSpan.TouchPriority.DEFAULT : touchPriority, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3, (i10 & 16) != 0 ? 150.0f : f10, (i10 & 32) != 0 ? Boolean.FALSE : bool, (i10 & 64) != 0 ? new Function1() { // from class: e8.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean _init_$lambda$0;
                _init_$lambda$0 = ClickableSpan._init_$lambda$0((View) obj);
                return Boolean.valueOf(_init_$lambda$0);
            }
        } : function1, function12);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean _init_$lambda$0(View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return false;
    }

    private final Integer component2() {
        return this.primaryColor;
    }

    private final Integer component3() {
        return this.secondaryColor;
    }

    private final Integer component4() {
        return this.tertiaryColor;
    }

    private final float component5() {
        return this.gradientPatternWidth;
    }

    private final Boolean component6() {
        return this.underlineText;
    }

    private final Function1<View, Boolean> component7() {
        return this.onLongClickListener;
    }

    private final Function1<View, Unit> component8() {
        return this.onClickListener;
    }

    public static /* synthetic */ ClickableSpan copy$default(ClickableSpan clickableSpan, NestedClickableSpan.TouchPriority touchPriority, Integer num, Integer num2, Integer num3, float f10, Boolean bool, Function1 function1, Function1 function12, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            touchPriority = clickableSpan.touchPriority;
        }
        if ((i10 & 2) != 0) {
            num = clickableSpan.primaryColor;
        }
        if ((i10 & 4) != 0) {
            num2 = clickableSpan.secondaryColor;
        }
        if ((i10 & 8) != 0) {
            num3 = clickableSpan.tertiaryColor;
        }
        if ((i10 & 16) != 0) {
            f10 = clickableSpan.gradientPatternWidth;
        }
        if ((i10 & 32) != 0) {
            bool = clickableSpan.underlineText;
        }
        Function1<View, Boolean> function13 = function1;
        if ((i10 & 64) != 0) {
            function13 = clickableSpan.onLongClickListener;
        }
        Function1<View, Unit> function14 = function12;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            function14 = clickableSpan.onClickListener;
        }
        Function1 function15 = function13;
        Function1 function16 = function14;
        float f11 = f10;
        Boolean bool2 = bool;
        return clickableSpan.copy(touchPriority, num, num2, num3, f11, bool2, function15, function16);
    }

    private final int getDarken(int i10) {
        return c.c(i10, -16777216, 0.1f);
    }

    private final void setSpanView(TextView textView) {
        if (textView != null) {
            textView.invalidate();
        } else {
            TextView textView2 = this.spanView;
            if (textView2 != null) {
                textView2.invalidate();
            }
        }
        this.spanView = textView;
    }

    @NotNull
    public final NestedClickableSpan.TouchPriority component1() {
        return this.touchPriority;
    }

    @NotNull
    public final ClickableSpan copy(@NotNull NestedClickableSpan.TouchPriority touchPriority, Integer num, Integer num2, Integer num3, float f10, Boolean bool, @NotNull Function1<? super View, Boolean> onLongClickListener, @NotNull Function1<? super View, Unit> onClickListener) {
        Intrinsics.checkNotNullParameter(touchPriority, "touchPriority");
        Intrinsics.checkNotNullParameter(onLongClickListener, "onLongClickListener");
        Intrinsics.checkNotNullParameter(onClickListener, "onClickListener");
        return new ClickableSpan(touchPriority, num, num2, num3, f10, bool, onLongClickListener, onClickListener);
    }

    @Override // com.discord.react_gesture_handler.nested_touch.NestedClickableSpan
    public void enableHighlight(@NotNull TextView textView) {
        Intrinsics.checkNotNullParameter(textView, "textView");
        setSpanView(textView);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClickableSpan) {
            ClickableSpan clickableSpan = (ClickableSpan) obj;
            return this.touchPriority == clickableSpan.touchPriority && Intrinsics.areEqual(this.primaryColor, clickableSpan.primaryColor) && Intrinsics.areEqual(this.secondaryColor, clickableSpan.secondaryColor) && Intrinsics.areEqual(this.tertiaryColor, clickableSpan.tertiaryColor) && Float.compare(this.gradientPatternWidth, clickableSpan.gradientPatternWidth) == 0 && Intrinsics.areEqual(this.underlineText, clickableSpan.underlineText) && Intrinsics.areEqual(this.onLongClickListener, clickableSpan.onLongClickListener) && Intrinsics.areEqual(this.onClickListener, clickableSpan.onClickListener);
        }
        return false;
    }

    @Override // com.discord.react_gesture_handler.nested_touch.NestedClickableSpan
    @NotNull
    public NestedClickableSpan.TouchPriority getTouchPriority() {
        return this.touchPriority;
    }

    public int hashCode() {
        int hashCode = this.touchPriority.hashCode() * 31;
        Integer num = this.primaryColor;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.secondaryColor;
        int hashCode3 = (hashCode2 + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.tertiaryColor;
        int hashCode4 = (((hashCode3 + (num3 == null ? 0 : num3.hashCode())) * 31) + Float.hashCode(this.gradientPatternWidth)) * 31;
        Boolean bool = this.underlineText;
        return ((((hashCode4 + (bool != null ? bool.hashCode() : 0)) * 31) + this.onLongClickListener.hashCode()) * 31) + this.onClickListener.hashCode();
    }

    @Override // android.text.style.ClickableSpan, com.discord.react_gesture_handler.nested_touch.NestedClickableSpan
    public void onClick(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.onClickListener.invoke(view);
        Unit unit = Unit.f31988a;
        setSpanView(null);
    }

    @Override // com.discord.react_gesture_handler.nested_touch.NestedClickableSpan
    public boolean onLongClick(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        Boolean bool = (Boolean) this.onLongClickListener.invoke(view);
        bool.getClass();
        setSpanView(null);
        return bool.booleanValue();
    }

    @NotNull
    public String toString() {
        NestedClickableSpan.TouchPriority touchPriority = this.touchPriority;
        Integer num = this.primaryColor;
        Integer num2 = this.secondaryColor;
        Integer num3 = this.tertiaryColor;
        float f10 = this.gradientPatternWidth;
        Boolean bool = this.underlineText;
        Function1<View, Boolean> function1 = this.onLongClickListener;
        Function1<View, Unit> function12 = this.onClickListener;
        return "ClickableSpan(touchPriority=" + touchPriority + ", primaryColor=" + num + ", secondaryColor=" + num2 + ", tertiaryColor=" + num3 + ", gradientPatternWidth=" + f10 + ", underlineText=" + bool + ", onLongClickListener=" + function1 + ", onClickListener=" + function12 + ")";
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(@NotNull TextPaint textPaint) {
        int intValue;
        Intrinsics.checkNotNullParameter(textPaint, "textPaint");
        super.updateDrawState(textPaint);
        Integer num = this.primaryColor;
        if (num != null) {
            Integer num2 = this.secondaryColor;
            if (num2 != null) {
                textPaint.setShader(new LinearGradient(0.0f, 0.0f, this.gradientPatternWidth, 0.0f, CollectionsKt.g1(CollectionsKt.q(num, num2, this.tertiaryColor)), (float[]) null, Shader.TileMode.MIRROR));
            } else {
                textPaint.setShader(null);
                if (this.spanView != null) {
                    intValue = c.c(this.primaryColor.intValue(), -16777216, 0.1f);
                } else {
                    intValue = this.primaryColor.intValue();
                }
                textPaint.setColor(intValue);
                Unit unit = Unit.f31988a;
            }
        } else {
            textPaint.setShader(null);
        }
        Boolean bool = this.underlineText;
        if (bool != null) {
            textPaint.setUnderlineText(bool.booleanValue());
        } else {
            textPaint.setUnderlineText(false);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public ClickableSpan(@NotNull NestedClickableSpan.TouchPriority touchPriority, Integer num, Integer num2, Integer num3, float f10, Boolean bool, @NotNull Function1<? super View, Boolean> onLongClickListener, @NotNull Function1<? super View, Unit> onClickListener) {
        Intrinsics.checkNotNullParameter(touchPriority, "touchPriority");
        Intrinsics.checkNotNullParameter(onLongClickListener, "onLongClickListener");
        Intrinsics.checkNotNullParameter(onClickListener, "onClickListener");
        this.touchPriority = touchPriority;
        this.primaryColor = num;
        this.secondaryColor = num2;
        this.tertiaryColor = num3;
        this.gradientPatternWidth = f10;
        this.underlineText = bool;
        this.onLongClickListener = onLongClickListener;
        this.onClickListener = onClickListener;
    }
}
