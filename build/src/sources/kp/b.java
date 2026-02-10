package kp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f35123a;

        static {
            int[] iArr = new int[ep.f.values().length];
            try {
                iArr[ep.f.f23085d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ep.f.f23086e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f35123a = iArr;
        }
    }

    public static final String a(ep.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        int i10 = a.f35123a[fVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "sandbox";
            }
            throw new as.p();
        }
        return "production";
    }
}
