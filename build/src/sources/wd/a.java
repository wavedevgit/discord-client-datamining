package wd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Map;
import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import me.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class a implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f53506a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f53507b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f53508c;

    /* renamed from: d  reason: collision with root package name */
    private CipherInputStream f53509d;

    public a(DataSource dataSource, byte[] bArr, byte[] bArr2) {
        this.f53506a = dataSource;
        this.f53507b = bArr;
        this.f53508c = bArr2;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public final long b(com.google.android.exoplayer2.upstream.a aVar) {
        try {
            Cipher o10 = o();
            try {
                o10.init(2, new SecretKeySpec(this.f53507b, "AES"), new IvParameterSpec(this.f53508c));
                me.n nVar = new me.n(this.f53506a, aVar);
                this.f53509d = new CipherInputStream(nVar, o10);
                nVar.g();
                return -1L;
            } catch (InvalidAlgorithmParameterException | InvalidKeyException e10) {
                throw new RuntimeException(e10);
            }
        } catch (NoSuchAlgorithmException | NoSuchPaddingException e11) {
            throw new RuntimeException(e11);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        if (this.f53509d != null) {
            this.f53509d = null;
            this.f53506a.close();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public final Map d() {
        return this.f53506a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public final void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f53506a.i(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public final Uri m() {
        return this.f53506a.m();
    }

    protected Cipher o() {
        return Cipher.getInstance("AES/CBC/PKCS7Padding");
    }

    @Override // me.j
    public final int read(byte[] bArr, int i10, int i11) {
        oe.a.e(this.f53509d);
        int read = this.f53509d.read(bArr, i10, i11);
        if (read < 0) {
            return -1;
        }
        return read;
    }
}
