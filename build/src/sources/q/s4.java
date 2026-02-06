package q;

import a0.y2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class s4 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f46114a;

        static {
            int[] iArr = new int[y2.b.values().length];
            f46114a = iArr;
            try {
                iArr[y2.b.IMAGE_CAPTURE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f46114a[y2.b.VIDEO_CAPTURE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f46114a[y2.b.STREAM_SHARING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f46114a[y2.b.PREVIEW.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f46114a[y2.b.IMAGE_ANALYSIS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public static int a(y2.b bVar, int i10) {
        int i11 = a.f46114a[bVar.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                return 1;
            }
            return 3;
        } else if (i10 != 2) {
            return 2;
        } else {
            return 5;
        }
    }

    public static int b(y2.b bVar, int i10) {
        int i11 = a.f46114a[bVar.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                return 1;
            }
            return 3;
        } else if (i10 != 2) {
            return 1;
        } else {
            return 5;
        }
    }
}
