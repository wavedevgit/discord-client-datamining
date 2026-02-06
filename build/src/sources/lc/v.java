package lc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    public final int f36027d;

    public v(int i10) {
        super(a(i10));
        this.f36027d = i10;
    }

    private static String a(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return "Undefined timeout.";
                }
                return "Detaching surface timed out.";
            }
            return "Setting foreground mode timed out.";
        }
        return "Player release timed out.";
    }
}
