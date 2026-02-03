package dv;

import gv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class t extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final x f21198a = new x();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends iv.b {
        @Override // iv.e
        public iv.f a(iv.h hVar, iv.g gVar) {
            if (hVar.a() >= 4) {
                return iv.f.c();
            }
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (t.j(line, c10)) {
                return iv.f.d(new t()).b(line.length());
            }
            return iv.f.c();
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

    @Override // iv.d
    public gv.a d() {
        return this.f21198a;
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        return iv.c.d();
    }
}
