package zr;

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
    private final BufferedReader f56213a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private String f56214d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f56215e;

        a() {
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            if (hasNext()) {
                String str = this.f56214d;
                this.f56214d = null;
                Intrinsics.checkNotNull(str);
                return str;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f56214d == null && !this.f56215e) {
                String readLine = o.this.f56213a.readLine();
                this.f56214d = readLine;
                if (readLine == null) {
                    this.f56215e = true;
                }
            }
            if (this.f56214d != null) {
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
        this.f56213a = reader;
    }

    @Override // kotlin.sequences.Sequence
    public Iterator iterator() {
        return new a();
    }
}
