package j$.time.format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class c implements e {

    /* renamed from: a  reason: collision with root package name */
    public final char f31580a;

    public c(char c10) {
        this.f31580a = c10;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        sb2.append(this.f31580a);
        return true;
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        if (i10 == charSequence.length()) {
            return ~i10;
        }
        char charAt = charSequence.charAt(i10);
        char c10 = this.f31580a;
        return (charAt == c10 || (!oVar.f31612b && (Character.toUpperCase(charAt) == Character.toUpperCase(c10) || Character.toLowerCase(charAt) == Character.toLowerCase(c10)))) ? i10 + 1 : ~i10;
    }

    public final String toString() {
        char c10 = this.f31580a;
        if (c10 == '\'') {
            return "''";
        }
        return "'" + c10 + "'";
    }
}
