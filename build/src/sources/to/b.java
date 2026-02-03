package to;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f49949a;

        static {
            int[] iArr = new int[no.f.values().length];
            try {
                iArr[no.f.f42151d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[no.f.f42152e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f49949a = iArr;
        }
    }

    public static final String a(no.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        int i10 = a.f49949a[fVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "sandbox";
            }
            throw new jr.p();
        }
        return "production";
    }
}
