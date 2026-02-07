package j0;

import androidx.core.util.Consumer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements Consumer {

    /* renamed from: a  reason: collision with root package name */
    private Consumer f29716a;

    public void a(Consumer consumer) {
        this.f29716a = consumer;
    }

    @Override // androidx.core.util.Consumer
    public void accept(Object obj) {
        Intrinsics.checkNotNull(this.f29716a, "Listener is not set.");
        this.f29716a.accept(obj);
    }
}
