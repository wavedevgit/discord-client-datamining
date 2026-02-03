package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class v {

    /* renamed from: a  reason: collision with root package name */
    private static u f15843a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static synchronized u a(Context context) {
        u uVar;
        synchronized (v.class) {
            try {
                if (f15843a == null) {
                    e1 e1Var = new e1(null);
                    e1Var.a(gi.h.a(context));
                    f15843a = e1Var.b();
                }
                uVar = f15843a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return uVar;
    }
}
