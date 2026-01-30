package j0;

import androidx.core.util.Consumer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements Consumer {

    /* renamed from: a  reason: collision with root package name */
    private Consumer f31812a;

    public void a(Consumer consumer) {
        this.f31812a = consumer;
    }

    @Override // androidx.core.util.Consumer
    public void accept(Object obj) {
        Intrinsics.checkNotNull(this.f31812a, "Listener is not set.");
        this.f31812a.accept(obj);
    }
}
