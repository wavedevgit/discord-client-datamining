package ap;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f6231a;

        static {
            int[] iArr = new int[uo.f.values().length];
            try {
                iArr[uo.f.f51905d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[uo.f.f51906e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f6231a = iArr;
        }
    }

    public static final String a(uo.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        int i10 = a.f6231a[fVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "sandbox";
            }
            throw new qr.p();
        }
        return "production";
    }
}
