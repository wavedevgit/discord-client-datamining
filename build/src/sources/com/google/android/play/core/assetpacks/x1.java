package com.google.android.play.core.assetpacks;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x1 {

    /* renamed from: a  reason: collision with root package name */
    private static e f16958a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static synchronized e a(Context context) {
        e eVar;
        synchronized (x1.class) {
            try {
                if (f16958a == null) {
                    k1 k1Var = new k1(null);
                    k1Var.b(new m4(ai.h.a(context)));
                    f16958a = k1Var.a();
                }
                eVar = f16958a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return eVar;
    }
}
