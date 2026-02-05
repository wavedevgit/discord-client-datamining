package j0;

import androidx.core.util.Consumer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements Consumer {

    /* renamed from: a  reason: collision with root package name */
    private Consumer f30695a;

    public void a(Consumer consumer) {
        this.f30695a = consumer;
    }

    @Override // androidx.core.util.Consumer
    public void accept(Object obj) {
        Intrinsics.checkNotNull(this.f30695a, "Listener is not set.");
        this.f30695a.accept(obj);
    }
}
