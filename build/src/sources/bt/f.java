package bt;

import bt.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {
    /* JADX INFO: Access modifiers changed from: private */
    public static final int d(CharSequence charSequence, int i10, int i11) {
        int i12 = 0;
        while (i10 < i11) {
            i12 = (i12 * 10) + ys.d.a(charSequence.charAt(i10));
            i10++;
        }
        return i12;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer e(CharSequence charSequence, int i10, int i11) {
        int i12 = 0;
        while (i10 < i11) {
            i12 = (i12 * 10) + ys.d.a(charSequence.charAt(i10));
            if (i12 < 0) {
                return null;
            }
            i10++;
        }
        return Integer.valueOf(i12);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final g f(a aVar, Object obj, Object obj2) {
        Object c10 = aVar.c(obj, obj2);
        if (c10 == null) {
            return null;
        }
        return new g.a(c10);
    }
}
