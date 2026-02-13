package st;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f48940d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f48941e;

        a(SerialDescriptor serialDescriptor) {
            this.f48941e = serialDescriptor;
            this.f48940d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public SerialDescriptor next() {
            SerialDescriptor serialDescriptor = this.f48941e;
            int d10 = serialDescriptor.d();
            int i10 = this.f48940d;
            this.f48940d = i10 - 1;
            return serialDescriptor.g(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f48940d > 0) {
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
        private int f48942d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f48943e;

        b(SerialDescriptor serialDescriptor) {
            this.f48943e = serialDescriptor;
            this.f48942d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            SerialDescriptor serialDescriptor = this.f48943e;
            int d10 = serialDescriptor.d();
            int i10 = this.f48942d;
            this.f48942d = i10 - 1;
            return serialDescriptor.e(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f48942d > 0) {
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
        final /* synthetic */ SerialDescriptor f48944d;

        public c(SerialDescriptor serialDescriptor) {
            this.f48944d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new a(this.f48944d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Iterable, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f48945d;

        public d(SerialDescriptor serialDescriptor) {
            this.f48945d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new b(this.f48945d);
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
