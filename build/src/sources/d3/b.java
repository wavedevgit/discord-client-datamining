package d3;

import android.text.Editable;
import androidx.emoji2.text.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends Editable.Factory {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f21431a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile Editable.Factory f21432b;

    /* renamed from: c  reason: collision with root package name */
    private static Class f21433c;

    private b() {
        try {
            f21433c = Class.forName("android.text.DynamicLayout$ChangeWatcher", false, b.class.getClassLoader());
        } catch (Throwable unused) {
        }
    }

    public static Editable.Factory getInstance() {
        if (f21432b == null) {
            synchronized (f21431a) {
                try {
                    if (f21432b == null) {
                        f21432b = new b();
                    }
                } finally {
                }
            }
        }
        return f21432b;
    }

    @Override // android.text.Editable.Factory
    public Editable newEditable(CharSequence charSequence) {
        Class cls = f21433c;
        if (cls != null) {
            return n.c(cls, charSequence);
        }
        return super.newEditable(charSequence);
    }
}
