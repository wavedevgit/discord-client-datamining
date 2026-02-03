package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.Stack;
import kotlin.reflect.jvm.internal.impl.protobuf.ByteString;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends ByteString {

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f35057r;

    /* renamed from: d  reason: collision with root package name */
    private final int f35058d;

    /* renamed from: e  reason: collision with root package name */
    private final ByteString f35059e;

    /* renamed from: i  reason: collision with root package name */
    private final ByteString f35060i;

    /* renamed from: o  reason: collision with root package name */
    private final int f35061o;

    /* renamed from: p  reason: collision with root package name */
    private final int f35062p;

    /* renamed from: q  reason: collision with root package name */
    private int f35063q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b {

        /* renamed from: a  reason: collision with root package name */
        private final Stack f35064a;

        private b() {
            this.f35064a = new Stack();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public ByteString b(ByteString byteString, ByteString byteString2) {
            c(byteString);
            c(byteString2);
            ByteString byteString3 = (ByteString) this.f35064a.pop();
            while (!this.f35064a.isEmpty()) {
                byteString3 = new c((ByteString) this.f35064a.pop(), byteString3);
            }
            return byteString3;
        }

        private void c(ByteString byteString) {
            if (byteString.e()) {
                e(byteString);
            } else if (byteString instanceof c) {
                c cVar = (c) byteString;
                c(cVar.f35059e);
                c(cVar.f35060i);
            } else {
                String valueOf = String.valueOf(byteString.getClass());
                StringBuilder sb2 = new StringBuilder(valueOf.length() + 49);
                sb2.append("Has a new type of ByteString been created? Found ");
                sb2.append(valueOf);
                throw new IllegalArgumentException(sb2.toString());
            }
        }

        private int d(int i10) {
            int binarySearch = Arrays.binarySearch(c.f35057r, i10);
            if (binarySearch < 0) {
                return (-(binarySearch + 1)) - 1;
            }
            return binarySearch;
        }

        private void e(ByteString byteString) {
            int d10 = d(byteString.size());
            int i10 = c.f35057r[d10 + 1];
            if (!this.f35064a.isEmpty() && ((ByteString) this.f35064a.peek()).size() < i10) {
                int i11 = c.f35057r[d10];
                ByteString byteString2 = (ByteString) this.f35064a.pop();
                while (!this.f35064a.isEmpty() && ((ByteString) this.f35064a.peek()).size() < i11) {
                    byteString2 = new c((ByteString) this.f35064a.pop(), byteString2);
                }
                c cVar = new c(byteString2, byteString);
                while (!this.f35064a.isEmpty()) {
                    if (((ByteString) this.f35064a.peek()).size() >= c.f35057r[d(cVar.size()) + 1]) {
                        break;
                    }
                    cVar = new c((ByteString) this.f35064a.pop(), cVar);
                }
                this.f35064a.push(cVar);
                return;
            }
            this.f35064a.push(byteString);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: kotlin.reflect.jvm.internal.impl.protobuf.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class C0448c implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private final Stack f35065d;

        /* renamed from: e  reason: collision with root package name */
        private kotlin.reflect.jvm.internal.impl.protobuf.b f35066e;

        private kotlin.reflect.jvm.internal.impl.protobuf.b a(ByteString byteString) {
            while (byteString instanceof c) {
                c cVar = (c) byteString;
                this.f35065d.push(cVar);
                byteString = cVar.f35059e;
            }
            return (kotlin.reflect.jvm.internal.impl.protobuf.b) byteString;
        }

        private kotlin.reflect.jvm.internal.impl.protobuf.b b() {
            while (!this.f35065d.isEmpty()) {
                kotlin.reflect.jvm.internal.impl.protobuf.b a10 = a(((c) this.f35065d.pop()).f35060i);
                if (!a10.isEmpty()) {
                    return a10;
                }
            }
            return null;
        }

        @Override // java.util.Iterator
        /* renamed from: c */
        public kotlin.reflect.jvm.internal.impl.protobuf.b next() {
            kotlin.reflect.jvm.internal.impl.protobuf.b bVar = this.f35066e;
            if (bVar != null) {
                this.f35066e = b();
                return bVar;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f35066e != null) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }

        private C0448c(ByteString byteString) {
            this.f35065d = new Stack();
            this.f35066e = a(byteString);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class d implements ByteString.ByteIterator {

        /* renamed from: d  reason: collision with root package name */
        private final C0448c f35067d;

        /* renamed from: e  reason: collision with root package name */
        private ByteString.ByteIterator f35068e;

        /* renamed from: i  reason: collision with root package name */
        int f35069i;

        @Override // java.util.Iterator
        /* renamed from: a */
        public Byte next() {
            return Byte.valueOf(nextByte());
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f35069i > 0) {
                return true;
            }
            return false;
        }

        /* JADX WARN: Type inference failed for: r0v8, types: [kotlin.reflect.jvm.internal.impl.protobuf.ByteString$ByteIterator] */
        @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString.ByteIterator
        public byte nextByte() {
            if (!this.f35068e.hasNext()) {
                this.f35068e = this.f35067d.next().iterator();
            }
            this.f35069i--;
            return this.f35068e.nextByte();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }

        /* JADX WARN: Type inference failed for: r0v2, types: [kotlin.reflect.jvm.internal.impl.protobuf.ByteString$ByteIterator] */
        private d() {
            C0448c c0448c = new C0448c(c.this);
            this.f35067d = c0448c;
            this.f35068e = c0448c.next().iterator();
            this.f35069i = c.this.size();
        }
    }

    static {
        ArrayList arrayList = new ArrayList();
        int i10 = 1;
        int i11 = 1;
        while (i10 > 0) {
            arrayList.add(Integer.valueOf(i10));
            int i12 = i11 + i10;
            i11 = i10;
            i10 = i12;
        }
        arrayList.add(Integer.MAX_VALUE);
        f35057r = new int[arrayList.size()];
        int i13 = 0;
        while (true) {
            int[] iArr = f35057r;
            if (i13 < iArr.length) {
                iArr[i13] = ((Integer) arrayList.get(i13)).intValue();
                i13++;
            } else {
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ByteString o(ByteString byteString, ByteString byteString2) {
        c cVar;
        if (byteString instanceof c) {
            cVar = (c) byteString;
        } else {
            cVar = null;
        }
        if (byteString2.size() == 0) {
            return byteString;
        }
        if (byteString.size() == 0) {
            return byteString2;
        }
        int size = byteString.size() + byteString2.size();
        if (size < 128) {
            return p(byteString, byteString2);
        }
        if (cVar != null && cVar.f35060i.size() + byteString2.size() < 128) {
            return new c(cVar.f35059e, p(cVar.f35060i, byteString2));
        } else if (cVar != null && cVar.f35059e.d() > cVar.f35060i.d() && cVar.d() > byteString2.d()) {
            return new c(cVar.f35059e, new c(cVar.f35060i, byteString2));
        } else {
            if (size < f35057r[Math.max(byteString.d(), byteString2.d()) + 1]) {
                return new b().b(byteString, byteString2);
            }
            return new c(byteString, byteString2);
        }
    }

    private static kotlin.reflect.jvm.internal.impl.protobuf.b p(ByteString byteString, ByteString byteString2) {
        int size = byteString.size();
        int size2 = byteString2.size();
        byte[] bArr = new byte[size + size2];
        byteString.copyTo(bArr, 0, 0, size);
        byteString2.copyTo(bArr, 0, size, size2);
        return new kotlin.reflect.jvm.internal.impl.protobuf.b(bArr);
    }

    private boolean q(ByteString byteString) {
        boolean m10;
        C0448c c0448c = new C0448c(this);
        kotlin.reflect.jvm.internal.impl.protobuf.b bVar = (kotlin.reflect.jvm.internal.impl.protobuf.b) c0448c.next();
        C0448c c0448c2 = new C0448c(byteString);
        kotlin.reflect.jvm.internal.impl.protobuf.b bVar2 = (kotlin.reflect.jvm.internal.impl.protobuf.b) c0448c2.next();
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        while (true) {
            int size = bVar.size() - i10;
            int size2 = bVar2.size() - i11;
            int min = Math.min(size, size2);
            if (i10 == 0) {
                m10 = bVar.m(bVar2, i11, min);
            } else {
                m10 = bVar2.m(bVar, i10, min);
            }
            if (!m10) {
                return false;
            }
            i12 += min;
            int i13 = this.f35058d;
            if (i12 >= i13) {
                if (i12 == i13) {
                    return true;
                }
                throw new IllegalStateException();
            }
            if (min == size) {
                bVar = (kotlin.reflect.jvm.internal.impl.protobuf.b) c0448c.next();
                i10 = 0;
            } else {
                i10 += min;
            }
            if (min == size2) {
                bVar2 = (kotlin.reflect.jvm.internal.impl.protobuf.b) c0448c2.next();
                i11 = 0;
            } else {
                i11 += min;
            }
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected void c(byte[] bArr, int i10, int i11, int i12) {
        int i13 = i10 + i12;
        int i14 = this.f35061o;
        if (i13 <= i14) {
            this.f35059e.c(bArr, i10, i11, i12);
        } else if (i10 >= i14) {
            this.f35060i.c(bArr, i10 - i14, i11, i12);
        } else {
            int i15 = i14 - i10;
            this.f35059e.c(bArr, i10, i11, i15);
            this.f35060i.c(bArr, 0, i11 + i15, i12 - i15);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int d() {
        return this.f35062p;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected boolean e() {
        if (this.f35058d >= f35057r[this.f35062p]) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        int h10;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof ByteString)) {
            return false;
        }
        ByteString byteString = (ByteString) obj;
        if (this.f35058d != byteString.size()) {
            return false;
        }
        if (this.f35058d == 0) {
            return true;
        }
        if (this.f35063q != 0 && (h10 = byteString.h()) != 0 && this.f35063q != h10) {
            return false;
        }
        return q(byteString);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int f(int i10, int i11, int i12) {
        int i13 = i11 + i12;
        int i14 = this.f35061o;
        if (i13 <= i14) {
            return this.f35059e.f(i10, i11, i12);
        }
        if (i11 >= i14) {
            return this.f35060i.f(i10, i11 - i14, i12);
        }
        int i15 = i14 - i11;
        return this.f35060i.f(this.f35059e.f(i10, i11, i15), 0, i12 - i15);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int g(int i10, int i11, int i12) {
        int i13 = i11 + i12;
        int i14 = this.f35061o;
        if (i13 <= i14) {
            return this.f35059e.g(i10, i11, i12);
        }
        if (i11 >= i14) {
            return this.f35060i.g(i10, i11 - i14, i12);
        }
        int i15 = i14 - i11;
        return this.f35060i.g(this.f35059e.g(i10, i11, i15), 0, i12 - i15);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int h() {
        return this.f35063q;
    }

    public int hashCode() {
        int i10 = this.f35063q;
        if (i10 == 0) {
            int i11 = this.f35058d;
            i10 = f(i11, 0, i11);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f35063q = i10;
        }
        return i10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public boolean isValidUtf8() {
        int g10 = this.f35059e.g(0, 0, this.f35061o);
        ByteString byteString = this.f35060i;
        if (byteString.g(g10, 0, byteString.size()) != 0) {
            return false;
        }
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    void j(OutputStream outputStream, int i10, int i11) {
        int i12 = i10 + i11;
        int i13 = this.f35061o;
        if (i12 <= i13) {
            this.f35059e.j(outputStream, i10, i11);
        } else if (i10 >= i13) {
            this.f35060i.j(outputStream, i10 - i13, i11);
        } else {
            int i14 = i13 - i10;
            this.f35059e.j(outputStream, i10, i14);
            this.f35060i.j(outputStream, 0, i11 - i14);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public CodedInputStream newCodedInput() {
        return CodedInputStream.newInstance(new e());
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public int size() {
        return this.f35058d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public String toString(String str) {
        return new String(toByteArray(), str);
    }

    private c(ByteString byteString, ByteString byteString2) {
        this.f35063q = 0;
        this.f35059e = byteString;
        this.f35060i = byteString2;
        int size = byteString.size();
        this.f35061o = size;
        this.f35058d = size + byteString2.size();
        this.f35062p = Math.max(byteString.d(), byteString2.d()) + 1;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString, java.lang.Iterable
    public Iterator<Byte> iterator() {
        return new d();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class e extends InputStream {

        /* renamed from: d  reason: collision with root package name */
        private C0448c f35071d;

        /* renamed from: e  reason: collision with root package name */
        private kotlin.reflect.jvm.internal.impl.protobuf.b f35072e;

        /* renamed from: i  reason: collision with root package name */
        private int f35073i;

        /* renamed from: o  reason: collision with root package name */
        private int f35074o;

        /* renamed from: p  reason: collision with root package name */
        private int f35075p;

        /* renamed from: q  reason: collision with root package name */
        private int f35076q;

        public e() {
            h();
        }

        private void a() {
            if (this.f35072e != null) {
                int i10 = this.f35074o;
                int i11 = this.f35073i;
                if (i10 == i11) {
                    this.f35075p += i11;
                    this.f35074o = 0;
                    if (this.f35071d.hasNext()) {
                        kotlin.reflect.jvm.internal.impl.protobuf.b next = this.f35071d.next();
                        this.f35072e = next;
                        this.f35073i = next.size();
                        return;
                    }
                    this.f35072e = null;
                    this.f35073i = 0;
                }
            }
        }

        private void h() {
            C0448c c0448c = new C0448c(c.this);
            this.f35071d = c0448c;
            kotlin.reflect.jvm.internal.impl.protobuf.b next = c0448c.next();
            this.f35072e = next;
            this.f35073i = next.size();
            this.f35074o = 0;
            this.f35075p = 0;
        }

        private int l(byte[] bArr, int i10, int i11) {
            int i12 = i11;
            while (true) {
                if (i12 <= 0) {
                    break;
                }
                a();
                if (this.f35072e == null) {
                    if (i12 == i11) {
                        return -1;
                    }
                } else {
                    int min = Math.min(this.f35073i - this.f35074o, i12);
                    if (bArr != null) {
                        this.f35072e.copyTo(bArr, this.f35074o, i10, min);
                        i10 += min;
                    }
                    this.f35074o += min;
                    i12 -= min;
                }
            }
            return i11 - i12;
        }

        @Override // java.io.InputStream
        public int available() {
            return c.this.size() - (this.f35075p + this.f35074o);
        }

        @Override // java.io.InputStream
        public void mark(int i10) {
            this.f35076q = this.f35075p + this.f35074o;
        }

        @Override // java.io.InputStream
        public boolean markSupported() {
            return true;
        }

        @Override // java.io.InputStream
        public int read(byte[] bArr, int i10, int i11) {
            bArr.getClass();
            if (i10 >= 0 && i11 >= 0 && i11 <= bArr.length - i10) {
                return l(bArr, i10, i11);
            }
            throw new IndexOutOfBoundsException();
        }

        @Override // java.io.InputStream
        public synchronized void reset() {
            h();
            l(null, 0, this.f35076q);
        }

        @Override // java.io.InputStream
        public long skip(long j10) {
            if (j10 >= 0) {
                if (j10 > 2147483647L) {
                    j10 = 2147483647L;
                }
                return l(null, 0, (int) j10);
            }
            throw new IndexOutOfBoundsException();
        }

        @Override // java.io.InputStream
        public int read() {
            a();
            kotlin.reflect.jvm.internal.impl.protobuf.b bVar = this.f35072e;
            if (bVar == null) {
                return -1;
            }
            int i10 = this.f35074o;
            this.f35074o = i10 + 1;
            return bVar.k(i10) & 255;
        }
    }
}
