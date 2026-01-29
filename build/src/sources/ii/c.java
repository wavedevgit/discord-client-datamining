package ii;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c implements n {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static abstract class a extends c {
        a() {
        }

        @Override // ii.n
        public /* bridge */ /* synthetic */ boolean apply(Object obj) {
            return super.b((Character) obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b extends a {

        /* renamed from: d  reason: collision with root package name */
        private final char f28516d;

        b(char c10) {
            this.f28516d = c10;
        }

        @Override // ii.c
        public boolean e(char c10) {
            if (c10 == this.f28516d) {
                return true;
            }
            return false;
        }

        public String toString() {
            String g10 = c.g(this.f28516d);
            StringBuilder sb2 = new StringBuilder(String.valueOf(g10).length() + 18);
            sb2.append("CharMatcher.is('");
            sb2.append(g10);
            sb2.append("')");
            return sb2.toString();
        }
    }

    /* renamed from: ii.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static abstract class AbstractC0375c extends a {

        /* renamed from: d  reason: collision with root package name */
        private final String f28517d;

        AbstractC0375c(String str) {
            this.f28517d = (String) m.j(str);
        }

        public final String toString() {
            return this.f28517d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class d extends AbstractC0375c {

        /* renamed from: e  reason: collision with root package name */
        static final d f28518e = new d();

        private d() {
            super("CharMatcher.none()");
        }

        @Override // ii.c
        public int c(CharSequence charSequence, int i10) {
            m.l(i10, charSequence.length());
            return -1;
        }

        @Override // ii.c
        public boolean e(char c10) {
            return false;
        }
    }

    protected c() {
    }

    public static c d(char c10) {
        return new b(c10);
    }

    public static c f() {
        return d.f28518e;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String g(char c10) {
        char[] cArr = new char[6];
        cArr[0] = '\\';
        cArr[1] = 'u';
        cArr[2] = 0;
        cArr[3] = 0;
        cArr[4] = 0;
        cArr[5] = 0;
        for (int i10 = 0; i10 < 4; i10++) {
            cArr[5 - i10] = "0123456789ABCDEF".charAt(c10 & 15);
            c10 = (char) (c10 >> 4);
        }
        return String.copyValueOf(cArr);
    }

    public boolean b(Character ch2) {
        return e(ch2.charValue());
    }

    public int c(CharSequence charSequence, int i10) {
        int length = charSequence.length();
        m.l(i10, length);
        while (i10 < length) {
            if (e(charSequence.charAt(i10))) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    public abstract boolean e(char c10);
}
