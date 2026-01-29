package com.discord.chat.input.views;

import android.annotation.SuppressLint;
import android.content.Context;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import androidx.appcompat.widget.AppCompatEditText;
import com.discord.misc.utilities.keyboard.KeyboardExtensionsKt;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.react_gesture_handler.GetDiscordGestureHandlerEnabledRootViewKt;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\t\u0010\nJ'\u0010\u000e\u001a\u00020\b2\u0018\u0010\r\u001a\u0014\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\b0\u000b¢\u0006\u0004\b\u000e\u0010\u000fJ\u001b\u0010\u0012\u001a\u00020\b2\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\b0\u0010¢\u0006\u0004\b\u0012\u0010\u0013J\u0015\u0010\u0016\u001a\u00020\b2\u0006\u0010\u0015\u001a\u00020\u0014¢\u0006\u0004\b\u0016\u0010\u0017J\u000f\u0010\u0018\u001a\u00020\bH\u0016¢\u0006\u0004\b\u0018\u0010\nJ\u000f\u0010\u0019\u001a\u00020\bH\u0016¢\u0006\u0004\b\u0019\u0010\nJ\u000f\u0010\u001a\u001a\u00020\bH\u0014¢\u0006\u0004\b\u001a\u0010\nJ\u001f\u0010\r\u001a\u00020\b2\u0006\u0010\u001b\u001a\u00020\f2\u0006\u0010\u001c\u001a\u00020\fH\u0014¢\u0006\u0004\b\r\u0010\u001dJ\u0017\u0010\u001f\u001a\u00020\u00142\u0006\u0010\u001e\u001a\u00020\fH\u0016¢\u0006\u0004\b\u001f\u0010 J\u0017\u0010#\u001a\u00020\u00142\u0006\u0010\"\u001a\u00020!H\u0017¢\u0006\u0004\b#\u0010$J\u000f\u0010%\u001a\u00020\bH\u0016¢\u0006\u0004\b%\u0010\nR\u001e\u0010\u0011\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u00108\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010&R*\u0010\r\u001a\u0016\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\b\u0018\u00010\u000b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\r\u0010'R\u0014\u0010)\u001a\u00020(8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010*¨\u0006+"}, d2 = {"Lcom/discord/chat/input/views/DCDChatInput;", "Landroidx/appcompat/widget/AppCompatEditText;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "setupExternalKeyboardSendRequests", "()V", "Lkotlin/Function2;", "", "onSelectionChanged", "setOnSelectionChanged", "(Lkotlin/jvm/functions/Function2;)V", "Lkotlin/Function0;", "onRequestSend", "setOnRequestSend", "(Lkotlin/jvm/functions/Function0;)V", "", ViewProps.ENABLED, "setNoExtractUI", "(Z)V", "requestLayout", "forceLayout", "onDetachedFromWindow", "selStart", "selEnd", "(II)V", StackTraceHelper.ID_KEY, "onTextContextMenuItem", "(I)Z", "Landroid/view/MotionEvent;", "event", "onTouchEvent", "(Landroid/view/MotionEvent;)Z", "clearFocus", "Lkotlin/jvm/functions/Function0;", "Lkotlin/jvm/functions/Function2;", "Ljava/lang/Runnable;", "measureAndLayoutRunnable", "Ljava/lang/Runnable;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDCDChatInput.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DCDChatInput.kt\ncom/discord/chat/input/views/DCDChatInput\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,175:1\n1#2:176\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DCDChatInput extends AppCompatEditText {
    @NotNull
    private final Runnable measureAndLayoutRunnable;
    private Function0<Unit> onRequestSend;
    private Function2<? super Integer, ? super Integer, Unit> onSelectionChanged;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public DCDChatInput(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void setupExternalKeyboardSendRequests() {
        final Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        setOnKeyListener(new View.OnKeyListener() { // from class: com.discord.chat.input.views.j
            @Override // android.view.View.OnKeyListener
            public final boolean onKey(View view, int i10, KeyEvent keyEvent) {
                boolean z10;
                z10 = DCDChatInput.setupExternalKeyboardSendRequests$lambda$2(Ref.BooleanRef.this, this, view, i10, keyEvent);
                return z10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setupExternalKeyboardSendRequests$lambda$2(Ref.BooleanRef booleanRef, DCDChatInput dCDChatInput, View view, int i10, KeyEvent event) {
        Function0<Unit> function0;
        Intrinsics.checkNotNullParameter(event, "event");
        if ((event.getFlags() & 2) != 2 && i10 == 66) {
            boolean z10 = booleanRef.element;
            if (event.getAction() == 0) {
                booleanRef.element = true;
                if (event.hasModifiers(1)) {
                    return false;
                }
                if (!z10 && (function0 = dCDChatInput.onRequestSend) != null) {
                    function0.invoke();
                }
                return true;
            } else if (event.getAction() == 1) {
                booleanRef.element = false;
            }
        }
        return false;
    }

    @Override // android.view.View
    public void clearFocus() {
        super.clearFocus();
        Window window = ViewUtilsKt.getWindow(getContext());
        if (window != null) {
            KeyboardExtensionsKt.hideKeyboard(this, window);
        }
    }

    @Override // android.view.View
    public void forceLayout() {
        boolean isLayoutRequested = isLayoutRequested();
        super.forceLayout();
        if (!isLayoutRequested) {
            post(this.measureAndLayoutRunnable);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.AppCompatEditText, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        removeCallbacks(this.measureAndLayoutRunnable);
    }

    @Override // android.widget.TextView
    protected void onSelectionChanged(int i10, int i11) {
        super.onSelectionChanged(i10, i11);
        Function2<? super Integer, ? super Integer, Unit> function2 = this.onSelectionChanged;
        if (function2 != null) {
            function2.invoke(Integer.valueOf(i10), Integer.valueOf(i11));
        }
    }

    @Override // androidx.appcompat.widget.AppCompatEditText, android.widget.TextView
    public boolean onTextContextMenuItem(int i10) {
        if (i10 == 16908322) {
            i10 = 16908337;
        }
        return super.onTextContextMenuItem(i10);
    }

    @Override // android.widget.TextView, android.view.View
    @SuppressLint({"ClickableViewAccessibility"})
    public boolean onTouchEvent(@NotNull MotionEvent event) {
        ViewGroup discordGestureHandlerEnabledRootView;
        Intrinsics.checkNotNullParameter(event, "event");
        if (event.getAction() == 0 && (discordGestureHandlerEnabledRootView = GetDiscordGestureHandlerEnabledRootViewKt.getDiscordGestureHandlerEnabledRootView(this)) != null) {
            discordGestureHandlerEnabledRootView.requestDisallowInterceptTouchEvent(true);
        }
        return super.onTouchEvent(event);
    }

    @Override // android.view.View
    public void requestLayout() {
        boolean isLayoutRequested = isLayoutRequested();
        super.requestLayout();
        if (!isLayoutRequested) {
            post(this.measureAndLayoutRunnable);
        }
    }

    public final void setNoExtractUI(boolean z10) {
        int imeOptions;
        if (z10) {
            imeOptions = getImeOptions() | 268435456;
        } else {
            imeOptions = getImeOptions() & (-268435457);
        }
        setImeOptions(imeOptions);
    }

    public final void setOnRequestSend(@NotNull Function0<Unit> onRequestSend) {
        Intrinsics.checkNotNullParameter(onRequestSend, "onRequestSend");
        this.onRequestSend = onRequestSend;
    }

    public final void setOnSelectionChanged(@NotNull Function2<? super Integer, ? super Integer, Unit> onSelectionChanged) {
        Intrinsics.checkNotNullParameter(onSelectionChanged, "onSelectionChanged");
        this.onSelectionChanged = onSelectionChanged;
    }

    public /* synthetic */ DCDChatInput(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DCDChatInput(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        this.measureAndLayoutRunnable = new Runnable() { // from class: com.discord.chat.input.views.k
            @Override // java.lang.Runnable
            public final void run() {
                ViewMeasureExtensionsKt.measureAndLayout(DCDChatInput.this);
            }
        };
        setupExternalKeyboardSendRequests();
    }
}
