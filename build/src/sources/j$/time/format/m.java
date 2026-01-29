package j$.time.format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class m implements e {

    /* renamed from: a  reason: collision with root package name */
    public final String f31590a;

    public m(String str) {
        this.f31590a = str;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        sb2.append(this.f31590a);
        return true;
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        if (i10 > charSequence.length() || i10 < 0) {
            throw new IndexOutOfBoundsException();
        }
        String str = this.f31590a;
        return !oVar.g(charSequence, i10, str, 0, str.length()) ? ~i10 : str.length() + i10;
    }

    public final String toString() {
        String replace = this.f31590a.replace("'", "''");
        return "'" + replace + "'";
    }
}
