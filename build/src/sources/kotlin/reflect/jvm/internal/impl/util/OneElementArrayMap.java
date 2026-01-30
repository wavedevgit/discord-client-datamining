package kotlin.reflect.jvm.internal.impl.util;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class OneElementArrayMap<T> extends ArrayMap<T> {

    /* renamed from: d  reason: collision with root package name */
    private final Object f36082d;

    /* renamed from: e  reason: collision with root package name */
    private final int f36083e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OneElementArrayMap(@NotNull T value, int i10) {
        super(null);
        Intrinsics.checkNotNullParameter(value, "value");
        this.f36082d = value;
        this.f36083e = i10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap
    public T get(int i10) {
        if (i10 == this.f36083e) {
            return (T) this.f36082d;
        }
        return null;
    }

    public final int getIndex() {
        return this.f36083e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap
    public int getSize() {
        return 1;
    }

    @NotNull
    public final T getValue() {
        return (T) this.f36082d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap, java.lang.Iterable
    @NotNull
    public Iterator<T> iterator() {
        return new OneElementArrayMap$iterator$1(this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap
    public void set(int i10, @NotNull T value) {
        Intrinsics.checkNotNullParameter(value, "value");
        throw new IllegalStateException();
    }
}
