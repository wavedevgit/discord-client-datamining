package tr;

import java.io.BufferedReader;
import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlin.sequences.Sequence;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements Sequence {

    /* renamed from: a  reason: collision with root package name */
    private final BufferedReader f49867a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private String f49868d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f49869e;

        a() {
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            if (hasNext()) {
                String str = this.f49868d;
                this.f49868d = null;
                Intrinsics.checkNotNull(str);
                return str;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f49868d == null && !this.f49869e) {
                String readLine = o.this.f49867a.readLine();
                this.f49868d = readLine;
                if (readLine == null) {
                    this.f49869e = true;
                }
            }
            if (this.f49868d != null) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public o(BufferedReader reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        this.f49867a = reader;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
