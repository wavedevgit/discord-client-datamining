package androidx.transition;

import android.view.View;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c0 {

    /* renamed from: b  reason: collision with root package name */
    public View f5228b;

    /* renamed from: a  reason: collision with root package name */
    public final Map f5227a = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    final ArrayList f5229c = new ArrayList();

    public c0(View view) {
        this.f5228b = view;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c0) {
            c0 c0Var = (c0) obj;
            if (this.f5228b == c0Var.f5228b && this.f5227a.equals(c0Var.f5227a)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f5228b.hashCode() * 31) + this.f5227a.hashCode();
    }

    public String toString() {
        String str = (("TransitionValues@" + Integer.toHexString(hashCode()) + ":\n") + "    view = " + this.f5228b + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE) + "    values:";
        for (String str2 : this.f5227a.keySet()) {
            str = str + "    " + str2 + ": " + this.f5227a.get(str2) + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;
        }
        return str;
    }
}
