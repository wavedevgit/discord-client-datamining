package ok;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private StringBuilder f40195a;

    /* renamed from: b  reason: collision with root package name */
    private StringBuilder f40196b;

    /* renamed from: c  reason: collision with root package name */
    private Charset f40197c;

    public i() {
        this.f40197c = StandardCharsets.ISO_8859_1;
        this.f40195a = new StringBuilder();
    }

    private void g() {
        Charset charset = this.f40197c;
        Charset charset2 = StandardCharsets.ISO_8859_1;
        if (charset.equals(charset2)) {
            if (this.f40195a.length() > 0) {
                StringBuilder sb2 = this.f40196b;
                if (sb2 == null) {
                    this.f40196b = this.f40195a;
                    this.f40195a = new StringBuilder();
                    return;
                }
                sb2.append((CharSequence) this.f40195a);
                this.f40195a = new StringBuilder();
            }
        } else if (this.f40195a.length() > 0) {
            byte[] bytes = this.f40195a.toString().getBytes(charset2);
            this.f40195a = new StringBuilder();
            StringBuilder sb3 = this.f40196b;
            if (sb3 == null) {
                this.f40196b = new StringBuilder(new String(bytes, this.f40197c));
            } else {
                sb3.append(new String(bytes, this.f40197c));
            }
        }
    }

    public void a(byte b10) {
        this.f40195a.append((char) (b10 & 255));
    }

    public void b(char c10) {
        this.f40195a.append((char) (c10 & 255));
    }

    public void c(int i10) {
        d(String.valueOf(i10));
    }

    public void d(String str) {
        this.f40195a.append(str);
    }

    public void e(StringBuilder sb2) {
        g();
        this.f40196b.append((CharSequence) sb2);
    }

    public void f(int i10) {
        g();
        d e10 = d.e(i10);
        if (e10 != null) {
            this.f40197c = e10.f();
            return;
        }
        throw kk.g.a();
    }

    public boolean h() {
        if (this.f40195a.length() == 0) {
            StringBuilder sb2 = this.f40196b;
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
        StringBuilder sb2 = this.f40196b;
        if (sb2 == null) {
            return "";
        }
        return sb2.toString();
    }

    public i(int i10) {
        this.f40197c = StandardCharsets.ISO_8859_1;
        this.f40195a = new StringBuilder(i10);
    }
}
