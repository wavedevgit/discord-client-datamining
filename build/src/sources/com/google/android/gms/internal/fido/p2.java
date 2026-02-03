package com.google.android.gms.internal.fido;

import java.io.Serializable;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p2 extends f2 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final MessageDigest f13686d;

    /* renamed from: e  reason: collision with root package name */
    private final int f13687e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f13688i;

    /* renamed from: o  reason: collision with root package name */
    private final String f13689o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p2(String str, String str2) {
        MessageDigest a10 = a("SHA-256");
        this.f13686d = a10;
        this.f13687e = a10.getDigestLength();
        this.f13689o = "Hashing.sha256()";
        this.f13688i = b(a10);
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
        return this.f13689o;
    }

    @Override // com.google.android.gms.internal.fido.j2
    public final k2 zza() {
        if (this.f13688i) {
            try {
                return new n2((MessageDigest) this.f13686d.clone(), this.f13687e, null);
            } catch (CloneNotSupportedException unused) {
            }
        }
        return new n2(a(this.f13686d.getAlgorithm()), this.f13687e, null);
    }
}
