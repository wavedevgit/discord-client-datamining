package com.google.android.gms.common;

import android.os.RemoteException;
import android.util.Log;
import gf.o1;
import gf.p1;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class y extends o1 {

    /* renamed from: c  reason: collision with root package name */
    private final int f13821c;

    /* JADX INFO: Access modifiers changed from: protected */
    public y(byte[] bArr) {
        boolean z10;
        if (bArr.length == 25) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.a(z10);
        this.f13821c = Arrays.hashCode(bArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static byte[] h(String str) {
        try {
            return str.getBytes("ISO-8859-1");
        } catch (UnsupportedEncodingException e10) {
            throw new AssertionError(e10);
        }
    }

    @Override // gf.p1
    public final sf.a b() {
        return sf.b.W0(f());
    }

    public final boolean equals(Object obj) {
        sf.a b10;
        if (!(obj instanceof p1)) {
            return false;
        }
        try {
            p1 p1Var = (p1) obj;
            if (p1Var.k() != this.f13821c || (b10 = p1Var.b()) == null) {
                return false;
            }
            return Arrays.equals(f(), (byte[]) sf.b.h(b10));
        } catch (RemoteException e10) {
            Log.e("GoogleCertificates", "Failed to get Google certificates from remote", e10);
            return false;
        }
    }

    abstract byte[] f();

    public final int hashCode() {
        return this.f13821c;
    }

    @Override // gf.p1
    public final int k() {
        return this.f13821c;
    }
}
