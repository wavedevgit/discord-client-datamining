package jt;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private int f30487d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f30488e;

        a(SerialDescriptor serialDescriptor) {
            this.f30488e = serialDescriptor;
            this.f30487d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public SerialDescriptor next() {
            SerialDescriptor serialDescriptor = this.f30488e;
            int d10 = serialDescriptor.d();
            int i10 = this.f30487d;
            this.f30487d = i10 - 1;
            return serialDescriptor.g(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f30487d > 0) {
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
        private int f30489d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f30490e;

        b(SerialDescriptor serialDescriptor) {
            this.f30490e = serialDescriptor;
            this.f30489d = serialDescriptor.d();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            SerialDescriptor serialDescriptor = this.f30490e;
            int d10 = serialDescriptor.d();
            int i10 = this.f30489d;
            this.f30489d = i10 - 1;
            return serialDescriptor.e(d10 - i10);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f30489d > 0) {
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
        final /* synthetic */ SerialDescriptor f30491d;

        public c(SerialDescriptor serialDescriptor) {
            this.f30491d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new a(this.f30491d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements Iterable, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SerialDescriptor f30492d;

        public d(SerialDescriptor serialDescriptor) {
            this.f30492d = serialDescriptor;
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return new b(this.f30492d);
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
