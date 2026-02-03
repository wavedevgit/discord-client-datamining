package nt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum g {
    STRICT,
    SMART,
    LAX;

    public boolean a() {
        if (this == LAX) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this == SMART) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this == STRICT) {
            return true;
        }
        return false;
    }
}
