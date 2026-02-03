package w1;

import android.os.Bundle;
import android.util.Size;
import android.util.SizeF;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a {
    @NotNull

    /* renamed from: a  reason: collision with root package name */
    public static final a f51832a = new a();

    private a() {
    }

    public static final void a(@NotNull Bundle bundle, @NotNull String str, Size size) {
        bundle.putSize(str, size);
    }

    public static final void b(@NotNull Bundle bundle, @NotNull String str, SizeF sizeF) {
        bundle.putSizeF(str, sizeF);
    }
}
