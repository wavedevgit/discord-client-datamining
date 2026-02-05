package tk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class a {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static jk.a a(List list) {
        int size = list.size() * 2;
        int i10 = size - 1;
        if (((b) list.get(list.size() - 1)).c() == null) {
            i10 = size - 2;
        }
        jk.a aVar = new jk.a(i10 * 12);
        int i11 = 0;
        int b10 = ((b) list.get(0)).c().b();
        for (int i12 = 11; i12 >= 0; i12--) {
            if (((1 << i12) & b10) != 0) {
                aVar.r(i11);
            }
            i11++;
        }
        for (int i13 = 1; i13 < list.size(); i13++) {
            b bVar = (b) list.get(i13);
            int b11 = bVar.b().b();
            for (int i14 = 11; i14 >= 0; i14--) {
                if (((1 << i14) & b11) != 0) {
                    aVar.r(i11);
                }
                i11++;
            }
            if (bVar.c() != null) {
                int b12 = bVar.c().b();
                for (int i15 = 11; i15 >= 0; i15--) {
                    if (((1 << i15) & b12) != 0) {
                        aVar.r(i11);
                    }
                    i11++;
                }
            }
        }
        return aVar;
    }
}
