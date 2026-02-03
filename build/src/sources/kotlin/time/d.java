package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d extends c {
    public static final fs.b d(char c10, boolean z10) {
        if (!z10) {
            if (c10 == 'D') {
                return fs.b.f25573s;
            }
            throw new IllegalArgumentException("Invalid or unsupported duration ISO non-time unit: " + c10);
        } else if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 == 'S') {
                    return fs.b.f25570p;
                }
                throw new IllegalArgumentException("Invalid duration ISO time unit: " + c10);
            }
            return fs.b.f25571q;
        } else {
            return fs.b.f25572r;
        }
    }

    public static final fs.b e(String shortName) {
        Intrinsics.checkNotNullParameter(shortName, "shortName");
        int hashCode = shortName.hashCode();
        if (hashCode != 100) {
            if (hashCode != 104) {
                if (hashCode != 109) {
                    if (hashCode != 115) {
                        if (hashCode != 3494) {
                            if (hashCode != 3525) {
                                if (hashCode == 3742 && shortName.equals("us")) {
                                    return fs.b.f25568i;
                                }
                            } else if (shortName.equals("ns")) {
                                return fs.b.f25567e;
                            }
                        } else if (shortName.equals("ms")) {
                            return fs.b.f25569o;
                        }
                    } else if (shortName.equals("s")) {
                        return fs.b.f25570p;
                    }
                } else if (shortName.equals("m")) {
                    return fs.b.f25571q;
                }
            } else if (shortName.equals("h")) {
                return fs.b.f25572r;
            }
        } else if (shortName.equals("d")) {
            return fs.b.f25573s;
        }
        throw new IllegalArgumentException("Unknown duration unit short name: " + shortName);
    }
}
