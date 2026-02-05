package d3;

import android.text.Editable;
import androidx.emoji2.text.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends Editable.Factory {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f20296a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile Editable.Factory f20297b;

    /* renamed from: c  reason: collision with root package name */
    private static Class f20298c;

    private b() {
        try {
            f20298c = Class.forName("android.text.DynamicLayout$ChangeWatcher", false, b.class.getClassLoader());
        } catch (Throwable unused) {
        }
    }

    public static Editable.Factory getInstance() {
        if (f20297b == null) {
            synchronized (f20296a) {
                try {
                    if (f20297b == null) {
                        f20297b = new b();
                    }
                } finally {
                }
            }
        }
        return f20297b;
    }

    @Override // android.text.Editable.Factory
    public Editable newEditable(CharSequence charSequence) {
        Class cls = f20298c;
        if (cls != null) {
            return n.c(cls, charSequence);
        }
        return super.newEditable(charSequence);
    }
}
