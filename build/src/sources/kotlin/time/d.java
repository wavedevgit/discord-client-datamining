package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d extends c {
    public static final hs.b d(char c10, boolean z10) {
        if (!z10) {
            if (c10 == 'D') {
                return hs.b.f28138s;
            }
            throw new IllegalArgumentException("Invalid or unsupported duration ISO non-time unit: " + c10);
        } else if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 == 'S') {
                    return hs.b.f28135p;
                }
                throw new IllegalArgumentException("Invalid duration ISO time unit: " + c10);
            }
            return hs.b.f28136q;
        } else {
            return hs.b.f28137r;
        }
    }

    public static final hs.b e(String shortName) {
        Intrinsics.checkNotNullParameter(shortName, "shortName");
        int hashCode = shortName.hashCode();
        if (hashCode != 100) {
            if (hashCode != 104) {
                if (hashCode != 109) {
                    if (hashCode != 115) {
                        if (hashCode != 3494) {
                            if (hashCode != 3525) {
                                if (hashCode == 3742 && shortName.equals("us")) {
                                    return hs.b.f28133i;
                                }
                            } else if (shortName.equals("ns")) {
                                return hs.b.f28132e;
                            }
                        } else if (shortName.equals("ms")) {
                            return hs.b.f28134o;
                        }
                    } else if (shortName.equals("s")) {
                        return hs.b.f28135p;
                    }
                } else if (shortName.equals("m")) {
                    return hs.b.f28136q;
                }
            } else if (shortName.equals("h")) {
                return hs.b.f28137r;
            }
        } else if (shortName.equals("d")) {
            return hs.b.f28138s;
        }
        throw new IllegalArgumentException("Unknown duration unit short name: " + shortName);
    }
}
