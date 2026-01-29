package com.facebook.react.views.textinput;

import android.text.Editable;
import android.view.KeyEvent;
import android.view.inputmethod.InputConnection;
import android.view.inputmethod.InputConnectionWrapper;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\r\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000 \"2\u00020\u0001:\u0001\"B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\b\u0010\u0010\u001a\u00020\rH\u0016J\b\u0010\u0011\u001a\u00020\rH\u0016J\u0018\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0016J\u0018\u0010\u0017\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0016J\u0018\u0010\u0018\u001a\u00020\r2\u0006\u0010\u0019\u001a\u00020\u00162\u0006\u0010\u001a\u001a\u00020\u0016H\u0016J\u0010\u0010\u001b\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u001dH\u0016J\u0010\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u000fH\u0002J\u0010\u0010!\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u000fH\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006#"}, d2 = {"Lcom/facebook/react/views/textinput/ReactEditTextInputConnectionWrapper;", "Landroid/view/inputmethod/InputConnectionWrapper;", "target", "Landroid/view/inputmethod/InputConnection;", "reactContext", "Lcom/facebook/react/bridge/ReactContext;", "editText", "Lcom/facebook/react/views/textinput/ReactEditText;", "eventDispatcher", "Lcom/facebook/react/uimanager/events/EventDispatcher;", "<init>", "(Landroid/view/inputmethod/InputConnection;Lcom/facebook/react/bridge/ReactContext;Lcom/facebook/react/views/textinput/ReactEditText;Lcom/facebook/react/uimanager/events/EventDispatcher;)V", "isBatchEdit", "", "key", "", "beginBatchEdit", "endBatchEdit", "setComposingText", "text", "", "newCursorPosition", "", "commitText", "deleteSurroundingText", "beforeLength", "afterLength", "sendKeyEvent", "event", "Landroid/view/KeyEvent;", "dispatchKeyEventOrEnqueue", "", "inputKey", "dispatchKeyEvent", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactEditTextInputConnectionWrapper extends InputConnectionWrapper {
    @NotNull
    public static final String BACKSPACE_KEY_VALUE = "Backspace";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String ENTER_KEY_VALUE = "Enter";
    @NotNull
    public static final String NEWLINE_RAW_VALUE = "\n";
    @NotNull
    private final ReactEditText editText;
    @NotNull
    private final EventDispatcher eventDispatcher;
    private boolean isBatchEdit;
    private String key;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/facebook/react/views/textinput/ReactEditTextInputConnectionWrapper$Companion;", "", "<init>", "()V", "NEWLINE_RAW_VALUE", "", "BACKSPACE_KEY_VALUE", "ENTER_KEY_VALUE", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactEditTextInputConnectionWrapper(@NotNull InputConnection target, @NotNull ReactContext reactContext, @NotNull ReactEditText editText, @NotNull EventDispatcher eventDispatcher) {
        super(target, false);
        Intrinsics.checkNotNullParameter(target, "target");
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(editText, "editText");
        Intrinsics.checkNotNullParameter(eventDispatcher, "eventDispatcher");
        this.editText = editText;
        this.eventDispatcher = eventDispatcher;
    }

    private final void dispatchKeyEvent(String str) {
        if (Intrinsics.areEqual(str, NEWLINE_RAW_VALUE)) {
            str = ENTER_KEY_VALUE;
        }
        this.eventDispatcher.dispatchEvent(new ReactTextInputKeyPressEvent(UIManagerHelper.getSurfaceId(this.editText), this.editText.getId(), str));
    }

    private final void dispatchKeyEventOrEnqueue(String str) {
        if (this.isBatchEdit) {
            this.key = str;
        } else {
            dispatchKeyEvent(str);
        }
    }

    @Override // android.view.inputmethod.InputConnectionWrapper, android.view.inputmethod.InputConnection
    public boolean beginBatchEdit() {
        this.isBatchEdit = true;
        return super.beginBatchEdit();
    }

    @Override // android.view.inputmethod.InputConnectionWrapper, android.view.inputmethod.InputConnection
    public boolean commitText(@NotNull CharSequence text, int i10) {
        Intrinsics.checkNotNullParameter(text, "text");
        String obj = text.toString();
        if (obj.length() <= 2) {
            if (obj.length() == 0) {
                obj = BACKSPACE_KEY_VALUE;
            }
            dispatchKeyEventOrEnqueue(obj);
        }
        return super.commitText(text, i10);
    }

    @Override // android.view.inputmethod.InputConnectionWrapper, android.view.inputmethod.InputConnection
    public boolean deleteSurroundingText(int i10, int i11) {
        dispatchKeyEvent(BACKSPACE_KEY_VALUE);
        return super.deleteSurroundingText(i10, i11);
    }

    @Override // android.view.inputmethod.InputConnectionWrapper, android.view.inputmethod.InputConnection
    public boolean endBatchEdit() {
        this.isBatchEdit = false;
        String str = this.key;
        if (str != null) {
            dispatchKeyEvent(str);
            this.key = null;
        }
        return super.endBatchEdit();
    }

    @Override // android.view.inputmethod.InputConnectionWrapper, android.view.inputmethod.InputConnection
    public boolean sendKeyEvent(@NotNull KeyEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (event.getAction() == 0) {
            int unicodeChar = event.getUnicodeChar();
            boolean z10 = false;
            if (48 <= unicodeChar && unicodeChar < 58) {
                z10 = true;
            }
            int keyCode = event.getKeyCode();
            if (keyCode != 66) {
                if (keyCode != 67) {
                    if (z10) {
                        dispatchKeyEvent(String.valueOf(event.getNumber()));
                    }
                } else {
                    dispatchKeyEvent(BACKSPACE_KEY_VALUE);
                }
            } else {
                dispatchKeyEvent(ENTER_KEY_VALUE);
            }
        }
        return super.sendKeyEvent(event);
    }

    @Override // android.view.inputmethod.InputConnectionWrapper, android.view.inputmethod.InputConnection
    public boolean setComposingText(@NotNull CharSequence text, int i10) {
        boolean z10;
        String str;
        Character ch2;
        Intrinsics.checkNotNullParameter(text, "text");
        int selectionStart = this.editText.getSelectionStart();
        int selectionEnd = this.editText.getSelectionEnd();
        boolean composingText = super.setComposingText(text, i10);
        int selectionStart2 = this.editText.getSelectionStart();
        boolean z11 = false;
        if (selectionStart == selectionEnd) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (selectionStart2 == selectionStart) {
            z11 = true;
        }
        if (selectionStart2 >= selectionStart && selectionStart2 > 0 && (z10 || !z11)) {
            Editable text2 = this.editText.getText();
            if (text2 != null) {
                ch2 = Character.valueOf(text2.charAt(selectionStart2 - 1));
            } else {
                ch2 = null;
            }
            str = String.valueOf(ch2);
        } else {
            str = BACKSPACE_KEY_VALUE;
        }
        dispatchKeyEventOrEnqueue(str);
        return composingText;
    }
}
