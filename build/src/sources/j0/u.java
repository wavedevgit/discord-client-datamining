package j0;

import androidx.core.util.Consumer;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements Consumer {

    /* renamed from: a  reason: collision with root package name */
    private Consumer f30770a;

    public void a(Consumer consumer) {
        this.f30770a = consumer;
    }

    @Override // androidx.core.util.Consumer
    public void accept(Object obj) {
        Intrinsics.checkNotNull(this.f30770a, "Listener is not set.");
        this.f30770a.accept(obj);
    }
}
