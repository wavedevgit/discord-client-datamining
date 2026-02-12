package vv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum c {
    UNSET(0),
    TRUE(1),
    FALSE(2);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f52029d;

    c(int i10) {
        this.f52029d = i10;
    }

    public static c d(Boolean bool) {
        if (bool == null) {
            return UNSET;
        }
        if (bool.booleanValue()) {
            return TRUE;
        }
        return FALSE;
    }

    public int e() {
        return this.f52029d;
    }
}
