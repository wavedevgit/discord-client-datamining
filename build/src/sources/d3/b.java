package d3;

import android.text.Editable;
import androidx.emoji2.text.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends Editable.Factory {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f21645a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile Editable.Factory f21646b;

    /* renamed from: c  reason: collision with root package name */
    private static Class f21647c;

    private b() {
        try {
            f21647c = Class.forName("android.text.DynamicLayout$ChangeWatcher", false, b.class.getClassLoader());
        } catch (Throwable unused) {
        }
    }

    public static Editable.Factory getInstance() {
        if (f21646b == null) {
            synchronized (f21645a) {
                try {
                    if (f21646b == null) {
                        f21646b = new b();
                    }
                } finally {
                }
            }
        }
        return f21646b;
    }

    @Override // android.text.Editable.Factory
    public Editable newEditable(CharSequence charSequence) {
        Class cls = f21647c;
        if (cls != null) {
            return n.c(cls, charSequence);
        }
        return super.newEditable(charSequence);
    }
}
