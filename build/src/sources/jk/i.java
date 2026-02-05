package jk;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private StringBuilder f31007a;

    /* renamed from: b  reason: collision with root package name */
    private StringBuilder f31008b;

    /* renamed from: c  reason: collision with root package name */
    private Charset f31009c;

    public i() {
        this.f31009c = StandardCharsets.ISO_8859_1;
        this.f31007a = new StringBuilder();
    }

    private void g() {
        Charset charset = this.f31009c;
        Charset charset2 = StandardCharsets.ISO_8859_1;
        if (charset.equals(charset2)) {
            if (this.f31007a.length() > 0) {
                StringBuilder sb2 = this.f31008b;
                if (sb2 == null) {
                    this.f31008b = this.f31007a;
                    this.f31007a = new StringBuilder();
                    return;
                }
                sb2.append((CharSequence) this.f31007a);
                this.f31007a = new StringBuilder();
            }
        } else if (this.f31007a.length() > 0) {
            byte[] bytes = this.f31007a.toString().getBytes(charset2);
            this.f31007a = new StringBuilder();
            StringBuilder sb3 = this.f31008b;
            if (sb3 == null) {
                this.f31008b = new StringBuilder(new String(bytes, this.f31009c));
            } else {
                sb3.append(new String(bytes, this.f31009c));
            }
        }
    }

    public void a(byte b10) {
        this.f31007a.append((char) (b10 & 255));
    }

    public void b(char c10) {
        this.f31007a.append((char) (c10 & 255));
    }

    public void c(int i10) {
        d(String.valueOf(i10));
    }

    public void d(String str) {
        this.f31007a.append(str);
    }

    public void e(StringBuilder sb2) {
        g();
        this.f31008b.append((CharSequence) sb2);
    }

    public void f(int i10) {
        g();
        d e10 = d.e(i10);
        if (e10 != null) {
            this.f31009c = e10.f();
            return;
        }
        throw fk.g.a();
    }

    public boolean h() {
        if (this.f31007a.length() == 0) {
            StringBuilder sb2 = this.f31008b;
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
        StringBuilder sb2 = this.f31008b;
        if (sb2 == null) {
            return "";
        }
        return sb2.toString();
    }

    public i(int i10) {
        this.f31009c = StandardCharsets.ISO_8859_1;
        this.f31007a = new StringBuilder(i10);
    }
}
