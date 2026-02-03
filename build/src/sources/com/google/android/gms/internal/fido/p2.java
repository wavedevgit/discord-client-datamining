package com.google.android.gms.internal.fido;

import java.io.Serializable;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p2 extends f2 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final MessageDigest f14718d;

    /* renamed from: e  reason: collision with root package name */
    private final int f14719e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f14720i;

    /* renamed from: o  reason: collision with root package name */
    private final String f14721o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p2(String str, String str2) {
        MessageDigest a10 = a("SHA-256");
        this.f14718d = a10;
        this.f14719e = a10.getDigestLength();
        this.f14721o = "Hashing.sha256()";
        this.f14720i = b(a10);
    }

    private static MessageDigest a(String str) {
        try {
            return MessageDigest.getInstance(str);
        } catch (NoSuchAlgorithmException e10) {
            throw new AssertionError(e10);
        }
    }

    private static boolean b(MessageDigest messageDigest) {
        try {
            messageDigest.clone();
            return true;
        } catch (CloneNotSupportedException unused) {
            return false;
        }
    }

    public final String toString() {
        return this.f14721o;
    }

    @Override // com.google.android.gms.internal.fido.j2
    public final k2 zza() {
        if (this.f14720i) {
            try {
                return new n2((MessageDigest) this.f14718d.clone(), this.f14719e, null);
            } catch (CloneNotSupportedException unused) {
            }
        }
        return new n2(a(this.f14718d.getAlgorithm()), this.f14719e, null);
    }
}
