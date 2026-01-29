package net.time4j.tz;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum d {
    SHORT_STANDARD_TIME,
    LONG_STANDARD_TIME,
    SHORT_DAYLIGHT_TIME,
    LONG_DAYLIGHT_TIME;

    public boolean a() {
        if (this != SHORT_STANDARD_TIME && this != SHORT_DAYLIGHT_TIME) {
            return false;
        }
        return true;
    }

    public boolean d() {
        if (this != SHORT_DAYLIGHT_TIME && this != LONG_DAYLIGHT_TIME) {
            return false;
        }
        return true;
    }
}
