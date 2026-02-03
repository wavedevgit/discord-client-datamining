package com.google.android.gms.internal.play_billing;

import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 {

    /* renamed from: b  reason: collision with root package name */
    private static volatile e1 f14849b;

    /* renamed from: c  reason: collision with root package name */
    static final e1 f14850c = new e1(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f14851a = Collections.EMPTY_MAP;

    e1(boolean z10) {
    }

    public static e1 a() {
        e1 e1Var = f14849b;
        if (e1Var != null) {
            return e1Var;
        }
        synchronized (e1.class) {
            try {
                e1 e1Var2 = f14849b;
                if (e1Var2 != null) {
                    return e1Var2;
                }
                e1 a10 = m1.a(e1.class);
                f14849b = a10;
                return a10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final p1 b(v2 v2Var, int i10) {
        android.support.v4.media.session.b.a(this.f14851a.get(new d1(v2Var, i10)));
        return null;
    }
}
