package mk;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private StringBuilder f37221a;

    /* renamed from: b  reason: collision with root package name */
    private StringBuilder f37222b;

    /* renamed from: c  reason: collision with root package name */
    private Charset f37223c;

    public i() {
        this.f37223c = StandardCharsets.ISO_8859_1;
        this.f37221a = new StringBuilder();
    }

    private void g() {
        Charset charset = this.f37223c;
        Charset charset2 = StandardCharsets.ISO_8859_1;
        if (charset.equals(charset2)) {
            if (this.f37221a.length() > 0) {
                StringBuilder sb2 = this.f37222b;
                if (sb2 == null) {
                    this.f37222b = this.f37221a;
                    this.f37221a = new StringBuilder();
                    return;
                }
                sb2.append((CharSequence) this.f37221a);
                this.f37221a = new StringBuilder();
            }
        } else if (this.f37221a.length() > 0) {
            byte[] bytes = this.f37221a.toString().getBytes(charset2);
            this.f37221a = new StringBuilder();
            StringBuilder sb3 = this.f37222b;
            if (sb3 == null) {
                this.f37222b = new StringBuilder(new String(bytes, this.f37223c));
            } else {
                sb3.append(new String(bytes, this.f37223c));
            }
        }
    }

    public void a(byte b10) {
        this.f37221a.append((char) (b10 & 255));
    }

    public void b(char c10) {
        this.f37221a.append((char) (c10 & 255));
    }

    public void c(int i10) {
        d(String.valueOf(i10));
    }

    public void d(String str) {
        this.f37221a.append(str);
    }

    public void e(StringBuilder sb2) {
        g();
        this.f37222b.append((CharSequence) sb2);
    }

    public void f(int i10) {
        g();
        d e10 = d.e(i10);
        if (e10 != null) {
            this.f37223c = e10.f();
            return;
        }
        throw ik.g.a();
    }

    public boolean h() {
        if (this.f37221a.length() == 0) {
            StringBuilder sb2 = this.f37222b;
            if (sb2 == null || sb2.length() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int i() {
        return toString().length();
    }

    public String toString() {
        g();
        StringBuilder sb2 = this.f37222b;
        if (sb2 == null) {
            return "";
        }
        return sb2.toString();
    }

    public i(int i10) {
        this.f37223c = StandardCharsets.ISO_8859_1;
        this.f37221a = new StringBuilder(i10);
    }
}
