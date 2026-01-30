package io.sentry;

import java.io.StringReader;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements n0 {

    /* renamed from: b  reason: collision with root package name */
    private static final Charset f30910b = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final b1 f30911a;

    public w(b1 b1Var) {
        this.f30911a = b1Var;
    }

    private m5 b(byte[] bArr, int i10, int i11) {
        StringReader stringReader = new StringReader(new String(bArr, i10, i11, f30910b));
        try {
            m5 m5Var = (m5) this.f30911a.c(stringReader, m5.class);
            stringReader.close();
            return m5Var;
        } catch (Throwable th2) {
            try {
                stringReader.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    private m6 c(byte[] bArr, int i10, int i11) {
        StringReader stringReader = new StringReader(new String(bArr, i10, i11, f30910b));
        try {
            m6 m6Var = (m6) this.f30911a.c(stringReader, m6.class);
            stringReader.close();
            return m6Var;
        } catch (Throwable th2) {
            try {
                stringReader.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:43:0x0084, code lost:
        r11 = new io.sentry.l5(r0, r2);
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x0089, code lost:
        r1.close();
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x008c, code lost:
        return r11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x00e5, code lost:
        throw new java.lang.IllegalArgumentException("Item header at index '" + r2.size() + "' is null or empty.");
     */
    @Override // io.sentry.n0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public io.sentry.l5 a(java.io.InputStream r11) {
        /*
            Method dump skipped, instructions count: 295
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.w.a(java.io.InputStream):io.sentry.l5");
    }
}
