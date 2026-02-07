package kotlin.text;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g implements Iterator, KMappedMarker {

    /* renamed from: q  reason: collision with root package name */
    private static final a f35023q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final CharSequence f35024d;

    /* renamed from: e  reason: collision with root package name */
    private int f35025e;

    /* renamed from: i  reason: collision with root package name */
    private int f35026i;

    /* renamed from: o  reason: collision with root package name */
    private int f35027o;

    /* renamed from: p  reason: collision with root package name */
    private int f35028p;

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
        this.f35024d = string;
    }

    @Override // java.util.Iterator
    /* renamed from: a */
    public String next() {
        if (hasNext()) {
            this.f35025e = 0;
            int i10 = this.f35027o;
            int i11 = this.f35026i;
            this.f35026i = this.f35028p + i10;
            return this.f35024d.subSequence(i11, i10).toString();
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        int i10;
        int i11 = this.f35025e;
        if (i11 != 0) {
            if (i11 != 1) {
                return false;
            }
            return true;
        }
        int i12 = 2;
        if (this.f35028p < 0) {
            this.f35025e = 2;
            return false;
        }
        int length = this.f35024d.length();
        int length2 = this.f35024d.length();
        for (int i13 = this.f35026i; i13 < length2; i13++) {
            char charAt = this.f35024d.charAt(i13);
            if (charAt == '\n' || charAt == '\r') {
                i12 = (charAt == '\r' && (i10 = i13 + 1) < this.f35024d.length() && this.f35024d.charAt(i10) == '\n') ? 1 : 1;
                length = i13;
                this.f35025e = 1;
                this.f35028p = i12;
                this.f35027o = length;
                return true;
            }
        }
        i12 = -1;
        this.f35025e = 1;
        this.f35028p = i12;
        this.f35027o = length;
        return true;
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
