package com.google.android.gms.auth.api.signin;

import android.content.Context;
import com.google.android.gms.common.j;
import com.google.android.gms.dynamite.DynamiteModule;
import com.google.android.gms.tasks.Task;
import ef.d;
import gf.p;
import ze.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends ef.d {

    /* renamed from: k  reason: collision with root package name */
    private static final f f14749k = new f(null);

    /* renamed from: l  reason: collision with root package name */
    static int f14750l = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, GoogleSignInOptions googleSignInOptions) {
        super(context, ue.a.f50257b, googleSignInOptions, new d.a.C0292a().c(new ff.a()).a());
    }

    private final synchronized int E() {
        int i10;
        try {
            i10 = f14750l;
            if (i10 == 1) {
                Context u10 = u();
                com.google.android.gms.common.f m10 = com.google.android.gms.common.f.m();
                int h10 = m10.h(u10, j.f14821a);
                if (h10 == 0) {
                    i10 = 4;
                    f14750l = 4;
                } else if (m10.b(u10, h10, null) == null && DynamiteModule.a(u10, "com.google.android.gms.auth.api.fallback") != 0) {
                    i10 = 3;
                    f14750l = 3;
                } else {
                    i10 = 2;
                    f14750l = 2;
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return i10;
    }

    public Task C() {
        boolean z10;
        ef.e m10 = m();
        Context u10 = u();
        if (E() == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        return p.b(o.a(m10, u10, z10));
    }

    public Task D() {
        boolean z10;
        ef.e m10 = m();
        Context u10 = u();
        if (E() == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        return p.b(o.b(m10, u10, z10));
    }
}
