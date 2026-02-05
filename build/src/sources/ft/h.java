package ft;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f23486d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f23487e;

        a(SerialDescriptor serialDescriptor) {
            this.f23487e = serialDescriptor;
            this.f23486d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public SerialDescriptor next() {
            SerialDescriptor serialDescriptor = this.f23487e;
            int d10 = serialDescriptor.d();
            int i10 = this.f23486d;
            this.f23486d = i10 - 1;
            return serialDescriptor.g(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f23486d > 0) {
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
        private int f23488d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f23489e;

        b(SerialDescriptor serialDescriptor) {
            this.f23489e = serialDescriptor;
            this.f23488d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            SerialDescriptor serialDescriptor = this.f23489e;
            int d10 = serialDescriptor.d();
            int i10 = this.f23488d;
            this.f23488d = i10 - 1;
            return serialDescriptor.e(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f23488d > 0) {
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
        final /* synthetic */ SerialDescriptor f23490d;

        public c(SerialDescriptor serialDescriptor) {
            this.f23490d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new a(this.f23490d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Iterable, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f23491d;

        public d(SerialDescriptor serialDescriptor) {
            this.f23491d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new b(this.f23491d);
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
