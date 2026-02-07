package j$.time.format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class m implements e {

    /* renamed from: a  reason: collision with root package name */
    public final String f29511a;

    public m(String str) {
        this.f29511a = str;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        sb2.append(this.f29511a);
        return true;
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        if (i10 > charSequence.length() || i10 < 0) {
            throw new IndexOutOfBoundsException();
        }
        String str = this.f29511a;
        return !oVar.g(charSequence, i10, str, 0, str.length()) ? ~i10 : str.length() + i10;
    }

    public final String toString() {
        String replace = this.f29511a.replace("'", "''");
        return "'" + replace + "'";
    }
}
