package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d extends c {
    public static final es.b d(char c10, boolean z10) {
        if (!z10) {
            if (c10 == 'D') {
                return es.b.f24012s;
            }
            throw new IllegalArgumentException("Invalid or unsupported duration ISO non-time unit: " + c10);
        } else if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 == 'S') {
                    return es.b.f24009p;
                }
                throw new IllegalArgumentException("Invalid duration ISO time unit: " + c10);
            }
            return es.b.f24010q;
        } else {
            return es.b.f24011r;
        }
    }

    public static final es.b e(String shortName) {
        Intrinsics.checkNotNullParameter(shortName, "shortName");
        int hashCode = shortName.hashCode();
        if (hashCode != 100) {
            if (hashCode != 104) {
                if (hashCode != 109) {
                    if (hashCode != 115) {
                        if (hashCode != 3494) {
                            if (hashCode != 3525) {
                                if (hashCode == 3742 && shortName.equals("us")) {
                                    return es.b.f24007i;
                                }
                            } else if (shortName.equals("ns")) {
                                return es.b.f24006e;
                            }
                        } else if (shortName.equals("ms")) {
                            return es.b.f24008o;
                        }
                    } else if (shortName.equals("s")) {
                        return es.b.f24009p;
                    }
                } else if (shortName.equals("m")) {
                    return es.b.f24010q;
                }
            } else if (shortName.equals("h")) {
                return es.b.f24011r;
            }
        } else if (shortName.equals("d")) {
            return es.b.f24012s;
        }
        throw new IllegalArgumentException("Unknown duration unit short name: " + shortName);
    }
}
