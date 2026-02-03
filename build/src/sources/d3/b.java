package d3;

import android.text.Editable;
import androidx.emoji2.text.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends Editable.Factory {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f21221a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile Editable.Factory f21222b;

    /* renamed from: c  reason: collision with root package name */
    private static Class f21223c;

    private b() {
        try {
            f21223c = Class.forName("android.text.DynamicLayout$ChangeWatcher", false, b.class.getClassLoader());
        } catch (Throwable unused) {
        }
    }

    public static Editable.Factory getInstance() {
        if (f21222b == null) {
            synchronized (f21221a) {
                try {
                    if (f21222b == null) {
                        f21222b = new b();
                    }
                } finally {
                }
            }
        }
        return f21222b;
    }

    @Override // android.text.Editable.Factory
    public Editable newEditable(CharSequence charSequence) {
        Class cls = f21223c;
        if (cls != null) {
            return n.c(cls, charSequence);
        }
        return super.newEditable(charSequence);
    }
}
