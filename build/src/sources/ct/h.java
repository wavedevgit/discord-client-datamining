package ct;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f19845d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f19846e;

        a(SerialDescriptor serialDescriptor) {
            this.f19846e = serialDescriptor;
            this.f19845d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public SerialDescriptor next() {
            SerialDescriptor serialDescriptor = this.f19846e;
            int d10 = serialDescriptor.d();
            int i10 = this.f19845d;
            this.f19845d = i10 - 1;
            return serialDescriptor.g(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f19845d > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f19847d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f19848e;

        b(SerialDescriptor serialDescriptor) {
            this.f19848e = serialDescriptor;
            this.f19847d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            SerialDescriptor serialDescriptor = this.f19848e;
            int d10 = serialDescriptor.d();
            int i10 = this.f19847d;
            this.f19847d = i10 - 1;
            return serialDescriptor.e(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f19847d > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements Iterable, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f19849d;

        public c(SerialDescriptor serialDescriptor) {
            this.f19849d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new a(this.f19849d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Iterable, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f19850d;

        public d(SerialDescriptor serialDescriptor) {
            this.f19850d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new b(this.f19850d);
        }
    }

    public static final Iterable a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        return new c(serialDescriptor);
    }

    public static final Iterable b(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        return new d(serialDescriptor);
    }
}
