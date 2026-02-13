package ls;

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
    private final BufferedReader f36604a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private String f36605d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f36606e;

        a() {
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            if (hasNext()) {
                String str = this.f36605d;
                this.f36605d = null;
                Intrinsics.checkNotNull(str);
                return str;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36605d == null && !this.f36606e) {
                String readLine = o.this.f36604a.readLine();
                this.f36605d = readLine;
                if (readLine == null) {
                    this.f36606e = true;
                }
            }
            if (this.f36605d != null) {
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
        this.f36604a = reader;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
