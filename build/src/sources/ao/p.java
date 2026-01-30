package ao;

import ao.c4;
import mn.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f6431a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f5836o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f5838q.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f6431a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final t0.c b(c4.e eVar) {
        int i10 = a.f6431a[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return t0.c.f39327e;
            }
            return t0.c.f39326d;
        }
        return t0.c.f39326d;
    }
}
