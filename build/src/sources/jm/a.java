package jm;

import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f29951a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f29952b;

    static {
        boolean z10;
        if (Build.VERSION.SDK_INT < 30) {
            z10 = true;
        } else {
            z10 = false;
        }
        f29952b = z10;
    }

    private a() {
    }

    public final boolean a() {
        return f29952b;
    }
}
