package hg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l extends k {

    /* renamed from: a  reason: collision with root package name */
    private final char f27516a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(char c10) {
        this.f27516a = c10;
    }

    @Override // hg.o
    public final boolean a(char c10) {
        if (c10 == this.f27516a) {
            return true;
        }
        return false;
    }

    public final String toString() {
        char[] cArr = new char[6];
        cArr[0] = '\\';
        cArr[1] = 'u';
        cArr[2] = 0;
        cArr[3] = 0;
        cArr[4] = 0;
        cArr[5] = 0;
        int i10 = this.f27516a;
        for (int i11 = 0; i11 < 4; i11++) {
            cArr[5 - i11] = "0123456789ABCDEF".charAt(i10 & 15);
            i10 >>= 4;
        }
        String copyValueOf = String.copyValueOf(cArr);
        return "CharMatcher.is('" + copyValueOf + "')";
    }
}
