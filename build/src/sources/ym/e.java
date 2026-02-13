package ym;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f56218a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static WeakReference f56219b;

    private e() {
    }

    public final c a() {
        WeakReference weakReference = f56219b;
        if (weakReference != null) {
            return (c) weakReference.get();
        }
        return null;
    }

    public final void b(c view) {
        Intrinsics.checkNotNullParameter(view, "view");
        f56219b = new WeakReference(view);
    }
}
