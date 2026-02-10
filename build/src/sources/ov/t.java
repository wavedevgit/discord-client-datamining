package ov;

import rv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class t extends tv.a {

    /* renamed from: a  reason: collision with root package name */
    private final x f42857a = new x();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends tv.b {
        @Override // tv.e
        public tv.f a(tv.h hVar, tv.g gVar) {
            if (hVar.a() >= 4) {
                return tv.f.c();
            }
            int c10 = hVar.c();
            CharSequence line = hVar.getLine();
            if (t.j(line, c10)) {
                return tv.f.d(new t()).b(line.length());
            }
            return tv.f.c();
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

    @Override // tv.d
    public tv.c b(tv.h hVar) {
        return tv.c.d();
    }

    @Override // tv.d
    public rv.a f() {
        return this.f42857a;
    }
}
