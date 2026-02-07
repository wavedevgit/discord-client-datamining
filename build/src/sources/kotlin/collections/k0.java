package kotlin.collections;

import java.util.Iterator;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k0 implements Iterable, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private final Function0 f32103d;

    public k0(Function0 iteratorFactory) {
        Intrinsics.checkNotNullParameter(iteratorFactory, "iteratorFactory");
        this.f32103d = iteratorFactory;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new l0((Iterator) this.f32103d.invoke());
    }
}
