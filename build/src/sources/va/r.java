package va;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    public static final r f50941a = new r();

    private r() {
    }

    public static final int a(int i10, int i11, int i12) {
        return Math.min(Math.max(0, i12 - i10), i11);
    }

    public static final void b(int i10, int i11, int i12, int i13, int i14) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14 = false;
        if (i13 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.d(z10, "count (%d) ! >= 0", Integer.valueOf(i13));
        if (i10 >= 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        o8.j.d(z11, "offset (%d) ! >= 0", Integer.valueOf(i10));
        if (i12 >= 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        o8.j.d(z12, "otherOffset (%d) ! >= 0", Integer.valueOf(i12));
        if (i10 + i13 <= i14) {
            z13 = true;
        } else {
            z13 = false;
        }
        o8.j.d(z13, "offset (%d) + count (%d) ! <= %d", Integer.valueOf(i10), Integer.valueOf(i13), Integer.valueOf(i14));
        if (i12 + i13 <= i11) {
            z14 = true;
        }
        o8.j.d(z14, "otherOffset (%d) + count (%d) ! <= %d", Integer.valueOf(i12), Integer.valueOf(i13), Integer.valueOf(i11));
    }
}
