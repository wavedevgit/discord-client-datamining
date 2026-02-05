package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d extends c {
    public static final ks.b d(char c10, boolean z10) {
        if (!z10) {
            if (c10 == 'D') {
                return ks.b.f36131s;
            }
            throw new IllegalArgumentException("Invalid or unsupported duration ISO non-time unit: " + c10);
        } else if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 == 'S') {
                    return ks.b.f36128p;
                }
                throw new IllegalArgumentException("Invalid duration ISO time unit: " + c10);
            }
            return ks.b.f36129q;
        } else {
            return ks.b.f36130r;
        }
    }

    public static final ks.b e(String shortName) {
        Intrinsics.checkNotNullParameter(shortName, "shortName");
        int hashCode = shortName.hashCode();
        if (hashCode != 100) {
            if (hashCode != 104) {
                if (hashCode != 109) {
                    if (hashCode != 115) {
                        if (hashCode != 3494) {
                            if (hashCode != 3525) {
                                if (hashCode == 3742 && shortName.equals("us")) {
                                    return ks.b.f36126i;
                                }
                            } else if (shortName.equals("ns")) {
                                return ks.b.f36125e;
                            }
                        } else if (shortName.equals("ms")) {
                            return ks.b.f36127o;
                        }
                    } else if (shortName.equals("s")) {
                        return ks.b.f36128p;
                    }
                } else if (shortName.equals("m")) {
                    return ks.b.f36129q;
                }
            } else if (shortName.equals("h")) {
                return ks.b.f36130r;
            }
        } else if (shortName.equals("d")) {
            return ks.b.f36131s;
        }
        throw new IllegalArgumentException("Unknown duration unit short name: " + shortName);
    }
}
