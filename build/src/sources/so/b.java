package so;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f49111a;

        static {
            int[] iArr = new int[mo.f.values().length];
            try {
                iArr[mo.f.f39408d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[mo.f.f39409e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f49111a = iArr;
        }
    }

    public static final String a(mo.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        int i10 = a.f49111a[fVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "sandbox";
            }
            throw new ir.p();
        }
        return "production";
    }
}
