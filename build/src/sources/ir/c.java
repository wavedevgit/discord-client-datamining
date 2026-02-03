package ir;

import android.text.Spanned;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static boolean a(int i10, CharSequence charSequence, Object obj) {
        if ((charSequence instanceof Spanned) && ((Spanned) charSequence).getSpanEnd(obj) == i10) {
            return true;
        }
        return false;
    }

    public static boolean b(int i10, CharSequence charSequence, Object obj) {
        if ((charSequence instanceof Spanned) && ((Spanned) charSequence).getSpanStart(obj) == i10) {
            return true;
        }
        return false;
    }
}
