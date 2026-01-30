package zs;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f56110d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f56111e;

        a(SerialDescriptor serialDescriptor) {
            this.f56111e = serialDescriptor;
            this.f56110d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public SerialDescriptor next() {
            SerialDescriptor serialDescriptor = this.f56111e;
            int d10 = serialDescriptor.d();
            int i10 = this.f56110d;
            this.f56110d = i10 - 1;
            return serialDescriptor.g(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f56110d > 0) {
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
        private int f56112d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f56113e;

        b(SerialDescriptor serialDescriptor) {
            this.f56113e = serialDescriptor;
            this.f56112d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            SerialDescriptor serialDescriptor = this.f56113e;
            int d10 = serialDescriptor.d();
            int i10 = this.f56112d;
            this.f56112d = i10 - 1;
            return serialDescriptor.e(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f56112d > 0) {
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
        final /* synthetic */ SerialDescriptor f56114d;

        public c(SerialDescriptor serialDescriptor) {
            this.f56114d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new a(this.f56114d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Iterable, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f56115d;

        public d(SerialDescriptor serialDescriptor) {
            this.f56115d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new b(this.f56115d);
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
