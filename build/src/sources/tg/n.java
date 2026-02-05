package tg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class n {
    public static String a(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return "THROTTLE_NEVER";
                }
                throw new IllegalArgumentException();
            }
            return "THROTTLE_ALWAYS";
        }
        return "THROTTLE_BACKGROUND";
    }
}
