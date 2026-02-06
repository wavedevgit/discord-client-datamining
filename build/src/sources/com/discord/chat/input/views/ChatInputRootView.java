package com.discord.chat.input.views;

import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.text.Editable;
import android.text.Layout;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.util.Pair;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.Window;
import android.widget.RelativeLayout;
import androidx.core.util.Predicate;
import androidx.core.view.ContentInfoCompat;
import androidx.core.view.h0;
import androidx.core.view.w;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.input.bridge.ChatInputNode;
import com.discord.chat.input.databinding.ChatInputRootViewBinding;
import com.discord.chat.input.plugins.DeleteNodeOnBackspaceTextWatcher;
import com.discord.chat.input.plugins.SelectionGuardSpanWatcher;
import com.discord.chat.input.spans.DCDInputSpan;
import com.discord.chat.input.utils.EditTextUtilsKt;
import com.discord.chat.input.views.ChatInputRootView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.keyboard.KeyboardEvent;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.misc.utilities.keyboard.KeyboardExtensionsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.span.utilities.BackgroundSpanDrawer;
import com.discord.span.utilities.SpannableExtensionsKt;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.MutableStateFlow;
import org.jetbrains.annotations.NotNull;
import rs.l0;
@Metadata(d1 = {"\u0000\u009c\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010#\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u000b\n\u0002\u0010\u000e\n\u0002\b\u0011\n\u0002\u0010\r\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u00012\u00020\u0002:\u0002bcB'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nJ\u000e\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fJ\u0018\u0010 \u001a\u00020\u001d2\u0006\u0010!\u001a\u00020\b2\b\b\u0002\u0010\"\u001a\u00020\bJ\u0006\u0010#\u001a\u00020$J\u0006\u0010%\u001a\u00020\u001dJ\u000e\u0010I\u001a\u00020\u001d2\u0006\u0010J\u001a\u00020$J\b\u0010K\u001a\u00020\u001dH\u0014J>\u0010L\u001a\u00020\u001d2\u0006\u0010M\u001a\u00020\b2\u0006\u0010N\u001a\u00020\b2\u0006\u0010;\u001a\u0002002\f\u0010O\u001a\b\u0012\u0004\u0012\u00020Q0P2\u0006\u0010R\u001a\u00020$2\b\u0010S\u001a\u0004\u0018\u000100J\u0006\u0010T\u001a\u00020\u001dJ\u001e\u0010U\u001a\u00020\u001d2\b\u0010S\u001a\u0004\u0018\u0001002\f\u0010V\u001a\b\u0012\u0004\u0012\u00020Q0PJ \u0010W\u001a\u00020\u001d2\f\u0010V\u001a\b\u0012\u0004\u0012\u00020Q0P2\b\b\u0002\u0010X\u001a\u00020\bH\u0002J\u0010\u0010Y\u001a\u00020\u001d2\u0006\u0010Z\u001a\u00020$H\u0016J\b\u0010[\u001a\u00020\u001dH\u0002J!\u0010\\\u001a\u00020\u001d*\u00020\u001b2\u0012\u0010]\u001a\u000e\u0012\u0004\u0012\u00020_\u0012\u0004\u0012\u00020\u001d0^H\u0082\bJ!\u0010`\u001a\u00020\u001d*\u00020\u001b2\u0012\u0010]\u001a\u000e\u0012\u0004\u0012\u00020a\u0012\u0004\u0012\u00020\u001d0^H\u0082\bR\u0010\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u001c\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012R\u000e\u0010\u0013\u001a\u00020\u0014X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0016X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0018X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u001b0\u001aX\u0082\u0004¢\u0006\u0002\n\u0000R\u0013\u0010&\u001a\u0004\u0018\u00010\b8F¢\u0006\u0006\u001a\u0004\b'\u0010(R$\u0010*\u001a\u00020$2\u0006\u0010)\u001a\u00020$8F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b*\u0010+\"\u0004\b,\u0010-R$\u0010.\u001a\u00020$2\u0006\u0010)\u001a\u00020$8F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b.\u0010+\"\u0004\b/\u0010-R(\u00101\u001a\u0004\u0018\u0001002\b\u0010)\u001a\u0004\u0018\u0001008F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b2\u00103\"\u0004\b4\u00105R&\u00106\u001a\u00020\b2\b\b\u0001\u0010)\u001a\u00020\b8F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b7\u00108\"\u0004\b9\u0010:R$\u0010;\u001a\u0002002\u0006\u0010)\u001a\u0002008F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b<\u00103\"\u0004\b=\u00105R&\u0010>\u001a\u00020\b2\b\b\u0001\u0010)\u001a\u00020\b8F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b?\u00108\"\u0004\b@\u0010:R\u0010\u0010A\u001a\u0004\u0018\u00010BX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010C\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010D\u001a\u000200X\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u0010E\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010G0FX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010H\u001a\b\u0012\u0004\u0012\u00020\b0FX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006d"}, d2 = {"Lcom/discord/chat/input/views/ChatInputRootView;", "Landroid/widget/RelativeLayout;", "Lcom/discord/keyboard/KeyboardEvent;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "blurJob", "Lkotlinx/coroutines/Job;", "listener", "Lcom/discord/chat/input/views/ChatInputRootView$ChatInputListener;", "getListener", "()Lcom/discord/chat/input/views/ChatInputRootView$ChatInputListener;", "setListener", "(Lcom/discord/chat/input/views/ChatInputRootView$ChatInputListener;)V", "binding", "Lcom/discord/chat/input/databinding/ChatInputRootViewBinding;", "lineHeightMeasurer", "Lcom/discord/chat/input/views/ChatInputRootViewMeasurer;", "editText", "Lcom/discord/chat/input/views/DCDChatInput;", "insertedPayloads", "", "Landroidx/core/view/ContentInfoCompat;", "showKeyboard", "", "window", "Landroid/view/Window;", "setSelection", ViewProps.START, "stop", "requestInputFocus", "", "clearInputFocus", "lineCount", "getLineCount", "()Ljava/lang/Integer;", "value", "isCursorVisible", "()Z", "setCursorVisible", "(Z)V", "isEditTextEnabled", "setEditTextEnabled", "", "hint", "getHint", "()Ljava/lang/String;", "setHint", "(Ljava/lang/String;)V", "hintTextColor", "getHintTextColor", "()I", "setHintTextColor", "(I)V", "text", "getText", "setText", "textColor", "getTextColor", "setTextColor", "editTextHint", "", "editTextMaxLines", "lastEditId", "currentTextFlow", "Lkotlinx/coroutines/flow/MutableStateFlow;", "Lcom/discord/chat/input/views/ChatInputRootView$CurrentTextAndSelection;", "currentLayoutFlow", "setNoExtractUI", ViewProps.ENABLED, "onAttachedToWindow", "replaceRange", "location", "length", "styleBlocks", "", "Lcom/discord/chat/input/bridge/ChatInputNode;", "keepCursorPosition", "editId", "backspace", "clearAndApplyChatNodes", "chatInputNodes", "updateChatNodes", "offset", "onKeyboardStateChanged", "opened", "updateHintEllipsis", "forEachUri", "action", "Lkotlin/Function1;", "Landroid/net/Uri;", "forEachIntent", "Landroid/content/Intent;", "ChatInputListener", "CurrentTextAndSelection", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nChatInputRootView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatInputRootView.kt\ncom/discord/chat/input/views/ChatInputRootView\n+ 2 TextView.kt\nandroidx/core/widget/TextViewKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 SpannableExtensions.kt\ncom/discord/span/utilities/SpannableExtensionsKt\n+ 6 Pair.kt\nandroidx/core/util/PairKt\n*L\n1#1,386:1\n375#1,4:421\n381#1,4:427\n48#2,19:387\n84#2,3:406\n13472#3,2:409\n1563#4:411\n1634#4,3:412\n1869#4,2:415\n5#5:417\n5#5:418\n66#6:419\n78#6:420\n66#6:425\n78#6:426\n*S KotlinDebug\n*F\n+ 1 ChatInputRootView.kt\ncom/discord/chat/input/views/ChatInputRootView\n*L\n208#1:421,4\n219#1:427,4\n238#1:387,19\n238#1:406,3\n313#1:409,2\n320#1:411\n320#1:412,3\n320#1:415,2\n324#1:417\n328#1:418\n198#1:419\n198#1:420\n212#1:425\n212#1:426\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatInputRootView extends RelativeLayout implements KeyboardEvent {
    @NotNull
    private final ChatInputRootViewBinding binding;
    private Job blurJob;
    @NotNull
    private final MutableStateFlow currentLayoutFlow;
    @NotNull
    private final MutableStateFlow currentTextFlow;
    @NotNull
    private final DCDChatInput editText;
    private CharSequence editTextHint;
    private int editTextMaxLines;
    @NotNull
    private final Set<ContentInfoCompat> insertedPayloads;
    @NotNull
    private String lastEditId;
    @NotNull
    private ChatInputRootViewMeasurer lineHeightMeasurer;
    private ChatInputListener listener;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\bf\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&J\u0010\u0010\u0007\u001a\u00020\u00032\u0006\u0010\b\u001a\u00020\tH&J\u0018\u0010\n\u001a\u00020\u00032\u0006\u0010\u000b\u001a\u00020\u00052\u0006\u0010\f\u001a\u00020\u0005H&J(\u0010\r\u001a\u00020\u00032\u0006\u0010\u000b\u001a\u00020\u00052\u0006\u0010\f\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\u000e\u001a\u00020\tH&J\u0010\u0010\u000f\u001a\u00020\u00032\u0006\u0010\u0010\u001a\u00020\u0011H&J\b\u0010\u0012\u001a\u00020\u0003H&J\u0010\u0010\u0013\u001a\u00020\u00032\u0006\u0010\u0014\u001a\u00020\tH&¨\u0006\u0015"}, d2 = {"Lcom/discord/chat/input/views/ChatInputRootView$ChatInputListener;", "", "onContentSizeChange", "", "width", "", "height", "onEndBlur", "text", "", "onFocus", ViewProps.START, ViewProps.END, "onTextOrSelectionChanged", "editId", "onImageInserted", "uri", "Landroid/net/Uri;", "onRequestSend", "onCommandInserted", "data", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface ChatInputListener {
        void onCommandInserted(@NotNull String str);

        void onContentSizeChange(int i10, int i11);

        void onEndBlur(@NotNull String str);

        void onFocus(int i10, int i11);

        void onImageInserted(@NotNull Uri uri);

        void onRequestSend();

        void onTextOrSelectionChanged(int i10, int i11, @NotNull String str, @NotNull String str2);
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u000f\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u00020\u0001B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0006HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0006HÆ\u0003J1\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u0006HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0019\u001a\u00020\u0006HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000e¨\u0006\u001a"}, d2 = {"Lcom/discord/chat/input/views/ChatInputRootView$CurrentTextAndSelection;", "", "selectionStart", "", "selectionEnd", "text", "", "editId", "<init>", "(IILjava/lang/String;Ljava/lang/String;)V", "getSelectionStart", "()I", "getSelectionEnd", "getText", "()Ljava/lang/String;", "getEditId", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CurrentTextAndSelection {
        @NotNull
        private final String editId;
        private final int selectionEnd;
        private final int selectionStart;
        @NotNull
        private final String text;

        public CurrentTextAndSelection(int i10, int i11, @NotNull String text, @NotNull String editId) {
            Intrinsics.checkNotNullParameter(text, "text");
            Intrinsics.checkNotNullParameter(editId, "editId");
            this.selectionStart = i10;
            this.selectionEnd = i11;
            this.text = text;
            this.editId = editId;
        }

        public static /* synthetic */ CurrentTextAndSelection copy$default(CurrentTextAndSelection currentTextAndSelection, int i10, int i11, String str, String str2, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                i10 = currentTextAndSelection.selectionStart;
            }
            if ((i12 & 2) != 0) {
                i11 = currentTextAndSelection.selectionEnd;
            }
            if ((i12 & 4) != 0) {
                str = currentTextAndSelection.text;
            }
            if ((i12 & 8) != 0) {
                str2 = currentTextAndSelection.editId;
            }
            return currentTextAndSelection.copy(i10, i11, str, str2);
        }

        public final int component1() {
            return this.selectionStart;
        }

        public final int component2() {
            return this.selectionEnd;
        }

        @NotNull
        public final String component3() {
            return this.text;
        }

        @NotNull
        public final String component4() {
            return this.editId;
        }

        @NotNull
        public final CurrentTextAndSelection copy(int i10, int i11, @NotNull String text, @NotNull String editId) {
            Intrinsics.checkNotNullParameter(text, "text");
            Intrinsics.checkNotNullParameter(editId, "editId");
            return new CurrentTextAndSelection(i10, i11, text, editId);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof CurrentTextAndSelection) {
                CurrentTextAndSelection currentTextAndSelection = (CurrentTextAndSelection) obj;
                return this.selectionStart == currentTextAndSelection.selectionStart && this.selectionEnd == currentTextAndSelection.selectionEnd && Intrinsics.areEqual(this.text, currentTextAndSelection.text) && Intrinsics.areEqual(this.editId, currentTextAndSelection.editId);
            }
            return false;
        }

        @NotNull
        public final String getEditId() {
            return this.editId;
        }

        public final int getSelectionEnd() {
            return this.selectionEnd;
        }

        public final int getSelectionStart() {
            return this.selectionStart;
        }

        @NotNull
        public final String getText() {
            return this.text;
        }

        public int hashCode() {
            return (((((Integer.hashCode(this.selectionStart) * 31) + Integer.hashCode(this.selectionEnd)) * 31) + this.text.hashCode()) * 31) + this.editId.hashCode();
        }

        @NotNull
        public String toString() {
            int i10 = this.selectionStart;
            int i11 = this.selectionEnd;
            String str = this.text;
            String str2 = this.editId;
            return "CurrentTextAndSelection(selectionStart=" + i10 + ", selectionEnd=" + i11 + ", text=" + str + ", editId=" + str2 + ")";
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ChatInputRootView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$1(ChatInputRootView chatInputRootView) {
        ChatInputListener chatInputListener = chatInputRootView.listener;
        if (chatInputListener != null) {
            chatInputListener.onRequestSend();
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$10(ChatInputRootView chatInputRootView, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        MutableStateFlow mutableStateFlow = chatInputRootView.currentLayoutFlow;
        mutableStateFlow.setValue(Integer.valueOf(((Number) mutableStateFlow.getValue()).intValue() + 1));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$2(ChatInputRootView chatInputRootView, int i10, int i11) {
        chatInputRootView.currentTextFlow.setValue(new CurrentTextAndSelection(i10, i11, String.valueOf(chatInputRootView.editText.getText()), chatInputRootView.lastEditId));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$3(ChatInputRootView chatInputRootView, View view, boolean z10) {
        if (z10) {
            ChatInputListener chatInputListener = chatInputRootView.listener;
            if (chatInputListener != null) {
                chatInputListener.onFocus(chatInputRootView.editText.getSelectionStart(), chatInputRootView.editText.getSelectionStart());
                return;
            }
            return;
        }
        ChatInputListener chatInputListener2 = chatInputRootView.listener;
        if (chatInputListener2 != null) {
            chatInputListener2.onEndBlur(String.valueOf(chatInputRootView.editText.getText()));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ContentInfoCompat _init_$lambda$8(ChatInputRootView chatInputRootView, final Context context, View view, ContentInfoCompat payload) {
        boolean z10;
        ChatInputListener chatInputListener;
        Intrinsics.checkNotNullParameter(view, "<unused var>");
        Intrinsics.checkNotNullParameter(payload, "payload");
        Pair i10 = payload.i(new Predicate() { // from class: com.discord.chat.input.views.g
            @Override // androidx.core.util.Predicate
            public final boolean test(Object obj) {
                return ChatInputRootView.f(context, (ClipData.Item) obj);
            }
        });
        Intrinsics.checkNotNullExpressionValue(i10, "partition(...)");
        ContentInfoCompat contentInfoCompat = (ContentInfoCompat) i10.first;
        ContentInfoCompat contentInfoCompat2 = (ContentInfoCompat) i10.second;
        if (contentInfoCompat != null) {
            chatInputRootView.insertedPayloads.add(payload);
            int itemCount = contentInfoCompat.c().getItemCount();
            for (int i11 = 0; i11 < itemCount; i11++) {
                Uri uri = contentInfoCompat.c().getItemAt(i11).getUri();
                Intrinsics.checkNotNullExpressionValue(uri, "getUri(...)");
                ChatInputListener chatInputListener2 = chatInputRootView.listener;
                if (chatInputListener2 != null) {
                    chatInputListener2.onImageInserted(uri);
                }
            }
            z10 = true;
        } else {
            z10 = false;
        }
        if (contentInfoCompat2 != null) {
            Editable text = chatInputRootView.editText.getText();
            if (text != null && !StringsKt.k0(text)) {
                return contentInfoCompat2;
            }
            Pair i12 = contentInfoCompat2.i(new Predicate() { // from class: com.discord.chat.input.views.h
                @Override // androidx.core.util.Predicate
                public final boolean test(Object obj) {
                    return ChatInputRootView.c((ClipData.Item) obj);
                }
            });
            Intrinsics.checkNotNullExpressionValue(i12, "partition(...)");
            ContentInfoCompat contentInfoCompat3 = (ContentInfoCompat) i12.first;
            contentInfoCompat2 = (ContentInfoCompat) i12.second;
            if (contentInfoCompat3 != null) {
                if (!z10) {
                    chatInputRootView.insertedPayloads.add(payload);
                }
                int itemCount2 = contentInfoCompat3.c().getItemCount();
                for (int i13 = 0; i13 < itemCount2; i13++) {
                    Intent intent = contentInfoCompat3.c().getItemAt(i13).getIntent();
                    Intrinsics.checkNotNullExpressionValue(intent, "getIntent(...)");
                    String stringExtra = intent.getStringExtra("data");
                    if (stringExtra != null && (chatInputListener = chatInputRootView.listener) != null) {
                        chatInputListener.onCommandInserted(stringExtra);
                    }
                }
                return null;
            }
        }
        return contentInfoCompat2;
    }

    public static boolean c(ClipData.Item item) {
        if (item.getIntent() != null && Intrinsics.areEqual(item.getIntent().getType(), "application/x-discord-interaction-data") && item.getIntent().hasExtra("data")) {
            return true;
        }
        return false;
    }

    public static boolean f(Context context, ClipData.Item item) {
        String type;
        if (item.getUri() == null || (type = context.getContentResolver().getType(item.getUri())) == null || !StringsKt.P(type, "image/", false, 2, null)) {
            return false;
        }
        return true;
    }

    private final void forEachIntent(ContentInfoCompat contentInfoCompat, Function1<? super Intent, Unit> function1) {
        int itemCount = contentInfoCompat.c().getItemCount();
        for (int i10 = 0; i10 < itemCount; i10++) {
            Intent intent = contentInfoCompat.c().getItemAt(i10).getIntent();
            Intrinsics.checkNotNullExpressionValue(intent, "getIntent(...)");
            function1.invoke(intent);
        }
    }

    private final void forEachUri(ContentInfoCompat contentInfoCompat, Function1<? super Uri, Unit> function1) {
        int itemCount = contentInfoCompat.c().getItemCount();
        for (int i10 = 0; i10 < itemCount; i10++) {
            Uri uri = contentInfoCompat.c().getItemAt(i10).getUri();
            Intrinsics.checkNotNullExpressionValue(uri, "getUri(...)");
            function1.invoke(uri);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit lineHeightMeasurer$lambda$0(ChatInputRootView chatInputRootView, int i10) {
        ChatInputListener chatInputListener = chatInputRootView.listener;
        if (chatInputListener != null) {
            chatInputListener.onContentSizeChange((int) SizeUtilsKt.getPxToDp(chatInputRootView.getWidth()), (int) SizeUtilsKt.getPxToDp(i10));
        }
        return Unit.f32008a;
    }

    public static /* synthetic */ void setSelection$default(ChatInputRootView chatInputRootView, int i10, int i11, int i12, Object obj) {
        if ((i12 & 2) != 0) {
            i11 = i10;
        }
        chatInputRootView.setSelection(i10, i11);
    }

    private final void updateChatNodes(List<ChatInputNode> list, int i10) {
        boolean z10;
        List<ChatInputNode> list2 = list;
        ArrayList<ChatInputNode> arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (ChatInputNode chatInputNode : list2) {
            arrayList.add(ChatInputNode.copy$default(chatInputNode, 0, chatInputNode.getLocation() + i10, 0, null, false, null, false, 125, null));
        }
        for (ChatInputNode chatInputNode2 : arrayList) {
            Editable editableText = this.editText.getEditableText();
            Intrinsics.checkNotNullExpressionValue(editableText, "getEditableText(...)");
            EditTextUtilsKt.setChatInputNodeStyle(editableText, chatInputNode2);
        }
        Editable editableText2 = this.editText.getEditableText();
        Intrinsics.checkNotNullExpressionValue(editableText2, "getEditableText(...)");
        boolean z11 = false;
        Object[] spans = editableText2.getSpans(0, editableText2.length(), BackgroundSpanDrawer.class);
        Intrinsics.checkNotNullExpressionValue(spans, "getSpans(...)");
        if (spans.length == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            Editable editableText3 = this.editText.getEditableText();
            Intrinsics.checkNotNullExpressionValue(editableText3, "getEditableText(...)");
            SpannableExtensionsKt.coverWithSpan(editableText3, new BackgroundSpanDrawer(this.editText));
        }
        Editable editableText4 = this.editText.getEditableText();
        Intrinsics.checkNotNullExpressionValue(editableText4, "getEditableText(...)");
        Object[] spans2 = editableText4.getSpans(0, editableText4.length(), SelectionGuardSpanWatcher.class);
        Intrinsics.checkNotNullExpressionValue(spans2, "getSpans(...)");
        if (spans2.length == 0) {
            z11 = true;
        }
        if (z11) {
            Editable editableText5 = this.editText.getEditableText();
            Intrinsics.checkNotNullExpressionValue(editableText5, "getEditableText(...)");
            SpannableExtensionsKt.coverWithSpan(editableText5, new SelectionGuardSpanWatcher());
        }
    }

    static /* synthetic */ void updateChatNodes$default(ChatInputRootView chatInputRootView, List list, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            i10 = 0;
        }
        chatInputRootView.updateChatNodes(list, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void updateHintEllipsis() {
        if (this.editText.length() == 0) {
            EditTextUtilsKt.addEllipsizedHint$default(this.editText, this.editTextHint, null, 2, null);
        } else {
            EditTextUtilsKt.removeEllipsizedHint(this.editText, this.editTextMaxLines);
        }
    }

    public final void backspace() {
        this.editText.dispatchKeyEvent(new KeyEvent(0, 67));
    }

    public final void clearAndApplyChatNodes(String str, @NotNull List<ChatInputNode> chatInputNodes) {
        Intrinsics.checkNotNullParameter(chatInputNodes, "chatInputNodes");
        if (!Intrinsics.areEqual(this.lastEditId, str) && str != null) {
            return;
        }
        Editable editableText = this.editText.getEditableText();
        DCDInputSpan[] dCDInputSpanArr = (DCDInputSpan[]) editableText.getSpans(0, editableText.length(), DCDInputSpan.class);
        if (dCDInputSpanArr != null) {
            for (DCDInputSpan dCDInputSpan : dCDInputSpanArr) {
                editableText.removeSpan(dCDInputSpan);
            }
        }
        updateChatNodes$default(this, chatInputNodes, 0, 2, null);
    }

    public final void clearInputFocus() {
        this.editText.clearFocus();
    }

    public final String getHint() {
        CharSequence hint = this.editText.getHint();
        if (hint != null) {
            return hint.toString();
        }
        return null;
    }

    public final int getHintTextColor() {
        return this.editText.getCurrentHintTextColor();
    }

    public final Integer getLineCount() {
        Layout layout = this.editText.getLayout();
        if (layout != null) {
            return Integer.valueOf(layout.getLineCount());
        }
        return null;
    }

    public final ChatInputListener getListener() {
        return this.listener;
    }

    @NotNull
    public final String getText() {
        return String.valueOf(this.editText.getText());
    }

    public final int getTextColor() {
        return this.editText.getCurrentTextColor();
    }

    public final boolean isCursorVisible() {
        return this.editText.isCursorVisible();
    }

    public final boolean isEditTextEnabled() {
        return this.editText.isEnabled();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        rs.g.y(rs.g.C(rs.g.k(this.currentTextFlow, 100L), new ChatInputRootView$onAttachedToWindow$1(this, null)), CoroutineViewUtilsKt.getAttachedScope(this));
        rs.g.y(rs.g.C(rs.g.k(this.currentLayoutFlow, 32L), new ChatInputRootView$onAttachedToWindow$2(this, null)), CoroutineViewUtilsKt.getAttachedScope(this));
    }

    @Override // com.discord.keyboard.KeyboardEvent
    public void onKeyboardStateChanged(boolean z10) {
        Job d10;
        Job job = this.blurJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        if (!z10) {
            d10 = os.i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new ChatInputRootView$onKeyboardStateChanged$1(this, null), 3, null);
            this.blurJob = d10;
        }
    }

    public final void replaceRange(int i10, int i11, @NotNull String text, @NotNull List<ChatInputNode> styleBlocks, boolean z10, String str) {
        int i12;
        int i13;
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(styleBlocks, "styleBlocks");
        if (!Intrinsics.areEqual(str, this.lastEditId) && str != null) {
            return;
        }
        Editable text2 = this.editText.getText();
        if (text2 != null) {
            i12 = text2.length();
        } else {
            i12 = 0;
        }
        if (i10 <= i12 && (i13 = i11 + i10) <= i12) {
            this.editText.getEditableText().replace(i10, i13, text);
            updateChatNodes(styleBlocks, i10);
        }
    }

    public final boolean requestInputFocus() {
        return this.editText.requestFocus();
    }

    public final void setCursorVisible(boolean z10) {
        this.editText.setCursorVisible(z10);
    }

    public final void setEditTextEnabled(boolean z10) {
        this.editText.setEnabled(z10);
    }

    public final void setHint(String str) {
        this.editText.setHint(str);
        this.editTextHint = str;
        updateHintEllipsis();
    }

    public final void setHintTextColor(int i10) {
        this.editText.setHintTextColor(i10);
    }

    public final void setListener(ChatInputListener chatInputListener) {
        this.listener = chatInputListener;
    }

    public final void setNoExtractUI(boolean z10) {
        this.editText.setNoExtractUI(z10);
    }

    public final void setSelection(int i10, int i11) {
        this.editText.setSelection(i10, i11);
    }

    public final void setText(@NotNull String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.editText.setText(value);
    }

    public final void setTextColor(int i10) {
        this.editText.setTextColor(i10);
    }

    public final void showKeyboard(@NotNull Window window) {
        Intrinsics.checkNotNullParameter(window, "window");
        KeyboardExtensionsKt.showKeyboard(this.editText, window);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ChatInputRootView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ ChatInputRootView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatInputRootView(@NotNull final Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        ChatInputRootViewBinding inflate = ChatInputRootViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.lineHeightMeasurer = new ChatInputRootViewMeasurer(this, new Function1() { // from class: com.discord.chat.input.views.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit lineHeightMeasurer$lambda$0;
                lineHeightMeasurer$lambda$0 = ChatInputRootView.lineHeightMeasurer$lambda$0(ChatInputRootView.this, ((Integer) obj).intValue());
                return lineHeightMeasurer$lambda$0;
            }
        });
        DCDChatInput chatInputEditText = inflate.chatInputEditText;
        Intrinsics.checkNotNullExpressionValue(chatInputEditText, "chatInputEditText");
        this.editText = chatInputEditText;
        this.insertedPayloads = new LinkedHashSet();
        this.editTextHint = chatInputEditText.getHint();
        this.editTextMaxLines = chatInputEditText.getMaxLines();
        String uuid = UUID.randomUUID().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
        this.lastEditId = uuid;
        this.currentTextFlow = l0.a(null);
        this.currentLayoutFlow = l0.a(0);
        DiscordFontUtilsKt.setDiscordFont(chatInputEditText, DiscordFont.PrimaryMedium);
        SetTextSizeSpKt.setTextSizeSp(chatInputEditText, 16.0f);
        chatInputEditText.setOnRequestSend(new Function0() { // from class: com.discord.chat.input.views.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit _init_$lambda$1;
                _init_$lambda$1 = ChatInputRootView._init_$lambda$1(ChatInputRootView.this);
                return _init_$lambda$1;
            }
        });
        chatInputEditText.setOnSelectionChanged(new Function2() { // from class: com.discord.chat.input.views.c
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit _init_$lambda$2;
                _init_$lambda$2 = ChatInputRootView._init_$lambda$2(ChatInputRootView.this, ((Integer) obj).intValue(), ((Integer) obj2).intValue());
                return _init_$lambda$2;
            }
        });
        chatInputEditText.setOnFocusChangeListener(new View.OnFocusChangeListener() { // from class: com.discord.chat.input.views.d
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                ChatInputRootView._init_$lambda$3(ChatInputRootView.this, view, z10);
            }
        });
        h0.E0(chatInputEditText, new String[]{"image/*"}, new w() { // from class: com.discord.chat.input.views.e
            @Override // androidx.core.view.w
            public final ContentInfoCompat a(View view, ContentInfoCompat contentInfoCompat) {
                ContentInfoCompat _init_$lambda$8;
                _init_$lambda$8 = ChatInputRootView._init_$lambda$8(ChatInputRootView.this, context, view, contentInfoCompat);
                return _init_$lambda$8;
            }
        });
        chatInputEditText.addTextChangedListener(new TextWatcher() { // from class: com.discord.chat.input.views.ChatInputRootView$special$$inlined$doAfterTextChanged$1
            @Override // android.text.TextWatcher
            public void afterTextChanged(Editable editable) {
                MutableStateFlow mutableStateFlow;
                DCDChatInput dCDChatInput;
                DCDChatInput dCDChatInput2;
                String str;
                ChatInputRootViewMeasurer chatInputRootViewMeasurer;
                String valueOf = String.valueOf(editable);
                ChatInputRootView chatInputRootView = ChatInputRootView.this;
                String uuid2 = UUID.randomUUID().toString();
                Intrinsics.checkNotNullExpressionValue(uuid2, "toString(...)");
                chatInputRootView.lastEditId = uuid2;
                mutableStateFlow = ChatInputRootView.this.currentTextFlow;
                dCDChatInput = ChatInputRootView.this.editText;
                int selectionStart = dCDChatInput.getSelectionStart();
                dCDChatInput2 = ChatInputRootView.this.editText;
                int selectionEnd = dCDChatInput2.getSelectionEnd();
                str = ChatInputRootView.this.lastEditId;
                mutableStateFlow.setValue(new ChatInputRootView.CurrentTextAndSelection(selectionStart, selectionEnd, valueOf, str));
                chatInputRootViewMeasurer = ChatInputRootView.this.lineHeightMeasurer;
                chatInputRootViewMeasurer.measure(false);
                ChatInputRootView.this.updateHintEllipsis();
            }

            @Override // android.text.TextWatcher
            public void beforeTextChanged(CharSequence charSequence, int i11, int i12, int i13) {
            }

            @Override // android.text.TextWatcher
            public void onTextChanged(CharSequence charSequence, int i11, int i12, int i13) {
            }
        });
        chatInputEditText.addTextChangedListener(new DeleteNodeOnBackspaceTextWatcher());
        addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.chat.input.views.f
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
                ChatInputRootView._init_$lambda$10(ChatInputRootView.this, view, i11, i12, i13, i14, i15, i16, i17, i18);
            }
        });
    }
}
