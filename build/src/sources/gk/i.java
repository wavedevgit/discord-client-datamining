package gk;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private StringBuilder f27111a;

    /* renamed from: b  reason: collision with root package name */
    private StringBuilder f27112b;

    /* renamed from: c  reason: collision with root package name */
    private Charset f27113c;

    public i() {
        this.f27113c = StandardCharsets.ISO_8859_1;
        this.f27111a = new StringBuilder();
    }

    private void g() {
        Charset charset = this.f27113c;
        Charset charset2 = StandardCharsets.ISO_8859_1;
        if (charset.equals(charset2)) {
            if (this.f27111a.length() > 0) {
                StringBuilder sb2 = this.f27112b;
                if (sb2 == null) {
                    this.f27112b = this.f27111a;
                    this.f27111a = new StringBuilder();
                    return;
                }
                sb2.append((CharSequence) this.f27111a);
                this.f27111a = new StringBuilder();
            }
        } else if (this.f27111a.length() > 0) {
            byte[] bytes = this.f27111a.toString().getBytes(charset2);
            this.f27111a = new StringBuilder();
            StringBuilder sb3 = this.f27112b;
            if (sb3 == null) {
                this.f27112b = new StringBuilder(new String(bytes, this.f27113c));
            } else {
                sb3.append(new String(bytes, this.f27113c));
            }
        }
    }

    public void a(byte b10) {
        this.f27111a.append((char) (b10 & 255));
    }

    public void b(char c10) {
        this.f27111a.append((char) (c10 & 255));
    }

    public void c(int i10) {
        d(String.valueOf(i10));
    }

    public void d(String str) {
        this.f27111a.append(str);
    }

    public void e(StringBuilder sb2) {
        g();
        this.f27112b.append((CharSequence) sb2);
    }

    public void f(int i10) {
        g();
        d e10 = d.e(i10);
        if (e10 != null) {
            this.f27113c = e10.f();
            return;
        }
        throw ck.g.a();
    }

    public boolean h() {
        if (this.f27111a.length() == 0) {
            StringBuilder sb2 = this.f27112b;
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
        StringBuilder sb2 = this.f27112b;
        if (sb2 == null) {
            return "";
        }
        return sb2.toString();
    }

    public i(int i10) {
        this.f27113c = StandardCharsets.ISO_8859_1;
        this.f27111a = new StringBuilder(i10);
    }
}
