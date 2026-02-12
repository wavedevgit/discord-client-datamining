package mm;

import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f36552a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f36553b;

    static {
        boolean z10;
        if (Build.VERSION.SDK_INT < 30) {
            z10 = true;
        } else {
            z10 = false;
        }
        f36553b = z10;
    }

    private a() {
    }

    public final boolean a() {
        return f36553b;
    }
}
