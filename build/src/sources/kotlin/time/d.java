package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d extends c {
    public static final ws.b d(char c10, boolean z10) {
        if (!z10) {
            if (c10 == 'D') {
                return ws.b.f53971s;
            }
            throw new IllegalArgumentException("Invalid or unsupported duration ISO non-time unit: " + c10);
        } else if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 == 'S') {
                    return ws.b.f53968p;
                }
                throw new IllegalArgumentException("Invalid duration ISO time unit: " + c10);
            }
            return ws.b.f53969q;
        } else {
            return ws.b.f53970r;
        }
    }

    public static final ws.b e(String shortName) {
        Intrinsics.checkNotNullParameter(shortName, "shortName");
        int hashCode = shortName.hashCode();
        if (hashCode != 100) {
            if (hashCode != 104) {
                if (hashCode != 109) {
                    if (hashCode != 115) {
                        if (hashCode != 3494) {
                            if (hashCode != 3525) {
                                if (hashCode == 3742 && shortName.equals("us")) {
                                    return ws.b.f53966i;
                                }
                            } else if (shortName.equals("ns")) {
                                return ws.b.f53965e;
                            }
                        } else if (shortName.equals("ms")) {
                            return ws.b.f53967o;
                        }
                    } else if (shortName.equals("s")) {
                        return ws.b.f53968p;
                    }
                } else if (shortName.equals("m")) {
                    return ws.b.f53969q;
                }
            } else if (shortName.equals("h")) {
                return ws.b.f53970r;
            }
        } else if (shortName.equals("d")) {
            return ws.b.f53971s;
        }
        throw new IllegalArgumentException("Unknown duration unit short name: " + shortName);
    }
}
