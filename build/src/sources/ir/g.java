package ir;

import java.io.Serializable;
import kotlin.Lazy;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f31091d;

    public g(Object obj) {
        this.f31091d = obj;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        return this.f31091d;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        return true;
    }

    public String toString() {
        return String.valueOf(getValue());
    }
}
