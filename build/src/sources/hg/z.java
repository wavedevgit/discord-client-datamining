package hg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class z {
    public static void a(boolean z10) {
        if (z10) {
            return;
        }
        throw new IllegalStateException();
    }

    public static int b(int i10, int i11, String str) {
        String a10;
        if (i10 >= 0 && i10 < i11) {
            return i10;
        }
        if (i10 >= 0) {
            if (i11 < 0) {
                StringBuilder sb2 = new StringBuilder(String.valueOf(i11).length() + 15);
                sb2.append("negative size: ");
                sb2.append(i11);
                throw new IllegalArgumentException(sb2.toString());
            }
            a10 = f0.a("%s (%s) must be less than size (%s)", "index", Integer.valueOf(i10), Integer.valueOf(i11));
        } else {
            a10 = f0.a("%s (%s) must not be negative", "index", Integer.valueOf(i10));
        }
        throw new IndexOutOfBoundsException(a10);
    }

    public static int c(int i10, int i11, String str) {
        if (i10 >= 0 && i10 <= i11) {
            return i10;
        }
        throw new IndexOutOfBoundsException(e(i10, i11, "index"));
    }

    public static void d(int i10, int i11, int i12) {
        String e10;
        if (i10 >= 0 && i11 >= i10 && i11 <= i12) {
            return;
        }
        if (i10 >= 0 && i10 <= i12) {
            if (i11 >= 0 && i11 <= i12) {
                e10 = f0.a("end index (%s) must not be less than start index (%s)", Integer.valueOf(i11), Integer.valueOf(i10));
            } else {
                e10 = e(i11, i12, "end index");
            }
        } else {
            e10 = e(i10, i12, "start index");
        }
        throw new IndexOutOfBoundsException(e10);
    }

    private static String e(int i10, int i11, String str) {
        if (i10 < 0) {
            return f0.a("%s (%s) must not be negative", str, Integer.valueOf(i10));
        }
        if (i11 >= 0) {
            return f0.a("%s (%s) must not be greater than size (%s)", str, Integer.valueOf(i10), Integer.valueOf(i11));
        }
        StringBuilder sb2 = new StringBuilder(String.valueOf(i11).length() + 15);
        sb2.append("negative size: ");
        sb2.append(i11);
        throw new IllegalArgumentException(sb2.toString());
    }
}
