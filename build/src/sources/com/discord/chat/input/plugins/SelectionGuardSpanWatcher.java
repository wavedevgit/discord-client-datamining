package com.discord.chat.input.plugins;

import android.text.Selection;
import android.text.SpanWatcher;
import android.text.Spannable;
import com.discord.chat.input.spans.DCDNoSelectionSpan;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\f\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J,\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000bH\u0016J,\u0010\r\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000bH\u0016J<\u0010\u000e\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\u000f\u001a\u00020\u000b2\u0006\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\u0012\u001a\u00020\u000bH\u0016J)\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010\u0014\u001a\u0004\u0018\u00010\u000b2\b\u0010\u0015\u001a\u0004\u0018\u00010\u000bH\u0002¢\u0006\u0002\u0010\u0016¨\u0006\u0017"}, d2 = {"Lcom/discord/chat/input/plugins/SelectionGuardSpanWatcher;", "Landroid/text/SpanWatcher;", "<init>", "()V", "onSpanAdded", "", "text", "Landroid/text/Spannable;", "what", "", ViewProps.START, "", ViewProps.END, "onSpanRemoved", "onSpanChanged", "ostart", "oend", "nstart", "nend", "checkSelections", "selectionStart", "selectionEnd", "(Landroid/text/Spannable;Ljava/lang/Integer;Ljava/lang/Integer;)V", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSelectionGuardSpanWatcher.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SelectionGuardSpanWatcher.kt\ncom/discord/chat/input/plugins/SelectionGuardSpanWatcher\n+ 2 SpannedString.kt\nandroidx/core/text/SpannedStringKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,80:1\n34#2:81\n13472#3,2:82\n*S KotlinDebug\n*F\n+ 1 SelectionGuardSpanWatcher.kt\ncom/discord/chat/input/plugins/SelectionGuardSpanWatcher\n*L\n49#1:81\n58#1:82,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SelectionGuardSpanWatcher implements SpanWatcher {
    private final void checkSelections(Spannable spannable, Integer num, Integer num2) {
        int i10;
        int i11;
        int i12;
        boolean z10;
        if (num != null || num2 != null) {
            boolean z11 = false;
            if (num != null) {
                i10 = num.intValue();
            } else if (num2 != null) {
                i10 = num2.intValue();
            } else {
                i10 = 0;
            }
            if (num2 != null) {
                i11 = num2.intValue();
            } else if (num != null) {
                i11 = num.intValue();
            } else {
                i11 = 0;
            }
            DCDNoSelectionSpan[] dCDNoSelectionSpanArr = (DCDNoSelectionSpan[]) spannable.getSpans(i10, i11, DCDNoSelectionSpan.class);
            if (dCDNoSelectionSpanArr.length == 0) {
                return;
            }
            if (num != null) {
                i12 = num.intValue();
            } else if (num2 != null) {
                i12 = num2.intValue();
            } else {
                i12 = 0;
            }
            boolean z12 = false;
            for (DCDNoSelectionSpan dCDNoSelectionSpan : dCDNoSelectionSpanArr) {
                int spanEnd = spannable.getSpanEnd(dCDNoSelectionSpan);
                int spanStart = spannable.getSpanStart(dCDNoSelectionSpan);
                if (i12 > spanStart && i12 < spanEnd) {
                    if (spanEnd - i12 > i12 - spanStart) {
                        spanEnd = spanStart;
                    }
                    z12 = true;
                    i12 = spanEnd;
                }
            }
            if (num != null && num.intValue() != i12) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (num2 != null && num2.intValue() != i12) {
                z11 = true;
            }
            if (z12) {
                if (z11 || z10) {
                    Selection.setSelection(spannable, i12);
                }
            }
        }
    }

    @Override // android.text.SpanWatcher
    public void onSpanAdded(Spannable spannable, Object obj, int i10, int i11) {
        if (spannable != null && (obj instanceof DCDNoSelectionSpan)) {
            checkSelections(spannable, Integer.valueOf(spannable.getSpanStart(Selection.SELECTION_START)), Integer.valueOf(spannable.getSpanEnd(Selection.SELECTION_END)));
        }
    }

    @Override // android.text.SpanWatcher
    public void onSpanChanged(Spannable spannable, Object obj, int i10, int i11, int i12, int i13) {
        if (spannable != null) {
            if (Intrinsics.areEqual(obj, Selection.SELECTION_START)) {
                checkSelections(spannable, Integer.valueOf(i12), null);
            } else if (Intrinsics.areEqual(obj, Selection.SELECTION_END)) {
                checkSelections(spannable, null, Integer.valueOf(i12));
            }
        }
    }

    @Override // android.text.SpanWatcher
    public void onSpanRemoved(Spannable spannable, Object obj, int i10, int i11) {
    }
}
