package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i1 {

    /* renamed from: a  reason: collision with root package name */
    private static d1 f16188a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static synchronized d1 a(Context context) {
        d1 d1Var;
        synchronized (i1.class) {
            try {
                if (f16188a == null) {
                    c1 c1Var = new c1(null);
                    c1Var.a(ji.h.a(context));
                    f16188a = c1Var.b();
                }
                d1Var = f16188a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return d1Var;
    }
}
