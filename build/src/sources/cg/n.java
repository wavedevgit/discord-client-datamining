package cg;

import android.util.Base64;
import java.security.SecureRandom;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static final SecureRandom f8212a = new SecureRandom();

    public static String a() {
        byte[] bArr = new byte[16];
        f8212a.nextBytes(bArr);
        return Base64.encodeToString(bArr, 11);
    }
}
