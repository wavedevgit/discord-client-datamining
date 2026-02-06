package j$.time.format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class j extends k {
    @Override // j$.time.format.k
    public final k d(String str, String str2, k kVar) {
        return new k(str, str2, kVar);
    }

    @Override // j$.time.format.k
    public final boolean b(char c10, char c11) {
        return o.b(c10, c11);
    }

    @Override // j$.time.format.k
    public final boolean e(CharSequence charSequence, int i10, int i11) {
        int length = this.f29457a.length();
        if (length > i11 - i10) {
            return false;
        }
        int i12 = 0;
        while (true) {
            int i13 = length - 1;
            if (length <= 0) {
                return true;
            }
            int i14 = i12 + 1;
            int i15 = i10 + 1;
            if (!o.b(this.f29457a.charAt(i12), charSequence.charAt(i10))) {
                return false;
            }
            i10 = i15;
            length = i13;
            i12 = i14;
        }
    }
}
