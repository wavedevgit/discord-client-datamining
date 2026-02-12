package kotlin.text;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g implements Iterator, KMappedMarker {

    /* renamed from: q  reason: collision with root package name */
    private static final a f34955q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final CharSequence f34956d;

    /* renamed from: e  reason: collision with root package name */
    private int f34957e;

    /* renamed from: i  reason: collision with root package name */
    private int f34958i;

    /* renamed from: o  reason: collision with root package name */
    private int f34959o;

    /* renamed from: p  reason: collision with root package name */
    private int f34960p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g(CharSequence string) {
        Intrinsics.checkNotNullParameter(string, "string");
        this.f34956d = string;
    }

    @Override // java.util.Iterator
    /* renamed from: a */
    public String next() {
        if (hasNext()) {
            this.f34957e = 0;
            int i10 = this.f34959o;
            int i11 = this.f34958i;
            this.f34958i = this.f34960p + i10;
            return this.f34956d.subSequence(i11, i10).toString();
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        int i10;
        int i11 = this.f34957e;
        if (i11 != 0) {
            if (i11 != 1) {
                return false;
            }
            return true;
        }
        int i12 = 2;
        if (this.f34960p < 0) {
            this.f34957e = 2;
            return false;
        }
        int length = this.f34956d.length();
        int length2 = this.f34956d.length();
        for (int i13 = this.f34958i; i13 < length2; i13++) {
            char charAt = this.f34956d.charAt(i13);
            if (charAt == '\n' || charAt == '\r') {
                i12 = (charAt == '\r' && (i10 = i13 + 1) < this.f34956d.length() && this.f34956d.charAt(i10) == '\n') ? 1 : 1;
                length = i13;
                this.f34957e = 1;
                this.f34960p = i12;
                this.f34959o = length;
                return true;
            }
        }
        i12 = -1;
        this.f34957e = 1;
        this.f34960p = i12;
        this.f34959o = length;
        return true;
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
