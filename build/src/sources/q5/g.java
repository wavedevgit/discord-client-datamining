package q5;

import androidx.collection.LruCache;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g {

    /* renamed from: b  reason: collision with root package name */
    private static final g f47007b = new g();

    /* renamed from: a  reason: collision with root package name */
    private final LruCache f47008a = new LruCache(20);

    g() {
    }

    public static g b() {
        return f47007b;
    }

    public l5.i a(String str) {
        if (str == null) {
            return null;
        }
        return (l5.i) this.f47008a.d(str);
    }

    public void c(String str, l5.i iVar) {
        if (str == null) {
            return;
        }
        this.f47008a.f(str, iVar);
    }
}
