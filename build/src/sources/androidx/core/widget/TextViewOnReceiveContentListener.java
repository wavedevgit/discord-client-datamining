package androidx.core.widget;

import android.content.ClipData;
import android.content.Context;
import android.text.Editable;
import android.text.Selection;
import android.text.Spanned;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import androidx.core.view.ContentInfoCompat;
import androidx.core.view.w;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TextViewOnReceiveContentListener implements w {
    private static CharSequence b(Context context, ClipData.Item item, int i10) {
        if ((i10 & 1) != 0) {
            CharSequence coerceToText = item.coerceToText(context);
            if (coerceToText instanceof Spanned) {
                return coerceToText.toString();
            }
            return coerceToText;
        }
        return item.coerceToStyledText(context);
    }

    private static void c(Editable editable, CharSequence charSequence) {
        int selectionStart = Selection.getSelectionStart(editable);
        int selectionEnd = Selection.getSelectionEnd(editable);
        int max = Math.max(0, Math.min(selectionStart, selectionEnd));
        int max2 = Math.max(0, Math.max(selectionStart, selectionEnd));
        Selection.setSelection(editable, max2);
        editable.replace(max, max2, charSequence);
    }

    @Override // androidx.core.view.w
    public ContentInfoCompat a(View view, ContentInfoCompat contentInfoCompat) {
        if (Log.isLoggable("ReceiveContent", 3)) {
            Log.d("ReceiveContent", "onReceive: " + contentInfoCompat);
        }
        if (contentInfoCompat.g() == 2) {
            return contentInfoCompat;
        }
        ClipData c10 = contentInfoCompat.c();
        int e10 = contentInfoCompat.e();
        TextView textView = (TextView) view;
        Editable editable = (Editable) textView.getText();
        Context context = textView.getContext();
        boolean z10 = false;
        for (int i10 = 0; i10 < c10.getItemCount(); i10++) {
            CharSequence b10 = b(context, c10.getItemAt(i10), e10);
            if (b10 != null) {
                if (!z10) {
                    c(editable, b10);
                    z10 = true;
                } else {
                    editable.insert(Selection.getSelectionEnd(editable), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                    editable.insert(Selection.getSelectionEnd(editable), b10);
                }
            }
        }
        return null;
    }
}
