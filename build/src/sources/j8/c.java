package j8;

import j8.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements h {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(e.a aVar, e.a aVar2) {
            long a10 = aVar.a();
            long a11 = aVar2.a();
            if (a10 < a11) {
                return -1;
            }
            if (a11 == a10) {
                return 0;
            }
            return 1;
        }
    }

    @Override // j8.i
    public h get() {
        return new a();
    }
}
