package vo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51705a;

        static {
            int[] iArr = new int[po.f.values().length];
            try {
                iArr[po.f.f46443d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[po.f.f46444e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f51705a = iArr;
        }
    }

    public static final String a(po.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        int i10 = a.f51705a[fVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "sandbox";
            }
            throw new lr.p();
        }
        return "production";
    }
}
