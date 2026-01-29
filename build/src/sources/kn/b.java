package kn;

import com.facebook.react.views.view.WindowUtilKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f33271a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f33272b;

    static {
        boolean z10;
        if (!WindowUtilKt.isEdgeToEdgeFeatureFlagOn()) {
            try {
                Class.forName("com.zoontek.rnedgetoedge.EdgeToEdgePackage");
            } catch (ClassNotFoundException unused) {
                z10 = false;
            }
        }
        z10 = true;
        f33272b = z10;
    }

    private b() {
    }

    public final boolean a() {
        return f33272b;
    }
}
