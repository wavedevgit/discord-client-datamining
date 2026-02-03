package om;

import android.widget.EditText;
import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f44546a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static WeakReference f44547b;

    private a() {
    }

    public final void a() {
        EditText editText;
        WeakReference weakReference = f44547b;
        if (weakReference != null && (editText = (EditText) weakReference.get()) != null) {
            gm.c.e(editText);
        }
    }

    public final EditText b() {
        WeakReference weakReference = f44547b;
        if (weakReference != null) {
            return (EditText) weakReference.get();
        }
        return null;
    }

    public final void c(EditText textInput) {
        Intrinsics.checkNotNullParameter(textInput, "textInput");
        f44547b = new WeakReference(textInput);
    }
}
