package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d extends c {
    public static final ms.b d(char c10, boolean z10) {
        if (!z10) {
            if (c10 == 'D') {
                return ms.b.f38335s;
            }
            throw new IllegalArgumentException("Invalid or unsupported duration ISO non-time unit: " + c10);
        } else if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 == 'S') {
                    return ms.b.f38332p;
                }
                throw new IllegalArgumentException("Invalid duration ISO time unit: " + c10);
            }
            return ms.b.f38333q;
        } else {
            return ms.b.f38334r;
        }
    }

    public static final ms.b e(String shortName) {
        Intrinsics.checkNotNullParameter(shortName, "shortName");
        int hashCode = shortName.hashCode();
        if (hashCode != 100) {
            if (hashCode != 104) {
                if (hashCode != 109) {
                    if (hashCode != 115) {
                        if (hashCode != 3494) {
                            if (hashCode != 3525) {
                                if (hashCode == 3742 && shortName.equals("us")) {
                                    return ms.b.f38330i;
                                }
                            } else if (shortName.equals("ns")) {
                                return ms.b.f38329e;
                            }
                        } else if (shortName.equals("ms")) {
                            return ms.b.f38331o;
                        }
                    } else if (shortName.equals("s")) {
                        return ms.b.f38332p;
                    }
                } else if (shortName.equals("m")) {
                    return ms.b.f38333q;
                }
            } else if (shortName.equals("h")) {
                return ms.b.f38334r;
            }
        } else if (shortName.equals("d")) {
            return ms.b.f38335s;
        }
        throw new IllegalArgumentException("Unknown duration unit short name: " + shortName);
    }
}
