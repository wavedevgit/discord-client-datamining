package jo;

import jo.c4;
import un.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f30617a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f30022o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f30024q.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f30617a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final t0.c b(c4.e eVar) {
        int i10 = a.f30617a[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return t0.c.f51824e;
            }
            return t0.c.f51823d;
        }
        return t0.c.f51823d;
    }
}
