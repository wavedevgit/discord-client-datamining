package g3;

import androidx.fragment.app.Fragment;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final Fragment f23649d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(Fragment fragment, String str) {
        super(str);
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        this.f23649d = fragment;
    }

    public final Fragment a() {
        return this.f23649d;
    }
}
