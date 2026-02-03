package r3;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v {

    /* renamed from: a  reason: collision with root package name */
    public static final v f48523a = new v();

    private v() {
    }

    public static final String a(String hash) {
        Intrinsics.checkNotNullParameter(hash, "hash");
        return "INSERT OR REPLACE INTO room_master_table (id,identity_hash) VALUES(42, '" + hash + "')";
    }
}
