package d3;

import android.text.Editable;
import androidx.emoji2.text.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends Editable.Factory {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f20484a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile Editable.Factory f20485b;

    /* renamed from: c  reason: collision with root package name */
    private static Class f20486c;

    private b() {
        try {
            f20486c = Class.forName("android.text.DynamicLayout$ChangeWatcher", false, b.class.getClassLoader());
        } catch (Throwable unused) {
        }
    }

    public static Editable.Factory getInstance() {
        if (f20485b == null) {
            synchronized (f20484a) {
                try {
                    if (f20485b == null) {
                        f20485b = new b();
                    }
                } finally {
                }
            }
        }
        return f20485b;
    }

    @Override // android.text.Editable.Factory
    public Editable newEditable(CharSequence charSequence) {
        Class cls = f20486c;
        if (cls != null) {
            return n.c(cls, charSequence);
        }
        return super.newEditable(charSequence);
    }
}
