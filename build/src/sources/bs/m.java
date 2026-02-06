package bs;

import java.io.File;
import kotlin.io.FileWalkDirection;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m extends l {
    public static final i n(File file, FileWalkDirection direction) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        Intrinsics.checkNotNullParameter(direction, "direction");
        return new i(file, direction);
    }

    public static final i o(File file) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        return n(file, FileWalkDirection.f32091e);
    }
}
