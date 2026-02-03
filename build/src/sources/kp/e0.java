package kp;

import androidx.recyclerview.widget.RecyclerView;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    public static final e0 f36235a = new e0();

    /* renamed from: b  reason: collision with root package name */
    private static AtomicInteger f36236b = new AtomicInteger(0);

    private e0() {
    }

    public final d0 a() {
        return new d0((f36236b.getAndIncrement() * RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) + 268435456);
    }
}
