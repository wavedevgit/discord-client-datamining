package androidx.transition;

import android.view.View;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c0 {

    /* renamed from: b  reason: collision with root package name */
    public View f5259b;

    /* renamed from: a  reason: collision with root package name */
    public final Map f5258a = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final ArrayList f5260c = new ArrayList();

    public c0(View view) {
        this.f5259b = view;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c0) {
            c0 c0Var = (c0) obj;
            if (this.f5259b == c0Var.f5259b && this.f5258a.equals(c0Var.f5258a)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f5259b.hashCode() * 31) + this.f5258a.hashCode();
    }

    public String toString() {
        String str = (("TransitionValues@" + Integer.toHexString(hashCode()) + ":\n") + "    view = " + this.f5259b + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE) + "    values:";
        for (String str2 : this.f5258a.keySet()) {
            str = str + "    " + str2 + ": " + this.f5258a.get(str2) + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;
        }
        return str;
    }
}
