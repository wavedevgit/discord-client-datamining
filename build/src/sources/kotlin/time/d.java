package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d extends c {
    public static final ns.b d(char c10, boolean z10) {
        if (!z10) {
            if (c10 == 'D') {
                return ns.b.f40020s;
            }
            throw new IllegalArgumentException("Invalid or unsupported duration ISO non-time unit: " + c10);
        } else if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 == 'S') {
                    return ns.b.f40017p;
                }
                throw new IllegalArgumentException("Invalid duration ISO time unit: " + c10);
            }
            return ns.b.f40018q;
        } else {
            return ns.b.f40019r;
        }
    }

    public static final ns.b e(String shortName) {
        Intrinsics.checkNotNullParameter(shortName, "shortName");
        int hashCode = shortName.hashCode();
        if (hashCode != 100) {
            if (hashCode != 104) {
                if (hashCode != 109) {
                    if (hashCode != 115) {
                        if (hashCode != 3494) {
                            if (hashCode != 3525) {
                                if (hashCode == 3742 && shortName.equals("us")) {
                                    return ns.b.f40015i;
                                }
                            } else if (shortName.equals("ns")) {
                                return ns.b.f40014e;
                            }
                        } else if (shortName.equals("ms")) {
                            return ns.b.f40016o;
                        }
                    } else if (shortName.equals("s")) {
                        return ns.b.f40017p;
                    }
                } else if (shortName.equals("m")) {
                    return ns.b.f40018q;
                }
            } else if (shortName.equals("h")) {
                return ns.b.f40019r;
            }
        } else if (shortName.equals("d")) {
            return ns.b.f40020s;
        }
        throw new IllegalArgumentException("Unknown duration unit short name: " + shortName);
    }
}
