package yp;

import kotlin.jvm.internal.Intrinsics;
import qr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55594a;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f55590d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f55591e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f55594a = iArr;
        }
    }

    public static final String a(c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        int i10 = a.f55594a[cVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "precise";
            }
            throw new p();
        }
        return "rough";
    }
}
