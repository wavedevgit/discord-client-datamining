package kotlin.reflect.jvm.internal.impl.util;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractArrayMapOwner<K, V> implements Iterable<V>, KMappedMarker {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractArrayMapAccessor<K, V, T extends V> {

        /* renamed from: a  reason: collision with root package name */
        private final int f34755a;

        public AbstractArrayMapAccessor(int i10) {
            this.f34755a = i10;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public final Object a(AbstractArrayMapOwner thisRef) {
            Intrinsics.checkNotNullParameter(thisRef, "thisRef");
            return thisRef.b().get(this.f34755a);
        }
    }

    protected abstract ArrayMap b();

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract TypeRegistry c();

    protected abstract void d(String str, Object obj);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void e(KClass tClass, Object value) {
        Intrinsics.checkNotNullParameter(tClass, "tClass");
        Intrinsics.checkNotNullParameter(value, "value");
        String qualifiedName = tClass.getQualifiedName();
        Intrinsics.checkNotNull(qualifiedName);
        d(qualifiedName, value);
    }

    public final boolean isEmpty() {
        if (b().getSize() == 0) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    @NotNull
    public final Iterator<V> iterator() {
        return b().iterator();
    }
}
