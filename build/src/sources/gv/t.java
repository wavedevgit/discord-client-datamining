package gv;

import jv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class t extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final x f25522a = new x();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends lv.b {
        @Override // lv.e
        public lv.f a(lv.h hVar, lv.g gVar) {
            if (hVar.a() >= 4) {
                return lv.f.c();
            }
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (t.j(line, c10)) {
                return lv.f.d(new t()).b(line.length());
            }
            return lv.f.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean j(CharSequence charSequence, int i10) {
        int length = charSequence.length();
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        while (i10 < length) {
            char charAt = charSequence.charAt(i10);
            if (charAt != '\t' && charAt != ' ') {
                if (charAt != '*') {
                    if (charAt != '-') {
                        if (charAt != '_') {
                            return false;
                        }
                        i12++;
                    } else {
                        i11++;
                    }
                } else {
                    i13++;
                }
            }
            i10++;
        }
        if (i11 < 3 || i12 != 0 || i13 != 0) {
            if (i12 < 3 || i11 != 0 || i13 != 0) {
                if (i13 < 3 || i11 != 0 || i12 != 0) {
                    return false;
                }
                return true;
            }
            return true;
        }
        return true;
    }

    @Override // lv.d
    public jv.a c() {
        return this.f25522a;
    }

    @Override // lv.d
    public lv.c g(lv.h hVar) {
        return lv.c.d();
    }
}
