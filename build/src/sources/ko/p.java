package ko;

import ko.c4;
import vn.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31616a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f31021o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f31023q.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f31616a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final t0.c b(c4.e eVar) {
        int i10 = a.f31616a[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return t0.c.f52732e;
            }
            return t0.c.f52731d;
        }
        return t0.c.f52731d;
    }
}
