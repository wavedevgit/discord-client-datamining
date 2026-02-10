package androidx.transition;

import android.view.View;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c0 {

    /* renamed from: b  reason: collision with root package name */
    public View f5376b;

    /* renamed from: a  reason: collision with root package name */
    public final Map f5375a = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final ArrayList f5377c = new ArrayList();

    public c0(View view) {
        this.f5376b = view;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c0) {
            c0 c0Var = (c0) obj;
            if (this.f5376b == c0Var.f5376b && this.f5375a.equals(c0Var.f5375a)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f5376b.hashCode() * 31) + this.f5375a.hashCode();
    }

    public String toString() {
        String str = (("TransitionValues@" + Integer.toHexString(hashCode()) + ":\n") + "    view = " + this.f5376b + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE) + "    values:";
        for (String str2 : this.f5375a.keySet()) {
            str = str + "    " + str2 + ": " + this.f5375a.get(str2) + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;
        }
        return str;
    }
}
