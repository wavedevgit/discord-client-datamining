package d3;

import android.text.Editable;
import androidx.emoji2.text.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends Editable.Factory {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f21432a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile Editable.Factory f21433b;

    /* renamed from: c  reason: collision with root package name */
    private static Class f21434c;

    private b() {
        try {
            f21434c = Class.forName("android.text.DynamicLayout$ChangeWatcher", false, b.class.getClassLoader());
        } catch (Throwable unused) {
        }
    }

    public static Editable.Factory getInstance() {
        if (f21433b == null) {
            synchronized (f21432a) {
                try {
                    if (f21433b == null) {
                        f21433b = new b();
                    }
                } finally {
                }
            }
        }
        return f21433b;
    }

    @Override // android.text.Editable.Factory
    public Editable newEditable(CharSequence charSequence) {
        Class cls = f21434c;
        if (cls != null) {
            return n.c(cls, charSequence);
        }
        return super.newEditable(charSequence);
    }
}
