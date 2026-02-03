package com.google.android.gms.common;

import android.os.RemoteException;
import android.util.Log;
import gf.s0;
import gf.s1;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class u extends s1 {

    /* renamed from: c  reason: collision with root package name */
    private final int f13431c;

    /* JADX INFO: Access modifiers changed from: protected */
    public u(byte[] bArr) {
        boolean z10;
        if (bArr.length == 25) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.a(z10);
        this.f13431c = Arrays.hashCode(bArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static byte[] f(String str) {
        try {
            return str.getBytes("ISO-8859-1");
        } catch (UnsupportedEncodingException e10) {
            throw new AssertionError(e10);
        }
    }

    @Override // gf.s0
    public final int a() {
        return this.f13431c;
    }

    @Override // gf.s0
    public final sf.a b() {
        return sf.b.S0(h());
    }

    public final boolean equals(Object obj) {
        sf.a b10;
        if (obj != null && (obj instanceof s0)) {
            try {
                s0 s0Var = (s0) obj;
                if (s0Var.a() != this.f13431c || (b10 = s0Var.b()) == null) {
                    return false;
                }
                return Arrays.equals(h(), (byte[]) sf.b.h(b10));
            } catch (RemoteException e10) {
                Log.e("GoogleCertificates", "Failed to get Google certificates from remote", e10);
            }
        }
        return false;
    }

    abstract byte[] h();

    public final int hashCode() {
        return this.f13431c;
    }
}
