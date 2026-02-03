package mp;

import androidx.recyclerview.widget.RecyclerView;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    public static final e0 f38962a = new e0();

    /* renamed from: b  reason: collision with root package name */
    private static AtomicInteger f38963b = new AtomicInteger(0);

    private e0() {
    }

    public final d0 a() {
        return new d0((f38963b.getAndIncrement() * RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) + 268435456);
    }
}
