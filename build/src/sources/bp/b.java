package bp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f7166a;

        static {
            int[] iArr = new int[vo.f.values().length];
            try {
                iArr[vo.f.f52813d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[vo.f.f52814e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f7166a = iArr;
        }
    }

    public static final String a(vo.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        int i10 = a.f7166a[fVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "sandbox";
            }
            throw new rr.p();
        }
        return "production";
    }
}
