package ym;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f55649a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static WeakReference f55650b;

    private e() {
    }

    public final c a() {
        WeakReference weakReference = f55650b;
        if (weakReference != null) {
            return (c) weakReference.get();
        }
        return null;
    }

    public final void b(c view) {
        Intrinsics.checkNotNullParameter(view, "view");
        f55650b = new WeakReference(view);
    }
}
